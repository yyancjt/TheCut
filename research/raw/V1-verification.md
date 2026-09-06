# V1 — Fact-check of key claims in raw tracks T1–T4

*Verification date: 6 September 2026. Method: web search against primary sources (EUR-Lex, Council,
Commission, national regulators) where reachable, then law-firm trackers, then trade press. Direct
page fetches (`WebFetch`) were blocked by the sandbox egress proxy for essentially every EU/official
domain tried (digital-strategy.ec.europa.eu, cyberresilienceact.eu, bundesnetzagentur.de,
consilium.europa.eu, rijksoverheid.nl), so evidence is quoted from search-result excerpts of those
same sources plus specialist secondary sources. Verdicts: **CONFIRMED** / **CORRECTED** /
**PARTLY** (core right, detail wrong or over-stated) / **UNVERIFIED**.*

---

## 1. AI Act Digital Omnibus — Reg. (EU) 2026/1744, high-risk delays, Art. 50, Code of Practice

**Claim.** Regulation (EU) 2026/1744 in force 27 July 2026; Annex III high-risk obligations delayed to
2 Dec 2027 and Annex I to 2 Aug 2028; Article 50 transparency obligations applied 2 Aug 2026 with a
grace period to 2 Dec 2026 for systems already on the market; Code of Practice on marking/labelling
published 10 June 2026.

**Verdict: CONFIRMED** (one important narrowing on the grace period).

**Corrected fact.** All five dates hold. Reg. (EU) 2026/1744 was published in the OJ on 24 July 2026 and
entered into force 27 July 2026 (a 3-day, not the usual 20-day, vacatio legis, because the original
2 Aug 2026 high-risk deadline was six days away). It amends the AI Act (2024/1689), the EASA Regulation
(2018/1139) **and the Machinery Regulation (2023/1230)** — relevant to claim 14. Annex III standalone
high-risk → 2 Dec 2027; Annex I product-embedded → 2 Aug 2028. Council gave final green light 29 June 2026.
Article 50 applied 2 Aug 2026 **in full**; the grace period to 2 Dec 2026 is *not* general — it covers only
the Article 50(2) marking/machine-readable-detection duty and only for generative systems already placed
on the market before 2 Aug 2026. Deployer-side deepfake disclosure and chatbot disclosure had no runway.
Prohibited practices (Art. 5, Feb 2025) and GPAI duties (Aug 2025) were untouched. The final Code of
Practice on marking and labelling AI-generated content was published 10 June 2026; ~190 signatories by
end-July 2026; it is voluntary.

**Evidence.**
- https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act — "published in the Official Journal of the EU on 24 July 2026 and entered into force on 27 July 2026".
- https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act — "a limited grace period is envisaged only for AI systems placed on the market before 2 August 2026 and only as regards the marking and detection obligation (Article 50(2))… comply only as from 2 December 2026".
- https://digital-strategy.ec.europa.eu/en/news/commission-publishes-code-practice-marking-and-labelling-ai-generated-content — final Code published 10 June 2026.

**Impact on the opportunity.** Strengthens the "Art. 50 labelling / provenance plumbing" thesis and confirms the
window: labelling is live *now*, high-risk conformity work slips 16 months. Anything sold as "get ready for
Annex III by Aug 2026" is dead; anything sold as marking/deepfake-disclosure tooling has a real, current deadline.

---

## 2. Cyber Resilience Act — reporting, notified bodies, standards, EU rep, scope size

**Claim.** Art. 14 reporting from 11 Sept 2026 (24h/72h via ENISA platform); full application 11 Dec 2027;
notified-body count mid-2026; harmonised-standards status; non-EU manufacturers must appoint an EU
authorised representative; ~615,000 manufacturers/products in scope; no SME exemption for
importer/distributor duties.

**Verdict: PARTLY — one material error (the authorised representative is optional, not mandatory).**

**Corrected fact.**
- Art. 14 reporting **from 11 September 2026**: 24h early warning, 72h notification, 14-day/1-month final
  reports, routed through ENISA's Single Reporting Platform (Art. 16), which was scheduled to be operational
  on the same date. Full essential requirements + CE marking **11 December 2027**. Chapter IV
  (notified bodies) applied **11 June 2026**. All confirmed.
- **Notified bodies: zero.** As of 30 August 2026 no body was listed in NANDO against Reg. (EU) 2024/2847.
  Recital target is "a sufficient number… by 11 December 2026" — a best-efforts target, not a guarantee.
- **Harmonised standards: none cited in the OJ.** The ESOs accepted standardisation request M/606 (41 standards);
  in early July 2026 the Commission published a draft amendment pushing the 2026 deadlines back two months —
  A and B (vulnerability-management) standards to 31 Oct 2026, product-specific C standards to 31 Dec 2026.
  EN 40000-1-1/-1-2/-1-3 have closed public enquiry; 17 ETSI verticals still in enquiry with comments closing
  mid-Sept to mid-Nov 2026. No Art. 27 presumption of conformity is available for any product category.
- **CORRECTED — the EU authorised representative is NOT mandatory under the CRA.** Art. 18(1) reads "A
  manufacturer **may**, by a written mandate, appoint an authorised representative." Unlike MDR/GPSR there is
  no condition of market access, and the mandate cannot include the substantive duties in Art. 13(1)–(11),
  13(12) first subpara. and 13(14) — only documentation custody (10 years or the support period) and
  cooperation with authorities.
- **~615,000**: the figure traces to the Commission's CRA impact assessment SWD(2022) 282 (15 Sept 2022);
  secondary sources cite **615,272 manufacturers/products** alongside the €29bn compliance-cost estimate for
  the chosen sub-option. The number is a cost-model denominator, not a registry count — use it as an
  order-of-magnitude only.
- **No SME exemption for importers/distributors: confirmed.** SME relief in the CRA is limited to simplified
  technical documentation, guidance, and (for fines) manufacturers and open-source stewards. Art. 19/20
  duties carry no size threshold.

**Evidence.**
- https://digital-strategy.ec.europa.eu/en/policies/cra-reporting and https://www.enisa.europa.eu/topics/product-security-and-certification/single-reporting-platform-srp — reporting and SRP from 11 Sept 2026.
- https://craevidence.com/cra-compliance/authorised-representative — "A CRA Authorised Representative is not automatically mandatory… the CRA does not require one as a condition for EU market access."
- https://www.cyberresilienceact.eu/news/cra-notified-bodies-rules-apply-11-june-2026.html — "As of August 30, 2026, no body had appeared in NANDO against Regulation (EU) 2024/2847."

**Impact on the opportunity.** Weakens (does not kill) the "CRA Authorised Representative as a product" wedge:
there is no legal compulsion to buy one, so it must be sold as convenience/risk-reduction, and the AR cannot
absorb the manufacturer's core duties. The stronger half of the thesis survives intact and is arguably
*strengthened*: the 24h/72h reporting duty from 11 Sept 2026 is live and mandatory, harmonised standards and
notified bodies are absent (so everyone self-assesses against a moving target), and importer/distributor
verification duties have no SME escape hatch. Re-pitch as "vulnerability-handling + ENISA filing desk +
importer document-verification", not "mandatory EU rep".

---

## 3. Revised Product Liability Directive (EU) 2024/2853 — which date?

**Claim.** T1 says it applies from 2 Aug 2026; T2 says transposition 9 Dec 2026. Resolve. Software explicitly a product.

**Verdict: CORRECTED — T2 is right, T1 is wrong.**

**Corrected fact.** Directive (EU) 2024/2853 was published 18 Nov 2024, entered into force 8 Dec 2024, and must
be transposed by **9 December 2026**. It applies to products **placed on the market or put into service after
9 December 2026**; products placed before that date stay under Directive 85/374/EEC. There is no 2 Aug 2026
PLD date — that date belongs to the AI Act. Software (including SaaS, firmware updates and AI systems) is
explicitly a "product", and the directive adds a rebuttable presumption of defectiveness/causation in
technically complex cases plus disclosure of evidence. Transposition is running late: as of mid-2026 roughly
a third of member states had drafts (Hungary done; DE and NL close to text).

**Evidence.**
- https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng — transposition by 9 December 2026.
- https://www.jonesday.com/en/insights/2026/06/the-revised-eu-product-liability-directive-state-of-play-across-eu-member-states-and-evolving-risk-landscape — "applies to products placed on the market or put into service after 9 December 2026".

**Impact on the opportunity.** Neutral-to-slightly-strengthening. The "AI-code liability" thesis in T1 keeps its
substance but loses four months of urgency; any go-to-market copy citing "already in force since August 2026"
is wrong and would burn credibility with the first lawyer who reads it. The real hook is: software shipped
from 10 Dec 2026 onward carries strict liability with a presumption of defect.

---

## 4. Data Act — access-by-design, switching charges, SME carve-out, Omnibus

**Claim.** Access-by-design for connected products placed on market from 12 Sept 2026; cloud switching charges
banned from 12 Jan 2027; micro/small enterprises exempt as data holders; Digital Omnibus proposed changes status.

**Verdict: CONFIRMED.**

**Corrected fact.** Reg. (EU) 2023/2854 has applied since 12 Sept 2025. **Art. 3(1) access-by-design applies to
connected products and related services placed on the EU market after 12 September 2026** — data accessible by
default, easily, securely, free, comprehensive, structured, commonly used, machine-readable, and where relevant
continuously and in real time, plus pre-contractual information duties. **Art. 29 abolishes switching charges
from 12 January 2027** (reduced, cost-based charges allowed 11 Jan 2024 – 12 Jan 2027; egress fees fall within
the definition of switching charges, so they go to zero). **Art. 7(1)** disapplies Chapter II to data from
connected products manufactured/designed, or related services provided, by a micro or small enterprise, provided
it has no non-SME partner/linked enterprise and is not a subcontractor for the product/service. The **Data
Omnibus is still a proposal** (Council/Parliament negotiation ongoing; adoption not expected before late 2026):
it folds the Data Governance Act, Open Data Directive and Free Flow of Non-Personal Data Regulation into the
Data Act, strengthens trade-secret refusal grounds and narrows B2G access from "exceptional need" to "public
emergencies" — it does **not** change Arts. 1–7 scope or the 12 Sept 2026 / 12 Jan 2027 dates.

**Evidence.**
- https://www.wsgr.com/en/insights/eu-data-act-september-2026-deadline-what-businesses-need-to-know.html — Art. 3(1) applies to products placed on the market after 12 Sept 2026.
- https://www.eu-data-act.com/Data_Act_Article_29.html — "From 12 January 2027, providers of data processing services shall not impose any switching charges."
- https://www.twobirds.com/en/insights/2025/eu-digital-omnibus-package-major-changes-to-the-data-act-proposed — proposal status and content.

**Impact on the opportunity.** Strengthens. Both dates are near-term and unchanged by the Omnibus, and the
micro/small carve-out defines the buyer precisely: mid-size connected-product makers (>50 staff or >€10m) with
no in-house data platform are the ones who must ship an access API within a year.

---

## 5. Right to Repair Directive (EU) 2024/1799

**Claim.** Application from 31 July 2026; Annex II includes batteries for light means of transport (e-bikes);
European Repair Information Form; 12-month guarantee extension; national repair platform timeline; how many
member states transposed on time.

**Verdict: CONFIRMED** (with a correction on the platform date and a sharper transposition picture).

**Corrected fact.** Transposition and application date **31 July 2026** — confirmed. **Annex II** lists the
product groups that already carry EU ecodesign repairability requirements: household washing machines and
washer-dryers, dishwashers, refrigerating appliances, electronic displays, welding equipment, vacuum cleaners,
servers and data-storage products, mobile phones/cordless phones/slate tablets, **and goods incorporating
batteries for light means of transport (e-bikes, e-scooters)** — so yes, LMT batteries are in scope.
The **European Repair Information Form** is free on request, quotes price, time and conditions, and is binding
for 30 calendar days by default. The **12-month extension** is real: Art. 16 inserts Art. 10(2a) into Directive
(EU) 2019/771 — choosing repair extends the seller's liability period by 12 months (member states may go
longer), once per good, for goods bought from 31 July 2026. **Platform timing corrected:** member states
communicate their national contact points/sections by 31 July 2026; the **Commission must deliver the common
online interface of the European repair platform by 31 July 2027**, with the platform fully operational from
1 Jan 2028. **Transposition was poor:** at 30 July 2026 only "a handful" of member states had notified complete
transposition (Right to Repair Europe); Germany's Reparaturgesetz passed the Bundestag only on 26 June 2026;
Italy was still in parliamentary procedure past the deadline.

**Evidence.**
- https://repair.eu/news/the-right-to-repair-directive/ — "only a handful of governments had formally notified the European Commission that transposition had been completed".
- https://www.fieldfisher.com/en/insights/incoming-eu-right-to-repair-requirements-the-key-t — European Repair Information Form, 30-day validity, platform timeline.
- https://eur-lex.europa.eu/EN/legal-content/summary/common-rules-promoting-the-repair-of-goods-and-amending-related-eu-legislation.html — Annex II product groups and the amendment to 2019/771.

**Impact on the opportunity.** Strengthens, and the late/uneven transposition is itself the wedge: the
obligations are EU-wide but the enforceable text is 27 national laws, and the pan-EU repair platform does not
exist until 2028 — an 18-month vacuum for a private repairer directory / ERIF-generation tool. E-bike and
e-scooter brands are confirmed in scope, which is the segment least likely to have a repair-information process.

---

## 6. EU Battery Regulation — passport, due diligence, removable batteries

**Claim.** Battery passport mandatory 18 Feb 2027 for EV, LMT and industrial >2 kWh; due diligence postponed to
18 Aug 2027 (Reg. 2025/1561); user-replaceable portable batteries from 18 Feb 2027 and its effect on Meta
Ray-Ban Display's EU launch.

**Verdict: CONFIRMED.**

