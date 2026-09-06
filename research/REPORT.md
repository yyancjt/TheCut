# Second-Order Europe

**Buildable opportunities created by 2023–2026 technology, regulation and behaviour shifts in Western Europe, ranked and fact-checked for a small founding team.**

*Research completed 6 September 2026. Eight research tracks, one verification pass, roughly 800 web searches in total. All raw track reports are in `research/raw/`; the brief is `research/00-brief.md`.*

---

## 1. The ask, refined

The original request was: not another generic B2B SaaS or "AI workflow" tool. The last few years produced a lot of new technology, so there must be new services in demand that nobody is building. Find them, including the non-obvious second-order ones, with a Western European lens, and judge feasibility.

The refined brief that drove the research:

> Produce a ranked shortlist of concrete, buildable opportunities that exist *because* of a technology, regulatory or behavioural shift from 2023–2026, where (1) the opportunity is a product or service for a real buyer, not "AI agent for X"; (2) the enabling shift is recent enough that incumbents have not closed the gap; (3) a small technical team (1–3 people, under €100k, 6–9 months to v1) can ship a credible first version; and (4) Western Europe (DE, FR, NL, BE, UK, Nordics, ES, IT, CH, AT) is a plausible first market, ideally with an EU-specific advantage that US startups will not chase first.

Assumed founder profile, stated so it can be revisited: solo or tiny team, strong software skills, willing to learn hardware integration or run an operations-heavy business, limited capital, currently building a fitness/training PWA. "Generic" means horizontal AI copilots, workflow automation, CRM/PM tooling, prompt tools, AI SDRs, chat-with-your-docs.

## 2. How this was produced, and how much to trust it

Eight tracks were researched in parallel, each answering the same five questions per finding: what changed and when (with sources), what it implies that is not obvious, who is newly in pain or newly able to pay, who is already building it and where exactly the gap is, and feasibility for the founder profile.

| Track | Scope | Searches | Raw file |
|---|---|---|---|
| T1 | Frontier AI capability shifts and their second-order consequences | 46 | `raw/T1-frontier-ai.md` |
| T2 | EU and national regulation creating mandatory demand 2025–2028 | 55 | `raw/T2-eu-regulation.md` |
| T3 | Energy, grid, batteries, heat, EVs, home and SME electrification | 36 | `raw/T3-energy.md` |
| T4 | Hardware and the physical world: robots, drones, sensors, glasses, space, dual-use | 36 | `raw/T4-hardware.md` |
| T5 | Health, GLP-1, diagnostics, digital-health regulation | 16 + 156 deepening | `raw/T5-health.md`, `raw/T5b-T6b-deepening.md` |
| T6 | Money, identity, payments, stablecoins, e-invoicing | 8 (shared deepening) | `raw/T6-money-identity.md`, `raw/T5b-T6b-deepening.md` |
| T7 | Software substrate and protocol shifts | 167 | `raw/T7-software-substrate.md` |
| T8 | Behavioural, demographic, labour and geopolitical shifts | 147 | `raw/T8-behavioural.md` |
| V1 | Verification of 35 load-bearing claims from T1–T4 | 148 | `raw/V1-verification.md` |

Two honest caveats. First, the research environment could search the web but could not open most pages, so evidence rests on search-result excerpts of the cited sources rather than the full documents. Second, tracks T5 and T6 were initially under-researched because of a shared search budget; a dedicated 156-search deepening pass was run afterwards, killed two of the original theses, restructured a third and added two new entries. Its corrections are folded into this report.

The verification passes matter for calibration. Of 35 load-bearing claims from the first four tracks checked against primary or specialist sources, 21 were confirmed, 12 were partly right, one was wrong (a date), and none was fabricated. The health and money deepening pass re-checked a further 18 topic areas and overturned more: two theses killed, one restructured. The corrections that changed rankings are listed in section 8. Everything in the shortlist below is stated with the corrected facts.

## 3. Six patterns that explain where the gaps are

Reading across all tracks, the non-obvious opportunities cluster around six mechanisms. Each is a lens you can keep applying after this report is out of date.

**1. Generation collapsed in price, so verification became the paid layer.** When code, images, voices, translations and transcripts are near-free, money moves to whoever attests, audits, certifies or insures the output. This shows up in software (attestation for vibe-coded apps), energy (independent heat-pump performance verification), mobility (e-bike battery health certificates), documents (procurement-legal PDF conformance) and identity (verified presence rather than deepfake detection).

**2. Dated EU obligations landed on populations with no tooling.** The 2026–2028 calendar is dense: e-invoicing receive duties, the Cyber Resilience Act reporting clock, Right to Repair, the Machinery Regulation, battery passports, the short-term-rental data regulation, EUDR, the German ODF/PDF-UA mandate. Enterprises have vendors. Micro-businesses, associations, landlords, small brands and small municipalities do not. US startups will not build for these because the pain is European legal exposure.

**3. Businesses are becoming the *object* of AI agents, not the operators.** Almost all money chases agents that act. Almost nothing serves the restaurant, physio, workshop or hotel that gets crawled, called and booked by agents. Google now books restaurants agentically worldwide, but only through certified scheduling providers; everyone else gets phoned by an AI and, if nobody answers, dropped.

**4. Physical bottlenecks, not software, gate the energy transition.** Smart meters (5.5% of German connections), grid connections (Dutch SMEs on waiting lists from 1 July 2026), mechanics, installers and notified bodies are the scarce inputs. The valuable products are the ones that end in an electrician's visit or a filed form, not another dashboard.

**5. The receive side is always neglected.** Every mandate is written for the party that issues. The first thing that breaks is receiving: payee names that fail Verification of Payee, Data Act requests nobody knows how to file, guardianship authority nobody knows how to prove. (The obvious case, e-invoices for people without accounting software, turned out to be served by free tools already, which is the exception that shows the rule needs checking each time.)

**6. Household-scale life events need orchestration, not apps.** Inheritance, care, business succession, moving between rent regimes, cross-border work. Demand is administrative and physical labour applied to messy household problems: someone who does the paperwork and books the vans. These are service businesses with a software spine, unfashionable and therefore open.

## 4. The shortlist

Scoring: demand evidence (0–5), why-now (0–5), feasibility for the founder profile (0–5), EU edge (0–5), non-obviousness (0–3), fit with a solo software founder who builds a fitness PWA (0–2). Maximum 27. Scores are a ranking aid, not a valuation; the full table is in section 9. Each entry states its evidence confidence: **high** means the dated facts were confirmed by the verification pass or by multiple independent sources, **medium** means confirmed in outline with some numbers unverified, **low** means the thesis is inferred from confirmed facts but the demand itself is untested.

### Tier 1 — dated demand, small-team feasible, structurally European

#### 1. Device-only documentation for the §203 professions (score 24)

**Thesis.** Build a dictation-and-documentation tool for German tax advisers, small law firms, notaries, court-appointed guardians, private-practice therapists and social-work case workers, in which no audio or text ever leaves the user's device. The moat is legal, not technical: §203 StGB requires any outside IT provider that touches professional secrets to be bound as a "mitwirkende Person", and a GDPR processing agreement is explicitly not enough. If inference runs on the device, there is no provider to bind. The compliance conversation collapses to "nothing left the machine".

**Why now.** WebGPU reached baseline across all four browser engines in January 2026. Chrome 148 (May 2026) exposes Gemini Nano to websites. Apple's Foundation Models framework became mainstream with iOS 26 and was opened to third-party models at WWDC 2026. NVIDIA's Parakeet 0.6B beats Whisper-large on the open ASR leaderboard at a quarter of the size, with German word error around 8% on plain CPU. A June 2026 review found only five tools with documented §203 undertakings; the alternative is a self-hosted LLM project at low-to-mid five figures plus four figures a month. Clinician scribes are closed (Doctolib, Jameda, Heidi, Voize at €50M), the §203 professions are not.

**Buyer and wedge.** Roughly 100,000 tax advisers plus small law firms, notaries, professional guardians and therapists in Germany, with equivalents in Austria and Switzerland. The buyer is a partner, not a CIO. Price €10–20 per user per month with ~90% gross margin because there is no per-query inference cost.

**v1.** A PWA or thin native app: on-device ASR, vertical templates (Aktennotiz, Mandantengespräch, Hilfeplan, Beratungsprotokoll), encrypted local storage, export to the practice software they already use, and a compliance pack in the box (technical-and-organisational-measures description, DPIA template, confidentiality declaration). Three to five months.

