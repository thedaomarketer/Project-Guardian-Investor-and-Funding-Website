# Privacy Law Research — Children's Location Data (Canada-first, US expansion)

**Purpose:** Background research for Project Guardian's compliance roadmap and investor materials. This is
**not legal advice** and has **not** been reviewed by counsel. Project Guardian is pre-commercial and has
**not** undergone any privacy assessment, audit, or regulatory filing. Nothing here should be read as a
claim that the product currently complies with any of the laws or guidance described below.

**Website language rule:** Marketing/investor copy may say things like "designed with PIPEDA principles in
mind," "privacy program planned in line with OPC guidance," or "roadmap includes a formal privacy impact
assessment before launch." Copy must **never** say "PIPEDA-compliant," "certified," "meets Law 25
requirements," "COPPA-compliant," or similar completed-state claims until legal review confirms actual
compliance and any required registrations/assessments are complete.

---

## 1. PIPEDA (federal, Canada) — the primary law that applies today

**What it is:** The *Personal Information Protection and Electronic Documents Act* is Canada's federal
private-sector privacy law. It governs how organizations collect, use, and disclose personal information
in the course of commercial activity. It is the law that would apply to Project Guardian collecting a
child's location, biometric/health, or identity data through the app and wearable, outside Quebec (Quebec
has its own law — see Section 2).

**Enforcement/oversight body:** The Office of the Privacy Commissioner of Canada (OPC).

### Core obligations relevant to Project Guardian

1. **Accountability** — the organization is responsible for personal information under its control and
   must designate an individual accountable for compliance (in practice: a named privacy officer, even for
   a small startup).
2. **Identifying purposes** — the purpose for collecting data (e.g., "show child's location to a parent,"
   "send a safety alert") must be identified before or at the time of collection.
