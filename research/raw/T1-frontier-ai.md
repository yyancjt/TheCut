# T1 — Frontier AI capability shifts (2024–2026) and their second-order consequences

*Research date: 2026-09-05. Method: 46 web searches; page fetches were blocked by the network proxy, so figures below come from search-result summaries of the cited pages. Items marked **[confirmed]** are stated in a cited source; **[inference]** is my reasoning. Vendor blogs are treated as directional, not authoritative.*

---

## How to read this track

The brief asks for what AI capabilities newly make *cheap, possible, broken, or in demand elsewhere* — not AI tools. Every finding below therefore names a capability shift, then the non-AI-shaped market it creates. Three meta-patterns emerged and recur across findings:

1. **Verification becomes the scarce good.** When generation (code, images, voices, papers, reviews) approaches zero cost, the paid layer moves to attestation, audit, insurance and liability. This is happening simultaneously in software, media, identity and science.
2. **Regulation is turning capability shifts into dated obligations.** AI Act Article 50 (2 Aug 2026), CRA reporting (11 Sep 2026), EAA (in force since June 2025), EUDI wallet (Dec 2026), German EnEfG heat-reuse (July 2026). Each converts "someone should" into "someone must, by a date" — which is what SMEs actually pay for.
3. **The demand-side of agents is unbuilt.** Almost all money is chasing agents that *act*; nearly nothing serves the businesses that agents *act upon* (get called, get crawled, get booked, get bought from).

---

## Findings

### F1. Vibe-coded apps are a liability inventory, and the CRA makes it reportable

