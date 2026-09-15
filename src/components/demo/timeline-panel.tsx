import type { DemoScenario } from "@/lib/content/demo-scenarios";

export function TimelinePanel({ scenario }: { scenario: DemoScenario }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">
        {scenario.severity === "critical" ? "Emergency timeline" : "Recent activity"}
      </h3>
      <ol className="mt-3 space-y-4 border-l border-border pl-4">
        {scenario.timeline.map((entry) => (
          <li key={entry.time + entry.label} className="relative">
            <span
              className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent"
              aria-hidden
            />
            <div className="text-xs text-muted">{entry.time}</div>
            <div className="text-sm font-medium">{entry.label}</div>
            <div className="text-xs text-muted">{entry.detail}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
