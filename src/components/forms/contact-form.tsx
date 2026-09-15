"use client";

import { useActionState, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitContactInquiry, type ContactFormState } from "@/app/actions/contact";
import {
  inquiryTypes,
  inquiryTypeLabels,
  investorTypes,
  investmentRanges,
} from "@/lib/validation/contact";
import { Field, TextInput, TextArea, Select, Checkbox, CheckboxLabel } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm({ defaultType = "investor" }: { defaultType?: string }) {
  const [state, formAction, isPending] = useActionState(submitContactInquiry, initialState);
  const [inquiryType, setInquiryType] = useState(
    inquiryTypes.includes(defaultType as (typeof inquiryTypes)[number])
      ? defaultType
      : "investor"
  );

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-[var(--radius-lg)] border border-border bg-success-soft p-6">
        <CheckCircle2 className="h-6 w-6 text-success" aria-hidden />
        <p className="text-sm font-medium text-[var(--success)]">{state.message}</p>
        <p className="text-sm text-muted">
          We read every inquiry. If your message needs an urgent response, please say so
          and we'll prioritize it.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <Field label="I am a…" htmlFor="inquiryType" required>
        <Select
          id="inquiryType"
          name="inquiryType"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
        >
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {inquiryTypeLabels[t]}
            </option>
          ))}
        </Select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required error={state.fieldErrors?.name}>
          <TextInput id="name" name="name" required invalid={!!state.fieldErrors?.name} />
        </Field>
        <Field label="Email" htmlFor="email" required error={state.fieldErrors?.email}>
          <TextInput
            id="email"
            name="email"
            type="email"
            required
            invalid={!!state.fieldErrors?.email}
          />
        </Field>
      </div>

      <Field label="Organization" htmlFor="organization" hint="Optional">
        <TextInput id="organization" name="organization" />
      </Field>

      {inquiryType === "investor" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Investor type" htmlFor="investorType">
            <Select id="investorType" name="investorType" defaultValue="">
              <option value="">Select one</option>
              {investorTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Typical investment range" htmlFor="investmentRange">
            <Select id="investmentRange" name="investmentRange" defaultValue="">
              <option value="">Select one</option>
              {investmentRanges.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </Select>
          </Field>
        </div>
      )}

      <Field label="Message" htmlFor="message" required error={state.fieldErrors?.message}>
        <TextArea
          id="message"
          name="message"
          required
          invalid={!!state.fieldErrors?.message}
          placeholder="Tell us about your interest or question…"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="LinkedIn" htmlFor="linkedinUrl" hint="Optional">
          <TextInput id="linkedinUrl" name="linkedinUrl" placeholder="https://linkedin.com/in/…" />
        </Field>
        <Field label="Phone" htmlFor="phone" hint="Optional">
          <TextInput id="phone" name="phone" type="tel" />
        </Field>
      </div>

      <CheckboxLabel htmlFor="consent">
        <Checkbox id="consent" name="consent" required />
        <span>
          I consent to Project Guardian contacting me about this inquiry. See our{" "}
          <a href="/privacy-notice" className="underline">
            privacy notice
          </a>
          .
        </span>
      </CheckboxLabel>
      {state.fieldErrors?.consent && (
        <p role="alert" className="text-xs text-danger">
          {state.fieldErrors.consent}
        </p>
      )}

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-danger">
          {state.message}
        </p>
      )}

      <Button type="submit" size="lg" disabled={isPending} className="w-full sm:w-auto">
        {isPending && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {isPending ? "Submitting…" : "Send Inquiry"}
      </Button>
      <p className="text-xs text-muted">
        This form is for investor and partner inquiries. It is not an offer to sell
        securities and does not constitute investment advice.
      </p>
    </form>
  );
}
