# T4 — Hardware & the Physical World, 2024–2026: Second-order opportunities for a tiny Western-European founder

*Research date: 2026-09-05. Method: 36 web searches (2025–2026 sources preferred). Direct page fetches were blocked by the network sandbox, so figures below come from search-result extracts; where I could not confirm a number or a claim from a 2025–26 source, it is marked **[inference]** or **[unverified, background knowledge]**. Treat every price as "as quoted, date-stamped" — this market moves monthly.*

**Founder profile assumed:** 1–3 people, <€100k, 6–9 months to v1, software-first, willing to learn integration, must buy hardware off the shelf and sell software + service on top.

---

## 0. The one-paragraph read

The big 2024–26 shifts in the physical world are not "robots got smart". They are: (1) **capable hardware became cheap enough to be a line-item, not a capex decision** (a programmable humanoid is $10.5k, a trainable arm is $130 in parts, a 67-TOPS edge box is $249, a 3D LiDAR is $749); (2) **Europe passed a stack of regulations whose compliance dates all land in 2026–27** (Data Act Sept 2025/2026, Right to Repair July 2026, EUDR Dec 2026, Machinery Regulation Jan 2027, Battery Regulation Feb 2027, e-bike EN 15194 Jan 2026, EAA June 2025), each of which creates a party that must pay someone; and (3) **security shocks (airport drone incursions, Sept–Nov 2025) plus €150bn of SAFE loans re-priced anything "counter-drone" or "dual-use"**. The non-obvious opportunities for a tiny team are almost all *services and thin software wrapped around off-the-shelf sensors, timed to a deadline*, not products.

---

## 1. Findings (18)

### F1. Humanoids and arms crossed the "buy it on a credit card" line — but the programmable versions cost 2× the headline

