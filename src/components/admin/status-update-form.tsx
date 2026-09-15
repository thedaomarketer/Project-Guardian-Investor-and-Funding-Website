"use client";

import { useActionState } from "react";
import {
  updateInquiryStatus,
  updateWaitlistStatus,
  type AdminActionState,
} from "@/app/actions/admin";
import { Select } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";

const initialState: AdminActionState = { status: "idle" };

export function StatusUpdateForm({
  id,
  kind,
  currentStatus,
  statuses,
}: {
  id: string;
  kind: "inquiry" | "waitlist";
  currentStatus: string;
  statuses: readonly string[];
}) {
  const action = kind === "inquiry" ? updateInquiryStatus : updateWaitlistStatus;
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
      <input type="hidden" name="id" value={id} />
      <Select
        name="status"
        defaultValue={currentStatus}
        disabled={isPending}
        className="w-auto px-2 py-1.5 text-xs"
      >
        {statuses.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <Button
        type="submit"
        size="sm"
        variant="outline"
        disabled={isPending}
        className="px-3 py-1 text-xs"
      >
        {isPending ? "Saving…" : "Update"}
      </Button>
      {state.status === "error" && state.message && (
        <span role="alert" className="text-xs text-danger">
          {state.message}
        </span>
      )}
    </form>
  );
}
