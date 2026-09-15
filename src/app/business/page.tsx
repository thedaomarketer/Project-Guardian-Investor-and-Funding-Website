import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Repeat, Users, School, Handshake, Siren } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { StatusTag } from "@/components/ui/status-tag";
import { investorThesisPoints } from "@/lib/content/funding";

export const metadata: Metadata = {
  title: "Business Model",
  description:
    "How Project Guardian is proposed to make money: hardware revenue plus a recurring subscription for the connected safety service — a standard model for connected hardware.",
};

const revenueStreams = [
  {
    icon: Cpu,
    title: "Hardware revenue",
    status: "planned" as const,
    description:
      "A one-time revenue event from the sale of the connected safety device itself, priced to cover component, manufacturing and fulfillment cost with margin.",
  },
  {
    icon: Repeat,
    title: "Recurring subscription",
    status: "planned" as const,
    description:
      "A monthly or annual family plan covering the connected safety service — location updates, alerts, and emergency features — the recurring revenue engine of the model.",
  },
];

const futureStreams = [
  {
    icon: Users,
    title: "Family plans with multiple devices",
    description:
      "Bundled pricing for households covering more than one child or device.",
  },
  {
    icon: School,
    title: "Institutional / school offerings",
    description:
      "A potential offering for schools, camps and youth organizations beyond individual families.",
  },
  {
    icon: Handshake,
    title: "Enterprise partnerships",
    description:
      "Potential distribution or integration partnerships with other organizations.",
  },
  {
    icon: Siren,
    title: "Emergency-services integrations",
    description:
      "Potential future integration pathways with emergency-response providers.",
  },
];

export default function BusinessPage() {
  return (
    <>
      <Section dark className="pb-16 pt-14 sm:pt-20">
        <Container>
          <Eyebrow className="text-[#7ee8e3]">Business model</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            How Project Guardian could make money.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            The proposed model pairs a one-time hardware sale with a
            recurring subscription for the connected safety service —
            location, alerts, and emergency features. Hardware plus
            subscription is a standard, well-understood model in connected
            hardware, not a novel or unproven structure. Nothing below
            represents committed pricing, signed contracts, or actual
            revenue.
          </p>
        </Container>
      </Section>

      {/* Core revenue streams */}
      <Section>
        <Container>
          <Eyebrow>Core revenue streams</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Two revenue streams, working together.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {revenueStreams.map((r) => (
              <Card key={r.title}>
                <div className="flex items-start justify-between gap-3">
                  <r.icon className="h-5 w-5 text-accent" aria-hidden />
                  <StatusTag status={r.status} />
                </div>
                <div className="mt-3 text-base font-semibold">{r.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {r.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Potential future revenue streams */}
      <Section className="bg-surface">
        <Container>
          <Eyebrow>Speculative — not committed</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Potential future revenue streams.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            None of the following are built, contracted, or committed to.
            They are directional ideas for how the platform could expand,
            included for transparency about the range of the opportunity —
            not as promises.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {futureStreams.map((f) => (
              <Card key={f.title} className="bg-background">
                <f.icon className="h-5 w-5 text-muted" aria-hidden />
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div className="text-sm font-semibold">{f.title}</div>
                </div>
                <StatusTag status="future" className="mt-2" />
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why this model */}
      <Section>
        <Container>
          <Eyebrow>Why this model</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            The investor thesis behind hardware plus subscription.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {investorThesisPoints.map((p) => (
              <div key={p.title}>
                <div className="text-sm font-semibold">{p.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Unit economics teaser */}
      <Section className="bg-surface">
        <Container>
          <Card className="bg-background">
            <div className="text-sm font-semibold">Unit economics</div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              Illustrative assumption: device cost, subscription price and
              margin figures are still being modeled and are not final. A
              full, interactive illustrative unit-economics calculator is
              available on the{" "}
              <Link href="/funding" className="text-accent hover:underline">
                funding page
              </Link>
              .
            </p>
          </Card>
        </Container>
      </Section>

      {/* End CTA */}
      <Section dark>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              See the market this model is built for.
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              Review the market sizing, then the funding plan and use of
              funds.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/market"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
            >
              Market Opportunity
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
