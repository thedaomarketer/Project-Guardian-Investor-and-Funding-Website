import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Watch,
  Timer,
  MapPinned,
  Clock,
  Lock,
  PackageOpen,
} from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "The Problem",
  description:
    "Why caregiver awareness tools fall short today, and what Project Guardian is designed to address.",
};

const problemPoints = [
  {
    icon: Watch,
    title: "Devices kids don't want to wear",
    description:
      "Many GPS watches are bulky or visibly read as a tracking device. Some children resist wearing something that stands out to friends as a monitoring tool, which can mean it's left at home exactly when it might matter.",
  },
  {
    icon: Timer,
    title: "Emergency activation that takes too long",
    description:
      "A child under stress doesn't have time to unlock a phone, open an app, and navigate menus. An emergency interaction needs to be simple and fast enough to use in seconds, not something that requires calm, deliberate steps.",
  },
  {
    icon: MapPinned,
    title: "A map dot without context",
    description:
      "Knowing where a device is located is only part of the picture. Caregivers also need to know the device's status, how confident that location is, and what actually happened — not just a single point on a map.",
  },
  {
    icon: Clock,
    title: "Location value is time-critical",
    description:
      "A location reading that's minutes old, or a position with low confidence, matters far less than one that's current and accurate. That accuracy and freshness matter most in exactly the moments something may be wrong.",
  },
  {
    icon: Lock,
    title: "Sharing needs to be controlled, not automatic",
    description:
      "During an incident, a caregiver should be able to decide who sees a child's information, what they see, and for how long — rather than location or status being broadcast broadly or shared indefinitely by default.",
  },
  {
    icon: PackageOpen,
    title: "Single-purpose gadgets are easy to forget",
    description:
      "Many existing solutions are standalone devices a child has to remember to carry in addition to everything else. A safety device that isn't already part of a child's routine is a device that's more likely to be left behind.",
  },
];

export default function ProblemPage() {
  return (
    <>
      <Section dark className="pb-16 pt-14 sm:pt-20">
        <Container>
          <Eyebrow className="text-[#7ee8e3]">The problem</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Location information is most valuable when it&apos;s accurate,
            current, and accessible.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Caregivers need reliable awareness of where a child is and what&apos;s
            happening with them — especially in the moments that matter most.
            Existing tools have real gaps in how they&apos;re worn, how quickly
            they can be used, and how much context they actually provide.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Where existing tools fall short</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Six gaps we&apos;re designing Project Guardian around.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problemPoints.map((p) => (
              <Card key={p.title}>
                <p.icon className="h-5 w-5 text-accent" aria-hidden />
                <div className="mt-3 text-sm font-semibold">{p.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Our starting point</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              We focus on awareness and response — not promises we can&apos;t
              back up.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              We don&apos;t have a verified statistic to cite on this page, so we
              haven&apos;t included one. Project Guardian is being designed to
              help caregivers stay aware of a child&apos;s location and status
              and to respond faster when a defined safety event occurs. It is
              not designed or positioned to prevent or detect any specific
              crime, and it does not guarantee a child&apos;s safety.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/solution"
                className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                See how Project Guardian approaches this
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/contact?type=investor"
                className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                Investor Opportunity
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              See how the SafeCore concept is designed to address this.
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              One safety core, proposed across multiple everyday form
              factors.
            </p>
          </div>
          <Link
            href="/solution"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
          >
            Explore the Solution
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Container>
      </Section>
    </>
  );
}
