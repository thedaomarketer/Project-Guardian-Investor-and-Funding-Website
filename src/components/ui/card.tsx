import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-border bg-background p-6 shadow-[0_1px_2px_rgba(11,18,32,0.04)]",
        className
      )}
      {...props}
    />
  );
}

export function CardMuted({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-border bg-surface p-6",
        className
      )}
      {...props}
    />
  );
}
