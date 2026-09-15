import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { StatusTag, type BuildStatus } from "@/components/ui/status-tag";
import { SafeCoreDiagram } from "@/components/illustrations/safecore-diagram";
import { formFactors } from "@/lib/content/form-factors";
import { differentiationPoints } from "@/lib/content/differentiation";

export const metadata: Metadata = {
  title: "The Solution",
  description:
    "SafeCore: a proposed modular connected safety module designed to work across multiple everyday wearable form factors.",
};

const pipelineSteps: { label: string; description: string; status: BuildStatus }[] = [
  {
    label: "Device core",
    description: "The SafeCore module — sensors, positioning, and secure identity.",
    status: "prototype",
  },
  {
    label: "Connectivity",
    description: "Cellular and Bluetooth links carrying device data off-device.",
    status: "prototype",
  },
  {
    label: "Cloud platform",
    description: "Ingests device data and maintains state for each registered device.",
    status: "planned",
  },
  {
    label: "Safety event engine",
    description: "Evaluates device data against caregiver-defined rules and zones.",
    status: "planned",
  },
  {
    label: "Parent application",
    description: "Where a caregiver sees status, location context, and history.",
    status: "planned",
  },
  {
    label: "Emergency sharing",
    description: "Caregiver-controlled, time-limited sharing with chosen contacts.",
    status: "planned",
  },
];

const modularDifferentiation = differentiationPoints.filter((d) =>
  [
    "Modular hardware architecture",
    "Multiple everyday form factors",
    "Hardware and software designed together",
    "Potential platform ecosystem",
  ].includes(d.title)
);

export default function SolutionPage() {
  return (
    <>
      <Section dark className="pb-16 pt-14 sm:pt-20">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow className="text-[#7ee8e3]">The solution</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              SafeCore: one secure safety core, multiple everyday form
              factors.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              SafeCore is a proposed architecture for a single connected
              safety module designed to work across a bracelet, pendant,
              backpack clip, and other everyday form factors. A child can
              wear whichever fits their routine, without changing how the
              underlying safety system works.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-6">
            <SafeCoreDiagram />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Concept architecture</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            How the concept flow is designed to work, end to end.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Each stage is at a different point of maturity today, labeled
            below. This is a proposed architecture, not a description of a
            finished system.
          </p>
          <div className="mt-10 flex flex-wrap items-stretch gap-3">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex items-stretch gap-3">
                <Card className="w-56">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-sm font-semibold">{step.label}</div>
                  </div>
                  <div className="mt-2">
                    <StatusTag status={step.status} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </Card>
                {i < pipelineSteps.length - 1 && (
                  <div className="hidden items-center sm:flex" aria-hidden>
                    <ArrowRight className="h-5 w-5 text-muted" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <Eyebrow>Form factors</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            One module, worn the way that fits a child&apos;s routine.
          </h2>
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
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            The jewelry/earring form factor is a future research direction
            only. It is not a committed product and should not be read as
            one.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Why modular</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            One safety system, designed to move with the child.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modularDifferentiation.map((d) => (
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

      <Section dark>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Go deeper on the architecture, or try it yourself.
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              See the technical detail behind SafeCore, or walk through the
              emergency response flow in the interactive demo.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/technology"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
            >
              See the Technical Architecture
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/product"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10"
            >
              Try the Interactive Demo
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
