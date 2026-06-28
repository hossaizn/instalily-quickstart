# InstaWorker Quickstart — Internal Product Spec

**Status:** v0.3 (post-critique revision)
**Date:** 2026-06-27
**Author:** Zulqarnayan Hossain
**Audience:** Internal, for building. Not for InstaLILY submission.

> Disclosure: This spec was drafted in collaboration with an AI pair (Claude). Strategic calls are the author's; the AI surfaced options and ran an adversarial critique pass against v0.2. Every decision below has been ratified by the author.

---

## 1. Why this product exists

This is the hero artifact of Zul's application to InstaLILY for the Product Associate role. Standard application packages do not break through at well-funded Series A AI startups in 2026. The artifact has to demonstrate, not describe.

**The wedge** identified during research: every CTA on instalily.ai routes to "Book a Demo." There is no self-serve path for the ~95% of visitors who are in research mode and not ready to talk to sales. The Quickstart is a parallel path that captures those visitors with a useful artifact.

**Note on scope:** This product spec is for the Quickstart itself. The strategic narrative that ships with the application (PRD titled "Make the Learning Layer Visible") is a separate document and will be written after this spec is approved.

---

## 2. Success criteria — how we know it worked

The Quickstart succeeds if:

| Outcome | How we measure |
|---|---|
| **It gets Zul to a first-round interview at InstaLILY.** | Did InstaLILY reply within 14 days of submission? |
| **The hiring committee discusses the artifact specifically, not just the resume.** | Verifiable only if Zul gets the interview and hears it referenced. |
| **At least one of (Amit Shah, the hiring manager, an InstaLILY PM) views the live URL.** | Vercel/Plausible analytics on the public URL. |
| **The artifact is share-worthy enough that someone forwards it internally.** | Multiple sessions originating from instalily.ai or @instalily emails. |

