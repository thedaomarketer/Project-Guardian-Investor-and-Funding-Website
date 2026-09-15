import type { Metadata } from "next";
import { Container, Section, Eyebrow } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "This website is informational only and does not constitute an offer to sell securities or investment advice.",
};

export default function LegalNoticePage() {
  return (
    <Section className="pb-24 pt-12">
      <Container className="max-w-3xl">
        <Eyebrow>Legal notice</Eyebrow>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Legal notice
        </h1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            This website does not constitute an offer to sell securities,
            a solicitation of an offer to buy securities, or investment
            advice of any kind. Nothing on this site should be relied upon
            when making an investment decision.
          </p>
          <p>
            Project Guardian is a pre-commercial venture. No product has
            shipped, and nothing on this website should be read as a
            promise of future product capability, availability, pricing,
            or investment return. Any description of hardware, software, or
            features reflects current design intent, not a finished or
            validated product.
          </p>
          <p>
            Wherever this site labels something &quot;Planned,&quot;
            &quot;Concept,&quot; &quot;Prototype,&quot; or &quot;Under
            validation,&quot; that label reflects the actual, honest
            development status of that item at the time of publication —
            not marketing language.
          </p>
          <p>
            Formal investment materials (such as a pitch deck, financial
            model, or offering documents) are made available only on direct
            request to qualified parties, and any provision of such
            materials is subject to appropriate legal process and
            applicable securities law.
          </p>
          <p>
            All content on this website is provided for general
            informational purposes only. It is not legal, financial, or
            investment advice, and Project Guardian makes no representation
            or warranty as to its completeness or accuracy going forward as
            the company and its plans evolve.
          </p>
        </div>
      </Container>
    </Section>
  );
}
