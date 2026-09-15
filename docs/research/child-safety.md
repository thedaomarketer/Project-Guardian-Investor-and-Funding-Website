# Child Product Safety Research — Product Safety, Battery, and Toy Standards

**Purpose:** Background research for Project Guardian's compliance roadmap. Covers (a) general consumer
product safety law for a device worn by children in Canada and the US, (b) battery safety standards at a
level sufficient to cite correctly (detailed battery engineering compliance is tracked by a separate
hardware workstream), and (c) toy safety standards relevant if the "Guardian Toy" form factor is classified
as a toy. **No certification, testing, or regulatory filing has been done.** This is planning research only.

**Website language rule:** Use "designed with applicable consumer/child product safety requirements in
mind," "battery cells sourced from UN 38.3 tested suppliers (supplier documentation pending)," "toy-form
factor being evaluated against ASTM F963 / Canada's Toys Regulations." Never claim "CCPSA-certified,"
"CPSC-certified," "ASTM F963-compliant," or "UN 38.3 certified" until actual testing/certification exists —
note that CPSC's Children's Product Certificate and Canada's CCPSA framework are **self-certification /
manufacturer-attestation regimes** (not third-party government "seals"), so the correct claim, once earned,
is that mandatory testing was performed and a certificate/attestation was issued — not that a regulator
"certified" the product.

---

## 1. Canada — Canada Consumer Product Safety Act (CCPSA) and Toys Regulations

- **CCPSA**, administered by **Health Canada**, is the general consumer product safety law in Canada,
  in force since June 2011. It applies broadly to consumer products, including children's products, and
  prohibits manufacturers/importers/distributors/retailers from selling products that pose an unreasonable
  danger to health or safety.
- **Toys Regulations (SOR/2011-17)**, made under the CCPSA, specifically apply to the importation,
  advertising, and sale of toys. A "toy" is defined as a product **intended for use by a child under 14
  years of age** in learning or play — this definition matters because if Project Guardian's "Guardian Toy"
  form factor is marketed/perceived as a plaything (versus a safety instrument used by a caregiver), it
  could be pulled into this toy-specific regime rather than (or in addition to) general CCPSA obligations.
- The Toys Regulations set requirements covering **mechanical safety** (e.g., no detachable small parts on
  toys for children under 3, sharp-edge/point limits, pull-test requirements for attached components like
  plush eyes), **chemical/substance restrictions**, **labelling**, and prescribed **test methods**.
- **This is a self-certification regime**: there is no government pre-market approval stamp. The
  manufacturer/importer is responsible for testing (or having testing done) to the applicable requirements
  and ensuring the product does not pose an unreasonable danger before it is sold. Health Canada can order
  recalls, testing, and take enforcement action after the fact.
- **Implication for Project Guardian:** since the wearable is battery-powered, has a charging
  connector/cable, and (depending on form factor) may include small attachable parts (clips, charms, strap
  hardware), mechanical/choking-hazard requirements and the small-parts rule for young children need
  explicit engineering review — this is a design constraint, not just a paperwork step.

## 2. United States — CPSIA / CPSC (relevant if expanding to the US)

- The **Consumer Product Safety Improvement Act (CPSIA)** and CPSC regulations apply to products **designed
  or intended primarily for children 12 years of age or younger**, including toys and "durable infant or
  toddler products."
- Applicable children's products must be **tested by a CPSC-accepted third-party testing lab** against all
  applicable rules (e.g., lead content, phthalates, and, where relevant, ASTM F963 toy safety) **before**
  the manufacturer/importer can issue the required **Children's Product Certificate (CPC)**.
- The CPC has **no fixed government template**, but must include specific elements: precise product
  identification (model/SKU), each applicable safety rule cited individually, importer contact information,
  and contact information for whoever holds the underlying test records.
- Children's products and packaging must carry **permanent tracking labels** (manufacturer/importer
  identity, batch/lot, production date and location) to support recalls.
- Clothing-adjacent items for children under 12 have specific flammability, lead-content, and drawstring
  rules (strangulation hazard) — relevant if any strap/lanyard design resembles a drawstring.
