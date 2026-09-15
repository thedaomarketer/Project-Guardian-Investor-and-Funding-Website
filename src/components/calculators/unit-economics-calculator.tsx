"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { Card } from "@/components/ui/card";

function currency(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function UnitEconomicsCalculator() {
  const [devicePrice, setDevicePrice] = useState(149);
  const [deviceCogsPercent, setDeviceCogsPercent] = useState(45);
  const [monthlySubscription, setMonthlySubscription] = useState(12);
  const [subscriptionMonths, setSubscriptionMonths] = useState(24);
  const [cac, setCac] = useState(60);

  const results = useMemo(() => {
    const deviceCogs = (deviceCogsPercent / 100) * devicePrice;
    const deviceGrossProfit = devicePrice - deviceCogs;
    const subscriptionRevenue = monthlySubscription * subscriptionMonths;
    const ltv = deviceGrossProfit + subscriptionRevenue;
    const cacPaybackMonths = monthlySubscription > 0 ? Math.ceil((cac - deviceGrossProfit) / monthlySubscription) : null;
    return { deviceGrossProfit, subscriptionRevenue, ltv, cacPaybackMonths };
  }, [devicePrice, deviceCogsPercent, monthlySubscription, subscriptionMonths, cac]);

  return (
    <Card>
      <div className="flex items-center gap-2">
        <Calculator className="h-5 w-5 text-accent" aria-hidden />
        <h3 className="text-sm font-semibold">Illustrative unit economics calculator</h3>
      </div>
      <p className="mt-1.5 text-xs text-muted">
        Every input below is a hypothetical assumption you can adjust — none of these
        numbers are Project Guardian&apos;s actual costs, prices, or achieved results.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <SliderField
          label="Device price"
          value={devicePrice}
          onChange={setDevicePrice}
          min={49}
          max={299}
          step={5}
          format={(v) => currency(v)}
        />
        <SliderField
          label="Device cost of goods (% of price)"
          value={deviceCogsPercent}
          onChange={setDeviceCogsPercent}
          min={20}
          max={80}
          step={1}
          format={(v) => `${v}%`}
        />
        <SliderField
          label="Monthly subscription price"
          value={monthlySubscription}
          onChange={setMonthlySubscription}
          min={0}
          max={40}
          step={1}
          format={(v) => currency(v)}
        />
        <SliderField
          label="Assumed average subscription length"
          value={subscriptionMonths}
          onChange={setSubscriptionMonths}
          min={3}
          max={60}
          step={1}
          format={(v) => `${v} months`}
        />
        <SliderField
          label="Assumed customer acquisition cost (CAC)"
          value={cac}
          onChange={setCac}
          min={0}
          max={300}
          step={5}
          format={(v) => currency(v)}
        />
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <ResultTile label="Device gross profit" value={currency(results.deviceGrossProfit)} />
        <ResultTile label="Subscription revenue (assumed lifetime)" value={currency(results.subscriptionRevenue)} />
        <ResultTile label="Illustrative lifetime value (LTV)" value={currency(results.ltv)} highlight />
        <ResultTile
          label="Illustrative CAC payback"
          value={
            results.cacPaybackMonths === null
              ? "n/a"
              : results.cacPaybackMonths <= 0
                ? "Immediate (device margin covers CAC)"
                : `${results.cacPaybackMonths} months`
          }
        />
      </div>

      <p className="mt-5 text-xs text-muted">
        This calculator illustrates how hardware-plus-subscription economics could work
        under assumptions you choose. It is not a projection, forecast, or promise of
        Project Guardian&apos;s actual performance.
      </p>
    </Card>
  );
}

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) {
  const id = `slider-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-xs font-medium text-muted">
          {label}
        </label>
        <span className="text-xs font-semibold">{format(value)}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="focus-ring mt-2 w-full accent-[var(--accent)]"
      />
    </div>
  );
}

function ResultTile({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className={
        highlight
          ? "rounded-[var(--radius-md)] bg-accent-soft p-4"
          : "rounded-[var(--radius-md)] bg-surface p-4"
      }
    >
      <div className="text-xs text-muted">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}
