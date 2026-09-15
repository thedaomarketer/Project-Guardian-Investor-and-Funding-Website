"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Field, TextInput } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Mode = "sign-in" | "sign-up";

export function LoginForm() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("sign-in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmMessage, setConfirmMessage] = useState<string | null>(null);

  function switchMode(next: Mode) {
    setMode(next);
    setError(null);
    setConfirmMessage(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setConfirmMessage(null);
    setIsPending(true);

    try {
      const supabase = createClient();

      if (mode === "sign-in") {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) {
          setError("Invalid email or password.");
          return;
        }
        router.push("/admin");
        router.refresh();
        return;
      }

      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        setError(signUpError.message || "Could not create account. Please try again.");
        return;
      }

      if (!data.session) {
        setConfirmMessage("Check your email to confirm your account, then sign in.");
        setMode("sign-in");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      console.error("Admin auth error", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div>
      <div className="mb-6 flex gap-1 rounded-full border border-border bg-surface p-1 text-sm">
        <button
          type="button"
          onClick={() => switchMode("sign-in")}
          className={cn(
            "flex-1 rounded-full px-3 py-1.5 font-medium transition-colors",
            mode === "sign-in" ? "bg-background shadow-sm" : "text-muted"
          )}
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => switchMode("sign-up")}
          className={cn(
            "flex-1 rounded-full px-3 py-1.5 font-medium transition-colors",
            mode === "sign-up" ? "bg-background shadow-sm" : "text-muted"
          )}
        >
          Create account
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <Field label="Email" htmlFor="email" required>
          <TextInput
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Field>
        <Field label="Password" htmlFor="password" required>
          <TextInput
            id="password"
            name="password"
            type="password"
            required
            minLength={6}
            autoComplete={mode === "sign-in" ? "current-password" : "new-password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Field>

        {error && (
          <p role="alert" className="text-sm text-danger">
            {error}
          </p>
        )}
        {confirmMessage && <p className="text-sm text-[var(--success)]">{confirmMessage}</p>}

        <Button type="submit" size="lg" disabled={isPending} className="w-full">
          {isPending && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
          {isPending
            ? mode === "sign-in"
              ? "Signing in…"
              : "Creating account…"
            : mode === "sign-in"
              ? "Sign in"
              : "Create account"}
        </Button>
      </form>
    </div>
  );
}
