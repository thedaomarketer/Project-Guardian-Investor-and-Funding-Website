import type { Metadata } from "next";
import { UserCircle2, MapPinned, HeartPulse, History, ShieldCheck } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { DemoModeBadge } from "@/components/ui/status-tag";
import { ProductDemo } from "@/components/demo/product-demo";
import { demoChildName, demoGuardianName } from "@/lib/content/demo-scenarios";

export const metadata: Metadata = {
  title: "Product Demo",
  description:
    "An interactive concept demonstration of the Project Guardian emergency response flow and parent dashboard, using synthetic demo data.",
};

export default function ProductPage() {
  return (
    <>
      <Section className="pt-12">
        <Container>
          <Eyebrow>Product demo</Eyebrow>
          <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            See the concept in action — with synthetic demo data.
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            This is an interactive concept demonstration, not a live product. It simulates
            what a caregiver could see across normal use and an emergency, using clearly
            fictional names, locations and events. Nothing here reflects real device
            telemetry.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <ProductDemo />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <Eyebrow>Parent dashboard concept</Eyebrow>
              <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
                A single command center for a caregiver.
              </h2>
            </div>
            <DemoModeBadge />
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Below is a simulated snapshot of the kind of dashboard Project Guardian is
            designing — child profile, safe zones, device health and a recent audit log in
            one place, instead of scattered tools.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <UserCircle2 className="h-5 w-5 text-accent" aria-hidden />
              <div className="mt-3 text-sm font-semibold">Child profile</div>
              <p className="mt-1 text-sm text-muted">{demoChildName} · Age group: 8–10 (demo)</p>
              <p className="mt-1 text-xs text-muted">Managed by {demoGuardianName}</p>
            </Card>
            <Card>
              <MapPinned className="h-5 w-5 text-accent" aria-hidden />
              <div className="mt-3 text-sm font-semibold">Safe zones</div>
              <ul className="mt-1 space-y-1 text-sm text-muted">
                <li>Home — active</li>
                <li>School — active</li>
                <li>Grandma&apos;s house — active</li>
              </ul>
            </Card>
            <Card>
              <HeartPulse className="h-5 w-5 text-accent" aria-hidden />
              <div className="mt-3 text-sm font-semibold">Device health</div>
              <p className="mt-1 text-sm text-muted">Firmware up to date (demo)</p>
              <p className="mt-1 text-sm text-muted">Signal strength: Good</p>
            </Card>
            <Card>
              <History className="h-5 w-5 text-accent" aria-hidden />
              <div className="mt-3 text-sm font-semibold">Audit log (excerpt)</div>
              <p className="mt-1 text-xs text-muted">
                {demoGuardianName} updated &quot;School&quot; safe zone hours — 2 days ago (demo)
              </p>
              <p className="mt-1 text-xs text-muted">
                {demoGuardianName} added trusted contact &quot;Uncle James&quot; — 5 days ago (demo)
              </p>
            </Card>
          </div>

          <Card className="mt-6 flex items-start gap-3 bg-background">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
            <p className="text-sm text-muted">
              Every privileged action a caregiver takes — adding a contact, changing a safe
              zone, starting emergency sharing — is designed to be recorded in an audit log,
              visible to authorized caregivers.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