- Like CCPSA, this is a **manufacturer self-certification regime** backed by mandatory third-party lab
  testing for kids' products — not a government "seal of approval."

## 3. Battery safety standards (high-level; detailed engineering owned by hardware workstream)

A small wearable device with an internal lithium battery needs to address two distinct kinds of standards:

- **UN 38.3 (transport safety)** — Part of the UN Manual of Tests and Criteria; governs how lithium
  cells/batteries must be tested (altitude simulation, thermal cycling, vibration, shock, external short
  circuit, crush/impact, overcharge, forced discharge) before they can be legally shipped by air, sea,
  road, or rail. Every new cell design and every new battery-pack design requires this testing, documented
  in a "battery test summary." **This is a transport/shipping safety requirement, not a consumer safety
  certification** — but it's required regardless, because the finished wearable and its batteries have to
  move through the supply chain.
- **IEC 62133 (battery safety, product-level)** — "Secondary cells and batteries containing alkaline or
  other non-acid electrolytes — Safety requirements for portable sealed secondary cells... for use in
  portable applications." IEC 62133-2 (the lithium-ion part) applies to rechargeable lithium-ion cells and
  battery packs in portable consumer electronics, explicitly including wearables. It tests electrical
  safety (overcharge, external short circuit, forced discharge), mechanical safety (vibration, shock,
  drop), and environmental/thermal safety. It does **not** cover industrial storage, EVs, or primary
  (non-rechargeable) lithium batteries.
- **Roadmap note:** battery cell/pack sourcing decisions should specify suppliers that provide UN 38.3 test
  documentation and IEC 62133-certified cells/packs; this doesn't certify the *finished Project Guardian
  device*, but it's the standard foundation a finished-device safety case is built on.

## 4. Toy safety standards — ASTM F963 (US) and Canada's Toys Regulations (if "Guardian Toy" is classified as a toy)

- **ASTM F963** ("Standard Consumer Safety Specification for Toy Safety") is the US toy safety standard.
  The current edition referenced is **ASTM F963-23**. It is **mandatory under US law** via the CPSIA — all
  toys sold in the US must meet it.
  - **Scope:** covers toys intended for children **under 14**. It addresses hazards not necessarily obvious
    to the public (choking, sharp points/edges, flammability, certain electrical/battery hazards, magnets,
    sound levels, etc.) encountered in normal use or reasonably foreseeable abuse. It does **not** cover
    general product performance/quality except as tied to safety, and it explicitly **excludes** sporting
    goods, camping goods, athletic equipment, musical instruments, general juvenile products, and furniture
    (except toy versions of those things) — the boundary between "toy" and "juvenile safety product" is a
    real classification question Project Guardian should resolve deliberately, since a wearable safety
    device is arguably not a "toy" in the ordinary sense, but a cute/toy-like form factor ("Guardian Toy")
    invites that classification.
  - ASTM F963 does include an **electrical/battery-toy-specific section** relevant to a connected wearable
    with a rechargeable battery, so if the device is classified as a toy, F963 testing is a superset of, not
    a replacement for, the IEC 62133 battery testing above.
- **Canada's Toys Regulations (SOR/2011-17)**, discussed in Section 1, plays the equivalent classification
  role in Canada — a Canadian "toy" (product intended for a child under 14 for learning/play) is regulated
  under CCPSA's toy-specific rules rather than (or in addition to) general CCPSA product rules.
- **Recommendation for the roadmap (not a legal conclusion):** treat form-factor and marketing language as a
  design/legal decision point — if Project Guardian wants to avoid being pulled into the full toy-safety
  regime (magnet rules, small-parts rules, sound-level limits, etc.) in both countries, marketing and
  product design should clearly position the wearable as a **child-safety/tracking device**, not a toy, and
  legal counsel should confirm the classification before using "Guardian Toy" as a public-facing name.

---

## Sources

