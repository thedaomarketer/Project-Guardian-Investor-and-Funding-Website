import { fundingAllocation } from "@/lib/content/funding";

const barColors = [
  "bg-accent",
  "bg-[#2dd4cf]",
  "bg-[#7ee8e3]",
  "bg-[#0b7285]/80",
  "bg-[#085d6c]",
  "bg-[#b45309]/70",
  "bg-[#5b6472]/70",
  "bg-[#0b7285]/60",
  "bg-[#2dd4cf]/70",
  "bg-[#085d6c]/70",
  "bg-[#93a0b4]/70",
];

export function AllocationBars() {
  return (
    <div className="space-y-3">
      {fundingAllocation.map((item, i) => (
        <div key={item.label}>
          <div className="flex items-center justify-between text-sm">
            <span>{item.label}</span>
            <span className="font-semibold">{item.percent}%</span>
          </div>
          <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-surface-strong">
            <div
              className={`h-full rounded-full ${barColors[i % barColors.length]}`}
              style={{ width: `${item.percent}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
