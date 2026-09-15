import type { Metadata } from "next";
import { Container, Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { LoginForm } from "@/components/admin/login-form";

export const metadata: Metadata = {
  title: "Admin sign in",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <Section className="py-16 sm:py-24">
      <Container className="max-w-md">
        <Eyebrow>Internal</Eyebrow>
        <h1 className="mt-2 text-2xl font-semibold">Admin sign in</h1>
        <p className="mt-2 text-sm text-muted">
          Sign in to manage investor and partner inquiries and the early access waitlist.
        </p>
        <Card className="mt-6">
          <LoginForm />
        </Card>
      </Container>
    </Section>
  );
}