**Corrected fact.** Reg. (EU) 2023/1542 Art. 77 makes the digital **battery passport mandatory from
18 February 2027** for EV batteries, LMT batteries and industrial batteries >2 kWh, reachable by QR code, with
three access tiers (public / authorities+notified bodies / legitimate interest) and Art. 77(4) allowing a
written mandate to a third party to run the passport. **Reg. (EU) 2025/1561 (adopted 30 July 2025, "stop the
clock", part of Omnibus IV) postponed the Chapter VII due-diligence obligations from 18 Aug 2025 to
18 August 2027** and pushed the Commission's due-diligence guidelines from 18 Feb 2025 to 26 July 2026.
**Art. 11** (portable and LMT batteries "readily removable and replaceable by the end user at any time during
the lifetime of the product") applies **from 18 February 2027**, with narrow safety derogations (wet
environments, professional medical imaging/radiotherapy, IVD devices) where an independent professional with
commercially available tools suffices. On Meta: Bloomberg (25 Mar 2026) reported the Ray-Ban Display is
withheld from the EU over battery-removability rules, AI-feature restrictions and supply shortages; Meta was
reported in talks with the Commission seeking a wearables exemption, so far unsuccessfully.

**Evidence.**
- https://www.consilium.europa.eu/en/press/press-releases/2025/07/18/simplification-council-adopts-law-to-stop-the-clock-on-due-diligence-rules-for-batteries/ — postponement to 18 Aug 2027.
- https://products.cooley.com/2025/02/13/european-commission-publishes-guidance-on-eu-batteries-regulation-removability-requirements/ — Art. 11 applies from 18 Feb 2027, end-user removability.
- https://www.bloomberg.com/news/articles/2026-03-25/meta-s-new-display-glasses-withheld-from-eu-over-battery-rules-supply-shortages — battery rules cited as a reason for withholding the product from the EU.

**Impact on the opportunity.** Strengthens both the battery-passport-services thesis (a hard 18 Feb 2027 date,
and Art. 77(4) explicitly permits an outsourced passport operator — a licence to build the service) and the
"EU wearables are structurally 12–18 months behind the US" reading. Note the due-diligence delay removes one
adjacent revenue line until Aug 2027.

---

## 7. EUDR — application dates, no further delay, low-risk simplification

**Claim.** Application 30 Dec 2026 (medium/large) and 30 June 2027 (micro/small); Commission statement of no
further delay; simplified duties for low-risk countries.

**Verdict: PARTLY — dates right, one carve-out missed, "no further delay" is softer than stated.**

**Corrected fact.** The second postponement was enacted by **Regulation (EU) 2025/2650** (Dec 2025, after the
Parliament vote of 11 Dec 2025). Application: **30 December 2026 for large and medium operators/traders — and
also for micro and small enterprises in the timber sector**; **30 June 2027 for other micro and small
enterprises and natural persons**. The claim's split therefore misses the timber carve-out. Simplifications:
a new "downstream operator" category; micro/small primary operators file a **one-off simplified declaration**
updated only on material change; annual instead of per-consignment DDS for some operators; the Commission
estimates ~75% lower annual compliance cost versus the original design. **Low-risk countries do get lighter
duties** (simplified due diligence, no risk-assessment/mitigation step), but the benchmarking itself is
contested: the Commission published the first classification on 20 May 2025 (140 low-risk, incl. all member
states, US, Canada, China, Ukraine, Thailand; 4 high-risk: Belarus, Myanmar, North Korea, Russia) and the
European Parliament passed a resolution **against** that classification on 9 July 2025 (373-289), criticising
outdated data and opacity. *See addendum 7: that resolution was political, not annulling - Commission
Implementing Regulation (EU) 2025/1093 of 22 May 2025 remains in force and the classification stands.* The
Commission has said it will not reopen the EUDR text and proposed only targeted simplification; the regulation
also required a Commission burden review by 30 April 2026, which is itself a channel for further change. So
"no further delay" is a political posture, not a legal guarantee — and this regulation has already been delayed twice.

**Evidence.**
- https://www.europarl.europa.eu/news/en/press-room/20251211IPR32168/deforestation-law-parliament-adopts-changes-to-postpone-and-simplify-measures — postponement and simplification adopted.
- https://www.hqts.com/eudr-postponed/ — "30 December 2026 to large and medium-sized companies, and to micro and small enterprises in the timber sector… other micro and small enterprises, it starts on 30 June 2027".
- https://www.esgtoday.com/eu-lawmakers-reject-eudrs-country-risk-system-in-new-setback-to-deforestation-regulation/ — Parliament rejected the country risk classification.

**Impact on the opportunity.** Weakens any thesis that assumes a stable, imminent EUDR compliance market: two
delays, a rejected benchmarking system and an open burden review make timing risk real. A build should target
the *durable* obligation (geolocation data capture and DDS filing for large operators from 30 Dec 2026) and
avoid anything priced on the country-risk tiers, which may still move.

---

## 8. Netherlands — kleinverbruik waiting list, GTO, salderen, negative-price hours

**Claim.** From 1 July 2026 small-consumer (kleinverbruik) connection requests in congested areas join the
waiting list; group transport agreement (GTO) mandatory for DSOs to offer from 1 Jan 2027; first GTO signed
9 July 2026 in Bergeijk; salderingsregeling ends 1 Jan 2027 with a minimum feed-in compensation rule; 584
negative-price hours in 2025.

**Verdict: CONFIRMED** (one nuance on "first GTO").

**Corrected fact.** **From 1 July 2026** small consumers in congestion areas join the same queue as large
consumers — previously DSOs held reserved capacity for kleinverbruik. Allocation follows the **ACM
prioritisation framework** under the Energiewet: (1) congestion-relieving projects, (2) safety/acute care
(hospitals, emergency services, defence, police), (3) basic needs (housing, education), then everything else,
first-come-first-served within each tier; 1 July 2026 – 1 Jan 2027 is a transition period in which the freed
kleinverbruik reserve goes to tiers 1 and 2. 2025 baseline waits: ~45 weeks for a new small connection,
~21 weeks for an upgrade. **The GTO is in the Netcode elektriciteit and DSOs must offer it from 1 January 2027**
(ACM decision). **9 July 2026**: thirteen companies on bedrijventerrein De Waterlaat in Bergeijk signed a GTO
with Enexis — reported by the province as **the first GTO in Noord-Brabant** (several outlets shortened this to
"the first"); treat it as the first energy-hub GTO in Brabant and an early national example, not a verified
national first. **Salderingsregeling ends 1 January 2027** in one step (law passed Tweede Kamer 14 Nov 2024,
Eerste Kamer 17 Dec 2024), with a **statutory minimum feed-in compensation of at least 50% of the bare supply
tariff, in force only up to and including 2030**, after which the market sets it. **584 hours** of negative
day-ahead prices in NL in 2025, up from 458 in 2024 (TenneT annual market update); average day-ahead price
+12% to €87/MWh; market-based curtailment >1,000 GWh, +33.5% year on year.

**Evidence.**
- https://www.netbeheernederland.nl/artikelen/nieuws/nieuwe-werkwijze-voor-stroomaanvragen-vanaf-1-juli — new procedure for connection requests from 1 July 2026.
- https://www.brabant.nl/actueel/nieuws/volgende-stap-energiehubs — "eerste GTO van Brabant", signed 9 July 2026 at De Waterlaat, Bergeijk.
- https://www.tennet.eu/nl/nieuws/stijging-stroomprijzen-stijging-stroomexport-en-stabiele-kosten-voor-congestiemanagement — 458 → 584 negative-price hours; +12% price.
- https://www.rijksoverheid.nl/themas/klimaat-milieu-en-natuur/energie-thuis/salderingsregeling — salderen ends 1 Jan 2027.

**Impact on the opportunity.** Strongly strengthens. Three independent forcing functions land within six months
of each other in one small, rich, English-comfortable market: households and small businesses lose guaranteed
grid access (1 Jul 2026), lose net metering (1 Jan 2027), and gain a legal vehicle for capacity sharing
(1 Jan 2027). The "energy hub / GTO enablement" and "post-salderen home battery + dynamic tariff optimisation"
theses both get harder evidence than the raw report had.

---

## 9. Germany — smart-meter rollout, BNetzA enforcement, §41a, §14a Modul 3, Solarspitzengesetz

**Claim.** 5.5% of connections with an intelligentes Messsystem at end-2025; BNetzA opened 77 proceedings
against metering operators in March 2026; §41a dynamic-tariff obligation since 1 Jan 2025; §14a Modul 3
status; Solarspitzengesetz rules (60% cap without smart meter, no feed-in tariff during negative prices).

**Verdict: CONFIRMED.**

**Corrected fact.** At 31 Dec 2025, ~3.09 million iMSys were installed — a **5.5% rollout quota across all
metering points**, against **23.3% of mandatory-installation cases** (6,000–100,000 kWh consumers plus §14a
controllable devices), from a survey of 813 primary metering operators. ~2 million units were added in 2025
versus ~540,000 in 2024. In **March 2026 BNetzA opened 77 proceedings** against metering operators that had
not met the statutory 20% quota for mandatory cases by end-2025, after repeated warnings; fines are possible
and more proceedings were announced. **§41a EnWG**: since 1 January 2025 *every* supplier (not only those
with >100,000 customers, a threshold removed by the GNDEW) must offer a dynamic tariff to any customer who
has an iMSys, and must offer it unbundled from network use/metering if the customer arranges those
separately. **§14a Modul 3** (time-variable grid fees) has been a **mandatory offer by DSOs since 1 April
2025**, only in combination with Modul 1 and only where a fully functional iMSys is installed — so the
supply constraint is the same meter. **Solarspitzengesetz** (in force 25 Feb 2025): new PV ≥2 kW commissioned
from 25 Feb 2025 may feed in only **60% of installed capacity** until an iMSys (and, from 7 kW, a control
box) is installed; once the smart meter is in, **no feed-in remuneration is paid during hours of negative
exchange prices** (the lost hours are compensated by extending the 20-year support period). Pre-existing
plants keep Bestandsschutz.

**Evidence.**
- https://www.energiezukunft.eu/erneuerbare-energien/stromnetze-speicher/aktuelle-zahlen-zum-smart-meter-rollout — 3.09m iMSys, 5.5% overall, 23.3% of mandatory cases at 31 Dec 2025.
- https://bundesnetzagentur.de/1099028 and https://www.pv-magazine.de/2026/03/27/bundesnetzagentur-leitet-77-verfahren-wegen-versaeumnissen-beim-smart-meter-rollout-ein/ — 77 proceedings, March 2026.
- https://www.sma.de/solarspitzengesetz2025 — 60% cap until iMSys/control box; no remuneration in negative-price hours.

**Impact on the opportunity.** Strengthens the "meter concierge / §14a activation service" thesis materially.
The three-law funnel is real, the bottleneck object (iMSys + Steuerbox) is confirmed scarce at 5.5%, and the
BNetzA enforcement action confirms supply will loosen — i.e. the window is real but finite, exactly as T3
argued. Add the Modul 3 date (mandatory offer since 1 Apr 2025) to the sales pitch: the discount exists today
and is being left on the table.

---

## 10. Germany — §42c energy sharing, Gebäudemodernisierungsgesetz, municipal heat plans

**Claim.** §42c EnWG energy sharing permitted from 1 June 2026; Gebäudemodernisierungsgesetz in force
29 July 2026 repealing the 65% renewable heating rule; municipal heat-plan deadlines.

**Verdict: CONFIRMED.**

**Corrected fact.** **§42c EnWG ("gemeinschaftliche Stromnutzung" / energy sharing) applies from
1 June 2026**: renewable electricity can be jointly produced, stored, used and marketed with neighbouring
households, municipalities and SMEs *over the public distribution grid*. All DSOs are legally required to
enable it from that date, though several have said technical implementation will come later. §42c(6) means
the sharing operator is **not** a full supplier — participants must keep a separate supplier for residual
load, must be told so in writing before contracting, and must not be forced to a particular supplier.
The **Gebäudemodernisierungsgesetz (GModG)** replaced the GEG on 10 July 2026, was published in the
Bundesgesetzblatt on **28 July 2026**, and its **main provisions apply from 29 July 2026**, with further
tranches in 2027, 2028 and 2030. It **removes the 65% renewable-energy requirement for new heating systems**
and the operating bans on oil and gas boilers, replacing them with a "Bio-Treppe" blending quota from 2029
(10% 2029, 15% 2030, 30% 2035, 60% 2040) and adjusting landlord/tenant CO₂ cost splitting.
**Municipal heat planning (WPG, in force 1 Jan 2024)**: municipalities >100,000 inhabitants by **30 June
2026**, all others by **30 June 2028**; ~10,700 municipalities in scope. Execution is behind: end-2025 only
1,359 municipalities (13%) had a finished plan (29% of the population) and 38 of 83 large cities; at end
April 2026, 36 of 80 large cities still had no plan two months before the deadline.

**Evidence.**
- https://www.ffe.de/en/publications/energy-sharing-under-%C2%A7-42c-enwg-a-legislative-milestone-framework-conditions-and-next-steps/ — §42c from 1 June 2026.
- https://www.pv-magazine.de/2026/07/28/gebaeudemodernisierungsgesetz-tritt-ab-29-juli-in-kraft/ — BGBl 28 July 2026, main rules from 29 July 2026.
- https://www.zfk.de/energie/waermewende/kommunale-waermeplanung-frist-grossstaedte-juni-2026 — 30 June 2026 / 30 June 2028 deadlines and the large-city backlog.

**Impact on the opportunity.** Mixed but net positive. §42c is a genuinely new, dated market (community
energy administration, metering and billing for sharing groups) with DSOs admitting they are not ready —
the classic integrator gap. The GModG *removes* a mandate, which weakens any "heat-pump compliance" thesis
and strengthens the "heat pumps must now win on operating cost" argument used in claim 12 — i.e. it pushes
value from compliance services toward performance/economics services.

---

## 11. Spain — RDL 7/2026, 5 km self-consumption radius, gestor de autoconsumo

**Claim.** RDL 7/2026 (March 2026): collective self-consumption radius raised to 5 km, new "gestor de
autoconsumo" role.

**Verdict: CONFIRMED.**

**Corrected fact.** **Real Decreto-ley 7/2026 of 20 March 2026**, approving the Plan Integral de Respuesta
a la Crisis en Oriente Medio, entered into force **22 March 2026**. It raises the collective
self-consumption proximity radius from 2 km to **5 km** (PV or wind installations up to **5 MW** located
less than 5,000 m from associated consumers count as "nearby installations connected through the network"),
and it creates the figure of the **gestor de autoconsumo** in the Ley del Sector Eléctrico — a natural or
legal person authorised to represent the associated consumers and carry out the administrative management
(sharing coefficients, agreements with distributors) on their behalf. It also extends IRPF deductions to
31 Dec 2026 and creates Renewable Energy Acceleration Zones (ZAR) and storage measures.

**Evidence.**
- https://www.osborneclarke.com/insights/royal-decree-law-72026-new-regulatory-and-fiscal-framework-energy-spain — RDL 7/2026 of 20 March, scope.
- https://www.energias-renovables.com/autoconsumo/el-gobierno-ampl-a-hasta-los-5-20260323 — radius extended to 5 km.
- https://fotovol.com/ayudas-normativa/real-decreto-ley-7-2026-autoconsumo/ — creation of the gestor de autoconsumo.

**Impact on the opportunity.** Strengthens the "Spanish gestor de autoconsumo as a service" runner-up in T3
considerably: the law does not merely permit the role, it *names* it, which is the difference between selling
a service and selling a regulated function. The 5 km radius multiplies the addressable pool of sharable
rooftops per installation by roughly 6× on area.

---

## 12. Heat pumps — EHPA 2025, Germany, Q1 2026, Fraunhofer JAZ, UK BUS

**Claim.** EHPA 2025 sales +10% across 16 countries, Germany +50% and 50% share of new heating systems;
Q1 2026 +17%; Fraunhofer field JAZ range 2.6–4.9 for the same unit type; UK Boiler Upgrade Scheme
£7,500/£9,000 and MCS-installer rule from April 2026.

**Verdict: PARTLY — all directionally right; Germany's growth and the £9,000 grant need correcting.**

**Corrected fact.**
- **EHPA 2025: +10.3% across 16 countries**, ~2.62 million residential units (2.38m in 2024), ~28 million
  installed in Europe. 12 of 16 countries grew; Austria, France, Norway and Poland fell. UK +27% to 125,000.
- **Germany: +55%, not +50% — 299,000 heat pumps sold in 2025** (BDH), the best-selling heating technology
  in Germany for the first time, out of ~616,000 total heat generators (a market down 14%). That is ~48–49%
  share — "almost half", so "50% share" is a fair rounding but "+50%" understates growth.
- **Q1 2026: +17%**, ~575,000 units across **11** countries (494,000 in Q1 2025). EHPA attributes the jump to
  gas and oil price spikes after the closure of the Strait of Hormuz in March 2026. Germany +34% (83,258),
  Finland +48%, Austria −30%.
- **Fraunhofer ISE field study: confirmed.** 77 heat pumps in 1–3-family homes measured over four years;
  **air/water units ranged JAZ 2.6 to 4.9 with a 3.4 average**; ground-source averaged 4.3 (range 3.6–5.4);
  CO₂ 64% below gas heating in 2024 using time-varying factors. So the ~2× spread within one technology type
  is real.
- **UK BUS: £7,500 is the standard grant.** The £9,000 figure is **not** a general uplift: from **21 July
  2026** it is a temporary 20% uplift only for England-and-Wales homes off the mains gas grid replacing oil
  or LPG heating. Also £2,500 for air-to-air, £5,000 for rural biomass. The **Boiler Upgrade Scheme (England
  and Wales) (Amendment) Regulations 2026 came into force 28 April 2026**: MCS certification is now on a
  statutory footing (only MCS-certified installers can claim, "equivalent scheme" references removed), the
  EPC precondition is dropped, air-to-air heat pumps are added, and the scheme is extended to 2030
  (£295m in 2025/26; ~£2.7bn envelope).

**Evidence.**
- https://www.pv-magazine.com/2026/03/23/european-residential-heat-pump-sales-increased-in-2025/ — +10.3% across 16 countries, 2.62m units.
- https://www.ise.fraunhofer.de/content/dam/ise/de/documents/presseinformationen/2025/3025_ISE_PI_Waermepumpen-heizen-auch-im-Altbau-klimafreundlich.pdf — 77 units, air/water JAZ 2.6–4.9, average 3.4.
- https://www.pv-magazine.com/2026/05/04/heat-pump-sales-rise-17-across-europe-in-q1-as-energy-prices-surge/ — +17% Q1 2026, ~575,000 units, 11 countries.
- https://mcscertified.com/mcs-welcomes-changes-to-boiler-upgrade-scheme/ — MCS on a statutory footing, amendment regulations in force 28 April 2026.

**Impact on the opportunity.** Strengthens the "independent heat-pump performance verification" thesis: the
Fraunhofer 2.6–4.9 spread is the single best piece of evidence for it and it survives verification intact,
and the UK's MCS-only rule plus the growing installed base give a channel. One caution for go-to-market: the
Q1 2026 surge is partly an energy-price shock, not a structural trend, so do not size the market off it.

---

## 13. France — DPE rental bans, 2026 DPE reform, loi APER carports

**Claim.** DPE G rentals banned since 1 Jan 2025, F from 1 Jan 2028, E from 2034; 2026 DPE reform
reclassifying ~850,000 homes; approx. 1.2M F-rated homes in private rental; solar carport obligation
(loi APER) dates 1 July 2026 / 2028 and the Nov 2025 amendment.

**Verdict: PARTLY — the ban calendar and the reform are right; the "1.2M F-rated private rentals" figure is wrong.**

**Corrected fact.**
- **Rental bans: G since 1 Jan 2025, F from 1 Jan 2028, E from 1 Jan 2034** (mainland). The DROM calendar is
  shifted: G 2028, F 2031, E 2034. Confirmed, no postponement as of Sept 2026.
- **2026 DPE reform: confirmed.** Arrêté of 13 August 2025, applicable **1 January 2026**, lowers the
  primary-energy conversion coefficient for electricity from **2.3 to 1.9** (aligning with the EED value).
  Government estimate: **~850,000 F/G dwellings reclassified without works**, out of ~5.8 million "passoires"
  in the whole stock; only electrically heated dwellings are affected. It is contested (FNAIM wanted 1.5;
  CLCV and 16 NGOs opposed).
- **CORRECTED — "~1.2 M F-rated homes in the private rental stock" is not supported.** The nearest official
  figure (SDES/ONRE, stock at 1 Jan 2025) is **1,147,000 F *and* G dwellings in the private rental stock
  (13.8%)** — 694,000 flats (12.0%) and 453,000 houses (18.1%). So ~1.15m is F+G combined *before* the 2026
  recalculation, and the post-reform F-only pool is materially smaller. Use "roughly 1.1m F+G private rentals
  at Jan 2025, shrinking after the 1 Jan 2026 recalculation" and stop quoting 1.2m F-rated.
- **Loi APER carports: confirmed with detail.** Law 2023-175 of 10 March 2023: outdoor car parks >10,000 m²
  from **1 July 2026**; 1,500–10,000 m² from **1 July 2028**; at least 50% of the parking area shaded with
  ≥35% of that under PV canopies; penalties €40,000/yr (>10,000 m²) and €20,000/yr (smaller). The **November
  2025 amendment (loi 2025-1129)** lets owners of >1,500 m² car parks combine PV canopies with vegetation and
  other renewable devices to meet the coverage duty, and allows a deferral to 1 January 2028 for large car
  parks that show a signed commitment contract with a deposit by 30 June 2026 and a purchase order by
  31 December 2026.

**Evidence.**
- https://copropriete.hellio.com/blog/actualites/interdiction-location-dpe-f-g — G 2025 / F 2028 / E 2034 calendar.
- https://www.batiweb.com/actualites/renovation-energetique/reforme-dpe-2026-coefficient-electricite-850000-logements-reclasses-47101 — coefficient 2.3 → 1.9, ~850,000 reclassified.
- https://portail.documentation.developpement-durable.gouv.fr/pub/MPDOUV00267451-parc-logements-par-classe-performance-energetique.html — 1,147,000 F+G in the private rental stock at 1 Jan 2025 (13.8%).
- https://www.tennaxia.com/blog/nouvelles-modalites-le-point-sur-la-loi-aper-2026 — 1 July 2026 / 1 July 2028 and the 2025-1129 flexibilities.

**Impact on the opportunity.** Weakens the sizing but not the thesis - *and see addendum 13, which puts the
2028 ban itself in doubt via the Relance logement bill already adopted by the Senate.* "DPE class arbitrage for F-rated
rentals before 2028" remains a real, dated, owner-identifiable market — just about one million F+G units
before the 2026 recalculation, not 1.2m F alone, and shrinking. The loi APER correction actually *creates*
a second wedge: the November 2025 deferral requires a signed contract with a deposit by 30 June 2026 and an
order by 31 Dec 2026, so 2026 is a hard-deadline year for large car-park owners.

---

## 14. EU Machinery Regulation 2023/1230 and the machine-learning clause

**Claim.** Applies 20 Jan 2027; machinery with self-evolving ML behaviour listed as high-risk requiring
third-party conformity assessment.

**Verdict: CONFIRMED** (with an important Digital-Omnibus overlay).

**Corrected fact.** Regulation (EU) 2023/1230 replaces Directive 2006/42/EC and applies from **20 January
2027**. Annex I is split into Part A (mandatory notified-body conformity assessment, no self-certification
route even with harmonised standards) and Part B. **Part A has six categories, two of them new and
AI-specific**: (5) "safety components with fully or partially self-evolving behaviour using machine learning
approaches ensuring safety functions" and (6) machinery embedding such systems. So a learned policy in a
safety function does force a notified body from 20 Jan 2027. **New since the raw report:** Reg. (EU)
2026/1744 (the AI Omnibus) also amends 2023/1230 — the technical requirements for high-risk AI performing
safety functions are being moved into the Machinery Regulation itself rather than applied through the AI Act,
the Commission must adopt delegated acts amending Annex III with AI-specific health-and-safety requirements
by 2 August 2028, and the AI Act's Annex I product-embedded high-risk duties now start 2 Aug 2028 (was
2 Aug 2027). Ergonomics requirement 1.1.6 now explicitly addresses operator interaction with self-evolving
machinery.

