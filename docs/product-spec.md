# InstaWorker Quickstart — Internal Product Spec

**Status:** Draft v0.1 (pending review)
**Date:** 2026-06-27
**Author:** Zulqarnayan Hossain (with Claude as PM partner)
**Audience:** Us, for building. Not for InstaLILY submission.

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

**The interesting tension:** what makes the product convert the frontline operator is also what makes it impressive to the hiring committee. We design for the primary user; the secondary user judges by how well we designed for the primary.

---

## 4. Ratified decisions

These are settled. Do not reopen unless a downstream issue forces it.

| # | Decision | Rationale | Date |
|---|---|---|---|
| D1 | Webapp, not iOS | InstaLILY's frontline users live in desktop ERP/CRM, not iOS. Sharing friction is lower. | 2026-06-27 |
| D2 | Next.js / React (Vite) + Tailwind + Framer Motion | Standard stack, fastest path to polish, no server needed. | 2026-06-27 |
| D3 | Deploy to GitHub Pages (public repo) | Free, no extra account, public source signals clean engineering. | 2026-06-27 |
| D4 | One URL, two routes: `/` = application hub, `/quickstart` = the demo | Hiring manager submits one URL; both audiences served. | 2026-06-27 |
| D5 | 4 archetypes: Parts Counter, Claims Analyst, Service Dispatcher, Quote Builder | Matches InstaLILY's actual vertical focus. 4 is enough breadth without dilution. | 2026-06-27 |
| D6 | Step 1 = archetype card pick only (no free text) | Free text in step 1 prevents tailored downstream questions. | 2026-06-27 |
| D7 | Step 2 = dropdowns, not free text | Free text is friction-death for frontline operators. | 2026-06-27 |
| D8 | **Zero fabricated numbers anywhere in the output.** Every claim traces to user input or the cited SRS case study. | Real PMs don't fabricate. The whole artifact's credibility depends on this. | 2026-06-27 |
| D9 | Cite only the SRS Distribution case (the only public InstaLILY case study) | Anything else is speculation. Honesty signal. | 2026-06-27 |
| D10 | The Quickstart explicitly tells users "the production version, with internal access to actual customer data, would do this better" | Reframes the public-data limitation as a product-thinking-out-loud signal. | 2026-06-27 |
| D11 | Section title: "What the public case study tells us" (not "How comparable is your situation?") | We judge the benchmark's applicability, not the user. | 2026-06-27 |
| D12 | Application hub leads with anticipated objection + defense (parallel path, not replacement) | The strongest single signal that Zul thinks like a PM. | 2026-06-27 |
| D13 | **Step 2 dropdowns: shared labels, archetype × pick-specific output copy.** Parts + digital-in-system + rule-based produces different output narrative than Claims + digital-in-system + rule-based, and dramatically different from Service + mostly-phone + judgment. Copy/template rewrite, not UX rewrite. | Closes OQ1. Real tangible weight to every dropdown pick. | 2026-06-27 |
| D14 | **Add "Email this spec to your boss" as the topmost CTA above Book a Demo + Copy.** Opens mailto: with subject + body pre-filled with the spec. | Closes OQ2. Highest-leverage conversion mechanic — the spec gets sent to a second stakeholder without InstaLILY paying for it. | 2026-06-27 |
| D15 | NO shareable visual card for v1. | Closes OQ3. Defer to v2 roadmap (section 16). | 2026-06-27 |
| D16 | Discovery checklist stays on the spec page. Not a separate downloadable PDF for v1. | Closes OQ4. Defer to v2 roadmap. | 2026-06-27 |
| D17 | NO per-section confidence indicators in v1. The benchmark match pill is the only confidence visualization. | Closes OQ5. Avoid over-engineering. Defer to v2. | 2026-06-27 |

---

## 5. Open questions (haven't proven themselves yet)

All open questions from v0.1 (OQ1–OQ5) have been resolved in section 4 (D13–D17). New open questions surfacing during build or review go here.

