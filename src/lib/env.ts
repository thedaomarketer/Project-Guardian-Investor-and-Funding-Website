// Supabase's "anon"/"publishable" key and project URL are not secrets — they
// are designed to be shipped in every client bundle, with Row-Level
// Security as the real access boundary (see supabase/migrations and
// docs/security.md). The fallback values below are that public
// configuration for the project-guardian-website Supabase project, used
// only when NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY aren't
// set in the deployment environment, so the site works out of the box.
// Override via real environment variables to point at a different project
// (e.g. after rotating the anon key or moving to a new Supabase project).
const FALLBACK_SUPABASE_URL = "https://mggcfgfovipyomziwkef.supabase.co";
const FALLBACK_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nZ2NmZ2ZvdmlweW9teml3a2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0NjQ5NDgsImV4cCI6MjEwNTA0MDk0OH0.Pph9bMag1MEE1t5o6L0oGLJA7IBuLRddabQVXaCKXR4";

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_SUPABASE_URL;
export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || FALLBACK_SUPABASE_ANON_KEY;
