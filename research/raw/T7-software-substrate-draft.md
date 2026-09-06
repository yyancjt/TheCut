# T7 — Software substrate & protocol shifts 2024–2026, and what they enable downstream in Western Europe

*Research analyst note, 2026-09-05. Audience: a 1–3 person technical founder, <€100k, 6–9 months to v1, Western Europe, who wants second-order opportunities for end users, SMEs, physical businesses and the public sector — not B2B SaaS / copilots / "agent for X".*

## 0. Method and evidence caveats (read first)

- **Tooling constraint:** this session's WebSearch budget was already exhausted before this track began (0 of the requested searches could run), and the network egress proxy blocked nearly every primary domain (OpenAI, Stripe, Cloudflare, Mastercard, Visa, Apple, Microsoft, europa.eu, Wikipedia, arXiv, heise, The Register, TechCrunch, Reuters). **What was reachable: github.com (repos, releases, governance files) and cloud.google.com.** I therefore ran ~45 targeted fetches of primary repositories and ~17 GitHub-wide repository searches as adoption proxies.
- Every claim below is tagged: **[C]** = confirmed this session from a fetched URL; **[M]** = from my training memory (mid-2026 cutoff), not re-verified today — treat as plausible, check before acting; **[I]** = my inference.
- GitHub star counts and repo counts are as of 2026-09-05.

---

## 1. Agentic-commerce protocol stack has consolidated (ACP, AP2, UCP, Visa TAP, Web Bot Auth)

