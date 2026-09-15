# Research Sources — Index

This file indexes the sourced research behind every material external claim
used on the Project Guardian investor website. Each linked file ends with its
own **Sources** table in the format:

`Claim | Source | URL | Date checked | Confidence | Suitable for public marketing (yes/no)`

Do not add a new external claim to site copy without first adding a row to
the relevant file below.

## Research files

| File | Covers |
|---|---|
| [`competitors.md`](./competitors.md) | AngelSense, Jiobit (Life360), Xplora, Apple Find My/AirTag, and brief notes on GizmoWatch, Relay, Tinitell (discontinued), Pingonaut |
| [`market.md`](./market.md) | Kids' GPS tracker / wearable market-size reports, Canada/US household-with-children baselines, bottom-up TAM methodology |
| [`investor-market.md`](./investor-market.md) | Hardware-startup funding climate, comparable funding/M&A events (Jiobit→Life360, Bark, AngelQ), Life360 public financials as a proxy comp |
| [`regulatory-canada.md`](./regulatory-canada.md) | ISED radio equipment certification (RSS-132/247/Gen/102, SAR/Safety Code 6) |
| [`regulatory-us.md`](./regulatory-us.md) | COPPA (FTC), FCC equipment authorization (Part 15/22), for future US expansion |
| [`privacy.md`](./privacy.md) | PIPEDA, Quebec Law 25, OPC guidance on children's data, proposed federal Children's Privacy Code |
| [`child-safety.md`](./child-safety.md) | CCPSA/Toys Regulations, CPSIA/CPSC, ASTM F963, UN 38.3 / IEC 62133 battery-safety categories |
| [`hardware.md`](./hardware.md) | GNSS/GPS real-world accuracy ranges (open-sky, urban canyon, indoor), secure device identity & firmware update practices (NIST, GSMA) |
| [`connectivity.md`](./connectivity.md) | LTE-M / NB-IoT cellular for small IoT wearables, Canadian carrier coverage, BLE local positioning |
| [`battery.md`](./battery.md) | Battery chemistry/capacity ranges, polling-frequency-vs-battery-life tradeoff, comparable shipped-product battery life |

## Known research limitation — flag before publishing

This round of research was conducted from within an agent sandbox where
direct `WebFetch` requests to most target domains (including government
`.gc.ca` / `.gov` domains and vendor sites like angelsense.com, jiobit.com,
u-blox.com PDFs) returned `EGRESS_BLOCKED`. All findings are therefore based
on **WebSearch result snippets and secondary summaries**, not direct primary-
source page fetches, unless a file notes otherwise. Every file flags
individual claims with a confidence level for this reason, and several rows
are explicitly marked "re-verify against the primary source directly before
using in investor materials or public marketing."

**Before this site goes live or claims are used in a fundraising deck, a
human (or an agent with unblocked network access) should re-fetch the
primary sources listed in each table and confirm the exact figures.** This
is standard practice for any investor-facing claim regardless of the fetch
limitation, and is called out explicitly here so it isn't missed.

## How claims map to public copy

- **High confidence + "yes"** → safe to state on public pages, with the
  source named where the number is specific (e.g., "According to Statistics
  Canada's 2021 Census...").
- **Medium confidence** → usable only with qualifying language ("typical
  for comparable devices," "as reported by [firm]") — never presented as
  Project Guardian's own confirmed spec or as settled fact.
- **Low confidence / "no"** → internal planning use only; do not put on the
  public site until re-verified or until Project Guardian has its own
  validated data (e.g., actual device test results, actual certification).
- Competitor-only claims sourced from a competitor's own marketing are
  labelled as that company's claim, not independently verified fact, and
  the comparison table on `/competition` follows the same rule.