What the Quickstart is **not** trying to do:
- Generate real leads for InstaLILY (it's a concept)
- Be a finished, production-ready product
- Be perfect — it's a 1-weekend artifact and should look like one in scope, not in craft

---

## 3. Target users (two layers)

### Primary (in-product user)
**The frontline operator at a B2B physical-goods company.** A parts manager at a distributor, a claims analyst at an insurance carrier, a service dispatcher at an HVAC company, a sales engineer at a manufacturer. Someone whose job has a repetitive workflow they'd like a teammate to do for them.

**What they bring to the experience:**
- Skepticism about AI tools that have over-promised
- Limited tolerance for typing (mobile-capable, but mostly on company laptop between tasks)
- A need to *show their boss* anything they find interesting, otherwise it dies in their head

### Secondary (the actual judge)
**The InstaLILY hiring committee, including Amit Shah and the Product Associate hiring manager.** They will visit the URL because it appears in Zul's application. They are looking for:
- Evidence of product instinct
- Evidence of rigorous thinking (not fabrications)
- Evidence of taste (does it look like something they'd ship?)
- Evidence of distribution thinking (would this actually drive results, or is it a portfolio piece?)

**The single rule that resolves the audience tension:** **we optimize for the frontline operator. The committee judges us by how well we did that.** Anywhere the two audiences want different things (e.g., the committee wants visible algorithm rigor; the operator wants invisible competence) the operator wins. The committee can read the spec doc for the reasoning; the product itself stays operator-first.

---

## 4. Ratified strategic decisions

These shape the product. Only strategic calls live here; tactical execution choices are in §4b. Do not reopen unless a downstream issue forces it.

| # | Decision | Rationale |
|---|---|---|
| D1 | **Webapp, not iOS.** | InstaLILY's frontline users live in desktop ERP/CRM. iOS friction (TestFlight install, no instant share) is wrong for this audience. |
| D2 | **4 archetypes: Parts Counter, Claims Analyst, Service Dispatcher, Quote Builder.** | Matches InstaLILY's named verticals. 4 is enough breadth without dilution. Manufacturing is covered by Quote Builder (see §7 defense). Healthcare claims are narrowed to P&C in v1 (see §7 defense). |
| D3 | **Step 1 is archetype card pick only. No free text.** | Free text in step 1 prevents tailored downstream questions. The archetype IS the routing key for the entire pathway. |
| D4 | **Step 2 is dropdowns, not free text.** | Free text is friction-death for frontline operators. Dropdowns also force defensible output composition (we know exactly what they picked). |
| D5 | **Step 2 dropdown labels are shared across archetypes, but the output copy is archetype × pick-specific.** | Parts + digital-in-system + rule-based produces different output narrative than Claims + digital-in-system + rule-based. Universal labels keep the UX clean; specific output gives every pick real weight. |
| D6 | **Zero fabricated numbers anywhere in the output.** Every output claim traces to either a user input or the one cited public source (SRS Distribution). | The artifact is a Product Associate submission. PM credibility cannot survive a fabricated number being caught. |
| D7 | **Cite only the SRS Distribution case.** It is the only publicly verifiable InstaLILY benchmark. | Citing anything else would require speculation. The constraint is also a feature: it forces the §9 rationale (see "Why we compare against SRS" inline note). |
| D8 | **The output explicitly explains why SRS is the only comparable AND what the production version would do with internal access.** This appears on the user-facing output page, not just in this spec. | Reframes the public-data limitation as a product-thinking-out-loud signal. The honesty is the product. |
| D9 | **The application hub page leads with the anticipated PM objection + defense (parallel path, not replacement).** | The strongest single signal that the candidate thinks like a PM is anticipating the hardest objection and answering it before it's raised. |
| D10 | **Primary user is the frontline operator. The hiring committee judges by how well we served the operator.** | Resolves the audience-tension dodge identified in critique. Where the two audiences want different things, operator wins. |

### §4b. Implementation notes (tactical choices, not strategy)

These are settled but routine — the kind of choice any reasonable team would make differently and still ship the same product. They live here so they don't pollute the strategic decisions table.

- Stack: Vite + React 19 + TypeScript + Tailwind 3 + Framer Motion + React Router 7
- Deploy: GitHub Pages from `gh-pages` branch via `gh-pages` npm package
- URL pattern: one repo, two routes (`/` = application hub, `/quickstart` = demo)
- Output page section title: "What the public case study tells us" (not "How comparable is your situation?")
- v1 scope cuts (deferred to v2): no shareable visual card, no downloadable discovery PDF, no per-section confidence indicators, no LLM call (smart templating only), no per-archetype dropdown labels (output copy carries the archetype weight instead)
- CTAs on output page: **primary** Book a Demo, **secondary** Copy the spec, **tertiary** Email to your boss (mailto with pre-filled spec) — the email option is present but not topmost (see critique §7 — the realistic conversion rate on unsolicited boss-emails is low; we keep it as a low-cost optional channel but don't sacrifice the primary CTA for it)

---

## 5. Open questions (haven't proven themselves yet)

All open questions from v0.1 (OQ1–OQ5) have been resolved in section 4 (D13–D17). New open questions surfacing during build or review go here.

*(no open questions at this time)*

---

## 6. The 4 archetype user journeys (the heart of this spec)

Each archetype has a unique pathway. Every dropdown pick has a defined effect on the output. This section is the contract between what we ask and what we produce.

### Defense: why these 4 archetypes, not 5 or 7

The adversarial critique pass flagged two valid concerns: "Manufacturing is missing" and "Healthcare claims is shoehorned in with P&C." Both are real. The responses:

- **Manufacturing is covered by Quote Builder.** A sales engineer at a manufacturer building configured BOM-based quotes IS the Quote Builder archetype. We are NOT covering shop-floor production-line workflows (machine operator, line lead, quality control) — those are a different InstaWorker shape entirely and would warrant a separate Manufacturing Operations archetype in v2. If a manufacturer reading this came in via "shop-floor" intent, they would feel under-served.
- **Healthcare claims and P&C claims are different workflows.** They have been collapsed into one "Claims Analyst" archetype in v1 because the structural pattern (intake → policy logic → routing) is similar enough at the archetype level. The dropdown options are written with a P&C lean. A healthcare prior-authorization analyst would still get a useful output but the framing would not feel native. v2 should split Claims into "P&C Claims" and "Healthcare Authorization" with distinct task options and InstaBrain modules.

Why not just add Manufacturing Operations and Healthcare Authorization to v1? Time. Each new archetype is roughly 200 lines of templated copy + a tested user journey. We chose four to ship at quality vs. seven to ship at half-quality. That's the trade-off being made deliberately.

### Universal structure

All 4 archetypes share this 5-screen flow:

1. **Home** — archetype card pick (no free text)
2. **Workflow** — 4 dropdowns (Task / Data State / Decision Complexity / Output Destination)
3. **Context** — 5 picks (Company Size / Vertical / Frequency / Team Size / Tools used)
4. **Generating** — 3.2-second purposeful beat (no user input)
5. **Spec** — output (see section 7 for output composition)

What differs per archetype:
- The card text on screen 1
- The Task dropdown options on screen 2 (Q1)
- The Output Destination options on screen 2 (Q4)
- The Worker name, tagline, and InstaBrain modules on screen 5
- The archetype-specific discovery item on screen 5

What's shared across archetypes:
- The Data State options (Q2) — universal
- The Decision Complexity options (Q3) — universal
- Context screen options — universal
- The universal discovery items
- The benchmark scoring logic (though the resulting copy is archetype-tailored)

---

### Journey A: Parts Counter Lead

#### Step 1 card
**Title:** Parts Counter Lead
**Subline:** Industrial distribution. Quotes, cross-references, customer follow-up.
**Examples shown:** Distributors · Wholesalers · MRO supply

#### Step 2 Q1: Task (archetype-specific)
Dropdown options:
1. Building quotes from inbound part requests
2. Cross-referencing OEM substitutions when stock is short
3. Following up on quoted orders that never came back
4. Reconciling invoice discrepancies and credit memos
5. Pricing checks against contract terms

#### Step 2 Q2: Data State (universal)
1. Already digital, in our system of record
2. Digital but arriving in email or PDF attachments
3. Mixed — digital plus phone calls or notes
4. Mostly phone calls, paper, or in-person

#### Step 2 Q3: Decision Complexity (universal)
1. Mostly rule-based
2. Mostly judgment
3. Mixed — rules with human override

#### Step 2 Q4: Output Destination (archetype-specific)
1. Quote PDF emailed to customer + line items written to ERP
2. Sales order entered directly into ERP
3. Routed to ops team for inventory check
4. Held for next customer interaction (price approved)

#### Step 3: Context (universal)
- Company size (under-50, 50-200, 200-1000, 1000-5000, over-5000)
- Vertical (industrial-distribution, healthcare, manufacturing, automotive, other)
- Frequency (hundreds-daily, tens-daily, a-few-daily, weekly, less-than-weekly)
- Team size on this work (solo, 2-5, 6-20, 20+)
- Tools used (multi-select chips)

#### Step 5: Output for this archetype
- **Worker Name:** Parts InstaWorker
- **Tagline:** "Quotes built, cross-references resolved, customer follow-ups sent. Overnight."
- **InstaBrain modules:**
  - Parts Catalog Brain (SKU master, cross-reference tables, OEM substitutions)
  - Customer Pricing Brain (contract pricing, tier matrices, volume agreements)
  - Inventory Position Brain (warehouse stock, incoming POs, allocation rules)
- **Archetype-specific discovery item:**
  *"Quote-to-order conversion rate today + % of quotes you never follow up on. The biggest InstaWorker lever in parts is recovering abandoned quotes — but only if there's a meaningful abandonment rate to recover."*

---

### Journey B: Claims Analyst

#### Step 1 card
**Title:** Claims Analyst
**Subline:** Insurance / healthcare. FNOL triage, coverage decisions, vendor routing.
**Examples shown:** P&C insurance · Healthcare claims · TPAs

#### Step 2 Q1: Task
1. First-pass triage of new claims (FNOL)
2. Coverage interpretation against the policy
3. Vendor / repair shop assignment
4. Documentation review for completeness
5. Subrogation eligibility checks

#### Step 2 Q4: Output Destination
1. Triage summary routed into adjuster's queue
2. Coverage decision into claims system + customer letter
3. Vendor dispatch + customer notification
4. Escalated to senior adjuster for review

#### Step 5: Output
- **Worker:** Claims InstaWorker
- **Tagline:** "First-pass review with the same logic your senior adjusters use. Audit trail attached."
- **InstaBrain modules:**
  - Policy Rules Brain (policy documents, coverage matrices, state-specific addenda)
  - Adjuster Heuristics Brain (past claim decisions, reviewer notes, denial rationale library)
  - Vendor Network Brain (preferred vendor list, historical pricing, capacity windows)
- **Archetype-specific discovery item:**
  *"Auto-adjudication rate today, and senior-adjuster escalation rate. Tells us the realistic ceiling for straight-through automation in your specific policy mix."*

---

### Journey C: Service Dispatcher

#### Step 1 card
**Title:** Service Dispatcher
**Subline:** Field service. Diagnosis, tech matching, parts staging, ETAs.
**Examples shown:** HVAC · Equipment service · Facilities maintenance

#### Step 2 Q1: Task
1. Diagnosing service requests from customer descriptions
2. Matching technicians to job + parts requirements
3. Rescheduling jobs when techs run over
4. Triaging emergency vs. routine
5. Managing parts pre-staging on trucks

#### Step 2 Q4: Output Destination
1. Dispatched work order with tech + ETA + parts list
2. Customer notification with confirmed ETA
3. Updated route in the FSM
4. Escalated to service manager for judgment

#### Step 5: Output
- **Worker:** Field Service InstaWorker
- **Tagline:** "Dispatch decisions made before the phone rings. Parts pre-staged. Tech briefed."
- **InstaBrain modules:**
  - Equipment History Brain (service tickets, install records, warranty status)
  - Dispatch Logic Brain (tech skills matrix, route windows, SLA commitments)
  - Parts Availability Brain (warehouse stock, truck stock, transfer windows)
- **Archetype-specific discovery item:**
  *"First-time-fix rate today + average reschedule rate. Service automation's value depends on whether better diagnosis up-front reduces truck-rolls."*

---

### Journey D: Quote Builder

#### Step 1 card
**Title:** Quote Builder
**Subline:** Sales engineering. Configuration, pricing, lead times, approvals.
**Examples shown:** CPQ teams · Sales engineers · Estimators

#### Step 2 Q1: Task
1. Translating customer requirements into a product configuration
2. Pricing the configured solution
3. Checking lead times and stock availability
4. Drafting the formal quote document
5. Routing for discount approval

#### Step 2 Q4: Output Destination
1. Quote document sent to AE for review
2. Drafted directly in the CPQ system
3. Configured BOM written to ERP
4. Held for customer revisions

#### Step 5: Output
- **Worker:** Quote Builder InstaWorker
- **Tagline:** "Configured, priced, and reviewed in the time it used to take to find the spec sheet."
- **InstaBrain modules:**
  - Product Configuration Brain (BOMs, config rules, compatibility matrices)
  - Commercial Terms Brain (customer contract terms, discount matrix, historical accepted margins)
  - Lead Time Brain (production calendar, supplier lead times, queue position)
- **Archetype-specific discovery item:**
  *"Quote turnaround time, and % of quotes requiring discount-approval cycles. Approval cycle drag is often the biggest win, not the spec-writing itself."*

---

## 7. Output composition — what every spec page contains

In display order:

1. **Header strip** — "Your draft spec" label + "Start over" link
2. **Hero card** — Built for [archetype] · [vertical], Worker Name (big serif), tagline (italic serif)
3. **Workflow steps card** — 3 numbered steps, narrative composed from archetype × Task × Data State × Decision × Output Destination (see section 8 for composition matrix)
4. **Two-column row:** InstaBrain modules card (left, 60%) + Integrations card (right, 40%)
5. **Benchmark section** — "What the public case study tells us" + match pill + cited SRS card + reasoning + what-this-means
6. **Discovery checklist** — 4 items: 3 universal + 1 archetype-specific (+ optionally a 5th if judgment-heavy)
7. **Dark "production version" callout** — the meta about internal data access
8. **CTAs** — primary "Book a demo with this spec" + secondary "Copy the spec" (and OQ2: maybe add tertiary "Email to your boss")
9. **Footer microcopy** — concept disclosure + traceability claim

---

## 8. Input → output composition matrix

This is the contract. Every output element is composed from a defined set of inputs.

| Output element | Composed from |
|---|---|
| Hero "Built for" line | Archetype card title + Vertical chip |
| Worker Name | Archetype (fixed lookup) |
| Tagline | Archetype (fixed lookup) |
| Workflow Step 1 narrative | Archetype + Task pick + Data State pick |
| Workflow Step 2 narrative | Archetype + Task pick + Decision Complexity pick |
| Workflow Step 3 narrative | Archetype + Task pick + Output Destination pick |
| InstaBrain modules | Archetype (fixed lookup) |
| Integrations | Tools chips picked (direct), with fallback if none picked |
| Benchmark match score | Algorithm (see section 9) |
| Benchmark "Why this match level" | Archetype label + Data State label + Decision Complexity label |
| Benchmark "What this means for you" | Match level → archetype-aware copy |
| Discovery items 1-3 | Fixed universal |
| Discovery item 4 | Archetype-specific |
| Discovery item 5 (conditional) | Only shown if Decision Complexity = "mostly-judgment" |

**The principle to enforce in code:** every string in the output should be derivable from this matrix. If a string appears that isn't in this matrix, it's either a fixed UI string (e.g. "Start over" button text) or it's a violation of the contract.

---

## 9. SRS-similarity score (renamed from "benchmark scoring")

### What this is, honestly

This is **not** a benchmark of InstaWorker performance. It is a similarity-to-SRS score, dressed plainly. We pick SRS as the comparable because it is the *only* InstaLILY case study with public, verifiable outcomes (quote turnaround 6 days → minutes, ~10% revenue uplift on parts business). Comparing against anything else would require speculation we have no right to produce.

The score answers exactly one question: **how structurally similar is this user's workflow to the SRS case?** Higher similarity = the SRS published outcomes are a directionally useful reference. Lower similarity = SRS is the wrong comparable, and the user should know it.

### Why this needs to appear on the user-facing output page (not buried in this doc)

The output page must include an inline note titled **"Why we compare against SRS"** that says, in plain English:

> *"SRS Distribution is the only InstaLILY case study with public outcomes. Comparing against it is honest about what we can prove from the outside. The production version of this tool — running inside InstaLILY with access to every deployment — would match your workflow against the closest actual customer, not the one publicly cited one. Discovery is how that closer match gets surfaced."*

This is the difference between an artifact that pretends to know things it doesn't and one that admits its limits while pointing at the better version. The latter is the kind of PM thinking that hires.

### The score itself (simplified from v0.2)

Four signals, each worth 0–2 points. Max score: 8. Named bands.

| Signal | What we're checking | Points |
|---|---|---|
| **Archetype** | Is the user doing the same kind of work SRS does? Parts Counter = 2 (direct match), Quote Builder = 1 (adjacent: BOM/pricing), Claims or Service = 0 (different shape entirely). | 0 / 1 / 2 |
| **Data state** | Is the input already structured in a system of record? digital-in-system = 2, digital-in-email = 1, anything else = 0. SRS is digital ERP; that's where the automation feasibility lives. | 0 / 1 / 2 |
| **Decision complexity** | Are decisions mostly rules-based? mostly-rule-based = 2, mixed = 1, mostly-judgment = 0. Rules-based work is where straight-through processing works; judgment work always needs human-in-loop. | 0 / 1 / 2 |
| **Volume × team scale** | Is there enough repetition for ROI math to matter? hundreds-daily + 200+ company = 2, tens-daily or 200+ alone = 1, less = 0. | 0 / 1 / 2 |

**Bands:**
- **Score ≥ 6** → "Close public reference" — SRS outcomes are a defensible directional reference
- **Score 3–5** → "Partial overlap" — SRS gives directional intuition; closer comparable would come from internal data
- **Score 0–2** → "Different shape than public case" — SRS is the wrong reference; the relevant comparable lives in InstaLILY's internal deployments

**Why these bands and not other thresholds:** Each band corresponds to a meaningfully different recommendation the user should hear. 6+ means we have evidence the publicly cited numbers translate to their case. 3–5 means we have *some* evidence but not enough to defend specific number transfer. 0–2 means SRS is actively misleading; the right answer is a different deployment we don't have public access to. The bands are derived from the recommendation we want to issue, not the other way around.

### What this score cannot do (and we say so)

- It cannot tell you specific hours saved, accuracy %, or ROI numbers for your situation. Those require actual measurement.
- It cannot account for data quality variance, edge-case volume, or org-specific change management — all of which materially affect real outcomes.
- It is a similarity score against one example. The production version (see §16) would run similarity against InstaLILY's full deployment history.

**What we do NOT do:** Pretend to compute hours saved or accuracy %. Those are functions of actual customer data we don't have.

---

## 10. Conversion mechanics — how the output gets the user to act

The spec page is where conversion happens. Three principles drive design; three patterns we intentionally refuse.

### a) Specificity → ownership
The spec uses the user's actual picks throughout. They see "your" workflow, "your" tools, "your" vertical. They cannot dismiss it as generic. This is the foundation; everything else depends on it.

### b) Share-ability → multi-stakeholder buying
In B2B enterprise sales, deals close when *multiple stakeholders* align. A demo call reaches one person. A spec the rep can copy/email/screenshot reaches three. The "Copy the spec" button produces clean Markdown formatted for pasting into email or Slack. The "Email to your boss" tertiary CTA opens a mailto: with the spec pre-filled — present, but **not** elevated to topmost (see CTA hierarchy in §4b).

### c) Loss aversion → urgency
The discovery checklist is framed as "what discovery would establish" — implying there's measurable value being left on the table that the user hasn't measured yet. Gentle loss aversion. Not manipulative; just honest.

### What we explicitly refuse and why

- **No fake urgency.** ("Book in the next 5 minutes!" — trash.)
- **No fake scarcity.** ("Only 3 demo slots left!" — trash.)
- **No fake social proof.** ("Used by 1,000+ teams" — false, would burn credibility instantly.)
- **No autoplay popups.** Insulting to the user.

### Honest caveat on the absence of social proof

We have no live users. We have no testimonials. We have no usage numbers. The principled "we refuse fake social proof" stance is also a *convenient* stance, because we have nothing real to put there. The mitigation: the spec page itself is the proof — if it produces a credible, specific, share-worthy artifact in 60 seconds, that *is* the social proof. The user's own experience replaces the testimonial they can't see.

### Conversion mechanics we are not using that are sometimes worth considering

For honesty, naming what we left on the table:

- **Progress disclosure with social anchor** ("80% of users finish this flow") — fake at v1 since we have no users, but a real lever at scale.
- **Commitment escalation** (asking for email before the spec rather than after) — boosts conversion but trades against the operator-first principle (no friction before value).
- **A single concrete next-action with a deadline** ("Bring this spec to your next standup") — worth piloting if this product had real distribution. Out of scope for the application artifact.

---

## 11. Visual design language

| Element | Decision |
|---|---|
| Background | Warm off-white (#fafaf7) |
| Ink | Near-black (#0a0a0a), softer shades #3f3f46 / #71717a / #a1a1aa |
| Card background | Pure white (#ffffff) with subtle ring (ink @ 5%) |
| Single accent | Warm amber #b45309 (use sparingly — links, CTAs, accents) |
| Accent soft | #fef3c7 (badge backgrounds, highlights) |
| Heading typeface | Fraunces (variable serif, 500/600/700) |
| Body typeface | Inter (400/500/600/700) |
| Mono | JetBrains Mono (number markers, code) |
| Motion | Framer Motion. Fade + slide-up (12px). Curve: cubic-bezier(0.16, 1, 0.3, 1). Duration 0.4-0.5s. |
| Rounding | 6pt (medium), 12pt (large cards), 99pt (chips/pills) |
| Spacing | Generous. 8pt baseline. Section gaps 12-26pt. |

**Inspiration:** Linear, Stripe Docs, Vercel marketing. Editorial weight, modern restraint, single accent, lots of breathing room.

**Anti-patterns:**
- No drop shadows beyond the most subtle (shadow-sm)
- No gradients
- No stock imagery
- No emoji in copy
- No multiple competing accents

---

## 12. Edge cases & error states

| Case | Handling |
|---|---|
| User refreshes mid-flow | localStorage persists state (key bumped to v2 for schema change) |
| User reaches `/quickstart` directly without picking archetype | Workflow screen catches null archetype, routes back to step 1 |
| User picks weird combinations (e.g. solo + over-5000 company) | Spec still generates. No validation hard-stop. We trust the user. |
| User doesn't pick any tools | Integrations show fallback: "Your existing ERP · Email · CRM of record" |
| Clipboard API unavailable (Safari private browsing) | Silent fail. User can screenshot. (Could improve with a download fallback in v2.) |
| User is on mobile | Responsive layout works to 375px width. All flows pass on iPhone. |
| Slow connection | Critical CSS inlined by Vite. Fonts via Google CDN (preconnect). |
| GitHub Pages 404 on direct route access | `postbuild` copies `index.html` to `404.html` so SPA routing works. |
| User clicks back to / from quickstart mid-flow | State persists. Returning to /quickstart resumes where they left off. |
| InstaLILY's actual team views this and someone is upset | Footer explicitly disclaims "concept" and "not affiliated." Hopefully read as professional courtesy. |

---

## 13. Explicitly out of scope (v1)

- Real LLM call for spec generation (templated, no API dependency)
- User auth or accounts
- Persistence beyond local browser
- Internationalization
- Dark mode
- Real-time data from InstaLILY's actual API
- Analytics tracking (privacy choice: zero analytics on the public URL — matches Zul's "no third-party SDK" stance from Loredrop)
- A11y audit beyond basic semantics (we ship reasonable, not certified)
- IE11 support (lol)

---

## 14. Risks

| Risk | Mitigation |
|---|---|
| Hiring committee sees this and thinks "this is just a marketing demo" | Application hub page leads with the strategic frame + objection defense; PRD reinforces it. The artifact's job is to PROVE the strategy, not be the strategy. |
| Someone at InstaLILY has already considered self-serve and decided against it | Acknowledged in hub page: "Honest caveat: I don't have your internal close-rate data. If you've considered this and decided against it, I'd want to know why — that's the right second-round conversation." |
| **Self-serve dilutes lead quality — buries high-intent buyers under tire-kickers, makes the SDR team's job harder not easier** | This is a real and unaddressed risk in v1. The honest mitigation: in production, the qualified-via-Quickstart leads get a different routing flag than direct Book-a-Demo leads. We label them "Quickstart-qualified, archetype = X, similarity to SRS = high/partial/low" so the SDR can prioritize. v1 doesn't ship this; the application-facing PRD should call it out as a v2 requirement. |
| The output looks too AI-generated and reads as low-effort | We're explicit that there's NO live LLM. The output is intentionally rule-based and traceable. This is a feature, not a bug. |
| Amit Shah never sees it | Out of our control via the artifact itself. We rely on (a) the application going through Handshake and (b) Zul sending a direct LinkedIn message with the link after applying. |
| The repo contains a security issue and someone notices | We're a static SPA. No backend, no secrets, no API keys. Worst case is a typo or unused dep. |
| **The author has not talked to a single real frontline operator** | Acknowledged honestly in §17. The artifact is grounded in InstaLILY's published materials, the SRS case study, and category research — NOT in customer interviews. This is a real limitation. The honest answer if asked: "I haven't yet. The first thing I'd do in this role is line up five operator calls in the lead vertical." That's a defensible posture; pretending otherwise would not be. |
| The SRS-similarity score (§9) gets criticized as "fake math dressed up" | §9 has been rewritten to call itself what it is: a similarity score against the only public comparable. The bands are derived from the recommendation we want to issue, not from arbitrary numerics. The doc owns this directly. |

---

## 15. The single most important thing to get right

If we get one thing right, it should be this:

**The user reaches the spec page and immediately wants to send it to their boss.**

That's the conversion test. Not "book a demo." Not "talk to sales." Not "subscribe to our newsletter." The behavior we want is: read the spec, recognize their own workflow in it, decide it's worth showing someone else, and act on that.

If the user is excited enough to *share*, they're already pre-qualified for a demo conversation. The shared spec then carries forward to that conversation regardless of whether they book through our funnel or InstaLILY's direct one.

This means **the polish, the specificity, and the credibility of the spec page itself matters more than any CTA button.** Spend the polish budget there.

---

## 16. Vision: this product is itself an InstaWorker

One observation, stated humbly: the Quickstart, taken to production, is structurally an InstaWorker. It takes structured input from a frontline operator (the prospect), applies a vertical-aware knowledge layer (the archetype catalog + similarity scoring), and produces a structured output (a draft spec) that fits into an existing workflow (InstaLILY's sales-to-deployment funnel).

That observation does **not** mean "build me a six-version product line." Many tools share the input-output shape of an InstaWorker without being one. The honest claim is smaller: if InstaLILY *did* want to dogfood its own architecture against its own sales motion, this is roughly what v1 would look like — and the parts that v1 can't reach (real internal-deployment comparables, LLM-composed narratives, deployment-history lookups) are exactly the parts the §9 score is honest about leaving to discovery.

**Why this framing matters for the application:**

The submission is not "I built a tool." It's "I read InstaLILY's published architecture deeply enough to scope what an internal version of it would look like for InstaLILY's own funnel, and I built the parts I could from public materials only." That's a more interesting demonstration than a generic portfolio piece, and it's true — which is the only kind of framing that survives a thoughtful reading.

**What this is NOT:**

- A pitch for a new InstaLILY product line. That call is theirs to make, not the candidate's.
- A claim that one weekend of work approximates an actual product roadmap.
- A demand that anyone at InstaLILY take this insight seriously beyond noticing it.

(Previous spec versions included a speculative v1→v6 roadmap. It has been removed — at this point in the candidate's relationship with the company, six speculative versions read as presumption, not vision.)

---

## 17. The customer-research gap (the limitation we own)

This artifact has not been validated against a single real conversation with a real frontline operator. Not one parts counter lead, not one claims analyst, not one service dispatcher. The archetypes, task options, dropdown choices, and output narratives are derived from:

- InstaLILY's published materials (homepage, SRS Distribution case study, Google Cloud launch, careers page, leadership LinkedIn)
- The Product Associate job description
- Category research on B2B vertical AI and industrial-distribution workflows
- The author's reasoning about what each role's day looks like, based on the above

That is **research, not validation.** It is the difference between a product idea built from desk work and a product idea built from operator interviews. Both are legitimate starting points; only one survives contact with reality without modification.

### Why we did not close this gap before submitting

Two reasons, stated honestly:

1. **Time.** Cold outreach to a parts counter lead this weekend would not reliably produce a scheduled call before the Monday morning submission window. Faking the citation would be worse than admitting the gap.
2. **Scope honesty.** This is a job application artifact, not a real product. Spending the available hours on a fifth-archetype interview before shipping the first four well would be optimizing the wrong thing.

### What we would do differently if this were a real product, and what the candidate would do in the role

- **Week 1 in the role:** identify five real frontline operators across the four archetypes via warm intros from InstaLILY's existing customer relationships. 30-minute calls each.
- **Week 2:** synthesize what was wrong about the archetypes, the dropdowns, the output framing. Most assumptions in this spec would be partially incorrect; that's the value of the calls.
- **Week 3:** ship a revised version with operator-validated copy across at least two archetypes.
- **Week 4:** measure whether the validated archetypes outperform the unvalidated ones on completion rate, "Email to your boss" use, and demo-booked rate.

This is the response to the interview question *"have you talked to a real frontline operator?"* The answer is "not yet, here is why, and here is what I would do first." The honest answer is more defensible than any clever workaround.

---

## Change log

- **v0.1** (2026-06-27): Initial draft with 12 ratified decisions, 5 open questions, full archetype journeys.
- **v0.2** (2026-06-27): Resolved OQ1–OQ5 into D13–D17. Added §16 "Quickstart IS an InstaWorker" with a v1→v6 speculative roadmap.
- **v0.3** (2026-06-28): Post-adversarial-critique revision. Slimmed strategic decisions from 17 to 10 (tactical choices moved to §4b Implementation notes). Addressed audience-conflation dodge in §3. Rewrote §9 to call itself a similarity score honestly. Demoted "Email to your boss" from topmost CTA to tertiary. Added lead-quality-dilution risk in §14 and customer-research gap acknowledgment in §17. Removed the v1→v6 roadmap from §16. Tightened the Quickstart-IS-InstaWorker framing to be smaller and more humble.

The spec is now read-only for v1 implementation. Subsequent changes require a new version section above with an explicit reason.