*(no open questions at this time)*

---

## 6. The 4 archetype user journeys (the heart of this spec)

Each archetype has a unique pathway. Every dropdown pick has a defined effect on the output. This section is the contract between what we ask and what we produce.

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

## 9. Benchmark scoring algorithm (defensible math)

The SRS Distribution case study is the only publicly verifiable InstaLILY benchmark. We grade structural similarity to SRS as a transparent score (0–6.5 points):

| Signal | Points if matches SRS |
|---|---|
| Archetype = Parts | +2 |
| Archetype = Quote | +1 |
| Data State = digital-in-system | +1 |
| Data State = digital-in-email | +0.5 |
| Decision Complexity = mostly-rule-based | +1 |
| Decision Complexity = mixed-with-override | +1 |
| Frequency = hundreds-daily | +1 |
| Frequency = tens-daily | +0.5 |
| Company size ≥ 200 | +1 |
| Vertical = industrial-distribution | +1 |

**Thresholds:**
- Score ≥ 5 → "Close public reference"
- Score 2.5 to 4.9 → "Partial overlap"
- Score < 2.5 → "Different shape than public case"

**Why these weights:** Archetype is double-weighted because the SRS case is fundamentally a parts-distribution case. Data State and Decision Complexity are weighted equally because both materially determine automation feasibility. Volume + company size + vertical are tiebreakers.

**What we do NOT do:** Pretend to compute hours saved or accuracy %. Those are functions of actual customer data we don't have.

---

## 10. Conversion mechanics — how the output gets the user to act

The spec page is where conversion happens. Three things make it convert:

### a) Specificity → ownership
The spec uses the user's actual picks throughout. They see "your" workflow, "your" tools, "your" vertical. They cannot dismiss it as generic. This is the foundation of all other conversion mechanics.

### b) Share-ability → multi-stakeholder buying
The spec is designed to be sent rep → boss → procurement. The "Copy the spec" button produces clean Markdown. (OQ2: should we add "Email to boss" as a higher-leverage variant?)

In B2B enterprise sales, the deal is closed when *multiple stakeholders* are aligned. A demo call reaches one person. A shared spec reaches three.

### c) Loss aversion → urgency
The discovery checklist is framed as "what discovery would establish" — implying there's measurable value being left on the table that the user hasn't measured yet. This is gentle loss aversion. Not manipulative; just honest.

### What we do NOT do (and why)
- **No fake urgency.** ("Book in the next 5 minutes!" — trash.)
- **No fake scarcity.** ("Only 3 demo slots left!" — trash.)
- **No fake social proof.** ("Used by 1,000+ teams" — false, would burn credibility instantly.)
- **No autoplay popups.** Insulting to the user.

The conversion mechanic is: useful spec + share-able + clear next steps. That's it.

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
| The output looks too AI-generated and reads as low-effort | We're explicit that there's NO live LLM. The output is intentionally rule-based and traceable. This is a feature, not a bug. |
| Amit Shah never sees it | Out of our control via the artifact itself. We rely on (a) the application going through Handshake and (b) Zul sending a direct LinkedIn message with the link after applying. |
| The repo contains a security issue and someone notices | We're a static SPA. No backend, no secrets, no API keys. Worst case is a typo or unused dep. |
| The benchmark grading algorithm is misunderstood | We publish the scoring table in the spec output (or at least the rationale) — see OQ5. |

---

## 15. The single most important thing to get right

If we get one thing right, it should be this:

**The user reaches the spec page and immediately wants to send it to their boss.**

That's the conversion test. Not "book a demo." Not "talk to sales." Not "subscribe to our newsletter." The behavior we want is: read the spec, recognize their own workflow in it, decide it's worth showing someone else, and act on that.

If the user is excited enough to *share*, they're already pre-qualified for a demo conversation. The shared spec then carries forward to that conversation regardless of whether they book through our funnel or InstaLILY's direct one.