| Claim | Source | URL | Date checked | Confidence | Suitable for public marketing (yes/no) |
|---|---|---|---|---|---|
| CCPSA is Health Canada's general consumer product safety law (in force since June 2011); prohibits sale of products posing unreasonable danger; applies broadly including to children's products | Canada.ca / Health Canada consumer product safety pages; secondary compliance summaries (ComplianceGate) cross-referencing the Act | https://www.canada.ca/en/health-canada/services/consumer-product-safety.html ; https://www.compliancegate.com/canada-consumer-product-safety-act-ccpsa/ | 2026-09-15 | Medium-High (direct Health Canada fetch blocked in this session; secondary sources consistent — recommend re-confirming directly against canada.ca before publishing) | No |
| Toys Regulations (SOR/2011-17), made under CCPSA, define a toy as a product intended for a child under 14 for learning/play, and set mechanical, substance, labelling, and test-method requirements | Justice Laws Website, "Toys Regulations (SOR/2011-17)" | https://laws-lois.justice.gc.ca/eng/regulations/sor-2011-17/index.html | 2026-09-15 | High (primary legislative source identified; full text not independently re-read due to access restrictions in this session) | No |
| CCPSA/Toys Regulations are a manufacturer self-certification regime (no pre-market government approval); Health Canada can order recalls/testing/enforcement after the fact | General structure of CCPSA as described in Health Canada program materials and secondary compliance summaries | https://www.canada.ca/en/health-canada/services/consumer-product-safety.html | 2026-09-15 | Medium (structural characterization; recommend direct primary-source confirmation before public claims) | No |
| CPSIA/CPSC rules apply to products designed/intended primarily for children 12 and under; require third-party lab testing and a Children's Product Certificate (CPC) with specific required elements; require permanent tracking labels | CPSC.gov, "Children's Product Certificate"; CPSC.gov, "Toy Safety Business Guidance" | https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Childrens-Product-Certificate ; https://www.cpsc.gov/Business--Manufacturing/Business-Education/Toy-Safety | 2026-09-15 | Medium-High (CPSC.gov pages identified via search; direct fetch blocked in this session — recommend re-confirming directly against cpsc.gov before publishing) | No |
| UN 38.3 requires 8 specific tests (altitude, thermal, vibration, shock, external short circuit, impact/crush, overcharge, forced discharge) for lithium cells/batteries before transport by air/sea/rail/road; required per new cell and battery design | Secondary battery-testing-lab summaries (Intertek, TÜV SÜD, CHEMTREC) describing the UN Manual of Tests and Criteria, Section 38.3 | https://www.intertek.com/batteries/un-38-3-testing/ ; https://www.tuvsud.com/en-us/industries/mobility-and-automotive/automotive-and-oem/automotive-testing-solutions/battery-testing/un-dot-38-3 | 2026-09-15 | Medium (consistent across multiple independent testing-lab sources; primary UN source (UNECE Manual of Tests and Criteria) not directly fetched in this session) | No |
| IEC 62133-2 sets safety requirements/tests (electrical, mechanical, environmental) for rechargeable lithium-ion cells/packs in portable consumer electronics, explicitly including wearables; excludes industrial/EV/stationary storage and primary batteries | Intertek, "IEC 62133: Safety Testing for Lithium Ion Batteries"; secondary standards summaries | https://www.intertek.com/batteries/iec-62133/ | 2026-09-15 | Medium (secondary sources; IEC standard itself is paywalled/not independently fetched) | No |
| ASTM F963-23 is the current US toy safety standard, mandatory under CPSIA, covers toys for children under 14, excludes sporting goods/athletic equipment/juvenile products/furniture except toy versions | ASTM, "Safer Children's Toys – ASTM F963 Toy Safety Standard Required by U.S. Law"; ANSI Blog on ASTM F963-23; Federal Register notice on mandating ASTM F963 | https://www.astm.org/news/press-releases/safer-children-039-s-toys-astm-f963-toy-safety-standard-required-by-u-s-law ; https://blog.ansi.org/ansi/astm-f963-23-standard-consumer-toy-safety/ ; https://www.federalregister.gov/documents/2024/01/18/2024-00741/safety-standard-mandating-astm-f963-for-toys | 2026-09-15 | High | No |
