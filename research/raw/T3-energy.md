# T3 — Energy, Grid, Batteries, Heat, EVs and Home/SME Electrification in Western Europe (2024–2026)

*Research date: 2026-09-05. Method: 36 web searches (2025–2026 sources preferred). Deep-fetching of individual pages was blocked by the network proxy, so figures come from search-result extracts; each is cited. Items marked **[confirmed]** are directly supported by a cited source; items marked **[inference]** or **[unverified]** are my reasoning or prior knowledge and should be checked before money is spent.*

*Founder profile assumed: 1–3 people, <€100k, 6–9 months to v1, software-first, willing to learn hardware integration. No generic B2B SaaS, no AI-workflow tools.*

---

## Part 1 — Findings (18)

### F1. LFP and sodium-ion cell prices have fallen far enough that "battery without solar" is a mass-market consumer product

**(a) What changed.** LFP cells are around $70–80/kWh globally in 2026 and $40–45/kWh at CATL scale; sodium-ion cells are $55–100/kWh and near LFP parity, with system-level sodium BESS at $230–280/kWh wholesale ([energy-solutions.co](https://energy-solutions.co/articles/sub/sodium-ion-batteries-cheaper-lithium-alternative), [zvepow](https://www.zvepow.com/new/sodium-Ion-battery-cost-per-kwh-in-2026), [SodiumBatteryHub](https://sodiumbatteryhub.com/2026/03/02/european-sodium-ion-battery-manufacturers-complete-overview/)). **[confirmed]** In Germany a ~€400 plug-in storage unit on a dynamic tariff is claimed to pay back in 3–4 years, while an €8,000 wall-mounted battery doing pure arbitrage typically does not; the §14a grid-fee discount (€110–190/yr) is often a bigger lever than arbitrage ([reduco.ai](https://reduco.ai/blog/solar/stromspeicher-ohne-pv-lohnt-sich), [rabot.energy](https://www.rabot.energy/magazin/heimspeicher-ohne-solaranlage-2026/)). A 10 kWh battery on a German dynamic tariff is quoted at ~€620/yr arbitrage value ([Lumenhaus](https://www.lumenhaus.com/mediacenter/detail/dynamic-electricity-tariffs-in-germany-2026-how-smart-homes-can-save-more.html)). **[confirmed, vendor sources]**

**(b) Non-obvious implication.** The unit economics only work at the *cheap, small, plug-in* end (€300–1,500 hardware, 1–3 kWh) plus a dynamic tariff — i.e. for renters and apartment dwellers, not the classic solar-homeowner. The value is not the battery; it is the *tariff + control + smart meter* wrapped around a commodity cell. Sodium-ion additionally removes the fire-safety objection that landlords and insurers raise for indoor lithium in apartments **[inference]**.

**(c) Who pays / wedge.** German renters (>50% of households rent) with a dynamic tariff — but see F2: the smart-meter bottleneck caps the addressable base today. Wedge: hundreds of thousands of households in 2026, not millions.

**(d) Who is building it.** Zendure (Hyper 2000 is singled out as the only plug-in system that grid-charges on cheap night rates), Anker SOLIX, EcoFlow ([Balcony Energy UK](https://balconyenergy.co.uk/articles/best-balcony-solar-batteries-uk/), [PES](https://pes.eu.com/press-releases/anker-solix-at-intersolar-2026-technologies-standards-and-prospects-for-tomorrows-energy-supply)). Tariff side: Tibber, Ostrom, Rabot, Yello. **Gap:** nobody sells the *bundle* (meter procurement + tariff + plug-in battery + control) to renters as one contract; hardware vendors' apps optimise only their own box.

**(e) Feasibility.** High for software (tariff APIs + vendor cloud APIs/Modbus) — but the business is distribution, not code. A tiny team should white-label hardware, not build it.

---

### F2. Germany's dynamic-tariff mandate is live, but only 5.5% of meters can use it — the smart meter is the choke point, and regulators just started punishing meter operators

**(a)** Since 1 Jan 2025 every German supplier must offer a dynamic tariff (§41a EnWG). As of 31 Dec 2025 only 5.5% of ~56.5 million connections (~3 million) had an intelligentes Messsystem (iMSys); the mandatory-case quota was 23.3%; in March 2026 BNetzA opened 77 proceedings against metering operators that had not started ([energiezukunft](https://www.energiezukunft.eu/erneuerbare-energien/stromnetze-speicher/aktuelle-zahlen-zum-smart-meter-rollout), [pv magazine DE](https://www.pv-magazine.de/2025/12/29/smart-meter-rollout-erreicht-20-prozent-marke-bei-pflichteinbaufaellen/), [elektroquatsch](https://www.elektroquatsch.de/artikel/smart-meter-rollout-quote-2026-deutschland-vergleich)). §14a Modul 3 (time-variable grid fees) needs an iMSys and a Steuerbox; DSO control interfaces are being switched on at very different regional speeds through 2026, with timers tolerated as a workaround until end-2028 ([EMA Energiewelt](https://ema-energiewelt.de/wissen/netzentgelte-paragraph-14a-steuerbare-verbraucher-2026), [inexogy](https://www.inexogy.com/blog/modul-3/)). The Solarspitzengesetz (Feb 2025) makes iMSys + control mandatory from 7 kWp, caps feed-in at 60% without one, and zeroes the feed-in tariff during negative price hours for new plants ≥2 kWp with a smart meter ([SMA](https://www.sma.de/solarspitzengesetz2025), [Enpal](https://www.enpal.de/strom/solarspitzengesetz)). **[confirmed]**

**(b) Non-obvious implication.** Three separate laws (§41a, §14a, Solarspitzengesetz) now all funnel demand into one scarce physical object — the iMSys + Steuerbox — that the household's *supplier* does not control and the *grid operator's default meter operator* is slow to deliver. The person who can reliably get a household or small business a working smart meter, register the §14a module, and prove the time-variable grid fee reduction captures value from all three laws at once. The 77 enforcement proceedings mean the default operators will now accelerate — a 2026–2028 window in which "meter concierge" is valuable before it becomes standard **[inference]**.

**(c) Who pays.** Owners of new heat pumps (Germany sold heat pumps at 50% share of new heating systems in 2025, F7), wallboxes, and 7 kWp+ PV: the €110–190/yr §14a discount plus dynamic-tariff savings (Ostrom cites €650+/yr for an EV + electric-heating household, [Ostrom](https://www.ostrom.de/en/post/ueber-650-eu-im-jahr-gespart-dank-eines-dynamischen-stromtarif)). Wedge: ~1.5–2 million German households with a controllable device but no iMSys **[inference from 5.5% vs. 2025 heat pump/EV stock]**.

**(d) Who is building it.** Competitive metering operators (inexogy/Discovergy, 1Komma5°'s metering arm), tariff apps (Tibber, Ostrom, Rabot), HEMS vendors (gridX, Solarwatt, evcc open source). **Gap:** none targets *small businesses* (bakeries, workshops, dental practices with 30–100 MWh/yr) with an end-to-end "meter + §14a + dynamic tariff + control" service; and none sells to the installer trade as the channel.

**(e) Feasibility.** High for a solo founder as a service/brokerage business with thin software (MaKo process tracking, tariff comparison on 15-min load data, §14a registration workflow). Revenue: per-activation fee plus tariff/MSB commissions.

---

### F3. Netherlands: net metering ends 1 Jan 2027 — the largest "prosumer cliff" in Europe, colliding with record negative prices

**(a)** Salderen ends 1 Jan 2027 for all rooftop owners regardless of install date; 2027–2029 statutory minimum feed-in compensation ≥50% of the bare supply rate; suppliers already charge terugleverkosten ([thuisbatterij.nl](https://thuisbatterij.nl/thuisbatterij-capaciteit/salderen/), [Anker SOLIX NL](https://www.ankersolix.com/nl/blogs/thuisbatterij-101/thuisbatterij-salderingsregeling)). The Netherlands logged 584 negative-price hours in 2025, the most in Europe; Germany 539–576, Spain 569, Belgium 519, France 509–513 ([pv magazine](https://www.pv-magazine.com/2025/09/01/netherlands-registers-record-number-of-negative-energy-prices/), [carboncredits.com](https://carboncredits.com/europes-power-paradox-why-electricity-prices-went-below-zero-in-2025/), [Bloomberg](https://www.bloomberg.com/news/articles/2026-01-05/europe-saw-record-surge-in-negative-power-prices-in-2025)). DE/FR/NL curtailed 3.9 TWh of renewables in 2025 ([pv magazine](https://www.pv-magazine.com/2026/02/03/germany-france-netherlands-curtail-3-9-twh-of-renewables-in-2025/)). **[confirmed]**

**(b) Non-obvious implication.** From 2027, ~2.5–3 million Dutch rooftops **[inference; NL has >3 M solar homes]** need three things simultaneously that most of their 2015–2022 inverters cannot do: (i) stop exporting when price ≤ 0, (ii) shift load/battery to midday, (iii) see 15-minute prices. Retrofitting *control* to legacy inverters (Modbus/SunSpec, or a smart relay) is cheaper than replacing hardware and is a physical service enabled by software. The P1 port on every Dutch smart meter gives free real-time data without any DSO API contract ([meteringlab](https://meteringlab.com/dsmr-p1-port-standard-how-dutch-smart-meters-share-data-with-your-home/), [Sibelga](https://www.sibelga.be/en/connections-meters/smart-meters/the-p1-port-of-the-smart-meter)).

**(c) Who pays.** Every Dutch prosumer whose bill rises in 2027; the honest analyses say a home battery only pays for "a select group" ([jeroen.nl](https://jeroen.nl/blog/thuisbatterij-terugverdienen-voor-een-selecte-groep-mogelijk)), which creates demand for *cheaper* fixes (curtailment + load shifting) rather than €6k batteries.

**(d) Who is building it.** Zonneplan, Frank Energie, Tibber, HomeWizard (P1 dongles), Enphase/SolarEdge own apps. **Gap:** brand-agnostic "zero-injection/curtailment retrofit" for legacy inverters as an installed service; and independent advice on whether a battery pays (most advisers sell batteries).

**(e) Feasibility.** High. P1 + inverter Modbus + EPEX day-ahead is a two-person build; the service layer (local electricians installing a €100 controller) is the moat.

---

### F4. Dutch grid congestion has now reached small consumers: from 1 July 2026 SMEs and households join the waiting list, and the group-transport contract (energy hub) becomes mandatory-to-offer from 1 Jan 2027

**(a)** From 1 July 2026, kleinverbruik applications (including SMEs) in congested areas go on the same waiting list as large users; around Eindhoven and Utrecht *all* applications wait; DSOs expect expansions complete around 2035 at the earliest ([Zoetermeer](https://www.zoetermeer.nl/wachtlijst-vanaf-1-juli-2026-voor-alle-aanvragen-stroomaansluitingen), [BNNVARA Kassa](https://www.bnnvara.nl/kassa/artikelen/wachtlijst-voor-stroom-dit-verandert-er-per-1-juli-voor-huishoudens), [Liander](https://www.liander.nl/aansluitingen/stroomnet-vol/prioriteit-voor-aanvragen-op-de-wachtlijst)). The first Brabant groepstransportovereenkomst (GTO) was signed 9 July 2026 on De Waterlaat, Bergeijk — 13 firms sharing one capacity envelope; Enexis is working with 10 estates; from 1 Jan 2027 DSOs are *required* to offer the GTO as a contract form; Invest-NL published a toolkit ([Brabant](https://www.brabant.nl/actueel/nieuws/volgende-stap-energiehubs), [Enexis](https://www.enexis.nl/zakelijk/netcapaciteit/flexibiliteitsoplossingen/groepstransportovereenkomst), [Invest-NL](https://www.invest-nl.nl/nl/nieuws/energiehub-met-groepstransportovereenkomst-van-start-met-toolkit-van-invest-nl)). GOPACS lets aggregators (CSPs) bid SME flexibility; Nord Pool coupling activations expected in 2026 ([GOPACS](https://www.gopacs.eu/en/), [GOPACS/Nord Pool](https://www.gopacs.eu/en/news/cooperation-between-gopacs-and-nord-pool-expands-access-to-flexibility/)). **[confirmed]**

**(b) Non-obvious implication.** A GTO is a *legal* construct; the DSO measures the group at the substation and does not care how the 13 companies split it. Someone has to run the internal allocation, 15-minute forecasting, cap enforcement, and inter-company settlement — a small, recurring, non-optional job on every one of the ~3,000+ Dutch business parks **[inference; NL has roughly 3,500 bedrijventerreinen]**. That "hub operator back-office" is a new job category created by a contract type that becomes mandatory-to-offer in four months.

**(c) Who pays.** SMEs who cannot expand, electrify vans, or add heat pumps without a hub — willing to pay a few hundred €/month each to unlock growth. Wedge: 10 estates × 10–20 firms today; hundreds of estates by 2028.

**(d) Who is building it.** Spectral, Firan, Entrnce, Withthegrid, local energy cooperatives, consultancies with spreadsheets; DSOs supply the contract but not the software. **Gap:** a lightweight, affordable allocation-and-settlement engine for 5–30-member hubs, sold via park associations (parkmanagement) rather than to enterprises.

**(e) Feasibility.** High. Data ingress is trivial (P1/telemetry), the rules are published, and the legal template is public. Needs one Dutch-speaking co-founder or partner.

---

### F5. Germany's standalone-battery gold rush has hit a wall: 400 GW in the queue and regulators now allow DSOs to refuse — pushing value to behind-the-meter and co-located storage

**(a)** TSOs had 650 large-battery requests totalling 226 GW at end-2024, reported to have grown to ~400 GW; grid connection waits of 18 months are common; a BNetzA decision of 30 March 2026 (BK6-25-325) lets DSOs refuse battery connections under relatively light evidence; batteries commissioned by 4 Aug 2029 keep a 20-year grid-fee exemption (§118(6) EnWG) ([Energyload](https://energyload.eu/energiewende/deutschland/energiewende-batteriespeicher-netzanschluss/), [Rödl](https://www.roedl.com/insights/netzanschluss-gross-batteriespeicher-pflicht/), [CMS](https://cms.law/de/deu/publication/2026-themen-die-sie-bewegen-werden/batteriespeicher-wohin-geht-die-regulierungs-reise), [greennrg](https://www.greennrg-gmbh.com/wissen/netzanschluss-bess-wartezeit)). UK parallel: NESO's Gate 2 reform cut 153 GW of batteries from a 700 GW queue; distribution-level offers run July–Nov 2026 ([Energy-Storage.News](https://www.energy-storage.news/uk-painful-but-necessary-reforms-see-153gw-of-battery-storage-projects-cut-from-grid-connection-queue/), [NESO](https://www.neso.energy/industry-information/connections-reform/connections-reform-timeline)). **[confirmed]**

**(b) Non-obvious implication.** The only battery that does not need a new connection is one behind an *existing* SME connection. That makes the un-glamorous 50–500 kWh commercial storage market (peak shaving + arbitrage + §14a-style flexibility) the place where small operators can still deploy in 2026–2029, and second-life packs (F16) fit that size band.

**(c) Who pays.** Developers stuck in queues (want sites with existing capacity), SMEs with demand charges (RLM customers), and landlords of logistics/retail with underused connections **[inference]**.

**(d) Who is building it.** Large aggregators; Voltfang and Tesvolt on hardware. **Gap:** a "connection-capacity finder" data product — matching queued developers to SMEs with idle capacity — is thin.

**(e) Feasibility.** Medium; data-heavy (Marktstammdatenregister, DSO capacity maps) but purely software.

---

### F6. Balkonkraftwerk crossed 1.3 million units; one in three new units now ships with storage

**(a)** 1.32 million plug-in solar devices registered by May 2026 (1,381 MWp); 429,808 added in 2025 (one every 73 seconds); 64,633 in Q1 2026; ~20% of all and ~30% of new units have storage ([GFK Solar](https://www.gfk-solar.de/solaranlagen-photovoltaik-berlin-brandenburg/balkonkraftwerk-karte-deutschland-2026/), [Energyload](https://energyload.eu/energiewende/balkon-solar/balkonsolar-2026/), [balkon-kraft-werke.de](https://balkon-kraft-werke.de/magazin/q1-2026-marktreport-64633-neue-anlagen/), [Deutscher Presseindex](https://www.deutscherpresseindex.de/2026/08/13/balkonkraftwerk-erreicht-die-millionenmarke-deutlich-ber-1-3-millionen-steckersolargerte-sind-im-marktstammdatenregister-als-in-betrieb-erfasst/)). **[confirmed]**

**(b)** Growth is decelerating (Q1 2026 pace ≈ 260k/yr vs 430k in 2025), which usually means the market shifts from hardware sales to the installed base: storage retrofits, relocation when tenants move, second-hand, and *renter-to-renter* resale — plus the fact that these ~1.3 M owners are the most motivated cohort for dynamic tariffs and plug-in batteries (F1) **[inference]**.

**(c)** Renters; landlords/WEGs facing installation requests (Germany made balcony PV a "privileged measure" in tenancy and condominium law in 2024).

**(d)** Hardware vendors dominate; comparison sites (priwatt, Yuma) and installers. **Gap:** landlord/WEG-facing tooling (standardised consent, façade rules, insurance) and used-market/relocation logistics.

**(e)** High feasibility, low margin — best as a channel into F1/F2, not a standalone business.

---

### F7. Heat pumps: the slump is over (+10% 2025, Germany +50%, Q1 2026 +17%), but installation quality is the unaddressed problem — and Germany just abolished the 65% rule

**(a)** 2.62 M residential heat pumps sold across 16 European countries in 2025 (+10%); Germany +50% and heat pumps took 50% of the space-heating market; Q1 2026 +17% across 11 countries, +25% in DE/FR/PL ([EHPA](https://ehpa.org/news-and-resources/news/heat-pump-sales-testify-to-government-action/), [IIR](https://iifiir.org/en/news/policy-support-drives-11-growth-in-heat-pump-uptake-across-europe-in-2025), [BUILD UP](https://build-up.ec.europa.eu/en/resources-and-tools/publications/pump-it-why-heat-pump-sales-rose-2025-country-country-breakdown)). Fraunhofer field data: the *same* heat pump type achieves seasonal COP (JAZ) between 2.6 and 4.9 depending on on-site settings; a heating curve 5 K too high costs 4–10% ([Haustec](https://www.haustec.de/heizung/waermepumpen/waermepumpe-im-realitaets-check-jaz-theorie-und-praxis), [42watt](https://42watt.de/magazin/jahresarbeitszahl)). Germany's GEG became the Gebäudemodernisierungsgesetz, promulgated 28 July 2026, in force 29 July 2026: the 65%-renewable obligation is gone, replaced by a "Bio-Treppe" blending ladder from 2029; large cities' heat plans were due 30 June 2026, with the GEG-linked deadline pushed to end-October 2026 ([Bundesregierung](https://www.bundesregierung.de/breg-de/aktuelles/neues-gebaeudemodernisierungsgesetz-2430284), [baulinks](https://www.baulinks.de/webplugin/2026/0288.php4), [reduco](https://reduco.ai/blog/kommunale-waermeplanung-2026)). The Dutch 2026 hybrid-heat-pump mandate was scrapped in May 2024 and is not in force ([EHPA](https://ehpa.org/news-and-resources/press-releases/dutch-heat-pump-industry-responds-to-cancellation-of-2026-legislation/), [homekeur](https://homekeur.nl/en/knowledgebase/disappear-obligation-hybrid-heat-pump-2026-what-do-we-know-now)). UK BUS: £7,500, rising to £9,000 for off-gas homes from 21 July 2026; from 28 April 2026 the installer is legally defined as MCS-certified; £15bn Warm Homes Plan 2026–2030 ([HEM Guide](https://home-energy-model.co.uk/news/2026-04-29-bus-overhaul-april-2026/), [Reonic](https://reonic.com/en-gb/blog/warm-homes-plan-installer-guide/)). **[confirmed]**

**(b) Non-obvious implication.** With mandates gone (DE, NL), the heat pump must win on *operating cost*, so a badly commissioned unit (JAZ 2.6 instead of 4) is now a *commercial* problem for installers and manufacturers, not just an efficiency footnote. The 2025–2026 install wave will produce hundreds of thousands of units with no one checking them after commissioning — installers are at capacity. Combined with dynamic tariffs (F2) and §14a, a heat pump is also becoming a flexibility asset whose settings matter to the grid.

**(c) Who pays.** Homeowners with high bills (the "my heat pump costs more than gas" cohort); installers wanting to reduce callbacks; manufacturers protecting reputation; UK/DE subsidy bodies wanting verified performance. Wedge: 2.6 M new units/yr, of which perhaps 20–30% underperform **[inference from the JAZ spread]**.

**(d) Who is building it.** UK: Heatpumpmonitor.org (open source), Homely, Havenwise; DE: manufacturers' own clouds (Viessmann, Vaillant), 42watt, Enwendo (planning); tado°/1Komma5° on control. **Gap:** an *independent*, brand-agnostic performance-verification and remote-tuning service that installers can resell and homeowners can buy as a second opinion.

**(e) Feasibility.** High. Heat meter + electricity submeter (or manufacturer API / SG-Ready / EEBUS) + weather + tariff → JAZ report and tuning recommendations; field partners are local heating engineers.

---

### F8. Energy sharing finally has a legal basis in Germany (1 June 2026), Spain widened collective self-consumption to 5 km (March 2026), Italy's CER tariff runs to 2027

**(a)** Germany: EnWG amendment in force 22 Dec 2025 created §42c; energy sharing across the public grid permitted from 1 June 2026, open to natural persons, partnerships and private-law entities whose members are all end consumers; smart meter gateway mandatory for participants ([Baker Tilly](https://www.bakertilly.de/beitrag/energy-sharing-enwg-novelle-schafft-neuen-rechtlichen-rahmen), [Taylor Wessing](https://www.taylorwessing.com/en/insights-and-events/insights/2025/11/energy-sharing-42-enwg), [DGS](https://www.dgs.de/beratung-und-kompetenz/energy-sharing-in-deutschland/)). Spain: RDL 7/2026 (20 March 2026) raised the collective self-consumption radius from 2 to 5 km for plants ≤5 MW, created a "gestor de autoconsumo" role, cut the condominium majority to one-third, simplified procedures up to 100 kW, extended IRPF deductions to 31 Dec 2026 ([landatusolar](https://landatusolar.com/real-decreto-ley-7-2026-autoconsumo/), [fotovol](https://fotovol.com/ayudas-normativa/real-decreto-ley-7-2026-autoconsumo/)). Italy: CER incentive tariff up to €120/MWh on shared energy open until 2027; PNRR grant window (40% capex, extended to municipalities ≤50,000 inhabitants in July 2025) is closed; a new €795.5 M PNRR decree was approved 29 Jan 2026 ([BibLus](https://biblus.acca.it/comunita-energetiche-cer-decreto-incentivi/), [Fondazione Flander](https://www.fondazioneflandercer.it/guida-incentivi-cer-2026/)). **[confirmed]**

**(b) Non-obvious implication.** Germany's version deliberately offers no grid-fee reduction and requires a smart meter gateway (5.5% penetration) — so real volume in 2026–2027 will come from *new-build* neighbourhoods and multi-family buildings where meters are being installed anyway, and from the "Energy Sharing as alternative to Mieterstrom after the BGH ruling" angle raised by lawyers ([anwalt.de](https://www.anwalt.de/rechtstipps/energy-sharing-ab-2026-die-alternative-zu-mieterstrom-nach-dem-bgh-urteil-261220.html)). Spain's new *gestor de autoconsumo* is a licensed intermediary role that did not exist before March 2026 — a role a small company can occupy.

**(c) Who pays.** PV plant owners with unsold midday surplus; housing companies; Spanish communities of owners; Italian municipalities under 50k inhabitants.

**(d) Who is building it.** Metergrid, Einhundert, Solarize, Pionierkraft (DE Mieterstrom), Exnaton (CH), Enercoop/Enogrid (FR ACC), many Italian CER consultancies. **Gap:** in Spain, the gestor role is brand new; in Germany, cheap allocation/billing for 10–100-member sharing groups.

**(e) Feasibility.** Medium — billing engines are commodity software, but sales cycles with housing companies are long; Spain is the fastest entry.

---

### F9. Inverter cybersecurity became a procurement criterion in 2025–2026 — demand for EU-hosted monitoring and "sovereign" control layers is emerging

**(a)** Undocumented communication devices were found in Chinese inverters (Reuters, May 2025); MEPs called for excluding high-risk vendors, noting Huawei alone had ~115 GW in the EU; the Commission froze funding for solar projects using key Chinese components; Lithuania banned Chinese involvement in large plants (2024); France's April procurement plan called for diversification; further EU restriction moves reported in May 2026 ([pv-tech](https://www.pv-tech.org/rogue-devices-found-in-chinese-solar-inverters-raises-cybersecurity-alarm-in-europe/), [EUISS](https://www.iss.europa.eu/publications/briefs/dragon-grid-limiting-chinas-influence-europes-energy-system), [Reynolds Center](https://businessjournalism.org/2026/04/solar-trojan-horse/), [CU InfoSecurity](https://www.cuinfosecurity.com/europe-cuts-off-funding-for-chinese-solar-inverters-a-31584)). **[confirmed]** Details of the 2026 EU legal instrument could not be verified here **[unverified]**.

**(b) Non-obvious implication.** Europe cannot replace ~hundreds of GW of installed Chinese inverters. The practical response is to *interpose*: local control (Modbus/SunSpec, RS485) with cloud access severed, EU-hosted monitoring, and audit trails proving no external command path. Municipalities, water utilities, hospitals and NIS2-scope SMEs with rooftops need a cheap way to demonstrate this.

**(c) Who pays.** Public bodies and NIS2-regulated entities with existing PV; O&M providers for small commercial rooftops (a chronically under-served segment). Wedge: tens of thousands of 30–500 kWp rooftops in DE/NL/FR/BE.

**(d) Who is building it.** Enterprise monitoring (meteocontrol, Solytic, SMA), gateway makers (Solar-Log). **Gap:** an "air-gap kit + EU monitoring + compliance report" product priced for small rooftops, sold through electricians.

**(e) Feasibility.** Medium-high; hardware is an off-the-shelf industrial gateway plus firmware, software is monitoring. Needs one person comfortable with Modbus and network hardening.

---

### F10. Smart-meter data access is now open (unevenly) in five large markets — the Netherlands and Belgium via a free physical port, the UK/France/Spain via APIs

**(a)** NL/BE: P1 port on every smart meter gives 1–10 s real-time data with no contract ([Sibelga](https://www.sibelga.be/en/connections-meters/smart-meters/the-p1-port-of-the-smart-meter), [meteringlab](https://meteringlab.com/dsmr-p1-port-standard-how-dutch-smart-meters-share-data-with-your-home/)). France: Enedis Data Connect APIs are open only to companies with a SIRET, a signed contract and a certified consent journey; third parties resell access ([Gladys](https://gladysassistant.com/docs/integrations/enedis/), [conso-api](https://github.com/bokub/conso-api), [Homeys](https://www.homeys.fr/blog/m023-api-collecte-donnees-enedis)). Spain: Datadis covers 29 M consumers with free, neutral access ([EDP](https://edp.com/en/europe/spain/media/news/spanish-distributors-launch-datadis-new-data-platform-customers)). UK: DCC + n3rgy; the Data (Use and Access) Act 2025 creates a smart-data framework; a Smart Meter Energy Data Repository programme is in Phase 2 ([n3rgy](https://www.n3rgy.com/), [GOV.UK](https://www.gov.uk/government/publications/smart-meter-energy-data-repository-programme-successful-projects/smart-meter-energy-data-repository-programme-phase-2-project), [Wikipedia](https://en.wikipedia.org/wiki/Data_(Use_and_Access)_Act_2025)). Aggregators: Openvolt claims platforms in UK/FR/ES/NL/FI cover 100 M+ meters ([Openvolt](https://www.openvolt.com/blog/post/the-state-of-smart-meter-data-access-across-europe)). Germany: 5.5% iMSys; third-party access via the SMGW HAN interface exists in principle but is immature **[partly unverified]**. Flanders: digital meter mandatory for dynamic contracts since early 2025; capacity tariff €36–49/kW/yr on the monthly 15-min peak ([Solarnation](https://solarnation.be/het-laatste-nieuws/capaciteitstarief-2026-verlagen-batterij-slimme-sturing), [zonnepanelenenergie.be](https://zonnepanelenenergie.be/dynamisch-energiecontract)). **[confirmed]**

**(b) Non-obvious implication.** Raw data access is solved in NL/BE/ES/UK; the missing layer is *decisions* tied to a physical outcome: "your 15-min peak costs you €X under the Flemish capacity tariff — install this relay on the boiler"; "your SME's load profile qualifies for this GTO share". Data products that end in an electrician's visit are the wedge; pure dashboards are crowded.

**(c)** Flemish households (capacity tariff since 2023), Spanish SMEs (Datadis), UK small businesses (half-hourly settlement now market-wide **[inference]**).

**(d)** Openvolt (API aggregator), HomeWizard, Homeys (FR B2B), dozens of dashboards. **Gap:** vertical, outcome-linked services on top of the free ports/APIs, especially SME.

**(e)** Very high feasibility — it is the cheapest data ingress in the whole track.

---

### F11. Grid-scale flexibility markets exist, but SME-scale aggregation is still a service business, not a platform business

**(a)** GOPACS accepts CSP-aggregated bids and publishes a Redispatch Announcements Map ([GOPACS](https://www.gopacs.eu/en/how-does-gopacs-work/)); Germany's Modul 3 time-variable grid fees are only now technically being switched on (F2); UK Gate 2 distribution offers arrive July–Nov 2026 (F5). **[confirmed]**

**(b)** The revenue per SME site (a few k€/yr) is too small for enterprise aggregators, but large enough for a regional operator who *also* owns the installation relationship (a cold store, a bakery's ovens, a car dealer's chargers). Piggy-backing on F4 hubs is the natural route.

**(c)** SMEs in congested Dutch/Belgian/German regions. **(d)** Sympower, Tiko, Centrica, Next Kraftwerke — all above ~100 kW per site. **Gap:** sub-100 kW aggregation in congested DSO zones. **(e)** Medium; regulatory onboarding as a CSP takes months.

---

### F12. EV charging in apartment buildings: France is scaling (44,331 points in collective housing, +45% in 12 months); Germany still has 82% of multi-family buildings without any charging and a fresh €2,000/point subsidy (Apr–Nov 2026)

**(a)** France: 44,331 charging points in collective residential at Q2 2026 across 18,289 buildings (+45% YoY); target 1.7 M equipped spaces within a decade; installation €1,500–4,500 per point ([automobile-propre](https://www.automobile-propre.com/articles/infrastructures-de-recharge-en-copropriete-ou-en-sommes-nous-en-france-en-2026/), [Chargemap](https://chargemap.com/fr-fr/blog/articles/droit-a-la-prise-installation-borne-copropriete-2025)). Germany: WEG owners have had a right to a wallbox since Dec 2020; 82% of multi-family houses have no charging option (ADAC, no newer data); federal subsidy of up to €2,000 per point for housing companies, 15 April–10 Nov 2026; load management mandatory from four points ([automobilsalon-bellemann](https://automobilsalon-bellemann.de/news/wallbox-mieter-mehrfamilienhaus-2026-recht-foerderung/), [depow](https://depow.de/blogs/produktanwendung/forderung-wallbox-mehrfamilienhaus)). AFIR: ISO 15118-2 required for new public AC points from 8 Jan 2026; 15118-20 for all new chargers from 1 Jan 2027; CCS V2G still emerging from type-testing ([AMPECO](https://www.ampeco.com/guides/iso-15118-complete-guide-for-cpos-and-emsps/), [voldt](https://voldt.eu/blogs/news/bidirectional-charging-explained-v2l-v2h-and-v2g-for-ev-owners-in-2026)). **[confirmed]**

**(b) Non-obvious implication.** The binding constraint in multi-family buildings is the *building connection*, and the same connection is being asked to host heat pumps (F7) and balcony PV (F6). A building-level "connection budget" service — one load-management brain for wallboxes + heat pump + PV, billed per flat — is a physical service enabled by software, and the 2026 German subsidy window plus France's 1.7 M target create the demand pulse. V2G for the consumer market is *not* yet a 2026 business (15118-20 only compulsory for new chargers from 2027, few cars).

**(c)** Property managers (Hausverwaltungen, syndics), WEGs, small landlords. **(d)** Zeplug, Logivolt, Bornes Solutions (FR); The Mobility House, Chargemaker, reev, ChargeHere (DE). **Gap:** small buildings (4–20 flats) that the incumbents find too small, and the *combined* heat pump + EV load budget.

**(e)** Medium; OCPP + load management is well-trodden; the differentiator is the electrician network and property-manager sales.

---

### F13. Used-EV trust: independent battery certificates and warranties became products in 2025–2026; the EU battery passport with a single "State of Certified Energy" arrives 18 Feb 2027

**(a)** Aviloo launched a certificate (June 2025), a 3-minute FLASH test, and from June/July 2026 a battery *warranty* for used EVs in 10 countries ([Aviloo](https://aviloo.com/en-us/blog/new-battery-certificate-how-aviloo-is-transforming-the-used-electric-vehicle-market-2), [Charged EVs](https://chargedevs.com/newswire/aviloo-launches-battery-warranty-for-used-evs-in-europe/), [Forbes](https://www.forbes.com/sites/jamesmorris/2026/07/29/how-aviloo-is-solving-the-used-ev-market-battery-health-trust-problem/)). From 18 Feb 2027 every EV/industrial battery >2 kWh placed on the market needs a digital passport; SoH is expressed as State of Certified Energy ([Circularise](https://www.circularise.com/blogs/eu-battery-passport-regulation-requirements), [Battery-Tech Network](https://battery-tech.net/why-the-eus-battery-passport-is-smaller-than-you-were-told-and-harder-than-the-field-count-suggests/)). **[confirmed]**

**(b)** The passport applies to *new* batteries from 2027; the ~10 M EVs already on European roads **[inference]** will never get one — so third-party diagnostics keep their market for a decade, but the diagnostics niche itself is contested. The under-served adjacent is *second-life eligibility*: which retired packs can go into F5/F16 storage.

**(c)** Independent dealers, leasing companies, insurers. **(d)** Aviloo, Twaice, Volytica, Altelium, Moba, manufacturer SoH apps. **Gap:** narrow — best avoided as a primary bet (see Crowded).

**(e)** Feasible technically, hard commercially.

---

### F14. Second-life packs are industrialising in Europe (Voltfang's Aachen "Future Fab", 250 MWh by end-2026)

**(a)** Voltfang raised €15 M (June 2025), opened a 6,000 m² factory in Aachen (Aug 2025), targets +250 MWh delivered by end-2026; global second-life market ~25–30 GWh in 2025 ([EU-Startups](https://www.eu-startups.com/2025/06/german-cleantech-startup-voltfang-secures-e15-million-and-launches-europes-largest-second-life-battery-factory/), [ESS News](https://www.ess-news.com/2025/06/13/voltfang-opens-europes-largest-second-life-battery-factory/), [MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/second-life-ev-battery-market-40890194.html)). **[confirmed]**

**(b)** Second-life competes with new LFP at $70–80/kWh cells (F1), so it only wins where the *form factor and local availability* matter — mobile units, construction sites, temporary events — rather than on €/kWh. **(c)** Rental fleets and SMEs. **(d)** Voltfang, Circunomics (marketplace), Betteries (mobile). **Gap:** mobile/temporary applications and the software to run them (see F15). **(e)** Medium; not a place to build cells, but a supply source.

---

### F15. Mobile batteries vs diesel gensets: the European genset market is ~$7 bn (2026) and "battery-first, generator-second" is now the default architecture for temporary power

**(a)** Europe generator sets market $6.97 bn (2025), $7.31 bn (2026), CAGR 5.2%; hybrid/dual-fuel gaining; battery-first architectures described as having "taken hold" in 2026 ([Mordor](https://www.mordorintelligence.com/industry-reports/europe-generator-sets-market), [Sol-Ark](https://sol-ark.com/news/2026-battery-storage-replace-generators-for-business/), [Energy-Storage.News](https://www.energy-storage.news/clean-power-unplugged-the-rise-of-mobile-energy-storage/)). Sodium/LFP system prices at $230–280/kWh wholesale (F1) put a 100 kWh mobile cabinet under ~€30k landed **[inference]**. Dutch "Schoon en Emissieloos Bouwen" procurement and city emission-free construction zones drive demand **[prior knowledge, unverified here]**.

**(b) Non-obvious implication.** Genset rental is a *logistics + telemetry* business; the battery version adds a state-of-charge scheduling problem (when to swap/recharge, where to charge cheaply — ideally at negative prices, F3). A regional operator with 5–10 units and good dispatch software can undercut diesel on fuel + noise + emission-zone compliance, and can arbitrage while idle.

**(c)** Contractors bidding on public works with emission requirements; event organisers; film shoots; EV-charging pop-ups. **(d)** Skoon (NL marketplace), Instagrid (portable), Greener Power Solutions, Aggreko/Atlas Copco hybrids, Betteries. **Gap:** regional owner-operators with real dispatch software outside NL/DK; a founder can be the operator.

**(e)** Medium; capital-heavier than pure software (€30–60k for 2 units on leasing), but well within reach and defensible locally.

---

### F16. Industrial thermal storage crossed into commercial reality (Kyoto 56 MWh Hungary; Polar Night 1 MW/100 MWh Pornainen; TheStorage first industrial sand unit Jan 2026)

**(a)** ([ESS News](https://www.ess-news.com/2026/01/30/thestorage-launches-its-first-industrial-scale-sand-based-heat-storage-system/), [Tech.eu](https://tech.eu/2026/04/23/thestorage-raises-eur36m-to-scale-industrial-thermal-energy-storage/), [Energy-Storage.News](https://www.energy-storage.news/thermal-energy-storage-tech-analysis-rondo-antora-malta-inc-mga-1414-energynest-polar-night-and-brenmiller/)). **[confirmed]** Two-thirds of industrial heat is <300°C.

**(b)** For a tiny team the play is not the storage but the *dispatch against negative prices* (F3) — electric boilers/heat batteries in bakeries, laundries, breweries, greenhouses that charge in the 500+ negative hours per year. That is a software + electrician service. **(c)** Food/drink SMEs on gas. **(d)** Storage OEMs; a few ESCOs. **Gap:** SME-scale power-to-heat dispatch. **(e)** Medium.

---

### F17. Data-centre waste heat becomes compulsory in Germany from 1 July 2026 (10% reuse → 20% by 2028) — and the heat is too cold for most networks

**(a)** New German data centres from 1 July 2026 must reuse ≥10% of energy (15% 2027, 20% 2028), report waste-heat potential to a BAFA platform annually, and certify energy management from 1 Jan 2026 (≥1 MW private); district networks run 65–90°C, DC waste heat is well below — heat pumps required ([White & Case](https://www.whitecase.com/insight-alert/data-center-requirements-under-new-german-energy-efficiency-act), [Taylor Wessing](https://www.taylorwessing.com/en/insights-and-events/insights/2025/01/abwaerme-von-rechenzentren), [mgrid](https://mgrid.org/2025/11/07/germany-enefg-pue-1-2-waste-heat-data-centers-july-2026/)). **[confirmed]**

**(b)** The exemption route is an *agreement* with a municipality or heat-network operator for later use — creating demand for matchmaking and feasibility packs between DCs and heat planners (who all had heat plans due 30 June 2026, F7). **(c)** DC developers (compliance risk) and municipalities. **(d)** Big engineering firms. **Gap:** a data product mapping DC waste-heat potential (from the BAFA platform) to heat-plan zones. **(e)** High feasibility as a data product; small market count but high ticket.

---

### F18. Buildings regulation: EPBD transposition (29 May 2026), MEPS for non-residential (16% worst by 2030), French DPE bans, and CBAM's 50-tonne cliff

**(a)** EPBD transposition deadline 29 May 2026; non-residential MEPS: renovate the worst 16% by 2030 and 26% by 2033; National Building Renovation Plans due 31 Dec 2026, with the Commission's July 2026 assessment of 16 drafts finding non-residential MEPS the weakest spot ([O-Immobilier Durable](https://o-immobilierdurable.fr/en/epbd-transposition-what-to-expect-from-the-new-european-framework-for-buildings-copy/), [BUILD UP](https://build-up.ec.europa.eu/en/resources-and-tools/articles/minimum-energy-performance-standards-and-progressive-renovation-trajectories)). France: DPE G rentals banned since 1 Jan 2025, F from 2028, E from 2034; the 2026 DPE reform reclassified ~850,000 homes out of F/G; ~1.2 M F-rated homes remain in the private rental stock; condominiums can claim case-by-case impossibility ([Hellio](https://copropriete.hellio.com/blog/actualites/interdiction-location-dpe-f-g), [trackstone](https://www.trackstone.fr/blog/gestion-locative/calendrier-interdiction-location-dpe)). CBAM definitive regime from 1 Jan 2026; importers below 50 t/yr cumulative across cement/steel/aluminium/fertiliser are fully exempt (≈90% of importers, 99% of emissions covered); above it, authorised-declarant status was needed (applications by 31 March 2026 for provisional import) ([EC Taxation](https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism/cbam-definitive-regime_en), [ICAP](https://icapcarbonaction.com/en/news/eu-adopts-simplifications-cbam-rules-ahead-compliance-phase-starting-2026), [ZeroCircle](https://blog.zerocircle.eco/en/cbam-for-smes-in-2026-what-it-is-who-it-affects-and-how-to-prepare)). **[confirmed]**

**(b) Non-obvious implication.** The 1.2 M French F-rated rentals facing a 2028 ban is a concrete, dated, owner-identifiable pool; the interesting service is not "renovation" but *DPE-class arbitrage* — the cheapest measure set to move F→E (often heat-pump water heater + controls, since DPE weights primary energy) plus condominium-vote logistics. CBAM's cliff makes small importers *just above* 50 t want to know their tonnage in real time and to obtain supplier emissions data; below-threshold importers want proof of exemption. That is a data product, not carbon-accounting SaaS.

**(c)** French small landlords (millions), SME importers in the 50–1,000 t band. **(d)** Hellio, Effy, Heero (FR renovation); dozens of CBAM SaaS. **Gap:** landlord-side DPE-class optimisation with a physical delivery partner; CBAM tonnage-watch for micro-importers.

**(e)** High feasibility for both; the French one needs a French-speaking partner.

---

## Part 2 — Top 6 non-obvious opportunities from this track

**1. Energy-hub operator back-office for Dutch business parks (F4, F10, F11).** From 1 January 2027 every Dutch DSO must offer the group transport agreement, and from 1 July 2026 SMEs in congested zones cannot get a normal connection. Each hub of 5–30 companies needs someone to allocate the shared capacity every 15 minutes, forecast, enforce caps, and settle between neighbours — the DSO explicitly does not do this. Build a lightweight allocation-and-settlement engine on P1/telemetry data, sell it via parkmanagement associations and the Invest-NL toolkit ecosystem at a few hundred euros per member per month, and later layer GOPACS flexibility revenue on top. A two-person, six-month build; the moat is being the operator of record for the first 20 hubs before the enterprise players notice the SME tier. *Confidence: high on the regulatory driver, medium on willingness-to-pay per member.*

**2. Smart-meter and §14a activation service for German small businesses and heat-pump/EV households (F2, F1, F7).** Three laws now route value through an iMSys + Steuerbox that 94.5% of connections lack; BNetzA's 77 enforcement proceedings mean supply will loosen in 2026–2028, creating a window where "get me the meter, register Modul 1/3, switch me to a dynamic tariff, configure the heat pump/wallbox/battery to follow it, and prove the €110–190 discount" is worth €300–500 per site plus commissions. Target the trades (SHK and electricians) as the channel and the under-served 30–100 MWh SME as the customer; software is a MaKo tracker, a 15-minute-profile tariff simulator and a §14a workflow. *Confidence: high on the pain, medium on the durability (3–4 year window).*

**3. Independent heat-pump performance verification and remote tuning (F7, F2).** With mandates scrapped in Germany and the Netherlands, heat pumps must win on operating cost, yet field JAZ ranges 2.6–4.9 for identical units and installers have no capacity for post-commissioning tuning. Offer a brand-agnostic "JAZ audit": heat meter + submeter or manufacturer API, weather and tariff normalisation, a report, and a tuning visit by a partner engineer, sold to homeowners with high bills, to installers as a callback-reduction service, and eventually to subsidy bodies (UK's MCS-legal-installer rule from April 2026 and the Warm Homes Agency point that way). The same data stream makes the heat pump a §14a/dynamic-tariff asset. *Confidence: high; the open question is whether to start in the UK (Heatpumpmonitor culture, BUS) or Germany (volume, +50% growth).*

**4. French solar-carport obligation intelligence and O&M for parking owners (F18-adjacent, loi APER).** Parks >10,000 m² had to be solarised by 1 July 2026 (deferral to 1 Jan 2028 if using "resilient" panels per decree 2024-1104); 1,500–10,000 m² parks by 1 July 2028 (deferral to 2030); the Huwart law of 26 Nov 2025 allows a 35%-PV/vegetation mix ([Hérault préfecture](https://www.herault.gouv.fr/Actions-de-l-Etat/Transition-energetique/Obligations-d-ombrieres-photovoltaiques-sur-les-parkings), [Terre Solaire](https://terresolaire.com/Blog/reglementation-solaire/obligation-ombriere-parking/), [Tennaxia](https://www.tennaxia.com/blog/nouvelles-modalites-le-point-sur-la-loi-aper-2026)). Build a data product that identifies obligated parkings from cadastre/aerial imagery, scores compliance options (PV / mixed / deferral), and routes owners to vetted EPCs — then keep the relationship as the independent monitoring/O&M layer for the resulting 100–500 kWp plants, which nobody serves well. Software-first, monetised on leads and recurring monitoring. *Confidence: medium-high; the 2028 wave (tens of thousands of mid-size parks) is the real market.*

**5. Post-net-metering retrofit control for Dutch legacy rooftops (F3, F10).** Millions of 2015–2022 inverters cannot curtail at negative prices or follow 15-minute tariffs, and independent analyses say a €6k battery only pays for a minority. Sell a €100–200 controller installed by local electricians (P1 + inverter Modbus/relay + day-ahead prices) that stops paid export, shifts boiler/heat-pump/EV load to midday, and produces an honest "should you buy a battery?" verdict — positioned as the neutral alternative to supplier-owned apps. The 1 January 2027 date creates a nationwide sales trigger; the P1 port removes any DSO data dependency. *Confidence: high on need; the risk is price competition from suppliers bundling control for free — mitigate by owning the installer channel and staying brand-agnostic.*

**6. "Sovereign" inverter gateway and EU-hosted monitoring for small commercial and public rooftops (F9).** Chinese-inverter security became a funding and procurement criterion in 2025–2026 while the installed base cannot be replaced. Package an industrial gateway that takes local Modbus/SunSpec control, severs vendor-cloud access, hosts monitoring in the EU, and emits a compliance report for NIS2-scope entities, municipalities and utilities — sold through electricians as an O&M add-on for 30–500 kWp rooftops, the segment enterprise monitoring ignores. Hardware is off-the-shelf; the value is the hardened firmware, the audit trail and the O&M service. *Confidence: medium; demand depends on how the EU instrument lands, but public procurement already rewards it.*

**Runners-up:** regional mobile-battery operator with dispatch software in emission-zone cities (F15); Spanish *gestor de autoconsumo* service under RDL 7/2026 (F8); DC waste-heat-to-heat-plan matchmaking (F17); SME power-to-heat dispatch against negative prices (F16); DPE F→E class-arbitrage packages for French landlords (F18).

---

## Part 3 — Crowded / avoid

- **Consumer dynamic-tariff apps and generic HEMS** (Tibber, Octopus/Kraken, 1Komma5° Heartbeat, gridX, Ostrom, evcc, Home Assistant). Distribution and tariff economics belong to suppliers; a third-party app has no margin.
- **Grid-scale BESS development** in DE/UK: 400 GW and 700 GW queues, regulators now allowing refusal, and enormous capital. Not a <€100k game.
- **EV battery diagnostics/certificates** (Aviloo, Twaice, Volytica, Altelium, OEM apps) — technically feasible, commercially locked up; the battery passport does not create a new entrant slot.
- **Roaming/CPO/eMSP platforms and Plug & Charge PKI** — scale businesses (Hubject, Gireve, AMPECO, Driivz); AFIR compliance work is captured by incumbents.
- **Residential solar sales/installation** — module price collapse plus a slowing German residential market and installer failures make this a low-margin volume war.
- **CBAM carbon-accounting SaaS** — dozens of tools; only the micro-importer tonnage-watch niche (F18) is open.
- **Hydrogen for home heating and small-scale hydrogen generally** — Germany's new law treats hydrogen only as a distant blending option ("Bio-Treppe" from 2029); no consumer market exists in 2026 **[inference from F7 sources; no dedicated search possible]**.
- **Consumer V2G** — ISO 15118-20 becomes mandatory only for new chargers from 2027, CCS V2G is still in type-testing, and few cars support it; revisit in 2028.
- **Building your own battery/inverter hardware** — cells are commodities at $70/kWh; win on integration, installation and control instead.

---

## Appendix — What could not be verified in this session (check before acting)

- Exact terms of the 2026 EU instrument restricting high-risk inverter vendors.
- Germany: third-party access mechanics and pricing for SMGW HAN data; smart-meter request fee caps for households.
- Netherlands: number of installed home batteries and DSO measures against synchronised battery charging.
- AFIR ad-hoc kWh price-transparency enforcement and roaming mark-up complaints in 2026.
- German SME peak-shaving payback figures under 2026 grid-fee reform.
- Dutch emission-free construction procurement rules driving mobile battery demand.
