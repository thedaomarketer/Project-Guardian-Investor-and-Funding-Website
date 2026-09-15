import { BatteryLow, BatteryMedium, BatteryFull, Wifi, WifiOff, Clock, MapPin } from "lucide-react";
import type { DemoScenario } from "@/lib/content/demo-scenarios";
import { cn } from "@/lib/utils";

function BatteryIcon({ battery }: { battery: number }) {
  if (battery <= 15) return <BatteryLow className="h-4 w-4 text-danger" aria-hidden />;
  if (battery <= 40) return <BatteryMedium className="h-4 w-4 text-warning" aria-hidden />;
  return <BatteryFull className="h-4 w-4 text-success" aria-hidden />;
}

const severityStyles: Record<DemoScenario["severity"], string> = {
  normal: "bg-success-soft text-success",
  info: "bg-accent-soft text-[var(--accent-strong)]",
  warning: "bg-warning-soft text-warning",
  critical: "bg-danger-soft text-danger",
};

export function StatusPanel({ scenario }: { scenario: DemoScenario }) {
  return (
    <div className="space-y-4">
      <div className={cn("rounded-[var(--radius-md)] px-4 py-3 text-sm font-medium", severityStyles[scenario.severity])}>
        {scenario.alertReason ?? "No active alert"}
      </div>

      <dl className="grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-[var(--radius-md)] border border-border p-3">
          <dt className="flex items-center gap-1.5 text-xs text-muted">
            <BatteryIcon battery={scenario.battery} /> Battery
          </dt>
          <dd className="mt-1 font-semibold">{scenario.battery}%</dd>
        </div>
        <div className="rounded-[var(--radius-md)] border border-border p-3">
          <dt className="flex items-center gap-1.5 text-xs text-muted">
            {scenario.connectivity === "online" ? (
              <Wifi className="h-4 w-4 text-success" aria-hidden />
            ) : (
              <WifiOff className="h-4 w-4 text-danger" aria-hidden />
            )}
            Connectivity
          </dt>
          <dd className="mt-1 font-semibold capitalize">{scenario.connectivity}</dd>
        </div>
        <div className="col-span-2 rounded-[var(--radius-md)] border border-border p-3">
          <dt className="flex items-center gap-1.5 text-xs text-muted">
            <MapPin className="h-4 w-4" aria-hidden />
            {scenario.locationConfidence === "current" ? "Current location" : "Last confirmed location"}
          </dt>
          <dd className="mt-1 font-semibold">{scenario.locationLabel}</dd>
          {scenario.locationConfidence === "last-confirmed" && (
            <p className="mt-1 text-xs text-danger">
              Not live — device has not reported recently.
            </p>
          )}
        </div>
        <div className="col-span-2 flex items-center gap-1.5 text-xs text-muted">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          {scenario.lastUpdateLabel}
        </div>
      </dl>
    </div>
  );
}
