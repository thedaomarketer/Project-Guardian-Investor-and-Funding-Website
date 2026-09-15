# Canadian Regulatory Research — Wireless Device Certification (ISED)

**Purpose:** Background research for Project Guardian's compliance roadmap and investor materials. This is
**not legal/regulatory advice** and has **not** been reviewed by counsel or a certification body. Project
Guardian has **not** submitted any device for ISED certification and holds **no ISED certification number**
today. Nothing here should be read as a claim of current certification.

**Website language rule:** Use "designed to meet ISED technical requirements," "planned ISED certification
prior to sale in Canada," or "certification process not yet started." Never use "ISED-certified,"
"IC-certified," or display a certification number that does not exist.

---

## What ISED regulates and why it applies to Project Guardian's wearable

**ISED** (Innovation, Science and Economic Development Canada) is the federal department that manages radio
spectrum and regulates radio-frequency (RF) equipment sold, leased, offered for sale, distributed, or
imported into Canada. A child-safety wearable with cellular connectivity, Bluetooth, and GNSS (GPS)
positioning contains **multiple intentional radio transmitters**, so it falls squarely within ISED's
regulatory scope — it cannot legally be marketed in Canada without going through ISED's equipment
authorization process first.

### Category I equipment and certification requirement

- ISED equipment standards are grouped into categories; **Category I equipment** — which includes cellular
  devices, Wi-Fi devices, and Bluetooth devices — **must be certified before** being imported, distributed,
  leased, offered for sale, or sold in Canada.
- Certification is performed by an ISED-**recognized Certification Body (CB)**, based on test data produced
  by a recognized test laboratory, evaluated against the relevant Radio Standards Specifications (RSS).

### Standards likely applicable to Project Guardian's wearable

| Function | Likely applicable RSS/standard | What it covers |
|---|---|---|
| Cellular connectivity | RSS-132 (and related cellular RSSs depending on bands/technology used, e.g. LTE/5G-specific RSSs) | Technical requirements for cellular telephone/cellular-network equipment |
| Bluetooth / short-range wireless | RSS-247 | License-exempt digital transmission systems, frequency-hopping systems, and other license-exempt devices (2.4 GHz band covers Bluetooth) |
| GNSS/GPS receiver | Typically a receive-only function; may fall under general licence-exempt provisions (RSS-Gen) rather than a transmitter-specific RSS, but must still be evaluated as part of the overall device certification since it's integrated into a multi-radio device |
| General compliance/certification procedure (all radio apparatus) | RSS-Gen ("General Requirements for Compliance of Radio Apparatus") | Administrative and technical procedures for certification, labelling, and marketing of radio apparatus |
| RF exposure (body-worn device) | RSS-102 | Sets RF exposure (SAR) compliance requirements for radiocommunication apparatus across all frequency bands, incorporating Health Canada's Safety Code 6 exposure limits. Because Project Guardian's device is **worn on the body (e.g., wrist/limb)**, SAR must be evaluated using an appropriate body-worn/limb-worn test configuration (e.g., a wrist phantom), not just a generic handset configuration. |

### Certification outputs and labelling

- Once certified, the device receives an **ISED Certification Number**, prefixed **"IC:"**, made up of a
  Company Number (CN) and Unique Product Number (UPN).
- The certified device must be listed in ISED's public **Radio Equipment List (REL)**.
- The device must carry the IC number on a label — physically affixed, or via **e-labelling** (displayed on
  an integrated screen, or through the companion app / packaging / literature for devices without a
  screen), along with a bilingual (English/French) compliance statement.
- Certification is tied to the **specific tested configuration** — any significant hardware/RF change
  (new antenna, new cellular module, new frequency bands) generally requires re-evaluation.

### Practical sequencing implication for the roadmap

Because RF certification (ISED) and RF exposure/SAR testing depend on the **final hardware design**
(antenna placement, enclosure, battery, wearing position), this work cannot start until industrial design
and RF engineering are substantially locked. The roadmap should show ISED certification as a **gated
milestone after hardware freeze**, not something that can be claimed pre-hardware.

---

## Sources

| Claim | Source | URL | Date checked | Confidence | Suitable for public marketing (yes/no) |
|---|---|---|---|---|---|
| ISED regulates radio spectrum and requires equipment authorization/certification before import, distribution, lease, sale in Canada; Category I equipment (cellular, Wi-Fi, Bluetooth) must be certified | ISED, "Equipment Standards and Certification Overview" / "Wireless equipment certification" | https://ised-isde.canada.ca/site/certification-engineering-bureau/en/wireless-equipment-standards-knowledge-center/equipment-standards-and-certification-overview ; https://ised-isde.canada.ca/site/spectrum-management-telecommunications/en/licences-and-certificates/radio-authorizations/wireless-equipment-certification | 2026-09-15 | High | No — internal roadmap use only until certification obtained |
| RSS-132 covers cellular equipment; RSS-247 covers Wi-Fi/Bluetooth/license-exempt digital transmission and frequency-hopping systems in 902 MHz/2.4 GHz/5 GHz bands | ISED, "Radio Standards Specifications" list; secondary compliance-lab summaries (ACB, Applus, IB-Lenhardt) | https://ised-isde.canada.ca/site/certification-engineering-bureau/en/wireless-equipment-standards-knowledge-center/radio-standards-specifications | 2026-09-15 | Medium-High (RSS list confirmed on ISED site; exact RSS-to-technology mapping should be re-confirmed by an ISED-recognized test lab for the actual cellular module/bands chosen) | No |
| RSS-102 sets RF exposure (SAR) compliance requirements, incorporating Health Canada Safety Code 6; body-worn devices (e.g., wrist-worn) use limb/wrist phantom test configurations; testing must be done by an ISED-recognized lab | ISED, "RSS-102 — Radio Frequency (RF) Exposure Compliance of Radiocommunication Apparatus"; ISED SAR measurement/simulation procedure pages | https://ised-isde.canada.ca/site/spectrum-management-telecommunications/en/devices-and-equipment/radio-equipment-standards/radio-standards-specifications-rss/rss-102-radio-frequency-rf-exposure-compliance-radiocommunication-apparatus-all-frequency-bands | 2026-09-15 | High that RSS-102/SAR applies to body-worn devices; Medium on the specific wrist-phantom detail (drawn partly from secondary/academic source) | No |
| Certified devices get an "IC:" certification number (Company Number + Unique Product Number), must be listed in the Radio Equipment List, and labelled (physical or e-label) with bilingual compliance info | ISED, RSS-Gen general notices and labelling guidance; ACB/ISED labelling memorandum | https://ised-isde.canada.ca/site/spectrum-management-telecommunications/en/devices-and-equipment/radio-equipment-standards/radio-standards-specifications-rss/rss-gen-general-requirements-compliance-radio-apparatus | 2026-09-15 | Medium-High | No |
