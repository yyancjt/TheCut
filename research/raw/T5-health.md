# T5 — Bio, Health, Longevity, Pharma & Digital-Health Regulation in Western Europe (2024–2026)

**Prepared:** 2026-09-05
**Audience:** solo/tiny technical founder (1–3 people, <€100k, 6–9 months to v1), currently building a fitness/training PWA, based in Western Europe, wanting second-order (non-obvious) opportunities created by recent tech/medical/regulatory shifts. Not generic B2B SaaS, not AI-workflow tooling.

## Method note and evidence labels (read first)

- 16 distinct web searches were completed before the session's web-search budget was exhausted; direct page fetches were then blocked by the network egress policy. So this report is thinner on primary-source verification than intended for several sub-topics (eldercare reimbursement codes, pharmacy closures, ambient scribes, padel/HYROX numbers, wearable APIs, food/bio/vet).
- Every claim is labelled:
  - **[C]** = confirmed in this session from a cited source (URL inline).
  - **[B]** = background knowledge from my training (cutoff ~June 2026), *not re-verified here*; treat as "probably right, check before betting money".
  - **[I]** = my inference / opinion.
- Where I give a wedge size it is an order-of-magnitude estimate **[I]** unless a source is cited.

---

## Part 1 — Findings (16)

### F1. GLP-1 reimbursement has split Western Europe into three different markets — and each creates a different pain

**(a) What changed.**
- **France**: from **15 June 2026** Wegovy and Mounjaro are reimbursed at **65%** (100% in ALD) for adults with BMI >40, or BMI >35 plus one comorbidity (T2D, hypertension, sleep apnoea, dyslipidaemia, CVD). Initial prescription must come from a **specialist** (endocrinologist/obesity/nutrition physician); renewals by any doctor. **Continued reimbursement is conditional on ≥5% weight loss at a 4-month evaluation.** [C] https://www.vidal.fr/actualites/37850-obesite-prise-en-charge-de-wegovy-et-mounjaro-a-partir-du-15-juin-2026-sous-conditions.html ; https://www.caducee.net/actualite-medicale/16918/wegovy-et-mounjaro-rembourses-dans-l-obesite-les-generalistes-ecartes-de-la-premiere-prescription.html ; https://info.medadom.com/blog/obesite-medicaments-rembourses
- **UK (England)**: NHS tirzepatide rollout is cohort-gated. Cohort 1 (June 2025): BMI ≥40 + 4 of 5 comorbidities; Cohort 2 (June 2026): BMI 35–39.9 + 4 of 5; Cohort 3 (April 2027): BMI ≥40 with 3 of 5. From 1 April 2026 prescribing is in the GP contract via QOF indicators with £25m ring-fenced. A BMJ investigation (Jan 2026) found **1 in 5 local areas still had no functional pathway**. [C] https://www.england.nhs.uk/long-read/interim-commissioning-guidance-nice-ta1026-tirzepatide/ ; https://waltonsurgery.co.uk/trending/mounjaro-nhs-bmi-35-june-2026-expansion/ ; https://nowpatient.com/blog/nhs-offers-doctors-up-to-3000-to-expand-weight-loss-drug-prescribing ; https://www.llrlmc.co.uk/wp-content/uploads/2026/01/Appendix-1-Tirzepatide-LES-spec-v1.2-2025.pdf
- **Germany**: statutory insurance (GKV) still does **not** pay for obesity indication — §34 Abs. 1 SGB V "Lifestyle" exclusion, upheld by the Bundessozialgericht even at BMI >40 with comorbidities; only T2D patients get reimbursement. Germany is now the only major EU market without GKV coverage. [C] https://drmeile.de/kostenuebernahme-abnehmspritze-2026-wer-zahlt-wegovy-mounjaro/ ; https://www.zavamed.com/de/abnehmspritze-krankenkasse.html ; https://praxisklinik-rosengarten.de/blog/frankreich-bezahlt-ab-heute-die-abnehmspritze-und-was-das-fuer-patienten-in-deutschland-bedeutet ; PKV disputes: https://glp-1forum.de/article/330-pkv-verweigert-mounjaro-erstattung-was-das-urteil-2026-bedeutet/
- **Oral Wegovy**: EC approval **15 July 2026** (25 mg once daily; ~17% weight loss vs 3% placebo); on sale in **German pharmacies from 1 September 2026**, Germany first in EU, retail **€170–280/month**. [C] https://www.biospace.com/press-releases/novo-nordisk-receives-european-commission-approval-of-wegovy-pill-as-first-oral-glp-1-for-weight-management-in-the-eu-single-ready-to-use-pen-for-higher-dose-7-2-mg-also-approved ; https://www.euronews.com/health/2026/09/02/weight-loss-pill-wegovy-available-in-german-pharmacies-from-1-september ; https://srnnews.com/novo-nordisk-launches-wegovy-weight-loss-pill-in-germany/

