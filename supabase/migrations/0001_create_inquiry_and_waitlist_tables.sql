-- Project Guardian investor site: contact inquiries, early access waitlist, admin allowlist.

create extension if not exists "pgcrypto";

create type inquiry_type as enum (
  'investor',
  'strategic_partner',
  'technology_partner',
  'parent',
  'school'
);

create table public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  inquiry_type inquiry_type not null,
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (char_length(email) between 3 and 320),
  organization text check (char_length(organization) <= 200),
  investor_type text check (char_length(investor_type) <= 120),
  investment_range text check (char_length(investment_range) <= 120),
  message text not null check (char_length(message) between 1 and 4000),
  linkedin_url text check (char_length(linkedin_url) <= 500),
  phone text check (char_length(phone) <= 40),
  consent boolean not null default false,
  status text not null default 'new' check (status in ('new', 'reviewed', 'archived')),
  user_agent text,
  constraint consent_required check (consent = true)
);

comment on table public.contact_inquiries is 'Investor, partner, parent and school contact form submissions. Insert-only from the public site; readable only by admins via RLS.';

create table public.early_access_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null check (char_length(email) between 3 and 320),
  country text check (char_length(country) <= 120),
  is_parent_or_caregiver boolean,
  number_of_children text check (char_length(number_of_children) <= 20),
  age_range text check (char_length(age_range) <= 60),
  preferred_form_factor text check (char_length(preferred_form_factor) <= 60),
  interest_area text check (char_length(interest_area) <= 120),
  consent boolean not null default false,
  status text not null default 'new' check (status in ('new', 'contacted', 'archived')),
  user_agent text,
  constraint consent_required check (consent = true),
  constraint unique_email unique (email)
);

comment on table public.early_access_signups is 'Parent/caregiver early access waitlist signups. Insert-only from the public site.';

create table public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  created_at timestamptz not null default now()
);

comment on table public.admins is 'Allowlist of Supabase Auth users permitted to view the admin dashboard.';

alter table public.contact_inquiries enable row level security;
alter table public.early_access_signups enable row level security;
alter table public.admins enable row level security;

-- Public (anon + authenticated) may INSERT their own submission, never read/update/delete.
create policy "anyone can submit a contact inquiry"
  on public.contact_inquiries
  for insert
  to anon, authenticated
  with check (true);

create policy "anyone can join the early access waitlist"
  on public.early_access_signups
  for insert
  to anon, authenticated
  with check (true);

-- No public policies on admins here: locked down until the bootstrap migration.
