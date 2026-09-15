# Connectivity Research: Cellular (LTE-M / NB-IoT) & Bluetooth Low Energy

**Status: General engineering/industry context only.** Project Guardian has
not selected a final connectivity module, carrier, or network configuration.
This document summarizes how comparable IoT/wearable products and carrier
networks typically work, for use in "target approach" / "designed to
leverage" language on investor and roadmap pages — not as a confirmed
architecture or coverage commitment.

---

## 1. Cellular connectivity for small, battery-powered IoT wearables

### Why LTE-M / NB-IoT (Cat-M1 / NB1) rather than standard LTE

Small, battery-powered trackers commonly use **LTE-M (Cat-M1)** or **NB-IoT
(Cat-NB1/NB2)** — "Low Power Wide Area" (LPWA) cellular technologies
purpose-built for IoT — instead of standard smartphone-grade LTE (Cat-4+),
because they trade raw bandwidth and mobility performance for much lower
power consumption, lower module cost, and better signal penetration.

- **LTE-M**: higher data rate (up to ~1 Mbps in some deployments), lower
  latency, and full support for **mobility/handover** between cell towers —
  making it the better fit for a device that moves around with a person, and
  the option generally recommended for **tracking-style devices that send
  data frequently and change location**.
- **NB-IoT**: narrower bandwidth, lower data rate, generally **stationary or
  low-mobility** use cases, but often the most power-efficient option and
  typically the cheapest per-module cost; historically weaker mobility/
  handover support than LTE-M.
- Both support two power-saving mechanisms that matter a great deal for
  battery life: **PSM (Power Saving Mode)**, which lets a device go into a
  deep-sleep state for long stretches and wake only to report or receive
  data, and **eDRX (extended Discontinuous Reception)**, which reduces how
  often the device needs to listen for incoming network paging. Used well,
  these can dramatically extend battery life relative to always-on standard
  LTE.
- Reported real-world battery-life modeling: LTE-M devices can achieve
  roughly **5–7 years** of battery life in low-duty-cycle deployments, while
  NB-IoT's ultra-low-power design can push some deployments toward **a
  decade** on a single (larger, non-wearable-scale) battery — these figures
  are from IoT-deployment modeling, not wearable-specific, and depend
  heavily on reporting interval, network conditions, and battery capacity.
- Counter-intuitively for a tracker, LTE-M is sometimes **more** power
  efficient than NB-IoT in practice for tracking use cases, because its
  higher throughput lets it complete a transmission and return to sleep
  faster; the total energy per report can be lower even though the
  instantaneous transmit current is higher.

### Canadian carrier landscape (as background, not a Project Guardian commitment)

- **Bell, Rogers, and Telus** each operate **LTE-M** as an overlay on their
  national 4G LTE networks, marketed as providing longer battery life and
  better in-building/underground signal penetration for low-power IoT
  devices versus standard LTE. Bell explicitly markets LTE-M for business/IoT
  customers.
- **NB-IoT** availability in Canada has been more limited/slower to roll out
  than LTE-M — Rogers announced plans to deploy an NB-IoT network (initially
  in Ontario), but public information on nationwide NB-IoT coverage timelines
  is sparse; **LTE-M is the more consistently available LPWA option across
  major Canadian carriers today.**
- Major Canadian carriers report roughly **99% population coverage** on
  LTE/LTE-A, though geographic (land-area) coverage is much lower — under
  ~30% of Canada's landmass is covered by Bell, Rogers, or Telus combined,
  reflecting the country's low population density outside urban/suburban
  corridors. This is a meaningful caveat for any coverage-related claim: population coverage and land-area coverage are very different numbers, and rural/remote areas may have materially weaker or absent coverage.

**Implication for roadmap copy:** LTE-M is the more defensible "typical
approach for a mobile child-safety wearable in Canada" to reference, given
its mobility support and current multi-carrier availability, with NB-IoT
positioned as a possible power-efficiency-focused fallback for future
hardware revisions — both framed as design directions to validate during
prototyping and carrier-partner selection, not as network deals already in
place.

---

## 2. Bluetooth Low Energy (BLE) for local/offline positioning

### Typical range and behavior

- BLE's practical usable range is commonly described as roughly **0–25 m**
  in typical/indoor conditions, with some sources citing up to **~100 m**
  achievable only under optimal, unobstructed outdoor conditions. A commonly
  cited "typical" range for real-world deployments is closer to **10–15 m**.
- BLE positioning (e.g., via RSSI/received-signal-strength estimation) is
  commonly used for coarse **proximity/room-level presence detection**
  rather than precise location: standard RSSI-based methods are generally
  described as achieving accuracy on the order of a few meters, with some
  vendor claims of 1–2 m under favorable conditions.
- Newer techniques (Bluetooth 6.0 Channel Sounding, phase-based ranging) can
  reach roughly **30–50 cm** accuracy, and lab conditions with co-planar
  beacons/scanners have reported ~10 cm — but these are recent, specialized
  capabilities, not representative of a typical low-cost consumer BLE chip
  used for crowd-sourced or tag-style positioning.

### Comparison point: Apple's Find My network (crowd-sourced BLE)

Useful as an industry comparison for explaining the concept of a
crowd-sourced offline location network — not something Project Guardian has
built or has access to:

- Apple's **Find My network** is a crowd-sourced mesh of hundreds of millions
  of Apple devices. A lost/marked item (e.g., an AirTag) broadcasts a
  rotating, encrypted **BLE** signal; any nearby Apple device that "hears"
  it packages that signal together with its own GPS location and relays it
  to Apple's servers over its own internet connection — the tracked item
  itself needs no cellular or Wi-Fi connection of its own.
  - The relayed location report is end-to-end encrypted; only the owner's
    own devices hold the key needed to decrypt and read a location out of
    it, and Apple's servers do not know which item a given encrypted report
    belongs to.
  - The **rotating BLE identifier** (changing periodically) is a deliberate
    anti-tracking/anti-stalking privacy design, not just a technical
    artifact.
