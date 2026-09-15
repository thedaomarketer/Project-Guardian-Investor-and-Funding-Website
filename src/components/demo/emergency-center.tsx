import { ShieldAlert, Share2 } from "lucide-react";
import type { EmergencyContact } from "@/lib/content/demo-scenarios";
import { cn } from "@/lib/utils";

const sharingStyles: Record<EmergencyContact["sharing"], string> = {
  "not shared": "bg-surface-strong text-muted",
  invited: "bg-warning-soft text-warning",
  viewing: "bg-success-soft text-success",
};

export function EmergencyCenter({ contacts }: { contacts: EmergencyContact[] }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-danger/30 bg-danger-soft p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-danger">
        <ShieldAlert className="h-4.5 w-4.5" aria-hidden />
        Emergency center
      </div>
      <p className="mt-1.5 text-xs text-[var(--foreground)]/70">
        Time-limited, revocable location sharing with contacts Demo Guardian chooses.
      </p>
      <ul className="mt-4 space-y-2.5">
        {contacts.map((c) => (
          <li
            key={c.name}
            className="flex items-center justify-between rounded-[var(--radius-sm)] bg-background px-3 py-2.5"
          >
            <div>
              <div className="text-sm font-medium">{c.name}</div>
              <div className="text-xs text-muted">{c.relation}</div>
            </div>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium capitalize",
                sharingStyles[c.sharing]
              )}
            >
              <Share2 className="h-3 w-3" aria-hidden />
              {c.sharing}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
