# Battery Research: Chemistry, Capacity, and the Battery-Life Tradeoff

**Status: General engineering/industry context only.** Project Guardian has
not built a prototype, selected a final battery cell, or run battery-life
testing. This document summarizes typical battery chemistry, typical
capacities in comparably-sized shipped products, and the well-documented
engineering tradeoff between GPS/cellular polling frequency and battery
life. It is intended to support honest, hedged "target" language on a
technology roadmap page (e.g., "we are targeting a battery life in a
comparable range to similar devices, subject to prototype testing") — not to
assert Project Guardian's actual battery life, capacity, or certification
status.

---

## 1. Battery chemistry

Small wearable trackers near-universally use **lithium polymer (Li-Po)** or
**lithium-ion (Li-ion)** rechargeable cells, generally at a nominal **3.7 V**
per cell — the de facto standard voltage for this device class because it
balances energy density, cell size/shape flexibility, and compatibility with
common charging and power-management ICs.

- **Li-Po** cells use a pouch (flexible foil) format rather than a rigid
  metal can, which lets manufacturers shape the cell to fit tightly inside a
  small, irregularly shaped enclosure — a common reason wearable and tracker
  products favor Li-Po over cylindrical Li-ion.
- Typical small-format Li-Po cells used in compact personal/pet trackers
  range roughly from **100 mAh to 2000+ mAh**, with many trackers in this
  product category using cells in the low-to-mid hundreds of mAh (e.g.,
  commonly available off-the-shelf cells around 200–280 mAh in
  roughly 20×32–40 mm footprints), though this varies enormously with
  target device size and desired battery life.

## 2. Comparable shipped products (public specs, for context/contrast only)

These are **other companies' shipped products**, cited only to give a sense
of the achievable range for this device category — not benchmarks Project
Guardian has committed to matching or specifications for Project Guardian's
own hardware.

- **Jiobit** (child/pet/personal GPS tracker; acquired by Life360): a
  current-generation model is marketed with battery life "up to 30 days" on
  a single charge under typical/moderate use; earlier-generation and
  real-world reviews report more conservative figures — commonly **7–14
  days** with several location checks per day, and shorter under heavier,
  more frequent-polling use. Physical form factor is very small (~37 × 35 ×
  13 mm, ~18 g), which constrains battery capacity and is a useful proxy for
  the kind of size/battery tradeoff a similarly discreet wearable would face.
- **AngelSense** (special-needs child tracker, designed for continuous
  real-time tracking rather than low-power standby): publicly documents
  materially shorter battery life — the GPS4 device is rated at up to **24
  hours** per charge, and the AngelSense Watch at up to **16 hours** — which
  the company attributes explicitly to its emphasis on continuous real-time
  location updates and richer safety features rather than power-optimized
  standby behavior.

**Takeaway:** these two comparable products illustrate the spread that
results directly from the design tradeoff below — a device that prioritizes
frequent/continuous location reporting (AngelSense: ~16–24 hours) sits at
the opposite end of the spectrum from a device that prioritizes long standby
life with less frequent polling (Jiobit: reported in the 7–30 day range
depending on use and generation). This is the single most useful data point
for framing Project Guardian's own "target battery life" language: it is a
genuine engineering choice/tradeoff, not a fixed number, and should be
described as such (e.g., "battery life will depend on configured location
-check frequency; we are targeting a range comparable to other child-safety
wearables, to be validated during prototyping").

## 3. The polling-frequency vs. battery-life tradeoff (well-documented, worth explaining on the roadmap page)

This is a genuine, well-documented engineering tradeoff and is good,
defensible material for a "how we think about battery life" explainer on a
roadmap page:

- Every location "fix" cycle wakes both the GNSS receiver and the cellular
  modem, both of which draw meaningfully more current than idle/sleep state.
  **Update/polling frequency is widely cited as the single biggest driver of
  battery consumption** in GPS trackers.
- Industry sources describe dramatic swings from this alone: moving from a
  1-minute polling interval to a daily check-in can increase battery life by
  on the order of **60×**; one source estimates a device polling every 10
  seconds consumes roughly **50× more energy per day** than one polling
  every 5 minutes, for comparable fix quality.
- Cellular power-saving features — **PSM (Power Saving Mode)** and **eDRX
  (extended Discontinuous Reception)**, both standard features of LTE-M/
  NB-IoT — let a device sleep deeply between scheduled reports and are a
  major lever for extending battery life without eliminating connectivity
  (see `connectivity.md` for detail).
- Typical marketed battery-life numbers commonly distinguish **standby**
  (few location checks per day, often the headline number, e.g., "30 days")
  from **active/real-time tracking** (continuous or near-continuous
  updates, often well under a week, sometimes closer to a single day for
  aggressive polling) — this standby-vs-active distinction is common across
  the consumer GPS tracker category and is a useful, honest framing device
  Project Guardian's own roadmap page could adopt rather than quoting a
  single number.

**Implication for roadmap copy:** rather than stating one battery-life
number, the roadmap page should describe the tradeoff itself (as the two
comparable products above illustrate) and frame Project Guardian's target as
a configurable balance between standby life and update frequency, to be
tuned and validated once a working prototype exists.

## 4. Battery safety certification categories (brief note — regulatory workstream covers depth)

Small lithium rechargeable batteries used in consumer wearables are
typically subject to two related, but distinct, certification/testing
regimes (a separate regulatory research workstream should be treated as the
authoritative source for compliance-level detail — this is a brief pointer,
not a compliance claim):

- **UN 38.3** (part of the UN Manual of Tests and Criteria): a **transport**
  safety testing standard required worldwide before lithium cells/batteries
  can be shipped by air, sea, or road (referenced by IATA, IMDG, and ADR
  transport regulations). Testing covers simulated altitude, temperature
  cycling, vibration, shock, external short circuit, impact, overcharge, and
  forced discharge.
- **IEC 62133** (currently IEC 62133-2 for lithium systems): a **product
  safety** standard for portable sealed secondary (rechargeable) lithium
  cells/batteries used in consumer electronics, addressing hazards like
  overcharge, over-discharge, short-circuit, and thermal runaway. It is a
  separate compliance workstream from UN 38.3 (the current edition removed
  some tests, like vibration/shock/altitude, that are already covered under
  UN 38.3, to avoid duplication).

**Suggested framing for the roadmap page:** "Any production battery pack
will be designed to be tested and certified to standards such as UN 38.3
(transport safety) and IEC 62133 (product safety) that are standard for
consumer lithium-battery devices" — framed as a category of certification
the program will pursue, not one already obtained.

---

## Sources

| Claim | Source | URL | Date checked | Confidence | Suitable for public marketing (yes/no) |
|---|---|---|---|---|---|
| Small wearable trackers commonly use 3.7V Li-Po pouch cells, roughly 100–2000+ mAh, with many compact trackers using cells around 200–280 mAh | Topwell Power / battery-vendor product & guide pages | https://www.topwellpower.com/products/small-li-polymer-battery-502030-200mah-250mah-37v-rechargeable-gps-tracker-battery ; https://www.szaspower.com/industry-news/custom-gps-devices-lipo-battery-502030-3-7v-240mah.html | 2026-09-15 | Medium (battery-vendor marketing pages; consistent with well-established industry standard practice) | Yes, as general component-category background |
| Jiobit Gen 3 marketed at up to 30 days battery life; earlier-generation/real-world reviews report roughly 7–14 days with moderate use; device is ~37×35×13mm, ~18g | Jiobit/Amazon product listing; SafeWise review; GPS Dad review | https://www.jiobit.com/ ; https://www.amazon.com/Jiobit-Gen-Lightweight-Resistant-Longest-Lasting/dp/B0C46YNSDP ; https://www.safewise.com/jiobit-review/ | 2026-09-15 | Medium (mix of manufacturer marketing claim and independent reviews; the 30-day figure is a vendor "up to" claim, and independent reviews cite lower real-world numbers, which is itself a useful lesson for honest spec language) | Yes, clearly attributed to Jiobit as a third-party comparable product, not Project Guardian's own spec |
| AngelSense GPS4 rated up to 24 hours battery life; AngelSense Watch up to 16 hours; company attributes shorter life to continuous real-time tracking design choice | AngelSense official support page | https://www.angelsense.com/help/battery-life/ | 2026-09-15 | High (primary manufacturer source) | Yes, clearly attributed to AngelSense as a third-party comparable product |
| Update/polling frequency is the single biggest driver of GPS tracker battery consumption; 1-minute-to-daily interval change can yield ~60x battery life difference; 10s vs 5min polling ~50x energy difference | Trakbond, "Battery Life Playbook"; Tack GPS, "Long Battery Life Tracking Device" guides (secondary/aggregated industry sources) | https://trakbond.com/blog/kids/battery-life-playbook-make-a-kids-tracker-last-all-day/ ; https://www.tackgps.app/blogs/news/long-battery-life-tracking-device-the-ultimate-guide-for-2026 | 2026-09-15 | Medium (trade/consumer-guide sources rather than peer-reviewed or primary vendor data; directionally consistent with known GPS/cellular power behavior, treat exact multipliers as illustrative rather than precise) | Yes, as an illustrative/explanatory tradeoff, with the specific multipliers framed as "can be on the order of," not as Project Guardian's measured figures |
| PSM and eDRX (standard LTE-M/NB-IoT features) can dramatically extend IoT device battery life by allowing deep sleep between scheduled communications | Emnify / Onomondo LTE-M vs NB-IoT explainers | https://www.emnify.com/blog/lte-m-nb-iot ; https://onomondo.com/blog/nb-iot-vs-lte-m-a-comparison-of-the-two-iot-technology-standards/ | 2026-09-15 | Medium-High (consistent industry/vendor technical explainers; see also connectivity.md) | Yes, as general technology background |
| Marketed GPS tracker battery life typically distinguishes "standby" (headline, e.g., 30 days) from "active/real-time" (often under a week); "up to" claims commonly assume moderate, not continuous, use | LandAirSea; Salind GPS; Tracki blog guides (secondary/aggregated industry sources) | https://landairsea.com/blogs/consumers/everything-you-should-know-about-gps-tracking-battery-life ; https://www.salind-gps.com/a-guide-to-gps-tracker-battery-life-in-2026-2/ | 2026-09-15 | Medium (consumer-guide/industry sources, consistent across multiple independent write-ups) | Yes, as general category context and as a caution about how to frame Project Guardian's own future claims honestly |
| UN 38.3 is a transport-safety testing standard (altitude, temperature, vibration, shock, short-circuit, overcharge, forced discharge) required for shipping lithium batteries; IEC 62133 is a separate product-safety standard for portable rechargeable lithium cells | TÜV SÜD; ufine battery / large-battery.com comparison guides | https://www.tuvsud.com/en-us/industries/mobility-and-automotive/automotive-and-oem/automotive-testing-solutions/battery-testing/iec-62133 ; https://www.ufinebattery.com/blog/comparing-un-38-3-and-iec-62133-test-conditions/ | 2026-09-15 | High (TÜV SÜD is a primary certification-body source; battery-industry comparison guides are consistent secondary confirmation) | Yes, as "standards the program intends to pursue," not as a claim of existing certification |
