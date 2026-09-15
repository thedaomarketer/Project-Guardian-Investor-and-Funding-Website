import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  competitors,
  comparisonDimensions,
  dimensionLabels,
} from "@/lib/content/competitors";

export const metadata: Metadata = {
  title: "Competitive Landscape",
  description:
    "An honest, factual comparison of publicly available information about existing child-location products against Project Guardian's planned design.",
};

function CoBadge() {
  return (
    <sup className="ml-1 rounded bg-surface-strong px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-muted">
      co.
    </sup>
  );
}

export default function CompetitionPage() {
  return (
    <>
      <Section dark className="pb-16 pt-14 sm:pt-20">
        <Container>
          <Eyebrow className="text-[#7ee8e3]">Competitive landscape</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            An honest look at the landscape.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Project Guardian is an emerging concept, not yet shipping. The
            table below compares publicly available information about
            existing products against Project Guardian&apos;s{" "}
            <em>planned</em> design, and should be read that way. Project
            Guardian does not attack competitors and only lists features it
            has evidence for.
          </p>
        </Container>
      </Section>

      {/* Company summary cards */}
      <Section>
        <Container>
          <Eyebrow>Who&apos;s in this comparison</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Four shipping products, and one concept still in development.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competitors.map((c) => {
              const isGuardian = c.name.startsWith("Project Guardian");
              return (
                <Card
                  key={c.name}
                  className={cn(isGuardian && "border-accent bg-accent-soft")}
                >
                  <div className="text-sm font-semibold">{c.name}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.summary}
                  </p>
                  {isGuardian && (
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent">
                      The only unreleased product in this comparison
                    </p>
                  )}
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Comparison table */}
      <Section className="bg-surface">
        <Container>
          <Eyebrow>Feature comparison</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            A dimension-by-dimension view.
          </h2>

          <div className="mt-10 overflow-x-auto rounded-[var(--radius-lg)] border border-border">
            <table className="w-full min-w-[880px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-background">
                  <th className="sticky left-0 z-10 bg-background p-4 text-xs font-semibold uppercase tracking-wide text-muted">
                    Dimension
                  </th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={cn(
                        "p-4 text-xs font-semibold uppercase tracking-wide text-muted",
                        c.name.startsWith("Project Guardian") &&
                          "bg-accent-soft text-[var(--accent-strong)]"
                      )}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonDimensions.map((dim, i) => (
                  <tr
                    key={dim}
                    className={cn(
                      "border-t border-border",
                      i % 2 === 1 && "bg-background/60"
                    )}
                  >
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-inherit p-4 align-top text-sm font-medium"
                    >
                      {dimensionLabels[dim]}
                    </th>
                    {competitors.map((c) => {
                      const cell = c.values[dim];
                      const isGuardian = c.name.startsWith("Project Guardian");
                      return (
                        <td
                          key={c.name + dim}
                          className={cn(
                            "p-4 align-top text-muted",
                            isGuardian && "bg-accent-soft/40 text-foreground"
                          )}
                        >
                          {cell.value}
                          {cell.note === "co" && <CoBadge />}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-1.5 text-xs text-muted">
            <p>
              <sup className="mr-1 rounded bg-surface-strong px-1 py-0.5 font-semibold uppercase tracking-wide">
                co.
              </sup>{" "}
              = the company&apos;s own published claim, not independently
              verified by Project Guardian.
            </p>
            <p>
              Project Guardian&apos;s column shows design intent for a
              product still in development, not shipped features.
            </p>
          </div>
        </Container>
      </Section>

      {/* Differentiation teaser */}
      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Where Project Guardian aims to differ</Eyebrow>
            <p className="mt-4 leading-relaxed text-muted">
              Beyond feature parity, Project Guardian is designed around a
              single safety core that can move across form factors, a
              structured emergency timeline, and caregiver-controlled,
              time-limited sharing — as planned design choices, not shipped
              claims. For the full differentiation story, see the solution
              page.
            </p>
            <Link
              href="/solution"
              className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              Read the full differentiation story
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section dark>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              See the SafeCore solution, then the funding plan behind it.
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              How the planned design translates into a modular product — and
              what it would take to build it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/solution"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
            >
              Explore the Solution
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