**Moat.** Templates, professional-body endorsement, the compliance pack. Not the model.

**Risks.** A good-enough free OS dictation feature. Mitigation: own the document and the template, not the transcription. Device performance on older hardware; ship a WASM fallback.

**Validate in two weeks.** Ten conversations with Steuerberater and Datenschutzbeauftragte; confirm that "device-only" ends the §203 discussion in their view; test Parakeet-class German recognition on typical office audio.

**Evidence confidence: high** on the platform shifts and the legal mechanism; medium on the size of the five-tool landscape.

#### 2. Procurement-legal documents: a PDF/UA and ODF conformance toolkit for German authorities, their suppliers, and shops facing accessibility enforcement (score 22)

**Thesis.** On 18 March 2026 the IT-Planungsrat made ODF and PDF/UA the only permitted formats for official administration documents at federal, state and municipal level, transitioning through 2027–2028. Only 9.5% of PDFs on German public-sector sites are actually accessible. The mandate propagates down the supply chain: every Mittelstand supplier, engineering office, law firm and agency that files documents with an authority becomes a customer, and that population is far larger than the authorities. In parallel the European Accessibility Act is enforced privately in Germany through two Abmahnung waves (from August 2025 and February 2026, €3,500–20,000 per notice), with the Länder market-surveillance body adding automated scanning from Q3 2026.

**Why now.** The format mandate is five months old. The German Right to Repair and Data Act moments are drawing municipal IT attention elsewhere. Schleswig-Holstein's migration shows the stubborn last 20% is Windows-locked line-of-business software. German municipalities have over 100,000 unfilled posts and two to three applicants per IT vacancy: political will is far ahead of delivery capacity.

**Buyer and wedge.** Authorities (deadline), suppliers (bid eligibility), web shops (Abmahnung exposure), practice-software vendors who must add ODF import and export. German direct-award threshold rose to €50,000 on 1 July 2026, which is the number that lets a micro-vendor sell to a municipality without a tender.

**v1.** Batch conformance checking on veraPDF-class tooling, automated tag remediation, an ODF conversion QA step, a VBA/Windows-only-application inventory scanner, and a signed "procurement-legal" report a supplier can attach to a bid. Plus an accessible-document rendering API for auto-generated invoices, tickets and statements. Three to four months.

**Moat.** The certificate and the workflow, not the parser; procurement consultancies and Kommunalverbände as channel.

**Risks.** Enterprise remediation vendors (axes4 and the PDF Association ecosystem) moving down-market; deadlines slipping by a year.

**Validate in two weeks.** Run the checker against 500 PDFs from five municipal sites and ten supplier portals; take the failure report to three procurement consultancies and ask what they would pay per bid.

**Evidence confidence: high** on the mandate and the enforcement facts (the Swedish "200 sites" number that circulated is wrong; it is 28 supervision cases).

#### 3. A muscle-preservation engine for GLP-1 patients, sold where the paperwork is (score 22)

**Thesis.** Western Europe now has four GLP-1 regimes, and in each the unmet job is evidence, not prescribing. Germany: statutory insurers exclude the drugs as "lifestyle" medicines, oral Wegovy has been on sale since 1 September 2026 at roughly €172–280 a month, and on 21 May 2026 the Landgericht Nürnberg-Fürth ruled that a private insurer need not reimburse Mounjaro where the patient produced no documented, structured therapy concept, while leaving the door open where the drug sits inside a physician-monitored multimodal programme with at least six months of documented nutrition and exercise therapy. England: the NHS side is closed (wraparound care was centrally commissioned in June 2025 and Oviva and Xyla deliver it), but about 2 million adults pay privately, seven times the NHS number, and on 16 April 2026 the pharmacy regulator published a review naming exactly what inspectors found missing across 1,307 concerns: consultation documentation, independent BMI verification, third-party assurance, clinical follow-up. France: reimbursement since 15 June 2026 requires six months of documented failed nutritional care to start and at least 5% weight loss at month four to continue, initiated only through 42 specialised obesity centres and university hospitals. The Netherlands: the drugs are not reimbursed at all, but a two-year lifestyle programme (GLI) is fully funded and digital versions have been allowed since 2024. Underneath all four: 20–30% of GLP-1 weight loss is lean mass (up to 45% in one semaglutide sub-study), and the ENDO 2026 wearable study showed patients' daily steps and vigorous activity *fell* after starting the drug. Build one nausea-aware, low-volume strength and protein-floor programme with objective proxies and exportable records, and sell the records.

**Why now.** The German judgment is four months old and sets an evidence standard nobody packages; the oral pill removed the needle objection two weeks ago; the UK regulator's list of missing evidence is five months old; the first French patients to fail the month-four checkpoint appear from October 2026.

**Buyer and wedge.** Route one, Germany: privately insured patients (8.79 million people have full private cover; over 4 million German households use or are considering GLP-1) about to claim €2,400–4,800 a year, paying €15–25 a month for a structured six-month log with professional sign-off and an insurer-ready file. Then the same programme as a live-streamed §20 prevention course for the post-loss cohort under BMI 30, which insurers refund (€75–150 a course) even though they refuse to pay for the drug, and which also unlocks the €600 per employee per year tax-free employer health budget. Route two, UK private channel: pharmacies and telehealth brands paying £2–5 per active patient per month for a white-labelled programme whose by-product is the inspection record. Route three, gyms: no European chain has a GLP-1 programme (the content market is entirely American); sell a branded twelve-week retention block to strength gyms and HYROX affiliates, where Germany's 12.4 million members and rising willingness to pay for coaching are documented. Route four, France, is crowded (Annette raised €2M for a checkpoint companion; Charles and GLP1Suivi exist): enter only as a lean-mass-KPI layer partnered with an obesity centre.

**v1.** The founder's existing training PWA re-sequenced: protein-first tracking, two 20-minute sessions a week, nausea-day scheduling, chair-stand and grip proxies, a six-month German evidence file with a nutritionist's sign-off field, a per-patient support record for UK providers, a gym progress card. Strictly non-diagnostic and non-dosing, which keeps it outside the Medical Device Regulation under the 2025 revision of the software guidance.

**Moat.** Clinical credibility (one endocrinology or sports-science partner, a small before/after cohort), the evidence artefacts themselves, distribution through insurers' claims process, pharmacies and gyms rather than app stores.

**Risks.** A first-instance judgment that may be appealed; the §20 online route triggers an ISO 27001 requirement unless delivered as a live-streamed course; Novo and Lilly bundling coaching; you must not give legal advice.

**Validate in two weeks.** Ask three German private-insurance brokers what claims for Mounjaro currently look like; read the two GKV prevention-guide PDFs to settle the live-stream versus app question; call five UK online pharmacies and ask what they show a GPhC inspector today.

**Evidence confidence: high** on the four regimes, the judgment, the regulator's report and the activity data; **medium** on the exact §20 eligibility wording.

#### 4. Micro-host compliance for the EU short-term-rental regime, with a mirror product for small municipalities (score 22)

**Thesis.** From 20 May 2026, Regulation (EU) 2024/1028 turns every short-term-rental host into a reporting entity: standardised registration, platform verification and display of registration numbers, monthly per-listing data to national entry points. City rules harden underneath it: Amsterdam cut caps to 15 nights a year in eight central neighbourhoods from April 2026 with fines to €87,000; Paris issued nearly €1M of fines in Q1 2026; Barcelona will not renew any tourist-flat licence after November 2028. Germany abolished the hotel registration form for German nationals on 1 January 2025 but municipalities levying visitor tax still need guest data, now under fragmented state law. Compliance software is sold to cities (Granicus, Deckard) or professional managers (Chekin, Minut). The one-to-three-listing host, most of Europe's supply by count, has no path, and neither does the small tourist municipality that must stand up a register.

**Why now.** The regulation applied four months ago; national entry points and city enforcement are ramping through 2026–2027.

**Buyer and wedge.** Micro-hosts at €99 a year (trivial against the fines) and small municipalities needing a registration, visitor-tax and statistics pipe they cannot buy from enterprise vendors.

**v1.** A per-municipality rules engine, registration-number acquisition, night-count tracking against caps, guest-data capture that satisfies both visitor tax and the surviving foreign-guest duty, and submission handling where the host is the obliged party. The rules database is the product; the code is trivial.

**Moat.** Rules change per municipality per year in six languages; whoever maintains the database compounds.

