# Hardware Roadmap

See `/roadmap` for the public-facing version and `src/lib/content/roadmap.ts`
for the canonical phase data used across the site (investor deck, funding
page, roadmap page all pull from this single source).

## Phases

1. Research & Requirements — *in progress*
2. Software MVP
3. Development Hardware
4. Integrated Prototype
5. Engineering Validation
6. Regulatory Testing
7. Pilot Program
8. Manufacturing
9. Commercial Launch
10. Additional Form Factors

Only Phase 1 is marked in progress; everything else is planned and
unstarted. No dates are published — see `docs/research/*.md` for why
(regulatory certification, per `docs/research/regulatory-canada.md`, is
explicitly a "gated milestone after hardware freeze," not something that
can be scheduled independently).

## Target specifications — framed as targets, not achieved results

From `docs/research/hardware.md`, `connectivity.md`, and `battery.md`:

- **GNSS accuracy target:** informed by typical consumer GNSS module
  performance (open-sky ranges commonly cited around 3–5m; urban canyon
  and indoor performance is meaningfully worse — physics, not a Project
  Guardian limitation). No Project Guardian hardware has been tested.
- **Connectivity approach:** LTE-M/NB-IoT are the industry-standard choice
  for small, battery-powered wearables, trading raw throughput for power
  efficiency; Canadian carrier support (Bell/Rogers/Telus) is a relevant
  input to the eventual module selection.
- **Battery life:** a direct trade-off against location-update frequency —
  comparable shipped products range from roughly a day (continuous
  tracking) to multiple weeks (low-frequency polling). No target number is
  committed publicly until real hardware is tested.
- **Security design goals:** secure boot, signed firmware updates, unique
  per-device identity — referencing NIST NISTIR 8259 and GSMA IoT Security
  Guidelines as industry guidance, not as certifications held today.

## Certification path (not yet started)

ISED radio equipment certification (RSS-132/247/Gen/102, including SAR/
Safety Code 6 for a body-worn device) is required before any Canadian sale
and cannot begin until the RF hardware design (antenna, enclosure, battery,
wearing position) is substantially locked. See
`docs/research/regulatory-canada.md` for detail. US FCC equivalents apply
only if/when US expansion is pursued (`docs/research/regulatory-us.md`).
Battery transport/safety (UN 38.3, IEC 62133) and, if the toy form factor
is pursued, ASTM F963/CCPSA toy rules are additional gated milestones (see
`docs/research/child-safety.md`).
