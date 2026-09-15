import { cn } from "@/lib/utils";
import type { DemoScenario } from "@/lib/content/demo-scenarios";

const severityDot: Record<DemoScenario["severity"], string> = {
  normal: "fill-[#0b7285]",
  info: "fill-[#0b7285]",
  warning: "fill-[#b45309]",
  critical: "fill-[#dc2626]",
};

export function MapPanel({ scenario }: { scenario: DemoScenario }) {
  const routeD =
    scenario.routePoints.length > 1
      ? "M " + scenario.routePoints.map((p) => `${p.x},${p.y}`).join(" L ")
      : "";

  return (
    <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-[#0e1830]">
      <svg viewBox="0 0 100 100" className="h-72 w-full sm:h-80" role="img" aria-label="Simulated map view">
        <defs>
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeOpacity="0.06" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />

        {scenario.showSafeZone && (
          <>
            <circle
              cx={scenario.safeZoneCenter.x}
              cy={scenario.safeZoneCenter.y}
              r={scenario.safeZoneRadius}
              fill="#0b7285"
              fillOpacity="0.12"
              stroke="#2dd4cf"
              strokeOpacity="0.5"
              strokeDasharray="2 2"
            />
            <text
              x={scenario.safeZoneCenter.x}
              y={scenario.safeZoneCenter.y - scenario.safeZoneRadius - 3}
              textAnchor="middle"
              fontSize="3.2"
              fill="#7ee8e3"
            >
              Safe zone
            </text>
          </>
        )}

        {routeD && (
          <path
            d={routeD}
            fill="none"
            stroke="white"
            strokeOpacity="0.4"
            strokeWidth="0.8"
            strokeDasharray="1.5 1.5"
          />
        )}

        <circle
          cx={scenario.mapPin.x}
          cy={scenario.mapPin.y}
          r="2.6"
          className={cn(severityDot[scenario.severity])}
          stroke="white"
          strokeWidth="0.6"
        >
          {scenario.severity === "critical" && (
            <animate attributeName="r" values="2.6;4;2.6" dur="1.6s" repeatCount="indefinite" />
          )}
        </circle>
      </svg>

      <div className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/80 backdrop-blur">
        Simulated map — not real satellite imagery
      </div>
    </div>
  );
}
