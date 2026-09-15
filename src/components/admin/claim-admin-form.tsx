"use client";

import { useActionState } from "react";
import { Loader2 } from "lucide-react";
import { claimAdminAccess, type AdminActionState } from "@/app/actions/admin";
import { Button } from "@/components/ui/button";

const initialState: AdminActionState = { status: "idle" };

export function ClaimAdminForm() {
  const [state, formAction, isPending] = useActionState(claimAdminAccess, initialState);

  if (state.status === "success") {
    return (
      <p className="text-sm text-[var(--success)]">
        {state.message ?? "Admin access claimed."}
      </p>
    );
  }

  return (
    <form action={formAction}>
      <Button type="submit" disabled={isPending}>
        {isPending && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {isPending ? "Claiming…" : "Claim admin access"}
      </Button>
      {state.status === "error" && state.message && (
        <p role="alert" className="mt-3 text-sm text-danger">
          {state.message}
        </p>
      )}
    </form>
  );
}
