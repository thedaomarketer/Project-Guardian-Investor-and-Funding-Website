import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card, CardMuted } from "@/components/ui/card";
import {
  householdBaselines,
  thirdPartyMarketEstimates,
  comparableFundingEvents,
} from "@/lib/content/market";

export const metadata: Metadata = {
  title: "Market Opportunity",
  description:
    "A bottom-up, honestly-sized view of the child-safety wearable market — household baselines, an unfinished methodology, and third-party context, not a fabricated TAM.",
};

export default function MarketPage() {
  return (
    <>
      <Section dark className="pb-16 pt-14 sm:pt-20">
        <Container>
          <Eyebrow className="text-[#7ee8e3]">Market opportunity</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            A large, addressable market — sized honestly.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Reliable market-size data for this specific niche — connected
            safety wearables for children — is limited. Rather than quote a
            single inflated total addressable market figure, Project Guardian
            is presenting a bottom-up estimation approach built from public
            household data, alongside third-party industry context shown for
            what it is: directional, not authoritative.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            We believe a smaller, defensible estimate is better than a
            fabricated billion-dollar TAM. That&apos;s a credibility point, not
            a weakness.
          </p>
        </Container>
      </Section>

      {/* Household baselines */}
      <Section>
        <Container>
          <Eyebrow>Household baseline</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Publicly reported household counts, not an estimate we produced.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {householdBaselines.map((h) => (
              <Card key={h.label}>
                <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {h.value}
                </div>
                <div className="mt-2 text-sm font-semibold">{h.label}</div>
                <p className="mt-1.5 text-sm text-muted">{h.detail}</p>
                <p className="mt-3 text-xs text-muted">{h.source}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom-up methodology */}
      <Section className="bg-surface">
        <Container>
          <Eyebrow>Bottom-up methodology</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            How we&apos;d size this market — and what we haven&apos;t filled in yet.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            A defensible estimate starts from the household baseline above and
            narrows down in two more steps:
          </p>

          <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <CardMuted className="flex flex-col justify-center bg-background">
              <div className="text-xs font-semibold uppercase tracking-wide text-accent">
                Step 1
              </div>
              <div className="mt-2 text-sm font-semibold">
                Households with children
              </div>
              <p className="mt-1.5 text-sm text-muted">
                From the verified StatCan / US Census baselines above.
              </p>
            </CardMuted>
            <div className="hidden items-center justify-center text-2xl font-semibold text-muted sm:flex">
              <X className="h-5 w-5" aria-hidden />
            </div>
            <CardMuted className="flex flex-col justify-center bg-background">
              <div className="text-xs font-semibold uppercase tracking-wide text-accent">
                Step 2
              </div>
              <div className="mt-2 text-sm font-semibold">
                Relevant segment
              </div>
              <p className="mt-1.5 text-sm text-muted">
                Parents who would consider a connected safety wearable.{" "}
                <strong className="text-foreground">
                  No percentage is stated here yet.
                </strong>{" "}
                No market research has confirmed an adoption rate for this
                product specifically.
              </p>
            </CardMuted>
            <div className="hidden items-center justify-center text-2xl font-semibold text-muted sm:flex">
              <X className="h-5 w-5" aria-hidden />
            </div>
            <CardMuted className="flex flex-col justify-center bg-background">
              <div className="text-xs font-semibold uppercase tracking-wide text-accent">
                Step 3
              </div>
              <div className="mt-2 text-sm font-semibold">
                Estimated annual spend
              </div>
              <p className="mt-1.5 text-sm text-muted">
                Hardware plus subscription, amortized.{" "}
                <strong className="text-foreground">
                  No dollar figure is stated here yet.
                </strong>{" "}
                Willingness-to-pay hasn&apos;t been validated for Project
                Guardian specifically.
              </p>
            </CardMuted>
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            We&apos;re deliberately not guessing at the adoption-rate or
            willingness-to-pay inputs above. Validating them — through pilot
            programs, waitlist conversion, and direct research with parents —
            is a roadmap goal, not a number to fabricate on this page.
          </p>
        </Container>
      </Section>

      {/* Third-party context */}
      <Section>
        <Container>
          <Eyebrow>Third-party context</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Industry estimates, for directional context only.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            These figures come from third-party research firms, not from
            Project Guardian. They cover adjacent categories (kids&apos; GPS
            trackers and smartwatches broadly) with different scopes and base
            years — the wide range across firms itself shows there&apos;s no
            single authoritative number for this niche.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {thirdPartyMarketEstimates.map((m) => (
              <Card key={m.firm}>
                <div className="text-sm font-semibold">
                  As reported by {m.firm}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {m.figure}
                </p>
                <p className="mt-3 text-xs text-muted">{m.note}</p>
              </Card>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-xs text-muted">
            Shown as directional industry context only — not Project
            Guardian&apos;s claimed total addressable market. See
            docs/research/market.md for the full range and caveats.
          </p>
        </Container>
      </Section>

      {/* Why now */}
      <Section className="bg-surface">
        <Container>
          <Eyebrow>Why now</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Investor and industry interest in child-safety tech is visible.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            These are comparable events in the broader child-safety technology
            space — evidence of investor and industry interest in the
            category generally. They are not Project Guardian&apos;s own
            traction, funding, or results.
          </p>
          <div className="mt-10 space-y-4">
            {comparableFundingEvents.map((e) => (
              <div
                key={e.event}
                className="flex flex-col gap-1 border-b border-border pb-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <div className="text-sm font-semibold">{e.event}</div>
                  <p className="mt-1 text-sm text-muted">{e.detail}</p>
                </div>
                <div className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {e.year}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section dark>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              See how this maps to the business model and funding ask.
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              An honest market view is only useful alongside an honest plan
              for building on it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/business"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
            >
              See the business model
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/funding"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10"
            >
              View Funding Plan
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