**(a) What changed.** Lovable/Bolt/Replit/Cursor pushed non-developers into shipping production apps. Escape scanned 5,600 publicly deployed vibe-coded apps and found 2,000+ high-impact vulnerabilities and 400 exposed secrets **[confirmed]** ([escape.tech](https://escape.tech/blog/methodology-how-we-discovered-vulnerabilities-apps-built-with-vibe-coding/)); OX Security reports 62% of AI-built apps ship with critical vulns ([ox.security](https://www.ox.security/blog/vibe-coding-security/)); a Lovable-hosted app exposed 18K users' data ([HN thread](https://news.ycombinator.com/item?id=47182659)); Moltbook, built entirely by AI, exposed 1.5M API tokens within three days ([Forbes, Mar 2026](https://www.forbes.com/sites/jodiecook/2026/03/20/vibe-coding-has-a-massive-security-problem/)). Separately, EU Cyber Resilience Act vulnerability/incident reporting starts **11 September 2026** (24h early warning, 72h notification) for "products with digital elements" ([Freshfields](https://www.freshfields.com/en/our-thinking/blogs/technology-quotient/cyber-resilience-act-reporting-obligations-take-effect-on-11-september-2026-102nzmk), [EC](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting)), and the revised Product Liability Directive (software explicitly a product, rebuttable presumption of defect) applies from 2 Aug 2026 ([reptile.haus](https://reptile.haus/journal/ai-code-liability-gap-ownership-eu-product-liability-2026/)).

**(b) Non-obvious implication.** There are now tens of thousands of EU-resident owners of running software who are *not developers*, have *no security function*, and are about to have *legal duties* (PLD exposure now; CRA reporting if their app is a "product"; GDPR breach notification already). The pain isn't "fix my bug" — it's "I own a thing I can't assess, and someone will hold me liable for it." **[inference]** The market that forms around this looks like the post-GDPR DPO-as-a-service market, not like a dev shop: recurring, low-touch, attestation-shaped.

**(c) Who pays, wedge.** Solo founders, agencies who delivered Lovable apps to clients, SMEs that "vibed" internal tools handling customer data. Escape's 5,600 is a lower bound of the public surface. If 5–10% of EU vibe-coded apps with real users would pay €50–150/month for continuous scanning + a signed monthly attestation + breach-notification playbook, that's a €5–20M/year niche today, growing with every new builder cohort **[inference]**.

**(d) Who's building.** Fiverr "rescue my Lovable app" gigs at $30 ([fiverr](https://www.fiverr.com/joshua_matth/rescue-fix-lovable-ai-website-lovable-dev-lovable-app-lovable-saas-mvp-vibe-code)); Vibe Code Rescue (fractional CTO) ([justinmckelvey.com](https://justinmckelvey.com/blog/is-lovable-worth-it)); enterprise AppSec vendors (Escape, OX, Cycode, Arnica) selling to security teams, not owners. **Gap:** nobody sells an *owner-facing, EU-law-framed, recurring* product: Supabase RLS + secrets + auth scan, plain-language risk letter, PLD/CRA/GDPR-mapped remediation, and a takeover/escrow path when the owner abandons the app.

**(e) Feasibility.** Build: 3–4 months (scanners are largely open source; the product is the report, the legal mapping, and the workflow). Moat: weak on tech, real on trust/brand and on the "one Supabase/Lovable stack" specialisation. Regulatory risk: low (you're the compliance vendor). Distribution: Lovable/Bolt community forums, agencies, the incident news cycle. Watch for: platforms (Lovable) bundling security scanning themselves — the defensible layer is the *attestation and liability workflow*, not the scan.

---

### F2. Agent-generated code needs an independent verifier, because insurers and buyers can't underwrite it

**(a) What changed.** Long-horizon coding agents now do multi-day tasks; McKinsey documents a bank reverse-engineering 900k+ lines of legacy code in three weeks with agents ([ascendion](https://ascendion.com/ai-basic/mainframe-and-cobol-modernization-with-agentic-ai-whats-actually-possible-in-2026/)). But as of June 2026, no licensed European carrier sells a standardised AI-agent liability policy to SMEs; the live market is Munich Re aiSure, Armilla (Lloyd's), Counterpart, HSB — enterprise-first and bespoke; "a documented agent is both more insurable and cheaper to insure" **[confirmed]** ([agentinsured.eu](https://agentinsured.eu/articles/ai-agent-insurance-europe-complete-market-guide-2026), [insureyouragent.com](https://insureyouragent.com/articles/who-insures-ai-agents-europe-2026)). ISO 42001 is becoming a procurement checkpoint (350+ certificates mid-2026) ([fintech.global](https://fintech.global/2026/08/18/iso-42001-becomes-new-baseline-for-ai-vendor-trust/)).

**(b) Implication.** The bottleneck on agent-produced software isn't producing it; it's *someone outside the producer signing off*. Brokers, buyers and EU public tenders need a document that says "this delivery was reviewed against X, by a party independent of the agent operator." **[inference]** That's a rating-agency / technical-inspection (TÜV-like) role, and it doesn't exist at SME scale.

**(c) Who pays.** Small dev shops delivering agent-built work to regulated clients; SMEs buying it; brokers needing an assessment before placing PI/cyber cover with AI wording. Wedge: modest and early — perhaps a few hundred paying engagements/year in DACH+Benelux+UK in 2027, at €1–5k each **[inference]**.

**(d) Who's building.** Big-4 and TÜV/DEKRA at enterprise level; SIG (Software Improvement Group) in NL for code quality; nobody productised for €2k engagements. **Gap:** a repeatable, evidence-bundled "agent-delivery assurance report" (provenance of commits, test evidence, SBOM, licence scan, prompt/agent logs retained) sold through brokers.

**(e) Feasibility.** Build: 4–6 months; needs one person with security/audit credibility. Moat: reputation + broker relationships; a recognised checklist becomes the moat if it gets referenced. Regulatory risk: low; liability risk for *you* if you certify wrongly — scope carefully. Distribution: insurance brokers (they're actively looking for assessors per the sources above), public-procurement consultants.

---

### F3. The 2027 ERP/mainframe cliff meets consultant scarcity — the gap is SME data migration, not enterprise S/4HANA

**(a) What changed.** SAP ECC mainstream maintenance ends 31 Dec 2027 (EPs 6–8); ~40% of ECC customers not yet live on S/4HANA; migrations take 18–36 months and "by late 2026 demand for SAP talent… will surge" **[confirmed]** ([sapinsider](https://sapinsider.org/articles/sap-ecc-end-of-life-2027-your-step-by-step-migration-roadmap-to-s-4hana/), [talentmsh](https://www.talentmsh.com/insights/sap-ecc-6-end-of-life)). Business One 10 maintenance to end-2028, v11 in 2027; NAV→Business Central migrations ongoing ([navabrindsol](https://navabrindsol.com/blog/sap-business-one-end-of-support-2027/), [erpsoftwareblog](https://erpsoftwareblog.com/2026/08/dynamics-nav-to-business-central-migration-what-should-you-keep-replace-or-leave-behind/)). Agentic code understanding cut legacy-comprehension time by 40%+ in banking cases (McKinsey via [ascendion](https://ascendion.com/ai-basic/mainframe-and-cobol-modernization-with-agentic-ai-whats-actually-possible-in-2026/)).

**(b) Implication.** Enterprise COBOL is a big-SI game. The part agents actually collapsed is *understanding undocumented customisations and mapping data* — the exact task that makes SME migrations (NAV, B1, Sage, Exact, DATEV-adjacent tooling) unaffordable for a 40-person Mittelstand firm. **[inference]** The SME migration backlog of 2027–2028 will be served by a consultant pool that is being bid away by S/4HANA projects.

**(c) Who pays.** 20–250-employee manufacturers/distributors on NAV 2009–2018, B1, or bespoke Access/FoxPro/VBA systems. Tens of thousands in DACH/NL/UK alone. Fixed-price "customisation archaeology + data mapping + test-pack" at €10–40k is a credible wedge **[inference]**.

**(d) Who's building.** Every Microsoft/SAP partner does migrations by hand; Microsoft ships upgrade tooling for NAV→BC. **Gap:** an independent, agent-assisted *pre-migration documentation and data-mapping* service that partners resell (they're capacity-constrained, not demand-constrained).

**(e) Feasibility.** 3–5 months to tooling; needs one person with ERP domain experience. Moat: templates per legacy system + partner channel. Regulatory: none beyond confidentiality. Distribution: Microsoft/SAP partner networks, industry associations.

---

### F4. Realtime multilingual voice made the "SME phone line" viable — and Article 50 made it a compliance product

**(a) What changed.** Sub-second multilingual voice models; production deployments in DACH now follow a fixed compliance pattern (AI disclosure at call start, no audio recording, live text transcription, DSFA before launch) ([ainora.lt](https://ainora.lt/blog/ai-voice-agent-dsgvo-compliance-germany-austria), [famulor.io](https://www.famulor.io/blog/legal-ai-cold-calling-in-germany-consent-rules-2026)). Only 23% of German SMEs offer multilingual phone service while 13M+ residents don't have German as first language **[confirmed]** ([echocall.de](https://echocall.de/en/blog/ai-voice-agent-statistik-2026)). Germany's 115 government line released its AI chatbot to all municipalities free on 2 July 2026 and is evaluating a voice bot ([FITKO](https://www.fitko.de/aktuelles/details/behoerdennummer-115-startet-regelbetrieb-ihres-ki-chatbots-fuer-kommunen)). Yelp Host handled 1M+ restaurant calls since Oct 2025, +38% MoM ([Yelp blog](https://blog.yelp.com/news/yelp-host-voice-ai-adds-opentable-reservations-and-takeout-ordering-for-restaurants/)).

**(b) Implication.** Horizontal voice-agent platforms are crowded (Parloa, Cognigy, PolyAI, Synthflow, Retell, LuMay, Famulor…). The non-obvious openings are (i) *dialects the base models still can't do* and (ii) *the inbound side of public services and trades*, where the buyer is a municipality, a Handwerkskammer, or a care provider, not a startup. Swiss German ASR honest baseline is still ~25% WER, with published SOTA inflated by benchmark contamination **[confirmed]** ([arXiv 2606.07608](https://arxiv.org/abs/2606.07608)). **[inference]** Similar gaps exist for Bavarian/Austrian, Flemish regional speech, Limburgish, Alsatian, and heavy code-switching (Turkish-German, Arabic-French).

**(c) Who pays.** Swiss SMEs and cantonal services (5M Swiss-German speakers, high willingness to pay); care providers doing daily check-in calls; municipalities; trades cooperatives losing after-hours calls. A dialect-first voice line for Switzerland alone could be a €2–5M ARR niche **[inference]**.

**(d) Who's building.** Everyone builds generic agents; nobody publicly owns "Swiss German phone line" or "Flemish care check-in". Eldercare call products exist mostly US-side (ElderVoice, inTouch, Ato) ([intouch.family](https://intouch.family/en)). **Gap:** dialect data + fine-tuned ASR + the compliance pattern, sold as a service to *one vertical in one region*.

**(e) Feasibility.** Build: 4–6 months including data collection (partner with a Swiss podcast/radio corpus; SwissGPC exists ([arXiv](https://arxiv.org/pdf/2509.19866))). Moat: dialect data and eval set — real but erodes over ~2 years as frontier models improve. Regulatory: Art. 50 disclosure, DSGVO, StGB §201 recording — manageable with the known pattern. Distribution: cantonal associations, Spitex/home-care federations, trades guilds.

---

### F5. Businesses are becoming *callees* and *crawlees* of agents, and nothing helps them be agent-legible

**(a) What changed.** Bots overtook humans: 57.5% of HTML traffic (Cloudflare, June 2026). Cloudflare will block "mixed-use" AI crawlers by default on ad-bearing pages from **15 Sep 2026** and launched pay-per-crawl/pay-per-use ([TechCrunch](https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/), [fastcrw](https://fastcrw.com/blog/cloudflare-ai-crawler-block-september-2026)). Google's AI calls small businesses to check hours, prices, availability ([Google support](https://support.google.com/business/answer/7690269?hl=en)). UCP (Google/Shopify), ACP (OpenAI/Stripe), AP2 (FIDO-governed) form a commerce stack; Shopify opened its MCP endpoint to any agent on 17 June 2026 ([ucphub](https://ucphub.ai/acp-vs-ucp-complete-2026-guide-agentic-commerce-protocols/)). llms.txt adoption ~10% of domains, concentrated in dev docs and e-commerce ([getpassionfruit](https://www.getpassionfruit.com/blog/should-i-create-an-llms.txt-file-google-s-2026-guidance-explained)). AI Overviews cut publisher clicks 42–58%; AI Mode reaches Europe by end-2026 ([searchengineland](https://searchengineland.com/google-ai-overviews-cut-search-clicks-report-471497), [seo-kreativ](https://www.seo-kreativ.de/en/blog/google-ai-overviews-updates-2026-en/)).

**(b) Implication.** A restaurant, clinic, plumber or B&B in Europe will increasingly be *discovered, queried and booked by agents* rather than by humans reading a website. Their current surface (PDF menu, Instagram, a Wix form, a phone nobody answers) is illegible to agents. Shopify merchants get this for free; **the 20M+ non-Shopify European SMEs don't** **[inference]**. This is the 2026 equivalent of "get your business on Google Maps" in 2008.

**(c) Who pays.** Hospitality, clinics, trades, independent retail — anyone whose bookings/leads come from discovery. Willingness to pay is low per unit (€20–50/month) but the population is enormous; channel partners (booking systems, POS vendors, chambers of commerce) are the realistic route.

**(d) Who's building.** GEO/AEO agencies (SEO rebranded), llms.txt generators, Shopify/Google for their own ecosystems, Yelp Host for US restaurants. **Gap:** a *country-specific "agent-legibility" layer for non-platform SMEs*: canonical structured availability/pricing/menu feed, an inbound-agent phone handler, and a monthly "how agents see you" report — sold via POS/booking vendors (Lightspeed, Zenchef, Doctolib-adjacent, Treatwell) rather than direct.

**(e) Feasibility.** Build: 3–4 months for the feed + report; phone handler via an existing voice API. Moat: distribution partnerships and data normalisation per vertical; low tech moat. Regulatory: low. Distribution: POS/booking vendors, local chambers. Risk: Google/OpenAI ship SME-facing "agent profiles" themselves — plausible in 12–24 months, so move via partners quickly.

---

### F6. Deepfakes broke selfie-KYC and voice authentication; the liveness arms race is going physical

**(a) What changed.** Deepfakes are 41% of fraud attempts in Europe — the highest share globally; injection attacks on face liveness up 783% in 2024, iOS injection up 741% YoY; only 7% of anti-fraud professionals report being more than moderately prepared (ACFE/SAS, March 2026) **[confirmed]** ([deepstrike](https://deepstrike.io/blog/deepfake-statistics-2025), [digitalapplied](https://www.digitalapplied.com/blog/deepfake-statistics-2026-fraud-detection-data)). Voice cloning needs ~3 seconds of audio; 1 in 4 people report a voice-clone scam encounter ([savingadvice](https://www.savingadvice.com/articles/2026/05/21/10736407_ai-voice-cloning-scams-explode-one-in-four-people-have-encountered-them-losing-up-to-15000.html)). EUDI wallets must be offered by all member states by Dec 2026, with mandatory acceptance by regulated sectors in 2027 ([eideasy](https://www.eideasy.com/blog/eu-digital-identity-wallets-july-2026), [deepidv](https://www.deepidv.com/media/news/eudi-wallet-deadline-late-2026)).

**(b) Implication.** Detection is a losing game at the pixel level. The durable answers are *cryptographic* (EUDI wallet attestations, C2PA-signed capture) and *procedural* (out-of-band callbacks, shared family passphrases, delayed payment holds). **[inference]** The unserved buyers are not banks (well served by iProov/Onfido/Veriff) but the long tail that also gets deepfaked: notaries, estate agents doing remote ID, HR onboarding remote hires, care homes fielding "grandchild" calls, SME finance teams receiving CFO-voice payment orders.

**(c) Who pays.** Notaries and conveyancers (remote ID under anti-money-laundering rules), SMB payroll/AP teams, care homes and their residents' families. Wedge: €50–200/month per firm; thousands of notary/agency offices per country **[inference]**.

**(d) Who's building.** Enterprise IDV vendors; EUDI wallet integrators (Gataca, Zyphe, eID Easy) for regulated sectors. **Gap:** "verified caller" and "verified payment instruction" for SMEs and households — a callback/passphrase/wallet-attested check that a bookkeeper or care home can use in 30 seconds.

**(e) Feasibility.** Build: 3–5 months; wallet integration matures through 2027 (specs still incomplete). Moat: network effects if both sides enrol (family + care home; supplier + buyer). Regulatory: eIDAS 2.0 accreditation not needed for a relying-party app; AMLD relevance for notaries. Distribution: notary chambers, care-home operators, accounting-software marketplaces.

---

### F7. Article 50 + C2PA created a *provenance plumbing* obligation that SMEs and agencies can't meet alone

**(a) What changed.** Article 50 transparency obligations enforceable from 2 Aug 2026; the Code of Practice on marking/labelling AI content was published 10 June 2026 and names C2PA by example while requiring a multi-layer approach (metadata + watermark + logging); penalties to €15M/3% ([EC Code of Practice](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content), [EC enforcement notice](https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august), [lumethic](https://www.lumethic.com/en/articles/eu-ai-act-c2pa-mandate)). Adobe, Microsoft 365 (Feb 2026), OpenAI (May 2026) embed credentials ([daviesmeyer](https://ai-solutions.daviesmeyer.com/en/blog/c2pa-content-credentials-ki-kennzeichnung)). A "Human Made Mark" launched for film/TV in April 2026; VerifiedHuman certifies music/podcasts ([senalnews](https://senalnews.com/en/content/the-human-made-mark-launches-global-certification-to-champion-human-creativity-in-film-and-tv), [verifiedhumancert](https://verifiedhumancert.com/)).

**(b) Implication.** Credentials get *stripped* the moment an image passes through a CMS, a social platform, a PDF export, or a print workflow. So the practical problem for a marketing agency, a real-estate portal, an e-commerce shop or a local newspaper isn't "add a label" — it's *keeping a provenance chain intact across their toolchain and proving it later* **[inference]**. Real estate is the sharpest case: AI virtual staging is now routine, disclosure rules exist in the US (California AB 723, Jan 2026) but not yet clearly in Europe ([meltflexai](https://www.meltflexai.com/blog/virtual-staging-disclosure-rules-2026)) — consumer-protection complaints will force it **[inference]**.

**(c) Who pays.** Marketing agencies, real-estate portals and agencies, e-commerce catalogues, regional publishers. Article 50 fines are the stick; platform policies are the second stick.

**(d) Who's building.** Truepic, Digimarc, Adobe (enterprise); C2PA viewer sites; certification marks for creative industries. **Gap:** a *provenance middleware for SME toolchains* — sign at generation, re-sign at each edit, verify at publish, hold a tamper-evident log the regulator/consumer can query — plus a vertical version for property listings ("staged/altered" labels + original-image escrow).

**(e) Feasibility.** Build: 3–4 months on open C2PA tooling; the value is integration breadth (WordPress, Shopify, Immoscout/Rightmove feeds, print). Moat: integrations + log as system of record. Regulatory: you're the compliance layer. Distribution: agency networks, real-estate software vendors.

---

### F8. Handwritten-archive transcription fell 50× in cost — the bottleneck moved to procurement, QA and rights

**(a) What changed.** Generic LLMs beat Transkribus (used by 150+ archives) on historical handwriting: CER <2%, 50× faster, ~1/50th the cost (Humphries, IEEE Spectrum) **[confirmed]** ([IEEE Spectrum](https://spectrum.ieee.org/ai-handwriting-transcription-transkribus-lecun), [arXiv 2411.03340](https://arxiv.org/abs/2411.03340)). Transkribus is integrating LLMs. Amsterdam's notarial archive alone is 3.5 km of paper; Dutch National Archives did 3M notarial pages; cadastral records (Grundbücher, Kataster) are the most-requested municipal holdings ([Transkribus cadastral](https://www.transkribus.org/cadastral-record-digitization), [Horizon Magazine](https://projects.research-and-innovation.ec.europa.eu/en/horizon-magazine/machine-learning-and-big-data-are-unlocking-europes-archives)).

**(b) Implication.** Archives have budgets denominated in *decades*; when unit cost drops 50×, the constraint becomes the archive's capacity to scan, QA, redact (GDPR on 20th-century records), and publish — not transcription. **[inference]** The commercial demand is outside archives: conveyancing lawyers and surveyors who need a 1920 land record read *today*, genealogists, insurers with paper claims history, church/parish registers, and companies with pre-2000 technical documentation (utility drawings, machinery manuals).

**(c) Who pays.** Land-registry-adjacent professionals per lookup (€20–80), municipal archives per project (€10–50k), utilities/manufacturers for legacy documentation (€50k+). Fragmented but real; Western European municipal archives number in the thousands.

**(d) Who's building.** Transkribus (cooperative, Innsbruck), FamilySearch (free, genealogy), Rannsolve-type IDP vendors. **Gap:** a *turn-key, GDPR-safe, on-prem/EU-hosted* service for one record type in one jurisdiction (e.g., pre-1950 German Grundakten; Belgian notarial deeds), with redaction and QA sampling built in, sold to archives *and* to the professionals who query them.

**(e) Feasibility.** Build: 3–4 months; models are commodity, the moat is per-record-type prompting/evaluation + jurisdictional workflow. Regulatory: GDPR on living persons in records; public-procurement thresholds (stay under tender limits with small lots). Distribution: archive associations, notary/surveyor chambers.

---

### F9. Translation and dubbing collapsed in price; sworn/liability-bearing language work did not — and it needs new plumbing

**(a) What changed.** Commodity translation rates down 40–60% since 2020; 70% of CIOL freelancers report volume declines; 57% of translation companies report revenue drops **[confirmed]** ([chatscontrol](https://chatscontrol.com/blog/translation-industry-trends-2026), [CNN, Jan 2026](https://edition.cnn.com/2026/01/23/tech/translation-language-jobs-ai-automation-intl), [CEPR](https://cepr.org/voxeu/columns/lost-translation-ais-impact-translators-and-foreign-language-skills)). German voice actors are in dispute with Netflix over AI dubbing; the June 2025 union agreement omitted AI remuneration ([Slator](https://slator.com/german-voice-actors-netflix-ai-dubbing/)). Sworn translation (human stamp) remains resilient ([replacedbai](https://www.replacedbai.com/blog/will-ai-replace-translators)).

**(b) Implication.** Two second-order markets: (i) *sworn translators are now high-margin verifiers* of machine output but work with 1990s tooling and no shared infrastructure for digitally-signed sworn translations that courts and registries accept (eIDAS qualified signatures make this possible now); (ii) *displaced translators are the ideal workforce* for post-editing, dialect data creation (F4), and human-QA of AI output — a labour pool that is skilled, multilingual, underemployed, and Europe-wide **[inference]**.

**(c) Who pays.** Immigration lawyers, notaries, HR of firms hiring cross-border, universities (diploma recognition) — anyone needing sworn translations; and AI companies needing dialect/eval data.

**(d) Who's building.** Big LSPs (RWS, Acolad) automate; marketplaces (ProZ) list sworn translators. **Gap:** a sworn-translation *workflow* (machine draft → sworn review → qualified e-signature → registry-accepted PDF) priced between machine and full human; and a cooperative/talent layer that sells former translators' time into data and QA work with fair AI-usage terms.

**(e) Feasibility.** Build: 3 months for workflow; recruitment is the work. Moat: network of sworn translators + court acceptance per country. Regulatory: sworn-translator rules are national; e-signature acceptance varies. Distribution: translator associations (BDÜ, SFT), law firms.

---

### F10. Junior-role collapse in law, code and finance creates a *supervision and credentialing* gap, not just a reskilling gap

**(a) What changed.** UK paralegal vacancies down 60%+ since 2023 while solicitor numbers hit a record ([theglobalrecruiter](https://www.theglobalrecruiter.com/ai-reduces-entry-level-legal-hiring/)); US entry-level SWE postings down 67% 2023–24; UK entry-level tech roles down 46% ([softwareseni](https://www.softwareseni.com/what-the-data-actually-shows-about-ai-and-junior-developer-employment-decline/)); France IT employment fell 3% 2023–25, first decline in 20 years, driven by under-30s ([The New Stack](https://thenewstack.io/ai-junior-developer-hiring/)). Meanwhile Germany needs 96,000 more electricians; 30% of construction firms can't fill vacancies ([fmcgroup](https://fmcgroup.com/germany-skilled-worker-shortage/), [pbctoday](https://www.pbctoday.co.uk/news/hr-skills-news/trade-skills-shortage-widespread-whilst-high-tech-roles-soar/138199/)).

**(b) Implication.** Firms removed the apprenticeship rung but still need seniors in 5 years. The obvious "reskill devs to plumbers" story is mostly wrong at scale (different people, different geographies) **[inference]**. The second-order needs are: (i) *proof of competence when CVs and take-homes are AI-generated* — supervised, in-person or proctored practical assessments; (ii) *structured supervision-as-a-service* — senior reviewers renting oversight to the many small firms that now hire one junior instead of five; (iii) trades-side: AI-literate back-office for trades firms (quoting, compliance paperwork) so the scarce electricians spend time on site.

**(c) Who pays.** Employers (assessment fees €200–800/candidate), professional bodies, trades firms (€100–300/month back-office).

**(d) Who's building.** Assessment platforms (HackerRank, Codility) are fighting AI cheating with more AI; bootcamps pivoting. **Gap:** in-person, regionally run practical assessment centres with a recognised certificate; and trades-firm admin services built around the German/Austrian/Dutch compliance paperwork load.

**(e) Feasibility.** Assessment centres are ops-heavy but cheap to pilot in one city; moat is recognition by employers/chambers. Trades back-office is a service business with software leverage; distribution via Handwerkskammern and wholesalers.

---

### F11. Open-weight models moved sovereignty from slogan to procurement criterion — the missing piece is the *operator*, not the model

**(a) What changed.** Qwen 3.5 (Feb 2026, Apache 2.0, 201 languages), Mistral, Gemma, Llama are production-grade; European enterprises are hedging against US restrictions with self-hosted open weights (June 2026) ([opensourceforu](https://www.opensourceforu.com/2026/06/european-enterprises-hedge-against-ai-curbs-with-open-source/), [innfactory](https://innfactory.ai/en/ai-models/qwen/)). Hospital-owned GPU inference has "reached capability sufficient for most clinical use cases" ([tactionsoft](https://www.tactionsoft.com/blog/run-llama-mistral-on-prem-hospital/)). 40% of UK GPs already use AI scribes; Norway ran a ~€15M national scribe tender ([npj Digital Medicine](https://www.nature.com/articles/s41746-026-02762-8), [healthtechofftherecord](https://healthtechofftherecord.substack.com/p/we-screened-europe-for-ai-medical)). EU inference providers (Scaleway, Nebius, OVH, Hetzner) are cheap: H100 from ~€0.50–2.95/h ([spheron](https://www.spheron.network/blog/gpu-cloud-providers-europe-2026/)).

**(b) Implication.** The model and the GPU are commodities. What a 200-bed regional hospital, a 3,000-person Landkreis administration, a notary chain or a defence-adjacent manufacturer lacks is *someone to run the box*: patching, eval regression when weights update, audit logging for the AI Act, DSFA paperwork, on-call. **[inference]** This is the return of the regional MSP (managed service provider) — but for inference — and it's structurally local (language, law, physical access to air-gapped sites).

**(c) Who pays.** Regional hospitals, municipal IT associations, law/notary/accounting firms, factories with air-gapped OT networks. €2–10k/month per site is realistic for managed on-prem or single-tenant EU inference **[inference]**; thousands of such sites per country.

**(d) Who's building.** Big sovereign clouds (T-Systems, OVH, IONOS, Schwarz/STACKIT) at large-tenant scale; countless "sovereign platform" startups selling software. **Gap:** hands-on managed inference for *sites that will never buy a platform*, bundled with the compliance paperwork; ideally with the ambient-scribe and document use cases pre-validated.

**(e) Feasibility.** Build: 2–3 months to a repeatable stack (vLLM/ollama + auth + logging + eval harness); the rest is ops and sales. Moat: local trust, references, and boring reliability. Regulatory: MDR if you touch clinical decisions — stay in documentation/admin. Distribution: municipal IT associations (e.g., KDN, Dataport ecosystem), hospital IT federations, MSP partnerships.

---

### F12. Cheap vision + VLMs made "camera as sensor" viable for SMEs — but nobody sells the outcome

**(a) What changed.** Vibration sensor nodes fell from ~$600 (2019) to under $50; predictive-maintenance adoption still only 27% ([oxmaint](https://oxmaint.com/article/iot-sensors-predictive-maintenance-guide), [iiot-world](https://www.iiot-world.com/predictive-analytics/predictive-maintenance/ai-predictive-maintenance-2026/)). A 3B-parameter model detects bearing wear in 8 ms on a $2,000 edge box, offline ([ifactoryapp](https://ifactoryapp.com/blog/small-language-models-slm-edge-factory-ai)). VLMs let staff query camera feeds in natural language ("show blocked fire exits this week"); European SMEs cite upfront cost and integration as the blocker ([computertechreviews](https://www.computertechreviews.com/retail-computer-vision), [marketsandmarkets](https://www.marketsandmarkets.com/Market-Reports/europe-machine-vision-market-95485118.html)). Kitchen robotics remains a $3B, hardware-heavy, slow European market ([researchandmarkets](https://www.researchandmarkets.com/reports/6019966/kitchen-robotics-automation-market-report)).

**(b) Implication.** The hardware is now cheap enough that the *service model* flips: instead of selling a vision system, sell a monitored outcome ("no unattended fryer > 3 min", "pallet damage documented at every dock arrival", "bakery shelf-gap alerts") at a monthly fee, with commodity cameras and an on-prem box (F11) **[inference]**. Insurance is the hidden channel: insurers want fire/theft/liability evidence.

**(c) Who pays.** Restaurants (fire/hygiene), small logistics (damage disputes), independent retail (shrink), small farms (livestock monitoring). €100–400/month per site.

**(d) Who's building.** Enterprise retail CV (Everseen, Trigo), agri-tech for large farms, robot-kitchen hardware plays. **Gap:** commodity-camera + edge-VLM *outcome subscriptions* for one SME vertical, sold through insurers or wholesalers.

**(e) Feasibility.** Build: 4–6 months including hardware kits; ops-heavy installs. Moat: vertical event taxonomy + insurer partnerships. Regulatory: GDPR/worker-surveillance rules are real — design for objects/processes, not people. Distribution: insurers, kitchen/retail equipment dealers.

---

### F13. Scientific and review ecosystems are being flooded — demand shifts to provenance of *process*, not detection of *text*

**(a) What changed.** ~1 in 50 papers show paper-mill patterns, doubling every 1.5 years; 21% of ICLR 2026 reviews flagged as fully AI-generated ([Chemistry World](https://www.chemistryworld.com/features/ai-tools-tackle-paper-mill-fraud-overwhelming-peer-review/4022253.article), [manusights](https://manusights.com/blog/ai-peer-review-2026)). AI-text detectors are being outpaced ([C&EN](https://cen.acs.org/policy/publishing/ai-fraud-science-journal-generative-ai/104/web/2026/07)). Consumer-review fraud is the same dynamic; the EU Digital Fairness Act (proposal Q4 2026) targets dark patterns and influencer marketing but not review verification ([EP legislative train](https://www.europarl.europa.eu/legislative-train/theme-protecting-our-democracy-upholding-our-values/file-digital-fairness-act)).

**(b) Implication.** Text-level detection is dead; what works is *evidence of process*: lab notebooks with timestamps, raw data deposits, verified purchase/visit, verified identity (EUDI wallet, F6). **[inference]** For local commerce, "verified local" (this reviewer was physically here, holds a wallet credential, is one human) becomes the trust primitive once wallets ship.

**(c) Who pays.** Publishers and research integrity offices (already spending); local-business platforms and municipalities defending local commerce from review fraud.

**(d) Who's building.** STM Integrity Hub, Clear Skies, Cactus for publishers. **Gap:** wallet-attested "verified presence" reviews for European local commerce — timing depends on wallet rollout, so this is a 2027 build with 2026 groundwork.

**(e) Feasibility.** Technically light; adoption is the whole problem. Best as a feature sold to an existing review/booking platform or a city's local-commerce programme. Probably too early for a solo founder as a standalone company.

---

### F14. The datacentre boom's second order in Europe is *heat and grid paperwork*, not GPUs

**(a) What changed.** Germany's EnEfG requires new datacentres to reuse 10% of waste heat from 1 July 2026 (20% by 2028); TenneT's Dutch queue is 212 requests/38 GW; Ireland requires matching dispatchable generation for new >10 MVA connections; the EU Cloud and AI Development Act (June 2026) ties priority grid access to sustainability criteria ([mgrid](https://mgrid.org/2025/11/07/germany-enefg-pue-1-2-waste-heat-data-centers-july-2026/), [Jones Day](https://www.jonesday.com/en/insights/2026/06/eu-data-center-rules-combine-expansion-incentives-with-new-energy-obligations), [avanzaenergy](https://avanzaenergy.substack.com/p/the-176-billion-detour-how-europes)). Small edge-DC-plus-greenhouse and immersion-cooled models exist (Blockheating, iXora, WATTER) ([DCD](https://www.datacenterdynamics.com/en/news/itrenew-and-blockheating-combine-edge-data-centers-greenhouses/), [ixora.eu](https://www.ixora.eu/data-center-waste-heat-sustainable-solutions/)).

**(b) Implication.** For a software founder, the opportunity is not building datacentres. It is that *every* new German/Dutch/Irish DC now needs a heat off-taker, an ERF calculation, and a grid-flexibility story — creating demand for (i) heat-offtake matchmaking between DCs and district-heating/greenhouse/pool operators and (ii) software that turns GPU workloads into grid-flexible load (curtailable inference) to jump connection queues **[inference]**. Also: small local inference sites (F11) can be *sited by heat demand* (care homes, pools) rather than by fibre.

**(c) Who pays.** DC developers (large budgets, dated obligations), municipal utilities (Stadtwerke) with district heating, greenhouse operators.

**(d) Who's building.** Engineering consultancies (Ramboll), utilities case by case; a few hardware startups. **Gap:** a heat-offtake marketplace/registry + ERF compliance tooling for the German market, launched around the July 2026 obligation. Better suited to T3 (energy track) — noted here for cross-reference.

**(e) Feasibility.** Software is light; domain sales are heavy and slow (utilities). Moat: data on heat sinks and permitting. A solo founder should treat this as a consultancy-first wedge.

---

### F15. E-invoicing mandates + OCR collapse: the paper-invoice long tail becomes someone's problem in 2026–2028

**(a) What changed.** Belgium B2B e-invoicing mandatory 1 Jan 2026 (Peppol); France: all firms must *receive* from 1 Sep 2026, SMEs issue from Sep 2027; Germany issue from 2027/2028 ([symtrax](https://blog.symtrax.com/b2b-e-invoicing-european-deadlines-2026-2027/), [invoicenavigator](https://www.invoicenavigator.eu/deadlines)). Meanwhile OCR/document understanding of arbitrary invoices and receipts is now near-free with VLMs.

**(b) Implication.** The mandates cover B2B domestic invoices; they *don't* cover foreign suppliers, receipts, contracts, delivery notes, or the historical backlog — so the accounting long tail *increases* in relative pain as the structured core is automated **[inference]**. Also, thousands of micro-businesses (market traders, tradespeople, associations) will need someone to convert their paper into Peppol-conformant flows.

**(c) Who pays.** Accountants (Steuerberater, experts-comptables) serving micro-clients; micro-businesses themselves. Belgium's 120% cost deduction subsidises adoption.

**(d) Who's building.** Every accounting vendor (DATEV, Pennylane, Yuki, Exact) does the structured core. **Gap:** the non-mandated long tail (foreign/receipt/backlog) as a service to accountants; mostly a T6 topic — cross-reference.

**(e) Feasibility.** Easy to build; distribution via accountants; margin pressure from vendors adding it. Treat as a feature unless bundled with a broader accountant-service offer.

---

### F16. Low-key threshold crossings worth tracking (brief)

- **Ambient scribes are past early-adopter in Europe**: 40% of UK GPs using; Norwegian national tender **[confirmed]** ([npj Digital Medicine](https://www.nature.com/articles/s41746-026-02762-8)). Second order: *coding/billing dispute review* and *multilingual consult transcripts* for patients — small but real; regulatory heavy.
- **On-device ASR**: Voxtral Mini-4B-Realtime, Moonshine (27 MB), Qwen3-ASR (52 languages, Jan 2026) make offline transcription on phones/Raspberry Pi routine ([gladia](https://www.gladia.io/blog/best-open-source-speech-to-text-models)). Second order: *air-gapped* transcription for courts, police, unions, works councils where cloud is forbidden.
- **3D/world models**: AI now generates ~80% of background game assets; studios kept artists but changed roles ([3daistudio](https://www.3daistudio.com/blog/best-ai-game-asset-generators-2026)). Second order for Europe: architectural/planning visualisation for *municipal consultations* (Bebauungsplan hearings) where citizens need to see proposals — public buyers, dated processes.
- **Virtual try-on works**: ASOS 10k products (Feb 2026), GANT +6.3% conversion ([stytrix](https://www.stytrix.com/blog/ai-virtual-try-on-reshaping-fashion-ecommerce-2026), [fibbl](https://fibbl.com/ai-product-photography-trends/)). Second order: returns-logistics providers and payment/BNPL firms now have an incentive to *subsidise* try-on for small merchants — a channel, not a product.

---

## Top 5 non-obvious opportunities from this track

**1. Owner-facing liability & attestation service for vibe-coded and agent-built software (F1 + F2).** Thesis: the AI coding wave created a new class of software *owners without engineers*, and the EU simultaneously made software a product with presumptions of defect (PLD, Aug 2026) and dated vulnerability-reporting duties (CRA, Sep 2026). Sell a recurring, plain-language, EU-law-mapped scan + monthly signed attestation + breach playbook + abandoned-app takeover path, specialised on the Lovable/Supabase/Bolt stack, then extend upward into broker-referred assurance reports for agent-delivered code. Buyer: solo founders, agencies, SMEs; channel: builder communities, agencies, insurance brokers. Moat: trust brand and the attestation workflow, not the scanner. Why a US startup won't chase it first: the pain is *European legal exposure*.

**2. Dialect-first inbound phone service for one region and one vertical — start with Swiss German care/trades (F4 + F9).** Thesis: horizontal voice agents are commoditised, but the base models still fail on Swiss German (~25% honest WER), and the buyers — Spitex/home-care federations, cantonal services, trades guilds — will pay premium prices for a compliant (Art. 50, StGB §201) line that actually understands callers. Build the dialect eval set and fine-tune, recruit displaced translators/linguists for data work, and sell through federations. Moat: dialect data and references; it erodes in ~2 years, so use it to own the vertical relationship.

**3. Regional managed-inference operator for sites that will never buy a platform (F11 + F12).** Thesis: open weights and €0.50/h H100s made sovereign inference cheap; what regional hospitals, Landkreis IT, notary chains and air-gapped factories lack is a local MSP that installs, patches, evaluates and documents the box, with two pre-validated use cases (documentation/scribe, document processing) and AI-Act paperwork bundled. Later add commodity-camera outcome monitoring on the same box. Structurally local, unglamorous, and exactly what tiny teams win at. Distribution: municipal IT associations, hospital federations, existing MSPs.

**4. Agent-legibility layer for non-platform European SMEs, sold through POS/booking vendors (F5).** Thesis: bots are >57% of traffic, Google calls businesses to check availability, Shopify merchants get agent-readiness for free, and the 20M+ European SMEs outside such platforms are invisible or illegible to agents. Provide a canonical structured feed (hours, menu/services, prices, availability), an inbound-agent phone handler, and a monthly "how agents see you" report — white-labelled through POS, reservation and clinic-booking vendors who need a story for their merchants. Move fast: platforms will ship SME agent profiles within 12–24 months, so the moat is vendor distribution.

**5. Provenance middleware and "altered image" compliance for property and e-commerce toolchains (F7).** Thesis: Article 50 plus the June 2026 Code of Practice make machine-readable marking mandatory, but credentials are stripped by every CMS, portal and print step; real estate is the sharpest case, with AI staging routine and EU disclosure rules still forming. Build a sign-at-generation → re-sign-at-edit → verify-at-publish pipeline with a tamper-evident log and an original-image escrow for listings, integrated with WordPress/Shopify and property-portal feeds. Buyer: agencies, portals, catalogue teams. Moat: integrations and the log as system of record.

---

## Crowded / avoid

- **Horizontal voice-agent platforms and "AI receptionist for X"** — dozens of funded players in Europe alone (Parloa, Cognigy, PolyAI, Synthflow, Retell, LuMay, Famulor, Ainora, Safina). Only a dialect/vertical/regional wedge (Top 5 #2) is defensible.
- **AI code security scanners sold to security teams** — Escape, OX, Cycode, Arnica, Snyk, plus GitHub/Lovable native features. Sell to *owners* and *insurers*, not to CISOs.
- **Enterprise COBOL/mainframe migration** — IBM, Microsoft, big SIs, McKinsey-backed. Only the SME ERP data-mapping layer is open.
- **Deepfake detection as a pixel/audio classifier** — arms race you'll lose; enterprise IDV (iProov, Onfido, Veriff, Sumsub) already covers banks. Go cryptographic/procedural and long-tail.
- **AI product-photography and virtual try-on tools** — saturated; margins collapsing to platform features.
- **AI medical scribes** — Norway-scale tenders are for funded vendors; MDR and DPO friction; dozens of European startups mapped already.
- **"Human-made" certification marks** — several launched in 2026; label without enforcement or provenance tech is a marketing scheme, not a product.
- **GEO/AEO agencies and llms.txt generators** — SEO industry already pivoted; low value unless bundled with structured availability feeds and vendor distribution.
- **Kitchen robots and general "robots for SMEs"** — capex-heavy, slow European deployment, freight-constrained; out of scope for <€100k.
- **Generic sovereign-AI platforms** — every EU cloud and dozens of startups; the open space is *operations at small sites*, not another platform.

---

## Cross-track pointers

- T2 (regulation): Article 50 code of practice (10 Jun 2026), CRA 11 Sep 2026, PLD 2 Aug 2026, EAA enforcement year one, EUDI wallet Dec 2026.
- T3 (energy): German EnEfG heat-reuse from July 2026; TenneT/Ireland queues; heat-offtake matchmaking (F14).
- T6 (identity/payments): EUDI wallet as the base for verified-caller and verified-local (F6, F13); e-invoicing long tail (F15).
- T7 (substrate): UCP/ACP/AP2, Shopify MCP open endpoint (17 Jun 2026), Cloudflare 15 Sep 2026 default block (F5).
- T8 (behaviour/labour): junior-role collapse and the credentialing gap (F10); translators as a displaced skilled workforce (F9).
