# T6 — Money, Identity, Payments, Stablecoins, Digital ID and E-invoicing in Western Europe (2024–2026)

**Prepared:** 2026-09-05 · **Audience:** solo/tiny technical founder (1–3 people, <€100k, 6–9 months to v1), Western Europe, non-obvious second-order opportunities.

## Method note and evidence quality (read first)

- Only **8 web searches** completed before the session's search budget was reported exhausted (the budget was shared with the parent session), and **all direct page fetches were blocked** by the network egress policy (finance.belgium.be, impots.gouv.fr, gov.uk, europeanpaymentscouncil.eu, consilium.europa.eu, openbanking.org.uk, coindesk, wikipedia, etc. all returned `connect_rejected`). The 20-search target could not be met.
- Every claim is tagged:
  - **[S]** confirmed in this session's search results, URL cited inline.
  - **[K]** prior knowledge as of mid-2026, not re-verified today — treat as "very likely true, verify before betting money".
  - **[I]** my inference/opinion.
- Dates, thresholds and vendor names tagged [K] should be re-checked against primary sources before any go/no-go decision.

---

## Findings

### F1. Verification of Payee (VoP) went live 9 Oct 2025 — and the pain landed on businesses, not banks

**(a) What changed.** Under the Instant Payments Regulation, every euro-area PSP offering SCT/SCT Inst had to implement Verification of Payee by **9 October 2025** [S] ([Banqr](https://www.banqr.io/blog-posts/verification-of-payee-mandatory-from-october-2025---what-banks-and-businesses-need-to-know), [Guru Pay](https://gurupay.eu/verification-of-payee-vop-what-changes-from-9-october-2025/), [SEB](https://sebgroup.com/our-offering/cash-management/payments/verification-of-payee-sepa)). Same date: mandatory instant *sending* at parity price; receive was mandatory from 9 Jan 2025 [K]. The EPC scheme returns match / close match / no match; matching logic is left to each PSP and Deutsche Bank was still "developing" its algorithm to handle virtual accounts and trade names [S] ([DB Corporates](https://corporates.db.com/in-focus/Focus-topics/instant-payments-vop/)). Typical mismatches: suppliers using **trade names instead of legal names**, truncated names, missing legal suffixes in ERP vendor master data [S] ([Banqr](https://www.banqr.io/blog-posts/verification-of-payee-mandatory-from-october-2025---what-banks-and-businesses-need-to-know), [Digiteal](https://www.digiteal.eu/verification-of-payee-vop/)). VoP is *not* applied by default to batch files; non-consumer payers can opt out per bulk file, but PSPs must be able to offer it, and "bulk verification is one of the most powerful use cases for software editors" with thousands of stored IBANs [S] ([Digiteal](https://www.digiteal.eu/verification-of-payee-vop/)).

**(b) Non-obvious implication.** The regulation created a Europe-wide, permanent, *free-at-the-bank-channel* name-check primitive — but the data-quality burden fell on 20m+ SMEs whose vendor masters and their *own* payee names (the name their customers type) were never designed to be string-matched. Two second-order effects: (1) sole traders and small companies whose customers pay to "Bäckerei Müller" but whose account name is "Hans Müller e.K." now generate *close match / no match* warnings on every incoming payment, which frightens consumer payers into abandoning transfers [I]; (2) each PSP's tolerance differs, so the same payee name yields different outcomes across banks — an opaque, testable, monetisable inconsistency [I].

**(c) Who's in pain.** Sole traders and SMEs with trading names (tradespeople, restaurants, associations, landlords with property-management names, married couples' joint accounts receiving rent); accounts-payable teams with large vendor masters; ERP/accounting vendors that must expose VoP results in payment runs [S/I]. Wedge: every euro-area business paying or receiving by transfer — effectively the entire SME base; the acute segment (trade-name mismatch) is plausibly 20–40% of micro-businesses [I].

**(d) Who's building.** SurePay (NL, the original IBAN-Name Check, now a scheme RVM), iban.com VoP API [S] ([iban.com](https://www.iban.com/verification-of-payee)), Trustpair (corporate AP fraud) [S] ([Trustpair](https://trustpair.com/blog/verification-of-payee/)), Digiteal (BE, bulk verification for software editors) [S], Banfico, Tink/Visa, Moody's KYC content [S]. Gap: **payee-side tooling** — nobody helps the *recipient* ensure their name matches across all sending banks; nobody offers a "how does my name resolve at ING/DB/BNP/Crédit Agricole" test bench; nobody sells a "put the right name on your invoice / QR code" fix for micro-firms [I].

**(e) Feasibility.** High. Payee-side name hygiene, invoice/QR-code (EPC QR, Girocode) name-alignment and a VoP "test bench" need **no licence** — you are not moving money or accessing accounts. Bulk-VoP-as-a-service for AP teams requires access to a scheme RVM or a bank partner (agent/partner model with SurePay/Digiteal/iban.com), still no PSP licence [I]. Risk: banks could quietly harmonise matching and shrink the pain; but trade-name mismatches are structural [I].

---

### F2. Instant payments at parity → real-time payouts and Request-to-Pay for verticals

**(a) What changed.** Since Oct 2025 every euro-area PSP must *send* SCT Inst 24/7 at no more than the price of a normal transfer, with VoP attached [S/K]. The EPC SEPA Request-to-Pay (SRTP) scheme exists but adoption has been thin, with the EPI/Wero stack likely becoming the de-facto consumer request-to-pay rail [K/I].

**(b) Implication.** Instant + cheap + verified means small operators can now offer *settlement as a feature* — insurance micro-claims, marketplace payouts, deposit refunds, tips, expense reimbursements, casual-labour wages — without card rails or an EMI. Batch "Friday payroll" for hourly workers, deposit returns for rentals, refunds for cancelled classes are all now instant and free from the bank's own API or bulk file [I].

**(c) Pain / payers.** Gig/marketplace operators, property managers (deposit refunds), sports clubs and event organisers (refunds), small insurers/MGAs, and "cash-in-hand" trades who want to pay helpers legally same-day [I]. Wedge: mid-sized but vertical-specific.

**(d) Who's building.** Adyen, Stripe, Mollie, Wise Platform, Modulr, Swan (BaaS) all offer instant payouts for platforms [K]. Gap: vertical products with the *workflow* (evidence, approval, VoP result, instant payout, bookkeeping export) for a specific niche — e.g., tenant-deposit return with dispute handling, or club refund handling [I].

**(e) Feasibility.** Medium. Initiating payments from the *client's own bank account* via PSD2 PIS requires an AISP/PISP licence or an **agent** relationship with a licensed TPP (Tink, Yapily, Klarna Kosma successors, Enable Banking) — acceptable for a small team. Holding funds requires an EMI: avoid; use Swan/Modulr/Wise Platform as embedded partners [I].

---

### F3. Wero: e-commerce live in DE/FR/BE, iDEAL folds into Wero from Oct 2026 — SME integration gap in 2026–27

**(a) What changed.** Wero P2P is live in DE/FR/BE; e-commerce acceptance launched with German online retailers in **Nov 2025** and in **France and Belgium in Jan 2026**; Belgium, France, Luxembourg and the Netherlands roll out e-commerce during 2026 [S] ([The Paypers](https://thepaypers.com/payments/news/wero-ecommerce-is-now-live-in-germany), [EPI](https://epicompany.eu/media-insights/wero-announces-first-merchants-in-germany/), [Banking.Vision](https://banking.vision/en/development-wero-2025-2026/)). iDEAL migration: co-branded "iDEAL | Wero" logo from early 2026, all Dutch issuers connected to Wero by **Oct 2026**, then gradual transition of iDEAL payments onto Wero infrastructure; merchants' existing iDEAL provider becomes their Wero provider [S] ([EPI](https://epicompany.eu/media-insights/successful-first-phase-marks-major-next-steps-in-ideal-to-wero-migration/), [CM.com](https://www.cm.com/blog/ideal-to-wero-what-merchants-need-to-know-about-the-transition/)). In-store (QR/NFC) is announced for 2026 [S/K] ([Move the Needle](https://www.movetheneedle.news/latest-top-stories/wero-in-2026--europe-s-payment-infrastructure-enters-a-live-test-phase/)). EuroPA (Bizum/Bancomat/MB Way/Vipps MobilePay) interoperability runs in parallel [K].

**(b) Implication.** Wero is distributed through banks and big PSPs first; the long tail (plugins for niche shop systems, invoice-embedded Wero request links, club/association dues collection, market-stall QR acceptance, "Wero button" for Shopware/WooCommerce/PrestaShop with proper reconciliation) lags 12–24 months [I]. In NL specifically, thousands of iDEAL integrations built on the iDEAL 2.0 hosted checkout will need reconciliation/reporting changes and re-branding in 2026–27 — a migration services market [I].

**(c) Pain.** Dutch webshops and their small agencies/dev shops (iDEAL is >70% of NL e-commerce [K]); German and Belgian SMEs whose bank pushes Wero but whose shop platform has no plugin; associations collecting dues [I].

**(d) Who's building.** Wero is distributed via Adyen, Worldline, Mollie, Nexi, CM.com, BNP Paribas [S] ([BNP Paribas](https://group.bnpparibas/en/news/bnp-paribas-partners-with-wero-for-e-commerce-payment-solutions)). Gap: plugin ecosystem and reconciliation tooling for long-tail platforms; Wero-in-invoice/dunning flows for accounting tools; migration audit tooling for iDEAL merchants [I].

**(e) Feasibility.** Medium-high for tooling/plugins (no licence; you sit on top of a PSP's API). Direct acquiring of Wero requires an acquirer/PSP licence — not for this profile. Risk: EPI or PSPs bundle plugins fast; timing window 2026–27 [I].

---

### F4. Digital euro: legislation advancing, but nothing to build on before 2027–29

**(a)** ECON voted 43–14 on 23 Jun 2026; plenary backed the negotiating mandate **416–169 on 9 Jul 2026**; trilogues aim to finish by end-2026; ECB plans a 12-month pilot in H2 2027 with selected merchants/PSPs; first issuance possibly 2029; holding limits set by the Commission on ECB recommendation [S] ([TechXplore](https://techxplore.com/news/2026-07-eu-parliament-greenlights-digital-euro.html), [Brussels Signal](https://brusselssignal.eu/2026/07/parliament-clears-digital-euro-talks-after-right-wing-groups-force-a-vote/), [EP Legislative Train](https://www.europarl.europa.eu/legislative-train/theme-an-economy-that-works-for-people/file-digital-euro), [CoinDesk](https://www.coindesk.com/policy/2026/06/23/european-parliament-clears-last-step-for-a-digital-euro-to-break-u-s-payment-grip)).
**(b–e)** Assessment: out of the 6–9-month window; the only near-term angle is *content/positioning* (merchant readiness guides, PSP RFP consulting) or participating in the 2027 pilot via a PSP partner. **Avoid as a product basis** [I].

---

### F5. MiCA euro stablecoins: supply is arriving (Qivalis H2 2026), B2B demand tooling is not

**(a) What changed.** MiCA fully applied 30 Dec 2024; CASP transitional periods ended in most states by 1 Jul 2026 [K]. Qivalis — a Dutch-supervised JV of ten banks (ING, UniCredit, CaixaBank, KBC, Danske, SEB, DekaBank, RBI, Banca Sella, BNP Paribas joined 1 Dec 2025) — targets a euro stablecoin launch **H2 2026**, reserves 40% deposits / 60% short-term euro sovereigns, explicitly aimed at "fintechs, SMEs and consumers" cross-border [S] ([CaixaBank](https://www.caixabank.com/en/headlines/news/qivalis-joint-venture-of-a-european-banking-consortium-to-launch-euro-stablecoin-in-the-second-half-of-2026), [Yahoo Finance](https://finance.yahoo.com/news/nine-european-banks-launch-mica-130701192.html)). Existing MiCA-compliant euro coins: Circle EURC, SG-Forge EURCV, Quantoz EURQ, Monerium EURe, StablR EURR, AllUnity EURAU (DWS/Galaxy/Flow Traders, BaFin-licensed 2025) [K/S] ([eco.com list](https://eco.com/support/en/articles/15192006-mica-compliant-stablecoins-2026-full-list-with-issuers), [XAnge market map](https://www.xange.vc/knowledge-hub/stablecoins-marketmap)). Banking Circle launched MiCA-compliant stablecoin settlement [S] ([MEXC](https://www.mexc.com/news/1056658)).

**(b) Implication.** Inside the euro area, SEPA Inst already does instant/free settlement, so euro stablecoins have almost no domestic payments case; their real European B2B uses are (i) **paying/receiving outside SEPA** (EU SME ↔ Turkey, Nigeria, LatAm, Southeast Asia suppliers and freelancers), (ii) 24/7 treasury between entities and exchanges, (iii) tokenised-asset settlement [I]. The tooling gap for SMEs is not wallets — it's **bookkeeping, VAT and audit-trail**: a Datev/Exact/Sage/Pennylane-compatible ledger of stablecoin flows with counterparty identification, FX evidence, Travel Rule data, and DAC8 exposure [I].

**(c) Pain.** Exporting/importing SMEs with non-SEPA counterparties; agencies paying remote freelancers in Africa/Asia; small CASPs needing Travel Rule (TFR, applied 30 Dec 2024 [K]) and **DAC8 reporting from 1 Jan 2026 (first reports 2027)** [K]; accountants asked to book stablecoin transactions [I].

**(d) Who's building.** Wallet/orchestration: Utila [S] ([Utila](https://utila.io/blog/euro-stablecoin-report-what-mica-means-for-fintechs)), Fireblocks, Bitpanda/Bitvavo B2B, Damex [S] ([Damex](https://damex.io/blog/mica-regulation-stablecoins-europe-digital-payments/)), Banking Circle, Monerium (IBAN↔EURe). Travel Rule vendors: Notabene, Sumsub, 21 Analytics. DAC8: big-four and tax-tech (Blockpit, CoinTracking for individuals; CASP-side reporting is thin) [K/I]. Gap: **accountant-facing reconciliation + DAC8/TFR evidence pack for small CASPs and stablecoin-using SMEs**, priced for firms with <5k customers [I].

**(e) Feasibility.** High for software-only reconciliation/reporting (no licence: reading blockchain data and issuing reports is not a CASP activity). Anything that custodies or converts is CASP-licensed — avoid; partner with a licensed on/off-ramp under a referral/white-label agreement [I].

---

### F6. Tokenisation (DLT Pilot Regime, eWpG, tokenised MMFs): thin uptake, but a data/compliance services niche

**(a)** EU DLT Pilot Regime (2023) had only a handful of authorisations by 2025 (e.g., 21X in Germany, CSD Prague, Axiology) and the Commission proposed reforms in its Dec 2025 market-integration package to make it more usable [K]. Germany's eWpG crypto-securities registers (Cashlink, Bitbond, etc.) and tokenised fund units keep growing modestly; tokenised money-market funds are a real institutional trend [K].
**(b)** Second-order: none of these venues have investor-facing *portfolio, tax and reporting* tooling comparable to brokerage; and eWpG registrars need independent register-audit/reconciliation tooling [I].
**(c)** Pain: small issuers (SME bonds, real-estate tokens) and their investors; tax reporting for tokenised securities held in self-custody [I]. Wedge: small in 2026.
**(d)** Cashlink, Tokeny, Bitbond, Black Manta; gap: cross-registry investor tax/portfolio reporting and register audit [I].
**(e)** Feasible without licence (data/analytics), but market too small in 6–9 months. **Watch, not build** [I].

---

### F7. eIDAS 2.0 EUDI Wallet: member states must ship by end-2026; relying-party registration is the chokepoint

**(a) What changed.** Member states must offer at least one wallet by **end-2026**; regulated relying parties (banks, insurers, energy, telecoms, large platforms) must accept it by **Dec 2027**; every relying party must **register** in the member state where it is established, declaring intended use [S] ([Gataca](https://www.gataca.io/resources/blog/eIDAS2-timeline/), [eIDEasy](https://www.eideasy.com/blog/eu-digital-identity-wallet-acceptance-2027), [Procivis](https://www.procivis.ch/insights/wallet-relying-party-registration), [Freshfields](https://www.freshfields.com/en/our-thinking/blogs/technology-quotient/the-eudi-wallet-is-coming-what-businesses-need-to-know-102mvuy)). Italy's IT-Wallet launched inside the IO app in Dec 2024 (driving licence, health card, disability card) [K]; Germany's federal wallet is in build (SPRIND-funded prototypes, target end-2026/2027) [K]; France Identité is live for national ID [K]; the Netherlands' NL Wallet is in pilot [K]. Large-scale pilots (POTENTIAL, EWC, NOBID, DC4EU) wrapped up during 2025–26 [K].

**(b) Implication.** The wallet ecosystem is *registration-gated*: to request attributes you need a registration certificate from a national registrar and an OpenID4VP verifier that handles per-country trust lists. Big vendors sell enterprise verifiers; no one sells a €29/month "relying party in a box" for the SME who needs a diploma, professional qualification, or proof-of-age from a customer. National registrars will each have their own portal and semantics — a cross-border registration/maintenance service is an obvious consultancy-to-product path [I].

**(c) Pain.** SMEs that verify identity today with PDFs/video-ident: letting agents, notarial adjuncts, recruiters checking diplomas, e-scooter and car-sharing firms checking driving licences, pharmacies, gyms and clubs, alcohol/tobacco e-commerce (age), gig platforms (right-to-work) [I]. Wedge: large but delayed to 2027+.

**(d) Who's building.** Signicat, walt.id, Trinsic, Gataca, Procivis, Shufti, Telefónica Tech [S] ([Trinsic](https://www.trinsic.id/blog/the-eudi-wallet-explained-what-it-is-and-how-businesses-accept-it), [walt.id](https://walt.id/eidas2/eudi-wallet), [Shufti](https://shuftipro.com/blog/is-your-identity-stack-ready-for-the-wallet-era/), [Telefónica Tech](https://telefonicatech.com/en/blog/eudi-wallet-eidas-2-businesses)). Gap: **vertical relying-party products** (one credential, one workflow, one country) and **registration-as-a-service** across member states [I].

**(e) Feasibility.** High legally (a relying party is not a regulated role; registration is administrative). Timing risk: wallets ship late 2026–2027; build against Italy's live IT-Wallet or the EU reference wallet now, monetise 2027 [I].

---

### F8. EU age-verification app: Commission wants it live by 31 Dec 2026 — the *long tail* of sites has no path to compliance

**(a) What changed.** On **29 Apr 2026** the Commission urged member states to roll out the EU age-verification app by end-2026, either standalone or inside national EUDI wallets; seven front-runners — Cyprus, Denmark, France, Greece, Ireland, Italy, Spain — are integrating it in 2026 [S] ([Commission](https://commission.europa.eu/news-and-media/news/commission-urges-fast-rollout-age-verification-app-2026-04-29_en), [Digital Strategy](https://digital-strategy.ec.europa.eu/en/news/commission-urges-member-states-rollout-eu-age-verification-app), [Euronews](https://www.euronews.com/next/2026/04/30/what-to-know-about-the-eus-new-age-verification-app-to-protect-children-online), [Inside Privacy](https://www.insideprivacy.com/minors/eu-sets-the-clock-on-age-verification-rollout-urged-by-end%E2%80%912026/)). It sits alongside DSA Art. 28 minor-protection guidelines and several national social-media age bans [S] ([FPF](https://fpf.org/blog/the-eu-commissions-approach-to-age-verification-mobile-apps-dsa-enforcement-and-challenging-national-social-media-bans/)). "Just accept the app" does not make a relying party compliant — integration, registration and proof handling are required [S] ([Xident](https://xident.io/blog/eu-age-verification-app-rollout-relying-party-integration-2026/)). UK OSA age checks began **25 Jul 2025** and created a genuine market (Yoti, VerifyMy, k-ID, Persona) [K].

**(b) Implication.** UK proved demand and shook out big-platform vendors; the EU version is *privacy-preserving by construction* (zero-knowledge / batch-issued proofs) and therefore *cheaper per check* — which makes age gates viable for small merchants (alcohol, vapes, knives, fireworks, adult, gaming, dating) who could never afford £0.10–0.50/check biometric estimation [I]. Second-order: the same verifier stack does "over-65 discount", "student proof", "resident proof" — cheap attribute gates for everyday commerce [I].

**(c) Pain.** Tens of thousands of small EU webshops in age-restricted categories, community forums, dating and gaming indies facing DSA/national laws; Shopify/WooCommerce/Shopware merchants in DE/FR/IT/ES/NL [I].

**(d) Who's building.** Yoti, VerifyMy, k-ID, Persona, AgeGo, Xident, Signicat [K/S]. Gap: **plugin-first, flat-fee age gate for SME shop platforms** using the EU app + national wallets, with UK OSA fallback [I].

**(e) Feasibility.** High, no licence. Risk: national wallets lag; must ship with a fallback (Yoti/VerifyMy API reselling) until the EU app is live in each country [I].

---

### F9. EU Business Wallet (proposal Nov 2025; Council position 9 Jun 2026): company identity is about to get an API — KYB will restructure

**(a) What changed.** The Commission proposed European Business Wallets in **Nov 2025**; the Council adopted its negotiating position on **9 Jun 2026** (raising authorisation thresholds for wallet providers); Commission wants agreement by end-2026 and a functioning single-market credential stack by 2028; providers must be EU-controlled; the wallet carries legal identity, ownership structure, legal status and signing authority as verifiable credentials [S] ([Consilium](https://www.consilium.europa.eu/en/press/press-releases/2026/06/09/european-business-wallets-council-adopts-negotiating-position/), [Bundesnotarkammer](https://www.bnotk.de/en/tasks-and-activities/magazines/bnotk-international/details/eu-commission-proposal-on-eu-business-wallet-published), [EP Legislative Train](https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-european-business-wallet), [CNUE position](https://www.notariesofeurope.eu/wp-content/uploads/2026/03/CNUE-Position-on-European-Business-Wallets-EN-final.pdf)). Notaries are lobbying to keep a gate-keeping role [S]. In parallel: LEI/vLEI (GLEIF) is the only live cross-border verifiable company credential today; beneficial-ownership register access remains fragmented after the 2022 CJEU ruling, with AMLD6 restoring "legitimate interest" access by 2027 [K].

**(b) Implication.** Until ~2028 the business-wallet promise creates a **bridge market**: KYB is still done by scraping 27 registers plus UBO registers plus sanctions lists, and every AML-obliged SME (see F10) must do it. Cheap, register-native KYB for *small obliged entities* (not banks) is under-served; vLEI is the credible interim credential [I].

**(c) Pain.** Newly obliged small firms (F10), B2B marketplaces onboarding EU sellers, Peppol/e-invoicing platforms verifying counterparties, factoring providers [I].

**(d) Who's building.** Big KYB: Moody's, LexisNexis, Dun & Bradstreet, Creditsafe; API KYB: Middesk-style players in EU (Ondorse, Detected, Vespia, Infogreffe API, OpenCorporates, Hovi [S] ([Hovi](https://www.hovi.id/blog-post/eu-business-wallets-explained-a-beginners-guide-2025))). Gap: **SME-priced KYB + UBO + adverse media for the AMLR long tail**, and vLEI issuance/verification tooling for mid-market [I].

**(e) Feasibility.** High, no licence (data service). Register-access terms vary; Germany's Transparenzregister and France's RBE access rules constrain automation — a real but navigable obstacle [K/I].

---

### F10. AMLR/AMLA: from 10 Jul 2027 a new long tail becomes obliged — and they have no tools

**(a)** The AML Regulation applies from **10 Jul 2027** (single rulebook, EU-wide €10k cash cap, harmonised CDD); AMLA started operating in Frankfurt in 2025 and directly supervises selected entities from 2028. New/expanded obliged entities include crowdfunding providers, traders in luxury goods (cars, yachts, aircraft, jewellery, art) above thresholds, professional football clubs and agents (from 2029), and all CASPs; real-estate agents and letting agents (high-value rentals) are re-scoped [K].
**(b)** Second-order: tens of thousands of firms with 1–20 staff — art galleries, classic-car dealers, football agents, crowdfunding platforms, estate agents in DE/FR/IT/ES/NL — must run risk assessments, CDD, UBO checks, PEP/sanctions screening, record-keeping and SAR filing. Their compliance is today a Word template and a spreadsheet [I].
**(c)** Pain/payers: those firms plus the accountants/tax advisers and lawyers who service them (themselves obliged) [I]. Wedge: mid-size but sticky, price-insensitive relative to fines.
**(d)** Enterprise AML (ComplyAdvantage, Sumsub, Fenergo, Napier) is priced for banks; micro tools exist in DACH (e.g., sector-association templates) and UK (SmartSearch, Credas for estate agents). Gap: **vertical, per-country, per-language "AML in a box"** for one newly obliged sector (art trade or football agents or letting agents), with register-native KYB (F9) and template reporting to the national FIU [I].
**(e)** Feasibility: high, no licence (software + content); sanctions/PEP data via API resellers (OpenSanctions is open-data and commercially licensable) [K/I]. Timing is good: sales cycle 2026–27 ahead of the July 2027 date.

---

### F11. FiDA is alive but slow — do not build on open finance; do build on today's PSD2 data + e-invoicing data

**(a)** FiDA was slated for withdrawal in the Commission's 2025 work programme, then revived; trilogues began Apr 2025 and were still running in Apr 2026 with a Council working document dated 6 Apr 2026; the compensation mechanism is the most contested item; base case is adoption mid-2026 to 2027 with obligations from 2027–2030, and scenarios include a narrowed scope / restricted FISP eligibility [S] ([Freshfields](https://www.freshfields.com/en/our-thinking/blogs/technology-quotient/risen-from-the-ashes-fida-trilogue-set-to-move-forward-102k3at), [Consilium WK-5041-2026](https://data.consilium.europa.eu/doc/document/WK-5041-2026-INIT/en/pdf), [Konsentus](https://www.konsentus.com/fidas-timetable-might-shift-but-the-destination-wont/), [Norton Rose](https://www.nortonrosefulbright.com/en/knowledge/publications/b029b764/from-open-banking-to-open-finance-fida), [Crassula on PSD3/PSR](https://crassula.io/guides/licenses/psd3-psr/)). PSD3/PSR remained in trilogue into 2026 [K].
**(b)** Second-order: the *usable* new data source for SME underwriting in 2026 is not FiDA — it is **structured e-invoices** (F13) and tax-authority real-time data (KSeF, Verifactu, SdI), which are legally mandated and machine-readable now [I].
**(c–e)** Avoid FiDA-dependent products; open-banking data via licensed aggregators (agent model) remains available for SME cash-flow products [I].

---

### F12. UK commercial VRP (cVRP): live-ish 2025–26, wave-1 use cases (utilities, government, financial services) — EU has no equivalent yet

**(a)** [K] The FCA/PSR pushed cVRP wave 1 in 2025 with Open Banking Limited as interim operator and a multilateral agreement (MLA); pilots in utilities, rail, government and financial-services top-ups ran 2025–26, with broader commercial rollout in 2026. Volumes remain small relative to Direct Debit. The EU has no VRP-like mandate (PSR may add "recurring PIS" but not soon) [K/I].
**(b)** Second-order: UK sole traders and small landlords collecting variable monthly amounts (utilities, rent with charges, subscriptions with usage) get a Direct-Debit alternative without the DD guarantee liability [I].
**(c–e)** UK-only for now; a small team can build on top of licensed TPPs (TrueLayer, Yapily, Token.io) under agent/partner terms. Moderately crowded on infrastructure, open on vertical workflows [I]. Given the founder is Western-Europe focused, treat as secondary.

---

### F13. E-invoicing mandates: Belgium (Jan 2026), France (Sept 2026), Germany (2027/28), Poland KSeF (Feb 2026), Croatia (Jan 2026), Spain Verifactu — structured invoices become the SME's operating data

**(a) What changed (all [K], not re-verified today — confirm dates):**
- **Belgium:** B2B structured e-invoicing via Peppol BIS mandatory from **1 Jan 2026** for all VAT-registered businesses; the government pushed a 120% tax deduction for software costs; the free receive tool Hermes was scheduled for phase-out; Mercurius remains B2G.
- **France:** all VAT-registered businesses must be able to **receive** e-invoices from **1 Sept 2026**; large and mid-sized firms must **issue** from Sept 2026, SMEs/micro-enterprises from **Sept 2027**; the public portal (PPF) was cut back in Oct 2024 to a directory/concentrator, so every business must pick a private "plateforme agréée" (ex-PDP; ~100 registered); e-reporting of B2C and payment data accompanies it.
- **Germany:** receive obligation since 1 Jan 2025 (XRechnung/ZUGFeRD); issuing mandatory from **1 Jan 2027** (turnover > €800k) and **1 Jan 2028** for all; Kleinunternehmer exempted from issuing by JStG 2024 but must still receive.
- **Poland:** KSeF mandatory from **1 Feb 2026** (large) and **1 Apr 2026** (all).
- **Croatia:** Fiscalization 2.0 B2B e-invoicing from **1 Jan 2026**.
- **Spain:** Verifactu certified-software obligation was postponed in late 2025 (to 1 Jan 2027 companies / 1 Jul 2027 self-employed — verify); Crea y Crece B2B e-invoicing awaits the implementing regulation.
- **Denmark:** Bookkeeping Act phases require registered digital bookkeeping systems for most businesses by 2026.
- **ViDA:** EU digital reporting for intra-EU B2B from **1 Jul 2030**; member states may mandate domestic e-invoicing without derogation since 2025.

**(b) Non-obvious implications.** (1) Every mandate is *issuer-centric*, but the first thing that breaks is **receiving**: landlords, associations, farmers, doctors' practices, small Vereine and self-employed people who never "issue" many invoices still must ingest UBL/CII/Factur-X and archive it compliantly — most have only an email inbox [I]. (2) Machine-readable invoices flowing through Peppol access points create a **real-time, tamper-evident receivables feed**: SME invoice financing can now be underwritten and settled on the invoice itself (F14) [I]. (3) France's forced choice of a private platform for ~4m businesses in 2026–27 is a **channel event**: whoever the accountant recommends wins; accountants are overwhelmed [I]. (4) Reconciliation between the structured invoice and the SCT Inst payment (with VoP result) is the missing link that makes "auto-bookkeeping" real for micro-firms [I].

**(c) Pain.** Micro-businesses and non-business receivers in BE now, FR from Sept 2026, DE 2027–28; accountants (Belgian boekhouders, French experts-comptables, German Steuerberater) triaging clients; software vendors in niches (agriculture, medical, associations, property management) whose products have no Peppol connector [I]. Wedge: millions of entities; most acute where free tools are disappearing (BE) or never existed (FR after PPF cut-back).

**(d) Who's building.** Access points/platforms: Billit, Unifiedpost/Banqup, Koalaboox, Yuki, Exact, Odoo (BE); Pennylane, Qonto, Tiime, Indy, Sage, Cegid, Esker, Generix, Docaposte, Sinao (FR); DATEV, Lexware, sevDesk, easybill, Bundesdruckerei, Storecove (DE); Peppol SDKs: Storecove, Ecosio, Pagero/Thomson Reuters, Tickstar, B2Brouter [K]. Gap: **receive-first, near-free ingestion + compliant archive for non-issuers** (landlords, associations, farmers, medical) per country/language; **Peppol connectors for niche vertical software** (agri, medical, property) sold to the vendor, not the SME; **accountant triage tooling** for mass client migration in France [I].

**(e) Feasibility.** High; no financial licence. Becoming a Peppol Access Point is achievable (OpenPeppol membership + national authority accreditation; in FR "plateforme agréée" registration is heavier — partner with an existing PA instead). Best path: build on Storecove/Ecosio/B2Brouter APIs and become a *service provider* on top [I].

---

### F14. Peppol + instant payments = programmable invoice finance for micro-firms (and the underwriters don't have the data plumbing yet)

**(a)** [K/I] A Peppol invoice is a signed, schema-valid, delivered-with-receipt document; combined with KSeF/SdI/Verifactu-style tax-authority visibility it is far stronger evidence than a PDF. Instant payments allow a financier to fund within minutes. Belgium (live) and France (2026–27) are the first Western-European economies where this is possible at scale.
**(b)** Second-order: micro-factoring for tradespeople, freelancers and farmers can be underwritten on **delivery-confirmed structured invoices** with automatic assignment notice embedded in the invoice's payment-means block, cutting fraud (duplicate invoice financing) and ops cost [I].
**(c)** Pain: micro-firms waiting 45–60 days on B2B invoices; factoring today starts at ~€250k+ turnover. Payers: SMEs (fee), and mid-sized factors/banks who lack Peppol-native origination [I].
**(d)** Who's building: Aria (FR, embedded invoice finance), Defacto (FR), Finom/Qonto credit lines, Billie (DE, B2B BNPL), Silvr, Hokodo, Two, Mondu; Peppol-native origination is nascent. Gap: an **origination/verification layer** sold to lenders and accounting platforms, not a balance sheet [I].
**(e)** Feasibility: lending requires capital and, in many states, a licence (DE: KWG; FR: banking monopoly with exceptions); a small team should be the **data/origination/assignment-notice layer** partnering with a licensed factor. No PSP licence needed for the software layer [I].

---

### F15. UK Making Tax Digital for Income Tax (Apr 2026): ~780k sole traders/landlords forced onto software quarterly

**(a)** [K] MTD ITSA applies from **6 Apr 2026** for sole traders and landlords with qualifying income > £50k, Apr 2027 > £30k, Apr 2028 > £20k; quarterly updates + digital records + final declaration; HMRC estimated ~780k in wave 1 and ~970k in wave 2; HMRC lists recognised software including some free/low-cost options.
**(b)** Second-order: landlords (often with one or two properties) and part-time traders have no bookkeeping habit; the pain is *data capture* (bank feeds, rent, expenses) more than filing. Also: agents (bookkeepers) can now serve many micro-clients only if onboarding is automated [I].
**(c)** Pain: UK landlords and micro-traders; bookkeepers. Wedge: large (millions by 2028) but UK-only.
**(d)** Crowded on generic filing apps (FreeAgent, Xero, QuickBooks, Sage, Coconut, Hammock for landlords, Untied, 123 Sheets). Gap: niche verticals (e.g., musicians, farmers, taxi drivers) and *agent-side* bulk tools [I].
**(e)** Feasible (HMRC API recognition process is documented, no financial licence). Given the Western-Europe brief, secondary; but a low-risk, proven forced market [I].

---

### F16. Fraud: UK APP reimbursement (Oct 2024), EU PSR direction, deepfake voice fraud — "call verification" for SMEs is under-served

**(a)** [K] UK mandatory APP-fraud reimbursement (max £85k, 50/50 split sending/receiving PSP) from 7 Oct 2024; the EU PSR draft adds impersonation-fraud refund rights and VoP; invoice-redirection (mandate) fraud in construction and trades remains the top B2B loss, and voice-cloned "CEO/supplier calls" grew sharply in 2025–26.
**(b)** Second-order: banks now push liability onto *behaviour* ("did you verify the supplier?"). SMEs need a cheap, auditable **out-of-band verification workflow** for bank-detail changes and payment instructions — evidence they followed a process [I].
**(c)** Pain: construction firms, property managers, law firms' conveyancing (UK has Lawyer Checker/Thirdfort), accountants approving payment runs [I].
**(d)** Trustpair, nsKnox, Sis ID (FR), Thirdfort (UK legal) [S/K]. Gap: **sub-€100/month supplier-change verification** for 5–50-person firms in DE/FR/NL with VoP + callback + KYB [I].
**(e)** Feasible, no licence [I].

---

### F17. BNPL under CCD2 (Nov 2026), Pay Transparency (Jun 2026), Platform Work Directive (Dec 2026), A1 digitalisation — compliance side-markets

**(a)** [K] CCD2 must apply from **20 Nov 2026**, bringing BNPL and small credits (<€200) into consumer-credit rules (creditworthiness checks, information duties); the Pay Transparency Directive must be transposed by **7 Jun 2026** (pay-gap reporting for 100+ employees, salary-range disclosure in hiring); the Platform Work Directive by **2 Dec 2026** (presumption of employment, algorithmic management transparency); A1 certificate digitalisation via ESSPASS pilots continues.
**(b)** Second-order for this track: BNPL-embedded trades/merchant credit needs a licensed lender partner anyway; pay-transparency creates one-off reporting tooling demand (crowded); platform-work creates **algorithmic-management audit and worker-status assessment** needs for small platforms [I].
**(c–e)** Mostly HR/legal-tech; only the platform-work and A1 (cross-border posting compliance for small contractors) angles are money-adjacent and thin on tooling. Feasible, no licence; moderate wedge [I].

---

### F18. Cash decline and right-to-cash: minor; tips digitalisation is the practical angle

**(a)** [K] Sweden's Riksbank and government advanced legal protections for cash acceptance for essential goods; the Netherlands debated a cash-acceptance obligation; the EU legal-tender regulation (2023 proposal) with a "right to pay in cash" remained in negotiation. Cashless tipping (QR/NFC) grew in hospitality.
**(b–e)** Tipping/collection tools are crowded (Tipsi, Tiptapp, Strikepay, Sunday). Avoid as primary; minor add-on to Wero-in-store QR acceptance in 2026–27 [I].

---

## Top 6 non-obvious opportunities from this track

**1. Payee-side VoP name hygiene and "name-resolution test bench" for trading-name businesses (F1).** Since 9 Oct 2025 every euro transfer is name-checked, but the recipient has no visibility into how their name resolves at each sending bank. Product: a service that (i) tells a business what name to print on invoices, EPC QR codes and websites so it *matches* at the major banks, (ii) monitors close-match/no-match rates via customer reports and partner PSP data, (iii) sells a bulk vendor-master cleanup to AP teams via a partner RVM (SurePay/Digiteal/iban.com). No licence, pan-European, small-team buildable in 3 months, distribution via accounting software marketplaces and Kammer/associations. Risk: banks converge on lenient matching; mitigate by positioning as invoice/QR/collection UX rather than pure VoP.

**2. Receive-first e-invoicing for non-issuers (landlords, associations, farmers, medical) in BE now, FR Sept 2026, DE 2027 (F13).** Mandates are written for issuers; millions of entities that mostly *receive* must ingest UBL/CII/Factur-X, validate, archive and export to their accountant. Product: a near-free Peppol/PA receive inbox with compliant archive, human-readable rendering, approval and instant-payment (SCT Inst with VoP) button, per country/language, sold via accountants and associations; upsell issuing later. Build on Storecove/B2Brouter/Ecosio APIs; partner with a French plateforme agréée rather than registering as one. Sequence: Belgium → France (the Sept 2026 receive obligation is the single largest forced-adoption event in Western Europe this year) → Germany.

**3. "AML in a box" for one newly obliged sector before 10 Jul 2027 (F10 + F9).** Pick one long-tail sector per country (art/antiques dealers in DE/FR; football agents EU-wide; letting agents in NL/ES; crowdfunding platforms) and ship a compliant, per-language workflow: risk assessment, CDD with register-native KYB and UBO, PEP/sanctions via OpenSanctions/API reseller, transaction records, SAR templates for the national FIU, training log. Price €50–200/month. Content-heavy, licence-free, sticky, and the sales window (2026–27) matches a 6–9-month build. vLEI/EU Business Wallet integration is the 2028 upgrade path.

**4. Flat-fee age/attribute gate plugin for SME shop platforms on the EU age-verification app + national wallets (F8 + F7).** UK OSA proved the market; the EU app (front-runners FR/IT/ES/DK/EL/CY/IE in 2026, all member states urged by 31 Dec 2026) makes per-check cost near zero. Product: Shopify/WooCommerce/Shopware/PrestaShop plugin implementing OpenID4VP verification of the EU age proof and IT-Wallet/France Identité attributes, with Yoti/VerifyMy fallback, DSA Art. 28 evidence log, and later "student/senior/resident" attribute gates. Register as relying party in each launch country as a service. No licence; timing risk on national rollouts is hedged by the fallback.

**5. Peppol-native invoice-finance origination layer for micro-firms, sold to lenders (F14 + F13 + F2).** Delivery-confirmed structured invoices plus tax-authority visibility plus instant settlement make €500–€20k invoice advances economical for the first time. A small team should *not* lend: build the verification, assignment-notice and instant-disbursement plumbing (VoP-checked payee, SCT Inst via partner) and white-label it to factors, neobanks and accounting platforms in BE/FR. Licence risk stays with the lender; revenue via per-invoice fee.

**6. Stablecoin/DAC8/Travel-Rule evidence pack for small CASPs and stablecoin-using SMEs, accountant-facing (F5).** Euro stablecoins (EURC, EURCV, EURAU, Qivalis H2 2026) are arriving; DAC8 reporting started 1 Jan 2026 (first filings 2027) and TFR applies to every transfer. Small CASPs (post-MiCA transitional cut-off) and SMEs paying non-SEPA suppliers/freelancers in stablecoins lack bookkeeping, VAT/FX evidence and reporting tooling that plugs into DATEV/Pennylane/Exact. Software-only, no CASP licence; partner with licensed on/off-ramps for the money leg. Smaller wedge than 1–5 but almost no SME-priced competition.

## Crowded / avoid

- **Generic Peppol access points and e-invoicing SaaS for issuers** (BE/FR/DE have dozens; price war) — only vertical or receive-first angles are open.
- **Digital euro anything** before 2027 pilot — legislation only, no rails [S].
- **Neobank/EMI/CASP licensing plays, custody, on/off-ramps** — capital and 12–24-month licensing; incompatible with <€100k.
- **Consumer P2P/tipping apps and generic BNPL** — Wero/Bizum/MB Way, Klarna and CCD2 compliance costs.
- **Enterprise KYB/AML/VoP platforms** (Trustpair, Sumsub, ComplyAdvantage, SurePay) — well-funded; go beneath them on price and vertical depth.
- **FiDA/open-finance-dependent products** — timeline uncertain to 2029–30 [S].
- **UK generic MTD filing apps** — dozens of HMRC-recognised products; only agent-side bulk tools or narrow verticals remain.
- **EUDI wallet issuance/verifier infrastructure** — Signicat, walt.id, Trinsic, Gataca, Procivis own it; be a vertical relying party instead.
- **Tokenisation infrastructure** (registries, DLT venues) — tiny volumes and licensing; watch only.

## Verification list for the founder (highest-value checks I could not complete)

1. Belgian FPS Finance: status of Hermes phase-out and any 2026 enforcement/tolerance statements.
2. impots.gouv.fr: confirmed Sept 2026 receive obligation and the final list/count of plateformes agréées.
3. BMF/ELSTER: German 2027/2028 issuing thresholds and Kleinunternehmer exemption text.
4. Spanish BOE: exact postponed Verifactu dates.
5. EPC VoP scheme rulebook: bulk-file opt-out mechanics and RVM list; any published mismatch statistics.
6. Open Banking Limited: cVRP wave-1 launch dates and participating banks.
7. AMLR Annex/Art. 3 list of obliged entities and national transposition of thresholds.
8. HMRC MTD ITSA: taxpayer counts and free-software list.
9. Qivalis licence status (DNB) and EURC/EURAU circulating supply.
10. Member-state EUDI wallet launch dates (DE, NL, FR) and relying-party registrar portals.
