"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";

export type AdminActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const inquiryStatusSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(["new", "reviewed", "archived"]),
});

const waitlistStatusSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(["new", "contacted", "archived"]),
});

/**
 * One-time self-bootstrap: the first authenticated user to submit this claims
 * admin access. Relies entirely on the `admins` table RLS policy (insert
 * allowed only when the table is empty) as the real security boundary — this
 * action just surfaces a friendly message instead of a raw Postgres error.
 */
/* eslint-disable @typescript-eslint/no-unused-vars -- both params required by useActionState's action signature */
export async function claimAdminAccess(
  _prevState: AdminActionState,
  _formData: FormData
): Promise<AdminActionState> {
  /* eslint-enable @typescript-eslint/no-unused-vars */
  if (!isSupabaseConfigured()) {
    return {
      status: "error",
      message: "This app is not yet connected to a database.",
    };
  }

  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { status: "error", message: "You must be signed in to claim admin access." };
    }

    const { error } = await supabase.from("admins").insert({
      user_id: user.id,
      email: user.email ?? "",
    });

    if (error) {
      console.error("claimAdminAccess insert error", error);
      if (error.code === "23505") {
        // Row already exists for this user (e.g. a duplicate submission).
        revalidatePath("/admin");
        return { status: "success", message: "You already have admin access." };
      }
      return {
        status: "error",
        message:
          "Admin access has already been claimed by another account. Contact your existing admin to be added.",
      };
    }

    revalidatePath("/admin");
    return { status: "success", message: "Admin access claimed." };
  } catch (err) {
    console.error("claimAdminAccess unexpected error", err);
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}

export async function updateInquiryStatus(
  _prevState: AdminActionState,
  formData: FormData
): Promise<AdminActionState> {
  const parsed = inquiryStatusSchema.safeParse({
    id: formData.get("id"),
    status: formData.get("status"),
  });

  if (!parsed.success) {
    return { status: "error", message: "Invalid update request." };
  }

  if (!isSupabaseConfigured()) {
    return { status: "error", message: "This app is not yet connected to a database." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("contact_inquiries")
      .update({ status: parsed.data.status })
      .eq("id", parsed.data.id);

    if (error) {
      console.error("updateInquiryStatus error", error);
      return { status: "error", message: "Could not update this inquiry. Please try again." };
    }

    revalidatePath("/admin");
    return { status: "success", message: "Status updated." };
  } catch (err) {
    console.error("updateInquiryStatus unexpected error", err);
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}

export async function updateWaitlistStatus(
  _prevState: AdminActionState,
  formData: FormData
): Promise<AdminActionState> {
  const parsed = waitlistStatusSchema.safeParse({
    id: formData.get("id"),
    status: formData.get("status"),
  });

  if (!parsed.success) {
    return { status: "error", message: "Invalid update request." };
  }

  if (!isSupabaseConfigured()) {
    return { status: "error", message: "This app is not yet connected to a database." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("early_access_signups")
      .update({ status: parsed.data.status })
      .eq("id", parsed.data.id);

    if (error) {
      console.error("updateWaitlistStatus error", error);
      return { status: "error", message: "Could not update this signup. Please try again." };
    }

    revalidatePath("/admin");
    return { status: "success", message: "Status updated." };
  } catch (err) {
    console.error("updateWaitlistStatus unexpected error", err);
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
