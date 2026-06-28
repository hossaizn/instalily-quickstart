# InstaWorker Quickstart: A Self-Serve Top-of-Funnel Proposal

**A weekend-built concept submitted for the InstaLILY Product Associate role.**

By Zulqarnayan Hossain · 2026-06-28

[**Try the live demo →**](https://hossaizn.github.io/instalily-quickstart/quickstart) · [Source code](https://github.com/hossaizn/instalily-quickstart) · [Application hub](https://hossaizn.github.io/instalily-quickstart/)

---

## TL;DR

InstaLILY's site routes every visitor to Book a Demo, which converts at the industry-standard rate for enterprise B2B SaaS (~2-3%). The Quickstart is a parallel path scoped for the other ~97% who are in research mode and aren't sales-ready on first visit.

It captures them with a useful artifact: a five-screen flow that turns a frontline operator's workflow into a draft InstaWorker spec, graded honestly against the only public InstaLILY case study (SRS Distribution). The spec is built to be forwarded rep → boss → procurement, generating multi-stakeholder demand without new sales headcount.

A working prototype is deployed at the link above.

---

## The opportunity

InstaLILY's architecture is the moat: vertical-specific InstaBrain knowledge layers + InstaWorkers that execute work inside customers' existing tools. The current funnel converts sales-ready visitors well, and the architecture justifies the deliberate sales motion.

The segment I see opportunity in is the research-mode visitor that the current funnel doesn't aim to serve: the parts manager Googling "AI for distribution" at 11pm on a Tuesday, or the claims VP comparing vendors with 30 minutes between meetings. They're evaluating whether InstaLILY would fit, but they aren't ready to commit a sales call.

Today, without a self-serve path, they either book a demo without context (which costs the AE discovery time) or, more often, they bounce.

---

## What I'm proposing

A web tool. Five screens. Sixty seconds per visitor.

1. **Pick your archetype.** Four cards: Parts Counter Lead, Claims Analyst, Service Dispatcher, Quote Builder. Matches InstaLILY's named verticals.
2. **Describe your workflow.** Four dropdowns tailored to the archetype: most repetitive task, where the data lives today, decision complexity, where the output lands.
3. **Add context.** Company size, vertical, frequency, team size, tools used today.
4. **A brief generating moment.**
5. **Your draft spec.** Worker name and tagline, end-to-end workflow narrative composed from the user's actual picks, suggested InstaBrain modules, integrations, an honest similarity score against the SRS case study, and a discovery checklist of the real metrics that would matter in a paid engagement.

The output is shareable three ways: book a demo with the spec attached, copy the spec to clipboard as Markdown, or email it directly to the visitor's boss (mailto with pre-filled subject and body).

[Live prototype here.](https://hossaizn.github.io/instalily-quickstart/quickstart)

**One structural observation worth noting:** the Quickstart, taken to production, is itself an InstaWorker. It takes structured input from a frontline operator (the prospect), applies a vertical-aware knowledge layer (the archetype catalog + similarity scoring), and produces a structured vertical-specific output (a draft spec). If InstaLILY decided to dogfood its own architecture against its own sales motion, this is roughly what v1 would look like. The decision to do so is yours; the observation is just that the shape fits.

---

## The pushback I anticipated, and how I'd defend it

The strongest objection a PM at InstaLILY would raise:

> *"Adding friction before Book a Demo hurts conversion. SaaS funnel theory says reduce steps, not add them. You'd trade easy demos for friction-bought demos."*

The objection is correct on its face. Here's why I'd still defend the proposal:

**1. Different visitor intent calls for different paths.** Book a Demo serves the 2-3% who are sales-ready. The Quickstart serves the ~97% who aren't yet, with an artifact they can take home. Both CTAs sit on the homepage side by side. Total qualified lead volume goes up because the Quickstart captures visitors the demo CTA isn't currently scoped to serve.

**2. Self-qualification is a feature.** Some research-mode visitors aren't a fit (wrong vertical, too small, wrong use case). The tool helps them self-discover that without taking sales-team time. The demos that do book arrive pre-qualified with archetype, vertical, and workflow context already captured.

**3. Specs are shareable; demos aren't.** The output spec is designed to be forwarded rep → boss → procurement. Enterprise deals close on multi-stakeholder alignment, and a demo call reaches one person at a time. The Quickstart instruments multi-stakeholder buying motion without InstaLILY paying for the additional touches.

**4. AE hours become higher-value.** A demo booked via Quickstart opens with archetype, vertical, tool stack, and workflow already in hand. The AE can lead with a specific reference customer instead of starting with discovery. Same hours, more pipeline closed.

**Honest caveat:** I don't have InstaLILY's internal close-rate or sales-cycle data, and you may have already evaluated this approach. If you have, I'd want to understand what shaped that call. That's exactly the kind of conversation I'd hope to have in a first round.

---

## Success metrics

Five metrics a PM team would instrument if this were a real ship:

| Metric | Why it matters | v1 target |
|---|---|---|
| Quickstart completion rate (start to spec generated) | Tests whether the friction is right. Below 40% means the friction is wrong. | ≥50% |
| Spec to demo booked rate | Tests credibility transfer. | ≥10% (versus the ~3-5% Book-a-Demo CTR on a typical B2B SaaS homepage) |
| Quickstart-sourced demos as % of total demos | Measures whether the surface adds to total demand vs cannibalizes. | ≥30% within 60 days |
| Spec sharing rate (copy, email, share-link) | Multi-stakeholder buying signal. | ≥25% of completed Quickstarts trigger at least one share action |
| Average demo discovery time | Should drop on Quickstart-sourced calls. | -20% versus cold-booked calls |

These are the targets I'd propose, then measure honestly. None are fabricated; they're hypotheses to validate.

---

## Scope and roadmap

**v1 (the deployed prototype):** Four archetype pathways. Archetype × pick-specific output composition. Similarity grading against the SRS case study. Discovery checklist tailored per archetype. Three CTAs (Book / Copy / Email). No LLM dependency. No user accounts. Static, fast, shareable.

**v2:** Replace the public-only SRS comparison with a vector-similarity match against InstaLILY's deployed customer base. Reference real (anonymized) customer outcomes that structurally match the user's situation. Add shareable visual card, downloadable discovery PDF, per-section confidence indicators.

**v3:** Replace templated narrative with LLM composition citing specific internal deployments. Auto-route qualified prospects to the closest-fit AE based on archetype × vertical × volume. Feedback loop: prospect outcomes flow back into the InstaBrain.

v2 and v3 are intentionally smaller than a typical kickoff might propose. The candidate's first 30 days should be customer interviews, not feature shipping.

---

## What I'd actually do first in the role

The biggest gap in this artifact: I haven't talked to a real frontline operator. The archetypes, dropdown options, and output framing are derived from InstaLILY's published materials, the SRS case study, and my own reasoning. That's research, not validation.

In the role, the first thing I'd do is line up five operator calls across the four archetypes (warm intros via InstaLILY's existing customer relationships). The artifact would get revised based on what was wrong about each archetype. Most assumptions in the current build would be partially incorrect; that's what the calls would surface.

This is the honest answer if anyone asks *"have you talked to a real operator?"*: not yet, here's why, here's what I'd do first.

---

## Open questions for the InstaLILY team

The questions I can't answer from outside the company, and the ones I'd want to discuss in a first round:

1. **What is your current close rate on inbound demos versus outbound?** Determines whether self-serve qualification helps or hurts net pipeline.
2. **What is your AE capacity headroom?** A Quickstart that triples qualified leads becomes a problem if there's no capacity to service them.
3. **Which vertical's deployment is your strongest reference, and would the customer permit a similar-style comparable being surfaced?** Determines v2 feasibility.
4. **Has a prospect ever asked for a spec template before booking?** If yes, demand is validated and we're talking implementation. If no, that's also useful signal.
5. **Is the production version of this (as an internal sales-enablement tool, not public-facing) already on a roadmap somewhere?** Wouldn't surprise me if it is. Useful either way.

---

## What this submission is asking for

A first-round conversation. I built this in a weekend because the application package alone wouldn't have surfaced what I'd actually do in the role. The artifact is the demonstration; the resume is the receipt.

If the Quickstart concept resonates, I'd want to dig into the open questions above and pressure-test the proposal against your internal context. If it doesn't, I'd want to know why; that conversation is more useful to me than another rejection email.

**[Try the live demo →](https://hossaizn.github.io/instalily-quickstart/quickstart)**

---

*Zulqarnayan Hossain · [LinkedIn](https://www.linkedin.com/in/zulqarnayan-hossain/) · [hossainzulqarnayan@gmail.com](mailto:hossainzulqarnayan@gmail.com)*
