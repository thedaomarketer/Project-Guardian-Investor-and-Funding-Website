# US Regulatory Research — For Future US Expansion (Not Current Market)

**Purpose:** Background research for Project Guardian's compliance roadmap, relevant only if/when the
company expands into the US market. Project Guardian is a Canadian company with **no current US
operations, no FTC filings, no FCC equipment authorization, and no US legal review**. This document exists
to inform planning, not to describe current compliance.

**Website language rule:** Any US-related roadmap language must say "if/when Project Guardian expands to
the US" and "planned FCC certification" / "designed with COPPA principles in mind for future US launch."
Never say "COPPA-compliant" or "FCC-certified" — these are not currently true and would be false claims for
a pre-commercial, Canada-only company.

---

## 1. COPPA — Children's Online Privacy Protection Act (FTC)

**What it is:** A US federal law, implemented through the FTC's COPPA Rule, regulating operators of
websites/online services that are **directed to children under 13**, or that have **actual knowledge** they
are collecting personal information from a child under 13. A children's location-safety app/wearable would
almost certainly be "directed to children" and would trigger COPPA if the company operates in the US.

### What COPPA requires (FTC's six-step compliance framework)

1. **Determine applicability** — assess whether the service is directed to children under 13 or knowingly
   collects their data (Project Guardian's core use case likely qualifies).
2. **Post a COPPA-compliant privacy policy** — clear, complete notice of what data is collected, how it's
   used, and disclosed.
3. **Notify parents directly** before collecting personal information from their child.
4. **Obtain verifiable parental consent (VPC)** before collecting, using, or disclosing a child's personal
   information. The Rule does not mandate one specific method — it requires a method "reasonably designed
   in light of available technology" to confirm the person consenting is actually the parent.
5. **Give parents ongoing rights** — parents must be able to review the data collected, direct the operator
   to delete it, and refuse further collection/use.
6. **Maintain reasonable data security procedures** to protect the confidentiality, integrity, and security
   of children's personal information, including data retention/deletion limits (keep data only as long as
   reasonably necessary for the purpose collected).

### What counts as "personal information" under COPPA

Includes a child's name, address, phone/email, **physical location**, photos/videos/audio of the child,
government identifiers, biometric identifiers, and persistent identifiers (e.g., device/advertising IDs)
usable to track the child across services. **Location data — the core function of Project Guardian — is
explicitly covered.**

### Recent developments (track before any US launch)

- The FTC finalized amendments to the COPPA Rule (announced January 2025) tightening requirements,
  including requiring separate opt-in consent before using children's data for targeted advertising, and
  limiting monetization of children's data without active parental permission.
- The FTC issued a COPPA policy statement (February 2026) encouraging use of age-verification technology.
- **Because the Rule is actively being amended, Project Guardian's US compliance plan must be built against
  the current Rule text at the time of actual US launch planning, not against this research snapshot.**

---

## 2. FCC Equipment Authorization (Part 15 / Part 22, etc.)

**What it is:** Any device that intentionally emits RF energy — cellular, Bluetooth, GPS/GNSS receiver
components in a connected wearable — must go through FCC **equipment authorization** before it can be
marketed or imported into the US.

- **Certification** is the applicable, most rigorous authorization pathway for devices like this — it's
  performed by an FCC-recognized **Telecommunication Certification Body (TCB)** based on test data and
  documentation, resulting in a **grant of certification and public FCC ID**.
- **Part 15** governs unlicensed intentional radiators such as Wi-Fi and Bluetooth transmitters — explicitly
  including "wearables that connect to mobile phones."
- **Part 22** (and related parts like 24/27/90/95) governs licensed cellular/mobile services; a
  cellular-connected wearable's cellular radio module would need to meet the relevant licensed-service
  technical rules in addition to Part 15 for its unlicensed radios (Bluetooth).
- Devices are typically certified per **radio module** (using a pre-certified cellular/Bluetooth module can
  simplify — but not eliminate — this process; the finished product still generally needs verification that
  the module was integrated per its conditions of use).
- An uncertified device **cannot lawfully be marketed, imported, or sold** in the US.

---

## 3. Practical note on sequencing

Both COPPA and FCC obligations depend on decisions not yet made (whether/when the company sells in the US,
final hardware/module selection, final data flows). This document should be revisited and re-verified
against the live FTC and FCC rule text **at the time US expansion is actually planned**, not treated as a
one-time completed research task.

---

## Sources

| Claim | Source | URL | Date checked | Confidence | Suitable for public marketing (yes/no) |
|---|---|---|---|---|---|
| COPPA applies to operators of services directed to children under 13 or with actual knowledge of collecting their data; requires notice, verifiable parental consent, parental access/deletion rights, data minimization, and reasonable security | FTC, "Children's Online Privacy Protection Rule ('COPPA')"; FTC, "Children's Online Privacy Protection Rule: A Six-Step Compliance Plan for Your Business" | https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa ; https://www.ftc.gov/business-guidance/resources/childrens-online-privacy-protection-rule-six-step-compliance-plan-your-business | 2026-09-15 | High | No — US-market-only, and Project Guardian is not yet in the US market |
| COPPA's definition of "personal information" explicitly includes a child's physical location, along with persistent identifiers and biometric data | FTC, COPPA Rule / FTC business guidance summaries | https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa | 2026-09-15 | High | No |
| FTC finalized COPPA Rule amendments (Jan 2025) limiting monetization/targeted advertising using children's data without opt-in parental consent; FTC issued a Feb 2026 policy statement on age-verification technology | FTC press releases | https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-changes-childrens-privacy-rule-limiting-companies-ability-monetize-kids-data ; https://www.ftc.gov/news-events/news/press-releases/2026/02/ftc-issues-coppa-policy-statement-incentivize-use-age-verification-technologies-protect-children | 2026-09-15 | Medium-High (press releases confirmed via search; full rule text not independently re-read due to access restrictions — re-verify before drafting US-specific claims) | No |
| FCC equipment authorization (certification via a Telecommunication Certification Body, resulting in an FCC ID) is required before marketing/importing RF devices; Part 15 covers unlicensed intentional radiators like Bluetooth/Wi-Fi and explicitly includes wearables; Part 22/24/27/90/95 cover licensed services like cellular | FCC, "Equipment Authorization – RF Device"; secondary compliance-industry summaries (Cooley GO, ACB, Pillsbury) cross-referencing FCC rules | https://www.fcc.gov/oet/ea/rfdevice | 2026-09-15 | Medium-High (FCC page identified via search; direct fetch of fcc.gov blocked in this research session — recommend re-confirming via direct FCC.gov read before publishing) | No |
