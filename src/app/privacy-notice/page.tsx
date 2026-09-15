import type { Metadata } from "next";
import { Container, Section, Eyebrow } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "An honest, plain-language placeholder describing what this website collects today — not a finished legal privacy policy.",
};

export default function PrivacyNoticePage() {
  return (
    <Section className="pb-24 pt-12">
      <Container className="max-w-3xl">
        <Eyebrow>Privacy notice</Eyebrow>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Privacy notice for this website
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-muted">
          This is a plain-language placeholder notice, not a finished legal
          privacy policy. No legal review has taken place yet. It covers
          this website only — Project Guardian is pre-commercial and no
          product currently exists or collects data from a device.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-lg font-semibold">What this website collects</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              When you use the contact form or the early access form, we
              collect the information you choose to submit: your name,
              email address, organization, investor details (where
              applicable), your message, and your consent to be contacted.
              We use this only to respond to your inquiry.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Analytics</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Basic, privacy-respecting analytics may be used to understand
              general site usage (such as which pages are visited). No
              specific analytics vendor is implemented at this time.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">We do not sell personal data</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Project Guardian does not sell personal data collected through
              this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">How form submissions are used</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Information submitted through a form on this site is used only
              to respond to your inquiry — for example, to follow up on an
              investor conversation or an early access registration. It is
              not used for any other purpose.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Scope of this notice</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              This notice covers the website you are currently using. It
              does not cover a shipped product, because no Project Guardian
              product exists yet.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">What comes next</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              This notice will be replaced by a full privacy policy,
              reviewed by legal counsel, before any product ships.
              Questions: hello@projectguardian.example.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