**Evidence.**
- https://digital.nemko.com/regulations/eu-machinery-regulation — 20 Jan 2027; Part A items 5 and 6; no self-certification.
- https://www.bakermckenzie.com/en/insight/publications/resources/product-risk-radar-articles/machinery-regulation — Annex I Part A/Part B structure.
- https://eurogip.fr/en/machinery-regulation-2023-1230-what-the-digital-omnibus-on-ai-changes/ — AI technical requirements folded into the Machinery Regulation; delegated acts by 2 Aug 2028.

**Impact on the opportunity.** Strengthens the "cell compliance pack for small integrators" thesis and makes
its timing cleaner: the Machinery Regulation deadline (20 Jan 2027) did **not** slip with the AI Act, so an
integrator putting a learned policy into a safety function faces a notified body 16 months *before* the AI
Act's own Annex I duties bite. That divergence is itself a saleable insight, and few advisers have it right.

---

## 15. EU aerial spraying by drone, and France

**Claim.** Council position 27 May 2026 on the Food & Feed Safety Omnibus allowing drone exemptions via
delegated act (30-month window); France Loi Duplomb 2025 drone provisions.

**Verdict: PARTLY — the EU half is confirmed; the French attribution is wrong, and the real French position is better than claimed.**

**Corrected fact.**
- **EU: confirmed.** The Council agreed its negotiating position on the food-and-feed-safety ("Omnibus X")
  package on **27 May 2026**. It keeps the existing derogation from the aerial-spraying ban for special cases
  and adds a derogation for **certain drone types even where the special-case conditions are not met**, with
  a **30-month window for the Commission to adopt the delegated act** identifying which drone types qualify.
  EFSA's mandate is extended to cover both the products sprayable by drone and the drone types, conditions of
  use and risks. **Transitional measures let member states authorise drone use before the delegated act**,
  provided existing aerial-spraying conditions are met and the Commission and EFSA are notified within 30
  days of each approval. Trilogues still to conclude.
