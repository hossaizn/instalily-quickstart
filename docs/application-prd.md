# Make the Learning Layer Visible

**A self-serve top-of-funnel concept for InstaLILY.**

Prepared by Zulqarnayan Hossain · Submitted with my application for the Product Associate role · 2026-06-28

[**Try the live demo →**](https://hossaizn.github.io/instalily-quickstart/quickstart) · [Source code](https://github.com/hossaizn/instalily-quickstart) · [Application hub](https://hossaizn.github.io/instalily-quickstart/)

---

## TL;DR

Every CTA on instalily.ai routes to "Book a Demo." That works for the ~5% of visitors ready to talk to sales. For the other 95% in research mode, there is no self-serve path. They bounce.

This PRD proposes a parallel path: an **InstaWorker Quickstart** that lets a frontline operator describe their workflow in 60 seconds and receive a draft InstaWorker spec, scored honestly against the only publicly verifiable comparable (the SRS Distribution case study).

The wedge sits in front of the demo funnel, not behind it. It does not replace Book a Demo; it captures the visitors that button does not serve. A working prototype is deployed at the link above.

---

## The problem

InstaLILY's product is the InstaBrain + InstaWorker architecture: a vertical-specific knowledge layer plus AI teammates that execute work inside customers' existing tools. The architecture is the company's moat. It is also, today, structurally invisible to a prospect researching the site.

There is no public demo. No screenshots of the admin or end-user surface. No interactive playground. No template gallery. No public benchmark page. Every "What does an InstaWorker actually do?" question routes to a sales conversation.

**The result:** the prospect who has been Googling "AI for parts distribution" at 11pm on a Tuesday cannot self-validate that InstaLILY would fit their workflow before committing to a demo call. They either book the call without context (drag on sales velocity) or, more often, they bounce.

This is not a marketing problem. It is a top-of-funnel product gap.

---

## The opportunity

The fastest-growing AI companies in 2026 (Anthropic, OpenAI, Linear, Vercel) run **PLG and enterprise sales in parallel**, not exclusively. A self-serve surface qualifies the prospect, transfers product credibility before any sales touch, and lets the eventual demo conversation start from "let me show you exactly what you described" rather than "tell me about your business."

For InstaLILY specifically, the self-serve surface should mirror what the actual product does: take structured input from a frontline operator, apply vertical-aware knowledge, return a vertical-specific output. The Quickstart is that surface in concept form. The output is a draft InstaWorker spec, not a real deployment — but the *shape* of the output is the same shape an actual InstaWorker produces.

---

## Proposed product: InstaWorker Quickstart

A web tool. Five screens. Sixty seconds.

1. **Pick your archetype.** Four cards: Parts Counter Lead, Claims Analyst, Service Dispatcher, Quote Builder. (Matches InstaLILY's named verticals.)
2. **Describe your workflow.** Four dropdowns: most repetitive task, where the data lives today, decision complexity, where the output lands. Each option is tailored to the archetype.
3. **Add context.** Company size, vertical, frequency, team size, tools used today.
4. **Briefly generating.**
5. **Your draft spec.** Worker name + tagline, end-to-end workflow narrative (composed from the user's actual picks), InstaBrain modules required, integrations, an honest similarity score against the SRS case study, and a discovery checklist of the metrics that would matter in a real engagement.

The output is shareable in three ways: book a demo with the spec attached, copy the spec to clipboard as Markdown, or email it directly to the user's boss (mailto: with pre-filled subject and body).

A working prototype is live: [hossaizn.github.io/instalily-quickstart/quickstart](https://hossaizn.github.io/instalily-quickstart/quickstart).

---

## The anticipated objection — and my defense

The strongest objection a PM at InstaLILY would raise against this is:

> *"Adding friction before Book a Demo hurts conversion. The standard SaaS funnel theory says reduce steps, not add them. We trade easy demos for friction-bought demos."*

That objection is correct on its surface. Here is why it still does not hold against the actual proposal:

**1. Different visitor intent → different paths.** The Book a Demo button captures the ~5% of visitors who are ready for sales. The other 95% bounce. The Quickstart is for them. Total qualified lead volume goes up, even if the immediate per-visitor click rate dilutes. The Quickstart does not replace Book a Demo; both CTAs exist on the homepage, side by side.

**2. Self-qualification is a feature, not a bug.** Some visitors should not book a demo — wrong vertical, too small, wrong use case. The Quickstart lets them self-discover that without burning a sales hour. The demos that *do* book are pre-qualified with context.

**3. Specs are shareable; demos are not.** The output is designed to be sent rep → boss → procurement. In B2B enterprise sales, deals close when multiple stakeholders are aligned. A demo call reaches one person at a time. A shared spec reaches three. The Quickstart instruments multi-stakeholder buying without InstaLILY paying for it.

**4. Sales velocity improves with context.** A demo booked via Quickstart opens with: *"I see you're a parts manager at a 200-person NetSuite shop, quote generation is your pain — let me show you Sarah at SRS solving exactly that."* Versus: *"Tell me about your business."* The discovery conversation that currently consumes the first 15 minutes of every demo is now front-loaded into the Quickstart funnel for free.

**Honest caveat:** I do not have InstaLILY's internal close-rate or sales-cycle data. If this has been considered internally and rejected for reasons that are not visible from the outside, that is the right second-round conversation — not a reason to dismiss the proposal.

---

## Why this is strategically aligned for InstaLILY

Three reasons specific to your stage and architecture:

**a) Your product description literally says "LEGO-style composability."** The Quickstart is what those LEGO blocks look like when a prospect snaps them together themselves. The marketing copy already implies the experience; the experience does not yet exist.

**b) Insight Partners-backed companies hire for distribution leverage.** A tool that scales the top of the funnel without adding SDR headcount is exactly the leverage your investors expect to see. The Growth Analyst job description explicitly calls out "templates, trackers, and playbooks the Growth team runs on" — the Quickstart is one of those.

**c) The Onboarding InstaWorker meta-vision.** Taken to production, the Quickstart is structurally an InstaWorker. It takes structured input from a frontline operator (the prospect), applies a vertical-aware knowledge layer (the archetype catalog), and produces a structured vertical-specific output (a draft spec). If InstaLILY decided to dogfood its own architecture against its own sales motion, this is roughly what v1 would look like — and the parts the demo can't reach (real internal-deployment comparables, LLM-composed narratives, deployment-history lookups) are exactly the parts the production version would unlock.

(That is an observation, not a pitch for a new product line. The decision to dogfood the architecture against the sales motion is yours to make. The observation is just: structurally, this is where it goes.)

---

## Success metrics

| Metric | Why it matters | v1 target |
|---|---|---|
| Quickstart completion rate (start → spec generated) | The whole funnel premise rests on this. If <40% finish, the friction is wrong. | ≥50% |
| Spec → demo booked rate | Tests whether the Quickstart spec is a credibility transfer or a dead end. | ≥10% (vs. the ~3-5% Book-a-Demo CTR on a typical B2B SaaS homepage) |
| Demos booked via Quickstart vs. direct | Tells us how much of total demo flow the Quickstart unlocks vs. cannibalizes. | Quickstart-sourced ≥30% of total demos within 60 days |
| Spec sharing rate (copy + email + URL share) | Multi-stakeholder buying signal. | ≥25% of completed Quickstarts result in at least one share action |
| Average demo discovery time | Pre-qualified Quickstart demos should be faster. | -20% on Quickstart-sourced calls vs. cold-booked calls |

These are the metrics a PM team would actually instrument. None of the numbers above are fabricated estimates; they are targets I would propose and then measure honestly.

---

## v1 scope (this prototype) and beyond

**v1 — the deployed prototype:** Four archetype pathways, archetype × pick-specific output, similarity grading against the only publicly verifiable InstaLILY case study (SRS Distribution), discovery checklist, three CTAs (Book / Copy / Email-to-boss). No LLM dependency. No user accounts. Static, fast, shareable.

**v2 — internal data integration:** Replace the public-only SRS comparison with a vector-similarity match against InstaLILY's actual deployed customer base. The spec output references real (anonymized) customer outcomes that structurally match the user's situation. Adds the deferred items from v1: shareable visual card for LinkedIn, downloadable discovery PDF, per-section confidence indicators.

**v3 — LLM composition + routing:** Replace the templated narrative with LLM composition citing specific internal deployments. Auto-route the qualified prospect to the closest-fit AE based on archetype × vertical × volume, with the spec attached. Feedback loop: prospect outcomes flow back into the InstaBrain.

The v2 and v3 scopes are intentionally smaller than what one might propose at a kickoff. The candidate's first 30 days should be customer interviews, not feature shipping.

---

## What I would do first in the role (not what I'd ship first)

The single biggest gap in this artifact: I have not talked to a real frontline operator. The archetypes, dropdown options, and output framing are derived from InstaLILY's published materials, the SRS case study, and my own reasoning. That is research, not validation.

If I were in the role, the first thing I would do is line up five operator calls across the four archetypes — leveraging InstaLILY's existing customer relationships for warm intros. The artifact would be revised based on what was wrong about each archetype, then re-tested. Most assumptions in the current build would be partially incorrect; that is what the calls would surface.

This is the answer if anyone asks *"have you talked to a real operator?"* The honest answer is "not yet, here is why, and here is what I would do first." Pretending otherwise would have been the wrong move.

---

## Open questions for the InstaLILY team

These are the questions I cannot answer from outside the company. They are the questions I would ask in the first round if the discussion advances:

1. **What is your actual close rate on inbound demos vs. outbound demos?** Determines whether self-serve qualification helps or hurts net pipeline.
2. **What is your AE capacity headroom?** A Quickstart that triples qualified leads is a problem if you can't service them.
3. **Which vertical's deployment is your strongest reference, and would the customer permit a *similar* (not identical) Quickstart-style comparable?** Determines v2 feasibility.
4. **Has any prospect ever asked for a spec template before booking?** If yes, the demand is already validated and we're talking implementation. If no, that's important signal too.
5. **Is the production version of this — as an internal sales-enablement tool, not a public-facing one — already on a roadmap somewhere?** I would not be surprised if it is. The proposal is still useful as a candidate proof-of-concept either way.

---

## What this submission is asking for

A first-round conversation. I built this in a weekend because the application package alone would not have surfaced what I would actually do in the role. The artifact is the demonstration; the resume is the receipt.

If the Quickstart concept resonates, I would want to dig into the open questions above and pressure-test the proposal against your internal context. If it does not resonate, I would want to know why — that conversation is more useful to me than another rejection email.

**[Try the live demo →](https://hossaizn.github.io/instalily-quickstart/quickstart)**

---

*Zulqarnayan Hossain · [LinkedIn](https://www.linkedin.com/in/zulqarnayan-hossain/) · [hossainzulqarnayan@gmail.com](mailto:hossainzulqarnayan@gmail.com)*
