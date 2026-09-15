import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  MapPin,
  Radio,
  Bluetooth,
  Battery,
  Shield,
  Cloud,
  Database,
  Zap,
  Smartphone,
  Share2,
  Sparkles,
} from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card, CardMuted } from "@/components/ui/card";
import { StatusTag, type BuildStatus } from "@/components/ui/status-tag";
import { roadmapPhases } from "@/lib/content/roadmap";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The proposed SafeCore architecture — device, connectivity, cloud, and app components — and the build stage of each piece today.",
};

const architectureComponents: {
  icon: typeof Cpu;
  name: string;
  description: string;
  status: BuildStatus;
}[] = [
  {
    icon: Cpu,
    name: "SafeCore module",
    description:
      "The shared safety core proposed to sit inside every form factor — the common hardware/firmware unit the rest of the system is built around.",
    status: "prototype",
  },
  {
    icon: MapPin,
    name: "GNSS positioning",
    description:
      "Satellite-based location fixes, with accuracy that varies by sky visibility — see target specifications below.",
    status: "prototype",
  },
  {
    icon: Radio,
    name: "Cellular connectivity — LTE-M / NB-IoT",
    description:
      "Low-power wide-area cellular for reporting location and status without relying on a paired phone nearby.",
    status: "planned",
  },
  {
    icon: Bluetooth,
    name: "Bluetooth local positioning",
    description:
      "Short-range proximity and pairing, intended as a complement to GNSS for local/offline scenarios, not a primary positioning method.",
    status: "planned",
  },
  {
    icon: Zap,
    name: "Sensors",
    description:
      "Motion and environmental sensors under evaluation to help characterize defined safety events.",
    status: "planned",
  },
  {
    icon: Shield,
    name: "Secure device identity",
    description:
      "A unique cryptographic identity per device, provisioned at manufacture, used to authenticate it to backend services.",
    status: "planned",
  },
  {
    icon: Battery,
    name: "Battery system",
    description:
      "Rechargeable battery and power management balancing standby life against location-check frequency.",
    status: "prototype",
  },
  {
    icon: Cpu,
    name: "Firmware",
    description:
      "On-device software governing sensing, positioning, connectivity, and power behavior.",
    status: "in-development",
  },
  {
    icon: Cloud,
    name: "Cloud platform",
    description:
      "Backend services that receive device data, apply the safety-event logic, and serve the parent application.",
    status: "planned",
  },
  {
    icon: Database,
    name: "Database",
    description:
      "Storage for account, device, and event data, designed around data minimization and limited retention.",
    status: "planned",
  },
  {
    icon: Shield,
    name: "Safety event engine",
    description:
      "Server-side logic that evaluates device data against caregiver-configured safe zones and defined events.",
    status: "planned",
  },
  {
    icon: Radio,
    name: "Alert engine",
    description:
      "Delivers notifications to caregivers when a defined safety event is detected.",
    status: "planned",
  },
  {
    icon: Smartphone,
    name: "Parent application",
    description:
      "The caregiver-facing app for location, status, safe zones, and alerts.",
    status: "in-development",
  },
  {
    icon: Share2,
    name: "Emergency sharing",
    description:
      "Caregiver-controlled, time-limited sharing of a child's location and status with additional trusted contacts during an incident.",
    status: "planned",
  },
  {
    icon: Sparkles,
    name: "AI safety analytics",
    description:
      "Exploratory analytics research to help surface unusual patterns — a future-roadmap idea, not a current capability.",
    status: "future",
  },
];

const nearTermPhases = roadmapPhases.slice(0, 4);

