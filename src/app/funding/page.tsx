import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card, CardMuted } from "@/components/ui/card";
import { risks } from "@/lib/content/risks";
import { investorThesisPoints } from "@/lib/content/funding";
import { AllocationBars } from "@/components/charts/allocation-bars";
import { UnitEconomicsCalculator } from "@/components/calculators/unit-economics-calculator";

export const metadata: Metadata = {
  title: "Funding",
  description:
    "Project Guardian's investment opportunity, use of funds, and the risks investors should understand.",
};

export default function FundingPage() {
  return (
    <>
      <Section dark className="pt-12">
        <Container>
          <Eyebrow className="text-[#7ee8e3]">Investment opportunity</Eyebrow>
          <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Seeking strategic investment and funding conversations.
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
            Project Guardian is seeking funding to move from concept and software
            validation toward working hardware prototypes, engineering validation,
            regulatory preparation, pilot testing, and commercialization. This page is
            not an offer to sell securities and does not constitute investment advice —
            investment materials are available on request.
          </p>
          <div className="mt-8 inline-flex flex-col gap-1 rounded-[var(--radius-lg)] border border-white/15 bg-white/5 px-6 py-4">
            <span className="text-xs uppercase tracking-wide text-white/50">Target raise</span>
            <span className="text-2xl font-semibold">To be finalized</span>
            <span className="text-xs text-white/50">
              Following engineering and commercialization planning — not yet set.
            </span>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Use of funds</Eyebrow>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Illustrative allocation
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            These percentages are a planning assumption for how capital would likely be
            deployed, not a binding budget. They will be refined as engineering and
            go-to-market plans mature.
          </p>
          <Card className="mt-8">
            <AllocationBars />
          </Card>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <Eyebrow>Model the economics</Eyebrow>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Explore hardware-plus-subscription unit economics.
          </h2>
          <div className="mt-8">
            <UnitEconomicsCalculator />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Why Project Guardian</Eyebrow>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {investorThesisPoints.map((p) => (
              <div key={p.title}>
                <div className="text-sm font-semibold">{p.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/business"
            className="focus-ring mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            See the full business model
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" aria-hidden />
            <Eyebrow>Risks</Eyebrow>
          </div>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            An honest accounting of what could go wrong.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            A serious investor presentation should demonstrate that management
            understands the risks — not hide them.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {risks.map((r) => (
              <CardMuted key={r.title}>
                <div className="text-sm font-semibold">{r.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{r.description}</p>
              </CardMuted>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s talk about a fit.
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              Review the investor deck, then reach out — we read every inquiry.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/investor-deck"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[var(--surface-dark)] hover:bg-white/90"
            >
              View Investor Deck
            </Link>
            <Link
              href="/contact?type=investor"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
            >
              Discuss Investment
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
