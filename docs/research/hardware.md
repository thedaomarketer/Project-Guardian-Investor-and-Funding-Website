# Hardware Research: GNSS Accuracy & Secure Device Identity

**Status: General engineering/industry context only.** Project Guardian is
pre-commercial and has not selected final components, built a prototype, or
run field tests. Nothing in this document is a specification, claim, or
promise about Project Guardian's own hardware. It is background research —
drawn from third-party component datasheets, published literature, and
industry guidance — intended to inform *realistic, honestly-hedged* "target
specification" language (e.g., "we are targeting accuracy in the range
typical of consumer GNSS modules, pending prototype validation") on investor
and roadmap pages. Any public-facing copy built from this research must keep
the "target" / "designed to" framing and must not restate these figures as
Project Guardian's confirmed performance.

---

## 1. GNSS/GPS accuracy: what comparable consumer modules actually achieve

Consumer-grade GNSS accuracy is normally reported by chipset vendors as a
**CEP50** or **CEP68** figure (Circular Error Probable — the radius of a
circle, centered on the true position, within which 50% or 68% of position
fixes fall), measured under **open-sky** conditions with a good antenna. This
is a statistical, not absolute, guarantee, and real-world results vary with
antenna design, device placement (e.g., worn on a body vs. handheld), sky
visibility, and multipath.

### Representative manufacturer datasheet figures (open sky)

- **u-blox NEO-M8N**: ~2.5 m CEP (50%) without SBAS augmentation; ~1.5 m CEP
  with SBAS enabled. u-blox markets its standard-precision family (M8/M9/M10
  series) as "meter-level" positioning.
- **u-blox M9/M10 series** (e.g., MAX-M10S, NEO-M9N): continues the
  "meter-level" open-sky positioning claim, with u-blox explicitly noting
  that datasheet accuracy figures assume open-sky conditions and that
  real-world performance (e.g., antenna mounted inside a vehicle or on a
  body) is worse — u-blox has published its own material on "closing the gap
  between the datasheet and reality."
- **Quectel** GNSS modules (e.g., LC76G, LC29H family): vendor materials cite
  open-sky standalone accuracy in roughly the **1–2.5 m (CEP50)** range for
  standard consumer-grade modules, with higher-end/RTK-capable modules
  claiming centimeter-level accuracy (not relevant to a low-cost wearable).
- **High-precision RTK modules** (e.g., u-blox ZED-F9P family): ~0.01 m CEP —
  but these require RTK correction infrastructure, are far more expensive,
  and are not representative of what a low-cost consumer wearable would use.

**Takeaway for "target spec" language:** A commodity, single-frequency GNSS
chipset of the kind typically used in low-cost wearables and trackers is
generally documented by manufacturers as achieving on the order of
**3–5 meters open-sky accuracy** in practice (a commonly cited rough range in
industry/consumer messaging, sitting a bit above raw CEP50 datasheet numbers
to account for real-world antenna and body-worn degradation), even though
best-case datasheet CEP50 figures for the bare chipset can be lower (1.5–2.5
m). This 3–5 m range is a reasonable, defensible "typical for comparable
devices" anchor for target-spec language, provided it's clearly labeled as
industry-typical rather than a Project Guardian test result.

### Degraded conditions: urban canyon and indoor

- **Urban canyon (dense city streets, tall buildings):** Published research
  documents multipath- and NLOS-signal-induced position errors that are far
  worse than open-sky — absolute position error "of the order of tens of
  meters (as much as 50 meters)" has been reported in canyon conditions, with
  single-satellite pseudorange errors exceeding 30 m from multipath
  reflections alone. Even with basic multipath mitigation, mean horizontal
  error in one study dropped only from ~18 m to ~2 m, illustrating how much
  variability exists.
