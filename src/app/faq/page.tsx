import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Honest answers to common investor and parent questions about Project Guardian — what's built, what isn't, and what it does and doesn't claim to do.",
};

type Faq = {
  question: string;
  answer: ReactNode;
};

const faqs: Faq[] = [
  {
    question: "Is Project Guardian a real product I can buy today?",
    answer: (
      <>
        No. Project Guardian is in concept and prototype development.
        Nothing is currently for sale, and no device or subscription can be
        purchased today.
      </>
    ),
  },
  {
    question: "What exactly has been built so far?",
    answer: (
      <>
        To be direct: this website, product and business research, and
        design/architecture planning. The hardware device and the software
        platform have not been built yet. See the{" "}
        <Link href="/roadmap" className="text-accent hover:underline">
          roadmap
        </Link>{" "}
        for the sequence of what comes next.
      </>
    ),
  },
  {
    question: "Does Project Guardian prevent kidnapping or trafficking?",
    answer: (
      <>
        No. Project Guardian does not, and will not, claim to prevent or
        detect kidnapping, trafficking, or abuse. It is designed to help
        caregivers monitor a child&apos;s location, identify defined safety
        events, and respond faster — not to guarantee safety or prevent
        harm.
      </>
    ),
  },
  {
    question: "How accurate will the location tracking be?",
    answer: (
      <>
        Location accuracy depends heavily on conditions — open sky, urban
        canyons, and indoor environments all affect GNSS and cellular
        performance differently. Accuracy has not yet been measured on real
        hardware, since hardware has not yet been built. See{" "}
        <Link href="/technology" className="text-accent hover:underline">
          Technology
        </Link>{" "}
        for the target specification and how it was derived.
      </>
    ),
  },
  {
    question: "Is my child's data private?",
    answer: (
      <>
        The proposed approach is built around data minimization, encryption,
        and controlled access to location and account data. Compliance work
        (privacy regulations, certifications) is planned, not yet completed
        or certified. See{" "}
        <Link href="/safety-system" className="text-accent hover:underline">
          Safety &amp; Privacy
        </Link>{" "}
        for the full approach.
      </>
    ),
  },
  {
    question: "How can I invest?",
    answer: (
      <>
        Investor inquiries are welcome via{" "}
        <Link
          href="/contact?type=investor"
          className="text-accent hover:underline"
        >
          the investor contact form
        </Link>
        . This website is not a securities offering and nothing here is
        investment advice. Investment materials are available on request
        after an initial conversation.
      </>
    ),
  },
  {
    question: "How can I join the waitlist?",
    answer: (
      <>
        You can sign up on the{" "}
        <Link href="/early-access" className="text-accent hover:underline">
          early access
        </Link>{" "}
        page. Joining the waitlist does not guarantee availability, pricing,
        or a launch date.
      </>
    ),
  },
  {
    question:
      "Are you affiliated with any school, police department, or government agency?",
    answer: (
      <>
        No. Project Guardian has no partnerships with any school, police
        department, or government agency today, and will never claim
        partnerships it doesn&apos;t have.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <Section dark className="pb-16 pt-14 sm:pt-20">
        <Container>
          <Eyebrow className="text-[#7ee8e3]">FAQ</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Frequently asked questions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Straight answers for both investors and parents — including what
            hasn&apos;t been built yet and what Project Guardian doesn&apos;t
            claim to do.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <div>
            {faqs.map((f) => (
              <details key={f.question} className="group border-b border-border py-4">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                  {f.question}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