This means **the polish, the specificity, and the credibility of the spec page itself matters more than any CTA button.** Spend the polish budget there.

---

## 16. Vision: the Quickstart IS an InstaWorker

A meta-insight surfaced during spec review (credit: Zul, 2026-06-27): the Quickstart, taken to production, is itself an InstaWorker.

**The structural argument:** It does what every InstaWorker does. It takes structured input from a frontline operator, applies a vertical-aware knowledge layer, and produces a structured, vertical-specific output that fits into an existing workflow (in this case, InstaLILY's sales-to-deployment funnel).

**If InstaLILY shipped this as a real product, it would be called the Onboarding InstaWorker:**

| Concept | v1 (this artifact) | Production version |
|---|---|---|
| Knowledge layer | 4 hand-curated archetype templates | Real InstaBrain trained on InstaLILY's deployed customer base — every shipped InstaWorker becomes a comparable lookup |
| Comparable benchmark | The one public SRS case study | Vector-similarity match against actual customer outcomes (with permission) |
| Output specificity | Templated narrative from user inputs | LLM-composed narrative with real internal-deployment references |
| Discovery checklist | Static per archetype | Dynamic, drawing from what InstaLILY's own discovery process actually surfaces |
| Conversion | "Email to your boss" + "Book a demo" | All of the above, plus auto-routing the prospect to the closest-fit AE based on archetype × vertical × volume |
| Eat-their-own-dog-food | Concept only | The first InstaWorker built for InstaLILY's own sales motion |

**Why this framing matters for the application:**

If we're submitting this as a Product Associate artifact, we're not just showing "I built a tool." We're showing "I understand your product so deeply that I built the first version of an InstaWorker you don't yet have, scoped for your own sales motion, using your published architecture." That's a meaningfully different level of demonstration.

This vision belongs in two places:
1. The "production version" callout in the spec page (already there, can be sharpened post-spec review)
2. The application-facing PRD's roadmap section (when we write it, it should explicitly frame the Quickstart as the wedge for an Onboarding InstaWorker product line — InstaLILY's own dogfood story)

**Roadmap (v2 and beyond, if this were a real InstaLILY product):**

- **v1 (this artifact):** Templated, 4 archetypes, public benchmark only
- **v2:** Add the deferred OQ3/OQ4/OQ5 items — shareable visual card, downloadable discovery PDF, per-section confidence indicators
- **v3:** Real InstaBrain integration — internal customer comparables, vector-similarity matching
- **v4:** LLM-composed output instead of templated, with citations to specific internal deployments
- **v5:** Auto-routing of the qualified prospect to the right AE based on archetype × volume × vertical, with the spec attached
- **v6:** A feedback loop — the prospect's eventual outcome data flows back into the InstaBrain, making every subsequent Quickstart better

---

## Open: Review checklist for Zul

Please walk through these before approving:

- [ ] Decisions in section 4 — anything you want to overturn? (D13–D17 are newly added)
- [ ] Open questions section 5 — clean (all resolved)
- [ ] User journeys in section 6 — any archetype that doesn't feel right? Any task or output option missing?
- [ ] Benchmark scoring in section 9 — weights feel right?
- [ ] Conversion mechanics in section 10 — anything missing? (D14 will add "Email to your boss" as third CTA — adjust this section after code changes)
- [ ] Out-of-scope list in section 13 — anything you'd actually want in v1?
- [ ] The "single most important thing" in section 15 — agreed?
- [ ] **NEW: The Quickstart-as-InstaWorker vision in section 16 — strong enough to lead the application-facing PRD with?**

Once you approve (or send back with changes), I'll:
1. Apply the spec-approved code changes (D13 archetype × pick-specific copy rewrite, D14 "Email to your boss" CTA)
2. Write the application-facing PRD ("Make the Learning Layer Visible"), with the Onboarding InstaWorker vision as the headline roadmap arc
3. Tailor the resume
4. Hand you the cover-letter teaser for the Handshake submission