3. **Consent** — meaningful consent is required for collection, use, or disclosure of personal information.
   Consent must be understandable to the person giving it — for a children's product this points toward
   **parent/guardian consent**, since a young child cannot give meaningful consent themselves under
   Canadian privacy norms (see Section 3 on OPC's under-13 guidance).
4. **Limiting collection** — only collect what is needed for the identified purpose (i.e., avoid
   collecting more location history, audio, or device data than the safety function requires).
5. **Limiting use, disclosure, and retention** — data used only for the purposes consented to, and kept
   only as long as necessary, then destroyed/anonymized.
6. **Accuracy** — personal information must be as accurate, complete, and up-to-date as necessary.
7. **Safeguards** — organizations must protect personal information with security safeguards appropriate
   to the sensitivity of the information (physical, organizational, and technical measures). Location and
   biometric data about a child would be treated as highly sensitive, raising the bar for safeguards.
8. **Openness** — an organization must make its privacy policies and practices readily available.
9. **Individual access** — on request, an individual (or a parent on behalf of a child) must be able to
   access their personal information and challenge its accuracy.
10. **Challenging compliance** — individuals must be able to challenge an organization's compliance, and
    organizations must have a complaint-handling process.

*(These are PIPEDA's 10 Fair Information Principles, drawn from Schedule 1 of the Act.)*

### Mandatory breach notification (added 2018)

- Organizations must report to the OPC any breach of security safeguards involving personal information
  that creates a **"real risk of significant harm" (RROSH)** to an individual.
- Affected individuals must also be notified directly when RROSH exists.
- Organizations must **keep a record of every breach**, even ones that do not meet the RROSH threshold, for
  a **minimum of two years**, and produce those records to the OPC on request.
- Knowingly failing to report, notify, or keep records is an offence that can result in fines.
- For a location-tracking product aimed at children, a breach exposing a child's real-time location would
  very likely be assessed as RROSH given the sensitivity of the data and the vulnerability of the
  individual.

### Status of federal privacy reform (relevant for the roadmap, not current law)

- Bill C-27 (the *Digital Charter Implementation Act, 2022*), which would have replaced PIPEDA with the
  *Consumer Privacy Protection Act* (CPPA) and added an AI law (AIDA), **died on the order paper in January
  2025** when Parliament was prorogued/dissolved. It was **not enacted**.
  Reform has since reappeared as Bill C-36 in a later Parliament; its status should be re-checked before
  any launch, since PIPEDA's replacement (and any children's-data-specific provisions in it) is not settled
  law as of this research. **Project Guardian's compliance roadmap should track this bill**, since a
  successor law could introduce Canada's first children's-data-specific statutory rules.

---

## 2. Provincial law: Quebec's Law 25 (stricter, applies if operating in Quebec)

- Quebec has its own private-sector privacy statute (the *Act respecting the protection of personal
  information in the private sector*), substantially amended by **Law 25** (formerly Bill 64), phased in
  2022–2024.
- Law 25 is **materially stricter** than PIPEDA in several ways relevant to Project Guardian:
  - Requires **express (opt-in) consent** for many processing activities, including tracking technologies.
  - For **minors under 14**, a parent, tutor, or guardian must consent on the child's behalf; minors 14 and
    older may consent themselves. Collecting a child's personal information without adult consent is
    permitted only where it is "clearly for the benefit of the minor."
  - Requires privacy impact assessments for certain projects involving personal information, a
    privacy-by-design approach, and breach notification obligations similar to (but not identical to)
    PIPEDA's.
- **Implication for Project Guardian:** if the company has Quebec users, it must treat Quebec as a
  **separate, stricter compliance track** — the federal PIPEDA baseline is not sufficient there. This
  should be flagged explicitly in the roadmap, not glossed over as "same as the rest of Canada."

---

## 3. Children's privacy specifically — no Canadian COPPA equivalent, but OPC treats kids' data as sensitive

- **Canada has no federal law equivalent to the US COPPA** that specifically regulates online services
  directed at children or sets an age-based consent trigger. This is a real gap that Project Guardian
  should not paper over.
- Instead, the OPC has issued **guidance treating children's and youth's personal information as inherently
  sensitive**, with sensitivity increasing the younger the child:
  - **"Collecting from kids? Ten tips for services aimed at children and youth"** — OPC business guidance
    aimed at organizations like Project Guardian, covering areas such as using plain language for consent,
    limiting collection to what's needed, being cautious with behavioural tracking/profiling of children,
    and building privacy protective defaults.
  - The OPC's working position, expressed through consultations, is that **children under 13 are generally
    considered unable to provide meaningful consent themselves** — consistent with PIPEDA's general consent
    principle pointing to parental/guardian consent for a product like Project Guardian's.
- **Children's Privacy Code (in development, not yet in force):** the OPC ran an exploratory consultation
  and published a "What We Heard" report on a prospective **Children's Privacy Code** for Canada. For
  purposes of that consultation, "children" was defined as **individuals under 18**. As of this research,
  this is **a consultation/guidance-development process, not a finalized binding code or law**. It should
  be tracked as a future compliance input, not cited as an existing requirement.
- **Practical takeaway for Project Guardian:** absent a Canadian COPPA, the safest and most defensible
  design posture is to voluntarily apply COPPA-like practices (verifiable parental consent, data
  minimization, parental access/deletion rights, no behavioural advertising to children) as a matter of
  product design — and to say so in the roadmap as a voluntary best practice, not as compliance with a
  named Canadian statute that doesn't yet exist in that form.

---

## Sources

| Claim | Source | URL | Date checked | Confidence | Suitable for public marketing (yes/no) |
|---|---|---|---|---|---|
| PIPEDA governs private-sector collection/use/disclosure of personal information in commercial activity | Office of the Privacy Commissioner of Canada, "The Personal Information Protection and Electronic Documents Act (PIPEDA)" | https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/ | 2026-09-15 | High | Yes, as "designed with PIPEDA principles in mind" — never "PIPEDA-compliant" |
| PIPEDA's 10 Fair Information Principles (accountability, consent, limiting collection, safeguards, etc.) | OPC, "PIPEDA fair information principles" | https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/p_principle/ | 2026-09-15 | High | Yes, framed as design principles, not compliance claim |
| Organizations must report breaches posing "real risk of significant harm" (RROSH) and keep breach records 2+ years | OPC, "What you need to know about mandatory reporting of breaches of security safeguards" | https://www.priv.gc.ca/en/privacy-topics/business-privacy/breaches-and-safeguards/privacy-breaches-at-your-business/gd_pb_201810/ | 2026-09-15 | High | No — internal roadmap use only until breach-response program exists |
| Bill C-27 (CPPA/AIDA) died on the order paper in January 2025; reform reappeared as Bill C-36 | IAPP, "Bill C-27 awaits fate after Canada's prime minister resigns"; Parliament of Canada LEGISinfo C-27 (44-1) | https://iapp.org/news/a/bill-c-27-awaits-fate-after-canadas-prime-minister-resigns/ ; https://www.parl.ca/legisinfo/en/bill/44-1/c-27 | 2026-09-15 | Medium (secondary sources; verify current bill status before launch) | No — internal roadmap tracking only |
| Quebec Law 25 requires parental/guardian consent for personal information of minors under 14 | Secondary legal-industry summaries of Quebec's Act respecting the protection of personal information in the private sector, as amended by Law 25 | https://cheq.ai/blog/quebec-law-25-privacy/ ; https://usercentrics.com/knowledge-hub/quebec-law-25/ | 2026-09-15 | Medium (secondary sources — confirm against Quebec's official Légis Québec text before relying on for legal claims) | No — needs legal confirmation before any public claim |
| Canada has no federal COPPA-equivalent; OPC treats children's data as sensitive and is developing a Children's Privacy Code (consultation stage, ages defined as under 18 for that consultation) | OPC, "Collecting from kids? Ten tips for services aimed at children and youth"; OPC, "Children's privacy code – Exploratory consultation"; OPC, "Consultation on the Development of a Children's Privacy Code – What We Heard" | https://www.priv.gc.ca/en/privacy-topics/business-privacy/bus_kids/02_05_d_62_tips/ ; https://www.priv.gc.ca/en/about-the-opc/what-we-do/consultations/completed-consultations/consultation-children-code/expl_children-code/ ; https://www.priv.gc.ca/en/about-the-opc/what-we-do/consultations/completed-consultations/consultation-children-code/report_children-code_2026/ | 2026-09-15 | High that no Canadian COPPA exists; Medium on Children's Privacy Code timeline/status — re-verify before launch | Yes, framed carefully ("no dedicated Canadian children's privacy statute exists yet; OPC guidance treats children's data as highly sensitive and we design accordingly") — never claim compliance with a code that isn't in force |