- **CORRECTED on France.** The drone-spraying framework is **not** the loi Duplomb. It is **loi n° 2025-365
  of 23 April 2025** ("améliorer le traitement des maladies affectant les cultures végétales à l'aide
  d'aéronefs télépilotés"), which allows drone application of biocontrol, low-risk and organic-compatible
  products on parcels with ≥20% slope, banana plantations and ground-trained rootstock mother vines, plus
  up-to-three-year trial programmes elsewhere. **The loi Duplomb is loi n° 2025-794 of 11 August 2025 — not
  2025-746 — and its Article 8, which would have widened drone spraying, was struck down by the Conseil
  constitutionnel on 7 August 2025 (décision n° 2025-891 DC) as a "cavalier législatif"** (Article 2 on
  acetamiprid was struck down on environmental-charter grounds). So citing the Duplomb law as the basis for
  drone spraying is doubly wrong.
- **Better news for the thesis:** the French implementing texts are now published — **décret n° 2026-270 of
  14 April 2026** (conditions for applying plant-protection products by unmanned aircraft), **arrêté of
  19 May 2026** approving a list of **~150 products** sprayable by drone, **décret n° 2026-422 of 29 May
  2026** and an **arrêté of 29 May 2026** on trial programmes, published in the Journal officiel on
  **31 May 2026**. France is operational now, not "from 2027".

**Evidence.**
- https://www.consilium.europa.eu/en/press/press-releases/2026/05/27/council-agrees-position-to-simplify-and-strengthen-food-and-feed-safety-requirements/ — Council position, drone derogation, 30-month delegated-act window, transitional notification.
- https://www.conseil-constitutionnel.fr/decision/2025/2025891DC.htm — Article 8 (drone spraying) censured as a legislative rider, 7 August 2025.
- https://www.pleinchamp.com/actualite/la-pulverisation-par-drone-prend-son-envol and https://agriculture.gouv.fr/pulverisation-par-voie-aerienne-des-produits-phytopharmaceutiques — décret 2026-270, arrêté 19 May 2026 (~150 products), JO 31 May 2026.

**Impact on the opportunity.** Net strengthens the "drone-spraying operations, France-first" thesis and moves
the start date forward by a year: the product list and the decree exist, so revenue can start in the 2026–27
season rather than 2027. But the report's legal citation must be fixed before it is shown to any French
agronomist or lawyer — the Duplomb article was censured, which is common knowledge in that industry.

---

## 16. Counter-drone — 2025 airport incidents, DLR count, who may mitigate

**Claim.** Copenhagen airport closure 22 Sept 2025, Munich closures early Oct 2025, Brussels Nov 2025; DLR
count of 116 incidents at German airports in 2025; who may legally mitigate drones in DE/NL/BE/DK (police only?).

**Verdict: CONFIRMED, but the legal-mitigation picture changed in 2026 and needs updating.**

**Corrected fact.**
- **Copenhagen: 22 September 2025**, closed ~4 hours from about 20:26 local after multiple large drones flown
  in deliberate patterns; Oslo the same night; Aalborg closed again within the week. **Munich: 2–3 October
  2025**, all movements suspended overnight (17 cancellations, 15 diversions, ~3,000 passengers), then a
  second shutdown within 24 hours. **Brussels/Liège: 4–5 November 2025**, ~80 flights halted at Brussels;
  Belgium recorded 10 disruptive incidents in the eight days 2–9 November 2025.
- **DLR: confirmed and sharper.** From an LBA dataset of **226 reported drone incidents in 2025**, DLR
  identified **116 relevant disruption cases at 25 commercial airports**, with minimum operational damage of
  ~€60 million, rising to **up to €160 million** including network effects and cancellations; ~70% of the
  ~200 drone-related diversions were at large hubs; worst events were Munich (October) and Frankfurt (July).
- **Mitigation law — updated.** The general rule holds: across the EU, operating a jammer without state or
  law-enforcement authority is unlawful, so a private site's legal options are detection, documentation and
  handover. But two 2026 changes matter: **Germany** amended the Luftsicherheitsgesetz (Bundestag 26 Feb
  2026, in force 6 March 2026) giving the **Bundespolizei nationwide responsibility for drone detection and
  defence at airports** and adding **§15a** permitting the **Bundeswehr** to use armed means against
  unmanned aircraft at Länder request in severe cases; **Belgium's** Council of Ministers approved a draft
  law on **12 June 2026** that would, for the first time, let **non-government critical-infrastructure
  operators** neutralise drones, subject to BIPT authorisation, a case-by-case risk assessment and reporting
  within two hours. In the **Netherlands**, a March 2026 policy framework clarified (rather than expanded)
  police powers to disrupt, take over or shoot down drones under the Politiewet 2012, and from **1 July 2026**
  the prison service **DJI** may itself disable or jam drones around high-security prisons.
- Not verified: a specific Danish statutory provision on private mitigation.

**Evidence.**
- https://www.dlr.de/de/aktuelles/nachrichten/2026/millionenkosten-durch-drohnenvorfaelle-an-deutschen-flughaefen-in-2025 — 226 reports → 116 relevant cases at 25 airports; €60–160m.
- https://www.bundestag.de/dokumente/textarchiv/2026/kw09-de-luftsicherheitsgesetz-1140448 — LuftSiG amendment, Bundespolizei/Bundeswehr powers.
- https://www.skeydrone.aero/belgium-expands-c-uas-use/ — Belgian draft law of 12 June 2026 for critical-infrastructure operators, BIPT authorisation, 2-hour reporting.
- https://www.rijksoverheid.nl/actueel/nieuws/2026/06/29/extra-bevoegdheid-om-drones-te-bestrijden-rondom-zwaar-beveiligde-gevangenissen — DJI drone-mitigation power from 1 July 2026.

**Impact on the opportunity.** Strengthens the "tier-2 detection-as-a-service" thesis on demand (the DLR cost
figures are a ready-made ROI argument for stadium/port/data-centre buyers) and mostly preserves the legal
premise. But the premise is eroding at the edges: if the Belgian bill passes, critical-infrastructure
operators there can buy mitigation, which invites the incumbent vendors down-market. Build detection +
evidence + police-liaison now, and design for a future in which a licensed mitigation partner is bolted on.

---

## 17. AR/smart glasses — Meta Ray-Ban Display, Even Realities, Android XR

**Claim.** Meta Ray-Ban Display not sold in the EU as of Sept 2026 and reasons; Even Realities G2 price €699
and Even Hub launch March 2026; Android XR / Xreal Aura timing.

**Verdict: PARTLY — the Meta and price claims hold; Even Hub is April, and Aura had not shipped as of Sept 2026.**

**Corrected fact.** **Meta Ray-Ban Display: confirmed not on sale in the EU.** On sale in the US from
30 September 2025; the planned January 2026 expansion to the UK, France, Italy and Canada was paused
(CNBC, 6 Jan 2026) on inventory grounds; Bloomberg reported on **25 March 2026** that it is being withheld
from the EU over the **battery removability rule applying 18 Feb 2027**, restrictions on its AI features, and
waveguide supply constraints, with Meta seeking a wearables exemption from the Commission, so far
unsuccessfully. No new international date announced as of Sept 2026.
**Even Realities G2: €699 confirmed** ($599 / £599 / €699 / AU$649). **Even Hub was announced in late March
2026 and became available on 3 April 2026** with ~50 apps — so "launched March 2026" is a month early; call
it "announced March, shipped 3 April 2026".
**Xreal Aura (Android XR, Snapdragon Reality Elite, Gemini): not yet shipped.** Reservations opened
16 June 2026 ($99 deposit for $199 credit; $299 tier for the first 2,000 units), with a **fall 2026** launch
window and a stated retail ceiling of **under $1,500** for the base model; announced launch markets are the
US, UK, Canada, South Korea and Japan, with **European markets "soon after"** — i.e. the EU is again a
second wave.

**Evidence.**
- https://www.bloomberg.com/news/articles/2026-03-25/meta-s-new-display-glasses-withheld-from-eu-over-battery-rules-supply-shortages — reasons for EU withholding.
- https://www.digitaltrends.com/wearables/even-realities-launches-even-hub-to-turn-g2-smart-glasses-into-a-full-app-ecosystem/ — Even Hub available 3 April 2026, ~50 apps.
- https://roadtovr.com/xreal-aura-release-date-price-1500/ — fall 2026 window, under $1,500, EU "soon after".

**Impact on the opportunity.** Strengthens the "EU wearables lag" reading: two of the three flagship
display-glasses launches of 2025–26 reach Europe late or not at all, and in Meta's case the stated cause is
EU product law. That is a durable structural gap (EU-specific compliance/importation/behaviour), not a
one-off. Weakens anything that assumed an installed base of display glasses in the EU during 2026 — there
isn't one.

---

## 18. Cheap robotics hardware price points

**Claim.** Unitree R1 $5,900 / R1 EDU $10,500; G1 $13,500–16,000; SO-101 arm cost; Jetson Orin Nano Super
$249; Livox Mid-360 $749.

**Verdict: PARTLY — four of five confirmed; the Mid-360 price is a reseller price, not list.**

**Corrected fact.**
- **Unitree R1 $5,900** (R1 Air $4,900) direct — confirmed; the headline units are not programmable (fixed
  fists, no SDK). **R1 EDU $10,500** on Unitree's own shop — confirmed; grey-market AliExpress listings from
  ~$6,800 with deliveries from 30 June 2026.
- **Unitree G1: $13,500 official** on Unitree's site (checked July 2026); street/dealer prices $13,500–19,000
  depending on configuration and channel; **EDU configurations with dexterous hands from $43,900**. The
  report's "$13,500–16,000" is the right order of magnitude for the base unit through EU dealers but should
  say "official $13,500; EU dealer channel materially higher".
- **SO-101: confirmed as a range, not a point.** ~$100 for the bare-bones self-sourced build, ~$199–220 for
  the motor kit plus ~$35 of printed parts, up to ~$500 assembled/imported; 3–4 hours to build; natively
  supported by LeRobot.
- **Jetson Orin Nano Super: $249 confirmed** at NVIDIA list for 67 TOPS / 102 GB/s (the 1.7× uplift came via
  the JetPack 6.2 power mode). Third-party listings routinely exceed list — check live price.
- **CORRECTED — Livox Mid-360: list price is $979** on Livox's own site, not $749. $749 is a US reseller
  price; AliExpress grey-market listings run $480–550 and eBay ~$700. Livox has also since introduced a
  Mid-360S variant.

**Evidence.**
- https://blog.robozaps.com/b/unitree-r1-review and https://blog.robozaps.com/b/unitree-g1-review — R1 $5,900 / R1 EDU $10,500 / G1 $13,500.
- https://www.electronics-lab.com/exploring-the-nvidia-jetson-orin-nano-super-developer-kit-with-67-tops-ai-performance-at-just-249/ — $249 / 67 TOPS.
- https://www.livoxtech.com/mid-360 — official Mid-360 pricing (~$979), plus the Mid-360S listing.

**Impact on the opportunity.** Essentially neutral. The "capable hardware is a line item, not a capex
decision" premise survives — a programmable humanoid at $10.5k and a trainable arm at $130–500 in parts are
confirmed. The LiDAR correction raises a small-rig BOM by ~$230 per unit, which matters only for the
scan-services thesis's unit economics, not its viability. Do not quote $749 as list.

---

## 19. Bike-mechanic shortage and EN 15194

**Claim.** Shimano bike-mechanic shortage investigation 2025 and the "72% of shops >3 weeks wait" figure;
EN 15194:2017+A1:2024 mandatory from 1 Jan 2026.

**Verdict: PARTLY — the shortage is real and documented; the 72% figure is weakly sourced and the standard date is wrong.**

**Corrected fact.**
- **Shimano: confirmed.** Shimano Europe launched a European call for evidence, "Nextgen Mechanics: Advancing
  Cycle Mechanic Standards & Careers Together", on **30 June 2025**, citing a "critical and worsening shortage
  of skilled bicycle mechanics" as experienced mechanics leave and are replaced by untrained or uncertified
  staff. Its **State of the Nation 2026** report (25,000 respondents, 25 countries) found **~212 million people
  hit maintenance barriers and ~121 million Europeans cycle less** because of difficulty accessing repair.
  The published breakdown of those barriers is **20.3% high cost, 15.3% no local shop or limited opening
  hours, 11.8% long workshop lead times**; one in five shifted to other transport and 16.4% stopped cycling.
- **UNVERIFIED — the "72% of independent shops report >3-week waits for motor/battery repairs" figure.** The
  only source found is a 2025 trade blog by a bike-shop software vendor (hubtiger.com) citing an unnamed
  "2024 survey"; it does not appear in Shimano's own material or in any primary survey. Do not use it as
  evidence; use Shimano's 27% / 121m figures instead.
- **CORRECTED on the standard.** The amended standard is **EN 15194:2017+A1:2023** (not A1:2024). It was cited
  in the Official Journal on **15 May 2024**. The Commission then **extended the coexistence/transition period
  from 23 August 2025 to 15 May 2026**. **From 15 May 2026** — not 1 January 2026 — only EN 15194:2017+A1:2023
  gives presumption of conformity for EPACs, and within it compliance with **EN 50604-1+A1** for the battery
  becomes mandatory (in the 2017 base version battery safety was only a note, not a requirement).

**Evidence.**
- https://bikebiz.com/shimano-launches-european-call-for-evidence-to-tackle-urgent-bicycle-mechanic-shortage/ — Shimano call for evidence, 30 June 2025.
- https://bike.shimano.com/stories/article/state-of-the-nation-2026.html — 121m cycling less; 27% cite waiting times.
- https://leva-eu.com/understanding-en-50604-battery-standard-its-relation-to-en-15194-machinery-directive/ and https://leva-eu.com/en-15194-after-15-may-can-you-still-sell-your-epacs/ — OJ citation 15 May 2024; transition extended to 15 May 2026; EN 50604-1+A1 mandatory.

**Impact on the opportunity.** Neutral-to-strengthening on the "e-bike battery health certificate + mobile
diagnostics" thesis, but the evidence base must be rebuilt. The demand-side argument is stronger with
Shimano's own numbers than with the unsourced 72%. The standard correction actually helps: the battery-safety
step-up (EN 50604-1+A1) took effect **15 May 2026**, i.e. four months ago, and separates pre- and post-May-2026
batteries — a natural reason for a second-hand market to want a certificate.

---

## 20. European Accessibility Act enforcement in 2026

**Claim.** Sweden PTS audit of 200 e-commerce sites; German MLBF automated scanning from Q3 2026; first
French lawsuits Nov 2025; "97% of e-commerce sites non-compliant" source quality.

**Verdict: PARTLY — Germany and France confirmed; the Swedish number is wrong by an order of magnitude.**

**Corrected fact.**
- **CORRECTED — Sweden.** PTS opened planned supervision of e-commerce services under the tillgänglighetslagen
  (LPTT, in force 28 June 2025) in stages: **28 supervision cases in total**, the most recent tranche being
  **11 more services in 2026** (Ellos, Biltema, KappAhl, Apotea, Åhléns, MQ, Mathem, Apotek Hjärtat, Kronans
  Apotek, Hemköp, Coop). The audit covers websites only, not apps, and runs through 2025–2026. **It is 28
  cases, not 200 sites.**
- **Germany: confirmed.** The MLBF (Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten
  und Dienstleistungen, Magdeburg) adopted its market-surveillance strategies on **29 January 2026**, entered
  an active control phase in early 2026, and **adds automated scanning tools from Q3 2026** that can check
  thousands of shops for obvious barriers; it had received ~700 reports by June 2026. Note the MLBF
  *coordinates* — enforcement power sits with the Länder authorities. German fines: up to €100,000 for serious
  and €10,000 for minor breaches.
- **France: confirmed.** ApiDV and Droit Pluriel, with the Intérêt à Agir legal collective, served formal
  notice on Auchan, Carrefour, Leclerc and Picard in **July 2025** (nine days after the EAA applied in France);
  when that went unanswered they filed an urgent **référé in November 2025** — described by counsel as the
  first private-sector digital-accessibility court action in Europe.
- **"97% of e-commerce non-compliant": weak but directionally corroborated.** The figure traces to the
  *Accessibility Foundation Benchmark 2025*, a scan of **200 European websites**, relayed by a statistics
  aggregator. Stronger citations for the same point: **Baymard** (94% of 33 top-grossing e-commerce sites fail
  WCAG 2.1 AA) and **WebAIM Million 2025** (95.8% of the top 1m homepages have detectable WCAG failures).
  Prefer WebAIM/Baymard; drop the 97%.

**Evidence.**
- https://pts.se/nyheter-och-pressmeddelanden/pts-granskar-ytterligare-11-e-handelstjansters-tillganglighet/ — 11 further cases, 28 in total.
- https://marcus-herrmann.com/blog/mlbf-verraet-wie-sie-pruefen-will — MLBF surveillance strategy of 29 Jan 2026, automated preliminary checks.
- https://testparty.ai/blog/first-european-accessibility-act-lawsuits-france-2025 — July 2025 formal notices, November 2025 court filing against four retailers.

**Impact on the opportunity.** Mostly preserved and in one respect sharpened. Enforcement is real (Germany's
automated scanning from Q3 2026 is *now*, and the French litigation route is live), which is what the
"remediation with Abmahnung warranty" and "accessible-document rendering API" theses need. But the Swedish
"200 shops" line was the strongest-sounding number in the report and it is false by ~7×; replace it with the
German automated-scanning + 700-complaints figure, which is better evidence anyway.

---

## 21. E-invoicing mandates — BE, FR, DE, ES

**Claim.** Belgium B2B mandate 1 Jan 2026 with fines from April 2026; France all businesses must receive from
1 Sept 2026 and 149 plateformes agréées; Germany issuing 1 Jan 2027 (>€800k) and 1 Jan 2028 all; Spain
Verifactu 1 Jan 2027 / 1 Jul 2027.

**Verdict: CONFIRMED** (all four).

**Corrected fact.**
- **Belgium:** structured B2B e-invoicing over **Peppol BIS Billing 3.0** mandatory from **1 January 2026** for
  every Belgian-established VAT-registered business regardless of size; a tolerance period ran 1 Jan – 31 Mar
  2026 with no sanctions for taxpayers showing reasonable efforts; **penalties apply from 1 April 2026**,
  graduated €1,500 / €3,000 / €5,000 for first, second and third offence within three months. A PDF by email
  is no longer a compliant invoice.
- **France:** from **1 September 2026** every French VAT-registered business must be able to **receive**
  electronic invoices and must have contracted a **Plateforme Agréée** to do so; **149 platforms are approved**
  with ~14 more finalising. (Issuing obligations phase in later by company size.)
- **Germany:** receiving obligation since 1 Jan 2025; **issuing from 1 January 2027** for companies with
  prior-year turnover **above €800,000**, and **from 1 January 2028** for all other domestic B2B; EN 16931
  formats (XRechnung, ZUGFeRD 2.1+); legal basis the Wachstumschancengesetz.
- **Spain:** **Veri*factu was postponed a second time by Real Decreto-ley 15/2025 of 2 December 2025**: now
  **1 January 2027** for corporate-income-tax payers and **1 July 2027** for everyone else (self-employed/IRPF).
  (Previously 1 Jan / 1 Jul 2026 under RD 254/2025, originally July 2025 under RD 1007/2023.) Note Veri*factu
  is the certified-billing-software regime, distinct from the Crea y Crece B2B e-invoicing mandate.

**Evidence.**
- https://www.vertexinc.com/resources/resource-library/belgiums-2026-e-invoicing-regulations-explained-scope-deadlines-and-penalties — 1 Jan 2026, penalties from 1 April 2026, graduated amounts.
- https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees — reception obligation 1 Sept 2026 and the approved-platform list.
- https://sovos.com/regulatory-updates/vat/spain-further-postponement-of-verifactu-deadlines-officially-approved/ — RDL 15/2025, 1 Jan 2027 / 1 Jul 2027.

**Impact on the opportunity.** Strengthens anything timed to the 2026–28 e-invoicing wave, and the Spanish
double postponement is a useful warning: Iberian compliance deadlines have slipped twice, so do not build a
business whose revenue depends on a Spanish date holding. France's "149 approved platforms" is also a
crowding signal — the platform layer is saturated; the gap is upstream (getting small firms onboarded) or
downstream (data), not another PA.

---

## 22. Verification of Payee and the ISO 20022 format cut-over

**Claim.** Verification of Payee mandatory 9 Oct 2025; pain.001.001.03 loses validity Nov 2026; bulk-file opt-out.

**Verdict: PARTLY — VoP and the opt-out are confirmed; the pain.001 date is a scheme/bank cut-over, not a legal expiry.**

**Corrected fact.** Under the Instant Payments Regulation (EU) 2024/886, euro-area PSPs must offer
**Verification of Payee from 9 October 2025**, and the duty covers **all SEPA credit transfers**, not only
instant ones (non-euro-area PSPs follow in 2027). **Bulk-file opt-out: confirmed** — Art. 5c(6) IPR requires
PSPs to give **non-consumer** users the means to opt out of VoP when submitting payment orders as a package;
in practice VoP does not apply by default to batch files and corporates can opt back in. On the format: the
SEPA scheme implementation guidelines now specify **pain.001.001.09** (credit transfers) and
**pain.008.001.08** (direct debits), i.e. the ISO 20022 **2019** message versions, and the coexistence period
with the older 2009 versions (pain.001.001.03 / pain.008.001.02) **ends in November 2026** — the widely cited
operational date is **22 November 2026** for structured or hybrid beneficiary addresses, and German banks
retire the DTAZV legacy format at the same time. So the correct framing is "banks stop accepting
pain.001.001.03 from November 2026 under the scheme rulebooks and their own cut-over plans", not "the format
loses legal validity".

**Evidence.**
- https://www.europeanpaymentscouncil.eu/faq/verification-payee-scheme/rulebook/clarifications-about-provision-vop-services-bulk-files — EPC clarification on VoP for bulk files.
- https://legal.pwc.de/en/news/articles/verification-of-payee-requirements-vop-under-the-eus-instant-payments-regulation-ipr — 9 Oct 2025; Art. 5c(6) non-consumer opt-out.
- https://banking.vision/en/dtazv-iso-20022-corporates-and-sap-customers — pain.001.001.09 / pain.008.001.08 and the November 2026 cut-over (DTAZV retirement).

**Impact on the opportunity.** Strengthens the "payments-data plumbing for mid-market corporates" angle: there
is a real, dated migration (November 2026) that lands on exactly the ERP-bound SMEs least able to do it, and
the VoP bulk opt-out creates a second, subtler product (name-matching for payment files that banks no longer
check by default — i.e. supplier-fraud screening moves to the corporate).

---

## 23. EUDI Wallet, Swiss e-ID, UK DVS

**Claim.** Member states must offer by 24 Dec 2026; relying-party registers required from 24 Dec 2026
(Implementing Reg. 2025/848); acceptance obligation for regulated sectors ~Dec 2027; Switzerland e-ID launch
1 Dec 2026; UK DVS Trust Framework 1.0 Sept 2026.

**Verdict: CONFIRMED** (with a live risk flag on the Swiss date).

**Corrected fact.** Every member state must offer at least one EUDI Wallet by **24 December 2026**.
**Commission Implementing Regulation (EU) 2025/848** (published in the OJ 7 May 2025, in force 20 days later)
**applies from 24 December 2026** and requires member states to run national **wallet-relying-party registers**
with the infrastructure, policies and designated authorities in place by that date; private relying parties
must register in their member state of establishment, stating purpose and the data they will request.
The **acceptance obligation** in **Art. 5f** — for regulated sectors where strong customer authentication is
required (banks, payment institutions, insurers, energy suppliers, telecoms, VLOPs; micro and small
enterprises under 50 staff are out of scope) — falls **36 months after the entry into force of the Art. 5a(23)
and 5c(6) implementing acts, i.e. 24 December 2027**. **Switzerland: e-ID (swiyu) postponed to 1 December
2026** after a Federal Audit Office review flagged unfinished encryption and trust-infrastructure work, with
a public federal register in which verifiers must record their stated purpose before querying data — but as
of mid-2026 further slippage was being reported, so treat 1 Dec 2026 as a target, not a fact. **UK: DVS Trust
Framework 1.0 comes into force 1 September 2026**, conditional on at least one conformity assessment body
being accredited; from then, new services certify against 1.0 only, and existing certified services get
bespoke transition timelines with at least 15 months to uplift (OfDIA/DSIT).

**Evidence.**
- https://docs.igrant.io/regulations/implementing-acts-registration-relying-parties/ — Reg. 2025/848 applies from 24 Dec 2026; national registers required.
- https://identyum.com/eudi-wallet-eidas-2-obliged-entities-2027/ — Art. 5f acceptance obligation by 24 December 2027.
- https://enablingdigitalidentity.blog.gov.uk/2026/06/10/uplift-to-1-0-trust-framework-pathways-and-timelines/ — 1.0 in force 1 September 2026 subject to CAB accreditation; 15-month uplift.
- https://www.biometricupdate.com/202607/switzerland-delays-digital-id-rollout-to-strengthen-trust-infrastructure — Swiss rollout under continued pressure.

**Impact on the opportunity.** Strengthens the "relying-party registration as a service" and "issuer-in-a-box"
theses and gives them a precise clock: registers must exist 24 Dec 2026, acceptance bites 24 Dec 2027, so the
selling window for readiness services is roughly Q4 2026 – 2027. The Swiss slippage is a caution against
building Switzerland-first.

---

## 24. Agentic web — Cloudflare, bot traffic, Shopify MCP, llms.txt

**Claim.** Cloudflare default blocking of AI crawlers on ad-bearing pages from 15 Sept 2026; bots 57.5% of
HTML traffic (June 2026); Shopify opened MCP endpoint to any agent 17 June 2026; llms.txt adoption ~10%.

**Verdict: PARTLY — all four events are real; two need narrowing.**

**Corrected fact.**
- **Cloudflare: narrower than stated.** From **15 September 2026** Cloudflare blocks **mixed-use crawlers**
  (bots that combine search indexing with AI-training collection — e.g. Googlebot, Bingbot, Applebot where
  they don't separate the functions) **by default on ad-supported pages**, and the new default applies to
  **new customers, new sites added by existing customers, and existing free-plan customers**; paid customers
  with existing configurations keep them. Search crawling is still allowed by default; training and agent
  access to ad-bearing pages is not. Cloudflare also renamed "Pay Per Crawl" to "Pay Per Use" and announced
  partnerships (Ceramic.ai, You.com) to pay publishers for content used in search and agent answers.
- **57.5%: confirmed.** Cloudflare CEO Matthew Prince published Cloudflare Radar data on **3 June 2026**
  showing bots at **57.5% of HTML traffic** versus 42.5% human — the first crossover, and roughly 18 months
  earlier than he had predicted. Caveat: Radar covers ~1/5 of websites and measures HTML requests, not sessions.
- **Shopify: confirmed, with the right framing.** The **Spring '26 Edition on 17 June 2026** (150+ updates)
  made agentic commerce available to every developer, so any builder can reach products from millions of
  Shopify merchants across AI surfaces. The Storefront MCP endpoint is `https://{shop}.myshopify.com/api/mcp`;
  the catalog tools moved to the **Universal Commerce Protocol** on 22 April 2026 (unified endpoint
  `https://{shop-domain}/api/ucp/mcp`), with legacy support ending **15 June 2026** — i.e. a UCP migration two
  days before the Spring Edition, which the report misses.
- **llms.txt ~10%: defensible but with a fatal caveat.** June 2026 measurements: **8.7% of the top 1,000
  sites**; **10.13% across an SE Ranking sample of 300,000 domains**; 5.61% of the top 10,000 (up from 1.04%
  in July 2025); 6.3% of 105,002 hotel sites; 7.4% of the Fortune 500 (March 2026). Adoption grew 8.8× in
  twelve months. **But ~97% of published llms.txt files receive zero AI-crawler requests** — publishing one
  is currently a signal nobody reads.

**Evidence.**
- https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/ — 15 Sept 2026 default, mixed-use crawlers, which customers inherit it.
- https://www.techtimes.com/articles/317877/20260605/bot-traffic-passes-humans-online-cloudflare-says-agentic-ai-drove-575-share.htm — 57.5% / 42.5%, 3 June 2026.
- https://shopify.dev/changelog/storefront-catalog-mcp-now-implements-ucp — UCP migration, legacy support to 15 June 2026.
- https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/ — 8.8× growth; 97% of files get zero AI requests.

**Impact on the opportunity.** Mixed. The "agentic commerce plumbing" and "machine-readable storefront" theses
survive and the Shopify/UCP detail actually improves them (there is a *protocol migration* to sell, not just
an endpoint). But the llms.txt caveat is close to fatal for any product whose value proposition is "we write
your llms.txt": 97% of them are never fetched. Sell against the Cloudflare/pay-per-use side (access control
and monetisation of crawl) rather than the volunteer-metadata side.

---

## 25. Vibe-coded app security — Escape.tech scan and Moltbook

**Claim.** Escape.tech scan: 5,600 vibe-coded apps, 2,000+ high-impact vulnerabilities, 400 exposed secrets;
Moltbook incident March 2026.

**Verdict: CONFIRMED, with date and provenance corrections on Moltbook.**

**Corrected fact.** Escape.tech's study scanned **5,600 applications built with vibe-coding tools** and
reported **2,000+ vulnerabilities, 400+ exposed secrets** (API keys, credentials, tokens) **and 175 instances
of exposed PII**, retaining only high-confidence, production-live findings — so it is a verified floor, not a
ceiling. It is vendor-published research (Escape sells scanning), which should be stated when citing it; the
independent corroboration is OX Security's finding that ~62% of AI-built applications ship with critical
vulnerabilities. **Moltbook: the discovery was 1 February 2026, not March.** Wiz found a Supabase database
with public read access and no row-level security behind a hardcoded client-side API key on Moltbook (the
"social network for AI agents"), exposing **~1.5 million plaintext API tokens** (including OpenAI, Anthropic,
AWS, GitHub and Google Cloud credentials), **35,000 email addresses** and private agent messages, enough to
impersonate any agent on the platform. Moltbook patched it ~3 hours after disclosure and no malicious
exploitation was reported. Meta confirmed in March 2026 that it had acquired Moltbook — which is probably the
March event the report half-remembered.

**Evidence.**
- https://escape.tech/blog/methodology-how-we-discovered-vulnerabilities-apps-built-with-vibe-coding/ — 5,600 apps, 2,000+ vulns, 400+ secrets, 175 PII exposures, high-confidence only.
- https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys — Wiz discovery 1 Feb 2026, 1.5m tokens, missing RLS, 3-hour fix.
- https://www.ox.security/blog/vibe-coding-security/ — 62% of AI-built apps ship with critical vulnerabilities.

**Impact on the opportunity.** Strengthens the "security review / continuous scanning for non-developer-built
production apps" thesis, and the Moltbook root cause (missing Supabase row-level security behind a
client-side key) is a specific, teachable, productisable check — arguably the single most valuable line in
T1. Fix the date: citing "March 2026" and "within three days" next to a Wiz report dated 1 February will not
survive a technical reader.