**(b) Non-obvious implication.** [I] The three regimes create three distinct "jobs":
- France: a **4-month, ≥5% checkpoint** that patients and prescribers must *document* or lose reimbursement — a hard deadline that did not exist anywhere in Europe before June 2026. Specialist bottleneck for initiation.
- UK: **postcode-lottery pathway + GP-contract incentive** — practices are paid to prescribe but must deliver "wraparound care" (the LES spec above), which most GP practices cannot staff.
- Germany: **pure cash-pay**, now with a €170–280 pill and no needles — the self-payer wants the *shortest possible course* and a plan to stop.

**(c) Who is in pain / can pay.** French endocrinology/obesity clinics (few hundred prescribing centres, now a bottleneck); English GP practices on the tirzepatide LES (thousands); German self-payers (order of magnitude: hundreds of thousands actively paying; [B] Germany had >1M private GLP-1 weight-loss users by 2025 — unverified). Wedge: France and Germany are effectively greenfield for *structured companion programmes*; UK is dominated by online pharmacies.

**(d) Who is building it.** Online prescribers (Zava, Voy, Juniper, Numan, CheqUp, Manual, Oviva, Second Nature in UK; Zava/Fernarzt/DoktorABC in DE) [B]. Oviva/Second Nature hold NHS contracts [B]. Nobody I could confirm is building a *France-specific 4-month-checkpoint companion* or a *German off-ramp* product. **Gap: the maintenance/checkpoint layer, not the prescribing layer.**

**(e) Feasibility.** High for a PWA builder if the product stays *non-diagnostic and non-dosing* (wellness/lifestyle support, logging, coaching): outside MDR (MDCG 2019-11 rule: software for lifestyle/wellbeing with no medical purpose is not a device) [B]. Data: special-category health data → GDPR Art. 9 explicit consent, EU hosting; manageable. Risk goes up sharply if you compute dose titration or clinical decisions (MDR class IIa+).

---

### F2. GLP-1 lean-mass loss is now a documented, trial-backed problem — and patients *reduce* activity on the drugs

**(a)** 20–30% of weight lost on GLP-1RA is lean mass; supervised resistance training + protein 1.2–1.6 g/kg/day preserves or increases lean mass (S-LITE). [C] https://www.acefitness.org/continuing-education/certified/june-2025/8892/glp-1s-and-lean-mass-what-the-research-shows/ ; https://www.ajmc.com/view/glp-1-therapies-in-2026-beyond-blood-sugar-and-the-scale. New RCTs started April 2026 (FLEX, tirzepatide + progressive resistance; a 12-week exercise+nutrition trial). [C] https://clinicaltrials.gov/study/NCT07457437 ; https://clinicaltrials.gov/study/NCT07554417. **ENDO 2026: adults losing weight on GLP-1RAs significantly *decreased* physical activity.** [C] https://www.endocrine.org/news-and-advocacy/news-room/2026/maharjan-press-release-endo-2026. Counter-evidence exists (Cell Reports Medicine 2026: no *disproportionate* muscle loss), so message carefully. [C] https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(26)00082-0

**(b) Non-obvious implication.** [I] The market assumes GLP-1 users will show up at gyms. The ENDO data says the opposite: appetite suppression + low energy → *less* movement. So the winning product is not "a gym programme for GLP-1 users" but a **low-volume, high-adherence strength protocol designed for people with suppressed appetite, nausea days, and low energy** (2×20 min/week, protein-first, nausea-aware scheduling), delivered where they already are (pharmacy app, clinic, phone). Also: protein intake is the harder half — appetite is suppressed, so a "protein floor" tracker matters more than calorie tracking.

**(c) Pain/payers.** Patients (regain fear, "Ozempic face/body"), French specialists who must show 5% loss but also avoid sarcopenia in 50+ patients, UK GP practices obliged to offer wraparound care, gym operators losing GLP-1 members who stop coming [I].

**(d) Who is building.** US: Form Health, Found, WeightWatchers Clinic, Noom Med, Equinox "GLP-1 programme" [B]. Europe: Oviva, Second Nature, Juniper bundle generic coaching [B]. **Gap: no European product treats *muscle preservation as the KPI* with objective measurement (grip strength, chair-stand, body composition trend) and a nausea-aware programme in DE/FR/NL languages.**

**(e) Feasibility.** Excellent fit for the founder's PWA. Non-MDR if it stays wellness. Clinical credibility: partner with one endocrinology practice or one sports-science department; run a small before/after cohort.

---

### F3. UK online prescribing was re-regulated (GPhC Feb 2025; enforcement analysis April 2026) — the "questionnaire pharmacy" is dead

**(a)** GPhC guidance (Feb 2025): weight-loss injections can no longer be prescribed on questionnaire alone; requires independent verification and meaningful two-way communication (typically video). April 2026: GPhC published inspection analysis finding prescribing outside NICE criteria, no meaningful assessment, supply without prescriber interaction. [C] https://pharmaceutical-journal.com/article/ld/staying-safe-with-online-pharmacies-what-patients-and-providers-need-to-know-about-weight-loss-prescribing ; https://www.osborneclarke.com/insights/weighty-matters-glp-1s-and-uk-regulatory-diet-they-cannot-escape ; https://www.vwv.co.uk/insights/articles/injecting-compliance-a-tightening-regulatory-grip-on-glp-1-medicines/ ; https://www.regulatoryrapporteur.org/industry-news/pharmacies-told-to-follow-gphc-guidance-on-prescription-only-weight-loss-medicine/842.article