**(a) What changed.** Unitree R1 launched July 2025 at $5,900 (R1 Air $4,900); the headline units *cannot be programmed* — the R1 EDU that can is $10,500 ([RoboZaps R1 review](https://blog.robozaps.com/b/unitree-r1-review), [CNX Software](https://www.cnx-software.com/2025/07/30/5900-unitree-r1-is-an-ultra-lightweight-customizable-humanoid-robot/), [SCMP](https://www.scmp.com/tech/tech-trends/article/3319637/chinas-unitree-debuts-us5900-humanoid-robot-race-make-cheaper-products)). Unitree G1 is $13,500 direct (backordered as of July 2026), $16–21.6k via EU dealers, with 12 configurations up to $73,900 for the 41-DoF EDU ([RoboZaps G1](https://blog.robozaps.com/b/unitree-g1-review), [botinfo](https://botinfo.ai/articles/unitree-g1)). ~90% of 2025 humanoid shipments were Chinese ([RoboZaps price guide](https://blog.robozaps.com/b/humanoid-robot-price)). G1 rentals in the EU run from $299/day self-service ([botinfo](https://botinfo.ai/articles/unitree-g1)). On the arm side, Hugging Face's SO-101 (April 2025) costs $100–500 depending on sourcing; Seeed sells the motor kit at $220 + $35 printed parts, and it "trains in minutes from a laptop" ([3Druck](https://3druck.com/en/case-studies/hugging-face-introduces-3d-printable-robotic-arm-so-101-build-cost-100-us-dollar-29146612/), [TechCrunch](https://techcrunch.com/2025/04/28/hugging-face-releases-a-3d-printed-robotic-arm-starting-at-100)). Open policies: π0 open-sourced, π0.5 released; NVIDIA GR00T N1.5 open weights (N1.7 now current); Gemini Robotics (March 2025) closed but with an on-device variant ([Pebblous comparison](https://blog.pebblous.ai/report/vla-architecture-comparison/en/), [NVIDIA GR00T N1.5](https://research.nvidia.com/labs/gear/gr00t-n1_5/)).

**(b) Non-obvious implication.** The bottleneck has moved from hardware to *task-specific demonstrations in the customer's environment*. Every VLA still needs a few hundred to a few thousand teleop episodes per new task/site. The scarce, billable asset is a person who can show up at a European SME, set up a $300–$1,500 arm/camera rig, collect clean episodes, fine-tune, and leave a working cell. Humanoids themselves are, for now, an events/rental business in Europe (the $299/day figure tells you the real 2026 demand).

**(c) Who pays.** Robotics startups and labs need European-site data (EU workplaces, EU products, EU languages on labels) — the 2026 teleop-service industry is US/APAC-centric (Adamo US, DataX Power APAC, iMerit) with no named European provider in the sources ([Labellerr](https://www.labellerr.com/blog/top-teleoperation-companies-humanoid-robotics/), [DataX Power](https://www.dataxpower.com/blog/best-robot-training-data-services), [FOV Ventures](https://viewpoints.fov.ventures/p/10-early-stage-startups-to-watch-in-2026)). Wedge: dozens of EU robotics startups + university labs + a handful of corporate labs; contracts of €10–50k **[inference]**.

**(d) Who is building it / gap.** Adamo, Labellerr, DataX Power, Apptronik's own "Robot Park". Gap: an EU-based, GDPR-clean, on-site teleop and data-labelling studio that also does bench-marking of open VLAs on the customer's task.

**(e) Feasibility.** High. All hardware is off the shelf (SO-101 pairs, Quest/VR teleop, cameras). Skill required: LeRobot pipeline fluency. Capital: <€15k. Risk: demand concentrates in a few well-funded labs who insource.

### F2. EU Machinery Regulation, 20 Jan 2027: the integrator becomes the manufacturer, and ML gets a notified body

**(a)** Regulation (EU) 2023/1230 applies in full from 20 January 2027; it explicitly adds cobots, autonomous mobile machinery, cybersecurity and digital instructions; machinery with "fully or partially self-evolving behaviour using machine learning" becomes a high-risk category requiring third-party conformity assessment ([Nemko](https://digital.nemko.com/regulations/eu-machinery-regulation), [TÜV Rheinland](https://www.tuv.com/world/en/new-machinery-regulation-eu-2023-1230.html), [Unchained Robotics on robot cells](https://blog.unchainedrobotics.de/en/eu-machinery-regulation-2027-robot-cells), [Danem Test](https://danem-test.com/eu-machinery-regulation-2023-1230-2027/)).

**(b) Non-obvious implication.** Anyone who bolts a cobot, a gripper and a vision model into a cell for a bakery is the "manufacturer" of a new machine and must produce the technical file, risk assessment, cyber documentation and CE declaration. Most small integrators and virtually all SMEs doing DIY automation with cheap arms have never done this. And the ML clause means that a learned policy (F1) in a production cell may need a notified body — a real brake on VLA deployment in Europe that nobody in the robotics hype cycle is pricing in.

**(c) Who pays.** Europe has "the deepest cobot ecosystem globally"; EU robotics market €16.1B in 2026 ([Robotics Center EU state](https://www.roboticscenter.ai/state-of-robotics-2026-european-union)); RaaS is lowering SME barriers ([szghtech buyer's guide](https://www.szghtech.com/collaborative-robot-cobot-buyers-guide-2026), [Manufacturing Automation](https://www.automationmag.com/the-rise-of-sme-friendly-robotics/)). Thousands of small integrators and food/packaging SMEs in DACH/Benelux/Nordics/Italy face the 2027 cliff.

**(d) Who is building it / gap.** TÜV/Nemko/Danem (test houses, expensive), SyncSoft and SOPX (documentation playbooks), Inkog Labs (AI-specific). Gap: a productised "cell compliance pack" — templated risk assessment + digital-instructions generator + cyber checklist + pre-assessment for the ML clause — sold per cell to small integrators at €2–5k, ideally bundled with a network of notified bodies.

**(e) Feasibility.** High for a software-first founder who reads the regulation and ISO 10218/12100; no hardware to build; 6 months is enough to ship a v1 before the January 2027 wave. Defensibility comes from being early with domain templates, not from code.

### F3. The EU aerial-spraying ban is being dismantled — first market in 16 years

**(a)** Directive 2009/128/EC Art. 9 bans aerial spraying; drones count. The Commission's Food & Feed Safety Omnibus (16 Dec 2025) proposes a new Art. 9a letting Member States exempt drone types listed in a delegated act; the Council agreed its position 27 May 2026, with a 30-month window for that delegated act; procedure expected to conclude late 2026/early 2027 ([Council press release](https://www.consilium.europa.eu/en/press/press-releases/2026/05/27/council-agrees-position-to-simplify-and-strengthen-food-and-feed-safety-requirements/), [Eunews](https://www.eunews.it/en/2026/05/27/the-eu-council-approves-simplifying-pesticide-regulations-and-facilitates-drone-usage/), [EU Perspectives](https://euperspectives.eu/2026/05/drones-cleared-to-spray-pesticides-eu-lifts-decades-old-ban/), [ICAERUS legal review](https://icaerus.eu/drone-spraying-in-europe-current-legislative-framework-and-the-way-forward/)). France already moved: Law 2025-794 (Loi Duplomb) allows drone application of biocontrol/low-risk products on sloped terrain, Law 2025-365 for crop-disease treatment; Italy's implementing decree is stalled; DJI's global agri fleet passed 600,000 ([DroneXL](https://dronexl.co/2026/04/30/dji-agricultural-drones-600000-eu-aerial-spray-italy-decree/)).

**(b) Non-obvious implication.** The product (DJI Agras, EAVision) is a solved, cheap Chinese commodity. The scarce thing in Europe for 2026–28 will be *operators who hold the permits*: an EASA specific-category authorisation, the national plant-protection derogation, sprayer-certification under national law, and a SORA file per field type. France's slope-vineyard case is the wedge (Champagne, Côte-Rôtie, Mosel, Douro, Valais — terrain where tractors kill people).

**(c) Who pays.** Steep-slope vineyards and orchards; cooperatives; agri-contractors ("entreprises de travaux agricoles"); later, forestry and rice. Price anchors from Asia are €20–40/ha **[unverified, background knowledge]**; European slope-viticulture will tolerate far more given helicopter spraying historically cost several hundred €/ha **[inference]**.

**(d) Who is building it / gap.** Hardware vendors (DJI, EAVision) and a scattering of French contractors. Gap: a permit-and-operations company (or the software that runs it — flight-plan-to-derogation-paperwork, spray logbooks that satisfy both EASA and the plant-protection authority, residue documentation).

**(e) Feasibility.** Medium. Needs a licensed pilot, ~€25–40k of drone hardware, and 6–12 months of permitting; revenue starts in France in 2027 and follows the delegated act elsewhere. Perfect for a 2-person team where one is a licensed agronomist/pilot. Time it to the delegated act; do not start in Germany or Netherlands first.

### F4. Airport drone incidents made counter-UAS a civilian budget line — but almost nobody serves tier-2 sites

**(a)** 22 Sept 2025 Copenhagen shut for hours; Oslo the same night; Billund, Aalborg, Esbjerg that week; 2–3 Oct 2025 Munich closed twice in 24h; Nov 2025 Belgium (Brussels airport, military sites) — one evening at Brussels cost ~€2M. DLR counted 116 relevant incidents at 25 German airports in 2025; incidents near critical infrastructure quadrupled 2024→2025. Europe anti-drone market $1.24B (2025) → $4.16B (2030), 27.5% CAGR ([Sentrycs](https://sentrycs.com/the-counter-drone-blog/europe-airport-drone-disruptions-airspace-vulnerabilities/), [OpsCon](https://theopscon.com/intelligence/europe-airport-drone-defence-gap), [Capstone DC](https://capstonedc.com/insights/national-security-insights/new-threats-drive-european-drone-and-counter-drone-demand/), [MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/europe-anti-drone-market-163421061.html), [ESD/XPONENTIAL Europe](https://euro-sd.com/2026/09/news/industry-news/53577/xponential-drones/)).

**(b) Non-obvious implication.** Airports and military bases are buying from Dedrone, DroneShield, Hensoldt, Rohde & Schwarz. But the same panic now sits on the desk of every stadium operator, data-centre security head, prison governor, port, refinery, event organiser and logistics hub — sites with €20–100k budgets, not €5M. In most EU states only police may *mitigate* (jam/take down), so what a private site legally needs is **detection, classification, evidence logging and a response playbook** — pure sensors + software + service.

**(c) Who pays.** Thousands of tier-2 sites in DACH/Benelux/Nordics; insurers may start to ask **[inference]**. Wedge: €500–2,000/month per site as a managed service **[inference]**.

**(d) Who is building it / gap.** Dedrone (Axon), DroneShield, Sentrycs, D-Fend — all priced and sold for airports/defence. Gap: a low-cost detection mesh (RF + acoustic + optical off-the-shelf sensors; DJI AeroScope successor/Remote ID receivers) with a monitoring centre and police-liaison workflow, sold as a subscription to mid-tier sites; plus "drone incident readiness" audits.

**(e) Feasibility.** Medium-high. Hardware is commodity SDRs/Remote-ID receivers and PTZ cameras; software is fusion + alerting; the service layer (playbooks, evidence chain that a prosecutor accepts) is where a small team wins. Check national telecoms law on passive RF monitoring **[inference — verify per country]**.

### F5. BVLOS is finally being unblocked in Europe — "U-space light", SORA 2.5, LUCs

**(a)** EASA adopted SORA 2.5 in 2025 and folded it into the June 2026 Easy Access Rules; 50+ BVLOS operations approved in Q1 2026; U-space deployment stalled, so EASA/Commission proposed a three-tier "U-space light" (pre-U-space rural, intermediate, full) to cut USSP certification burden and speed BVLOS approvals ([Unmanned Airspace](https://www.unmannedairspace.info/uncategorized/39180/), [Dronewatch](https://www.dronewatch.eu/u-space-light-must-unlock-europes-stalled-drone-traffic-system/), [Murzilli July 2026](https://murzilliconsulting.com/regulatorynewsletter/july-2026-drone-and-advanced-air-mobility-regulation-updates/), [DroneLife 3 Sept 2026](https://dronelife.com/2026/09/03/faa-easa-bvlos-regulation-scaling/)). Manna holds an EASA Light UAS Operator Certificate letting it self-authorise across the EU, has done 250k+ flights, is partnering with Uber for 7 European markets — yet pulled back in Ireland over *planning* (land-use) rules ([sUAS News](https://www.suasnews.com/2026/02/irish-startup-manna-becomes-the-engine-for-ubers-european-aerial-ambitions/), [Irish Examiner](https://www.irishexaminer.com/business/companies/arid-41798108.html), [TNW](https://thenextweb.com/news/manna-drone-delivery-us-expansion-tulsa-factory)).

**(b) Non-obvious implication.** Delivery remains a capital game and gets killed by municipal planning, not aviation law. But *industrial BVLOS* (drone-in-a-box over a solar park, a port, a rail corridor, a wind farm) is now approvable with a SORA 2.5 file and, soon, a lighter U-space layer. The valuable skill is writing and maintaining the operations manual/SORA and running the remote ops — an "authorised operator of record" that asset owners rent.

**(c) Who pays.** Utility-scale solar/wind owners, ports, rail, chemical sites. Inspection pricing: $150–600/MW for solar thermography; rope-access turbine inspection $15–25k/unit is being displaced by <30-min drone flights (Aerones); Danish Quali Drone + RWE demonstrated autonomous inspection of *spinning* offshore turbines Jan 2026 ([Averroes pricing](https://averroes.ai/blog/what-thermal-drone-inspection-cost-to-expect), [Aerones](https://aerones.com/aerones-launches-the-autonomous-drone-inspection-service-for-wind-turbine-blades/), [RWE](https://dk.rwe.com/en/press-and-news/2026-01-15-first-autonomous-inspection-of-operational-offshore-wind-turbines-demonstrated/)).

**(d) Gap.** Inspection analytics is crowded (Sitemark, SkyVisor, vHive). Under-served: the *regulatory operator-of-record + drone-in-a-box hosting* for owners of many small sites (1–20 MW rooftops and ground-mount parks) who will never get their own authorisation.

**(e) Feasibility.** Medium. Needs one person to become genuinely fluent in SORA 2.5 and one national authority relationship; DIAB hardware (DJI Dock 3) is ~€20–30k **[background knowledge]**. Regulatory consultancy revenue can fund the ops build.

### F6. Rooftop solar surveying and O&M for small systems is a "€250–500 per visit" business nobody scales

**(a)** Drone roof surveys add £200–400 per UK residential site / €250–500 in Germany; still justified mainly >50 kWp; on-site surveys remain standard; C&I rooftop thermography can be done in one visit with results in <60 min ([Impact Aerial](https://www.impactaerial.co.uk/2026/06/22/drone-photography-for-solar-panel-installers-the-competitive-edge-in-2026/), [Sitemark rooftop](https://www.sitemark.com/solutions/solar-rooftop-thermography-inspections/), [SurgePV](https://www.surgepv.com/hub/solar-designing/roof-modeling)).

**(b)** Millions of residential and small-C&I PV systems were installed 2021–25 in DE/NL/BE/IT and are entering years 3–5, when defects, inverter failures and hot-spots emerge; installers who sold them are often gone or overloaded. Insurance for hail and fire is tightening **[inference]**. The under-served product is not "drone survey" but a *neighbourhood-batched PV health check* (one drone day → 30 roofs) with a report the owner can send to the insurer/installer.

**(c)** Homeowners with 5–15 kWp, housing associations, SME roof owners. Wedge in DE/NL/BE alone: >5M systems **[inference from installation statistics]**.

**(d)** Sitemark/SkyVisor sell to farm owners and O&M firms; SurgePV is design software. Gap: consumer/SME-facing batched inspection + claims-ready reporting.

**(e)** High feasibility: A3 licence, a €5–8k thermal drone, routing software, a report template. Service-heavy, local, defensible via density.

### F7. Depth capture went from "survey-grade instrument" to "phone + $749 LiDAR", and Gaussian splats became an AEC deliverable

**(a)** Livox Mid-360 costs $749, is the default LiDAR for low-speed robots ([RoboStore](https://robostore.com/products/livox-mid-360-lidar), [SmartBotParts alternatives](https://smartbotparts.com/articles/mid-360-alternatives.html)) — note the "sub-$200 solid state" premise is **not** confirmed for a full 3D unit; sub-$200 exists only for 2D/short-range units **[inference]**. iPhone/iPad LiDAR apps (ForestScanner, Arboreal Forest) measure tree DBH and position at caliper-comparable accuracy ([Forest Science](https://academic.oup.com/forestscience/article/70/4/304/7664433), [bioRxiv 2026](https://www.biorxiv.org/content/10.64898/2026.01.12.698980.full.pdf)); phone LiDAR body scanning is being licensed (Cornell→FIT:MATCH; FormCut) ([Fabbaloo](https://www.fabbaloo.com/news/cornells-3d-body-scanning-technology-licensed), [MR Magazine](https://mr-mag.com/from-the-june-issue-the-8-day-suit-how-body-scanning-tech-is-finally-solving-the-menswear-fit-crisis/)). AEC Magazine (Feb 2026) describes splats "anchored to survey data" as a new tier in reality capture, with AI tools generating BIM from splats ([AEC Magazine](https://aecmag.com/technology/introducing-gaussian-splats-for-aec/)); LiDAR-regularised splatting papers are appearing monthly ([GTLR-GS](https://arxiv.org/pdf/2603.23192), [GS4Buildings](https://arxiv.org/pdf/2508.07355)).

**(b)** Capture is now free; *interpretation into a document someone must sign* is the product. In Europe the signable documents are: as-built deviation reports for small contractors (who are increasingly asked for digital handover by public clients), insurance claim evidence, heritage condition records (Denkmalschutz), forest inventories for EUDR/carbon/timber sales, and cubic-metre measurements for waste/aggregate/log piles.

**(c)** Small contractors (the 90% of EU construction firms with <10 staff), loss adjusters, municipal heritage offices, forest owners' associations (Germany alone has ~2M private forest owners **[background knowledge]**).

**(d)** Matterport, Polycam, Scaniverse (capture); Sitemark/vHive (energy); PIX4D; large scan-to-BIM shops. Gap: vertical "scan-to-signed-document" services with a phone/Mid-360 rig and human QA — e.g. forest-inventory-as-a-service for owners selling timber under EUDR traceability, or as-built verification for public housing renovations.

**(e)** High feasibility; the moat is workflow + domain acceptance, not algorithms. Start with one vertical and one national standard.

### F8. Smart glasses: Meta is locked out of the EU until at least 2027 — a rare window for others

**(a)** Meta Ray-Ban Display (US launch Sept 2025; UK/FR/IT/CA planned early 2026) is withheld from the EU: batteries must be user-replaceable in devices sold in the EU from 18 Feb 2027 under the Battery Regulation, and Meta's AI features conflict with EU AI/privacy rules; Meta is seeking an exemption, unsuccessfully so far; a German criminal complaint targets the glasses' recording ([heise](https://www.heise.de/en/news/Meta-Ray-Ban-Display-EU-rules-slow-down-market-launch-11223498.html), [Bloomberg](https://www.bloomberg.com/news/articles/2026-03-25/meta-s-new-display-glasses-withheld-from-eu-over-battery-rules-supply-shortages), [PetaPixel](https://petapixel.com/2026/03/27/metas-ray-ban-display-glasses-faces-hold-up-in-europe-over-removeable-battery/), [Ultrathink](https://ultrathink.ai/news/meta-ai-glasses-privacy-laws-germany-complaint)). Meta's Wearables Device Access Toolkit gives full capability only to developers in "supported countries" ([Meta Wearables FAQ](https://developers.meta.com/wearables/faq/), [UploadVR](https://www.uploadvr.com/meta-wearables-device-access-toolkit-announced-smart-glasses-sdk/)). Meanwhile Even Realities G2 (Nov 2025) is sold in the EU at €699, camera-less, 33-language captions, 2 days of captioning per charge, "Even Hub" apps launched March 2026 ([Even Realities](https://www.evenrealities.com/subtitle-glasses), [Notebookcheck](https://www.notebookcheck.com/Even-G2-Smart-Glasses-mit-1-200-Nits-Micro-LED-Display-starten-in-den-Verkauf.1269221.0.html), [Forbes](https://www.forbes.com/sites/davidphelan/2026/03/26/even-g2-the-subtle-smart-glasses-just-got-a-major-ai-upgrade/)). Snap Specs ship fall 2026 at ~$2,195–2,500 with Snap OS 2.0; Xreal Project Aura (Android XR) due before end-2026 ([Road to VR](https://roadtovr.com/snap-spectacles-os-2-0-consumer-ar-glasses-2026/), [9to5Google](https://9to5google.com/2026/05/22/snap-ar-glasses-spectacles-price-release-date-report/)).

**(b)** In the EU the dominant AI-glasses platform is *absent* and its SDK is geo-fenced. That makes camera-less display glasses (Even) and Android XR the European default for the next 12–18 months, and the EU-legal use-cases are exactly the accessibility and hands-free-text ones: live captions for the ~50M hard-of-hearing Europeans, technician checklists, translation for hospitality/tourism, teleprompting. The European Accessibility Act (applicable 28 June 2025) adds employer/venue pressure ([Ampetronic on EAA](https://www.ampetronic.com/what-the-eu-accessibility-act-means-for-assistive-listening-in-2025/)).

**(c)** Deaf/HoH users (often with public assistive-tech reimbursement in DE/NL/FR/Nordics **[inference]**), field-service SMEs, hotels/museums.

**(d)** Even's own captioning is good; XRAI, Nuance-style caption apps exist. Gap: EU-language, domain-tuned caption/assistance apps on Even Hub + Android XR, and *B2B rental/deployment* of caption glasses to venues under EAA (theatres, courts, clinics).

**(e)** High for software; hardware is €699/unit. Risk: Even Hub's openness and Android XR timing. A 9-month runway lands exactly when Aura ships.

### F9. EU Data Act: since 12 Sept 2025, users can force device makers to hand their data to a third party

**(a)** Most provisions applied 12 Sept 2025; users of connected products (explicitly including health wearables, vehicles, industrial machines) can require data holders to share readily-available data with a designated third party, free to the user, in machine-readable form; from 12 Sept 2026 products must be *designed* for direct access; GDPR-style penalties ([EC Data Act page](https://digital-strategy.ec.europa.eu/en/policies/data-act), [WSGR](https://www.wsgrdataadvisor.com/2025/09/eu-data-act-enters-into-force/), [Greenberg Traurig](https://www.gtlaw.com/en/insights/2025/9/action-required-for-manufacturers-of-connected-devices-challenges-under-the-eu-data-act), [ppc.land](https://ppc.land/europes-data-act-reshapes-connected-device-rules-for-marketers/)).

**(b)** This is the legal lever that lets a third party build on top of Bosch e-bike systems, John Deere telemetry, Oura/WHOOP/Garmin, heat pumps, and dairy robots *without* an API partnership — by acting as the user's designated recipient. Nobody has yet weaponised it at scale; enforcement bodies are only now being named.

**(c)** Independent repairers (e-bike, agri machinery, heat pumps) who are locked out of diagnostics; fleets; users of health wearables wanting a clinician view.

**(d)** Legal firms advising holders; a few "data intermediaries". Gap: a vertical "designated recipient" service that files the requests, ingests the data and turns it into something useful — e.g. e-bike battery/motor diagnostics for independent shops (see F15), or heat-pump performance audits.

**(e)** High feasibility, low capital; the hard part is friction from holders, so pick a vertical where users are motivated and holders are few (e-bike drive systems: Bosch, Shimano, Bafang, Yamaha).

### F10. Right to Repair Directive becomes enforceable 31 July 2026 and blesses 3D-printed parts

**(a)** Directive 2024/1799: transposition and enforcement from 31 July 2026; manufacturers of Annex II goods must repair at reasonable price/time; they may not obstruct independent repairers' use of 3D-printed, second-hand or compatible parts subject to safety and IP ([EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32024L1799), [Fieldfisher](https://www.fieldfisher.com/en/insights/incoming-eu-right-to-repair-requirements-the-key-t), [Bird & Bird on IP](https://www.twobirds.com/en/insights/2025/finland/the-new-right-to-repair-directive--how-does-it-interact-with-iprs), [Replique](https://replique.io/en/eu-right-to-repair-deadline-up-to-10-years-supply-of-spare-parts/)). Daimler Truck + 3D Systems (Jan 2025) set up certified decentralised printing of spare parts across Europe; print-farm playbooks are mainstream ([Stratasys agri parts](https://www.stratasys.com/en/resources/blog/3d-printing-tractor-parts/), [SimplyPrint](https://simplyprint.io/articles/how-to-start-a-3d-print-farm)).

**(b)** The demand side is not consumers; it is *repair shops* (appliance, bike, garden, coffee machine, agri) who lose a job every time a €4 plastic bracket is unavailable. A network of small Bambu/Prusa farms with a shared verified-part catalogue and a legal wrapper (design-right check, material safety declaration) is now legal cover plus distribution.

**(c)** Independent repairers (tens of thousands in DE/FR/NL/IT), agricultural dealers, housing associations. Ticket size €10–80 per part; margin comes from catalogue reuse.

**(d)** Replique, Spare Parts 3D (enterprise OEM side); Printables/Thingiverse (unverified hobby files). Gap: repairer-facing verified catalogue + order routing to local farms + IP/safety compliance layer.

**(e)** High. €5–15k of printers + scanning; software is a catalogue and routing; the hard part is legal hygiene and getting the first 500 verified parts.

### F11. EUDR slipped to 30 Dec 2026 (SMEs 30 June 2027) — the geolocation-verification market has one more year to form

**(a)** Regulation 2025/2650 (Dec 2025) postponed EUDR by one year; plots >4 ha need polygons, smaller plots points; competent authorities cross-check with satellite; supply-chain data lives "in spreadsheets, WhatsApp and PDFs" ([Coolset FAQ](https://www.coolset.com/academy/eudr-frequently-asked-questions), [Coolset geolocation](https://www.coolset.com/academy/eudr-geolocation-requirements-how-to-collect-and-validate-gps-polygon-data-for-your-dds), [Nimbo 2020 baseline](https://nimbo.earth/stories/eudr-deforestation-compliance-satellite-imagery/), [OriginTrace](https://origintrace.trade/blog/eudr-regulation-complete-guide)). Sentinel data is free for commercial use; Sentinel-1D operational May 2026, 1A retired June 2026, 2C launched Sept 2024; LSTM/CHIME come 2028+ ([EC Sentinel-1A](https://defence-industry-space.ec.europa.eu/sentinel-1a-concludes-its-mission-leaving-lasting-legacy-copernicus-2026-06-30_en), [Copernicus Data Space](https://dataspace.copernicus.eu/)). ICEYE launched a SAR deforestation tool March 2026 and a parametric wildfire cover with Liberty (June 2026) ([SatNews](https://satnews.com/2026/06/15/space-based-underwriting-liberty-and-iceye-launch-satellite-powered-parametric-wildfire-insurance/)). CAP "checks by monitoring" traffic-light systems are live across Member States ([Copernicus CAP AMS](https://dataspace.copernicus.eu/ecosystem/services/cap-area-monitoring-services), [Sinergise](https://www.sinergise.com/en/solutions/area-monitoring-service)).

**(b)** The satellite analysis is commoditised (free Sentinel + open forest-loss layers). The unmet work is *upstream data hygiene*: getting thousands of smallholder polygons out of WhatsApp into a valid DDS, then keeping them fresh. Mid-size European importers (roasters, chocolatiers, timber merchants, furniture makers, tyre/rubber SMEs) cannot afford TraceX/Coolset-style enterprise stacks and will be liable from June 2027. Second-order: CAP AMS creates a *farmer-side* need — "will my parcel be flagged yellow/red this year?" — which the public systems don't show in advance.

**(c)** ~Tens of thousands of EU SME operators/traders in coffee, cocoa, timber, soy, rubber, palm, cattle; plus farm advisors.

**(d)** Coolset, TraceX, OriginTrace, Nimbo, Sinergise, ICEYE (large). Gap: a low-touch service for SME importers — polygon capture app for suppliers + Sentinel-based pre-check + DDS filing — priced €200–500/month; and a farmer-facing CAP pre-check tied to national AMS rules.

**(e)** High; pure software + Copernicus APIs; 6 months to v1; deadline-driven sales in H1 2027.

### F12. Defence/dual-use: money is enormous, but the tiny-team entry points are non-lethal and boring

**(a)** SAFE: €150bn in loans; first €38bn approved 11 Feb 2026 for 8 states; requests open until 31 Dec 2030; eligible categories include drones and anti-drone; SMEs and new entrants explicitly encouraged ([Council SAFE](https://www.consilium.europa.eu/en/policies/safe/), [Heuking](https://www.heuking.de/en/news-events/newsletter-articles/detail/eu-launches-security-action-for-europe-safe-major-new-funding-and-procurement-opportunities-for-the-defense-industry-with-special-benefits-for-smes.html), [defencejobs](https://www.defencejobs.org/news/eu-safe-programme-150-billion-in-defence-loans-begins-flowing-to-19-countries-rf01sp)). The EIC opened to defence and dual-use on 17 June 2026: grants up to €2.5M, equity up to €30M ([EIC](https://eic.ec.europa.eu/news/european-innovation-council-opens-defence-and-dual-use-technologies-2026-06-17_en), [Evolution Europe](https://evolutioneurope.eu/blog/eic-defence-dual-use-technologies-2026/)). The dual-use export-control regulation is under review with a consultation open to 15 Oct 2026 ([Customs Manager](https://www.customsmanager.info/post/eu-dual-use-rules-under-review)); SMEs are told to build classification, KYC/sanctions screening, end-use review and recordkeeping ([CMS guide](https://cms.law/en/svn/legal-updates/a-relatively-simple-guide-for-companies-manufacturing-and-providing-dual-use-goods-and-services), [STRATA](https://www.strata.team/defense-innovation-guidelines-for-2026)).

**(b)** Primes and scale-ups (Helsing, Quantum Systems, Tekever, ARX, Stark) are hiring thousands of SME suppliers who have never done export-control classification, ITAR/EU dual-use screening, supplier-security questionnaires or NIS2-style hardening. That compliance onboarding is the shovel; a solo founder can sell it without ever touching a weapon. Equally boring and real: test & measurement services for drone sub-components (motors, batteries, RF links) to European specs; training-simulation content; counter-drone detection (F4).

**(c)** Thousands of machining/electronics/software SMEs entering defence supply chains in DE/FR/NL/Nordics/PL; ticket €5–30k per onboarding **[inference]**.

**(d)** Big-4 and law firms (expensive), a few export-control SaaS (US-centric). Gap: productised EU dual-use classification + screening + evidence pack for SMEs, in German/French, that primes can require of suppliers.

**(e)** High for a software/compliance-minded founder; zero hardware; reputational filters needed but non-lethal path is clear.

### F13. E-bikes: a certified mechanic shortage collides with battery regulation and second-hand growth

**(a)** Shimano launched a "critical" mechanic-shortage investigation in Europe (2025); 72% of independent shops reported >3-week waits for motor/battery repairs; skill drain to uncertified staff ([Zag Daily](https://zagdaily.com/micromobility/shimano-calls-for-evidence-into-skilled-bike-mechanic-shortage-in-europe/), [road.cc](https://road.cc/content/news/shimano-calls-bike-mechanic-shortage-evidence-314723)). From 1 Jan 2026 e-bikes sold in the EU must meet EN 15194:2017+A1:2024 with enhanced battery safety; Battery Regulation 2023/1542 brings replaceability rules and battery passports from 2027; the London Assembly called for mandatory third-party battery certification ([Bikes2Share](https://bikes2share.com/blog/eu-ebike-regulations-2026-compliance-guide), [Himiway on 2027](https://himiwaybike.com/blogs/news/how-will-the-new-eu-battery-regulation-from-2027), [London Assembly](https://www.london.gov.uk/who-we-are/what-london-assembly-does/london-assembly-press-releases/assembly-calls-third-party-certification-e-bike-and-e-scooter-batteries)). EU e-cargo market ~$1.2B in 2026 ([Mordor](https://www.mordorintelligence.com/industry-reports/europe-e-cargo-bike-market)).

**(b)** The second-hand e-bike market is exploding in DE/NL (leasing returns after 36 months) and the single unknowable is battery state-of-health. A standardised, insurer- and marketplace-recognised battery health certificate — produced by a mobile tech with a BMS reader, backed by Data Act requests to Bosch/Shimano for cycle data (F9) — is the obvious missing document. Cargo-bike logistics fleets (DHL, local couriers) need field servicing SLAs no bike shop offers.

**(c)** Leasing companies (JobRad, Lease a Bike, Swapfiets), marketplaces (Rebike, Upway, Buycycle), fleets, fire-conscious landlords/insurers. Certificate price €30–60 **[inference]**.

**(d)** Upway/Rebike do in-house refurb; no independent standard exists. Gap: independent SoH certification + mobile diagnostics network + training/certification of mechanics.

**(e)** High. Hardware = BMS diagnostic tools (€500–2k); software = protocol + report; service = mobile techs. 6–9 months to a regional v1.

### F14. Connectivity: the 2G/3G sunset is a forced migration for millions of dumb devices; D2D arrives end-2026

**(a)** 37 operators retire 2G and 39 retire 3G across 2025–26 (some EU markets extend 2G to 2027); Cat-1 bis is the default replacement; NB-IoT over satellite (IoT-NTN) exists with packet limits ([Telenor IoT](https://iot.telenor.com/technologies/connectivity/2g-3g-sunset/), [Thingsdata 2026 update](https://thingsdata.com/news/2g-3g-sunset-update-global-iot-2026/), [Hologram trends](https://www.hologram.io/blog/cellular-iot-trends/)). Vodafone/AST "Satellite Europe Connect" JV opened for business in Luxembourg, trials summer 2026, launch around end-2026 using 700 MHz PPDR; Deutsche Telekom + Starlink V2 direct-to-cell in 10 countries targeted 2028 ([Light Reading](https://www.lightreading.com/satellite/eurobites-vodafone-ast-spacemobile-jv-opens-for-business-in-europe), [SpaceNews](https://spacenews.com/deutsche-telekom-aims-to-bring-starlink-mobile-v2-to-europe-in-2028/), [CNBC](https://www.cnbc.com/2026/03/02/starlink-deutsche-telekom-partnership.html)).

**(b)** Lift emergency phones, alarm panels, heat meters, vending machines and agricultural telemetry across Europe were built on 2G and are owned by parties (housing associations, lift maintainers, small utilities) with no IoT team. The migration is a site-visit-and-swap service with a device-management layer — unglamorous, thousands of units per customer.

**(c)** Housing associations, lift companies, small water/heat utilities, municipalities. Per-device €80–200 incl. hardware **[inference]**.

**(d)** Operators' IoT arms sell SIMs, not swaps; integrators are regional. Gap: a repeatable "legacy fleet migration" offer with inventory audit, eSIM (SGP.32) provisioning and NTN fallback for rural sensors.

**(e)** High for a technical founder; capital small; wins on process, not tech.

### F15. Edge AI boxes at $249 make on-prem vision a service, not a product — with a 2027 regulatory catch

**(a)** Jetson Orin Nano Super: 67 TOPS, dev kit ~$249; Raspberry Pi AI HAT+ 2 with Hailo-10H: 40 TOPS INT4 and 8GB, enough for local VLMs/captioning without cloud ([circuit.rocks](https://blog.circuit.rocks/edge-ai-on-a-budget-raspberry-pi-ai-hat-2-jetson-orin-and-more), [MyAIHardware](https://www.myaihardware.com/compare-article/jetson-orin-nano-super-vs-raspberry-pi-5-hailo), [OpenELAB](https://openelab.io/blogs/learn/best-edge-ai-hardware-2026-raspberry-pi-jetson-rk3588-ai-camera)).

**(b)** GDPR makes "no frame leaves the building" a selling point in Europe, and a €400 box running an open VLM can now do bakery proofing checks, shrinkage detection in a small shop, PPE compliance on a small site, or livestock behaviour. But the moment that box controls a machine it falls under F2 (Machinery Regulation) and possibly the AI Act's workplace provisions — so the safe wedge is *advisory* vision (alerts, counts, logs), not control.

**(c)** Food SMEs, small retailers, farms, small construction firms. €100–300/month per site **[inference]**.

**(d)** Everyone and no one: many demos, few vertical services with installation and a human in the loop. Gap: pick one micro-vertical (e.g. artisan bakeries' oven/proofing QA; farm-gate egg/produce grading) and sell install + monitoring.

**(e)** High; this is the classic "buy Jetson, write the model glue, sell service" play. Beware of being a commodity within 24 months.

### F16. Auracast + the European Accessibility Act: venues must offer assistive listening and the standard isn't finished

**(a)** EAA applicable since 28 June 2025; assistive listening (loops, IR, RF, Wi-Fi audio, Auracast) may be required for compliance; venue adoption of Auracast is still small; the governing IEC installation standard is not expected until late 2027 ([Ampetronic](https://www.ampetronic.com/what-the-eu-accessibility-act-means-for-assistive-listening-in-2025/), [Aurahear directory](https://aurahear.com/2026/02/auracast-resource-directory-2026-hearing-aids-tvs-and-venue-gear/), [Hearing Health Matters](https://hearinghealthmatters.org/findhearing/2026/auracast-hearing-access/)).

**(b)** Between now and the standard, venues (theatres, churches, town halls, pharmacies, ticket counters, transport hubs) need someone to specify, install and *prove* assistive listening; loop installers are an ageing trade. A small integrator that does Auracast + loop hybrid installs and issues EAA compliance documentation has a two-year window.

**(c)** Tens of thousands of public-facing venues in EU; €2–15k per install **[inference]**.

**(d)** Ampetronic, Listen Technologies (products); regional loop installers. Gap: EAA-driven audit + install + documentation service, plus a "receiver lending" model for venues.

**(e)** Medium-high; needs an AV/electrical partner; low capital.

### F17. Radar fall detection is proven and deployed in UK care homes; continental reimbursement is the unknown

**(a)** Vayyar Care 4D radar (no camera/microphone) is deployed via Essex County Council and UK care homes (Stowford House, Sambrook House, 2026), and integrated by nurse-call vendors Austco and TekTone ([Vayyar/Essex](https://vayyar.com/blog/elderly-care/fall-detection-technology-helps-essex-county-council-eliminate-hospital-admissions-and-long-lies/), [Austco](https://vayyar.com/blog/elderly-care/austco-partners-with-vayyar/)). No 2025–26 source on DACH/Benelux reimbursement was found.

**(b)** The sensor is a commodity; the business is *integration into the local care system and the local payer* (German Pflegekassen "digitale Pflegeanwendungen"/Pflegehilfsmittel, Dutch Wlz/WMO, Nordic municipalities) **[inference]**. Also home-care, not just care homes: radar + Data Act–portable wearable data for "living alone" monitoring.

**(c)** Care-home operators facing staffing shortages; municipalities; families. Per-room €15–30/month **[inference]**.

**(d)** Vayyar (sensor), nurse-call OEMs (Anglophone), local telecare firms. Gap: a continental integrator that handles payer paperwork + install + monitoring, region by region.

**(e)** Medium; regulatory (MDR class) and payer navigation is slow; feasible for a founder with health-system experience.

### F18. BCI and non-diabetic CGM: real, but not for this founder

**(a)** Neurable raised $35M Series A (April 2026) and pivoted to licensing its EEG-in-headphones stack; Emotiv sells 2-channel MN8 earbuds; Synchron targets a 2026 pivotal trial; Neuralink is in the UK (CONVOY) with ~21 implants by early 2026 ([TechCrunch](https://techcrunch.com/2026/04/28/bci-startup-neurable-looks-to-license-its-mind-reading-tech-for-consumer-wearables/), [Emotiv](https://www.emotiv.com/blogs/news/bci-headset-guide), [TechTimes on Synchron](https://www.techtimes.com/articles/317929/20260606/synchron-brain-implant-targets-2026-pivotal-trial-first-fda-approved-bci.htm)). Lingo/Stelo are $49 per 14-day sensor in the US and now in Walgreens; Abbott gives no Lingo sales forecast ([MedTech Dive](https://www.medtechdive.com/news/abbott-lingo-rollout-us-otc-cgm/726330/), [Plotline](https://www.plotline.health/blog/best-cgm-for-non-diabetics-2026)).

**(b)** Consumer BCI's realistic 2026–27 products are licensed fatigue/focus signals inside other people's headphones — a licensing game for the sensor owner, not an open platform. CGM-for-wellness is crowded with coaching apps and regulated by MDR in the EU. Neither offers a tiny European team a defensible wedge; note them and move on.

---

## 2. Top 6 non-obvious opportunities from this track

**1. Tier-2 counter-drone detection-as-a-service (F4 + F12).** Thesis: the 2025 airport closures moved drone risk onto the agendas of thousands of European sites that cannot buy airport-grade systems and legally cannot mitigate anyway. What they can buy is detection, evidence, and a rehearsed police-handoff. A founder assembles commodity RF/Remote-ID/optical sensors into a monitored mesh, sells a €500–2,000/month subscription plus readiness audits to stadiums, data centres, prisons, ports and logistics hubs in DACH/Benelux/Nordics, and grows into insurer-recognised certification. Dual-use adjacency (SAFE, EIC) opens grants without touching weapons.

**2. Machinery Regulation 2027 "cell compliance pack" for small integrators and SMEs (F2 + F1 + F15).** Thesis: from 20 Jan 2027 every cobot cell and every learned policy in a production machine needs a technical file, cyber documentation and possibly a notified body. Europe has the world's densest cobot base and the smallest integrators. A productised documentation + pre-assessment service, priced per cell and sold through cobot distributors and notified bodies, has a hard deadline, no hardware and a captive audience — and positions the founder as the go-to for the ML clause when VLA-based cells arrive.

**3. Drone-spraying permits-and-operations, France-first (F3 + F5).** Thesis: the 16-year EU aerial-spraying ban is being lifted through a 30-month delegated-act process, but France already legalised drone application on slopes and for low-risk products in 2025. Hardware is a Chinese commodity; the scarce asset is a licensed operator holding the EASA authorisation, the national plant-protection derogation and clean spray logs. Build the ops company (or the software that runs it) in steep-slope viticulture in 2026–27, then follow the delegated act into Italy, Germany, Portugal and Switzerland.

**4. E-bike battery state-of-health certification and mobile diagnostics (F13 + F9).** Thesis: leasing returns are flooding the second-hand e-bike market, mechanics with battery skills are scarce (3-week waits), the Battery Regulation and EN 15194 raise the bar from 2026–27, and the Data Act now compels Bosch/Shimano to release the user's drive data on request. Nobody issues an independent battery health certificate marketplaces and insurers trust. A founder defines the protocol, equips mobile techs with BMS readers, and sells €30–60 certificates and fleet SLAs to leasing firms, marketplaces and cargo-bike couriers in NL/DE/BE.

**5. EUDR data-hygiene service for SME importers + farmer-side CAP pre-checks (F11).** Thesis: the satellite analysis is free (Sentinel) and commoditised; the unmet job is getting thousands of supplier polygons out of WhatsApp and into a valid due-diligence statement before 30 Dec 2026 / 30 June 2027, and keeping them fresh. Enterprise platforms ignore the €200–500/month customer — roasters, chocolatiers, timber merchants, furniture makers. The same Sentinel pipeline yields a second product: telling farmers in advance whether their parcels will trip the national CAP area-monitoring traffic light.

**6. Accessibility-first smart-glasses apps and venue deployments in the Meta-free EU window (F8 + F16).** Thesis: Meta's display glasses and full SDK are locked out of the EU until at least the Feb 2027 battery-rule reckoning, while camera-less Even Realities G2 (€699, EU-shipping, app hub since March 2026) and Android XR/Xreal (late 2026) become Europe's default platforms. Combined with the European Accessibility Act, this creates a 12–18-month window to own EU-language live captioning, translation and hands-free workflow apps — and to rent caption-glasses and Auracast/loop installs to theatres, courts, clinics and museums that must now prove accessibility.

*Runner-ups worth a look:* EU teleoperation/data-collection studio for robot labs (F1); repairer-facing verified spare-parts print network under Right to Repair (F10); 2G/3G legacy-fleet migration for housing associations and lift companies (F14); batched residential PV health checks (F6); scan-to-signed-document vertical services (F7).

---

## 3. Crowded / avoid

- **Reselling or renting humanoids for events** — low barrier, dealer margins compressing, Unitree sells direct and rents at $299/day.
- **Generic "AI drone inspection analytics" for solar farms and turbines** — Sitemark, SkyVisor, vHive, Aerones, Quali Drone; pricing already at $150/MW for repeat contracts.
- **Drone delivery** — capital-intensive, killed by municipal planning even for LUC holders (Manna, Ireland); leave it to Manna/Wing/Uber.
- **Consumer BCI and "focus" wearables** — a licensing game owned by sensor companies (Neurable, Emotiv); no open platform in Europe.
- **CGM-for-wellness coaching apps** — crowded, MDR-adjacent, dependent on Abbott/Dexcom's EU rollout timing.
- **Designing your own sensor/drone/robot hardware** — every finding above works better on off-the-shelf Chinese or Pi/Jetson hardware; hardware design burns the entire €100k before a single customer.
- **Generic Copernicus dashboards** — dozens exist; only deadline-tied vertical services (EUDR, CAP) monetise.
- **Building on Meta's glasses SDK from Europe** — geo-fenced capabilities and no EU device until 2027 at the earliest.
- **Lethal or kinetic counter-drone / weapons components** — regulatory, ethical and licensing burden far beyond a tiny team; the non-lethal detection/compliance side captures most of the accessible value anyway.

---

## 4. Confidence notes and gaps

- **Not verified in this session** (search budget exhausted, page fetches blocked): Unitree L2 LiDAR pricing; a true sub-$200 3D solid-state LiDAR; UK Product Regulation and Metrology Act secondary legislation on e-bike batteries; continental reimbursement paths for radar fall detection; Gaussian-splat real-estate startups in Europe; metal-printing cost curves; drone-component "made in Europe" supply-chain rules. All flagged inline.
- **Highest-confidence facts:** regulation dates (Data Act 12 Sept 2025/2026; Right to Repair 31 July 2026; EUDR 30 Dec 2026 / 30 June 2027; Machinery Regulation 20 Jan 2027; Battery Regulation replaceability 18 Feb 2027; EN 15194 from 1 Jan 2026; EAA 28 June 2025), the 2025 airport incident timeline, SAFE amounts and dates, the drone-spraying legislative path, Unitree/SO-101 price tiers, Meta EU block.
- **Most speculative inferences:** wedge sizes and price points marked **[inference]** — validate each with five customer conversations before committing.
