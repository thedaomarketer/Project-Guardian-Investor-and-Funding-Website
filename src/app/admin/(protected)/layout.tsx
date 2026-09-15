import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { Container } from "@/components/ui/section";
import { SignOutButton } from "@/components/admin/sign-out-button";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isSupabaseConfigured()) {
    redirect("/admin/login");
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="bg-surface">
      <header className="border-b border-border bg-background">
        <Container className="flex items-center justify-between py-4">
          <div>
            <p className="text-sm font-semibold">Project Guardian admin</p>
            <p className="text-xs text-muted">{user.email}</p>
          </div>
          <SignOutButton />
        </Container>
      </header>
      <Container className="py-10">{children}</Container>
    </div>
  );
}
