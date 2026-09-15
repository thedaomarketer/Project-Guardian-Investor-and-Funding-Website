"use server";

import { headers } from "next/headers";
import { contactFormSchema } from "@/lib/validation/contact";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { getClientIp } from "@/lib/get-client-ip";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export async function submitContactInquiry(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    inquiryType: formData.get("inquiryType"),
    name: formData.get("name"),
    email: formData.get("email"),
    organization: formData.get("organization") ?? "",
    investorType: formData.get("investorType") ?? "",
    investmentRange: formData.get("investmentRange") ?? "",
    message: formData.get("message"),
    linkedinUrl: formData.get("linkedinUrl") ?? "",
    phone: formData.get("phone") ?? "",
    consent: formData.get("consent") === "on",
  };

  const parsed = contactFormSchema.safeParse(raw);

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
        "This form is not yet connected to a database. Please email hello@projectguardian.example directly for now.",
    };
  }

  try {
    const supabase = await createClient();
    const userAgent = (await headers()).get("user-agent") ?? undefined;
    const ipAddress = await getClientIp();

    const { error } = await supabase.from("contact_inquiries").insert({
      inquiry_type: parsed.data.inquiryType,
      name: parsed.data.name,
      email: parsed.data.email,
      organization: parsed.data.organization || null,
      investor_type: parsed.data.investorType || null,
      investment_range: parsed.data.investmentRange || null,
      message: parsed.data.message,
      linkedin_url: parsed.data.linkedinUrl || null,
      phone: parsed.data.phone || null,
      consent: parsed.data.consent,
      user_agent: userAgent,
      ip_address: ipAddress,
    });

    if (error) {
      if (error.message?.includes("rate_limited")) {
        return {
          status: "error",
          message: "Too many submissions from this network recently. Please try again later.",
        };
      }
      console.error("submitContactInquiry insert error", error);
      return {
        status: "error",
        message: "Something went wrong submitting your inquiry. Please try again.",
      };
    }

    return { status: "success", message: "Thanks — your inquiry has been received." };
  } catch (err) {
    console.error("submitContactInquiry unexpected error", err);
    return {
      status: "error",
      message: "Something went wrong submitting your inquiry. Please try again.",
    };
  }
}
