-- 1. Close a race in the admin self-bootstrap: the RLS "not exists" check is
--    evaluated per-statement, so two concurrent sign-ups could theoretically
--    both pass it before either commits, creating two admins. A unique index
--    on a constant expression makes the table a true singleton at the
--    storage layer — the second concurrent insert now fails with a normal
--    unique-violation (23505), which the app already handles gracefully.
create unique index admins_singleton_idx on public.admins ((true));

-- 2. Rate limiting on public insert-only tables (defense against scripted
--    abuse of the contact/waitlist forms), enforced in a trigger so it
--    applies regardless of what the client claims — not just app-layer
--    trust. Runs as SECURITY DEFINER so it can count rows even though anon
--    has no SELECT grant on these tables (see migration 0004 for locking
--    down direct RPC access to this function).

alter table public.contact_inquiries add column ip_address text;
alter table public.early_access_signups add column ip_address text;

create or replace function public.enforce_submission_rate_limit()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  recent_count integer;
  max_per_window integer := 5;
  window_interval interval := interval '1 hour';
begin
  if new.ip_address is not null then
    execute format(
      'select count(*) from %I where ip_address = $1 and created_at > now() - $2',
      TG_TABLE_NAME
    )
    into recent_count
    using new.ip_address, window_interval;

    if recent_count >= max_per_window then
      raise exception 'rate_limited' using errcode = 'P0001';
    end if;
  end if;

  return new;
end;
$$;

create trigger contact_inquiries_rate_limit
  before insert on public.contact_inquiries
  for each row execute function public.enforce_submission_rate_limit();

create trigger early_access_signups_rate_limit
  before insert on public.early_access_signups
  for each row execute function public.enforce_submission_rate_limit();
