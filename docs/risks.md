# Risks

See `/funding` for the public-facing version; canonical data in
`src/lib/content/risks.ts`. Thirteen risks, disclosed without hedging,
because a serious investor presentation should demonstrate that management
understands them rather than hide them:

1. **Hardware complexity** — miniaturized GNSS + cellular + sensor +
   battery devices are difficult and slow to get right.
2. **Battery limitations** — continuous tracking is power-intensive; size
   vs. life is a real, unresolved trade-off.
3. **Cellular and GPS coverage** — accuracy and connectivity depend on
   carrier networks and satellite visibility, and will vary by environment.
4. **Regulatory requirements** — certification takes time and money and is
   not yet obtained (see `docs/hardware-roadmap.md`).
5. **Privacy obligations** — real legal and reputational risk if privacy
   commitments around children's location data are not upheld.
6. **Cybersecurity** — a compromised safety product could cause real harm;
   security must be continuous, not a one-time checkbox.
7. **Manufacturing** — the move from prototype to reliable, quality-
   controlled volume production is a common hardware-startup failure point.
8. **Customer acquisition** — parents are a skeptical, safety-conscious
   audience; cost-effective acquisition is unproven.
9. **Subscription retention** — recurring revenue depends on continued
   perceived value as children grow older.
10. **False alerts** — over-sensitive alerts erode trust; under-sensitive
    alerts miss real events. Both carry real risk.
11. **Emergency workflow liability** — a product involved in emergency
    response carries liability exposure if the system fails or is
    misunderstood.
12. **Competition** — established players (smartwatch makers, GPS tracker
    companies, Apple's Find My ecosystem) have distribution and brand
    advantages (see `docs/competitive-analysis.md`).
13. **Capital requirements** — hardware development, certification,
    tooling and inventory require meaningful capital ahead of revenue.

No risk on this list has a mitigation claimed as "solved" — only design
intents in progress, consistent with the rest of the site.
