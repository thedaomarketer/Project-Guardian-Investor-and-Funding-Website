import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Project Guardian as an investor, strategic partner, technology partner, parent, or school.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;

  return (
    <Section className="pt-12">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's talk.
          </h1>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            Whether you're evaluating an investment, exploring a partnership, or
            representing a school or institution, tell us a bit about what you're
            looking for and we'll follow up directly.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted">
            <Mail className="h-4 w-4" aria-hidden />
            hello@projectguardian.example
          </div>
          <Card className="mt-8 bg-surface">
            <p className="text-sm text-muted">
              Investor inquiries welcome. Investment materials are available upon
              request. Nothing on this site is an offer to sell securities or a
              promise of investment returns.
            </p>
          </Card>
        </div>
        <Card>
          <ContactForm defaultType={type} />
        </Card>
      </Container>
    </Section>
  );
}
