"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Play, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { demoScenarios, demoChildName, demoGuardianName } from "@/lib/content/demo-scenarios";
import { DemoModeBadge } from "@/components/ui/status-tag";
import { Button } from "@/components/ui/button";
import { MapPanel } from "@/components/demo/map-panel";
import { StatusPanel } from "@/components/demo/status-panel";
import { TimelinePanel } from "@/components/demo/timeline-panel";
import { EmergencyCenter } from "@/components/demo/emergency-center";

const guidedFlowIds = [
  "normal",
  "safe-zone-departure",
  "unusual-movement",
  "device-offline",
  "sos",
  "emergency-mode",
  "emergency-sharing",
];

export function ProductDemo() {
  const [activeId, setActiveId] = useState(demoScenarios[0].id);
  const [guidedIndex, setGuidedIndex] = useState<number | null>(null);

  const scenario = useMemo(
    () => demoScenarios.find((s) => s.id === activeId) ?? demoScenarios[0],
    [activeId]
  );

  function selectScenario(id: string) {
    setActiveId(id);
    setGuidedIndex(null);
  }

  function startGuidedFlow() {
    setGuidedIndex(0);
    setActiveId(guidedFlowIds[0]);
  }

  function stepGuidedFlow(direction: 1 | -1) {
    if (guidedIndex === null) return;
    const next = Math.min(Math.max(guidedIndex + direction, 0), guidedFlowIds.length - 1);
    setGuidedIndex(next);
    setActiveId(guidedFlowIds[next]);
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-[var(--surface-dark)] p-5 text-white sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-white/50">
            Interactive concept demonstration
          </div>
          <p className="mt-1 text-sm text-white/60">
            Simulating {demoChildName}&apos;s device, viewed by {demoGuardianName}. All names,
            locations and events are synthetic.
          </p>
        </div>
        <DemoModeBadge />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Button size="sm" variant="primary" onClick={startGuidedFlow} className="gap-1.5">
          <Play className="h-3.5 w-3.5" aria-hidden />
          Guided emergency walkthrough
        </Button>
        {guidedIndex !== null && (
          <>
            <Button
              size="sm"
              variant="outline"
              className="border-white/25 text-white hover:bg-white/10"
              onClick={() => stepGuidedFlow(-1)}
              disabled={guidedIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
              Back
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white/25 text-white hover:bg-white/10"
              onClick={() => stepGuidedFlow(1)}
              disabled={guidedIndex === guidedFlowIds.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Button>
            <span className="text-xs text-white/50">
              Step {guidedIndex + 1} of {guidedFlowIds.length}
            </span>
          </>
        )}
        <Button
          size="sm"
          variant="ghost"
          className="text-white/70 hover:bg-white/10 hover:text-white"
          onClick={() => selectScenario("normal")}
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden />
          Reset
        </Button>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Demo scenarios">
        {demoScenarios.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={activeId === s.id}
            onClick={() => selectScenario(s.id)}
            className={cn(
              "focus-ring rounded-full border px-3.5 py-2 text-xs font-medium transition-colors",
              activeId === s.id
                ? "border-transparent bg-accent text-accent-foreground"
                : "border-white/15 text-white/70 hover:bg-white/10"
            )}
          >
            {s.shortLabel}
          </button>
        ))}
      </div>

      <p className="mt-4 max-w-2xl text-sm text-white/70">{scenario.description}</p>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <MapPanel scenario={scenario} />
        <div className="rounded-[var(--radius-lg)] bg-white p-5 text-[var(--foreground)]">
          <StatusPanel scenario={scenario} />
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-[var(--radius-lg)] bg-white p-5 text-[var(--foreground)]">
          <TimelinePanel scenario={scenario} />
        </div>
        {scenario.severity === "critical" ? (
          <div className="rounded-[var(--radius-lg)] bg-white p-1 text-[var(--foreground)]">
            <EmergencyCenter contacts={scenario.contacts} />
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-white/15 p-5 text-center text-sm text-white/40">
            Emergency center appears once SOS is activated.
          </div>
        )}
      </div>
    </div>
  );
}
