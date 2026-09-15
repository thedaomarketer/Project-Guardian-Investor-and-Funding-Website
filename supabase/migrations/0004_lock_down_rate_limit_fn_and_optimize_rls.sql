-- Trigger invocation does not require an EXECUTE grant on the function for
-- the firing role — only direct SQL/RPC calls do. Revoking EXECUTE closes
-- the PostgREST RPC surface (/rest/v1/rpc/enforce_submission_rate_limit)
-- the Supabase security advisor flagged, without touching how the triggers
-- fire (verified: anon insert still enforces the limit after this revoke).
revoke execute on function public.enforce_submission_rate_limit() from public, anon, authenticated;

-- Wrap auth.uid() in a scalar subselect so Postgres evaluates it once per
-- query instead of once per row (Supabase's documented RLS perf pattern —
-- see the "Auth RLS Initialization Plan" advisor). Same logic, no behavior
-- change, just faster at scale.

drop policy "admins can view their own admin row" on public.admins;
create policy "admins can view their own admin row"
  on public.admins
  for select
  to authenticated
  using (user_id = (select auth.uid()));

drop policy "first authenticated user can self-bootstrap as admin" on public.admins;
create policy "first authenticated user can self-bootstrap as admin"
  on public.admins
  for insert
  to authenticated
  with check (
    user_id = (select auth.uid())
    and not exists (select 1 from public.admins)
  );

drop policy "admins can view contact inquiries" on public.contact_inquiries;
create policy "admins can view contact inquiries"
  on public.contact_inquiries
  for select
  to authenticated
  using (exists (select 1 from public.admins a where a.user_id = (select auth.uid())));

drop policy "admins can update contact inquiries" on public.contact_inquiries;
create policy "admins can update contact inquiries"
  on public.contact_inquiries
  for update
  to authenticated
  using (exists (select 1 from public.admins a where a.user_id = (select auth.uid())))
  with check (exists (select 1 from public.admins a where a.user_id = (select auth.uid())));

drop policy "admins can view early access signups" on public.early_access_signups;
create policy "admins can view early access signups"
  on public.early_access_signups
  for select
  to authenticated
  using (exists (select 1 from public.admins a where a.user_id = (select auth.uid())));

drop policy "admins can update early access signups" on public.early_access_signups;
create policy "admins can update early access signups"
  on public.early_access_signups
  for update
  to authenticated
  using (exists (select 1 from public.admins a where a.user_id = (select auth.uid())))
  with check (exists (select 1 from public.admins a where a.user_id = (select auth.uid())));