---

## 26. Swiss German ASR

**Claim.** Swiss German ASR honest WER ~25% (arXiv 2606.07608); SwissGPC corpus.

**Verdict: CONFIRMED.**

**Corrected fact.** arXiv **2606.07608**, "Subtitle-Aligned Fine-Tuning of Whisper for Swiss German ASR:
Benchmark Contamination, Convention Mismatch, and an Honest Baseline at 25.6% WER (13.8% cWER)", reports
**25.60% WER on the All Swiss German Dialects Test Set (ASGDTS)** under strictly disjoint train/eval data,
**13.8% canonical WER** and 8.5% bWER once translation ambiguity is accounted for. The paper's own point is
that lower published numbers (Michaud 17.5% via QLoRA on whisper-large-v3-turbo; D'Intino & Hutter 17.1% full
fine-tune; Timmel et al. 12.1%, weights unreleased) are inflated by **benchmark contamination and
transcription-convention mismatch** — which is why the ~25% "honest" figure is the one to plan against.
**SwissGPC v1.0** (the Swiss German Podcasts Corpus, arXiv 2509.19866) is a real, separate resource, alongside
the Swiss Parliaments Corpus (SPC and SPC_R).

**Evidence.**
- https://arxiv.org/html/2606.07608v1 — 25.6% WER honest baseline, 13.8% cWER, contamination analysis.
- https://arxiv.org/html/2509.19866v1 — SwissGPC v1.0, Swiss German Podcasts Corpus.
- https://aclanthology.org/2024.vardial-1.3/ — earlier Whisper-on-Swiss-German evaluation for context.

**Impact on the opportunity.** Strengthens the "Swiss/dialect speech as an unsolved vertical" thesis in the
most useful way: it is not merely that Swiss German is hard, it is that the *published* numbers overstate how
solved it is, so a buyer's procurement benchmark and a vendor's demo will diverge in production. That gap —
honest, contamination-free evaluation on customer data — is itself a small, credible product.

---

## 27. SAP ECC and Business One end-of-maintenance

**Claim.** SAP ECC mainstream maintenance ends 31 Dec 2027; ~40% of ECC customers not live on S/4HANA;
SAP Business One maintenance dates.

**Verdict: PARTLY — the ECC date is right, the migration gap is understated, and the Business One dates are wrong.**

**Corrected fact.** **SAP ECC 6.0 (EHP 6–8) mainstream maintenance ends 31 December 2027**; customers can buy
extended maintenance to **2030** for roughly **+2%** on maintenance fees (and SAP has signalled options
beyond). **The migration gap is far larger than "~40% not live":** only **39% of SAP's ~35,000 ECC customers
had even purchased S/4HANA transition licences by end-2024**, Gartner estimates **~70% of Business Suite
7/ECC customers have yet to migrate**, and Gartner projects **~17,000 holdouts at 2027**; DSAG's investment
report has nearly half of existing customers planning to finish only by end-2030. So the correct statement is
"roughly 60–70% are not yet live on S/4HANA", not 40%. **CORRECTED — SAP Business One: release 10.0 mainstream
maintenance ends 31 December 2026** (not end-2028), with **no extended maintenance**, and **version 11 is
planned for 2027**. Note SAP's convention: end of mainstream maintenance attaches to the *release*, not to the
product.

**Evidence.**
- https://www.ibsolution.com/academy/blog_en/it-modernization-and-innovation/erp-modernization/end-of-maintenance-for-sap-ecc-in-2027-what-companies-can-still-do-now — 31 Dec 2027, extension to 2030 at +2%.
- https://www.savictech.com/insights/ecc-end-of-maintenance-2027/ — 39% had purchased S/4HANA licences by late 2024; Gartner's 70% / 17,000 holdouts.
- https://support.sap.com/en/offerings-programs/support-small-medium-enterprises/business-one/maintenance.html — Business One release maintenance schedule (10.0 to 31 Dec 2026; v11 in 2027).

**Impact on the opportunity.** Strengthens the "SME ERP data-migration" thesis substantially. The buyer pool is
roughly 60–70% of a 35,000-customer base rather than 40%, and — more importantly for a small team — **Business
One 10.0 falls out of mainstream maintenance on 31 December 2026, i.e. in under four months**, with no
extension available and v11 not shipping until 2027. That is a sharper, nearer, SME-sized deadline than the
ECC 2027 cliff the report leads with, and it is aimed exactly at the Mittelstand segment the thesis targets.

---

## 28. Germany EnEfG data-centre waste heat, and the Dutch grid queue

**Claim.** New data centres must reuse 10% waste heat from 1 July 2026, 15% 2027, 20% 2028; TenneT NL queue
212 requests / 38 GW.

**Verdict: CONFIRMED** (with the dates made precise).