**(b) Implication.** [I] Online pharmacies' cost per patient just rose (clinician video time, ID/weight verification, ongoing monitoring). They will outsource the *non-clinical* wraparound (exercise, protein, side-effect coaching, adherence proof) to whoever can supply it cheaply and in a way that looks good at inspection. **Second-order: the pharmacy needs *evidence of ongoing support* in its records.** A programme that generates that evidence (attendance, weight trend, side-effect log, escalation flags) is worth more to them than to the patient.

**(c) Payers.** ~20–40 UK online pharmacies/telehealth brands with real GLP-1 volume [B/I]; each has thousands to hundreds of thousands of patients.

**(d) Building it.** In-house coaching at Voy/Juniper/Numan [B]. **Gap: white-label wraparound engine for the long tail of GPhC-registered pharmacies and GP LES practices.**

**(e) Feasibility.** Medium-high. Commercially this is B2B2C but the product is consumer-facing (not workflow SaaS). Regulatory risk low if non-diagnostic. Compounding note: unlike the US (FDA shortage-ended Feb 2025, 50+ warning letters in 2026, 503B removal proposed April 2026 [C] https://www.telehealthally.com/guides/compounded-semaglutide-fda-ban-guide ; https://healthfactsjournal.com/fda-rules-on-compounded-semaglutide-2026-update/), there is **no mass-compounding channel in the EU/UK** — magistral preparation is per-patient only [B]. So European volume runs through branded product and pharmacies, which makes pharmacies the distribution chokepoint.

---

### F4. The "GLP-1 off-ramp" is the unpriced problem (Germany especially)

**(a)** German self-payers face €170–280/month for the pill (F1) with no reimbursement, plus a PKV that is litigating against paying (glp-1forum link above). Regain after stopping is well documented (STEP-1 extension: ~2/3 of lost weight regained within a year) [B].

**(b) Implication.** [I] A German self-payer's rational plan is "take it 6–12 months, then stop". Nobody sells the *stopping* protocol: taper schedule, protein/strength ramp *before* the last dose, hunger-return coaching, regain triggers, when to restart at low dose. Physicians have no reimbursed time for this. Also, oral semaglutide's fasting-dosing rules (empty stomach, 30 min wait) [B] create a new daily-adherence problem that injections did not have.

**(c) Payers.** German cash-payers (largest in Europe by count [I]); French patients who *fail* the 5% checkpoint and lose reimbursement (a guaranteed churn cohort from ~Oct 2026 on).

**(d) Building.** Weight-maintenance apps (WW, Noom) generic [B]. **Gap: "Absetzen ohne Jojo" — a 16-week off-ramp with strength/protein core, in German first.** Could later be certified as a §20 SGB V prevention course (see F7).

**(e) Feasibility.** High. Same PWA, different sequencing and copy.

---

### F5. DiGA (Germany) is no longer a viable route for a 1–3 person team — but its economics reveal where money actually flows

**(a)** By end-2025: 74 DiGAs ever listed, 16 delisted, net 58 (other counts say ~56); **9 manufacturer insolvencies**; >€25M in receivables endangered; 6 admissions vs 7 delistings in 2025. Negotiated prices average **€227 vs €552 first-year manufacturer prices (−59%)**. >1M prescriptions by end-2024, 81% activated. Amended DiGAV in force **1 Feb 2026** (continuous evidence, transparency to BfArM/payers); mandatory anwendungsbegleitende Erfolgsmessung (AbEM) data capture from **1 July 2026**. [C] https://dux-healthcare.com/en/knowledge/business-strategy/diga-market-report-2026/ ; https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/telematik/digitales/2025_DiGA_Bericht_GKV_SV.pdf ; https://www.gelbe-liste.de/politik-verbaende/diga-report-2025-preise-nutzen-gkv ; https://www.bfarm.de/DE/Medizinprodukte/Aufgaben/DiGA-und-DiPA/DiGA/_node.html ; https://www.physitrack.com/insights/germany-diga-2026-digital-physiotherapy-reimbursement ; https://www.healthcare.digital/single-post/the-german-digital-healthcare-act-dvg-at-seven-years-review-of-the-diga-ecosystem-and-its-impact

**(b) Implication.** [I] Fast-track admission + 12-month RCT requirement + price cut at month 13 + AbEM reporting = a €1–3M capital game. The insolvencies were mostly single-product startups. The reform is a *consolidation* move favouring incumbents (Gaia, HelloBetter, Kaia, Sidekick, Selfapy, Vivira). **For a tiny team the DiGA is not the product; the DiGA companies' obligations are.** Every permanently listed DiGA now has to (i) write structured data to the ePA (F8) and (ii) run AbEM from July 2026 — but that's B2B tooling the founder said they don't want. Alternative reading: **which conditions are open?** [B] MSK/back pain, depression, anxiety, insomnia, tinnitus, obesity, T2D are saturated. Under-served (few/no DiGA): menopause, long-COVID, ADHD in adults, endometriosis, post-bariatric care, sarcopenia/fall prevention in elderly. None is worth a tiny team's DiGA attempt given the economics above.

**(c)–(e)** Avoid as a route. Feasibility for tiny team: low (capital, MDR class IIa minimum, RCT).

---

### F6. France PECAN and UK NICE are institutional routes — not for this founder, but they signal where public money goes

**(a)** PECAN (launched April 2023) gives 1-year transitional reimbursement to CE-marked digital medical devices (therapeutic or remote-monitoring); a new submission window opened Feb 2026. Public tallies of successful PECAN products were not retrievable this session; [B] uptake has been low (single digits to low teens of products). [C] https://esante.gouv.fr/ens/offre/dispositifs-medicaux-numeriques/pecan ; https://www.has-sante.fr/jcms/p_3376633/fr/dispositifs-medicaux-numeriques-la-prise-en-charge-anticipee ; https://industriels.esante.gouv.fr/produits-et-services/dispositifs-medicaux-numeriques/dispositifs-medicaux-numeriques-prise-charge-anticipee
- NICE EVA: 103 technologies assessed, 57 (55%) conditionally recommended; mental health the top area. **From April 2026 NICE's technology appraisal programme covers digital health technologies, giving them legal parity with medicines** (NHS must fund positive TAs). May 2026: new Early Use HealthTech Guidances (asthma self-management, AI echo). [C] https://www.nice.org.uk/news/blogs/accelerating-innovation-how-nice-is-opening-pathways-to-digital-health-technologies-for-the-nhs ; https://www.digitalhealth.net/2025/10/how-nice-is-opening-pathways-to-digital-health-technologies-for-the-nhs/ ; https://www.valueinhealthjournal.com/article/S1098-3015(24)04837-X/fulltext ; https://mtrconsult.com/news/nice-implemented-new-healthtech-program-england

**(b) Implication.** [I] UK is the one place in Europe where a *funded* mandate for DHTs now exists, but the evidence bar and time horizon (2–4 years) exclude a tiny team. Useful only as an exit narrative: build the consumer wedge, then a larger player takes it through TA.

---

### F7. [B] The overlooked German reimbursement code for a fitness founder: §20 SGB V prevention courses (ZPP certification), not DiGA

**(a)** [B — not re-verified this session] Statutory insurers reimburse 80–100% (typically capped ~€75–150/course, 2 courses/year) of Zentrale Prüfstelle Prävention (ZPP)-certified courses, including **online/on-demand video courses**, in fields incl. strength/movement and nutrition. Certification requires a qualified course leader (e.g., sports scientist / licensed trainer with specified credentials), a manual, and 8–12 unit structure. Thousands of courses certified; digital ones surged after 2020.

**(b) Implication.** [I] A structured "strength + protein for people on/after weight-loss medication" course can be ZPP-certified as *prevention* (muscle preservation, fall prevention, metabolic health) without touching MDR, and Krankenkassen will refund the participant even though they refuse to pay for the drug itself. That is a quirky but real reimbursement path in the one market where the drug is cash-pay.

**(c)** German GKV insured (~74M) [B]; realistic reachable: GLP-1 self-payers + 50+ "sarcopenia-aware" cohort.

**(d)** Generic ZPP online courses exist (Gymondo/fitnessRAUM-style, BKK partners) [B]; **no GLP-1-specific or "post-medication maintenance" certified course that I know of** [B/I].

**(e)** Feasibility high; cost: a certified course leader (contract a sports scientist), certification effort 2–3 months. Payment is per-participant reimbursement — the founder sells B2C at ~€100–150 and the participant claims it back.

---

### F8. EHDS + Germany's opt-out ePA make patient-held data real from 2026 — but third-party *read* access is still narrower than people think

**(a)** EHDS: member states must establish digital-health authorities and national contact points by **26 March 2027**; primary-use rights (patient summaries, ePrescriptions) and most secondary-use provisions apply from **26 March 2029**; imaging/lab results categories by **26 March 2031**. [C] https://securiti.ai/infographics/european-health-data-space-timeline-and-implementation-roadmap/ ; https://www.skadden.com/insights/publications/2025/06/the-european-health-data-space ; https://ehds-jurist.nl/en/tijdlijn ; https://health.ec.europa.eu/document/download/4dd47ec2-71dd-49fc-b036-ad7c14f6ed68_en?filename=ehealth_ehds_qa_en.pdf
- Germany ePA "für alle": opt-out, every GKV insured gets a record; 2026 adds **lab results** and the electronic patient summary (ePKA); ePA v3.2 (2026) adds access notifications. DiGA manufacturers are obliged to write structured usage data/reports into the ePA; an open-source ePA client for DiGA exists (fbeta). Third-party apps may authenticate without eGK+PIN after a written/electronic declaration by the insured. [C] https://fbeta.de/_fbeta-epa-client-eine-open-source-loesung-fuer-die-sichere-und-einfache-anbindung-von-diga-an-die-epa-fuer-alle/ ; https://fbeta.de/epa-client-fuer-diga-was-hersteller-bei-der-anbindung-erwartet-und-wie-sie-es-loesen/ ; https://www.medicalblogs.de/elektronische-patientenakte-2026-11/ ; https://www.dkgev.de/fileadmin/Mediapool/2_Themen/2.1_Digitalisierung_Daten/2.1.5._Telematik-Infrastruktur/2.1.5.4_Elektronische_Patientenakte__ePA_/Umsetzungshinweise_prozessual_technischer_Teil_2025-01-10_n.pdf
- [B] Patient-facing ePA access runs through the Krankenkassen's own apps; a generic consumer app cannot yet read a patient's ePA directly. Patients can export documents. France's Mon espace santé has an app-catalogue model; NL relies on MedMij-certified PGOs (personal health environments) with real API access but weak consumer adoption.

**(b) Implication.** [I] From 2026 a German patient can *export* lab results as structured documents from their ePA; from 2029 EU citizens can claim their data in a common format. The consumer-side product that becomes possible is a **longitudinal, provider-independent health ledger** (F9). The B2B-side product ("ePA connector as a service" for DiGA vendors) is real but is exactly the SaaS the founder does not want. The NL MedMij/PGO route is technically the most open in Western Europe today and is under-exploited by consumer apps [B/I].

**(e)** Regulatory: storing/displaying patient data without interpretation = not a medical device (MDCG 2019-11) [B]; GDPR Art. 9; if you ever connect to gematik infrastructure you inherit heavy security requirements.

---

### F9. Consumer diagnostics boom (Neko, scans, home bloods) has produced results without a home

**(a)** Neko Health raised **$700M Series C (July 2026)** after $260M Series B (Jan 2025); operating in Sweden and UK (London, Manchester, Birmingham), expanding to US and Europe, "investing in diagnostics". [C] https://tech.eu/2026/07/15/neko-health-raises-700m-as-demand-grows-for-preventive-health-scans/ ; https://www.eu-startups.com/2026/07/daniel-eks-neko-health-raises-e612-7-million-series-c-as-it-prepares-for-us-expansion/ ; https://www.healthcaredive.com/news/neko-health-series-b-funding-full-body-scan/738680/
- DTC lab-testing in Europe: IVDR applies; one market report claims only ~40% of DTC providers meet the standards and >50% of member states partially ban some DTC tests (mainly genetic); Germany adds Rili-BÄK for labs and [B] the Gendiagnostikgesetz (physician-only genetic testing) and a physician-of-record requirement for most blood panels. [C] https://www.marketdataforecast.com/market-reports/europe-direct-to-consumer-laboratory-testing-market ; https://healthcare-in-europe.com/en/news/the-dangers-of-commercial-direct-to-consumer-tests.html ; https://blog.johner-institute.com/regulatory-affairs/laboratory-developed-test-ldt/ ; https://journals.publisso.de/en/journals/gms/volume23/000337
- CGM for non-diabetics: Stelo/Lingo are OTC in the US; EU rollout slower; in Germany Libre 3 sensors are buyable via online pharmacies without prescription. [C] https://www.plotline.health/blog/best-cgm-for-non-diabetics-2026 ; https://www.lab2go.net/en/blog/cgm-continuous-glucose-monitoring/

**(b) Implication.** [I] Each vendor traps results in its own app (Neko, Lykon/Cerascreen/Medichecks/Thriva, DEXA clinics, GP labs, gym InBody). The 40+ self-payer who does one Neko scan, one DEXA, two blood panels and wears a Garmin has **no single longitudinal view and no way to hand a clean summary to their GP**. Because Germany forbids most true DTC ordering, the German product must be "bring your own results" rather than "we sell tests".

**(c)** Payers: 40–60-year-old self-payers in UK/DE/NL/CH already spending €300–2,000/yr on optional diagnostics [I]; also small employers offering "executive physicals".

**(d)** Building: Function Health/Superpower (US, sell tests), Neko (vertical), Apple Health (records only US/UK NHS partial), Withings [B]. **Gap in Europe: independent results vault + trend + "GP-ready summary", esp. body-composition/strength trends alongside bloods.**

**(e)** Feasibility medium: PDF/lab parsing is doable; the hard line is *interpretation*. Show reference ranges and trends (not a device); the moment you say "your risk of X is elevated" you are a class IIa device under MDR rule 11 [B]. Keep clinician-in-the-loop optional via partner doctors.

---

### F10. Adult ADHD in Europe: diagnoses surging (esp. women), medication supply unreliable since late 2023

**(a)** Oxford study (Jan 2026): ADHD medication use rose sharply across European countries, driven by adults, especially women; methylphenidate most used, lisdexamfetamine/guanfacine rising. UK: Elvanse (lisdexamfetamine, sole supplier Takeda), Concerta XL and methylphenidate MR products have had recurring disruptions since late 2023; system "not yet in a position to easily accommodate those newly diagnosed"; strengths drop in and out of availability regionally. [C] https://www.ox.ac.uk/news/2026-01-23-adhd-medication-use-rises-sharply-across-europe-driven-growth-among-adults ; https://mediwatch.co.uk/blog/elvanse-adhd-medication-shortage-2026 ; https://roarganise.com/blogs/news/adhd-medication-shortages-2026-update ; https://zelligcare.com/blog/adhd-medication-shortage/
- [B] UK "Right to Choose" pushed adult assessments to private providers (Psychiatry UK etc.) with NHS shared-care friction; NL GGZ waiting times exceed the Treeknorm for ~tens of thousands; Germany has few adult-ADHD specialists and BtM prescription rules.

**(b) Implication.** [I] The newly diagnosed adult woman in 2026 faces a *logistics* problem more than a therapy problem: which pharmacy has which strength this week, titration diary across substitutions, BtM/CD prescription rules, shared-care paperwork. This is unglamorous, non-clinical, and not served by the therapy apps.

**(c)** Payers: patients (subscription €5–10/month), private ADHD clinics (retention/adherence), pharmacies.

**(d)** Building: shortage-tracker blogs and Reddit; some UK apps (Roarganise) are content-led [C]. **Gap: pan-European stock-availability crowdsourcing + titration/side-effect diary + shared-care document generator, DE/NL/UK.**

**(e)** Feasibility high; no MDR if no dosing advice; sensitive data (mental health + controlled substances) → careful GDPR. Note the contrast with AI-companion mental-health apps: EU AI Act + MDR make those a bad bet for a tiny team [I].

---

### F11. [B] Aging Europe: the reimbursed "boxes" and codes exist, but a software-only tiny team can only touch a few of them

**(a)** [B — not verified this session] Germany: >5.7M Pflegebedürftige (Destatis, end-2023) with Pflegegrad; **Pflegehilfsmittel zum Verbrauch €42/month** (raised from €40 in Jan 2025) for consumables (gloves, bed pads, disinfectant) — served by "Pflegebox" subscription firms; **Hausnotruf** (emergency call) reimbursed ~€25.50/month; **Entlastungsbetrag €131/month**; DiPA (digital care applications, §40a SGB XI) capped at ~€50/month with the first DiPA listings only appearing 2025. NL: WMO municipal provision; FR: APA. Eldercare labour shortage: hundreds of thousands of unfilled care posts across DE/FR/NL by 2030.

**(b) Implication.** [I] The €42 box is a commoditised, margin-thin logistics business (dozens of providers). Hausnotruf reimbursement is captured by Johanniter/Malteser/DRK and a few startups. DiPA follows DiGA's logic (evidence, BfArM) → not tiny-team-friendly. What *is* tiny-team-friendly: (1) the **Pflegegrad application & MD-assessment preparation assistant** for adult children (paid B2C — families lose thousands of euros by under-scoring); (2) **informal caregiver body maintenance** (back/lifting strength programmes for the 4–5M German informal caregivers, monetisable via §20 courses, F7, or employer EAP).

**(e)** Regulatory: minimal. Hardware fall-detection radar is not feasible at <€100k.

---

### F12. [B] Pharmacies: shrinking network + eRezept + chronic shortages = a navigation problem for patients

**(a)** [B] Germany: pharmacy count fell to ~17,000 in 2024 and kept falling (~1 net closure/day); the Apothekenreform (2025–26) allows "pharmacies without pharmacist on-site" in some forms and telepharmacy; eRezept mandatory since Jan 2024 with CardLink for online pharmacies. France: ~20,000 pharmacies, net closures ~200–300/year; ordonnance numérique rolling out. EU: BfArM lists several hundred supply shortages; EU Critical Medicines Act proposed March 2025.

**(b) Implication.** [I] With eRezept, the patient chooses the pharmacy *after* the prescription exists. Nobody tells them which pharmacy actually has the product (ADHD stimulants, antibiotics for kids, GLP-1 strengths). Combine with F10: a **"where is my medicine in stock" consumer layer** built on crowdsourcing + pharmacy self-reporting. Existing: Shop Apotheke/DocMorris (own stock), "ia.de" pharmacy finder (no live stock) [B].

**(e)** Feasibility medium; cold-start problem; pharmacies are data-shy. Best done for one drug class with a desperate community (ADHD) first.

---

### F13. [B] Hospital/clinic ops: ambient scribes are being closed as a gap; MDR/IVDR keeps squeezing small software vendors

**(a)** [B] Doctolib launched an AI consultation assistant across FR/DE (2024–25); Nabla, Corti, Heidi, Tandem, Noa and several German startups compete; big EHR vendors (CGM, Medatixx) integrate. MDR software burden: notified-body costs and timelines push small vendors out; MDCG guidance keeps expanding; NIS2 applies to hospitals from Oct 2024 transposition onward (Germany's NIS2UmsuCG in force 2025).

**(b) Implication.** [I] Ambient scribing in the big three languages is *no longer a gap for a tiny team*; it is a distribution war among funded players and incumbents. Physiotherapy shortage + remote physio: Physitrack/Kaia/Vivira/Exakt occupy it [B]. Dental: consolidated by DSO chains; software served by CGM/Dampsoft [B]. **Avoid.**

---

### F14. [B] Fitness/sports science: strength boom, HYROX, padel — real, but the software layer is crowded; the sport-specific medical edge is not

**(a)** [B] HYROX passed ~650k participants in the 2024/25 season with 1M+ targeted for 2025/26; thousands of affiliated gyms. Padel: Spain ~16k courts, Italy ~10k, Germany crossed ~1,000 with waiting lists in cities; Playtomic dominates booking. Wearable APIs: Garmin Health API (free but business-approval), Oura API v2 (open), WHOOP developer API (v2 migration 2025), Polar AccessLink — all workable for a PWA via OAuth.

**(b) Implication.** [I] Programming apps for HYROX and padel are already crowded (Roxfit-style apps, Playtomic). The non-obvious adjacents: (1) **padel injury** (elbow/eye/Achilles) prehab for the 45+ newcomer cohort; (2) **GLP-1 members inside HYROX/strength gyms** — operators need a retention programme for members whose energy and appetite collapse (F2), and they already buy member-facing content. On-device pose estimation for form-check works today (MediaPipe/MoveNet) but has become a commodity feature, not a product [I].

---

### F15. [B] Food/nutrition & substances: second-order GLP-1 demand shifts and regulatory bans

**(a)** [B] GLP-1 users cut alcohol and ultra-processed snack intake (observed in US consumer data; European data emerging); alcohol-free beer/spirits growth continues; protein-fortified SKUs proliferate in DE/UK supermarkets. Nicotine pouches: banned in NL and BE, France adopted a ban in 2025/26 (check), Germany treats them as unauthorised food; EU tobacco-directive revision pending. Precision fermentation/cultivated meat: EU Novel Food approvals remain slow; Italy banned cultivated meat (2023); NL allows tastings.

**(b) Implication.** [I] Consumer-goods plays need capital and shelf access; avoid. Only software-adjacent angle: **protein-floor planning for suppressed-appetite users** (F2) with grocery-level product lists per country — a feature inside the GLP-1 programme, not a standalone product.

---

### F16. [B] Bio/tools and veterinary: interesting shifts, weak fit

**(a)** [B] Casgevy (CRISPR) approved EU Feb 2024 with slow reimbursement; AlphaFold 3 / ESM3 broadly available; DNA synthesis screening frameworks tightening (US-led); small-lab ELN/sample tracking has open-source (eLabFTW) and funded players (Benchling, Labguru). Veterinary: vet shortage across UK/DE/NL; pet insurance penetration rising; no pet GLP-1 approved (OKV-119 in development); consolidation of clinics by IVC/AniCura.

**(b) Implication.** [I] None of this is reachable for a non-bio solo founder in 6–9 months with a differentiated wedge; ELN is crowded; biosecurity screening needs institutional trust. **Avoid.**

---

## Part 2 — Top 6 non-obvious opportunities from this track

**1. "Le Cap 4 mois" — the French GLP-1 reimbursement checkpoint companion (FR first, then EU).** From 15 June 2026 French patients keep 65% reimbursement only if they document ≥5% weight loss at month 4, initiated by a scarce specialist and renewed by any doctor (F1). This is Europe's first hard, dated, money-linked adherence deadline for obesity care. Build a French-language companion that does three things: a countdown with weekly weigh-in trend vs. the 5% line, a nausea-aware 2×/week strength + protein-floor plan to protect lean mass (F2), and a one-page "bilan à 4 mois" the patient hands to the renewing GP. Sell B2C (€9–19/month) and offer it free to the ~hundreds of initiating endocrinology/obesity centres so they can discharge patients to GPs with confidence. Non-device wellness scope; GDPR Art. 9 consent. From October 2026 a second cohort appears automatically: those who *failed* the checkpoint and lost reimbursement — your off-ramp product (#3) catches them. [C for the rules; I for the product]

**2. Muscle-preservation programme as the "wraparound care" evidence layer for UK GLP-1 prescribers.** GPhC's 2025 guidance and 2026 enforcement (F3) plus the NHS tirzepatide LES (F1) require prescribers to show ongoing, meaningful support — and the ENDO 2026 finding that patients *reduce* activity (F2) makes generic "move more" advice indefensible. Offer GP practices on the LES and the long tail of GPhC-registered online pharmacies a white-labelled, patient-facing programme with objective proxies (chair-stand test, grip, waist, protein log) that auto-generates the support record they need at inspection. Price per active patient per month (£2–5); a practice with 300 tirzepatide patients pays more than a consumer would, with zero CAC. Your PWA is already 60% of this. Risk: stay out of dose decisions (MDR); win credibility with one practice pilot and a sports-science co-author.

**3. "Absetzen ohne Jojo" — the German GLP-1 off-ramp, timed to the September 2026 oral Wegovy launch.** Germany is the largest cash-pay GLP-1 market in Europe with zero GKV coverage and a pill at €170–280/month (F1). Rational self-payers plan to stop; nobody sells the stopping protocol (F4). Build a 16-week taper-and-maintain programme (strength ramp *before* last dose, protein floor, hunger-return coaching, regain triggers, when to restart low-dose) and certify it as a §20 SGB V prevention course via ZPP so Krankenkassen refund most of the €100–150 fee even though they refuse to pay for the drug (F7, [B] — verify ZPP criteria first). This is the cheapest reimbursement path in German healthcare and it is invisible to the DiGA-obsessed digital-health crowd.

**4. Adult-ADHD medication logistics companion (UK → NL → DE).** Adult ADHD medication use is surging across Europe, led by women (Oxford 2026), while lisdexamfetamine/methylphenidate MR supply has been unreliable since late 2023 and newly diagnosed patients are the last served (F10). The pain is logistical, not therapeutic: which pharmacy has which strength this week, titration continuity across brand substitutions, controlled-drug prescription rules, shared-care paperwork. Build crowdsourced live stock by pharmacy + strength, a titration/side-effect diary that survives substitutions, and a shared-care document generator; monetise via patient subscription and private ADHD clinics who lose patients to supply chaos. No MDR exposure if you avoid dosing advice; treat data as highly sensitive. Cold-start is solved by a desperate, online, organised community.

**5. Provider-independent "results vault" for the scan-and-panel generation (UK/DE/NL).** Neko's $700M round (F9) and the DTC/CGM/DEXA sprawl produce PDFs that die in vendor apps, while Germany's ePA adds structured lab results in 2026 and EHDS guarantees portable access from 2029 (F8). Build the consumer ledger: import any lab PDF/CSV, Neko/DEXA reports, wearable trends (Garmin/Oura/WHOOP APIs), and body-composition/strength data; show trends against reference ranges; export a one-page GP-ready summary. Explicitly *not* diagnostic (MDCG 2019-11 storage/display exemption; no risk scores) — that keeps you out of MDR class IIa. In Germany the model must be "bring your own results" because true DTC ordering is restricted (physician-of-record, GenDG). Wedge: 40–60-year-old self-payers already spending €300–2,000/yr; later, small employers' "physical for the 40+" bundles via partner labs/clinics.

**6. GLP-1 member-retention programme sold to strength/functional gyms (DE/UK/NL operators).** Gyms are the second victim of the ENDO 2026 finding: members on GLP-1 lose appetite, energy and motivation and quietly churn (F2, F14). Operators (Basic-Fit, RSG/McFit, PureGym, HYROX-affiliated boxes) already buy member-facing content and are actively looking for a "GLP-1 answer" ([I]). Package the muscle-preservation protocol as a branded 12-week in-gym + app programme with a body-composition/strength progress card (InBody or phone-based), and sell it per-club. This reuses the same core as #1–#3 with a B2B2C distribution the founder already understands from the fitness side. Not regulated; the risk is sales cycle length with large chains — start with independent strength gyms and HYROX affiliates.

**Shared architecture [I]:** #1, #2, #3, #6 are one product (nausea-aware strength + protein-floor engine + objective proxies + exportable summaries) with four go-to-markets; the founder can validate in Germany (cash-pay, no gatekeeper) and France (dated checkpoint) in parallel within 6–9 months and under €100k.

---

## Part 3 — Crowded / avoid

- **GLP-1 telehealth prescribing itself** (UK: Voy, Juniper, Numan, CheqUp, Manual, Zava, Oviva/Second Nature on NHS; DE: Zava, Fernarzt, DoktorABC) — capital-heavy, GPhC crackdown, Novo/Lilly going direct. [C/B]
- **DiGA as a tiny team** — net delistings, 9 insolvencies, −59% price cuts, AbEM from July 2026. [C]
- **AI mental-health companions / AI therapy** — EU AI Act + MDR + therapist-body pushback; only funded, clinically staffed teams should try. [B/I]
- **Ambient scribes in DE/FR/NL** — Doctolib, Nabla, Corti, Heidi, EHR incumbents; gap effectively closed for newcomers. [B]
- **CGM for athletes/non-diabetics** — EU OTC rollout slow, Libre 3 grey-market, prior startups failed; low willingness to pay after the novelty week. [C/B]
- **Full-body MRI / longevity clinics** — Neko has $700M; physical footprint; not a software play. [C]
- **At-home blood-test brands in Germany** — legal constraints (physician-of-record, GenDG, IVDR), incumbents (Cerascreen, Lykon), thin margins. [C/B]
- **Pflegebox (€42 consumables) and Hausnotruf** — commoditised logistics captured by welfare organisations and dozens of box firms. [B]
- **Remote physio platforms, dental software, hospital cybersecurity for NIS2** — occupied or enterprise-sales-bound. [B]
- **Pet GLP-1, precision-fermentation, protein snacks, alcohol-free brands, nicotine pouches** — CPG/regulatory capital games. [B]
- **Generic padel/HYROX training apps and form-check apps** — pose estimation is a commodity feature; booking is Playtomic's. [B/I]

## Open items to verify before committing (could not be fetched this session)

1. Exact ZPP/§20 criteria for online courses and whether a "post-medication maintenance" framing qualifies as prevention (F7).
2. Current numbers for Pflegehilfsmittel (€42), DiPA listings and caps (F11).
3. French HAS/ANSM wording on the 4-month evaluation (what must be documented, who signs) (F1).
4. NHS tirzepatide LES "wraparound care" spec details and whether digital programmes are explicitly acceptable (F1/F3).
5. Garmin/Oura/WHOOP API commercial terms as of 2026 (F14).
6. German pharmacy count 2025/26 and Apothekenreform status (F12).
