import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  KeyRound,
  Users,
  Timer,
  ScrollText,
  UserCheck,
  Fingerprint,
  RefreshCw,
  Trash2,
  UserCog,
  Ban,
  Smartphone,
  Cloud,
  ShieldAlert,
  Bell,
} from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card, CardMuted } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Safety System — Privacy & Security",
  description:
    "How Project Guardian is designing data minimization, encryption, access control, and a defined threat model around a product that handles children's location data.",
};

const privacyPrinciples = [
  {
    icon: Lock,
    title: "Data minimization",
    description: "Collect only what a defined safety function actually needs.",
  },
  {
    icon: KeyRound,
    title: "Encryption",
    description: "Data protected in transit and at rest, by design.",
  },
  {
    icon: Fingerprint,
    title: "Strong authentication",
    description: "Account access protected beyond a password alone.",
  },
  {
    icon: Users,
    title: "Role-based permissions",
    description: "What an account can see and do depends on its role.",
  },
  {
    icon: Timer,
    title: "Temporary emergency access",
    description: "Extra sharing during an incident expires automatically.",
  },
  {
    icon: ScrollText,
    title: "Audit logging",
    description: "Sensitive actions, like access changes, are recorded.",
  },
  {
    icon: UserCheck,
    title: "Controlled caregiver access",
    description: "Adding a caregiver is an explicit, reviewable action.",
  },
  {
    icon: ShieldCheck,
    title: "Secure device identity",
    description: "Each device authenticates with its own unique identity.",
  },
  {
    icon: RefreshCw,
    title: "Secure firmware updates",
    description: "Only signed, verified firmware can be installed.",
  },
  {
    icon: Trash2,
    title: "Limited data retention",
    description: "Data is kept only as long as the stated purpose requires.",
  },
  {
    icon: UserCog,
    title: "Account security",
    description: "Session and login behavior are designed to be monitored.",
  },
  {
    icon: Ban,
    title: "Abuse prevention",
    description: "Controls aimed at limiting misuse of location and access.",
  },
];

const threatModel = [
  {
    threat: "Account takeover",
    approach:
      "Designed around strong authentication and session monitoring.",
  },
  {
    threat: "Unauthorized caregiver access",
    approach:
      "Explicit, reviewable invitations and role-based permissions for who can see or manage a child's data.",
  },
  {
    threat: "Device theft",
    approach:
      "Device identity and access are tied to the account, not the physical hardware alone.",
  },
  {
    threat: "Device tampering",
    approach:
      "Secure boot and signed firmware, so modified or unauthorized firmware is not intended to run.",
  },
  {
    threat: "Replay attacks",
    approach:
      "Authenticated, encrypted device-to-cloud communication designed to resist captured-and-replayed messages.",
  },
  {
    threat: "Credential compromise",
    approach:
      "Strong authentication plus monitoring intended to catch anomalous logins.",
  },
  {
    threat: "API abuse",
    approach:
      "Authenticated, rate-limited backend APIs designed to limit automated or excessive access.",
  },
  {
    threat: "Location data exposure",
    approach:
      "Encryption, minimization, and limited retention designed to reduce what's exposed if a system is compromised.",
  },
];

export default function SafetySystemPage() {
  return (
    <>
      <Section dark className="pb-16 pt-14 sm:pt-20">
        <Container>
          <Eyebrow className="text-[#7ee8e3]">Privacy &amp; Security</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy and security are part of the design, not an afterthought.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            A product that handles a child&apos;s location is handling some of the
            most sensitive data a family has. We&apos;re building Project
            Guardian&apos;s architecture around minimization and caregiver control
            from the start — not adding privacy and security on at the end.
            The details below describe how we&apos;re designing the system today;
            they are not a claim that the system has been audited, certified,
            or finished.
          </p>
        </Container>
      </Section>

      {/* Privacy principles */}
      <Section>
        <Container>
          <Eyebrow>Privacy principles</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            The principles the architecture is being built around.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {privacyPrinciples.map((p) => (
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

      {/* Compliance language */}
      <Section className="bg-surface">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Regulatory approach</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Designed with Canadian privacy law in mind — not a compliance
              claim.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Project Guardian is designed with PIPEDA and applicable
              Canadian privacy requirements in mind: identifying why data is
              collected, seeking meaningful consent, limiting collection and
              retention, and applying safeguards appropriate to sensitive
              data like a child&apos;s location. We do not describe the product as
              &quot;PIPEDA-compliant&quot; or fully compliant with any privacy law
              today — Project Guardian is pre-commercial, has not undergone a
              privacy audit, and a formal compliance review with legal
              counsel is planned before launch.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Where the product serves users in Quebec, we&apos;re tracking
              Quebec&apos;s Law 25 as a separate, stricter regime — including its
              express-consent and parental-consent requirements for minors —
              rather than assuming the federal PIPEDA baseline is sufficient
              there.
            </p>
          </div>
        </Container>
      </Section>

      {/* Security architecture */}
      <Section>
        <Container>
          <Eyebrow>Security architecture</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            How data is intended to move through the system.
          </h2>
          <CardMuted className="mt-8">
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
              {[
                { icon: Smartphone, label: "Device" },
                { icon: Lock, label: "Secure connection" },
                { icon: Cloud, label: "Cloud" },
                { icon: UserCheck, label: "Authenticated user" },
                { icon: ShieldAlert, label: "Safety event engine" },
                { icon: Bell, label: "Alert system" },
              ].map((step, i, arr) => (
                <span key={step.label} className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5">
                    <step.icon className="h-4 w-4 text-accent" aria-hidden />
                    {step.label}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight
                      className="h-4 w-4 text-muted"
                      aria-hidden
                    />
                  )}
                </span>
              ))}
            </div>
          </CardMuted>

          <h3 className="mt-12 text-xl font-semibold tracking-tight">
            The threat model we&apos;re designing against
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            Rather than a general promise of &quot;security,&quot; here&apos;s the specific
            set of risks the architecture is intended to address, and how.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {threatModel.map((t) => (
              <Card key={t.threat}>
                <div className="text-sm font-semibold">{t.threat}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {t.approach}
                </p>
              </Card>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            No system is perfectly secure. Project Guardian does not claim
            the product cannot be hacked — only that security is a
            first-class design constraint, not an afterthought.
          </p>
        </Container>
      </Section>

      {/* CTA */}
      <Section dark>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              See the architecture this is built on.
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              Review the proposed SafeCore technology, or reach out with
              investor questions about the risk and compliance roadmap.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/technology"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10"
            >
              Explore the Technology
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
