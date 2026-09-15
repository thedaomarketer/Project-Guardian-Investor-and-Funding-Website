"use server";

import { headers } from "next/headers";
import { earlyAccessSchema } from "@/lib/validation/contact";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { getClientIp } from "@/lib/get-client-ip";

export type EarlyAccessState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export async function submitEarlyAccess(
  _prevState: EarlyAccessState,
  formData: FormData
): Promise<EarlyAccessState> {
  const raw = {
    email: formData.get("email"),
    country: formData.get("country") ?? "",
    isParentOrCaregiver: formData.get("isParentOrCaregiver") || undefined,
    numberOfChildren: formData.get("numberOfChildren") ?? "",
    ageRange: formData.get("ageRange") ?? "",
    preferredFormFactor: formData.get("preferredFormFactor") ?? "",
    interestArea: formData.get("interestArea") ?? "",
    consent: formData.get("consent") === "on",
  };

  const parsed = earlyAccessSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  if (!isSupabaseConfigured()) {
    return {
      status: "error",
      message:
        "This form is not yet connected to a database. Please check back soon.",
    };
  }

  try {
    const supabase = await createClient();
    const userAgent = (await headers()).get("user-agent") ?? undefined;
    const ipAddress = await getClientIp();

    const { error } = await supabase.from("early_access_signups").insert({
      email: parsed.data.email,
      country: parsed.data.country || null,
      is_parent_or_caregiver:
        parsed.data.isParentOrCaregiver === undefined
          ? null
          : parsed.data.isParentOrCaregiver === "yes",
      number_of_children: parsed.data.numberOfChildren || null,
      age_range: parsed.data.ageRange || null,
      preferred_form_factor: parsed.data.preferredFormFactor || null,
      interest_area: parsed.data.interestArea || null,
      consent: parsed.data.consent,
      user_agent: userAgent,
      ip_address: ipAddress,
    });

    if (error) {
      if (error.code === "23505") {
        return {
          status: "error",
          message: "That email is already on the waitlist.",
          fieldErrors: { email: "Already on the waitlist" },
        };
      }
      if (error.message?.includes("rate_limited")) {
        return {
          status: "error",
          message: "Too many submissions from this network recently. Please try again later.",
        };
      }
      console.error("submitEarlyAccess insert error", error);
      return {
        status: "error",
        message: "Something went wrong joining the waitlist. Please try again.",
      };
    }

    return { status: "success", message: "You're on the list. We'll be in touch." };
  } catch (err) {
    console.error("submitEarlyAccess unexpected error", err);
    return {
      status: "error",
      message: "Something went wrong joining the waitlist. Please try again.",
    };
  }
}
