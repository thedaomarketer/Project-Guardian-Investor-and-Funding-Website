"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck, ChevronDown } from "lucide-react";
import { navGroups } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-2 rounded-md">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-dark)] text-white">
            <ShieldCheck className="h-4.5 w-4.5" aria-hidden />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Project Guardian
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setActiveGroup(group.label)}
              onMouseLeave={() => setActiveGroup(null)}
            >
              <button
                className="focus-ring flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-surface hover:text-foreground"
                aria-expanded={activeGroup === group.label}
                onClick={() =>
                  setActiveGroup(activeGroup === group.label ? null : group.label)
                }
              >
                {group.label}
                <ChevronDown className="h-3.5 w-3.5" aria-hidden />
              </button>
              <div
                className={cn(
                  "absolute left-0 top-full w-72 pt-2 transition-all",
                  activeGroup === group.label
                    ? "pointer-events-auto opacity-100 translate-y-0"
                    : "pointer-events-none -translate-y-1 opacity-0"
                )}
              >
                <div className="rounded-[var(--radius-md)] border border-border bg-background p-2 shadow-lg">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="focus-ring block rounded-[var(--radius-sm)] px-3 py-2.5 hover:bg-surface"
                      onClick={() => setActiveGroup(null)}
                    >
                      <div className="text-sm font-medium">{item.label}</div>
                      {item.description && (
                        <div className="mt-0.5 text-xs text-muted">
                          {item.description}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link
            href="/contact"
            className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-surface hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/investor-deck"
            className="focus-ring rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-surface"
          >
            Investor Deck
          </Link>
          <Link
            href="/contact?type=investor"
            className="focus-ring rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
          >
            Discuss Investment
          </Link>
        </div>

        <button
          className="focus-ring rounded-md p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[57px] bottom-0 z-40 overflow-y-auto bg-background lg:hidden">
          <nav className="flex flex-col gap-6 px-4 py-6" aria-label="Mobile">
            {navGroups.map((group) => (
              <div key={group.label}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                  {group.label}
                </div>
                <div className="flex flex-col">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="focus-ring rounded-md px-2 py-3 text-[15px] font-medium hover:bg-surface"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/contact"
              className="focus-ring rounded-md px-2 py-3 text-[15px] font-medium hover:bg-surface"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-2 flex flex-col gap-3 border-t border-border pt-6">
              <Link
                href="/investor-deck"
                className="focus-ring rounded-full border border-border px-4 py-3 text-center text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                Investor Deck
              </Link>
              <Link
                href="/early-access"
                className="focus-ring rounded-full border border-border px-4 py-3 text-center text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                Join Early Access
              </Link>
              <Link
                href="/contact?type=investor"
                className="focus-ring rounded-full bg-accent px-4 py-3 text-center text-sm font-medium text-accent-foreground"
                onClick={() => setOpen(false)}
              >
                Discuss Investment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