- **Indoor / heavily obstructed:** GNSS signals are attenuated by building
  materials — wood-frame walls attenuate roughly 10 dB, ordinary
  masonry/brick walls roughly 25 dB, and reinforced concrete considerably
  more. Below a receiver's sensitivity floor, or with fewer than ~4
  satellites visible, standard GNSS cannot produce a reliable fix at all.
  This is a well-documented, physics-driven limitation of GNSS in general
  (not specific to any vendor or product) and is why GNSS-only trackers
  commonly report "last known location" or fall back to other positioning
  methods (Wi-Fi/cell/BLE) indoors.

**Implication for roadmap copy:** Any target-spec language should
differentiate "open-sky target accuracy" from indoor/urban-canyon behavior,
and should describe indoor fallback (e.g., last-known-location, cell/Wi-Fi
assisted positioning) as a *design goal to validate*, not a guaranteed
capability, since no consumer GNSS device — including flagship smartphones —
reliably achieves open-sky-level accuracy indoors.

---

## 2. Secure IoT device identity & firmware update practices (general industry guidance)

This is general industry guidance Project Guardian's technology section can
reference for "designed with X in mind" language — it describes practices
the industry recommends, not compliance claims or certifications Project
Guardian currently holds.

### NIST guidance (NISTIR 8259 series)

NIST's **NISTIR 8259** ("Foundational Cybersecurity Activities for IoT
Device Manufacturers") and **NISTIR 8259A** ("IoT Device Cybersecurity
Capability Core Baseline") lay out a widely cited baseline for IoT device
manufacturers, including:

- **Device identification**: each device should be uniquely identifiable
  (e.g., via a device certificate or hardware-rooted identity) and
  distinguishable from other devices on a network.
- **Secure software/firmware update**: devices should support updates
  delivered and verified through a secure, authenticated mechanism, so only
  legitimate, unmodified firmware can be installed.
- **Data protection and logical access control**: devices should protect
  stored/transmitted data and restrict access to authorized users and
  services via strong authentication.

