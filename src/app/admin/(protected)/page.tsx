import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { Card, CardMuted } from "@/components/ui/card";
import { ClaimAdminForm } from "@/components/admin/claim-admin-form";
import { StatusUpdateForm } from "@/components/admin/status-update-form";

export const metadata: Metadata = {
  title: "Admin dashboard",
  robots: { index: false, follow: false },
};

type ContactInquiry = {
  id: string;
  created_at: string;
  inquiry_type: string;
  name: string;
  email: string;
  organization: string | null;
  investor_type: string | null;
  investment_range: string | null;
  message: string;
  status: string;
};

type WaitlistSignup = {
  id: string;
  created_at: string;
  email: string;
  country: string | null;
  is_parent_or_caregiver: boolean | null;
  preferred_form_factor: string | null;
  status: string;
};

const inquiryStatuses = ["new", "reviewed", "archived"] as const;
const waitlistStatuses = ["new", "contacted", "archived"] as const;

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function truncate(text: string, max = 140) {
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // The layout already redirects unauthenticated users; this is a
    // defensive fallback in case this page ever renders without it.
    return null;
  }

  const { data: adminRow, error: adminError } = await supabase
    .from("admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (adminError) {
    console.error("admin lookup error", adminError);
  }

  if (!adminRow) {
    return (
      <div className="mx-auto max-w-xl">
        <Card>
          <h1 className="text-xl font-semibold">Claim admin access</h1>
          <p className="mt-3 text-sm text-muted">
            You&apos;re signed in as <strong>{user.email}</strong>, but no account has claimed
            admin access yet. As a one-time bootstrap step, the first authenticated user can
            claim it — this only works if no admin has been created yet. If someone else
            already claimed it, contact them to be added to the allowlist.
          </p>
          <div className="mt-6">
            <ClaimAdminForm />
          </div>
        </Card>
      </div>
    );
  }

  const [{ data: inquiries, error: inquiriesError }, { data: waitlist, error: waitlistError }] =
    await Promise.all([
      supabase
        .from("contact_inquiries")
        .select(
          "id, created_at, inquiry_type, name, email, organization, investor_type, investment_range, message, status"
        )
        .order("created_at", { ascending: false }),
      supabase
        .from("early_access_signups")
        .select(
          "id, created_at, email, country, is_parent_or_caregiver, preferred_form_factor, status"
        )
        .order("created_at", { ascending: false }),
    ]);

  if (inquiriesError) console.error("admin inquiries fetch error", inquiriesError);
  if (waitlistError) console.error("admin waitlist fetch error", waitlistError);

  const inquiryRows = (inquiries ?? []) as ContactInquiry[];
  const waitlistRows = (waitlist ?? []) as WaitlistSignup[];

  const inquiriesByStatus = inquiryRows.reduce<Record<string, number>>((acc, row) => {
    acc[row.status] = (acc[row.status] ?? 0) + 1;
    return acc;
  }, {});
  const waitlistByStatus = waitlistRows.reduce<Record<string, number>>((acc, row) => {
    acc[row.status] = (acc[row.status] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-semibold">Admin dashboard</h1>
        <p className="mt-1 text-sm text-muted">
          Signed in as {user.email}. Reads and updates below are enforced by Supabase
          row-level security, not by this page.
        </p>
      </div>

      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CardMuted>
            <p className="text-xs uppercase tracking-wide text-muted">Total inquiries</p>
            <p className="mt-2 text-2xl font-semibold">{inquiryRows.length}</p>
          </CardMuted>
          <CardMuted>
            <p className="text-xs uppercase tracking-wide text-muted">New inquiries</p>
            <p className="mt-2 text-2xl font-semibold">{inquiriesByStatus.new ?? 0}</p>
          </CardMuted>
          <CardMuted>
            <p className="text-xs uppercase tracking-wide text-muted">Total waitlist</p>
            <p className="mt-2 text-2xl font-semibold">{waitlistRows.length}</p>
          </CardMuted>
          <CardMuted>
            <p className="text-xs uppercase tracking-wide text-muted">New waitlist</p>
            <p className="mt-2 text-2xl font-semibold">{waitlistByStatus.new ?? 0}</p>
          </CardMuted>
        </div>
      </section>

      <section id="inquiries">
        <h2 className="text-lg font-semibold">Investor &amp; partner inquiries</h2>
        <p className="mt-1 text-sm text-muted">{inquiryRows.length} total</p>
        <div className="mt-4 overflow-x-auto rounded-[var(--radius-lg)] border border-border">
          <table className="w-full min-w-[960px] border-collapse text-sm">
            <thead className="bg-surface text-left text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Organization</th>
                <th className="px-4 py-3">Investor type</th>
                <th className="px-4 py-3">Range</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Received</th>
              </tr>
            </thead>
            <tbody>
              {inquiryRows.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-4 py-6 text-center text-muted">
                    No inquiries yet.
                  </td>
                </tr>
              )}
              {inquiryRows.map((row) => (
                <tr key={row.id} className="border-t border-border align-top">
                  <td className="px-4 py-3 whitespace-nowrap">{row.inquiry_type}</td>
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="px-4 py-3">{row.email}</td>
                  <td className="px-4 py-3">{row.organization ?? "—"}</td>
                  <td className="px-4 py-3">{row.investor_type ?? "—"}</td>
                  <td className="px-4 py-3">{row.investment_range ?? "—"}</td>
                  <td className="max-w-xs px-4 py-3">{truncate(row.message)}</td>
                  <td className="px-4 py-3">
                    <StatusUpdateForm
                      id={row.id}
                      kind="inquiry"
                      currentStatus={row.status}
                      statuses={inquiryStatuses}
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-muted">
                    {formatDate(row.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="waitlist">
        <h2 className="text-lg font-semibold">Early access waitlist</h2>
        <p className="mt-1 text-sm text-muted">{waitlistRows.length} total</p>
        <div className="mt-4 overflow-x-auto rounded-[var(--radius-lg)] border border-border">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead className="bg-surface text-left text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Parent/caregiver</th>
                <th className="px-4 py-3">Preferred form factor</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Joined</th>
              </tr>
            </thead>
            <tbody>
              {waitlistRows.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-6 text-center text-muted">
                    No waitlist signups yet.
                  </td>
                </tr>
              )}
              {waitlistRows.map((row) => (
                <tr key={row.id} className="border-t border-border align-top">
                  <td className="px-4 py-3">{row.email}</td>
                  <td className="px-4 py-3">{row.country ?? "—"}</td>
                  <td className="px-4 py-3">
                    {row.is_parent_or_caregiver === null
                      ? "—"
                      : row.is_parent_or_caregiver
                        ? "Yes"
                        : "No"}
                  </td>
                  <td className="px-4 py-3">{row.preferred_form_factor ?? "—"}</td>
                  <td className="px-4 py-3">
                    <StatusUpdateForm
                      id={row.id}
                      kind="waitlist"
                      currentStatus={row.status}
                      statuses={waitlistStatuses}
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-muted">
                    {formatDate(row.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