**(a) What changed.**
- OpenAI+Stripe **Agentic Commerce Protocol** repo created 2025-09-29; "latest stable version" dated **2026-04-17**; Apache-2.0; marked **Beta**; specifies `agentic_checkout`, `delegate_payment`, plus "cart, feed, orders, and authentication capabilities"; **no geographic restrictions in the spec** [C] (https://github.com/agentic-commerce-protocol/agentic-commerce-protocol). Instant Checkout launched US-first with Etsy and Shopify merchants [M].
- Google **AP2** launched **2025-09-16** with **60+ organisations** including Adyen, Worldpay, Checkout.com, Mastercard, PayPal, AmEx, and European players **Nexi, Revolut**; core concept = cryptographically signed **Intent Mandate** and **Cart Mandate** giving "a non-repudiable audit trail"; supports cards, RTP bank transfers, stablecoins (x402 extension with Coinbase) [C] (https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol; https://github.com/google-agentic-commerce/AP2 — 3.2k stars).
- **Universal Commerce Protocol (UCP)** repo: checkout sessions "with or without human intervention", OAuth identity linking, order webhooks, payment-token exchange, "AP2 mandates" as a supported security pattern, MCP and A2A as transports, Apache-2.0 [C] (https://github.com/Universal-Commerce-Protocol/ucp). Launched by Google with Shopify/Etsy/Wayfair/Target/Walmart at NRF, Jan 2026 [M].
- **Visa Trusted Agent Protocol**: agents sign HTTP requests (timestamp, session id, signature) that merchants verify against a public-key registry; full sample stack incl. CDN proxy and agent registry published [C] (https://github.com/visa/trusted-agent-protocol). Mastercard Agent Pay (April 2025) is the counterpart [M].
- Cloudflare **Web Bot Auth** implements RFC 9421 HTTP Message Signatures + `draft-meunier-webbotauth-httpsig-protocol`; "has not been audited" [C] (https://github.com/cloudflare/web-bot-auth).
- GitHub topic `agentic-commerce`: **725 repos**; top item is a crypto "internet-court-skill" (5.4k stars), #2 **northcinder** — "MCP server for comparing products and asking the buyer before purchase" (1.2k) [C] (https://github.com/topics/agentic-commerce).

**(b) Non-obvious downstream implication.** The protocols standardise *product* commerce (SKU, cart, tax). They say nothing about *time-slot* commerce — a table at 20:00, a plumber Tuesday morning, a physio appointment. Yet the consumer-agent side is arriving fast: the personal-agent ecosystem (Hermes-agent 241k stars, created July 2025; "OpenClaw" skills registry with 5,400+ skills, created Jan 2026) [C] means European consumers will increasingly delegate "book me X" to agents that will phone, email or scrape the local business. Local service SMEs will feel this as a rising tide of odd inbound requests before they understand why. [I]

**(c) Who is in pain / can pay.** Restaurants, hotels (independent, not chains), clinics/physios, hairdressers, tradespeople, driving schools, workshops in DE/FR/NL/ES/IT. Millions of businesses; those already paying €30–150/month for a booking widget are the addressable slice. Wedge: a country × vertical (e.g., DE physios, NL restaurants) — tens of thousands of businesses each. [I]

**(d) Who is building it / gap.** Hotels: wholesale-inventory MCP servers already exist (LetsFG 1,972 stars, created 2026-03; DIDA "2M+ hotels"; RollingGo; WinWin "3M+ hotels") [C] — they serve OTAs' inventory, not the independent hotel's own rates. Class-booking niche: zooza-mcp-server (dance/swim schools) [C]. Restaurant/clinic/tradespeople: only demos found (skandavivek/openagent) [C]. **Gap: an agent-facing availability + booking endpoint (MCP + ACP/UCP checkout + Web Bot Auth verification) that sits on top of the calendar the SME already uses, and a per-country directory so agents can discover it.**

**(e) Feasibility.** Build: 3–5 months for one vertical (calendar adapters + MCP server + signed-agent verification + deposit via Stripe/Adyen). Moat: adapter coverage, the directory, and trust (verified agents, no-show deposits). Distribution: via existing vertical software (booking tools, PMS) as a white-label "agent channel", or via trade associations (DEHOGA, chambres de métiers). Risk: OpenTable/TheFork/Doctolib add this natively for their customers — target the long tail they don't serve.

---

## 2. Crawler economics: default-blocking, pay-per-crawl, llms.txt, and "GEO"

**(a) What changed.** Cloudflare switched new domains to block AI crawlers by default and opened **pay-per-crawl** (HTTP 402) on 2025-07-01 [M]; the signing layer is Web Bot Auth [C above]. **llms.txt**: proposed by Jeremy Howard, v2 dated 2024-09-03 (page updated 2026-08-10); "OpenAI, Anthropic, and Gemini" publish llms.txt for their docs; "Chrome's Lighthouse audits sites for one as part of its agentic browsing checks"; Yoast SEO, AIOSEO, Mintlify, GitBook auto-generate it [C] (https://github.com/AnswerDotAI/llms-txt). The GEO paper claims "boost source visibility by up to 40%" on its own benchmark [C] (https://github.com/GEO-optim/GEO); an "awesome-GEO" list has 498 stars [C]. 217 repos are llms.txt generators [C].

**(b) Implication.** Two things are real: (1) agents *do* read llms.txt-style structured pages when present (Lighthouse now nudges every web dev toward it); (2) small publishers now have a technical lever (402 + signatures) to charge or refuse. Everything else in "GEO" is largely re-badged SEO with no measurable ranking mechanism to optimise against [I].

**(c) Pain / payers.** Small European publishers, hobby forums, niche databases (recipes, hiking, genealogy, regional news) whose referral traffic from search is collapsing. Willingness to pay is low; willingness to *receive* money is high.

**(d) Builders / gap.** Cloudflare, TollBit, ProRata run marketplaces [M]. Gap: nobody aggregates the **European long tail** (German hobby forums, French regional sites, Dutch niche wikis) into a collective licensing/402 gateway with local-language contracts and DSA/copyright-directive compliance. But the buyer side (labs) prefers big deals; a solo founder has no leverage. **Verdict: avoid as a business; use llms.txt/402 as a feature inside Opportunity #1.**

**(e) Feasibility.** Technically trivial; commercially weak for a tiny team.

---

## 3. MCP crossed from dev tooling into public data — France's state runs an official MCP server

**(a) What changed.** MCP spec now under "Model Context Protocol a Series of LF Projects, LLC" (Linux Foundation), Apache-2.0/CC-BY; latest schema dated **2026-07-28** [C] (https://github.com/modelcontextprotocol/modelcontextprotocol, GOVERNANCE.md). Google's A2A is "an open source project under the Linux Foundation", 25.6k stars, SDKs in six languages [C] (https://github.com/a2aproject/A2A). GitHub topic `mcp-server`: **27,484 repos**; n8n (203k stars) and Gemini CLI carry `mcp-server` tags [C].
- **datagouv/datagouv-mcp — "Official data.gouv.fr Model Context Protocol (MCP) server"**, created 2025-11-25, **1,589 stars** [C] (https://github.com/datagouv/datagouv-mcp). Also: Riksdag-Regering-MCP and Skolverket-MCP (Sweden), mcp-swiss ("transport, weather, geodata, companies… zero API keys"), **InfraNode "key-less open-data REST API + MCP server for 84 German cities"** (June 2026), ondata/ckan-mcp-server (Italy-based, generic CKAN), mcp-canada (266 bilingual tools) [C]. Only 393 repos match "open data + government + MCP" overall [C].
- A German-market MCP gateway exists: HelpCode-ai/anythingmcp (Feb 2026, 192 stars) with "175+ pre-built adapters (Deutsche Bahn, weclapp, Etsy, DHL, Shopware…)" [C].

**(b) Implication.** The French state set a precedent: a public body publishing an *official*, maintained MCP endpoint is now normal. The user of such an endpoint is not a developer — it is a notary, architect, real-estate agent, journalist, or municipal clerk who asks their assistant a question and expects a sourced answer from the register. Germany, Netherlands, Italy, Spain have **no official equivalents** visible on GitHub [C], and the community ones are single-person hobby projects. [I]

**(c) Pain / payers.** Professionals who pay today for register lookups and data brokers (company registers, cadastre/BAG/ALKIS, building permits, court notices, tenders, insolvency notices): notaries, tax advisers, real-estate, construction. Also municipalities that want "ask our open data" for citizens. Wedge: DE + NL professionals — tens of thousands of firms already paying for data access.

**(d) Builders / gap.** Hobby MCP servers; Google's Gemini Enterprise and Microsoft push generic connectors; data brokers (North Data, Creditreform, Kadaster's own APIs) have not shipped agent endpoints [M]. **Gap: hosted, SLA'd, source-cited MCP servers for national/regional public datasets (HVD company registers, geospatial, permits, tenders) with per-professional pricing, plus a "municipal MCP" white-label for cities.**

**(e) Feasibility.** 2–4 months per country for a solid v1 (the datasets are HVD-mandated APIs/bulk since June 2024 [M]); moat = data cleaning, entity resolution (GERS/LEI/HRB IDs), uptime, citations, and being first in the directories that consumer agents consult. Distribution: professional associations, chamber newsletters, and listing in MCP registries.

---

## 4. Consumer personal agents went mainstream in 2026 — SMEs will be "called by robots"

**(a) What changed.** NousResearch/hermes-agent: 241,719 stars, created 2025-07-22, 49.6k forks [C]. "awesome-openclaw-skills" (Jan 2026): "5,400+ skills … from the official OpenClaw Skills Registry" (52k stars) [C]; sipeed/picoclaw (Feb 2026, 30k stars) targets tiny hardware [C]; HKUDS/nanobot "self-hosted personal AI agent" 47.7k [C]. Chrome DevTools MCP (Sept 2025) 51k stars and Microsoft playwright-mcp 36.8k stars [C] give these agents real browsers.

**(b) Implication.** Unlike enterprise copilots, these are *consumer* agents with browsers, email and phone skills. For a bakery or a Praxis, the visible symptom in 2026–27 will be forms filled at 3 a.m., odd phone calls, and reservation emails with machine-like phrasing. The business needs a **front door for agents** (see #1) and a **policy** (deposit, verified-agent only, cancellation rules). [I]

**(c–e)** Same buyers as #1; reinforces that the "agent-facing front desk" for local businesses is a product, not a feature. Feasible for a tiny team as a SaaS with inbound-triage (email/phone → structured booking) as the hook.

---

## 5. On-device AI in the browser is now a shipped platform (WebGPU everywhere; Prompt API in Chrome/Edge)

**(a) What changed.** "In macOS Tahoe 26, iOS 26, iPadOS 26, and visionOS 26, WebGPU is supported and enabled by default"; Firefox 141 on Windows (2025-07-15), 145 on Apple Silicon Macs, Linux/Android expected 2026; Chrome Android 121+, Linux 144+/147+ [C] (https://github.com/gpuweb/gpuweb/wiki/Implementation-Status). Chrome **Prompt API**: "experimentally available in Google Chrome and Microsoft Edge", image+audio input, JSON-schema constrained output; explicitly *not* mandatory for all devices [C] (https://github.com/webmachinelearning/prompt-api). **Transformers.js**: 160+ architectures, Whisper/Parakeet ASR, GLM-OCR, embeddings, 16.3k stars [C]; **WebLLM** 19k stars, OpenAI-compatible, 0.5B–7B+ models [C]; sherpa-onnx (ASR/TTS offline on Pi/NPUs) 14.6k stars [C]. Apple **Foundation Models framework** (iOS 26, ~3B on-device model, free inference, guided generation, tool calling) [M — Apple's docs were unreachable].

**(b) Implication.** A whole class of GDPR/§203-StGB-sensitive tasks — dictation in a medical practice, transcribing a client call in a law firm, OCR of payslips at a tax adviser, summarising a pupil's IEP at a school — can now run with a *provable* "no bytes leave the device" architecture, on hardware the SME already owns, with zero inference cost to the vendor. The economics flip: a €9/month tool with 90% margin becomes possible where cloud-ASR tools charge €30–60/user. [I]

**(c) Pain / payers.** German Arztpraxen (~100k), physios, Steuerberater (~100k in DE), small law firms, notaries, social workers, schools — all with data-protection officers who say "no cloud". Comparable populations in FR/NL/IT/ES.

**(d) Builders / gap.** GitHub search for "whisper webgpu browser transcription" returns **10 repos, all ≤4 stars** — demos, not products [C]. Commercial cloud-ASR vendors sell to hospitals; nobody packages *device-only* transcription+templates for small regulated practices with the DSGVO paperwork (TOMs, DPIA template) included. **Gap is the compliance-bundled vertical product, not the model.**

**(e) Feasibility.** 3–5 months: PWA + Transformers.js/WebLLM (or iOS Foundation Models), vertical templates (Arztbrief, Aktennotiz), local encrypted storage. Moat: vertical templates, certification/attestations (e.g., matching KBV/BÄK IT-security guidelines [M]), and word-of-mouth in closed professional communities. Distribution: professional associations, Datenschutzbeauftragte as channel. Weakness: hardware variance — must degrade gracefully to WASM.

---

## 6. Local-first sync engines reached production grade (Electric 1.0, PowerSync multi-DB, Automerge 3)

**(a) What changed.** Electric "reached version 1.0 status in March 2025", Apache-2.0, 10.4k stars, partial replication via "Shapes", CDN-friendly [C] (https://github.com/electric-sql/electric). PowerSync "Supports Postgres, MongoDB, Azure DocumentDB, MySQL, and SQL Server", client SQLite for web/mobile/desktop/embedded [C]. Automerge 3: "around a 10x reduction in memory usage", MIT, Ink & Switch [C]. Zero (Rocicorp) Apache-2.0 but not GA; Jazz is "2.0 alpha" [C].

**(b) Implication.** Offline-first, multi-device apps for people who work where connectivity is bad are now a weekend of plumbing rather than a year of CRDT research. The buyer never hears "local-first"; they hear "it works in the basement / on the ferry / in the barn and syncs later, and the data stays on our own Postgres in Germany". [I]

**(c) Pain / payers.** Construction site documentation (Bautagebuch, defect lists), ambulatory care (ambulante Pflege visits), agricultural contractors, ship/ferry crews, event/stage technicians, wind-turbine maintenance, rural vets. Each is a €50–150/user/month vertical with 10k–100k potential seats per country.

**(d) Builders / gap.** Generic field-service SaaS (cloud-first, flaky offline) dominates; local-first is mostly used by dev-tool companies (Trigger.dev, Otto) [M]. **Gap: any one of the verticals above, built local-first with self-hostable Postgres (sovereignty story), sold through the vertical's association.**

**(e) Feasibility.** High. 4–6 months to v1 with Electric/PowerSync + Expo; moat = vertical workflow depth + offline reliability reputation. Pick one vertical and one country.

---

## 7. EUDI wallet relying-party tooling is almost non-existent — the 2026 deadline is a forcing function

**(a) What changed.** eIDAS 2 (Regulation 2024/1183) obliges member states to offer wallets [C legal reference via ARF repo]; deadline end-2026 [M]. The ARF repo is maintained as "part of the Common Union Toolbox" [C] (https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework). GitHub search for "eudi wallet relying party / verifier" returns **4 repos**: an official Python sample (0 stars), a **Symfony bundle** (Apr 2026, 0 stars), a Spanish regulated-company playbook (June 2026), and **siros-wrpac-tool** "Access CA and Registrar for EUDI wallet-relying party access (WRPAC) and registration (WRPRC) certificates" (Aug 2026) [C]. Apple's EU terms now let users set default "password managers" and expose **HCE NFC APIs** in the EEA [C] (https://developer.apple.com/support/dma-and-apps-in-the-eu/). Passkeys: multi-billion-account availability by 2025 [M — FIDO pages unreachable].

**(b) Implication.** From 2027 every SME that must check age, identity or professional qualification (pharmacies, tobacco/alcohol e-commerce, car sharing, holiday rentals, gyms, notaries, landlords, employers) can accept a wallet presentation instead of ID copies — *if* their PHP/WordPress/Shopware/Odoo stack has a verifier. Nobody has built that for the long tail. Relying-party registration (WRPAC/WRPRC certificates) is bureaucratic and per-country — exactly the friction SMEs will pay to outsource. [I]

**(c) Pain / payers.** Online shops selling age-restricted goods (DE JuSchG, tobacco, knives), rental platforms, HOAs/landlords doing tenant checks, small employers doing right-to-work, gyms/coworking with access control. Wedge: DE+NL+FR age-verification for SME shops — tens of thousands of shops paying €20–80/month.

**(d) Builders / gap.** Big IDV vendors (IDnow, Signicat, Onfido) target enterprises; ecosystem repos are samples. **Gap: verifier-as-a-service with drop-in plugins for WooCommerce/Shopware/PrestaShop/Odoo, plus handling of relying-party registration and the cross-border wallet matrix.**

**(e) Feasibility.** 4–6 months (OpenID4VP, SD-JWT/mDoc verification, plugin shells). Moat: certifications/registrations per country, plugin distribution, being early in marketplaces. Timing risk: national wallets may slip; hedge by supporting passkeys + national eIDs (itsme, DigiD, BundID) in the same widget.

---

## 8. Sovereignty demand is real; the underserved slice is the *small* public body and the Verein, not the ministry

**(a) What changed.** Schleswig-Holstein's LibreOffice/Linux migration and Denmark's Digitalisation Ministry move away from Microsoft (2025), openDesk (ZenDiS) rollouts, Microsoft's April-2025 "European digital commitments", the ICC email-cutoff scare — all [M; primary pages unreachable]. Confirmed signals: **OpenCloud** ("Simple and sovereign"), Apache-2.0, **5.9k stars**, 23.7k commits [C]; Nextcloud server 36.7k stars [C]; **Immich v2.0.0 stable 2025-10-01** [C]; an `opendesk-mcp` connector appeared 2026-08-31 [C]; Google touts a **Dutch DPIA approval** for EU public-sector use [C] (cloud.google.com public-sector blog). Home Assistant 90.2k stars, 2026.9.0 released 2026-09-02 [C].

**(b) Implication.** Ministries and Länder have integrators (Dataport, Bechtle, plusserver). The 10,000+ German municipalities under 20k inhabitants, schools, Vereine, parishes, small housing co-ops do not — and they run on Exchange, Teams and Dropbox with volunteer IT. They cannot consume openDesk (Kubernetes-scale) and cannot evaluate 30 hosters. [I]

**(c) Pain / payers.** Small municipalities (budget lines exist because sovereignty is politically mandated), Kreisverbände, schools (state contracts), Vereine (€10–50/month), Pflegedienste. Also Mittelstand firms under NIS2 needing EU-only hosting.

**(d) Builders / gap.** Managed Nextcloud is crowded (Hetzner, IONOS, dozens of hosters) [M]. **Gap: the migration *service product* — fixed-price "M365/Exchange → openDesk-lite (OpenCloud/Nextcloud + Open-Xchange/Stalwart + Element) with data export, DSGVO paperwork and training" for bodies of 5–200 seats, plus an ongoing "sovereign IT admin" retainer.** It is services-heavy; productise the assessment and migration tooling, not the hosting.

**(e) Feasibility.** Low build cost; margin comes from repeatability; distribution via Kommunale Spitzenverbände, church IT, school boards. Moat is weak (references, local trust) — good cash business, poor venture story; suits a tiny founder who wants revenue in month 3.

---

## 9. Home energy: Matter energy clusters + Home Assistant + mandatory dynamic tariffs → an installer gap

**(a) What changed.** Matter SDK v1.4.0.0 (tagged 11 Dec [2024]) added Device Energy Management, **Water Heater Management**, Thread Border Router Management clusters; v1.5.0.0 (17 Nov [2025]) added camera/WebRTC, NFC commissioning, ICD improvements; the later SDK stream carries EVSE, electrical power measurement [C] (https://github.com/project-chip/connectedhomeip/releases). **evcc** (PV-surplus EV charging + home energy management) 7.2k stars, MIT + sponsor tokens, supports Tibber, Octopus, aWATTar, ENTSO-E prices, "200+ devices" [C]. Home Assistant ecosystem: EMHASS (MPC optimisation, 670 stars), nordpool (577), Octopus (999), Spanish **datadis** integration (337) [C]. Germany requires all suppliers to offer dynamic tariffs from 2025 (§41a EnWG) and smart-meter rollout accelerates; **EU Data Act applies from 2025-09-12**, giving users a right to access connected-device data and share it with third parties [M].

**(b) Implication.** Households with PV + heat pump + EV can save hundreds of euros per year by shifting load to cheap hours — but only with software that no electrician configures and no utility wants to give away (it cannibalises their tariff margin). The Data Act now legally compels inverter/heat-pump makers to hand over the data that makes third-party optimisation possible. [I]

**(c) Pain / payers.** Owner-occupiers with heat pump/PV/EV (millions in DE/NL/BE/AT), small landlords (Mieterstrom), HOAs (WEG) with shared PV and chargers. Willing to pay €300–800 setup + €5–15/month or a share of savings.

**(d) Builders / gap.** Utilities (Tibber, Octopus, 1KOMMA5°) sell their own closed stacks [M]; HA/evcc are DIY. **Gap: a local "energy integrator" franchise — standard hardware kit (HA Green/Yellow + meter + evcc) installed and maintained by a network of electricians, with tariff-agnostic optimisation and a Data-Act-based data-access process for locked-in devices.** Second gap: WEG-scale multi-tenant version.

**(e) Feasibility.** Software is mostly assembly (HA + evcc + EMHASS + tariff APIs); the product is the installer playbook, remote-monitoring dashboard and support desk. Moat: installer network + device-quirk knowledge base. Distribution: PV/heat-pump installers as resellers. Regulatory tailwinds (Data Act, §14a EnWG controllable loads [M]).

---

## 10. Positioning & open maps: Galileo HAS decoders on cheap receivers; Overture as free base map

**(a) What changed.** Galileo **High Accuracy Service**: free, ~20 cm horizontal after convergence, initial service January 2023, full service phased in 2025+ [M]. Open decoders now exist: **HASPPP** "open-source Galileo HAS embeddable RTKLIB decoding package" (44 stars), NavDecoder, borioda/HAS-decoding, a SparkFun UM980 (≈€250 module) convergence test [C]. **Overture Maps**: six themes (addresses, base, buildings, divisions, places, transportation), cloud-native Parquet on S3/Azure, MIT tooling, GERS ids [C] (https://github.com/OvertureMaps/data). Google Maps Platform re-priced in March 2025 [M].

**(b) Implication.** Centimetre-to-decimetre stake-out and as-built capture no longer need a €10–20k RTK kit plus a €1,000/year correction subscription; a €400 receiver + phone + free HAS corrections suffices for many jobs. That drops professional positioning into the price range of landscapers, fencers, drainage/irrigation installers, vineyards, small surveyors, and municipal Bauhöfe. [I]

**(c) Pain / payers.** ~1M+ small landscaping/construction/agri firms in DE/FR/NL/IT/ES; each currently either guesses, rents, or subcontracts a surveyor at €500+/day.

**(d) Builders / gap.** Ardusimple/SparkFun sell boards; agricultural OEMs bundle RTK; no consumer-grade "stake-out app + HAS receiver + cadastral overlay (ALKIS/Kadaster/cadastre.gouv) + Overture" kit for small trades exists to my knowledge [I].

**(e) Feasibility.** Hardware sourcing is off-the-shelf; software = decoder integration (RTKLIB/HASPPP), a phone app, and cadastral WMS/WFS overlays (HVD geospatial APIs). 6–9 months; moat = UX + regional cadastre integrations; distribution via trade wholesalers and YouTube. Convergence time (minutes) and canopy/urban performance are real limits — target open-field trades first.

---

## 11. Apple's unified EU terms (effective 2026-10-01) make web distribution viable for indies

**(a) What changed.** Apple's EU page (agreement released **2026-08-18**, effective **2026-10-01**): unified terms; **Core Technology Commission 5% flat**; **CTC waived** for marketplace operators under €10M global revenue and €1M lifetime EU marketplace fees; **Web Distribution and alternative-marketplace eligibility expanded — no EU legal entity required**, with alternative qualifiers (D&B score, public status, VC funding, audit, non-profit, USD 1M letter of credit, or 1M first-year installs); new API for initiating downloads from a developer's website; 90-day grace when travelling; HCE NFC APIs for payments, keys, transit, tickets; user-settable defaults incl. password managers, navigation, translation [C] (https://developer.apple.com/support/dma-and-apps-in-the-eu/).

**(b) Implication.** An indie can ship a notarised iOS app **from its own website** in the EU with a 5% (not 30%) take and no App Review policy risk — useful precisely for the boring local products above (installer apps, HOA door keys via HCE, municipal apps, age-verification wallets). [I]

**(c–e)** Enabler rather than a business in itself; combine with #7 (HCE access/tickets), #9 (installer app). Feasible; the eligibility hoops (letter of credit or audit) are the friction a solo founder must plan for.

---

## 12. Cheap analytics substrate: DuckDB 1.5.x + DuckLake + Parquet-on-object-storage

**(a) What changed.** DuckDB 1.5.x bugfix cadence through **v1.5.5 (2026-07-22)**, geometry statistics, ADBC, encryption/Parquet improvements [C] (https://github.com/duckdb/duckdb/releases). **DuckLake**: "open Lakehouse format built on SQL and Parquet", time travel, schema evolution, MIT, 3.0k stars [C]. Overture ships as partitioned Parquet [C].

**(b) Implication.** A one-person company can offer *per-tenant, own-your-data* analytics — each customer's data as encrypted Parquet in EU object storage (Hetzner/OVH/Scaleway), queried by DuckDB in a browser (WASM) or a tiny worker — at near-zero marginal cost and with a credible sovereignty story. [I]

**(c–e)** Payers: Mittelstand and municipalities wanting dashboards over exports (POS, ERP, energy meters, open data) without a data warehouse contract. Crowded with generic BI; interesting only as the engine under a vertical (e.g., #9 energy, #3 public data). Feasible in weeks.

---

## 13. E-commerce platforms are absorbing MCP — signal for where *not* to compete and where to plug in

**(a) What changed.** Shopware archived its standalone `shopware-admin-mcp` (created 2025-08) and started **`SwagMcpMerchantTools` — "Merchant facing MCP Tools extension for bestsellers, checkout actions"** (2026-04-20), plus a Claude Code plugin marketplace for Shopware devs [C]. WooCommerce: 146 MCP-related repos, top one 102 stars; several WordPress MCP plugins with OAuth 2.1 and 100–500 tools [C]. PrestaShop: none found [C].

**(b) Implication.** For *product* commerce, the platform will ship the agent endpoint; a plugin business here is a race against the vendor. The uncovered surface is (i) PrestaShop/FR-IT SMB shops, (ii) *service* commerce (#1), (iii) verification/identity layers (#7). [I]

---

## 14. EU open data / Data Act: France leads, Germany is patchy, device data is the sleeper

**(a) What changed.** HVD implementing regulation made six dataset categories (geospatial, earth observation/environment, meteorological, statistics, companies, mobility) mandatory via APIs/bulk from June 2024 [M]; Data Act applicable 12 Sept 2025 with product-design obligations from Sept 2026 [M]. Confirmed on-the-ground signals: official French MCP endpoint; German coverage via a hobby project for 84 cities; Swiss/Swedish community servers [C].

**(b) Implication.** Under-exploited: (1) **Data Act device data** — heat pumps, inverters, tractors, medical devices — enabling independent maintenance, energy optimisation (#9) and farm advisory; (2) **company-register HVDs** for KYB/agent lookups (#3); (3) **BAG/Kadaster & ALKIS** for #10; (4) meteorological APIs (DWD/Météo-France) for agri and construction scheduling. [I]

**(c–e)** Same buyers as #3/#9/#10. Feasibility depends on national portal quality; France/NL easiest, Germany most fragmented (and thus most valuable to normalise).

---

## 15. Games/creative: Godot cadence is strong, but this is not the founder's wedge

**(a) What changed.** Godot 4.6 (2026-01-26), 4.7 (2026-06-18), 4.7.2 (2026-08-18) [C] (https://github.com/godotengine/godot/releases). Steam indie volume and Unity's 2023 pricing backlash pushed adoption [M]; EU Digital Fairness Act proposal (loot boxes, dark patterns) expected 2026 [M].

**(b–e)** Consumer games are a hits business. The only fits for this profile: serious/educational games for municipalities, museums and Volkshochschulen using Godot + on-device AI (#5) — small, grant-funded, low moat. **Deprioritise.**

---

## 16. Quiet threshold crossings worth noting (2025–2026)

- **llms.txt entered Chrome Lighthouse's agentic-browsing audit** [C] — the "agent-readiness" checklist is becoming a standard web-agency deliverable.
- **Immich reached stable (v2.0.0, 2025-10-01)** and sits at 113.5k stars [C] — self-hosted Google-Photos replacement is now mainstream-grade; managed Immich for families is already crowded [M].
- **OpenCloud** (Apache-2.0 ownCloud successor) at 5.9k stars in ~18 months [C] — the German public-sector file layer is standardising around it/Nextcloud.
- **Automerge 3's 10× memory reduction** [C] removes the last practical blocker for document-heavy local-first apps.
- **Firefox shipped WebGPU** (141 Windows, 145 Mac) [C] — three-engine coverage means on-device web AI is no longer "Chrome-only".
- **Visa published a full agent-identity reference stack** (agent registry + CDN proxy) [C] — merchant-side "is this agent allowed?" checks will be a checkbox in CDNs within a year [I].
- **Personal-agent frameworks at 100k–240k stars** [C] — the demand side of agentic commerce is consumers, not enterprises.
- **RuView** (Wi-Fi-signal presence/vital-sign sensing, 92k stars, tagged home-assistant) [C] — camera-free occupancy/fall detection for elderly care is becoming commodity; regulated-care packaging is open [I].

---

## Top 6 non-obvious opportunities from this track

**1. "Agent front desk" for local service businesses (DE/NL/FR).** Product commerce got ACP/AP2/UCP; time-slot commerce got nothing, while consumer agents (Hermes/OpenClaw-class) are already booking by phone, email and browser. Build an MCP + UCP/ACP-compatible availability/booking endpoint that syncs with the calendar a physio, restaurant or plumber already uses, verifies agents (Web Bot Auth / Visa TAP signatures), takes deposits, publishes llms.txt/structured data, and lists the business in agent-facing directories. Charge €29–79/month; sell through vertical booking tools as an "agent channel" and through trade associations. Evidence: hotel MCP servers exist only for OTA wholesale inventory; restaurant/clinic servers are demos [C].

**2. EUDI-wallet verifier-as-a-service for SME shops and landlords.** Four repos exist for relying parties in the whole ecosystem [C]; the legal deadline is end-2026 [M]; age-restricted e-commerce, rentals, gyms and employers must verify identity today with photocopies. Ship OpenID4VP/SD-JWT/mDoc verification behind WooCommerce/Shopware/PrestaShop/Odoo plugins, handle WRPAC/WRPRC registration per country, and fall back to passkeys/national eIDs. €20–80/month per site; distribution via plugin marketplaces and Datenschutz consultants.

**3. Dynamic-tariff home-energy integrator kit sold through electricians.** Matter 1.4/1.5 energy clusters, evcc/HA/EMHASS maturity, mandatory dynamic tariffs, and Data Act device-data rights converge; utilities' closed stacks and DIY HA leave owner-occupiers, small landlords and WEGs unserved. Product = standard hardware bundle + tariff-agnostic optimiser + remote monitoring + an installer playbook; revenue = setup fee + subscription or savings share. Moat = installer network and device-quirk knowledge.

**4. Device-only transcription & document assistant for regulated small practices.** WebGPU in all three engines and Transformers.js/WebLLM/Apple Foundation Models make "no data leaves the device" a real, cheap architecture; GitHub shows only ≤4-star demos [C]. Package it vertically (Arztpraxis, Physio, Kanzlei, Steuerberater, Schule) with templates and the DSGVO paperwork (TOMs, DPIA), €9–19/user/month at ~90% margin. Distribution via professional bodies and data-protection officers.

**5. Official-grade public-data MCP servers for DE/NL/IT/ES professionals.** data.gouv.fr's official server (1.6k stars in 9 months) proves demand; Germany's coverage is one hobby project for 84 cities [C]. Build hosted, cited, SLA'd MCP endpoints over HVD company registers, cadastre/BAG/ALKIS, permits and tenders, sold per seat to notaries, architects, real-estate and tax advisers, plus a white-label "ask our open data" for municipalities. Moat = entity resolution, uptime, citations, directory presence.

**6. cm-accurate stake-out kit for small trades on Galileo HAS.** Free HAS corrections + open decoders (HASPPP/RTKLIB) + €300–400 receivers + Overture/cadastral overlays turn a €15k surveyor workflow into a €600 kit for landscapers, fencers, drainage/irrigation and vineyard crews. Hardware is off-the-shelf; the product is the app, cadastre integrations and trade-wholesaler distribution. Start with open-field trades where convergence and canopy limits don't bite.

---

## Crowded / avoid

- **Generic MCP gateways, registries, "awesome" lists and WordPress/WooCommerce MCP plugins** — 27k `mcp-server` repos, 146 WooCommerce MCP repos, platform vendors (Shopware) absorbing the feature [C].
- **llms.txt generators and "GEO" agencies** — 217 generator repos; the measurable mechanism is thin; Yoast/AIOSEO ship it free [C].
- **Content-licensing marketplaces for small publishers** — labs deal with Cloudflare/TollBit-scale counterparts; no leverage for a tiny team [M/I].
- **Hotel/flight MCP aggregators** — LetsFG, DIDA, RollingGo, WinWin already give away wholesale inventory endpoints [C].
- **Managed Nextcloud/Immich hosting and "sovereign cloud" IaaS** — Hetzner/OVH/IONOS pricing and dozens of hosters; only the migration *service* for small bodies is open [M].
- **x402/crypto agent-payment rails** — loud on GitHub (awesome-x402 1,002 forks) [C], irrelevant to European SME buyers in 2026 [I].
- **Personal-agent frameworks and "skills" marketplaces** — 100k–240k-star incumbents [C].
- **Indie games on Godot** — strong tool, hits-driven market; no structural edge for this founder.
- **Anything positioned as "AI agent for X" or a copilot** — explicitly out of scope and saturated.

---

## Source list (fetched this session unless marked [M])

- https://github.com/agentic-commerce-protocol/agentic-commerce-protocol
- https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol
- https://github.com/google-agentic-commerce/AP2
- https://github.com/Universal-Commerce-Protocol/ucp
- https://github.com/visa/trusted-agent-protocol
- https://github.com/cloudflare/web-bot-auth
- https://github.com/AnswerDotAI/llms-txt
- https://github.com/GEO-optim/GEO
- https://github.com/topics/agentic-commerce
- https://github.com/modelcontextprotocol/modelcontextprotocol (+ GOVERNANCE.md)
- https://github.com/a2aproject/A2A
- https://github.com/datagouv/datagouv-mcp
- https://github.com/HelpCode-ai/anythingmcp
- https://github.com/street1983nk/infranode
- https://github.com/NousResearch/hermes-agent ; https://github.com/VoltAgent/awesome-openclaw-skills
- https://github.com/gpuweb/gpuweb/wiki/Implementation-Status
- https://github.com/webmachinelearning/prompt-api
- https://github.com/huggingface/transformers.js ; https://github.com/mlc-ai/web-llm ; https://github.com/k2-fsa/sherpa-onnx
- https://github.com/electric-sql/electric ; https://github.com/powersync-ja/powersync-service ; https://github.com/automerge/automerge ; https://github.com/rocicorp/mono ; https://github.com/garden-co/jazz
- https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework ; https://github.com/sirosfoundation/siros-wrpac-tool ; https://github.com/Kimealabs/symfony-eudi-wallet-bundle
- https://developer.apple.com/support/dma-and-apps-in-the-eu/
- https://github.com/opencloud-eu/opencloud ; https://github.com/nextcloud/server ; https://github.com/immich-app/immich/releases/tag/v2.0.0 ; https://github.com/Nraitschew/opendesk-mcp
- https://github.com/project-chip/connectedhomeip/releases ; https://github.com/home-assistant/core/releases ; https://github.com/evcc-io/evcc ; https://github.com/davidusb-geek/emhass ; https://github.com/custom-components/nordpool ; https://github.com/uvejota/homeassistant-edata
- https://github.com/OvertureMaps/data ; https://github.com/ZhangRunzhi20/HASPPP ; https://github.com/NavSesne/NavDecoder ; https://github.com/sparkfun/SparkFun_UM980_Galileo_HAS_E6_Convergence_Test
- https://github.com/duckdb/duckdb/releases ; https://github.com/duckdb/ducklake
- https://github.com/shopware/SwagMcpMerchantTools ; https://github.com/shopware/shopware-admin-mcp ; https://github.com/techspawn/woocommerce-mcp-server
- https://github.com/LetsFG/LetsFG ; https://github.com/DIDA-AI/Dida-Hotel-MCP-Global ; https://github.com/zooza-dev/zooza-mcp-server
- https://github.com/godotengine/godot/releases
- https://cloud.google.com/blog/topics/public-sector/ (Dutch DPIA approval item)
- [M] Cloudflare pay-per-crawl / default blocking (2025-07-01); Denmark & Schleswig-Holstein migrations; openDesk; Microsoft European digital commitments (2025-04-30); Galileo HAS service parameters; EU HVD regulation & Data Act dates; §41a EnWG; Apple Foundation Models; FIDO passkey statistics; Google Maps pricing change — all unverifiable through this session's proxy and should be re-checked.