These are the kind of baseline capabilities ("device identity," "secure
update," "data protection") NIST recommends manufacturers build toward
throughout the product lifecycle — useful as the basis for "designed with
NIST IoT baseline practices in mind" language, not as a claim of NIST
certification (NIST does not certify products against NISTIR 8259).

### GSMA IoT Security Guidelines (FS.60 and related)

GSMA's IoT Security Guidelines (most recently revised 2024) are an
industry-standard reference for mobile-network-connected IoT devices and
cover device, network, and application security. Commonly cited practices
include:

- **Secure boot and firmware signing**: verifying firmware integrity and
  authenticity at boot and before applying updates, so unsigned or tampered
  firmware cannot run.
- **Mutual authentication and end-to-end encryption** between device and
  backend/network.
- **IoT SAFE** (IoT SIM Applet for Secure End-2-End Communication): a GSMA
  standard that uses the cellular SIM itself as a hardware root of trust for
  device identity and key storage — directly relevant to a cellular-connected
  wearable.

### General pattern worth citing (secure boot / signed firmware / device certificates)

Across both NIST and GSMA guidance (and broader industry practice, e.g.,
from cellular module vendors and MCU/SoC vendors), the common building
blocks for IoT device security are:

1. **Secure boot** — a hardware root of trust verifies each stage of boot
   firmware before executing it.
2. **Signed firmware updates** — over-the-air (OTA) updates are
   cryptographically signed by the manufacturer; the device verifies the
   signature before applying an update, preventing malicious or corrupted
   firmware from being installed.
3. **Device certificates / unique hardware identity** — each device carries
   a unique cryptographic identity (e.g., an X.509 certificate or key pair
   provisioned at manufacture) used to authenticate it to backend services.

**Suggested framing for the technology page:** "Project Guardian's hardware
and firmware architecture is being designed with industry-standard IoT
security practices in mind — including secure boot, signed firmware updates,
and unique per-device identity — consistent with guidance from NIST
(NISTIR 8259) and GSMA. These are design goals for the development
program, not completed certifications or audited implementations."

---

## Sources

| Claim | Source | URL | Date checked | Confidence | Suitable for public marketing (yes/no) |
|---|---|---|---|---|---|
| u-blox NEO-M8N: ~2.5 m CEP without SBAS, ~1.5 m with SBAS | u-blox module comparison / datasheet summaries | https://www.u-blox.com/en/positioning-chips-and-modules | 2026-09-15 | Medium (secondary summary of vendor datasheet; verify against primary PDF before quoting exact figure) | Yes, if labeled "typical for comparable consumer GNSS modules," with vendor cited |
| u-blox datasheet accuracy assumes open sky; real-world (e.g., in-vehicle) performance is worse than datasheet | u-blox blog, "GNSS receiver accuracy: Closing the gap between the datasheet and reality" | https://www.u-blox.com/en/blogs/tech/gnss-receiver-accuracy-closing-gap-between-datasheet-and-reality | 2026-09-15 | High (primary vendor source) | Yes |
| u-blox NEO-M9N / MAX-M10S marketed as "meter-level" GNSS positioning, multi-constellation | u-blox NEO-M9N-00B datasheet; MAX-M10S integration manual | https://content.u-blox.com/sites/default/files/NEO-M9N-00B_DataSheet_UBX-19014285.pdf ; https://content.u-blox.com/sites/default/files/MAX-M10S_IntegrationManual_UBX-20053088.pdf | 2026-09-15 | High (primary vendor datasheets) | Yes |
| Quectel GNSS modules (LC76G, LC29H family) cite ~1–2.5 m CEP50 open-sky accuracy for standard consumer modules | Quectel product pages / press release | https://www.quectel.com/news-and-pr/gnss-lc76g-launch/ ; https://www.quectel.com/product/gnss-lc99t/ | 2026-09-15 | Medium (vendor marketing copy; confirm against full spec PDF) | Yes, labeled as vendor-cited typical range |
| High-precision RTK modules (e.g., u-blox ZED-F9P) achieve ~0.01 m CEP but require RTK correction infrastructure | u-blox product materials (secondary summary) | https://www.accio.com/plp/u-blox-gnss | 2026-09-15 | Medium | Only as a contrast point (not applicable to a low-cost wearable); not for direct marketing claims |
| Urban canyon GNSS position error can reach "tens of meters (as much as 50 m)" due to multipath/NLOS; single-satellite pseudorange errors >30 m observed | Peer-reviewed literature (PMC), "Satellite Positioning Accuracy Improvement in Urban Canyons..." | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12349109/ | 2026-09-15 | High (peer-reviewed) | Yes, as general GNSS-technology context (not Project Guardian's own test result) |
| Wood walls attenuate GNSS signal ~10 dB, ordinary walls ~25 dB, reinforced concrete more; GNSS needs ~4 visible satellites for a fix, generally unavailable indoors | Siretta technical blog; GPS-repeaters.com technical blog | https://www.siretta.com/2026/04/why-is-my-gps-accuracy-bad-near-buildings-and-how-to-improve-it/ ; https://www.gps-repeaters.com/blog/why-doesnt-gps-work-indoors/ | 2026-09-15 | Medium (industry technical blogs, not peer-reviewed, but consistent with well-established RF physics) | Yes, as general/background technical context |
| NISTIR 8259 / 8259A define IoT baseline capabilities: device identification, secure update, data protection, logical access control | NIST | https://csrc.nist.gov/pubs/ir/8259/a/final ; https://www.nist.gov/itl/applied-cybersecurity/nist-cybersecurity-iot-program/nistir-8259-series | 2026-09-15 | High (primary government source) | Yes, as "designed with NIST guidance in mind" — do not claim NIST certification |
| GSMA IoT Security Guidelines (2024 revision) recommend secure boot, firmware signing, mutual authentication, end-to-end encryption; GSMA IoT SAFE uses the SIM as a hardware root of trust | GSMA | https://www.gsma.com/solutions-and-impact/technologies/internet-of-things/gsma_resources/securing-iot-in-a-connected-world/ ; https://www.gsma.com/solutions-and-impact/technologies/internet-of-things/iot-security/iot-security-guidelines/ | 2026-09-15 | High (primary industry-body source) | Yes, as "designed with GSMA guidelines in mind" — do not claim GSMA certification |