**Corrected fact.** **§11 EnEfG**: data centres **commencing operation from 1 July 2026** must achieve a share
of reused energy (ERF) of **at least 10%**; from **1 July 2027**, **15%**; from **1 July 2028**, **20%** — the
thresholds attach to 1 July of each year, not to the calendar year, and the requirement must be met as a
durable annual average **at the latest two years after commissioning**. **TenneT: confirmed and expandable** —
**212 unique requests for offtake capacity totalling ~38 GW**, plus **161 requests / ~34 GW for injection**;
Dutch peak demand is ~19 GW, so the offtake queue alone is about twice national peak load. Liander reports
business connection waits of up to ten years, and congestion is projected to persist to roughly 2030–2036.

**Evidence.**
- https://www.gesetze-im-internet.de/enefg/__11.html — §11 EnEfG waste-heat reuse thresholds by commissioning date.
- https://www.netbeheernederland.nl/artikelen/nieuws/wachtlijsten-groeien-meer-inzet-op-flexibel-gebruik-essentieel — 212 offtake requests / 38 GW, 161 / 34 GW injection.
- https://nltimes.nl/2026/04/29/judge-rules-electricity-grid-haarlemmermeer-full-data-centre-connection-delayed — a court confirming a data centre stays in the queue.

**Impact on the opportunity.** Strengthens the "waste-heat matchmaking / heat-plan brokerage" thesis and gives
it a two-sided market: German operators commissioning from 1 July 2026 legally need an offtaker within two
years, while German municipalities' heat plans (claim 10) were due 30 June 2026 and name the demand. The Dutch
queue is a different, larger opportunity — flexibility and behind-the-meter capacity — but note the 38 GW is
suppressed demand, not a served market.

---

## 29. Pay Transparency Directive transposition

**Claim.** Only SK, IT, LT, MT transposed on time; DE not before 2027; NL 1 Jan 2027.

**Verdict: CONFIRMED, and worth updating with post-deadline movement.**

**Corrected fact.** The transposition deadline was **7 June 2026**. **Only four of 27 member states met it:
Slovakia, Italy, Lithuania and Malta.** Four states have publicly targeted **1 January 2027**: the
**Netherlands, Sweden, Czechia and Denmark**. **Germany will miss it by far** — an expert commission reported
in October 2025, a Referentenentwurf was planned during 2026, and the ministry expects a completed
implementation law with binding rules in **2027**. Movement since the deadline: **Estonia's partial
transposition** was approved by the President on 29 June 2026 and entered into force 13 July 2026; **Greece**
fully transposed via Law 5316, published 6 July 2026; **Lithuania** issued implementing regulations on
17 July 2026, effective 31 July 2026.

**Evidence.**
- https://www.littler.com/news-analysis/asap/did-member-states-meet-deadline-status-implementation-eu-pay-transparency — four member states met the 7 June 2026 deadline.
- https://synd.io/eu-pay-transparency-directive-transposition-tracker/ — NL/SE/CZ/DK at 1 Jan 2027; post-deadline movement.
- https://auren.com/de/blog/entgelttransparenzgesetz-umsetzung-eu-richtlinie-2027/ — German implementation expected 2027.

**Impact on the opportunity.** Strengthens the thesis, but re-times it. The compliance market does not open on
one EU date; it opens country by country across 2026–2028, which favours a product that models **27 divergent
national laws** over one that models "the Directive". Germany — the largest market — is a 2027 sale, not a
2026 one, so a founder needs NL/SE/CZ/DK (1 Jan 2027) as the beachhead.

---

## 30. UK — Online Safety Act fines, MTD for Income Tax, DUAA commencement

**Claim.** Online Safety Act age-assurance fines 2026 (8579 LLC £1.35m, Kick £800k); MTD for Income Tax live
6 April 2026 for >£50k; DUAA Smart Data and DVS commencement dates.

**Verdict: CONFIRMED** (with the add-on penalties and the DUAA dates made precise).

**Corrected fact.** **Ofcom fined 8579 LLC £1.35 million** for failing to operate highly effective age
assurance, **plus £50,000** for failing to respond to a statutory information request, with a **£1,000/day**
continuing penalty until it complies — the largest age-assurance penalty so far. **Kick Online Entertainment SA
was fined £800,000**, plus **£30,000** for the information-request failure and **£200/day** (up to 60 days).
Both flow from the duty that came into force in July 2025, after which Ofcom opened investigations into dozens
of adult sites. **MTD for Income Tax went live on 6 April 2026** for sole traders and landlords with qualifying
income (gross self-employment + gross UK property, before expenses) **above £50,000**; the threshold falls to
**£30,000 in April 2027** and **£20,000 in April 2028**; in-scope taxpayers keep digital records, file
quarterly updates and a Final Declaration instead of a single Self Assessment. **DUAA (Data (Use and Access)
Act 2025)**: **Part 1 (Smart Data) commenced 20 August 2025**; **Part 2 (digital verification services), except
ss. 45–48, commenced 1 December 2025** by the Commencement No. 4 Regulations (SI 2025/1213) — ss. 45–48
(public-authority information sharing with registered DVS providers) were held back.

**Evidence.**
- https://www.ofcom.org.uk/online-safety/protecting-children/ofcom-fines-porn-company-1.35-million-for-not-having-age-checks and https://www.ofcom.org.uk/online-safety/protecting-children/Ofcom-fines-porn-company-800k-for-failing-to-introduce-age-checks — the two fines and the daily penalties.
- https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax — 6 April 2026 / £50,000, then £30,000 and £20,000.
- https://www.legislation.gov.uk/uksi/2025/1213/made — DUAA Part 2 in force 1 December 2025 except ss. 45–48.

**Impact on the opportunity.** Strengthens the UK age-assurance and DVS theses: enforcement is not theoretical
(seven-figure fines plus daily penalties), the statutory DVS register is live, and the Trust Framework 1.0
date (claim 23) gives a certification hook. MTD is a large but crowded market — the interesting residue is the
April 2027 (£30k) and April 2028 (£20k) cohorts, i.e. very small landlords with no accountant, not the 2026 wave.

---

## 31. CSRD Omnibus I

**Claim.** CSRD Omnibus I published OJ 26 Feb 2026 with >1,000 employees and >€450m thresholds and a
value-chain cap.

**Verdict: CONFIRMED.**

**Corrected fact.** **Directive (EU) 2026/470 of 24 February 2026** ("Omnibus I") was **published in the
Official Journal on 26 February 2026** and **entered into force on 18 March 2026**. CSRD scope is cut to
undertakings with **more than 1,000 employees on average AND net turnover above €450 million** at the balance
sheet date; sector-specific standards are dropped, exemptions widened and rights to withhold information
expanded. The **value-chain cap** is real and statutory: an in-scope undertaking **may not require an
undertaking in its value chain with 1,000 employees or fewer to provide more sustainability information than
the content of the voluntary standard (VSME)** when the request is for CSRD purposes — the VSME becomes a
legal ceiling on the trickle-down, though it does not stop a company *asking* for more outside that purpose.
The Commission published additional explanatory material on the value-chain cap on 6 May 2026.

**Evidence.**
- https://www.cov.com/en/news-and-insights/insights/2026/02/eu-csddd-csrd-omnibus-published-in-official-journal-transposition-delegated-acts-and-guidelines-are-next — Directive (EU) 2026/470, OJ 26 Feb 2026, in force 18 March 2026.
- https://accountancyeurope.eu/publications/omnibus-explained-key-changes-to-the-csrd-and-csddd/ — 1,000 employees / €450m thresholds.
- https://finance.ec.europa.eu/news/feedback-sustainability-reporting-standards-additional-explanatory-information-regarding-value-chain-2026-05-06_en — Commission explanatory information on the value-chain cap.

**Impact on the opportunity.** Weakens any CSRD-reporting-services thesis aimed at mid-caps: the scope cut and
the VSME cap together remove most of the coerced demand that made "ESG data collection for suppliers" look
like a market. What survives is narrower and different — helping the ~1,000-employee-and-under suppliers push
back with a VSME-shaped answer instead of bespoke questionnaires.

---

## 32. NIS2 national implementation

**Claim.** Germany NIS2UmsuCG in force 6 Dec 2025; NL Cyberbeveiligingswet 15 Aug 2026; registration counts.

**Verdict: CONFIRMED, and the registration data is better than the report had.**

**Corrected fact.** **Germany:** the NIS2UmsuCG applied **from 6 December 2025 with no transition period**;
the BSI registration portal opened **6 January 2026** and registration was due by **6 March 2026**. Scope grew
from roughly 4,500 KRITIS operators to about **29,000–29,500** essential and important entities (broadly
>€10m turnover or >49 staff in the listed sectors). **Only ~11,500 registered by the 6 March deadline —
about 38.5%** — with important entities the worst performers; the BSI responded not with a formal extension
but with a stated expectation that outstanding registrations be completed **by 31 July 2026**.
**Netherlands:** the **Cyberbeveiligingswet (Cbw)** and the Wet weerbaarheid kritieke entiteiten entered into
force **15 August 2026**, with **no transition period**, replacing the Wbni; it covers **over 8,000
organisations** across 18 sectors, which must register in the NCSC entities register.

**Evidence.**
- https://www.privacyworld.blog/2025/12/germany-implements-nis2-registration-portal-will-open-on-january-6-2026/ — 6 Dec 2025 application, portal 6 Jan 2026, deadline 6 March 2026.
- https://www.security-insider.de/nis-2-registrierung-bsi-portal-frist-abgelaufen-a-2ceb7fa44eb00c5930848ef965765437/ — ~11,500 of ~29,500 registered (38.5%).
- https://www.rijksoverheid.nl/actueel/nieuws/2026/07/07/cyberbeveiligingswet-en-wet-weerbaarheid-kritieke-entiteiten-vanaf-15-augustus-2026-van-kracht — Cbw in force 15 August 2026; >8,000 organisations.

**Impact on the opportunity.** Strengthens it, and points at a sharper wedge than "NIS2 compliance": in
Germany roughly **18,000 in-scope entities did not even register on time**, which is a findable, nameable,
self-selecting population of firms that have not started — and the Dutch law just switched on with no
transition and 8,000 entities. The first product is not a GRC platform; it is "are you in scope, and get
registered", sold in the six months after each national switch-on.

---

## 33. SAFE defence loans and the EIC

**Claim.** SAFE defence loans €150bn; first €38bn approved 11 Feb 2026; EIC opened to dual-use 17 June 2026.

**Verdict: CONFIRMED.**

**Corrected fact.** **SAFE** (Security Action for Europe, Council Regulation adopted 27 May 2025) provides
**€150 billion in loans** for joint defence procurement, with requests open to 31 December 2030. On
**11 February 2026** EU defence ministers approved the first batch of national defence investment plans —
**€38 billion for eight member states** (Belgium, Bulgaria, Denmark, Spain, Croatia, Cyprus, Portugal,
Romania), about a quarter of the envelope — allowing the Commission to sign loan agreements and pay
pre-financing of up to 15%, with money expected to reach recipients from March 2026. **The EIC opened to
defence and dual-use on 17 June 2026** via an amendment to the EIC 2026 work programme: start-ups and SMEs on
dual-use technologies can seek **grants up to €2.5m and equity up to €30m**; **EIC STEP Scale Up (€300m)** opened
to dual-use the same day, and a new **EIC STEP Scale Up Defence call (€100m, up to €30m direct equity)** —
the first EU programme ever to take direct equity in defence companies — opened **30 June 2026** and closes
**28 October 2026**, results early 2027. Eligible areas explicitly include drones and counter-drone.

**Evidence.**
- https://www.consilium.europa.eu/en/policies/safe/ — SAFE €150bn, structure and timetable.
- https://euronews.com/my-europe/2026/02/11/eu-approves-38bn-in-first-defence-investments-under-150bn-safe-scheme — €38bn to eight member states, 11 Feb 2026.
- https://eic.ec.europa.eu/news/european-innovation-council-opens-defence-and-dual-use-technologies-2026-06-17_en — EIC opens to defence and dual-use, 17 June 2026.

**Impact on the opportunity.** Strengthens the counter-drone and dual-use-supplier-compliance theses, and adds
a concrete, dated funding route a solo founder can actually use (grants ≤€2.5m; the defence equity call closes
28 October 2026 — a live deadline while this research is being written).

---

## 34. Neko Health

**Claim.** Neko Health $700M Series C July 2026.

**Verdict: CONFIRMED.**

**Corrected fact.** Neko Health (Daniel Ek and Hjalmar Nilsonne) announced a **$700 million Series C on
15 July 2026** (~€612.7m), led by Lightspeed Venture Partners and co-led by O.G. Venture Partners, with
Atomico, General Catalyst and Lakestar returning and Liberty City Ventures, Positive Sum and BDT & MSD joining.
Reported valuation ~**$7 billion**, up from ~$1.7bn at the $260m Series B in January 2025. Stated use of
proceeds: first US clinics and further market expansion, around the 60-minute non-invasive, radiation-free
body scan.

**Evidence.**
- https://www.nekohealth.com/us/en/press/neko-health-raises-usd700m-series-c-ahead-of-us-launch — company announcement.
- https://techcrunch.com/2026/07/15/daniel-eks-body-scanning-startup-neko-health-raises-another-700m/ — 15 July 2026, $700m.
- https://tech.eu/2026/07/15/neko-health-raises-700m-as-demand-grows-for-preventive-health-scans/ — investors and context.

**Impact on the opportunity.** Neutral-to-cautionary. It confirms consumer preventive-diagnostics demand in
Europe is real and capital is abundant — but $700m at a $7bn valuation, aimed at the US, is precisely the
signal that the *scanning clinic* layer is not a small-team opportunity. The residue for a tiny team is
downstream of the scan (interpretation, follow-up pathways, clinician-side workflow), not the scan itself.

---

## 35. Balkonkraftwerke

**Claim.** 1.32M registered by May 2026; 429,808 added in 2025.

**Verdict: CONFIRMED.**

**Corrected fact.** The Marktstammdatenregister recorded **over 1.32 million plug-in solar devices
(Steckersolargeräte) in operation by May 2026**, with **429,808 added during 2025**; total registered capacity
~**1,381 MWp**, and registrations running at roughly **one every 73 seconds**. By August 2026 the count had
passed **1.3 million+ / ~1.33 million** on the same register. Caveat worth carrying: MaStR counts
*registrations*, and unregistered units are widely believed to be numerous, so this is a floor.

**Evidence.**
- https://www.gfk-solar.de/solaranlagen-photovoltaik-berlin-brandenburg/balkonkraftwerk-karte-deutschland-2026/ — 1.33m MaStR analysis, 2026.
- https://energyload.eu/energiewende/balkon-solar/balkonsolar-2026/ — one new system every 73 seconds; 2025 additions.
- https://www.industriebox.de/2026/08/13/balkonkraftwerk-erreicht-die-millionenmarke-deutlich-ber-1-3-millionen-steckersolargerte-sind-im-marktstammdatenregister-als-in-betrieb-erfasst/ — >1.3m in operation, August 2026.

**Impact on the opportunity.** Strengthens any thesis that treats plug-in solar as an installed base rather
than a product category: 1.3m+ German households now own a grid-connected generator, most with no metering,
no control and — post-Solarspitzengesetz — no economic reason to export at midday. That is the natural first
customer list for plug-in storage, dynamic-tariff switching and the §14a/meter services in claim 9.

---

# Second-pass addenda

