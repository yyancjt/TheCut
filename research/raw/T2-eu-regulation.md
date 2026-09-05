# T2 — EU / Western European regulation that creates mandatory demand, 2025–2028

*Research date: 5 September 2026. Method: 55 web searches (2025–2026 sources preferred); direct page fetches were blocked by the sandbox proxy, so facts come from search-result excerpts of law-firm trackers, regulator pages and trade press. Each item marks **[Confirmed]** (multiple consistent 2026 sources) vs **[Inference]** (my reading of the gap). Status after the 2025–26 "Omnibus" packages has been checked for every item.*

Founder profile assumed throughout: 1–3 technical people, <€100k, 6–9 months to v1, Western Europe, wants non-obvious second-order plays, not generic B2B SaaS/copilots.

---

## 0. The 30-second map of what actually changed in 2026

- **AI Act**: high-risk obligations were **delayed** by the Digital Omnibus on AI (Reg. (EU) 2026/1744, OJ 24 Jul 2026, in force 27 Jul 2026): Annex III standalone high-risk → **2 Dec 2027**; Annex I product-embedded → **2 Aug 2028**. Article 50 transparency/deepfake labelling **did apply 2 Aug 2026** (with a 4-month grace to 2 Dec 2026 only for gen-AI systems already on the market). AI literacy (Art. 4) softened from "ensure" to "take measures to support". ([Council](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/), [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/), [Spicy Advisory](https://spicyadvisory.com/blog/digital-omnibus-ai-act-2026-what-changed), [lawandtechnology.eu](https://lawandtechnology.eu/en/ai-literacy-digital-omnibus-article-4-ai-act/), [Usercentrics](https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/))
- **GDPR/cookie part of the Digital Omnibus**: still in trilogue; the cookie articles (88a/88b) were stripped from the Council's June 2026 text. Not law. ([CookieBeam](https://cookiebeam.com/guides/eu-digital-omnibus-cookie-consent-2026), [Secure Privacy](https://secureprivacy.ai/blog/eu-digital-omnibus-what-article-88a-changes-for-cookie-consent-2026))
- **CSRD/CSDDD (Omnibus I)**: final directive published OJ 26 Feb 2026; CSRD scope now >1,000 employees **and** >€450m turnover; suppliers under 1,000 employees may only be asked for VSME-scope data (the "value-chain cap"). ([Lexology](https://www.lexology.com/library/detail.aspx?g=1f627ab7-e226-4ad6-81fd-d934e700b34a), [PwC](https://viewpoint.pwc.com/gx/en/pwc/in-briefs/ib_int202527.html), [Accountancy Europe](https://accountancyeurope.eu/publications/omnibus-explained-key-changes-to-the-csrd-and-csddd/))
- **EUDR**: postponed again (Dec 2025 revision): **30 Dec 2026** for medium/large, **30 Jun 2027** for micro/small; Commission says no third extension. ([Council](https://www.consilium.europa.eu/en/press/press-releases/2025/12/18/deforestation-council-signs-off-targeted-revision-to-simplify-and-postpone-the-regulation/), [Hogan Lovells](https://www.hoganlovells.com/en/publications/eu-deforestation-regulation-commission-publishes-simplification-package-ahead-of-december-2026))
- **Battery due diligence**: postponed to **18 Aug 2027** (Reg. 2025/1561, Omnibus IV). Battery passport **18 Feb 2027 unchanged**. ([Council](https://www.consilium.europa.eu/en/press/press-releases/2025/07/18/simplification-council-adopts-law-to-stop-the-clock-on-due-diligence-rules-for-batteries/), [infodpp.eu](https://infodpp.eu/en/blog/battery-due-diligence-delay-2025-1561/))
- **Not delayed**: CRA (reporting 11 Sep 2026), Data Act (access-by-design 12 Sep 2026; cloud egress-fee ban 12 Jan 2027), EAA (live since Jun 2025, enforcement ramping), PPWR (12 Aug 2026), Right to Repair (31 Jul 2026), VoP (live Oct 2025), NIS2 national laws (DE Dec 2025, NL 15 Aug 2026), e-invoicing mandates (BE live Jan 2026, FR live 1 Sep 2026, PL Feb/Apr 2026, DE 2027/28, ES Jul 2027).

---

## 1. EU AI Act (post-Omnibus)

**(a) Requirement & dates.** [Confirmed] GPAI obligations applied 2 Aug 2025. Article 50 transparency (chatbot disclosure, machine-readable marking of synthetic output, deepfake labelling, AI text on public-interest topics) applies from **2 Aug 2026**; Commission guidelines adopted 20 Jul 2026; first draft Code of Practice on marking/labelling published; content generated *and* published before 2 Aug 2026 need not be retro-labelled ([Commission FAQ](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act), [Stibbe](https://www.stibbe.com/publications-and-insights/the-ai-acts-transparency-obligations-rules-scope-and-timeline)). High-risk: Annex III (HR screening, credit scoring, education admission/grading, essential services) → **2 Dec 2027**; Annex I → **2 Aug 2028** ([CSA](https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-omnibus-vii-deadline-delay-20260/), [FPF](https://fpf.org/blog/the-ai-act-implementation-timeline-what-changes-under-the-ai-omnibus/)). Article 4 literacy now an obligation of effort ([lawandtechnology.eu](https://lawandtechnology.eu/en/ai-literacy-digital-omnibus-article-4-ai-act/)).

**(b) Who/how painful.** Every deployer of a chatbot or generator of synthetic media in the EU (millions). SMEs *deploying* HR/credit/education AI now have until Dec 2027 for FRIA/logging/human-oversight duties; realistically most will do nothing until Q3 2027. Pain today is Article 50: agencies, e-commerce shops using AI product imagery, newsrooms, political comms.

**(c) Vendors/underserved.** Crowded: AI-governance SaaS (Credo, Holistic, VerifyWise, dozens more), "AI literacy" course sellers. Underserved: **marking/labelling at the media-file level** for small creative agencies, real-estate photo retouchers, e-commerce catalogue teams — they need C2PA/IPTC provenance injected into their existing pipeline, not a governance dashboard.

**(d) Non-obvious adjacent.** (i) A **provenance-stamping proxy for ad/creative pipelines** (upload → returns C2PA-signed + visibly labelled variants per platform spec) sold to agencies per seat. (ii) An **"AI-disclosure audit for job ads/recruiting funnels"** sold to staffing agencies ahead of Dec 2027. (iii) Insurance-adjacent: certificates of Article 50 conformity for influencer/UGC networks.

**(e) Feasibility.** High for (i): pure software, spec is public, demand exists now; the 2026 grace window means buyers are actively looking. Medium for high-risk plays — delayed 16 months, so revenue is 2027.

---

## 2. Cyber Resilience Act (CRA)

**(a)** [Confirmed] Reg. (EU) 2024/2847, in force 10 Dec 2024. Notified-body provisions applied 11 Jun 2026; **Article 14 reporting (actively exploited vulns/severe incidents: 24h early warning, 72h notification, via ENISA single reporting platform) from 11 Sep 2026**; full essential requirements incl. SBOM, security-by-default, 5-year support, CE marking **11 Dec 2027**. No harmonised standard yet in the OJ (as of Aug 2026); the Commission pushed the M/606 standardisation deadlines back 2 months; **zero notified bodies designated** as of late June 2026 ([cyberresilienceact.eu](https://www.cyberresilienceact.eu/news/cra-notified-bodies-rules-apply-11-june-2026.html), [standards tracker](https://craevidence.com/cra-compliance/harmonised-standards-status), [HeroDevs](https://www.herodevs.com/blog-posts/cra-reporting-obligations-start-september-2026-what-eol-dependencies-mean-for-your-compliance)).

**(b)** Commission impact assessment: ~615,000 manufacturers/products in scope ([cyberresilienceact.eu](https://www.cyberresilienceact.eu/explained.html)). Importers and distributors must verify CE/SBOM/conformity; non-EU manufacturers must appoint an EU authorised representative; there is **no SME threshold** on importer/distributor duties ([AKD](https://www.akd.eu/insights/the-cyber-resilience-act-cybersecurity-obligations-for-importers-and-distributors), [CRA Evidence](https://craevidence.com/cra-compliance/importer)). Open-source stewards get light duties and are shielded from fines on 24h warnings ([Stribog](https://stribog.com/blog/eu-cyber-resilience-act-cra-open-source-obligations-self-hosted)).

**(c)** Crowded: SBOM tooling for enterprises (Anchore, Cycode, Finite State, Interlynk, sbomify). Underserved: (1) **micro hardware brands** (Kickstarter/Tindie/Shopify gadget sellers, e-bike display makers, smart-home accessory importers) who have never done a technical file; (2) **Chinese/US manufacturers needing an EU authorised representative** — the "EU Rep" business exists for GPSR/MDR/toys but almost none offer the CRA-specific mandate (vuln handling contact, ENISA reporting cooperation); (3) **distributors/marketplace sellers** who must *verify* SBOM presence but have no tool to do so.

**(d)** (i) **CRA Authorised Representative as a product**: a legal EU entity + per-SKU dossier + ENISA-report-on-behalf service, priced €X/SKU/year, marketed to Shenzhen makers via Alibaba/Kickstarter — a physical-legal service US startups won't build. (ii) **"Vulnerability-handling-as-a-service" for tiny firmware makers**: monitored security@ inbox, CVE triage, 24/72h ENISA filing, published advisory page — the Article 13/14 obligations outsourced. (iii) A **buyer-side SBOM-verification checker for distributors/importers** (upload supplier docs → gap report) — sells to the 10× larger population of resellers.

**(e)** High for (i)/(ii): 1–3 people can run this (partner with one lawyer for the mandate template; ENISA platform is a form). Standards vacuum means "good-faith documented process" is the bar until Dec 2027. Very defensible: requires EU presence, language, and legal liability appetite.

---

## 3. NIS2 national transpositions and DORA supply-chain push-down

**(a)** [Confirmed] DE: NIS2UmsuCG in force 6 Dec 2025; BSI registration deadline 6 Mar 2026, then a tolerance to 31 Jul 2026 ([heise](https://www.heise.de/en/news/The-clock-is-ticking-NIS2-registration-deadline-at-BSI-expires-on-March-6-2026-11182664.html), [Schutzwerk](https://www.schutzwerk.com/en/blog/nist-2-erweiterung/)). NL: Cyberbeveiligingswet in force **15 Aug 2026**, registration with NCSC mandatory from then ([dsn group](https://www.dsn-group.com/privacy-notes/less-than-a-month-to-go-nis2-in-the-netherlands-is-set-for-15-august-2026)). BE: law since 18 Oct 2024; essential entities' CyFun/ISO self-assessment due **18 Apr 2026** ([CCB](https://ccb.belgium.be/news/nis2-18-april-2026-deadline-what-essential-entities-must-have-place)). DORA applies since 17 Jan 2025; registers of information were re-submitted Feb–Mar 2026; Article 30 contract clauses must flow down to subcontractors ([FMA](https://www.fma.gv.at/en/cross-sectoral-topics/dora/dora-managing-of-ict-third-party-risk/), [regulation-dora.eu](https://www.regulation-dora.eu/blog/dora-third-party-ict-providers-guide-for-suppliers)).

**(b)** DE ~29,500 entities, only ~11,500 registered by March 2026 ([Reed Smith](https://www.reedsmith.com/our-insights/blogs/viewpoints/102n52v/nis2-in-germany-last-deadline-for-registration/)). The second-order population is 10× larger: every **small ICT supplier** to a NIS2/DORA entity now receives security questionnaires and DORA Art. 30 contract addenda.

**(c)** Crowded: GRC platforms, ISO 27001 automation (Vanta, Drata, Secfix, etc.), MSSPs. Underserved: the **5–30-person software/hosting/IoT vendor** that must *answer* 20 divergent customer questionnaires and sign DORA addenda; Belgian **CyFun "Small/Basic" level** self-certification for micro suppliers.

**(d)** (i) A **DORA-addendum negotiation kit + evidence pack** for small ICT vendors (register-of-information export in the ESA template, sub-contractor chain map, exit plan template) — sold once per customer contract, not as a platform. (ii) **Shared "supplier attestation" for a vertical** (e.g., all dental-practice software vendors in NL get one audited pack). (iii) Physical: **incident-drill-in-a-box** for the 24h/72h reporting duties that NIS2 and CRA now both impose.

**(e)** Medium. Real demand, but it is consulting-shaped; productisable if narrowed to one country + one vertical.

---

## 4. Data Act

**(a)** [Confirmed] Applies since 12 Sep 2025 (user access-on-request to product data, unfair-terms rules, B2G). **Access-by-design (Art. 3) for connected products placed on the market from 12 Sep 2026** — data must be directly available to the user by default, machine-readable, real-time where feasible ([Wilson Sonsini](https://www.wsgr.com/en/insights/eu-data-act-september-2026-deadline-what-businesses-need-to-know.html), [Gaming Tech Law](https://www.gamingtechlaw.com/2026/08/data-act-access-by-design/)). Cloud switching: charges capped at cost now; **banned from 12 Jan 2027** ([Alston & Bird](https://www.alston.com/en/insights/publications/2025/09/eu-data-act-switching-requirements-cloud-services)). Digital Omnibus proposes legacy-contract exemptions for SMEs (not yet law) ([MoFo](https://www.mofo.com/resources/insights/251222-top-10-questions-about-the-eu-data-act)).

**(b)** Every manufacturer of a connected product sold in the EU (appliances, agri-machinery, e-bikes, HVAC, wearables) and every "related service" provider. Micro/small enterprises are exempt from Art. 3–7 as data holders unless controlled by a larger firm — so pain sits with **mid-size Mittelstand machine builders** and with **users** who now have a right they cannot exercise.

**(c)** Vendors: IoT platform vendors bolt on "Data Act portals"; law firms sell contract packs. Underserved: (1) the **user side** — farmers, fleet operators, facility managers who can now demand data from John Deere/Bosch/Daikin and give it to a third party but have no standard way to request, receive and use it; (2) small OEMs' **data-sharing contract & pricing** (FRAND-like terms for B2B sharing).

**(d)** (i) **"Data Act request broker"**: a service that files Art. 4/5 requests on behalf of users/independent repairers/insurers, normalises the returned data, and resells access — the independent-repair and agri-cooperative angle is strong. (ii) **Aftermarket-analytics for a single product class** (e.g., heat pumps: pull manufacturer data via Data Act, sell performance benchmarking to installers). (iii) Cloud-exit: a **fixed-price migration service** timed for the Jan 2027 fee ban, for one stack (e.g., Azure→Hetzner/OVH) — physical-ish, unglamorous, cash-generating.

**(e)** High for (ii)/(iii). (i) needs volume but the legal lever is unique to the EU.

---

## 5. eIDAS 2.0 / EUDI Wallet / Business Wallet

**(a)** [Confirmed] Member States must offer at least one certified wallet by **24 Dec 2026**; Implementing Reg. 2025/848 requires national **relying-party registers** (web + API) from 24 Dec 2026; QEAA/EAA implementing regs in force Aug 2025; the Commission doubts all 27 will make the date; FR, AT, IT have early wallets ([eideasy](https://www.eideasy.com/blog/eu-digital-identity-wallets-july-2026), [Commission](https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/pages/915931811/The+European+Digital+Identity+Regulation), [b2trust](https://b2trust.com/en/blog/eidas-2-implementation-status-eu-27-q2-2026)). **European Business Wallet** regulation proposed Nov 2025, not adopted ([ECIJA](https://www.ecija.com/en/news-and-insights/european-business-wallets-novedades-que-impactan-en-el-ecosistema-de-eidas/)). Banks, telcos, VLOPs and other SCA-using services must accept wallets 36 months after the implementing acts (≈ late 2027) — [Inference on exact date; the "accept" obligation is in Art. 5f]. QEAA providers are "formally open but thinly populated" on trusted lists ([b2trust](https://b2trust.com/en/blog/eidas-2-implementation-status-eu-27-q2-2026)). Switzerland's state e-ID launches **1 Dec 2026** with a public verifier register ([ID Tech](https://idtechwire.com/switzerland-delays-national-e-id-launch-to-december-2026-amid-security-and-acceptance-concerns/)). UK DVS Trust Framework 1.0 effective ~1 Sep 2026 ([ID Tech](https://idtechwire.com/uk-begins-transition-to-digital-verification-services-framework-1-0/)).

**(b)** Relying parties: every business that will verify identity/age/attributes via wallet must register nationally and declare intended attributes — tens of thousands over 2027–28; low pain now, forced later.

**(c)** Crowded: wallet SDKs, KYC vendors (walt.id, Gataca, Zyphe, Authologic…). Underserved: **attribute issuance for niche credentials** (trade licences, professional registrations, membership, diploma micro-credentials) — the QEAA/EAA issuer side for non-government bodies; and **relying-party registration as a service** across 27 registers + CH + UK.

**(d)** (i) **"Issuer-in-a-box" for professional bodies and chambers** (electricians' guild, notaries, sports federations): they issue EAAs; you run the issuer + revocation and charge per credential. (ii) **Multi-country relying-party registration + wallet-acceptance test suite** for mid-size e-commerce/marketplaces (must accept wallets, not just national eIDs). (iii) **Age-verification via wallet for small adult/gambling/alcohol e-commerce** in DE/FR where OSA-style enforcement is arriving — cheaper than biometric vendors.

**(e)** Medium: standards are moving; but a two-person team can build an issuer against the ARF reference stack in 6 months. Timing risk: real volume 2027–28.

---

## 6. Instant Payments Regulation — Verification of Payee (VoP)

**(a)** [Confirmed] Euro-area PSPs had to offer VoP from **9 Oct 2025** (non-euro 9 Jul 2027). Corporates may opt out for bulk files; ERPs must store VoP outcome codes; pain.001.001.03 formats lose validity Nov 2026 ([EPC bulk FAQ](https://www.europeanpaymentscouncil.eu/faq/verification-payee-scheme/rulebook/clarifications-about-provision-vop-services-bulk-files), [RedCompass](https://www.redcompasslabs.com/insights/verification-of-payee-has-arrived-in-europe-6-big-lessons/), [SAP](https://community.sap.com/t5/financial-management-blog-posts-by-sap/verification-of-payee-vop-what-is-planned-in-sap-s-4hana-cloud-erp/ba-p/14144548)).

**(b)** Every euro-area business making transfers; obligation is on PSPs, but the *friction* lands on payers and payees: soft mismatches from trading names, "Müller/Mueller", legal-form abbreviations, factoring/collective accounts; e-commerce "no match" warnings on correct payments ([Gini](https://gini.net/en/blog/verification-of-payee/), [Banking.Vision](https://banking.vision/en/verification-of-payee-a-field-report)).

**(c)** Crowded: bank-side VoP engines, IBAN-name APIs (iban.com, SurePay, Trustpair). Underserved: **payee-side hygiene** — SMEs whose invoices carry a brand name that doesn't match the bank's account-holder string, causing lost/late payments; associations and tradespeople whose "name on account" is a person.

**(d)** (i) **"VoP-safe invoice" checker/badge for invoicing tools and marketplaces**: pre-check whether the payee string on a template will match; propose canonical name; generate a QR/EPC code with the matching name. (ii) **Master-data cleansing feed for accounting firms** (batch-check a client's whole creditor list before the 2026 format cut-over). (iii) Insurance angle: **misdirected-payment cover for SMEs** bundled with the check. (iv) A **directory of legal-name↔trading-name mappings** (open data + crowd-corrected) licensed to ERPs.

**(e)** High for (i)/(ii): API-based, small surface area, sells through accountants and invoicing apps. Note VoP APIs are bank-gated; partner with one PSP or use existing aggregators.

---

## 7. E-invoicing / e-reporting mandates

**(a)** [Confirmed]
- **DE**: receive since 1 Jan 2025; issue from 1 Jan 2027 (>€800k prior-year turnover), 1 Jan 2028 all; §19 Kleinunternehmer exempt from issuing but must receive and archive GoBD-compliant in original XML ([Advisori](https://www.advisori.de/en/blog/e-invoicing-mandate-germany), [kostenlose-erechnung.de](https://kostenlose-erechnung.de/ratgeber/e-rechnung-vereine/)).
- **FR**: **live 1 Sep 2026** — all firms must receive; large/ETI must issue; SMEs/TPE/micro issue from 1 Sep 2027; 149 accredited Plateformes Agréées (ex-PDP) ([impots.gouv](https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees), [presse-citron](https://www.presse-citron.net/facturation-electronique-entre-vigueur-aujourdhui-voici-149-plateformes-agreees-france/)).
- **BE**: B2B Peppol mandate live 1 Jan 2026; tolerance ended 31 Mar 2026; fines €1,500/3,000/5,000 ([peppolvalidator](https://peppolvalidator.com/peppol-belgium), [Vertex](https://www.vertexinc.com/resources/resource-library/belgiums-2026-e-invoicing-regulations-explained-scope-deadlines-and-penalties)).
- **PL KSeF**: receive for all from 1 Feb 2026; issue 1 Feb 2026 (large) / 1 Apr 2026 (others); micro ≤ PLN 10k/month exempt until 1 Jan 2027; penalties from 2027 ([infakt](https://www.infakt.pl/blog/wdrozenie-ksef-harmonogram-2026-r/)).
- **ES Verifactu**: postponed by RDL 15/2025 to **1 Jan 2027** (companies) / **1 Jul 2027** (autónomos) ([Infobae](https://www.infobae.com/espana/2025/12/02/hacienda-aplaza-hasta-2027-la-obligacion-de-facturar-con-verifactu-para-autonomos-y-pymes/)).
- **IT**: all forfettari on SdI since 1 Jan 2024; 2026 change is stricter automated checks ([Fatture in Cloud](https://www.fattureincloud.it/guida-fatturazione-elettronica-forfettario/obbligo-fattura-elettronica/)).
- **DK**: Bookkeeping Act phase for sole proprietors >DKK 300k from 1 Jan 2026 (unregistered systems by 1 Jul 2026); Peppol BIS/OIOUBL + SAF-T ([KPMG](https://kpmg.com/us/en/taxnewsflash/news/2026/03/denmark-latest-work-2026-agenda-digital-bookkeeping-and-e-invoicing.html)).
- **ViDA**: adopted 11 Mar 2025; intra-EU DRR from 1 Jul 2030; states may now mandate domestic e-invoicing without derogation ([Commission](https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en)).

**(b)** Millions of micro-firms. Pain is not "make an XML" (free tools exist) but **receiving, validating, archiving, and paying** incoming e-invoices for people who have no accounting system: German Vereine, Handwerker, landlords, farmers, French TPEs who must pick a PA, Belgian sole traders now being fined.

**(c)** Crowded: issuing software (sevdesk, Lexware, Tiime, Zoho, 149 French PAs, Peppol access points). Underserved: **inbound-only** for the non-issuer (Kleinunternehmer/associations/private landlords); **verticals with weird invoice content** (construction with retention/Bauabzugsteuer, agriculture, healthcare); **cross-border micro-sellers** who face 4 mandates at once; **accountants' bulk onboarding** of hundreds of tiny clients onto Peppol.

**(d)** (i) **Inbox-as-a-mailbox**: an e-mail address per Verein/landlord that receives XRechnung/ZUGFeRD/Peppol, validates, renders human PDF, archives GoBD-compliant for 10 years, and pushes a pay-link — €3/month, distributed via Sparkassen/tax advisors. (ii) A **Peppol "receive-only" identity for associations** in BE/DE. (iii) **E-invoice → VoP-safe payment** bridge (ties to §6). (iv) **Data feed**: anonymised price indices from structured invoice flows (construction materials, energy) — second-order value of the XML.

**(e)** Very high: small, boring, forced, recurring; competition strong at the issuing end, weak at the receiving end for non-businesses.

---

## 8. Digital Product Passport (ESPR) and EU Battery Regulation

**(a)** [Confirmed] Battery passport mandatory **18 Feb 2027** for EV, LMT (e-bike/scooter) and industrial >2 kWh batteries; initial content is identification + technical characteristics; access-rights delegated act due 18 Aug 2026 ([Circularise](https://www.circularise.com/blogs/eu-battery-passport-regulation-requirements), [PassportCraft](https://passportcraft.com/insights/eu-battery-passport-guide)). Battery due diligence postponed to 18 Aug 2027 ([Bitkom](https://bitkom-compliance-solutions.com/en/news/omnibus-iv-entry-application-battery-due-diligence-obligations-officially-postponed)). ESPR Working Plan (Apr 2025): iron & steel delegated act 2026 (first), textiles/tyres/aluminium 2027, furniture 2028, mattresses 2029; first acts already slipped to mid-2026 ([dpp-tool](https://dpp-tool.com/en/blog/espr-delegated-acts/), [Renoon](https://www.renoon.com/blog/delegated-acts-for-digital-product-passport-explainer-and-current-status)).

**(b)** Battery: every e-bike/e-scooter/cargo-bike brand, battery pack assembler, forklift/ESS importer — thousands of SMEs, many importing Asian packs. Textiles DPP: ~2028–29 in practice.

**(c)** Crowded: DPP platforms (Circularise, Nulara, digiprodpass, PassportCraft, dpp-tool, Kezzler, Spherity). Underserved: **micro e-bike/LEV brands and battery re-packers** who need a passport per battery *and* a QR data-carrier physically applied, plus the upcoming **Data Act-style access-rights** implementation; **repair shops** that will be obliged to update passport state-of-health data.

**(d)** (i) **Battery passport + label printing kiosk for e-bike shops and pack assemblers** (hardware-plus-service: label printer, tester, cloud record) — physical, local. (ii) **Second-life battery marketplace keyed on passport data** (SoH is legally required to be recorded; whoever aggregates it owns resale). (iii) **Textile DPP data-capture for made-to-order/ateliers** ahead of 2028.

**(e)** Medium-high for (i): a real Feb 2027 date, small buyers, unglamorous. Avoid building a generic DPP platform.

---

## 9. EUDR

**(a)** [Confirmed] Application **30 Dec 2026** (medium/large + micro/small already under EUTR) and **30 Jun 2027** (other micro/small); micro/small primary operators in low-risk countries have simplified duties; DDS filed in TRACES with plot geolocation (six-decimal coordinates / polygons >4 ha) ([Access2Markets](https://trade.ec.europa.eu/access-to-markets/en/news/delay-until-december-2026-and-other-developments-implementation-eudr-regulation), [Commission update Jul 2026](https://environment.ec.europa.eu/news/commission-updates-product-scope-and-tools-support-eudr-2026-07-13_en), [Coolset SME guide](https://www.coolset.com/academy/eudr-reporting-guide-for-smes)).

**(b)** Coffee roasters importing green beans, chocolate makers, furniture/wood importers, rubber-goods, leather, printed paper. Downstream SMEs need only collect DDS references — but must still do it.

**(c)** Crowded: enterprise traceability (TraceX, Osapiens, Sourcemap, Coolset). Underserved: **micro roasters and craft chocolate/furniture makers** buying from 3–10 origins; **origin-side smallholder cooperatives** in West Africa/Latin America who must supply polygons.

**(d)** (i) **Shared DDS filing cooperative for specialty roasters** (one operator files, members reference) — a legal-structure product. (ii) **Origin-side geolocation-as-a-service**: field teams with GNSS + satellite verification selling plot polygons to exporters (physical service, high margin). (iii) **Deforestation-risk data feed per plot** priced per DDS.

**(e)** High for (i) in DE/NL/BE/Nordic specialty coffee. (ii) needs an origin partner but is defensible.

---

## 10. CSRD / CSDDD after Omnibus → VSME

**(a)** [Confirmed] Omnibus I in OJ 26 Feb 2026: CSRD only >1,000 employees & >€450m turnover; **value-chain cap** — suppliers <1,000 employees may only be asked for VSME-scope data; VSME delegated act expected mid-2026 ([DLA Piper](https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/2026/eu-council-approves-omnibus-i-directive), [mybusinessfuture](https://mybusinessfuture.com/en/csrd-after-2026-eu-omnibus-who-still-reports-and-what-esrs-relief-means-for-smes/)).

**(b)** Roughly 80% of the original CSRD population dropped out — but the ~5,000 remaining giants still send supplier questionnaires; SMEs now have a legal shield (VSME) and a standard format.

**(c)** Crowded: ESG SaaS (hundreds), consultants. Underserved: **VSME as a one-off document** for 10–200-person suppliers, priced like a tax return; **sector-specific VSME data (emission factors for bakeries, foundries, print shops)**.

**(d)** (i) **VSME "tax return" via accountants** — white-label, €500 per report, generated from bookkeeping + utility bills. (ii) **A "you may refuse this" tool**: analyses incoming buyer questionnaires against the VSME cap and generates the legally-grounded pushback. (iii) Trade-association shared reports.

**(e)** Medium: demand is real but price sensitivity is extreme; distribution via accountants is the only path.

---

## 11. European Accessibility Act (and DE BFSG)

**(a)** [Confirmed] Applies since 28 Jun 2025 to e-commerce, banking, ticketing, e-books, transport apps, terminals; services by micro-enterprises (<10 staff, <€2m) exempt. Enforcement: first French lawsuits Nov 2025; Sweden's PTS auditing 200 e-commerce sites by Q3 2026; NL active in H2 2026; DE fines from early 2026, Länder MLBF using automated scanning from Q3 2026, professionalised Abmahnung wave; average German site meets 49% of criteria ([Plaintest](https://www.plaintest.dev/blog/eu-accessibility-act-enforcement-2026/), [XICTRON](https://www.xictron.com/de/blog/bfsg-abmahnwelle-2026-barrierefreiheit-durchsetzen), [marcus-herrmann](https://marcus-herrmann.com/blog/mlbf-verraet-wie-sie-pruefen-will), [pressemitteilungen-news](https://www.pressemitteilungen-news.de/1-jahr-barrierefreiheitsstaerkungsgesetz-die-abmahnwelle-wird-professioneller-der-markt-steht-erst-bei-49)). Benchmarks: 97% of e-commerce sites non-compliant; 77% of SMBs unaware ([Searchlab](https://searchlab.nl/en/statistics/digital-accessibility-statistics-2026)).

**(b)** Every non-micro online shop, bank, ticket seller — hundreds of thousands. Pain is now enforcement-driven (fines, Abmahnungen), not deadline-driven.

**(c)** Crowded: overlay widgets (legally dubious), audit agencies, checkers, Shopify apps. Underserved: **remediation of third-party components** (payment iframes, cookie banners, chat widgets, PDF invoices), **accessible PDF generation** (invoices, e-books, tickets), **Abmahnung response**.

**(d)** (i) **Accessible-document rendering API** (PDF/UA invoices, tickets, statements) — a compliance-as-a-product for the millions of auto-generated PDFs that fail EAA. (ii) **Fix-it service with insurance**: fixed-fee remediation + warranty against Abmahnung costs for WooCommerce/Shopware shops in DE. (iii) **Accessibility-conformance feed for e-commerce components** (rate every Shopware/Shopify plugin; sell to merchants and to the plugin vendors).

**(e)** High for (i) and (ii): enforcement is visibly rising in DE/SE/NL/FR; German Abmahnung culture makes "warranty" saleable.

---

## 12. Right to Repair, Ecodesign, AGEC, PPWR, textile EPR, DRS

**(a)** [Confirmed] **Right to Repair Directive** applied from 31 Jul 2026; manufacturer repair duty for products with EU reparability requirements (washers, dishwashers, fridges, displays, phones/tablets, vacuum cleaners, welding equipment, servers, e-bike batteries), European Repair Information Form, 12-month guarantee extension after repair, national repair platforms feeding an EU platform (Commission interface by 31 Jul 2027, fully operational 1 Jan 2028); transposition uneven, only a handful notified by deadline ([repair.eu](https://repair.eu/news/the-right-to-repair-directive/), [eutoday](https://eutoday.net/eu-right-to-repair-deadline-manufacturers/)). **PPWR** first obligations **12 Aug 2026** (DoC per packaging type, EPR registration, PFAS limits, recyclability); harmonised labels 12 Aug 2028+; no micro exemption except DoC shifts to same-state supplier ([Gleiss Lutz](https://www.gleisslutz.com/en/know-how/new-eu-packaging-regulation-key-requirements-august-2026), [cosh.eco](https://cosh.eco/en/articles/the-eu-packaging-and-packaging-waste-regulation)). **Textile EPR** (revised WFD in force 16 Oct 2025): schemes in all states within 30 months ≈ **Apr 2028**; applies to online/non-EU sellers ([Commission](https://environment.ec.europa.eu/news/revised-waste-framework-directive-enters-force-2025-10-16_en)). **AGEC durability index**: TVs since Jan 2025, washers Apr 2025; must display next to price online; fines €15k/€75k; 2026 texts to extend to e-bikes, food processors, hair dryers, speakers ([ecologie.gouv.fr](https://www.ecologie.gouv.fr/politiques-publiques/indice-durabilite)). **DRS**: Austria live 2025; Portugal live 8 Apr 2026; UK registration opens Q3 2026 for Oct 2027 launch ([Brodies](https://brodies.com/insights/environmental-social-and-governance/towards-a-uk-deposit-return-scheme-uk-government-reaffirms-its-commitment-to-an-october-2027-launch/)).

**(b)** Repair: every brand in the covered categories must offer repair at reasonable price/time and publish the form — including small e-bike and display brands. PPWR: every brand/importer placing packaging, no headcount floor. Textile EPR: every small fashion brand/Etsy seller into the EU from 2028.

**(c)** Crowded: EPR registration agents (Lizenzero, ecosistant, Deutsche Recycling), returns/repair SaaS for enterprise (Claimlane). Underserved: **independent repairers** who must be listed on national platforms and will be flooded; **small brands without a repair network**; PPWR **Declaration of Conformity per packaging type** for micro-brands.

**(d)** (i) **Repair-network-as-a-service for small brands**: you sign 200 independent repairers, brands subscribe to satisfy the directive's repair duty, you own the repair-information-form generation and the guarantee-extension paperwork — a marketplace created by law. (ii) **Packaging DoC generator + recyclability grade per SKU** (photo of pack → material composition → DoC). (iii) A **durability/reparability index data feed** for marketplaces and price comparison sites in FR (mandatory display, fines).

**(e)** High for (i) in DE/FR/NL where repairer density is high; (ii) high and cheap; (iii) small but immediate.

---

## 13. Pay Transparency Directive

**(a)** [Confirmed] Transposition deadline **7 Jun 2026**; only SK, IT, LT, MT met it; DE law "early 2027 at earliest" with reporting/individual info rights not before Jun 2028; NL, SE, CZ, DK target 1 Jan 2027; first pay-gap reports (250+ staff) due 2027 on 2026 data, 100–149 staff by 2031 ([Morgan Lewis](https://www.morganlewis.com/pubs/2026/06/eu-pay-transparency-directive-the-deadline-for-transposition-has-passed-what-now), [DLA Piper DE](https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/2026/german-implementation-of-the-EU-gender-pay-transparency-directive-legislation-not-expected-before-2027-), [Ogletree NL](https://ogletree.com/insights-resources/blog-posts/netherlands-announces-delay-in-implementation-of-the-eu-pay-transparency-directive/)).

**(b)** All employers: salary range in job ads / before interview, no salary-history questions, worker right to information; 100+ staff: gap reporting. National slippage means 2027–28 for most.

**(c)** Crowded: pay-equity analytics (Syndio, Trusaic, beqom, Ravio, PayAnalytics). Underserved: **job-ad range compliance for the 5–99 employee firm** (which never reports but must publish ranges), and **works-council-facing** tools in DE.

**(d)** (i) **Salary-range data feed for job boards** (compliant ranges by role/region, sourced from the ranges the directive forces into the open) — the directive creates a public dataset that did not exist. (ii) Multi-country **"ad checker"** embedded in ATS/job boards.

**(e)** Medium: timing has slipped; (i) is a genuine data-business, best started by scraping IT/SK/LT/MT ads now.

---

## 14. Platform Work Directive and Product Liability Directive

**(a)** [Confirmed] PWD transposition **2 Dec 2026**; as of May 2026 only Italy had a draft, Spain a consultation ([Remote Work Europe](https://remoteworkeurope.eu/news/2026/platform-work-directive-enforcement-divergence-2026/)). PLD (2024/2853) transposition **9 Dec 2026**, applies to products placed on market after that; software incl. SaaS and AI is a "product"; ~1/3 of states have drafts, Hungary done, DE/NL close to text ([Jones Day](https://www.jonesday.com/en/insights/2026/06/the-revised-eu-product-liability-directive-state-of-play-across-eu-member-states-and-evolving-risk-landscape), [Faegre Drinker](https://www.faegredrinker.com/en/insights/publications/2026/6/transposing-the-eus-new-product-liability-directive-a-member-state-progress-report)).

**(b)** PWD: any platform algorithmically managing workers (not only Uber — also cleaning, care, tutoring, delivery micro-platforms) must document automated decision systems, provide human review, and information to workers. PLD: every software vendor gains strict liability with disclosure duties.

**(c)** PWD: near-zero SME tooling. PLD: insurers are only beginning to reprice software E&O.

**(d)** (i) **Algorithmic-management transparency pack for small labour platforms** (documented decision logic, human-review workflow, worker-facing notices) — a compliance-as-a-product sold to the hundreds of regional gig/care platforms. (ii) **PLD disclosure-readiness**: evidence-retention (SBOM, release notes, safety tests) packaged for small dev shops — overlaps with CRA (§2), sell once.

**(e)** Medium; (ii) folds neatly into a CRA offering.

---

## 15. EHDS and MDR/IVDR

**(a)** [Confirmed] EHDS (Reg. 2025/327) in force Mar 2025; implementing acts by 26 Mar 2027; EHR systems handling patient summaries/e-prescriptions face mandatory self-certification/CE-type regime from **26 Mar 2029** (imaging, lab, discharge 2031) ([Osborne Clarke](https://www.osborneclarke.com/insights/eu-establishes-mandatory-ce-marking-electronic-health-record-systems), [Kennedys](https://www.kennedyslaw.com/en/thought-leadership/article/2026/the-european-health-data-space-is-in-force-implications-for-healthcare-medtech-and-life-sciences/)). MDR/IVDR targeted revision proposed 16 Dec 2025 (2025/0404 COD) — revised software classification, fewer re-certifications; not adopted ([Baker McKenzie](https://healthcarelifesciences.bakermckenzie.com/2025/12/19/the-eus-2025-proposal-to-simplify-the-medical-and-in-vitro-diagnostic-devices-regulations-mdr-ivdr/)).

**(b)** Every small practice-management/EHR vendor (thousands, very local) must eventually ship an "EHR harmonised component" (interoperability + logging).

**(c)** No SME tooling yet. Opportunity: an **open-source/paid "EHDS harmonised logging + FHIR export component"** licensed to small EHR vendors — a component, not a platform.

**(e)** Medium-low for this founder horizon (2029), but a component built in 2027 can own the niche.

---

## 16. Buildings: EPBD, DE GEG/GModG, FR DPE bans, Flanders renovation duty

**(a)** [Confirmed] EPBD transposition due 29 May 2026; solar-ready/solar obligations start with new public/non-residential >250 m² by 31 Dec 2026; renovation passports; harmonised A–G EPC ([Oxand](https://oxand.com/en/epbd-2026-29-may-transposition-deadline-asset-owners/)). **DE**: the GModG passed Jul 2026, in force 29 Jul 2026 — the 65%-renewables heating rule and 30-year boiler replacement duty were **repealed**, technology-open framework; municipal heat-plan links for cities >100k by 30 Jun 2026, smaller by 30 Jun 2028 ([Bundestag](https://www.bundestag.de/dokumente/textarchiv/2026/kw28-de-heizungsgesetz-1194534), [Viessmann](https://www.viessmann.de/de/wissen/gesetze-und-verordnungen/heizungsgesetz.html)). **FR**: G-rated homes unrentable since 1 Jan 2025, F from 1 Jan 2028, E from 2034; the Jan 2026 DPE reform reclassifies ~850k homes out of F/G ([Trackstone](https://www.trackstone.fr/blog/gestion-locative/calendrier-interdiction-location-dpe)). **Flanders**: buyers of E/F homes must reach D within 6 years (tightening path scrapped); non-residential duty since 2022 ([Test-Aankoop](https://www.test-aankoop.be/woning-energie/isolatie/nieuws/renovatieverplichting-2026)).

**(b)** French landlords of F homes (hundreds of thousands) face a hard 2028 cliff; Flemish buyers each year; German heating market is now *deregulated*, so demand shifts from "forced switch" to "make the economic case".

**(c)** Crowded: energy-audit apps, installer marketplaces. Underserved: **F→E "minimum viable renovation" packages for small landlords** (what is the cheapest set of works to lift one letter under the new 2026 DPE method?), and **renovation-passport generation** once states define it.

**(d)** (i) **DPE-letter optimiser + fixed-price works bundle** for FR F-rated flats (physical service, geographic, 2028 deadline). (ii) **Flemish 6-year renovation-duty tracker with notary distribution.**

**(e)** High for (i) — deadline is hard and local; requires a partner installer network.

---

## 17. UK: Online Safety Act, DUAA, MTD ITSA, Procurement Act

**(a)** [Confirmed] OSA age assurance since Jul 2025; 2026 Ofcom fines £1.35m (8579 LLC), £800k (Kick), each paired with an information-request penalty; self-declaration explicitly insufficient ([Inforrm](https://inforrm.org/2026/03/11/ofcom-steps-up-online-safety-act-enforcement-with-two-further-age-assurance-fines-for-pornographic-platforms-alexandros-antoniou/)). DUAA: Smart Data Part 1 in force 20 Aug 2025; DVS Part 2 from 1 Dec 2025; DVS Trust Framework 1.0 from ~1 Sep 2026 ([DLA Piper](https://privacymatters.dlapiper.com/2026/02/uk-commencement-of-the-data-protection-provisions-in-the-data-use-and-access-act/), [ID Tech](https://idtechwire.com/uk-begins-transition-to-digital-verification-services-framework-1-0/)). MTD ITSA live 6 Apr 2026 (>£50k), >£30k Apr 2027, >£20k Apr 2028; quarterly updates via recognised software ([GOV.UK](https://www.gov.uk/government/collections/making-tax-digital-for-income-tax-for-sole-traders-and-landlords-step-by-step)). Procurement Act live 24 Feb 2025 with Central Digital Platform supplier registration ([GOV.UK](https://www.gov.uk/government/publications/procurement-act-2023-short-guides/central-digital-platform-factsheet-html)).

**(b)** MTD: ~1m+ landlords/sole traders per wave; many are landlords with 1–3 properties who have never used software. OSA: every small forum/community/dating/UGC site with UK users.

**(c)** MTD crowded (Xero, FreeAgent, dozens of bridging tools). Underserved: **landlord-only MTD via letting agents** (agent already has the rent data); OSA **evidence pack** for small forums (risk assessment + age-assurance proof to answer Ofcom information requests).

**(d)** (i) **Letting-agent-embedded MTD filing** (the agent files quarterly for all landlords from its own ledger). (ii) **OSA "answer-the-information-request" service** for micro-platforms — every fine so far had a second fine for failing to answer.

**(e)** High for (i) via agent partnerships; medium for (ii).

---

## 18. Low-key national mandates

- **NL WPM CO₂ commuting report**: threshold raised from 100 to **250** employees from 1 Jan 2026 — demand *shrank*; avoid ([RVO](https://www.rvo.nl/onderwerpen/rapportage-wpm/veelgestelde-vragen)).
- **BE mandatory mobility budget**: delayed to **1 Jan 2027** (≥50 staff), 2028 (15–49), <15 exempt ([BDO](https://www.bdo.be/en-gb/insights/articles/2025/understanding-the-mobility-budget-faq)). Vendors (Monizze, Muto, Mbrella) crowd it; a **works-council-ready policy generator for 50–200-staff firms** is a plausible small wedge.
- **Drone/U-space**: remote ID since 2024 for class-marked drones; Commission Drone Security Package (Q3 2026) proposes remote ID for all >100 g; U-space airspaces still sparse ([AirHub](https://www.airhub.app/resources/news/remote-id-easa-vs-uk-2026)). Opportunity is the **retrofit remote-ID module + registration service** for legacy fleets if the 100 g rule lands — watch, don't build yet.
- **EU Space Act**: proposal Jun 2025, Parliament first reading late 2026; ~€100k authorisation fees discussed ([Cooley](https://www.cooley.com/news/insight/2025/2025-07-24-the-proposed-eu-space-act-10-key-implications-us-and-non-eu-satellite-operators-should-know)). Too early.
- **DK digital bookkeeping / SAF-T**, **IT SdI stricter checks** — both create "immutable-ledger + SAF-T export" demand for the smallest businesses; a Nordic-Italian pattern worth noting but locally well-served.

---

## Top 7 opportunities from this track

1. **CRA Authorised Representative + vulnerability-handling desk for micro hardware makers and Asian OEMs.** From 11 Sep 2026 every manufacturer of a product with digital elements must be able to file 24h/72h ENISA notifications; from Dec 2027 needs a full technical file and an EU contact; non-EU makers need an EU rep. There are ~615k manufacturers/products in scope, zero notified bodies, no harmonised standards, and the existing "EU Rep" industry has not built a CRA offer. A two-person team with one lawyer can sell a per-SKU annual mandate (legal entity + monitored security inbox + filing + advisory page), acquired through Kickstarter/Tindie/Alibaba channels. US startups can't do this: it requires an EU legal person taking on liability. Recurring, defensible, boring.

2. **Inbound e-invoice mailbox for non-issuers (Vereine, landlords, tradespeople, Kleinunternehmer) in DE/BE/FR.** The issuing side has 149 French PAs and every accounting vendor; the receiving-and-archiving side for people without accounting software is empty, yet they are legally obliged (DE since 2025, BE fined since Apr 2026, FR since Sep 2026). Product: an e-mail/Peppol endpoint that validates, renders, archives GoBD/Peppol-compliant for 10 years and emits a pay link. €3–5/month, distributed via banks, tax advisors and federations of associations. Adjacent upside: the structured invoice stream becomes a price-index data feed.

3. **Repair-network-as-a-service for small brands under the Right to Repair Directive.** Since 31 Jul 2026 brands in covered categories (incl. e-bike batteries, displays, phones, appliances) must repair on request at reasonable price/time, issue the European Repair Information Form, and extend the guarantee 12 months; national repair platforms go live 2027–28. Small brands have no repair network; independent repairers have no B2B pipeline. Build the two-sided network in DE/NL/FR, own the form generation and guarantee paperwork, take a fee per repair. Law-created marketplace with a fixed onboarding wave.

4. **Accessible-document rendering API (PDF/UA invoices, tickets, statements) + Abmahnung-warranty remediation for shops.** EAA enforcement is now real (SE audit of 200 shops, DE fines from 2026, automated Länder scanning from Q3 2026, second Abmahnung wave); 97% of e-commerce fails; auto-generated PDFs are the universal blind spot. Sell an API that any invoicing/ticketing system calls, plus a fixed-fee remediation with a warranty against Abmahnung costs (insurance-shaped). Small, technical, immediate revenue.

5. **Battery passport + label kiosk for e-bike shops and pack assemblers (hardware-plus-service).** Hard date 18 Feb 2027 for LMT/industrial >2 kWh batteries; thousands of micro-brands and re-packers need a passport record and a physical QR carrier per battery, then SoH updates from repairers. Ship a label printer + tester + cloud record at a per-battery fee; the aggregated SoH data underwrites a second-life marketplace later. Competitors build enterprise DPP platforms and ignore the counter.

6. **VoP-safe payee hygiene for SMEs, sold through invoicing tools and accountants.** VoP is live for the euro area; name mismatches ("Müller/Mueller", trading vs legal name, personal accounts of sole traders) silently delay payments and the Nov 2026 pain.001 cut-over will add more friction. A pre-check + canonical-name + EPC-QR generator, plus batch cleansing of creditor lists, plus optional misdirected-payment cover. Thin API, wide distribution, and a name-mapping dataset that compounds.

7. **DPE F→E minimum-viable-renovation bundles for French small landlords before 1 Jan 2028.** Hard rental ban on F-rated homes in 16 months; the 2026 DPE method changed the arithmetic; hundreds of thousands of one-flat landlords need the cheapest set of works to move one letter. A local, physical service (audit → optimised works list → fixed-price bundle via partner installers → new DPE) with obvious unit economics and a deadline that generates its own marketing. Not software-first, but exactly the second-order, US-proof kind of business asked for.

---

## Crowded / avoid

- **AI-governance / AI Act compliance SaaS and AI-literacy training** — hundreds of vendors and the high-risk deadline just moved to Dec 2027.
- **Generic DPP platforms** and **generic ESG/CSRD software** — venture-funded incumbents, shrinking scope post-Omnibus.
- **Peppol access points and e-invoice issuing apps** — 149 accredited platforms in France alone.
- **NIS2/ISO 27001 automation GRC** — Vanta/Drata/Secfix et al.
- **Accessibility overlay widgets** — legally exposed and reputationally toxic.
- **EPR registration agents** and **pay-equity analytics** — established, price-competitive.
- **NL WPM reporting tools** — threshold rose to 250 staff; market shrank.
- **Cookie-consent tooling built for the Digital Omnibus** — the cookie articles were stripped from the Council text; do not build on them.
- **EU Space Act / U-space** — not yet law; too early for a 6–9-month runway.
- **Heat-pump-mandate plays in Germany** — the GModG repealed the 65% rule; demand is no longer forced.
