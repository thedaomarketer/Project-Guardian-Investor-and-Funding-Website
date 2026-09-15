import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, HeartHandshake, Radio } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { StatusTag } from "@/components/ui/status-tag";
import { SafeCoreDiagram } from "@/components/illustrations/safecore-diagram";
import { formFactors } from "@/lib/content/form-factors";
import { differentiationPoints } from "@/lib/content/differentiation";

export default function Home() {
  return (
    <>
      <Section dark className="pb-20 pt-14 sm:pt-20">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow className="text-[#7ee8e3]">Pre-commercial · Concept &amp; prototype development</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Child safety technology designed for faster awareness and
              emergency response.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Project Guardian is developing a modular connected safety
              platform that helps caregivers monitor location, identify
              defined safety events, and respond quickly when a child may be
              in danger.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/technology"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
              >
                Explore the Technology
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/funding"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[var(--surface-dark)] hover:bg-white/90"
              >
                Investor Opportunity
              </Link>
              <Link
                href="/early-access"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10"
              >
                Join Early Access
              </Link>
            </div>
            <p className="mt-8 text-xs text-white/40">
              Investor inquiries welcome. This page is not an offer to sell
              securities and does not provide investment advice.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-6">
            <SafeCoreDiagram />
          </div>
        </Container>
      </Section>

      {/* Problem teaser */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>The problem</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Location information is most valuable when it's accurate,
                current, and accessible — especially during an incident.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Existing GPS watches can be bulky or socially obvious for some
                children. Emergency activation needs to be simple enough for
                a child under stress to use, and caregivers need context, not
                merely a map dot, when something goes wrong.
              </p>
              <Link
                href="/problem"
                className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                Read the full problem statement
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: MapPin, label: "Awareness", copy: "Reliable, current location context for caregivers." },
                { icon: ShieldCheck, label: "Preparedness", copy: "Safe zones and defined events configured in advance." },
                { icon: Radio, label: "Response", copy: "A simple emergency interaction when seconds matter." },
                { icon: HeartHandshake, label: "Control", copy: "Caregiver-controlled, time-limited emergency sharing." },
              ].map((f) => (
                <Card key={f.label} className="bg-surface">
                  <f.icon className="h-5 w-5 text-accent" aria-hidden />
                  <div className="mt-3 text-sm font-semibold">{f.label}</div>
                  <p className="mt-1 text-sm text-muted">{f.copy}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Solution teaser */}
      <Section className="bg-surface">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>The solution</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              SafeCore: one secure safety core, multiple everyday form
              factors.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              A single connected safety module, proposed to work across a
              bracelet, pendant, backpack clip and other everyday form
              factors — so a child can wear whichever fits their routine,
              without changing how the safety system works underneath.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {formFactors.map((f) => (
              <Card key={f.name}>
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold">{f.name}</div>
                  <StatusTag status={f.status} />
                </div>
                <p className="mt-2 text-sm text-muted">{f.description}</p>
              </Card>
            ))}
          </div>
          <Link
            href="/solution"
            className="focus-ring mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            See how SafeCore works
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Container>
      </Section>

      {/* Demo teaser */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <Card className="bg-[var(--surface-dark)] text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
                    Interactive concept demonstration
                  </span>
                  <span className="rounded-full bg-danger px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Demo mode
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  {["Normal", "Unusual movement", "Alert", "SOS", "Emergency mode"].map(
                    (step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs">
                          {i + 1}
                        </span>
                        <span className="text-sm text-white/80">{step}</span>
                      </div>
                    )
                  )}
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Product demo</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                See the emergency response flow, end to end.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Simulate a device going from a normal state through an
                emergency, and see exactly what information a caregiver would
                receive — all built with clearly labeled synthetic demo data.
              </p>
              <Link
                href="/product"
                className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                Try the interactive demo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Differentiation */}
      <Section className="bg-surface">
        <Container>
          <Eyebrow>Why Project Guardian</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Designed to differentiate through platform thinking, not a single
            gadget.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiationPoints.slice(0, 6).map((d) => (
              <div key={d.title}>
                <div className="text-sm font-semibold">{d.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Funding CTA */}
      <Section dark>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Seeking strategic investment and funding conversations.
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              Review the roadmap, use of funds, and risks — then reach out if
              it's a fit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/funding"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
            >
              View Funding Plan
            </Link>
            <Link
              href="/contact?type=investor"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10"
            >
              Discuss Investment
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