export default function TechnologyPage() {
  return (
    <>
      <Section dark className="pb-16 pt-14 sm:pt-20">
        <Container>
          <Eyebrow className="text-[#7ee8e3]">Technology</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            The technology behind SafeCore.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            This page lays out the proposed SafeCore architecture — the
            device, connectivity, cloud, and app components we intend to
            build — and is honest about where each piece actually stands
            today. Project Guardian is pre-commercial: some elements exist as
            early prototypes, most are still planned or in development, and a
            few are future research ideas. Every component below carries a
            status label so it&apos;s clear which is which.
          </p>
        </Container>
      </Section>

      {/* Architecture */}
      <Section>
        <Container>
          <Eyebrow>Proposed architecture</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            From the wearable to the caregiver&apos;s phone.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            Fifteen components make up the system end to end, spanning the
            physical device, its connectivity, the cloud services that apply
            safety logic, and the parent-facing application.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {architectureComponents.map((c) => (
              <Card key={c.name}>
                <div className="flex items-start justify-between gap-3">
                  <c.icon className="h-5 w-5 text-accent" aria-hidden />
                  <StatusTag status={c.status} />
                </div>
                <div className="mt-3 text-sm font-semibold">{c.name}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {c.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Target specifications */}
      <Section className="bg-surface">
        <Container>
          <Eyebrow>Target specifications, not final</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Engineering targets, informed by industry-typical performance —
            not measured results.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            Project Guardian has not built a validated hardware prototype or
            run field tests. The figures below describe what&apos;s typical for
            comparable consumer components, used here to set honest
            expectations for the engineering program — not numbers Project
            Guardian has achieved.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <CardMuted>
              <MapPin className="h-5 w-5 text-accent" aria-hidden />
              <div className="mt-3 text-sm font-semibold">
                Location accuracy
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Open-sky accuracy in the range of roughly 3–5 meters is
                typical for the consumer-grade GNSS modules used in low-cost
                wearables, per published component datasheets. Accuracy
                degrades in dense urban areas (errors of tens of meters are
                well documented in &quot;urban canyon&quot; conditions) and GNSS
                commonly cannot produce a fix at all indoors — a physical
                limitation of GNSS generally, not specific to any device.
                This is our engineering target, subject to validation once a
                prototype exists.
              </p>
            </CardMuted>
            <CardMuted>
              <Battery className="h-5 w-5 text-accent" aria-hidden />
              <div className="mt-3 text-sm font-semibold">
                Battery life is a tradeoff, not a fixed number
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Update frequency is the single biggest driver of battery
                consumption in a location-reporting device. Comparable
                shipped products illustrate the spread: devices emphasizing
                continuous, real-time tracking commonly report roughly
                16–24 hours per charge, while devices emphasizing long
                standby with infrequent checks report ranges from about a
                week up to 30 days. We&apos;re designing SafeCore around a
                configurable balance between the two, to be tuned and
                validated during prototyping — not toward one marketed
                number.
              </p>
            </CardMuted>
            <CardMuted>
              <Radio className="h-5 w-5 text-accent" aria-hidden />
              <div className="mt-3 text-sm font-semibold">
                Connectivity approach
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We&apos;re targeting LTE-M as the primary cellular technology,
                since it supports mobility/handover between towers and is
                available from Bell, Rogers, and Telus in Canada today, with
                NB-IoT as a possible power-efficiency option for later
                revisions. Both support Power Saving Mode and eDRX, which let
                a device sleep deeply between scheduled reports to extend
                battery life. Population coverage is high, but land-area
                coverage in Canada is much lower, so connectivity may vary
                by region — a real constraint we intend to design around,
                not hide.
              </p>
            </CardMuted>
          </div>
        </Container>
      </Section>

      {/* Security practices */}
      <Section>
        <Container>
          <Eyebrow>Designed with security practices in mind</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Hardware and firmware security as a design goal from day one.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            Project Guardian&apos;s hardware and firmware architecture is being
            designed with industry-standard IoT security practices in mind,
            consistent with guidance from NIST (NISTIR 8259 / 8259A —
            &quot;Foundational Cybersecurity Activities for IoT Device
            Manufacturers&quot;) and the GSMA IoT Security Guidelines. These are
            design goals for the development program — not completed
            certifications, audits, or claims of current compliance.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Card>
              <Shield className="h-5 w-5 text-accent" aria-hidden />
              <div className="mt-3 text-sm font-semibold">Secure boot</div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                A hardware root of trust intended to verify each stage of
                boot firmware before it runs, so unsigned or tampered
                firmware can&apos;t execute.
              </p>
            </Card>
            <Card>
              <Cpu className="h-5 w-5 text-accent" aria-hidden />
              <div className="mt-3 text-sm font-semibold">
                Signed firmware updates
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                Over-the-air updates cryptographically signed by Project
                Guardian, verified on-device before being applied.
              </p>
            </Card>
            <Card>
              <Cloud className="h-5 w-5 text-accent" aria-hidden />
              <div className="mt-3 text-sm font-semibold">
                Unique per-device identity
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                Each device is intended to carry a unique cryptographic
                identity, provisioned at manufacture, used to authenticate it
                to backend services.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Roadmap teaser */}
      <Section className="bg-surface">
        <Container>
          <Eyebrow>What&apos;s next</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Near-term hardware roadmap.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearTermPhases.map((p) => (
              <Card key={p.phase}>
                <div className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Phase {p.phase}
                </div>
                <div className="mt-1 text-sm font-semibold">{p.name}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </Card>
            ))}
          </div>
          <Link
            href="/roadmap"
            className="focus-ring mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            See the full hardware roadmap
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Container>
      </Section>

      {/* CTA */}
      <Section dark>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Want the privacy and security detail behind this architecture?
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              Read how we&apos;re designing around data minimization, encryption,
              and a defined threat model.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/roadmap"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10"
            >
              See the full hardware roadmap
            </Link>
            <Link
              href="/safety-system"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-[var(--accent-strong)]"
            >
              Read about privacy &amp; security
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
