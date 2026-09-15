import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export function Section({
  className,
  dark,
  ...props
}: HTMLAttributes<HTMLElement> & { dark?: boolean }) {
  return (
    <section
      className={cn(
        "py-16 sm:py-24",
        dark && "bg-[var(--surface-dark)] text-white",
        className
      )}
      {...props}
    />
  );
}

export function Eyebrow({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-[0.14em] text-accent",
        className
      )}
      {...props}
    />
  );
}