**Risks.** Platform absorption: Airbnb could ship host compliance free. Mitigation: sell the register to the municipality too, which platforms will not do.

**Validate in two weeks.** Pick two countries; map the entry-point specs and ten cities' rules; interview 15 micro-hosts and three small tourist-office directors.

**Evidence confidence: high** on the regulation and city rules; medium on host willingness to pay.

#### 5. The first digital care application through Germany's new provisional-listing route (score 22)

**Thesis.** Germany created a reimbursement category for digital care applications (DiPA) in 2021 and its register has been empty ever since, because the old rules demanded full evidence before filing. That changed on 1 July 2026: the amended ordinance allows provisional listing for up to a year on a plausible expected care benefit plus an evaluation concept from an independent institution, the application portal opened the same day, and the federal institute published a revised guideline on 15 July 2026. Reimbursement is €40 a month plus up to €30 for accompanying support, and a DiPA need not be a medical device. Germany has 5.7 million people with a care grade, heading for 6.2 million by 2030, mostly at home. The natural first product, adjacent to a fitness founder's competence and unserved by the alarm-button and consumables incumbents: strength, balance and fall prevention for people with care grades 1–2 living at home, plus a back-and-lifting programme for the family members who care for them.

**Why now.** The register is empty and the route is nine weeks old. Being first in an empty register is worth more than the €40.

**Buyer and wedge.** Care-dependent people and their families (the €40–70 is paid by the care insurer), care services that want a digital offer, and later the informal-carer programme sold through employers. Adjacent reimbursed lines a software-plus-hardware product can touch: the €42 monthly consumables allowance, the €27 emergency-call subsidy, the €4,180 home-adaptation grant that now covers assistance systems.

**v1.** The training PWA adapted for chair-based and standing balance work, fall-risk proxies (chair-stand, timed up-and-go), a carer track, and the evaluation concept co-authored with a university sports-science or nursing department. Four to six months, most of it the partnership and the filing.

**Moat.** First listing, the evaluation partnership, and the care-service channel.

**Risks.** The evaluation institution is a real dependency; the 2027 care reform could move the amounts; the exact reimbursement split needs confirming against the ordinance.

**Validate in two weeks.** Read the ordinance and the July guideline; call two nursing-science departments about co-authoring an evaluation concept; ask three home-care services whether they would recommend a fall-prevention app that the insurer pays for.

**Evidence confidence: high** on the legal change and dates; **medium** on the reimbursement split (sources conflict between €40 plus €30 and "up to €50").

#### 6. A Cyber Resilience Act vulnerability-handling and ENISA filing desk for micro hardware makers and importers (score 21)

**Thesis.** From 11 September 2026 every manufacturer of a product with digital elements sold in the EU must be able to file a 24-hour early warning and a 72-hour notification of actively exploited vulnerabilities through ENISA's single reporting platform. Ten days before that date the platform had no published URL, will have no API at launch, and the report format is set by an implementing act that had not been published. There are zero notified bodies in NANDO and no harmonised standards cited, so everyone self-assesses against a moving target. Importers and distributors must verify manufacturer documentation with no SME exemption. This is exactly the state in which small manufacturers pay someone else to hold the pen. Sell a monitored security inbox, CVE triage, the 24/72-hour filing, a published advisory page and a buyer-side document-verification check for distributors, per SKU per year.

**Why now.** The reporting duty is live this month; full essential requirements and CE marking follow on 11 December 2027; the standards vacuum lasts at least until end-2026.

**Buyer and wedge.** Kickstarter and Tindie hardware brands, e-bike display and smart-home accessory importers, small firmware makers, Asian OEMs selling into the EU, and the much larger population of distributors who must verify SBOM presence. The Commission's impact assessment counted roughly 615,000 manufacturers or products in scope; treat it as an order of magnitude.

**v1.** Legal-entity plus one partner lawyer for the mandate template; a monitored security@ inbox; ENISA filing workflow; an advisory page generator; a distributor upload-and-gap-report tool. Two people can run it.

**Moat.** Requires EU presence, language and an appetite for liability that US vendors will not take on; references compound.

**Risks.** The verification pass corrected the original framing: an EU authorised representative under the CRA is optional (Article 18 says "may"), so it cannot be sold as mandatory and cannot absorb the manufacturer's core duties. Sell convenience and risk reduction, not compulsion.

**Validate in two weeks.** Message 30 small hardware brands selling into the EU; ask whether they know about 11 September; offer a paid readiness check.

**Evidence confidence: high** (the most useful single finding of the verification pass).

#### 7. A "cell compliance pack" for cobot integrators before the Machinery Regulation bites (score 21)

**Thesis.** Regulation (EU) 2023/1230 applies in full from 20 January 2027, and that date did not slip when the AI Act's high-risk duties were postponed. Annex I Part A lists, as mandatory notified-body categories, safety components with self-evolving machine-learning behaviour and machinery embedding them. Anyone who bolts a cobot, a gripper and a vision model into a cell for a bakery becomes the manufacturer of a new machine and must produce the technical file, risk assessment, cyber documentation and CE declaration. Europe has the world's densest cobot ecosystem and the smallest integrators. Standards citations under the new regulation are expected only at the end of 2026, weeks before application, and notified-body capacity is scarce.

**Why now.** Sixteen weeks to the application date; the AI Omnibus divergence (Machinery in January 2027, AI Act Annex I in August 2028) is a saleable insight few advisers have right.

**Buyer and wedge.** Thousands of small integrators and food, packaging and metal SMEs in DACH, Benelux, the Nordics and Italy. €2–5k per cell.

**v1.** Templated risk assessment, digital-instructions generator, cyber checklist, a pre-assessment for the machine-learning clause, and a referral network of notified bodies. No hardware. Six months is enough to ship before the wave.

**Moat.** Early domain templates and distributor relationships; not code.

**Risks.** Test houses (TÜV, Nemko) productising down-market; the founder needs to genuinely read ISO 10218 and 12100.

**Validate in two weeks.** Call ten cobot distributors and ask what their integrators are doing about January 2027.

**Evidence confidence: high.**

#### 8. The Dutch energy-hub back-office for business parks (score 21)

**Thesis.** From 1 July 2026 small-consumer connection requests in congested Dutch regions, including SMEs, join the same waiting list as large users; around Eindhoven and Utrecht everything waits, and grid operators expect expansions around 2035. From 1 January 2027 every Dutch grid operator must offer the group transport agreement, under which 5–30 neighbouring companies share one capacity envelope measured at the substation. The grid operator does not care how the members split it. Someone has to run the internal allocation every 15 minutes, forecast, enforce caps and settle between neighbours: a new, recurring, non-optional job on every one of roughly 3,500 Dutch business parks.

**Why now.** The first group agreement in Noord-Brabant was signed 9 July 2026; the mandatory-to-offer date is four months away; the legal template and toolkit are public.

**Buyer and wedge.** SMEs that cannot expand, electrify vans or add heat pumps without a hub, paying a few hundred euros per member per month; park-management associations as the channel. Later, flexibility revenue through GOPACS.

