import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, UserCircle2 } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Project Guardian: mission, approach, and an honest founder placeholder — no invented credentials.",
};

const principles = [
  {
    title: "Accuracy over hype",
    description:
      "Every claim on this site is labeled honestly as built, planned, or an illustrative assumption. We would rather under-promise than fabricate traction.",
  },
  {
    title: "Privacy by design",
    description:
      "Data minimization, encryption, and controlled access are treated as foundational requirements, not features to bolt on after launch.",
  },
  {
    title: "Built to validate assumptions before scaling",
    description:
      "Hardware, regulatory, and go-to-market assumptions are tested in sequence, one at a time, rather than assumed away.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section dark className="pb-16 pt-14 sm:pt-20">
        <Container>
          <Eyebrow className="text-[#7ee8e3]">About</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            About Project Guardian.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Project Guardian is being built thoughtfully around child-safety
            technology: honest about what is built versus planned, designed
            with privacy as a first principle, and approached as a modular
            platform rather than a single gadget.
          </p>
        </Container>
      </Section>

      {/* Founder */}
      <Section>
        <Container>
          <Eyebrow>Team</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Founder.
          </h2>
          <Card className="mt-8 max-w-xl">
            <UserCircle2 className="h-10 w-10 text-muted" aria-hidden />
            <div className="mt-4 text-base font-semibold">
              Founder profile coming soon.
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Project Guardian is currently a founder-led, pre-commercial
              effort. Full team information will be added as the company
              grows.
            </p>
          </Card>
        </Container>
      </Section>

      {/* Approach */}
      <Section className="bg-surface">
        <Container>
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Three principles that guide how this gets built.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {principles.map((p) => (
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

      {/* Risks teaser */}
      <Section>
        <Container>
          <Card className="max-w-2xl">
            <div className="text-sm font-semibold">Upfront about risk</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Building hardware for children is hard, and we&apos;d rather say
              so plainly than gloss over it. Hardware complexity, regulatory
              requirements, and market adoption are all real, unresolved
              risks at this stage. The full risk assessment lives on the{" "}
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
              Questions? Reach out.
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              Get in touch directly, or check the FAQ for quick answers.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/faq"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10"
            >
              Read the FAQ
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
