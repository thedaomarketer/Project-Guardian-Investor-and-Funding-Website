import type { Metadata } from "next";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { EarlyAccessForm } from "@/components/forms/early-access-form";

export const metadata: Metadata = {
  title: "Early Access",
  description:
    "Join the Project Guardian early access waitlist to help shape and validate a future child safety product.",
};

export default function EarlyAccessPage() {
  return (
    <Section className="pt-12">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <Eyebrow>Early access</Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Help shape what we build.
          </h1>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            Project Guardian is in concept and prototype development. Joining the
            waitlist lets us reach out as the product takes shape — for feedback,
            pilot opportunities, and future availability.
          </p>
          <Card className="mt-8 bg-surface">
            <p className="text-sm text-muted">
              Joining this list does not guarantee product availability, a
              specific launch date, or pricing. We will only contact you about
              Project Guardian.
            </p>
          </Card>
        </div>
        <Card>
          <EarlyAccessForm />
        </Card>
      </Container>
    </Section>
  );
}
