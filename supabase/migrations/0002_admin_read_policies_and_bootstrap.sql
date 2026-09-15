-- Admin read/update access via RLS (no service-role key needed in app code), plus a
-- safe one-time self-bootstrap: the first authenticated user to claim admin becomes
-- the only admin able to self-insert (table must be empty at insert time).

create policy "admins can view their own admin row"
  on public.admins
  for select
  to authenticated
  using (user_id = auth.uid());

create policy "first authenticated user can self-bootstrap as admin"
  on public.admins
  for insert
  to authenticated
  with check (
    user_id = auth.uid()
    and not exists (select 1 from public.admins)
  );

create policy "admins can view contact inquiries"
  on public.contact_inquiries
  for select
  to authenticated
  using (exists (select 1 from public.admins a where a.user_id = auth.uid()));

create policy "admins can update contact inquiries"
  on public.contact_inquiries
  for update
  to authenticated
  using (exists (select 1 from public.admins a where a.user_id = auth.uid()))
  with check (exists (select 1 from public.admins a where a.user_id = auth.uid()));

create policy "admins can view early access signups"
  on public.early_access_signups
  for select
  to authenticated
  using (exists (select 1 from public.admins a where a.user_id = auth.uid()));

create policy "admins can update early access signups"
  on public.early_access_signups
  for update
  to authenticated
  using (exists (select 1 from public.admins a where a.user_id = auth.uid()))
  with check (exists (select 1 from public.admins a where a.user_id = auth.uid()));