**v1.** Allocation-and-settlement engine on P1 and telemetry data (the Dutch smart meter's P1 port gives free real-time data with no contract), forecasting, cap alerts, monthly settlement statements. Two people, six months. Needs a Dutch-speaking partner.

**Moat.** Being operator of record for the first 20 hubs before enterprise players (Spectral, Firan, Withthegrid) notice the SME tier.

**Risks.** Willingness to pay per member is unproven; grid operators could bundle a basic tool.

**Validate in two weeks.** Call five park associations in Brabant and Utrecht; ask who runs their allocation today.

**Evidence confidence: high** (all dates and mechanics confirmed).

#### 9. Post-net-metering retrofit control for legacy Dutch rooftops (score 21)

**Thesis.** Net metering ends for all Dutch rooftop owners on 1 January 2027, replaced by a minimum feed-in compensation and supplier feed-in charges, in a country that logged 584 negative-price hours in 2025, the most in Europe. Millions of inverters installed 2015–2022 cannot stop exporting when the price is at or below zero, cannot shift load to midday, and cannot see 15-minute prices. Independent analyses say a €6,000 home battery pays back only for a minority, which creates demand for a cheaper fix. Sell a €100–200 controller installed by local electricians that reads the P1 port, controls the inverter over Modbus or a relay, follows day-ahead prices, shifts boiler, heat-pump and EV load to midday, and gives an honest "should you buy a battery" verdict.

**Why now.** One national date creates a nationwide sales trigger, and the P1 port removes any dependency on grid-operator data contracts.

**Buyer and wedge.** Every Dutch prosumer whose bill rises in 2027, roughly 2.5–3 million rooftops; the installer trade as channel.

**v1.** P1 plus inverter Modbus/SunSpec plus EPEX prices; a two-person build; the service layer is the moat.

**Moat.** Brand-agnostic positioning and the installer channel; suppliers' own apps optimise only their own hardware.

**Risks.** Suppliers bundling control for free; hardware support costs.

**Validate in two weeks.** Survey 100 owners of 2015–2020 systems on their 2027 expectations; bench-test control on the five most common legacy inverter brands.

**Evidence confidence: high.**

### Tier 2 — strong theses with one open question each

**10. A Data Act "data agent" for wearables and connected health devices (score 21).** Since 12 September 2025 every user of a connected product in the EU has a statutory right to the raw and pre-processed data their device generates, free, in a machine-readable format, and under Article 5 can direct the maker to hand it to a third party of the user's choosing on fair terms; from 12 September 2026 new products must be designed so that access works by default. Wearables, smartwatches and fitness trackers are named explicitly. That turns wearable integration from a commercial negotiation (Garmin's reported one-time production fee, WHOOP and Oura membership gates, Polar's 90-day history cap) into an entitlement the user exercises, and Garmin already publishes a Data Act page. Build the thing that helps a European consumer exercise the right across devices and makes the result useful: a longitudinal strength, body-composition and activity record that survives switching from Garmin to Oura to WHOOP, with lab PDFs alongside and a one-page export for the GP. Non-diagnostic storage and display stays outside the Medical Device Regulation. *Open question:* enforcement is embryonic (only the Netherlands and Malta had complete authorities in place), no public case of a wearable vendor honouring a designation was found, and the "reasonable compensation" a maker may charge the recipient could break consumer pricing. Start with vendors already publishing Data Act pages. Confidence: high on the law, low on the practice.

**11. Frontalier telework day-counter with employer reporting (score 21).** The France–Switzerland agreement's main provisions apply from 1 January 2026: 40% teleworking is permitted without triggering French taxation, with new annual employer reporting from 2026 and automatic exchange from 2027. Luxembourg's thresholds sit at 34 days a year for French, German and Belgian commuters; the EU/EFTA framework allows up to 49.9% cross-border telework without changing social-security affiliation. That turns a behavioural choice (which days you work from home) into a tax and social-security calculation with employer reporting for around 400,000 Swiss cross-border workers alone, none of whom have an adviser. A per-corridor day-counter at €5–10 a month, sold to employees against a five-figure reassessment risk and to employers with a statutory reporting duty. Small, copyable, but very cheap to build and immediately sellable. *Open question:* market size beyond the FR–CH and LU corridors. Confidence: high on rules, medium on willingness to pay.

**12. Payee-side name hygiene for Verification of Payee, plus the November 2026 format cut-over (score 20).** Since 9 October 2025 every euro-area transfer is name-checked before it is sent, and the first published statistics (STET, one month after go-live) showed only about 80% of 180 million transactions returning a match or close match, so roughly one in five is flagged. The friction lands on recipients whose invoice name differs from the bank's account-holder string ("Bäckerei Müller" versus "Hans Müller e.K."), on associations and sole traders whose account is in a person's name, and on accounts-payable teams with old vendor masters. No payee-side tool surfaced in the deepening pass: nothing tells a small business what name to print on invoices and payment QR codes so it matches at each sending bank. A second, dated problem lands on the same buyers: from 15 November 2026 banks reject payment files with unstructured addresses and retire the old pain.001.001.03 format, and Swift reports 65% of messages still non-compliant. Product: a name-resolution check and canonical-name recommendation embedded in invoicing tools, a batch creditor-list cleanse for accountants via a partner verification provider, and an address-structuring pass for payment files. No payment licence needed, because no money moves through you. *Open question:* banks may converge on lenient matching, and Swift's free open-source address model caps what the address half can charge; position as invoice and collection UX, not as VoP plumbing. The original e-invoice inbox half of this idea was killed by verification: free, approved receive platforms already exist in France, Belgium and Germany. Confidence: high on facts, medium on willingness to pay.

**13. Repair-network-as-a-service for small brands under the Right to Repair Directive (score 20).** Since 31 July 2026 brands in the covered categories, which include goods with light-means-of-transport batteries (e-bikes, e-scooters), must repair on request at a reasonable price and time, issue the European Repair Information Form (binding for 30 days), and extend the guarantee by 12 months after repair. Only four member states transposed on time; the EU repair platform's common interface arrives only 31 July 2027 and is fully operational 1 January 2028. Small brands have no repair network; independent repairers have no B2B pipeline. Sign 200 independent repairers in DE, NL and FR, let brands subscribe to satisfy the duty, own form generation and guarantee paperwork, take a fee per repair. France's repair bonus (1.9 million repairs) and Austria's voucher scheme (840,000+) prove consumer behaviour responds. *Open question:* whether small brands feel the duty before national enforcement exists. Confidence: high on law, medium on urgency.

**14. E-bike battery health certificate, passport operator and mobile diagnostics (score 20).** Leasing returns after two to four years are flooding the German and Dutch second-hand e-bike market and the battery is 30–40% of vehicle value. Shimano's State of the Nation 2026 (25,000 respondents) found 121 million Europeans cycle less because of repair barriers. The battery-safety standard EN 50604-1 became mandatory within EN 15194 on 15 May 2026, which splits pre- and post-May-2026 batteries. The EU battery passport is mandatory for e-bike and industrial batteries from 18 February 2027; the Commission missed its own August 2026 deadline for the access-rules act but the obligation stands, and Article 77(4) explicitly allows an outsourced passport operator. The Data Act lets a user designate you to receive drive-system data from Bosch or Shimano at cost. Define the certificate protocol, equip mobile technicians with BMS readers, sell €30–60 certificates to leasing firms, marketplaces and insurers, and offer micro-brands and pack assemblers a passport-and-label service per battery. *Open question:* whether Bosch and Shimano honour Data Act requests without a fight. Confidence: high on the regulation, medium on operations.

**15. Independent heat-pump performance verification and remote tuning (score 20).** With the German 65% heating rule repealed on 29 July 2026 and the Dutch hybrid mandate scrapped, heat pumps must win on operating cost, yet field data shows seasonal efficiency ranging from 2.6 to 4.9 for the same unit type depending on on-site settings, and installers are at capacity: Germany sold 195,000 units in the first half of 2026, up 40%. Offer a brand-agnostic efficiency audit (heat meter plus sub-meter or manufacturer API, weather and tariff normalisation, a report, a tuning visit by a partner engineer) to homeowners with high bills, to installers as callback reduction, and later to subsidy bodies. The same data stream makes the heat pump a dynamic-tariff asset. *Open question:* start in the UK (open-source monitoring culture, record grant applications in July 2026) or Germany (volume)? Confidence: high.

**16. Owner-facing attestation for vibe-coded and agent-built software (score 20).** AI coding tools created a new class of software owners without engineers: Escape scanned 5,600 publicly deployed vibe-coded apps and found over 2,000 high-impact vulnerabilities and 400 exposed secrets; a Lovable-hosted app exposed 18,000 users. The revised Product Liability Directive makes software a product with a rebuttable presumption of defect for anything placed on the market after 9 December 2026 (not August 2026, as one track originally stated). Sell a recurring, plain-language, EU-law-mapped scan plus a monthly signed attestation, a breach playbook and an abandoned-app takeover path, specialised on the Lovable/Supabase/Bolt stack; extend upward into broker-referred assurance reports for agent-delivered code, which European insurers are asking for and nobody productises at €2k. *Open question:* whether owners pay before the first publicised liability case. Confidence: high on the facts, low-medium on demand timing.

**17. Scheduling provider of record for one underserved vertical (score 20).** Google now books restaurants agentically in 200+ countries and announced local-services booking (home repair, beauty, pet care) at I/O 2026, but only through certified scheduling providers meeting Actions Center requirements: multi-business, real-time availability, sub-second response, online cancellation. The Universal Commerce Protocol still has no time-slot primitive. Businesses without a provider get phoned by an AI and, if nobody answers, dropped for the next business. Build the multi-tenant availability backend for a vertical Google's partner list does not cover and its policy excludes (regulated and medical categories are out of Reserve with Google): physiotherapists, expert assessors, driving schools, vehicle workshops, veterinarians, small hotels. Adapters into the practice software they already run, an MCP endpoint, deposit and no-show policy, agent verification via Web Bot Auth. White-label to incumbent vertical software and through trade associations. *Open question:* Actions Center commercial terms, and whether Google extends a direct connectivity model for independents. Confidence: high on the shift, medium on the partnership path.

**18. Care-benefit recovery on a success fee (score 20).** Germany's Entlastungsbetrag rose to €131 a month from 1 January 2025 for every care-dependent person from care grade 1; unused amounts lapse on 30 June of the following year, and hundreds of millions lapse annually with take-up varying by state. The home-adaptation grant rose to €4,180 per measure and now covers assistance systems such as fall sensors. Establish entitlement, book an approved provider, file the claim, take 15–25% of recovery with no cash outlay by the family, then sell the adaptation grant to the same household and route the work to a tradesman. Not a care marketplace (crowded, thin) but a claims-and-spend business with a physical second act aimed at 5.7 million care-dependent people. *Open question:* the provider-approval rules differ by state and need one or two launch regions chosen carefully. Confidence: medium (lapse volumes come from secondary sources).

**19. The recognition-file factory, sold to employers (score 20).** Germany concluded about 86,600 foreign-qualification recognition procedures in 2025, but growth is decelerating and net migration fell 45%. Statutory clocks only start on document completeness. About 1.4 million Ukrainians are in Germany under temporary protection (now extended to March 2028) with over half working below their qualification, and since 1 January 2025 adults over 25 can have craft experience validated by a chamber, alongside a formalised partial-qualification framework adopted in December 2025. Agencies sell people; nobody sells the file. Source-country document acquisition, sworn-translation orchestration (a workforce of displaced translators exists, per T1), gap analysis against the German reference profile, route selection between recognition and validation, priced per completed file to the employer. Build to the fair-recruitment RAL standard from day one. *Open question:* whether employers or the candidates should pay. Confidence: high on the mechanisms, medium on unit economics.

**20. "AML in a box" for one newly obliged sector before 10 July 2027 (score 20).** The EU Anti-Money-Laundering Regulation applies from 10 July 2027 and brings traders in high-value goods above €10,000 (luxury vehicles, yachts, aircraft, jewellery, art), crowdfunding providers and intermediaries into obligations they currently meet with a Word template, with football clubs and agents following in 2029 and an EU-wide €10,000 cash cap. The new authority in Frankfurt took over all mandates in January 2026 and will directly supervise up to 40 entities from 2028. Tens of thousands of firms with 1–20 staff need a risk assessment, customer due diligence with register-native company and beneficial-ownership checks, sanctions screening via an open-data reseller, transaction records, reporting templates for the national financial-intelligence unit and a training log. The build is easier than first assumed: the register layer is commoditised (OpenRegister and Topograph for Germany, intermediaries bridging France's restricted register), and the sixth directive requires legitimate-interest, machine-readable ownership access from July 2026. Pick one sector in one or two countries; €50–200 a month; the 2026–27 sales window matches a six-to-nine-month build. *Open question:* per-country content depth is both the moat and the cost. Confidence: high.

### Tier 3 — real, narrower, or needing a specialist co-founder

**21. EUDR polygon hygiene for SME importers, plus farmer-side CAP pre-checks (score 19).** Deforestation due diligence applies 30 December 2026 for medium and large firms and 30 June 2027 for micro and small; 51% of importing operators qualify for simplified due diligence under the country benchmarking, which shrinks the pain but does not remove the filing. Satellite analysis is free (Sentinel); the unmet work is getting supplier polygons out of WhatsApp into a valid due-diligence statement for roasters, chocolatiers, timber and furniture importers at €200–500 a month. The same pipeline tells farmers in advance whether their parcels will trip the national CAP monitoring traffic light.

**22. German smart-meter and §14a activation service for SMEs and heat-pump homes (score 19).** Three laws route value through a smart meter that 94.5% of German connections lack; the regulator opened 77 enforcement proceedings against metering operators in March 2026, so supply will loosen through 2028. "Get me the meter, register the controllable-load module, switch me to a dynamic tariff, configure the heat pump and wallbox, prove the €110–190 grid-fee discount" is worth €300–500 per site plus commissions. Rollout is regional (Berlin 53%, national 5.5%), so sell where the operator is slow. A three-to-four-year window.

**23. Drone-spraying operations, France first (score 19).** France is operational now: law 2025-365, decree 2026-270 and a May 2026 order approving about 150 products for drone application on slopes over 20% and in trials elsewhere (the Duplomb law's drone article was struck down; do not cite it). The EU is dismantling its 2009 aerial-spraying ban via a delegated act with a 30-month window, with transitional national authorisations allowed now. Hardware is a Chinese commodity; the scarce asset is the licensed operator holding the EASA authorisation, the plant-protection certificates and clean spray logs, starting in steep-slope viticulture. Needs a licensed pilot or agronomist co-founder and €25–40k of equipment.

**24. Hosted, cited, agent-ready access to German registers and geodata (score 19).** Company registers have been a mandatory EU high-value dataset since June 2024, yet the German commercial register still has no public REST API, a 60-queries-per-hour limit, no bulk download and no SLA, while all 16 states opened cadastral and terrain geodata heterogeneously. France proved the demand shape with an official state MCP server exposing 74,000 datasets. The product is normalisation and provenance across states, versioned snapshots, every answer citing its source document, as REST and MCP, priced per professional seat (notaries, tax advisers, architects, estate agents, insolvency administrators). North Data and Creditreform prove willingness to pay and have not shipped agent endpoints.

**25. EU-only iPhone capabilities as a building-access wedge (score 19).** The Digital Markets Act created iPhone capabilities a European developer can ship and an American one cannot: host-card-emulation NFC in your own app as the in-store default, AirPods-grade proximity pairing for third-party accessories (iOS 26.3, EU only), notification forwarding, Wi-Fi Aware peer-to-peer to cheap ESP32 hardware, with unified terms and a 5% commission from 1 October 2026. Point it at homeowner-association keys, coworking, gyms, works-council badges and event entry, markets locked today to proprietary fobs. Watch the web-distribution eligibility rules, which exclude most bootstrappers; plan App Store or marketplace distribution.

**26. Micro-M&A for trades succession (score 19).** Up to 125,000 German craft businesses face succession within five years and roughly a third find no successor; the official exchange mediates about 1,000 handovers a year. Boutique M&A will not go below about €2M enterprise value. Productise the file: accounts to teaser, a defensible valuation (the owners' second-biggest stated obstacle), a financing pack for the development bank and guarantee banks, a curated buyer list from master-craftsman registers and career-changers. Take 3–8% on close; two trades, two regions, ten deals in year one. A relationship business with a document engine.

**27. Italian SME natural-catastrophe hazard artefact (score 19).** Italy made catastrophe insurance mandatory for companies with Italian assets, reaching micro and small firms on 1 January 2026, with non-compliance blocking public grants and disaster aid. Millions of small businesses must buy a product they do not understand from brokers who cannot service the ticket profitably. An address-level flood, landslide and seismic exposure report mapped to the statutory categories, €50–200, sold through accountants. EIOPA and the ECB proposed an EU-level scheme in December 2025, so other states may follow.

**28. Handwritten-archive transcription for one record type in one jurisdiction (score 19).** Generic LLMs now beat the incumbent archive tool on historical handwriting at roughly a fiftieth of the cost. Archives have budgets denominated in decades, but conveyancing lawyers, surveyors, insurers and utilities need a 1920 land record or a pre-2000 technical drawing read today. A turnkey, GDPR-safe, EU-hosted service for one record type (pre-1950 German land files, Belgian notarial deeds) with redaction and QA sampling built in, sold to archives and to the professionals who query them. Demand is real but fragmented and procurement is slow.

### Watch list — right idea, wrong moment, or wrong founder

- **French solar-carport obligation intelligence and O&M (18).** Car parks over 10,000 m² had to comply by 1 July 2026 or lock in a deferral with a signed contract and deposit by 30 June 2026 and an order by 31 December 2026; the 1,500–10,000 m² wave lands 1 July 2028. A data product identifying obligated car parks from cadastre and aerial imagery, then independent monitoring for the resulting plants. Needs a French partner.
- **Dialect-first phone line, Swiss German care and trades first (18).** Honest Swiss German speech-recognition error is still around 25%; horizontal voice agents are commoditised. A two-year data moat, then it erodes.
- **Tier-2 counter-drone detection-as-a-service (18).** The 2025 airport closures cost German aviation €60–160M by the DLR's count; stadiums, ports, prisons and data centres now have €20–100k budgets and, in most states, may only detect and document, not jam. Hardware is commodity; the legal picture is shifting (Belgium's June 2026 draft would let critical-infrastructure operators mitigate). Design detection and evidence now, with a licensed mitigation partner later.
- **Galileo HAS centimetre stake-out for open-field trades (18).** Free high-accuracy corrections reach full service in Q4 2026; kit is €400–1,500; German, Dutch and French cadastral data is open. Trade-specific stake-out and as-built documentation for landscapers, fencers and drainage contractors, replacing a €500-a-day surveyor call-out. Hardware integration and per-country cadastre plumbing are the work.
- **Estate operations concierge, Germany and Austria (18).** Over 40% of uncontested inheritance-certificate cases take more than six months; notaries move to electronic exchange with courts from 1 January 2027, which speeds the notary's leg and leaves the heir's untouched. Sell heirs a fixed-price managed process through funeral directors. Deeply unfashionable and open, but not dated.
- **Dutch exiting-landlord transaction package (18).** The Affordable Rent Act pushed 65,000 landlord sales in 2025 and a record 56,700 listings in Q2 2026; most are tenanted flats sold by amateur landlords who need a points check, a legal route and often a sitting-tenant buyer. Excellent timing, politically reversible.
- **German holiday-care clearing under the new all-day schooling entitlement (18).** The right began 1 August 2026, explicitly invites clubs and camp operators to cover holiday weeks with municipal money, and the sector runs on paper. Statutory demand, municipal sales cycle; the €50,000 direct-award threshold helps.
- **Peppol-native invoice-finance origination (16, downgraded).** Delivery-confirmed structured invoices plus instant payments make €500–20k advances underwritable; be the verification and assignment-notice layer for a licensed factor, never the lender. Downgraded because the deepening pass found the thesis is now analyst consensus with funded adjacents (Aria, Defacto); no longer non-obvious.
- **Age and attribute gate plugin on the EU age-verification app and national wallets (17).** Right idea, but Germany's wallet launches 2 January 2027 and the Netherlands and Malta are delayed; ship with a commercial fallback or wait.
- **Regional managed-inference operator for hospitals, county administrations and air-gapped factories (17).** The model and GPU are commodities; the missing piece is someone to run the box with the AI Act paperwork. Sales-heavy; better as the second product of a firm that already sells to those buyers.
- **SME ERP pre-migration archaeology (17).** SAP Business One release 10.0 loses mainstream maintenance on 31 December 2026 with no extension, and 60–70% of ECC customers are not yet live on S/4HANA. Agent-assisted documentation and data mapping of undocumented customisations, resold by capacity-constrained partners. Needs an ERP domain person.
- **2G/3G legacy IoT fleet migration (17).** Lift phones, alarm panels, heat meters and vending machines owned by housing associations with no IoT team; a site-visit-and-swap service with eSIM provisioning. Process, not technology.
- **Household preparedness as a maintained service (17).** The Dutch government moved emergency-kit ownership from 30% to 44% in one campaign season. Kit plus annual refresh subscription plus an employer and municipal channel. Physical goods, thin D2C margins, keep the tone civic.
- **Professional-guardian service bureau (17).** Germany runs about 1.3 million guardianships shifting to professionals who work in Word; the central register added 391,848 powers of attorney in 2025. Small, findable, homogeneous buyer.
- **Adult-ADHD medication logistics (16, downgraded).** Adult use has more than tripled in the UK since 2010, but UK shortages had resolved by July 2026 (no active notifications), stock trackers already exist (the Dutch pharmacists' Farmanco since 2004, MediWatch in the UK), and Germany, where methylphenidate and atomoxetine remained short into 2026, is the only market where the logistics pain still bites. A feature for a German audience, not a company.
- **Sovereign inverter gateway (16), valuation-first house clearance (16), host layer for run clubs and gatherings (16).** Each is covered in the raw tracks; each lacks either a date, a paying buyer, or both. The Data Act designated-recipient idea moved up into the shortlist as entry 10; the results vault survives only in that Data Act form; the stablecoin and DAC8 pack was dropped because the MiCA transitional periods closed everywhere by 1 July 2026 and culled its buyers.
- **DPE class arbitrage for French F-rated rentals (14).** Downgraded by verification. The pool is about 1.1 million F and G private rentals combined, shrinking after the January 2026 recalculation, and the Relance logement bill (adopted by the Senate 8 July 2026) would suspend the 2028 ban for landlords who commit to works. Treat as at risk until the National Assembly votes.

## 5. If the founder is you: a fitness-PWA builder working alone

The general ranking optimises for demand, timing and EU edge. A solo founder should also weight what they can ship fastest and sell from where they already stand. Five entries fit that profile unusually well, and one more is worth a look.

1. **The GLP-1 muscle-preservation engine (#3).** This is the product you are already building, re-sequenced for a population with suppressed appetite, low energy and a reason to prove they trained. Lead with Germany's private-insurance evidence file (a four-month-old judgment set the standard, and the pill launched two weeks ago), add the live-streamed §20 course for the post-loss cohort, and take the gym retention block to the HYROX and strength operators you already know. The UK private channel follows once you have one pharmacy pilot. Treat France as a partnership, not a launch market.

2. **The first digital care application through the new provisional route (#5).** Chair-based strength and balance for people with a care grade at home, plus a lifting programme for the family carer, filed into an empty register that opened nine weeks ago. The work is a university partnership and a filing, both of which a solo founder can drive; the reimbursement is paid by the care insurer, so there is no consumer acquisition cost.

3. **Device-only documentation for the §203 professions (#1).** A PWA, on-device inference, encrypted local storage, templates and a compliance pack. Every skill it needs is web-app skill. If you want to leave fitness entirely, this is the strongest single bet in the report.

4. **The Data Act data agent (#10).** Your PWA plus a rights-exercise workflow: help users pull their own data out of Garmin, Oura and WHOOP under Article 5 and keep a record that survives switching devices. Cheap to test, legally novel, and the biggest unknown (whether makers honour designations) is answered by filing ten requests.

5. **Owner-facing attestation for vibe-coded apps (#16).** You know the stack these apps are built on; the product is a scan, a report and a workflow. Treat it as a fast experiment: a landing page and ten paid readiness checks will tell you within a month.

6. **The host layer for run clubs and gatherings (16 points, watch list).** Lower on the general ranking because of cold start, but you are in the running and HYROX world already, and the numbers are strong: Strava recorded 3.5 times more running clubs in 2025, HYROX is heading for 1.2–1.3 million athletes this season with the Netherlands among its strongest markets, and the venues that host gatherings are closing. If you build it, build the rails under the run club (venue slots, deposits, liability cover, host and venue payment split), not a community app.

What to avoid from this seat: anything in the report that is a service business with a field workforce (energy hubs, care-benefit recovery, drone spraying) unless you take on an operations co-founder, and anything whose date is more than 18 months out.

## 6. The deadline calendar, September 2026 to 2028

Dated obligations are the strongest demand signal in this report because they create buyers who must act by a day. All dates below were confirmed by the verification or deepening passes or come from official sources cited in the raw tracks.

| Date | What | Who is forced | Shortlist |
|---|---|---|---|
| 1 Sep 2026 | France: all businesses must be able to receive e-invoices; oral Wegovy on sale in Germany | French businesses; German self-payers | rejected (free tools); #3 |
| 1 Sep 2026 | France: no new social-media accounts under 15 (existing accounts verified or deactivated from 1 Jan 2027) | platforms, parents, schools | T8 F13 |
| 11 Sep 2026 | Cyber Resilience Act Art. 14 reporting (24h/72h via ENISA) | every maker of a product with digital elements | #6 |
| 12 Sep 2026 | Data Act access-by-design for new connected products | manufacturers; users gain a data lever | #10, #14 |
| 15 Sep 2026 | Cloudflare blocks undeclared mixed-use AI crawlers on ad-supported pages by default | publishers, SMEs | #17 |
| 20 Sep 2026 | Verification of Payee rulebook v1.1 takes effect | PSPs; recipients indirectly | #12 |
| 1 Oct 2026 | Apple's unified EU app terms (5% commission, web distribution rules) | EU developers | #25 |
| Q4 2026 | Galileo High Accuracy Service full service | surveying, trades | watch list |
| 15 Nov 2026 | Banks reject unstructured addresses; pain.001.001.03 retired | ERP-bound SMEs, payroll | #12 |
| 20 Nov 2026 | Consumer Credit Directive 2 applies (BNPL in scope) | lenders, BNPL | none |
| 2 Dec 2026 | Platform Work Directive transposition (only Italy has a draft) | small labour platforms | T2 §14 |
| 9 Dec 2026 | Revised Product Liability Directive applies to new products; software is a product | every software vendor | #16 |
| 24 Dec 2026 | EU Digital Identity Wallet deadline; relying-party registration regime applies (Germany targets early 2027) | relying parties | watch list |
| 30 Dec 2026 | EUDR for medium and large operators | importers of coffee, cocoa, wood, rubber, soy, cattle, palm | #21 |
| 31 Dec 2026 | SAP Business One 10.0 mainstream maintenance ends, no extension | Mittelstand on B1 | watch list |
| 1 Jan 2027 | Dutch net metering ends | 2.5–3M rooftops | #9 |
| 1 Jan 2027 | Dutch grid operators must offer the group transport agreement | congested business parks | #8 |
| 1 Jan 2027 | Germany: e-invoice issuing for firms over €800k turnover; notaries exchange electronically with courts | Mittelstand; heirs, buyers | rejected; watch list |
| 12 Jan 2027 | Data Act bans cloud switching charges | every SME on a US cloud | T7 F11 |
| 20 Jan 2027 | Machinery Regulation applies in full; ML safety functions need a notified body | integrators, SMEs automating | #7 |
| 31 Jan 2027 | First DAC8 crypto-asset reports due (covering 2026) | crypto service providers | none |
| 18 Feb 2027 | Battery passport mandatory for EV, light-transport and industrial batteries | e-bike brands, pack assemblers | #14 |
| 30 Jun 2027 | EUDR for micro and small operators | small roasters, furniture makers | #21 |
| 10 Jul 2027 | EU AML Regulation applies; non-euro states must offer Verification of Payee | art and luxury dealers, letting agents, crowdfunding; Nordic and CEE PSPs | #20, #12 |
| 31 Jul 2027 | Commission's European repair platform interface due (fully operational 1 Jan 2028) | brands, repairers | #13 |
| 1 Sep 2027 | France: small firms must issue e-invoices | ~4M French SMEs | rejected (free tools) |
| 2 Dec 2027 | AI Act Annex III high-risk obligations (postponed from Aug 2026) | HR, credit, education AI deployers | avoid until 2027 |
| 11 Dec 2027 | Cyber Resilience Act full requirements and CE marking | all in scope | #6 |
| 24 Dec 2027 | Regulated relying parties must accept EU wallets | banks, telcos, insurers, energy, platforms | watch list |
| 1 Jan 2028 | Germany: e-invoice issuing for all; France: F-rated rental ban (now at risk) | all German firms; French landlords | rejected; watch list |
| 1 Jul 2028 | French solar-carport duty for 1,500–10,000 m² car parks | tens of thousands of car-park owners | watch list |
| 2 Aug 2028 | AI Act Annex I product-embedded high-risk obligations | machinery, devices | #7 (Machinery bites earlier) |
| Nov 2028 | Barcelona stops renewing tourist-flat licences | >10,000 hosts | #4 |
| Apr 2029 | UK mandatory B2B e-invoicing (decentralised Peppol model) | all UK VAT businesses | none yet |

## 7. Considered and rejected

These were examined and set aside, so the reader knows the shortlist is a selection, not a first impression.

**Crowded or already won.** Horizontal voice agents and AI receptionists (dozens of funded vendors, now carrying AI Act disclosure duties). AI code scanners sold to security teams. Enterprise COBOL and S/4HANA migration. Pixel-level deepfake detection. AI medical scribes in the big three languages (Doctolib, Nabla, Corti, Heidi, Voize). AI-governance and AI-literacy SaaS (the literacy duty was softened to an obligation of effort; the high-risk deadline moved to December 2027). Generic digital-product-passport and ESG platforms. Peppol access points and e-invoice issuing apps. NIS2 and ISO 27001 automation. Accessibility overlay widgets (legally exposed). Consumer dynamic-tariff apps and home-energy-management systems. Grid-scale battery development (400 GW queued in Germany, regulators now allow refusal). EV battery diagnostics (Aviloo, Twaice, Volytica). Charging roaming platforms. Residential solar sales. Generic drone-inspection analytics. Humanoid rental. Consumer brain-computer interfaces. CGM-for-wellness coaching. DiGA digital therapeutics (nine insolvencies, prices cut 59%). AI mental-health companions. GLP-1 telehealth prescribing itself. Neobank, e-money and crypto-service licences. Digital-euro anything before the 2027 pilot. Consumer P2P and tipping apps. FiDA-dependent open-finance products (still in trilogue). Trades lead generation (Instapro owns six markets). Carer marketplaces. Loneliness and friendship apps (dating revenue fell for the first time in 2025). Consumer claims brands. Hyperlocal ad-funded newsletters. Indie games (median 2026 paid Steam launch earned about $350).

**Killed or downgraded by evidence.** Agentic-commerce checkout plumbing (OpenAI retired in-chat checkout in March 2026 after conversion measured a third of on-site; the winning pattern is discover in AI, buy on the merchant's site). llms.txt tooling and "GEO" agencies (10% adoption, no measurable effect on citations, Google on record not supporting it, Cloudflare gave away the audit). Matter-based energy products (the tariff device type exists in the spec; no certified inverter or heat-pump product shipped as of July 2026). Cookie-consent tooling built for the Digital Omnibus (the cookie articles were stripped). German heat-pump mandate plays (the 65% rule was repealed). Dutch commuting-emissions reporting tools (threshold raised, market shrank). CRA "mandatory EU representative" as a pitch (it is optional). French DPE arbitrage (ban being softened). "Human-made" certification marks (label without provenance technology).

**Killed or downgraded by the health and money deepening pass.** Receive-first e-invoice inbox for non-issuers (free, approved receive platforms already exist: Abby, Pennylane's free tier, Solo and Tiime in France; Let's Peppol, Doccle, Accountable and e-invoice.be in Belgium; free tools in Germany; Peppol registration itself is free). A French GLP-1 checkpoint companion as a standalone product (Annette raised €2M for it; Charles and GLP1Suivi exist). NHS-side GLP-1 wraparound care (centrally commissioned since June 2025). Adult-ADHD medication logistics (UK shortages resolved; stock trackers exist). The results vault as originally framed (Neko's $700M funds US clinics; Veyda is building it; WHOOP and Oura now sell their own lab panels; Dutch personal health environments are shrinking). The claim that Germany bars direct-to-consumer blood tests (the physician rule covers genetic tests only). The Wero plugin gap (one acquirer already ships plugins for ten shop platforms). The stablecoin and DAC8 evidence pack (MiCA transitional periods closed everywhere by 1 July 2026). Peppol-native invoice finance as a non-obvious idea (now analyst consensus with funded adjacents). SEPA structured-address remediation as a product (large, but consulting-shaped and capped by Swift's free open-source address model).

**Too early for a 6–9 month runway.** EU Space Act, U-space, digital driving licence (2029), EHDS data access (2029), EU Business Wallet (2028), Spanish self-consumption manager role (legal regime undefined), German energy sharing (grid operators say 2027 at the earliest), consumer vehicle-to-grid (chargers mandated only from 2027, few cars), tokenised securities tooling.

## 8. What the verification pass changed

A fact-check of 35 load-bearing claims from tracks T1–T4 confirmed 21, partly confirmed 12, corrected one and found none fabricated. The corrections that changed the ranking:

- **The CRA authorised representative is optional, not mandatory.** Article 18 says a manufacturer "may" appoint one, and the mandate cannot absorb core duties. The opportunity survives as a vulnerability-handling and filing desk and is arguably stronger: ten days before the 11 September duty, ENISA's platform had no URL, no API and no published report format, and there are no notified bodies.
- **France's 2028 F-rated rental ban is at risk.** The private-rental pool is about 1.1 million F and G units combined (the "1.2 million F-rated" figure was a misreading), shrinking after the January 2026 recalculation, and a bill through the Senate would suspend the ban for landlords who commit to works. Downgraded from a Tier 1 candidate to the watch list.
- **The Product Liability Directive applies from 9 December 2026, not 2 August 2026.** Four months less urgency for the software-attestation thesis; any copy claiming it is already in force would burn credibility.
- **SAP Business One 10.0 loses mainstream maintenance on 31 December 2026, not 2028**, and 60–70% (not 40%) of ECC customers are not live on S/4HANA. A nearer, SME-sized deadline than the one the raw report led with.
- **France's drone-spraying basis is law 2025-365 and the May 2026 decrees, not the Duplomb law**, whose drone article the Constitutional Council struck down. France is operational now, a year earlier than assumed.
- **The e-bike standard change took effect 15 May 2026, not 1 January**, and the widely repeated "72% of shops have three-week waits" figure is unsourced. Use Shimano's own 2026 survey instead.
- **Sweden's accessibility regulator runs 28 supervision cases, not an audit of 200 sites.** German automated scanning from Q3 2026 and two Abmahnung waves are the better evidence.
- **Right to Repair Annex II does include light-transport batteries**, the EU platform arrives only in 2027–2028, and just four member states transposed on time: the vacuum is the wedge.
- **The Machinery Regulation date did not slip with the AI Act.** Integrators face a notified body in January 2027, nineteen months before the AI Act's own product-embedded duties.
- **Cloudflare's 15 September change is confirmed but narrower than reported**: it blocks undeclared mixed-use crawlers on ad-supported pages, with an opt-out.
- **Wallet dates are legal, not practical.** Germany targets 2 January 2027; the Netherlands and Malta are late. Build against Italy's live wallet or wait.

Tracks T7 and T8 were researched after the verification pass with 167 and 147 searches respectively and carry their own "not verified" lists.

The health and money deepening pass (156 searches) re-verified every open item behind the original health and money top lists. What it changed:

- **It killed the e-invoice inbox thesis.** Free, approved receive platforms exist in every mandate country as acquisition wedges, so there is no pricing room; only the Verification of Payee half survived, and it did so strengthened (one in five transfers is not a clean match; no payee-side tool exists; the 15 November 2026 address and format cut-over lands on the same buyers).
- **It restructured the GLP-1 thesis around evidence.** The French checkpoint market is already funded (Annette), the NHS wraparound market is centrally commissioned, and the German §20 prevention route is limited to people under BMI 30. But it surfaced a first-instance German judgment (21 May 2026) that makes a documented six-month therapy record the condition for private reimbursement, a UK regulator's report listing exactly what private providers lack, a fully funded Dutch lifestyle programme as a fourth regime, and confirmation that no European gym chain has a GLP-1 programme.
- **It found the empty register.** Germany's digital care applications register has never had a filing; the provisional-listing route that opened on 1 July 2026 is the cheapest reimbursed path in German health for a fitness-adjacent product.
- **It added the Data Act as the mechanism both tracks missed.** A user-exercised statutory right to wearable data replaces vendor API negotiations from 12 September 2026, though enforcement is embryonic.
- **It downgraded adult-ADHD logistics** (UK shortages resolved, trackers exist), **the results vault** (well-funded US players, shrinking Dutch health environments), **the Wero plugin gap** and **the stablecoin evidence pack**, and corrected the claim that Germany bars direct-to-consumer blood tests.
- **It sharpened dates:** first DAC8 reports 31 January 2027; wallet relying-party registration applies from 24 December 2026 with no national portal live as of February 2026; the UK's own e-invoicing mandate lands in April 2029; MTD for Income Tax reached 864,000 people in its first wave, not 780,000.

## 9. Appendix

### 9.1 Scoring table

| # | Opportunity | D | W | F | E | N | P | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | Device-only documentation for the §203 professions | 4 | 5 | 5 | 5 | 3 | 2 | 24 |
| 2 | PDF/UA + ODF procurement-legal document toolkit | 4 | 5 | 5 | 5 | 2 | 1 | 22 |
| 3 | GLP-1 muscle-preservation engine, sold on evidence | 4 | 5 | 5 | 4 | 2 | 2 | 22 |
| 4 | Micro-host STR compliance + municipal register | 4 | 5 | 5 | 5 | 2 | 1 | 22 |
| 5 | First DiPA via provisional listing (fall prevention) | 4 | 5 | 3 | 5 | 3 | 2 | 22 |
| 6 | CRA vulnerability-handling and ENISA filing desk | 4 | 5 | 4 | 5 | 2 | 1 | 21 |
| 7 | Machinery Regulation cell compliance pack | 4 | 5 | 4 | 5 | 3 | 0 | 21 |
| 8 | The Dutch energy-hub back-office for business parks | 4 | 5 | 4 | 5 | 3 | 0 | 21 |
| 9 | Post-net-metering retrofit controller (NL) | 5 | 5 | 4 | 5 | 2 | 0 | 21 |
| 10 | Data Act data agent for wearables | 2 | 5 | 4 | 5 | 3 | 2 | 21 |
| 11 | Frontalier telework day-counter with employer reporting | 3 | 5 | 5 | 5 | 2 | 1 | 21 |
| 12 | VoP payee-name hygiene + Nov 2026 format cut-over | 3 | 4 | 5 | 5 | 2 | 1 | 20 |
| 13 | Repair-network-as-a-service | 4 | 5 | 3 | 5 | 2 | 1 | 20 |
| 14 | E-bike battery certificate + passport operator | 4 | 5 | 3 | 4 | 3 | 1 | 20 |
| 15 | Heat-pump performance verification | 4 | 4 | 4 | 4 | 3 | 1 | 20 |
| 16 | Attestation for vibe-coded apps | 3 | 4 | 5 | 3 | 3 | 2 | 20 |
| 17 | Scheduling provider of record for one underserved vertical | 4 | 5 | 3 | 4 | 3 | 1 | 20 |
| 18 | Care-benefit recovery on a success fee | 5 | 3 | 4 | 5 | 3 | 0 | 20 |
| 19 | The recognition-file factory, sold to employers | 4 | 4 | 4 | 5 | 3 | 0 | 20 |
| 20 | AML-in-a-box for one sector | 4 | 4 | 4 | 5 | 3 | 0 | 20 |
| 21 | EUDR polygon hygiene + CAP pre-check | 4 | 4 | 4 | 5 | 2 | 0 | 19 |
| 22 | German smart-meter activation service | 4 | 4 | 4 | 5 | 2 | 0 | 19 |
| 23 | Drone-spraying operations, France first | 4 | 5 | 2 | 5 | 3 | 0 | 19 |
| 24 | German registers + geodata, REST and MCP | 4 | 4 | 3 | 5 | 2 | 1 | 19 |
| 25 | EU-only iPhone capabilities, building access | 3 | 4 | 3 | 5 | 3 | 1 | 19 |
| 26 | Micro-M&A for trades succession | 4 | 4 | 3 | 5 | 3 | 0 | 19 |
| 27 | Italian SME natural-catastrophe hazard artefact | 4 | 4 | 4 | 5 | 2 | 0 | 19 |
| 28 | Handwritten-archive transcription | 2 | 4 | 5 | 5 | 3 | 0 | 19 |

Watch-list scores (17–18) and the rejected DPE item (14) are in `research/raw/` and in the working notes; the rubric is D demand, W why-now, F feasibility, E EU edge, N non-obviousness, P founder fit.

### 9.2 Raw material

- `research/00-brief.md` — the refined brief and method.
- `research/raw/T1-frontier-ai.md` through `T8-behavioural.md` — track reports with inline sources, each ending in a top-N list, an avoid list and a not-verified list.
- `research/raw/T7-software-substrate-draft.md` — the pre-search draft of T7, kept because the final T7 lists thirteen corrections to it, which is a useful record of how wrong a no-search pass can be.
- `research/raw/V1-verification.md` — 35 claims, verdicts, corrected facts, evidence and impact on each thesis.
- `research/raw/T5b-T6b-deepening.md` — 156-search verification and extension of the health and money tracks; killed two theses, restructured one, and added the Data Act and DiPA entries.

### 9.3 How to keep this alive

The six patterns in section 3 are the reusable part. Every quarter: scan the EU Official Journal and the national transposition trackers for dates 6–18 months out with no SME tooling; ask which generated output just became free and who now needs it verified; check which physical bottleneck (meters, connections, mechanics, notified bodies) got a new enforcement push; and look for the receive side of any new mandate.
