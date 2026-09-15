import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { roadmapPhases, type RoadmapPhase } from "@/lib/content/roadmap";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "The sequential, ten-phase roadmap from research to commercial launch — most phases have not started yet, by design, until earlier ones are validated.",
};

const statusLabel: Record<RoadmapPhase["status"], string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
};

const statusClasses: Record<RoadmapPhase["status"], string> = {
  completed: "bg-success-soft text-success",
  "in-progress": "bg-accent-soft text-[var(--accent-strong)]",
  planned: "bg-surface-strong text-muted",
};

export default function RoadmapPage() {
  return (
    <>
      <Section dark className="pb-16 pt-14 sm:pt-20">
        <Container>
          <Eyebrow className="text-[#7ee8e3]">Roadmap</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            From concept to commercial launch.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            The roadmap below shows ten sequential phases. Most of them have
            not started yet — that is intentional, not a weakness. We
            understand what we know, what we don&apos;t, and have a plan to
            validate the unknowns in order, rather than skipping ahead.
          </p>
        </Container>
      </Section>

      {/* Timeline */}
      <Section>
        <Container>
          <ol className="relative">
            {roadmapPhases.map((p, i) => (
              <li key={p.phase} className="relative flex gap-6 pb-10 last:pb-0">
                {i < roadmapPhases.length - 1 && (
                  <span
                    className="absolute left-5 top-11 h-[calc(100%-1.75rem)] w-px bg-border"
                    aria-hidden
                  />
                )}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold">
                  {p.phase}
                </span>
                <div className="min-w-0 flex-1 pt-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-lg font-semibold tracking-tight">
                      {p.name}
                    </h2>
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide uppercase",
                        statusClasses[p.status]
                      )}
                    >
                      {statusLabel[p.status]}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Dates are intentionally omitted until they can be committed to
            with confidence — the roadmap shows sequence and dependency, not
            fixed timelines.
          </p>
        </Container>
      </Section>

      {/* End CTA */}
      <Section dark>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              See what funding unlocks at each phase.
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              Review the funding plan, use of funds, and risks.
            </p>
          </div>
          <Link
            href="/funding"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
          >
            See what funding unlocks
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Container>
      </Section>
    </>
  );
}
