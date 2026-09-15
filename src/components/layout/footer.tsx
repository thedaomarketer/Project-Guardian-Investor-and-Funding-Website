import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { footerColumns } from "@/lib/nav";
import { Container } from "@/components/ui/section";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--surface-dark)] text-white">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <ShieldCheck className="h-4.5 w-4.5" aria-hidden />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                Project Guardian
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Child safety technology in pre-commercial development. Nothing on
              this site should be read as an offer, a finished product, or a
              guarantee of outcomes.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-wide text-white/40">
                {col.title}
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="focus-ring text-sm text-white/70 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Project Guardian. Pre-commercial —
            investor inquiries welcome. Not an offer to sell securities.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-notice" className="hover:text-white">
              Privacy Notice
            </Link>
            <Link href="/legal-notice" className="hover:text-white">
              Legal Notice
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
