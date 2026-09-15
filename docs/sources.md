# Sources

This is a pointer, not a duplicate. The full, claim-by-claim sourced
research (competitors, market, regulatory Canada/US, privacy, child
safety, hardware, connectivity, battery) lives in
[`docs/research/`](./research/), indexed at
[`docs/research/sources.md`](./research/sources.md).

Every externally-sourced number or claim used anywhere on the website or
in these `/docs` files should trace back to a row in one of those files
(Claim | Source | URL | Date checked | Confidence | Suitable for public
marketing). If you're adding a new claim to copy and can't find it there,
add the research first — see `CLAUDE.md`'s accuracy rules.

**Known limitation, repeated here because it matters:** this round of
research was conducted from a sandboxed agent environment where direct
`WebFetch` requests to most target domains (government `.gc.ca`/`.gov`
sites, several vendor sites) returned `EGRESS_BLOCKED`. Findings rely on
`WebSearch` result snippets rather than direct primary-source fetches
unless a file says otherwise, and confidence levels reflect that. Re-verify
primary sources directly before using any figure in a fundraising deck or
other high-stakes external material.
