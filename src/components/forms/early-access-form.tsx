"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitEarlyAccess, type EarlyAccessState } from "@/app/actions/early-access";
import { Field, TextInput, Select, Checkbox, CheckboxLabel } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";

const initialState: EarlyAccessState = { status: "idle" };

export function EarlyAccessForm() {
  const [state, formAction, isPending] = useActionState(submitEarlyAccess, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-[var(--radius-lg)] border border-border bg-success-soft p-6">
        <CheckCircle2 className="h-6 w-6 text-success" aria-hidden />
        <p className="text-sm font-medium text-[var(--success)]">{state.message}</p>
        <p className="text-sm text-muted">
          Joining the waitlist does not guarantee availability, pricing, or a specific
          launch date.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <Field label="Email" htmlFor="ea-email" required error={state.fieldErrors?.email}>
        <TextInput
          id="ea-email"
          name="email"
          type="email"
          required
          invalid={!!state.fieldErrors?.email}
        />
      </Field>

      <Field label="Country" htmlFor="ea-country" hint="Optional">
        <TextInput id="ea-country" name="country" />
      </Field>

      <Field label="Are you a parent or caregiver?" htmlFor="ea-parent">
        <Select id="ea-parent" name="isParentOrCaregiver" defaultValue="">
          <option value="">Prefer not to say</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Number of children" htmlFor="ea-children" hint="Optional">
          <Select id="ea-children" name="numberOfChildren" defaultValue="">
            <option value="">Prefer not to say</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </Select>
        </Field>
        <Field label="Age range" htmlFor="ea-age" hint="Optional">
          <Select id="ea-age" name="ageRange" defaultValue="">
            <option value="">Prefer not to say</option>
            <option value="0-4">0–4</option>
            <option value="5-8">5–8</option>
            <option value="9-12">9–12</option>
            <option value="13+">13+</option>
          </Select>
        </Field>
      </div>

      <Field label="Preferred form factor" htmlFor="ea-form-factor" hint="Optional">
        <Select id="ea-form-factor" name="preferredFormFactor" defaultValue="">
          <option value="">No preference</option>
          <option value="bracelet">Bracelet</option>
          <option value="pendant">Pendant</option>
          <option value="backpack-clip">Backpack clip</option>
          <option value="clothing-attachment">Clothing attachment</option>
          <option value="toy">Toy</option>
        </Select>
      </Field>

      <Field label="What interests you most?" htmlFor="ea-interest" hint="Optional">
        <Select id="ea-interest" name="interestArea" defaultValue="">
          <option value="">No preference</option>
          <option value="everyday-location">Everyday location awareness</option>
          <option value="emergency-response">Emergency response</option>
          <option value="privacy-controls">Privacy controls</option>
          <option value="school-use">School / activity use</option>
        </Select>
      </Field>

      <CheckboxLabel htmlFor="ea-consent">
        <Checkbox id="ea-consent" name="consent" required />
        <span>
          I consent to Project Guardian contacting me about early access. See our{" "}
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
        {isPending ? "Joining…" : "Join Early Access"}
      </Button>
    </form>
  );
}