*A corroboration round after the claim-by-claim pass. These are material facts found while
double-sourcing the claims above; several change the opportunity read more than the original
correction did. Numbered by claim.*

**1 (AI Act).** The Omnibus also **rewrote Article 4**: AI literacy is now a duty to "take measures to
support the development of" AI literacy, explicitly not a duty to guarantee any individual's level —
an obligation of effort, not result. It **added prohibitions**: AI systems generating non-consensual
intimate imagery ("nudifier" apps) and AI-generated CSAM become prohibited practices **from 2 December
2026**. ([lawandtechnology.eu](https://lawandtechnology.eu/en/ai-literacy-digital-omnibus-article-4-ai-act/),
[White & Case](https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act))
*Read: the AI-literacy-training market just lost its legal teeth; the deepfake/NCII enforcement market gained some.*

**2 (CRA) — the single most useful finding in this verification.** As of **1 September 2026, ENISA's
Single Reporting Platform had no published URL**, ten days before the Article 14 duty starts on
11 September 2026; ENISA has published registration/notification guides (updated 3 and 14 August 2026)
and interface documentation (14 August 2026), but **the SRP will have no API at launch** — all mandatory
reports go through a web portal — and the report format is set by a Commission implementing act that had
not been published as of mid-2026. Also: **open-source stewards are exempt from the Art. 64(3)–(9)
administrative fines under Art. 64(10)** (Art. 64(2) still applies) while still owing a cyber policy,
authority cooperation and Art. 14 reporting from 11 Sept 2026. Notified bodies: still **none in NANDO as
of 9 and 30 August 2026**, against a recital target of "sufficient capacity" by 11 December 2026.
([cyberresilienceact.eu](https://www.cyberresilienceact.eu/news/cra-single-reporting-platform-not-yet-live.html),
[ENISA SRP](https://www.enisa.europa.eu/topics/product-security-and-certification/single-reporting-platform-srp),
[Art. 24 stewards](https://streamlex.eu/articles/cra-en-art-24/))
*Read: strongly strengthens the "vulnerability-handling and ENISA filing desk" wedge — a 24-hour clock,
a portal with no API, no published format, and no notified bodies is exactly the state in which small
manufacturers pay someone else to hold the pen.*

**3 (PLD).** Entry into force **8 December 2024**; Directive 85/374/EEC is **repealed with effect from
9 December 2026** but continues to apply to products placed on the market before that date. Germany
published a draft bill in September 2025 and is expected to transpose in time; **France is expected to be
late**, possibly folding it into a wider civil-liability reform.
([EUR-Lex](https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng),
[Wolf Theiss tracker](https://www.wolftheiss.com/insights/eu-product-liability-directive-tracker-2026/))

**4 (Data Act).** Two things the raw report omits and a builder needs: **Art. 9 compensation** must be
non-discriminatory and reasonable and may include a margin — **except where the recipient is an SME or a
non-profit research organisation, where it is capped at direct costs**; and **Art. 37** requires each
member state to designate competent authorities and a data coordinator, with national penalties up to
**€20m or 4% of worldwide turnover**. ([eu-data-act.com Art. 9](https://www.eu-data-act.com/Data_Act_Article_9.html),
[Kemp IT Law](https://kempitlaw.com/insights/enforcement-and-penalties-under-the-eu-data-act-navigating-the-new-regulatory-landscape/))
*Read: the SME cost-only cap is the business model — a small team can extract connected-product data at
cost, which is exactly what the e-bike battery-certificate thesis (claim 19) depends on.*

**5 (Right to Repair) — number found.** By **early August 2026 only four member states had notified
national measures in the EUR-Lex transposition register: Croatia, Lithuania, Slovakia and Finland.**
Germany's Reparaturgesetz passed the Bundestag on **25 June 2026** (BT-Drs. 21/5923) and took effect at
the end of July. ([Bundestag](https://www.bundestag.de/dokumente/textarchiv/2026/kw26-de-reparatur-1191040),
[Michael Behrens](https://www.michael-behrens-news.de/2026/08/16/eu-reparaturrecht/))

**6 (Batteries) — a second, better gap.** The Commission was **legally required to adopt the battery-passport
access act by 18 August 2026 and did not**; its own timetable puts it in **Q4 2026**. Article 77(1) has no
enabling-act condition, so **the 18 February 2027 passport obligation stands regardless**. The Commission
did publish "Digital Batteries Passport – data points by category" v2.0 on **15 August 2026**.
([battery-tech.net](https://battery-tech.net/why-the-eu-is-about-to-miss-its-own-battery-passport-deadline-while-industrys-stays-fixed/),
[thebatterypass.eu](https://thebatterypass.eu/wp-content/uploads/BatteryPass_Delegated-and-Implementing-Acts-following-Battery-Regulation.pdf))
*Read: obligations fixed, rules late — the classic condition in which an outsourced passport operator
(explicitly allowed by Art. 77(4)) gets hired.*

**7 (EUDR) — correction to my own first-pass note.** The Parliament's 9 July 2025 vote (373–289) against
the country benchmarking was a **non-binding resolution, not an annulment**: **Commission Implementing
Regulation (EU) 2025/1093 of 22 May 2025 remains in force** and the classification stands. Under it,
**51% of importing operators qualify for simplified due diligence**, versus the 20% projected in the
original impact assessment. The postponement instrument is **Regulation (EU) 2025/2650**. A Commission
burden review was due by **30 April 2026**.
([Coolset](https://www.coolset.com/academy/eudr-country-risk-benchmarking-rejected-what-this-means-for-compliance),
[ERWAY](https://erwaysolutions.com/resource-hub/eudr-blog/country-benchmarking-risk-tiers/))

**8 (Netherlands).** The legal instrument is the **ACM maatschappelijk prioriteringskader, published
12 December 2025 and in force 1 January 2026** alongside the new Energiewet: large consumers could apply
under it from 1 Jan 2026, **DSOs needed until 1 July 2026 for small consumers**, and the reserved
kleinverbruik capacity is redistributed stepwise between **1 July 2026 and 1 January 2027**.
([klimaatweb](https://klimaatweb.nl/nieuws/netcongestie-en-prioriteit-wat-verandert-er-in-2026/))

**9 (Germany, meters).** Two operational details the thesis needs: the **§14a transition allows existing
ripple-control receivers and timer-based arrangements until 31 December 2028** (grandfathering for devices
commissioned before 1 Jan 2024), and rollout is wildly uneven by operator — Stromnetz Berlin 53.1%,
Westnetz 49.8%, Mitteldeutsche Netzgesellschaft Strom 46.6% among the ten largest, against a 5.5% national
average. ([EMA Energiewelt](https://ema-energiewelt.de/wissen/netzentgelte-paragraph-14a-steuerbare-verbraucher-2026),
[elektroquatsch](https://www.elektroquatsch.de/artikel/smart-meter-rollout-quote-2026-deutschland-vergleich))
*Read: the addressable market is regional, not national — sell where the operator is slow.*

**10 (Germany, sharing and heat).** §42c has been **in the EnWG since 22 December 2025** with the DSO duty
from 1 June 2026, but **several DSOs have said technical implementation will only come in 2027**, and
commentators expect pilots in 2026 with broad rollout only around 2029 — the binding constraint is again
the 5.5% smart-meter base. On heat planning, the final score is better than the April snapshot suggested:
**72 of 83 large cities met the 30 June 2026 deadline**; Frankfurt, Dortmund, Bochum, Gelsenkirchen and
Mülheim were among those that missed.
([kalipe](https://www.kalipe-immo.de/energy-sharing-nach-%C2%A7-42c-enwg-seit-juni-in-kraft-und-trotzdem-noch-kaum-nutzbar/),
[zfk](https://www.zfk.de/energie/kommunale-waermeplanung-diese-staedte-reissen-die-frist-ziemliche-panne))

**11 (Spain).** Important caveat: **RDL 7/2026 creates the gestor de autoconsumo but does not define its
legal regime, functions, scope or conditions** — that is left to a forthcoming royal decree on
self-consumption which the ministry hoped to have "by this summer" (as of April 2026).
([Araoz & Rueda](https://www.araozyrueda.com/autoconsumo-compartido-espana/),
[energias-renovables](https://www.energias-renovables.com/autoconsumo/el-nuevo-real-decreto-de-autoconsumo-podr-20260414))
*Read: first-mover advantage is real, but the role's obligations are not yet knowable — do not
build compliance features against it yet.*

**12 (Heat pumps).** EHPA's own press release headlines **11% growth and ~2.63m units**; the 10.3% figure
is the average across the same 16 countries — quote one or the other, not both as different facts. Germany
kept accelerating in 2026: **H1 2026 sales 195,000 units, +40% year on year** (BWP/BDH), the second-highest
half-year ever and **more than half** of the 352,000 heat generators sold. UK: **July 2026 set a BUS record
of 8,150 applications**, +53% on the previous record, of which **3,037 came at the £9,000 oil/LPG rate in
the final 11 days** after it took effect on 21 July.
([EHPA](https://ehpa.org/news-and-resources/press-releases/heat-pump-sales-testify-to-government-action/),
[BWP](https://www.waermepumpe.de/presse/pressemitteilungen/details/waermepumpen-absatz-waechst-im-ersten-halbjahr-auf-195000-anlagen/),
[Wins Solutions](https://www.winssolutions.org/heat-pump-grant-uk-record-july-2026/))

**13 (France) — the correction that most changes the thesis.** A **"Relance logement" bill, presented to
the Council of Ministers on 24 June 2026 and adopted by the Senate on 8 July 2026** (National Assembly
in autumn 2026), would **suspend the rental ban for F and G dwellings where the landlord signs a works
commitment** — renovation within three years for houses, five for flats. Government estimate: **650,000–
700,000 homes kept on or returned to the rental market by 2028**. Separately, I traced the origin of the
bad number: the "1.2M" and the "693,000 F-rated private rentals" both appear to be misreadings of the
SDES/ONRE split of **1,147,000 F+G private rentals into 694,000 flats and 453,000 houses**.
([hellowatt](https://www.hellowatt.fr/blog/loi-relance-logement-senat/),
[Selectra](https://selectra.info/energie/actualites/renovation-energetique/projet-loi-relance-logement-passoires-retour-location-2026),
[SDES](https://www.statistiques.developpement-durable.gouv.fr/le-parc-de-logements-par-classe-de-performance-energetique-au-1er-janvier-2025))
*Read: the 2028 F-ban is the entire forcing function behind the DPE-arbitrage thesis, and it is being
softened twice over — once by the 1 Jan 2026 recalculation and again by a bill already through the Senate.
Treat this thesis as at risk until the Assembly votes.*

**14 (Machinery).** Standards are behind: the Commission intends to carry over most of the ~800 Machinery
Directive harmonised standards, with the **first batch of citations under the Machinery Regulation
expected Q3 2026** and a complete implementing decision targeted for **end-2026, weeks before the
20 January 2027 application date**; standards for the *new* essential requirements (AI safety functions,
cybersecurity, autonomous behaviour) were still in drafting mid-2026, and the EN ISO 12100 revision was
sent back after a negative CEN/CENELEC vote. TÜV SÜD was the first notified body under 2023/1230
(September 2024) and notified-body capacity is described as scarce.
([IBF](https://www.ibf-solutions.com/en/seminars-and-news/news/new-machinery-regulation-status-of-harmonised-standards),
[TÜV SÜD](https://www.tuvsud.com/en/newsroom/press-releases/2024/september/tuev-sued-becomes-the-worlds-first-notified-body-for-the-new-machinery-regulation))

**15 (Drone spraying).** France's operating requirements are concrete: **Certiphyto (applicator, and
décideur where relevant)**, the normal plant-protection rules (no-treatment zones, drift control, wind
limits, traceability, treatment register), and from **1 January 2026 the EASA framework (CATS)** rather
than the French transport code governs remote-pilot qualification. Italy remains blocked: **Law 182 of
2 December 2025** exists but its implementing decree — theoretically due 18 March 2026 — was still
unpublished through mid-2026, with reports of farmers spraying uncertified and uninsured in the meantime.
([drone-actu](https://www.drone-actu.fr/reglementation/pulverisation-drone-pratiques),
[Quadricottero](https://www.quadricottero.com/2026/03/droni-agricoli-con-fitofarmaci-ancora.html))

**16 (Counter-drone).** The Commission published an **Action Plan on Drone and Counter-Drone Security on
11 February 2026** (digital no-fly mapping, security requirements and trusted chips for drones placed on
the EU market, an "EU Trusted Drone" label, 5G "digital airspace" with operator-side disconnection and
geofencing, certification schemes for counter-drone systems, U-space, coordinated procurement) — feeding
the European Drone Defence Initiative in the Defence Readiness Roadmap 2030. Market sizing in the raw
report checks out: **Europe anti-drone $1.24bn (2025) → $4.16bn (2030), 27.5% CAGR** (MarketsandMarkets).
([EC](https://defence-industry-space.ec.europa.eu/commission-publishes-action-plan-drone-and-counter-drone-security-2026-02-11_en),
[MarketsandMarkets](https://www.marketsandmarkets.com/PressReleases/europe-anti-drone.asp))

**19 (Bikes).** Shimano's **State of the Nation 2026 was published 4 February 2026** (25,000 respondents,
25 countries). Its actual maintenance-barrier breakdown is **20.3% high cost, 15.3% no local shop or
limited hours, 11.8% long workshop lead times**; 121m cycle less, one in five shifted to other transport,
16.4% stopped cycling. Use these, not the unsourced 72%. Separately, the second-hand thesis has support:
German leasing returns are arriving after 2–4 years, and platforms winning in refurbished e-bikes are
**building battery-health assessment into inspection and backing it with a warranty**, with the battery at
30–40% of vehicle value. ([Shimano](https://bike.shimano.com/content/dam/one-website/common/pdf/SHIMANO_State_Of_The_Nation_2026.pdf),
[micromobility.io](https://micromobility.io/news/the-second-hand-e-bike-market-wasnt-supposed-to-be-this-big))

**20 (Accessibility).** Enforcement is real but quieter than the raw report implies: **as of July 2026 no
individual BFSG fine had been publicly documented**, though market-surveillance authorities began formal
enforcement decisions in Q1 2026 (fines €10,000–€100,000). The pressure is mostly private: **two Abmahnung
waves** — from August 2025 (CLAIM Rechtsanwalts GmbH) and from February 2026 (Kanzlei MK, Berlin) — at
€3,500–20,000 per notice, with the missing/incomplete accessibility statement the easiest breach to prove
by scanner. In Sweden, PTS can impose injunctions with penalties or a **sanction fee of SEK 10,000 to
10 million**, and its April 2026 broad measurement found deficiencies in all nine sectors examined, worse
among private than public bodies. In the Netherlands, enforcement is split by sector — **ACM for webshops
and apps, AFM for financial services, RDI for devices, CvdM for media, ILT for transport** — with active
enforcement expected in H2 2026 and information requests already sent to non-EU sellers.
([marcus-herrmann](https://marcus-herrmann.com/blog/bfsg-abmahnung-2026-ruhig-bleiben),
[PTS](https://www.pts.se/nyheter-och-pressmeddelanden/pts-forsta-breda-matning-av-tillgangligheten-pa-svenska-webbplatser/),
[oogvoorinclusie](https://www.oogvoorinclusie.nl/kenniscentrum/handhaving-eaa-toezicht-boetes/))

**23 (Identity).** **Germany intends to launch its national wallet on 2 January 2027** — nine days after
the legal deadline — and the BMDS is publicly sticking to that date despite expert criticism and a missing
statute; the Netherlands and Malta have signalled delayed or reduced-functionality launches; France, Italy
and Austria are furthest along (France Identité is already live); Bulgaria reportedly has not begun serious
work. Treat 24 December 2026 as a legal date that most member states will miss in substance.
([heise](https://www.heise.de/en/news/EUDI-Wallet-Federal-government-sticks-to-2027-launch-date-despite-headwinds-11394347.html),
[gabmorelli](https://www.gabmorelli.com/2026/08/11/the-eudi-wallet-deadline-is-slipping-what-that-means-for-enterprises-building-on-eidas-2-0/))

**24 (Agentic web) — the caveat hardens.** SE Ranking's 300,000-domain study found **10.13% adoption and
no relationship between having an llms.txt and being cited in major LLM answers**; removing the llms.txt
variable actually *improved* their citation-prediction model. Adoption is roughly flat across traffic
tiers (9.88% low, 10.54% mid, 8.27% high). Cloudflare's 15 September 2026 change is confirmed on track and
splits bot traffic into three buckets — search indexing, agent, training — with mixed-use crawlers that
will not declare which they are doing **blocked entirely on ad-supported pages**; site owners can opt out
in Security settings before that date.
([SE Ranking](https://seranking.com/blog/llms-txt/),
[Search Engine Journal](https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/),
[Help Net Security](https://www.helpnetsecurity.com/2026/07/02/cloudflare-ai-crawler-controls/))

**27 (SAP).** Beyond extended maintenance to 2030 at +2%, SAP has announced an **SAP ERP, private edition
transition option, purchasable from 2028 and usable 2031–2033** for large complex landscapes; customers
who take neither drop into customer-specific maintenance after 2027.
([Forrester](https://www.forrester.com/blogs/sap-offers-on-prem-erp-customers-additional-3-year-support-till-2033-with-conditions))
*Read: the ECC cliff is softer than "2027" implies for large enterprises — which is precisely why the
sharper opportunity is Business One 10.0 (mainstream maintenance ends 31 December 2026, no extension).*

**28 (EnEfG) — a live amendment.** The federal cabinet adopted an **EnEfG amendment on 24 June 2026**
(Bundestag/Bundesrat expected through autumn 2026): the data-centre threshold rises from **300 kW to
500 kW**, existing-facility PUE limits are relaxed (≤1.6 from 1 July 2027 instead of ≤1.5; ≤1.4 from
1 July 2030 instead of ≤1.3), new facilities keep PUE ≤1.2 but get four years instead of two, the duty to
provide a heat-transfer station is dropped in favour of reserving space, the general avoidance duty
becomes a cost-benefit analysis, and internal waste-heat use now counts. **The 10 / 15 / 20% ERF thresholds
themselves are retained**, flanked by new exceptions.
([CMS](https://cms.law/de/deu/legal-updates/enefg-novelle-bringt-entlastung-fuer-rechenzentren),
[FPS Law](https://fps-law.de/de/fps-blog/enefg-novelle-2026-was-der-kabinettsbeschluss-fuer-rechenzentren-bedeutet))
*Read: the waste-heat percentages survive, so the matchmaking thesis holds — but the obligation to build
the physical handover point does not, which removes the most capital-intensive trigger for a deal.*

**30 (UK).** More OSA enforcement than the claim lists: **AVS Group £1m + £50,000 (December 2025)** and
**4chan £520,000 on 19 March 2026** (£450,000 age assurance + £50,000 illegal-content risk assessment).
By end-January 2026, **77 of the top 100 dedicated pornography services had age assurance and a further 7
had geoblocked the UK**. On DUAA Smart Data: the government named **10 sectors**, consulted on open
banking in early 2026, and expects the **first sectoral statutory instrument in Q4 2026 (open banking)**,
with an **energy smart-data consultation in 2026 and regulations in 2027/28**.
([Ofcom bulletin](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/online-safety-industry-bulletins/online-safety-industry-bulletin-march-2026),
[HSF Kramer](https://www.hsfkramer.com/notes/fsrandcorpcrime/2026-posts/uk-smart-data-strategy-building-on-open-bankings-momentum))

**31 (CSRD).** Transposition of the Omnibus I CSRD provisions is due **19 March 2027**; Wave 1 companies
first apply the amended regime for financial years beginning on or after **1 January 2027**. The CSDDD
provisions transpose by **26 July 2028** and apply from **26 July 2029**.
([Covington](https://www.cov.com/en/news-and-insights/insights/2026/02/eu-csddd-csrd-omnibus-published-in-official-journal-transposition-delegated-acts-and-guidelines-are-next))

**33 (SAFE).** The picture is bigger than one €38bn tranche. The Commission approved a **first wave for
eight member states on 15 January 2026** and a **second wave for eight more on 26 January 2026 (≈€74bn)**;
defence ministers signed off €38bn on 11 February 2026; **Czechia and France** followed in March 2026; the
Council had adopted implementing decisions for **16 member states**, and by **18 August 2026** Poland,
Romania, France, Portugal, Czechia, Greece and Estonia had loan agreements in place. **19 of 27 member
states participate.** ([EC](https://defence-industry-space.ec.europa.eu/commission-approves-second-wave-safe-defence-funding-eight-member-states-2026-01-26_en),
[grosswald tracker](https://www.grosswald.org/safe-defence-loans-tracker/))

**35 (Balkonkraftwerke).** The boom is cooling: **Q1 2026 added 64,633 units (87.6 MW), a 6–14% decline
year on year** — the first drop — even as the stock grows by roughly 1,000 a day. Total capacity ~1,381 MWp.
([balkon-kraft-werke.de Q1 report](https://balkon-kraft-werke.de/magazin/q1-2026-marktreport-64633-neue-anlagen/),
[strom-report](https://strom-report.com/balkonkraftwerk/))

---

# Summary table

| # | Claim (short) | Verdict |
|---|---|---|
| 1 | AI Act Digital Omnibus dates, Art. 50, Code of Practice | CONFIRMED |
| 2 | CRA reporting, notified bodies, standards, EU rep, 615k, SME | PARTLY (EU authorised rep is optional — material error) |
| 3 | Revised PLD date: 2 Aug 2026 vs 9 Dec 2026 | CORRECTED (9 Dec 2026; T1 wrong, T2 right) |
| 4 | Data Act access-by-design, switching charges, SME carve-out, Omnibus | CONFIRMED |
| 5 | Right to Repair: date, Annex II, ERIF, +12 months, platform, transposition | CONFIRMED (platform date corrected to 31 Jul 2027 / 1 Jan 2028) |
| 6 | Battery passport 18 Feb 2027, due diligence to 18 Aug 2027, Art. 11, Meta | CONFIRMED |
| 7 | EUDR 30 Dec 2026 / 30 Jun 2027, no further delay, low-risk simplification | PARTLY (timber carve-out missed; "no further delay" not guaranteed) |
| 8 | NL kleinverbruik queue, GTO, salderen, 584 negative hours | CONFIRMED ("first GTO" = first in Noord-Brabant) |
| 9 | DE smart meters 5.5%, 77 proceedings, §41a, §14a M3, Solarspitzengesetz | CONFIRMED |
| 10 | DE §42c energy sharing, GModG, heat-plan deadlines | CONFIRMED |
| 11 | Spain RDL 7/2026: 5 km radius, gestor de autoconsumo | CONFIRMED (regime not yet defined) |
| 12 | Heat pumps: EHPA +10%, DE +50%/50%, Q1 +17%, JAZ 2.6–4.9, BUS | PARTLY (DE +55%; £9,000 is oil/LPG-only from 21 Jul 2026) |
| 13 | France DPE bans, 2026 reform, 1.2M F rentals, loi APER | PARTLY (1.2M F figure wrong; ban itself now at risk) |
| 14 | Machinery Regulation 20 Jan 2027, ML clause needs notified body | CONFIRMED |
| 15 | EU aerial spraying Council 27 May 2026; France "loi Duplomb" | PARTLY (French law is 2025-365; Duplomb's drone article was struck down) |
| 16 | Counter-drone incidents, DLR 116, who may mitigate | CONFIRMED (mitigation law changing in DE/BE/NL in 2026) |
| 17 | Meta Ray-Ban Display not in EU; Even G2 €699/Even Hub; Android XR | PARTLY (Even Hub shipped 3 Apr 2026; Aura not yet launched) |
| 18 | Unitree/SO-101/Jetson/Livox price points | PARTLY (Livox Mid-360 list is $979, not $749) |
| 19 | Shimano mechanic shortage; "72% >3 weeks"; EN 15194 from 1 Jan 2026 | PARTLY (72% unsourced; standard is A1:2023, mandatory 15 May 2026) |
| 20 | EAA enforcement: SE 200 sites, DE MLBF Q3 2026, FR Nov 2025, 97% | PARTLY (Sweden is 28 cases, not 200 sites) |
| 21 | E-invoicing BE/FR/DE/ES dates | CONFIRMED |
| 22 | VoP 9 Oct 2025, pain.001.001.03 to Nov 2026, bulk opt-out | PARTLY (Nov 2026 is a scheme/bank cut-over, not legal expiry) |
| 23 | EUDI wallet 24 Dec 2026, RP registers, Dec 2027 acceptance, CH, UK | CONFIRMED (substantive slippage widespread) |
| 24 | Cloudflare 15 Sep 2026, bots 57.5%, Shopify MCP, llms.txt ~10% | PARTLY (mixed-use crawlers/ad pages only; llms.txt has no measured effect) |
| 25 | Escape.tech scan; Moltbook March 2026 | CONFIRMED (Moltbook discovered 1 Feb 2026) |
| 26 | Swiss German ASR ~25% WER (arXiv 2606.07608); SwissGPC | CONFIRMED |
| 27 | SAP ECC to 31 Dec 2027; ~40% not live; Business One dates | PARTLY (60–70% not live; B1 10.0 ends 31 Dec 2026, not 2028) |
| 28 | EnEfG waste heat 10/15/20%; TenneT 212 / 38 GW | CONFIRMED (dates are 1 July of each year; amendment pending) |
| 29 | Pay Transparency: only SK/IT/LT/MT on time; DE 2027; NL 1 Jan 2027 | CONFIRMED |
| 30 | UK OSA fines, MTD 6 Apr 2026, DUAA commencement | CONFIRMED |
| 31 | CSRD Omnibus I: OJ 26 Feb 2026, >1,000 staff / >€450m, value-chain cap | CONFIRMED |
| 32 | NIS2: DE 6 Dec 2025, NL 15 Aug 2026, registration counts | CONFIRMED (DE: only ~11,500 of ~29,500 registered on time) |
| 33 | SAFE €150bn, €38bn on 11 Feb 2026, EIC dual-use 17 Jun 2026 | CONFIRMED |
| 34 | Neko Health $700M Series C July 2026 | CONFIRMED |
| 35 | Balkonkraftwerk 1.32M by May 2026; 429,808 added in 2025 | CONFIRMED (Q1 2026 additions fell 6–14% YoY) |

**Tally:** 21 CONFIRMED · 12 PARTLY · 1 CORRECTED · 1 mixed within claim (19, which contains one
UNVERIFIED element). No claim was found to be wholly fabricated.

**Most consequential corrections, in order:**
1. **CRA authorised representative is optional (claim 2)** — the T2 top-ranked opportunity is mis-framed.
2. **France's F-rental ban is being softened by the Relance logement bill (claim 13)** — the forcing
   function behind the DPE-arbitrage thesis may not survive to 2028.
3. **SAP Business One 10.0 loses mainstream maintenance on 31 December 2026, not end-2028 (claim 27)** —
   this is a nearer and better deadline than the one the report leads with, and 60–70% (not 40%) of ECC
   customers are still not live.
4. **llms.txt has 10% adoption and no measurable effect (claim 24)** — kills a product idea rather than
   correcting it.
5. **The French drone-spraying legal basis is loi 2025-365, not the loi Duplomb, whose drone article was
   struck down (claim 15)** — but the implementing decrees published on 31 May 2026 make France
   operational a year earlier than the report assumed.
6. **PLD applies 9 December 2026, not 2 August 2026 (claim 3)**, and **EN 15194:2017+A1:2023 became
   mandatory 15 May 2026, not 1 January 2026 (claim 19)** — both are citation errors that would be caught
   by any specialist reader.
7. **Sweden's PTS is running 28 supervision cases, not auditing 200 sites (claim 20)** — a ~7× overstatement.

---

**Search log:** ~148 distinct WebSearch queries run on 6 September 2026 across EN/DE/FR/NL/ES/SV/IT, at
roughly 3–6 per claim (more on claims 2, 5, 13, 15, 19, 20, 22, 24 and 27, which were contested or
mis-sourced). `WebFetch` was attempted on primary sources and blocked by the egress proxy in every case
tried (digital-strategy.ec.europa.eu, cyberresilienceact.eu, eurogip.fr, support.sap.com), so all
evidence below the URL level is quoted from search-result excerpts of those sources rather than from the
page bodies. No subagents were used.

---

# Could not resolve

1. **CRA "615,272" provenance.** The number is consistently attributed to Commission impact assessment
   SWD(2022) 282 by secondary sources, but I could not open the document (2022 IA, 3 parts) to confirm the
   figure or what exactly it counts (manufacturers, products, or both). Treat as order-of-magnitude.
2. **The "72% of independent bike shops report >3-week waits" figure (claim 19).** Only traceable to a
   bike-shop software vendor's blog citing an unnamed 2024 survey. Not usable.
3. **Exact count of member states that had transposed the Right to Repair Directive by 6 September 2026.**
   Four (HR, LT, SK, FI) had notified in the EUR-Lex register as of early August 2026; I could not obtain a
   September figure.
4. **Number of German households actually on a dynamic tariff.** 29 dynamic tariffs from 28 suppliers were
   directly bookable at 31 August 2026, but no BDEW or regulator figure for household take-up was findable —
   which matters, because the §14a/dynamic-tariff thesis is sized on it.
5. **Whether the Bergeijk GTO of 9 July 2026 was the first in the Netherlands or only in Noord-Brabant.**
   The province and regional press say "first GTO of Brabant"; national outlets shortened it. Unresolved.
6. **Number of entities registered under the Dutch Cyberbeveiligingswet.** The law switched on 15 August
   2026 with ~8,000 organisations in scope; no registration count published yet.
7. **How many member states will actually field an EUDI Wallet by 24 December 2026.** Trackers group
   countries into likelihood bands but publish no count; Germany has stated 2 January 2027.
8. **Post-reform count of F-rated dwellings in the French private rental stock.** The latest official
   SDES/ONRE figures are at 1 January 2025 and predate the 1 January 2026 recalculation; the widely quoted
   693,000 appears to be a misread of the flats/houses split.
9. **Whether any BFSG fine has actually been issued in Germany.** Market surveillance entered an active
   phase in 2026 and formal enforcement decisions are reported, but no individual fine was publicly
   documented as of July 2026.
10. **The ENISA SRP's live URL and the Commission implementing act setting the CRA report format**, both
    still unpublished days before the 11 September 2026 reporting duty begins.
