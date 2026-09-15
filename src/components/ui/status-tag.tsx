import { cn } from "@/lib/utils";

export type BuildStatus =
  | "concept"
  | "planned"
  | "prototype"
  | "in-development"
  | "under-validation"
  | "future";

const labels: Record<BuildStatus, string> = {
  concept: "Concept",
  planned: "Planned",
  prototype: "Prototype",
  "in-development": "In Development",
  "under-validation": "Under Validation",
  future: "Future Roadmap",
};

const styles: Record<BuildStatus, string> = {
  concept: "bg-surface-strong text-muted border-border",
  planned: "bg-accent-soft text-[var(--accent-strong)] border-transparent",
  prototype: "bg-warning-soft text-warning border-transparent",
  "in-development": "bg-warning-soft text-warning border-transparent",
  "under-validation": "bg-surface-strong text-muted border-border",
  future: "bg-surface-strong text-muted border-border",
};

export function StatusTag({
  status,
  className,
}: {
  status: BuildStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide uppercase",
        styles[status],
        className
      )}
    >
      {labels[status]}
    </span>
  );
}

export function DemoModeBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-transparent bg-[var(--danger-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-danger uppercase",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-danger" aria-hidden />
      Demo mode — simulated data
    </span>
  );
}
