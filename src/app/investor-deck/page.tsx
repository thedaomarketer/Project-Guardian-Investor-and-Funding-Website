import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card, CardMuted } from "@/components/ui/card";
import { StatusTag } from "@/components/ui/status-tag";
import { roadmapPhases } from "@/lib/content/roadmap";
import { fundingAllocation } from "@/lib/content/funding";
import { risks } from "@/lib/content/risks";
import { competitors } from "@/lib/content/competitors";
import { householdBaselines, thirdPartyMarketEstimates } from "@/lib/content/market";

export const metadata: Metadata = {
  title: "Investor Deck",
  description:
    "A web-native, scrollable investor deck for Project Guardian — 19 slides covering problem, product, technology, market, business model, roadmap and risk.",
};

const TOTAL_SLIDES = 19;

function SlideLabel({ n }: { n: number }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
      Slide {n} of {TOTAL_SLIDES}
    </span>
  );
}

export default function InvestorDeckPage() {
  return (
    <>
      <Section dark className="pb-10 pt-12">
        <Container>
          <Eyebrow className="text-[#7ee8e3]">Investor deck</Eyebrow>
          <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Project Guardian — a scrollable, web-native deck.
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
            This is a web page built as a sequence of slides, not a PDF or
            slide-deck file. Jump to any slide below, or scroll through in
            order.
          </p>
          <nav
            aria-label="Slide navigation"
            className="mt-8 flex flex-wrap gap-2"
          >
            {Array.from({ length: TOTAL_SLIDES }, (_, i) => i + 1).map((n) => (
              <a
                key={n}
                href={`#slide-${n}`}
                className="focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs font-medium text-white/80 hover:bg-white/10"
              >
                {n}
              </a>
            ))}
          </nav>
        </Container>
      </Section>

      {/* Slide 1 — Cover */}
      <Section dark id="slide-1" className="border-t border-white/10">
        <Container>
          <SlideLabel n={1} />
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Project Guardian
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            One secure safety core. Multiple everyday form factors.
          </p>
          <span className="mt-6 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/70">
            Pre-commercial · Concept &amp; prototype development
          </span>
        </Container>
      </Section>

      {/* Slide 2 — Problem */}
      <Section id="slide-2">
        <Container>
          <SlideLabel n={2} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            The problem
          </h2>
          <ul className="mt-5 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            <li>Existing GPS watches can be bulky or socially obvious for some children.</li>
            <li>Emergency activation needs to be simple enough for a child under stress to use.</li>
            <li>Caregivers need context during an incident, not merely a location dot on a map.</li>
            <li>Sharing a child&apos;s location needs to be controlled and time-limited, not always-on.</li>
          </ul>
        </Container>
      </Section>

      {/* Slide 3 — Why current solutions leave gaps */}
      <Section className="bg-surface" id="slide-3">
        <Container>
          <SlideLabel n={3} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Why current solutions leave gaps
          </h2>
          <ul className="mt-5 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            <li>Single-purpose gadgets (a tracker, or a watch) don&apos;t adapt to how a child actually wants to wear something day to day.</li>
            <li>Phone-dependent tools assume a child is carrying and charging a phone, which isn&apos;t always true, especially for younger children.</li>
            <li>Most tools stop at a location pin — they don&apos;t structure what happened before, during and after an emergency.</li>
            <li>What&apos;s needed is one safety core that can move between form factors and give caregivers explainable context, not just coordinates.</li>
          </ul>
        </Container>
      </Section>

      {/* Slide 4 — Project Guardian mission */}
      <Section id="slide-4">
        <Container>
          <SlideLabel n={4} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Project Guardian
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Project Guardian is developing a modular connected safety
            platform that helps caregivers monitor location, identify
            defined safety events, and respond quickly when a child may be
            in danger — built around one secure SafeCore module that can be
            designed into multiple everyday form factors.
          </p>
        </Container>
      </Section>

      {/* Slide 5 — Product */}
      <Section className="bg-surface" id="slide-5">
        <Container>
          <SlideLabel n={5} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Product: the SafeCore module
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            A single connected safety module proposed to work across
            multiple everyday form factors, so a child can wear whichever
            fits their routine without changing how the safety system works
            underneath.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["Bracelet", "Pendant", "Backpack clip", "Clothing attachment", "Toy"].map((f) => (
              <Card key={f} className="text-sm font-medium">
                {f}
              </Card>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            Jewelry / earring form factors are future research only — not an
            active development target.
          </p>
        </Container>
      </Section>

      {/* Slide 6 — SafeCore architecture */}
      <Section id="slide-6">
        <Container>
          <SlideLabel n={6} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            SafeCore architecture
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-medium">
            {[
              "Device core",
              "Connectivity",
              "Cloud platform",
              "Safety event engine",
              "Parent application",
              "Emergency sharing",
            ].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-surface px-3 py-1.5">
                  {step}
                </span>
                {i < arr.length - 1 && <span className="text-muted">&rarr;</span>}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Slide 7 — Emergency response workflow */}
      <Section className="bg-surface" id="slide-7">
        <Container>
          <SlideLabel n={7} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Emergency response workflow
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-medium">
            {[
              "Normal",
              "Unusual movement",
              "Alert",
              "SOS",
              "Emergency mode",
              "Emergency timeline",
              "Temporary sharing",
            ].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-background px-3 py-1.5">
                  {step}
                </span>
                {i < arr.length - 1 && <span className="text-muted">&rarr;</span>}
              </span>
            ))}
          </div>
          <Link
            href="/product"
            className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            Try the live interactive demo
          </Link>
        </Container>
      </Section>

      {/* Slide 8 — Technology */}
      <Section id="slide-8">
        <Container>
          <SlideLabel n={8} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Technology
          </h2>
          <ul className="mt-5 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            <li>Device core: GNSS + cellular location, sensors, battery management.</li>
            <li>Cloud platform: ingestion, storage and the safety event engine.</li>
            <li>Parent application: dashboard, safe zones, emergency timeline.</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <StatusTag status="prototype" />
            <StatusTag status="planned" />
            <StatusTag status="future" />
          </div>
          <Link
            href="/technology"
            className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            See full technology detail
          </Link>
        </Container>
      </Section>

      {/* Slide 9 — AI safety intelligence */}
      <Section className="bg-surface" id="slide-9">
        <Container>
          <SlideLabel n={9} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            AI safety intelligence
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            The safety event engine is designed to identify unusual movement
            patterns against a child&apos;s established routine and explain
            the specific rule or pattern that triggered an alert — no
            black-box &quot;risk&quot; score.
          </p>
          <p className="mt-3 max-w-2xl text-sm font-medium text-foreground">
            It does not diagnose trafficking, abuse, or criminal intent. It
            surfaces defined, explainable safety events for a caregiver to
            act on.
          </p>
        </Container>
      </Section>

      {/* Slide 10 — Privacy & security */}
      <Section id="slide-10">
        <Container>
          <SlideLabel n={10} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Privacy &amp; security
          </h2>
          <ul className="mt-5 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            <li>Data minimization — collect only what the safety workflow requires.</li>
            <li>Encryption of data in transit and at rest.</li>
            <li>Role-based access for caregivers and any institutional accounts.</li>
            <li>Audit logging of access to sensitive data.</li>
          </ul>
          <p className="mt-4 max-w-2xl text-xs text-muted">
            Compliance and certification work is planned, not yet obtained.
          </p>
        </Container>
      </Section>

      {/* Slide 11 — Market */}
      <Section className="bg-surface" id="slide-11">
        <Container>
          <SlideLabel n={11} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Market
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {householdBaselines.map((h) => (
              <Card key={h.label}>
                <div className="text-2xl font-semibold tracking-tight">{h.value}</div>
                <div className="mt-1 text-sm font-medium">{h.label}</div>
                <p className="mt-1 text-xs text-muted">{h.detail}</p>
                <p className="mt-2 text-xs text-muted">Source: {h.source}</p>
              </Card>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-xs text-muted">
            {thirdPartyMarketEstimates[thirdPartyMarketEstimates.length - 1].note}{" "}
            We use a bottom-up household estimate because no single
            authoritative total addressable market figure exists for this
            specific niche.
          </p>
        </Container>
      </Section>

      {/* Slide 12 — Competition */}
      <Section id="slide-12">
        <Container>
          <SlideLabel n={12} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Competition
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {competitors.map((c) => (
              <CardMuted key={c.name}>
                <div className="text-sm font-semibold">{c.name}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.summary}</p>
              </CardMuted>
            ))}
          </div>
          <Link
            href="/competition"
            className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            See the full comparison table
          </Link>
        </Container>
      </Section>

      {/* Slide 13 — Business model */}
      <Section className="bg-surface" id="slide-13">
        <Container>
          <SlideLabel n={13} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Business model
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Hardware device sale paired with a recurring software
            subscription for connectivity, monitoring and the safety event
            engine.
          </p>
          <p className="mt-3 max-w-2xl text-xs text-muted">
            Potential future revenue streams — institutional accounts for
            schools and camps, and additional form factors — are speculative
            and not yet validated.
          </p>
        </Container>
      </Section>

      {/* Slide 14 — Roadmap */}
      <Section id="slide-14">
        <Container>
          <SlideLabel n={14} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Roadmap
          </h2>
          <ol className="mt-6 space-y-3">
            {roadmapPhases.map((p) => (
              <li
                key={p.phase}
                className="flex items-start justify-between gap-4 rounded-[var(--radius-lg)] border border-border bg-surface p-4"
              >
                <div>
                  <span className="text-sm font-semibold">
                    {p.phase}. {p.name}
                  </span>
                  <p className="mt-1 text-sm text-muted">{p.description}</p>
                </div>
                <StatusTag
                  status={
                    p.status === "in-progress"
                      ? "in-development"
                      : p.status === "completed"
                        ? "under-validation"
                        : "planned"
                  }
                  className="shrink-0"
                />
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Slide 15 — Funding requirement */}
      <Section dark id="slide-15">
        <Container>
          <SlideLabel n={15} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Funding requirement
          </h2>
          <div className="mt-6 inline-flex flex-col gap-1 rounded-[var(--radius-lg)] border border-white/15 bg-white/5 px-6 py-4">
            <span className="text-xs uppercase tracking-wide text-white/50">Target raise</span>
            <span className="text-2xl font-semibold">To be finalized</span>
            <span className="text-xs text-white/50">
              Following engineering and commercialization planning — not yet set.
            </span>
          </div>
        </Container>
      </Section>

      {/* Slide 16 — Use of funds */}
      <Section id="slide-16">
        <Container>
          <SlideLabel n={16} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Use of funds
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Illustrative allocation — a planning assumption, not a binding
            budget.
          </p>
          <ul className="mt-6 max-w-md space-y-2 text-sm">
            {fundingAllocation.map((a) => (
              <li key={a.label} className="flex items-center justify-between border-b border-border py-2">
                <span className="text-foreground">{a.label}</span>
                <span className="font-semibold">{a.percent}%</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Slide 17 — Risks */}
      <Section className="bg-surface" id="slide-17">
        <Container>
          <SlideLabel n={17} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Risks
          </h2>
          <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {risks.map((r) => (
              <div key={r.title} className="border-b border-border pb-3">
                <div className="text-sm font-semibold">{r.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-muted">{r.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Slide 18 — Team */}
      <Section id="slide-18">
        <Container>
          <SlideLabel n={18} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Team
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Founder profile coming soon. Team information will be added here
            as the company grows.
          </p>
        </Container>
      </Section>

      {/* Slide 19 — Contact */}
      <Section className="bg-surface" id="slide-19">
        <Container>
          <SlideLabel n={19} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Contact
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Investor inquiries welcome, and families interested in early
            access can register their interest below.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact?type=investor"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
            >
              Discuss Investment
            </Link>
            <Link
              href="/early-access"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground hover:bg-surface"
            >
              Join Early Access
            </Link>
          </div>
        </Container>
      </Section>

      {/* Closing CTA */}
      <Section dark>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s talk about a fit.
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              This deck is not an offer to sell securities and does not
              constitute investment advice. Reach out to continue the
              conversation.
            </p>
          </div>
          <Link
            href="/contact?type=investor"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
          >
            Discuss Investment
          </Link>
        </Container>
      </Section>
    </>
  );
}