- This model — local BLE broadcast, discovered opportunistically by a large
  fleet of other devices that relay location upstream — is fundamentally
  different from GPS+cellular self-reporting, and depends entirely on
  network density (i.e., having many other participating devices nearby).
  It is a useful **contrast/comparison point** for explaining why Project
  Guardian's own architecture, at least at launch, is more likely to rely on
  GPS+cellular self-reporting plus BLE for short-range/local use (e.g.,
  proximity alerts, last-mile "getting warmer" search assistance) rather
  than a crowd-sourced mesh network, since building an Apple-scale
  participating-device fleet is not feasible for a pre-commercial startup.

**Implication for roadmap copy:** BLE is best framed as a *complementary,
short-range* technology (device pairing, proximity alerts, potential future
local mesh/finding features) rather than a primary positioning method, and
any comparison to Apple's Find My network should be clearly framed as "how a
comparable technology works," not as a claim that Project Guardian has or
will have equivalent network scale.

---

## Sources

| Claim | Source | URL | Date checked | Confidence | Suitable for public marketing (yes/no) |
|---|---|---|---|---|---|
| LTE-M offers higher data rate/mobility; NB-IoT offers narrower bandwidth, lower power, less mobility support; PSM/eDRX extend battery life | Ignion, "LTE-M vs NB-IoT"; Onomondo, "NB-IoT vs LTE-M" | https://ignion.io/blog/lte-m-vs-nb-iot/ ; https://onomondo.com/blog/nb-iot-vs-lte-m-a-comparison-of-the-two-iot-technology-standards/ | 2026-09-15 | Medium-High (industry/vendor technical explainers, broadly consistent across sources) | Yes, as general technology background |
| Trackers/mobile-asset use cases are generally better supported by LTE-M due to mobility and frequent transmission | Onomondo / IoT industry blogs (aggregated in search) | https://onomondo.com/blog/nb-iot-vs-lte-m-a-comparison-of-the-two-iot-technology-standards/ | 2026-09-15 | Medium | Yes, as general guidance, not a Project Guardian commitment |
| LTE-M battery-life modeling ~5–7 years; NB-IoT modeling toward ~10 years in low-duty-cycle IoT deployments | arXiv, "Modelling and Experimental Validation for Battery Lifetime Estimation in NB-IoT and LTE-M" | https://arxiv.org/pdf/2106.13286 | 2026-09-15 | Medium (academic modeling paper; figures are deployment-dependent, not wearable-specific) | Yes, only with explicit caveat that these are general IoT deployment figures, not wearable-specific or Project Guardian's own projection |
| Bell, Rogers, Telus operate LTE-M nationally as an LTE overlay for IoT; marketed for better battery life and in-building/underground penetration | Bell Business (LTE-M for IoT); Hologram community carrier notes | https://business.bell.ca/shop/medium-large/our-networks/lte-m ; https://community.hologram.io/t/carriers-in-canada/1946 | 2026-09-15 | Medium-High (Bell is a primary carrier source; Hologram is a secondary aggregator) | Yes, as general Canadian network-landscape background — not a confirmed carrier partnership |
| Rogers announced NB-IoT rollout plans in Canada (initially Ontario); nationwide NB-IoT timeline unclear/limited vs. LTE-M | Fierce Network, "Rogers plans to launch NB-IoT network across Canada" | https://www.fierce-network.com/iot/rogers-comm-plans-to-launch-nb-iot-network-across-canada | 2026-09-15 | Medium (trade press; note the underlying announcement is dated and may be outdated — flagged as such in search results) | Yes, with a caveat that this reflects historical/partial rollout information, not a current guarantee |
| Major Canadian carriers report ~99% population coverage on LTE, but under ~30% of Canada's land area is covered by Bell/Rogers/Telus combined | Aggregated from Simbase/industry sources found via search (secondary) | https://simbase.com/best-iot-sim-card/canada | 2026-09-15 | Medium (secondary/aggregator source; population-vs-land-area distinction is a well-known characteristic of Canadian geography and is consistent with general public knowledge) | Yes, as a coverage caveat — recommended for honest "coverage may vary by region" language |
| BLE practical range ~0–25 m typical, up to ~100 m optimal; typical RSSI positioning accuracy "a few meters," some vendor claims 1–2 m; Bluetooth 6.0 Channel Sounding ~30–50 cm | IoT For All, "Indoor Positioning with Bluetooth Low Energy"; u-blox, "Bluetooth Indoor Positioning" | https://www.iotforall.com/indoor-positioning-bluetooth-low-energy-ble ; https://www.u-blox.com/en/technologies/bluetooth-indoor-positioning | 2026-09-15 | Medium-High (mix of trade press and primary vendor source) | Yes, as general BLE technology background |
| Apple Find My network: crowd-sourced BLE broadcast from lost item, relayed by nearby Apple devices via their own internet connection, end-to-end encrypted, rotating identifiers for privacy | Airpinpoint, "How Apple's Find My Network Works"; Nordic Semiconductor, "Apple Find My network" | https://airpinpoint.com/tech/how-find-my-network-works ; https://www.nordicsemi.com/Products/Technologies/Apple-Find-My-network | 2026-09-15 | Medium-High (Nordic is a primary chipset-vendor source that implements Find My network accessories; Airpinpoint is a secondary explainer, broadly consistent) | Yes, clearly labeled as describing Apple's product/network, not Project Guardian's own capability |
