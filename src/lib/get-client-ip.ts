import { headers } from "next/headers";

// Vercel (and most proxies) set x-forwarded-for as a comma-separated list
// with the original client IP first. Never trust this for anything beyond
// coarse rate limiting — it's attacker-controllable on a request that
// didn't pass through a trusted proxy, which is fine here since it only
// gates submission frequency, not authorization.
export async function getClientIp(): Promise<string | null> {
  const h = await headers();
  const forwardedFor = h.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) return first;
  }
  return h.get("x-real-ip");
}
