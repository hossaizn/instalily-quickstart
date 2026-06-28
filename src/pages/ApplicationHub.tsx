import { Link } from 'react-router-dom';

export default function ApplicationHub() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Top brand line */}
      <header className="border-b border-ink/5">
        <div className="container-wide flex items-center justify-between py-4">
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-semibold tracking-tight">Zulqarnayan Hossain</span>
            <span className="text-xs text-ink-faint hidden sm:inline">· Application for InstaLILY</span>
          </span>
          <a
            href="https://cal.com/hossainzulqarnayan/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-muted hover:text-ink transition-colors"
          >
            Book 15 min →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="container-prose pt-16 md:pt-24 pb-12">
        <p className="label mb-5">Product Associate · InstaLILY</p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.02] mb-6 tracking-tight">
          I built a self-serve top-of-funnel concept for InstaLILY in a weekend.
        </h1>
        <p className="text-xl text-ink leading-relaxed font-serif">
          The InstaWorker Quickstart is a parallel path to "Book a Demo," scoped to capture the ~97% of visitors who aren't sales-ready on first visit.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/quickstart" className="btn-primary !py-4 text-base">
            Try the Quickstart
            <span aria-hidden>→</span>
          </Link>
          <a
            href="https://github.com/hossaizn/instalily-quickstart/blob/main/docs/application-prd.md"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !py-4 text-base"
          >
            Read the PRD
            <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      {/* Strategic frame */}
      <section className="border-t border-ink/5">
        <div className="container-prose py-16 md:py-20">
          <p className="label mb-4">Why this, and why now</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight">
            InstaLILY's site converts at industry-benchmark rates. The Quickstart serves the segment that benchmark leaves on the table.
          </h2>

          <div className="space-y-6 text-lg text-ink leading-relaxed font-serif">
            <p>
              The current funnel works well for sales-ready visitors: every CTA routes them straight to Book a Demo, which converts at the 2-3% rate typical for enterprise B2B SaaS. That's the right shape for high-intent traffic.
            </p>
            <p>
              The opportunity is the other ~97% (the parts manager Googling "AI for distribution," the claims VP comparing vendors) who are researching but not yet ready to commit a sales call. Today they leave with nothing. <span className="font-semibold">The Quickstart is a parallel path that complements the demo button, scoped specifically for that visitor.</span> Sixty seconds of self-serve, and they leave with a draft InstaWorker spec they can share internally.
            </p>
          </div>

          {/* Objection + defense */}
          <div className="mt-12 bg-paper-warm rounded-xl p-7 ring-1 ring-ink/5">
            <p className="label mb-3">The pushback I anticipated</p>
            <p className="font-serif text-xl italic leading-snug text-ink mb-5">
              "Adding friction before Book a Demo hurts conversion. The whole funnel theory says reduce steps, not add them."
            </p>
            <p className="text-base text-ink leading-relaxed mb-4 font-serif">Four reasons I'd defend this in a roadmap review:</p>

            <ol className="space-y-4 text-base text-ink leading-relaxed font-serif">
              <li>
                <span className="font-semibold">1. Different visitor intent → different paths.</span>{' '}
                The current Book a Demo CTA converts the 2-3% of sales-ready visitors well. The Quickstart serves the ~97% who aren't there yet, adding to total qualified lead volume rather than competing with the existing channel.
              </li>
              <li>
                <span className="font-semibold">2. Self-qualification is a feature.</span>{' '}
                Some research-mode visitors aren't a fit (wrong vertical, too small, wrong use case). The tool helps them self-discover that without taking sales team time, while the demos that do book arrive pre-qualified with context.
              </li>
              <li>
                <span className="font-semibold">3. Specs are shareable; demo calls aren't.</span>{' '}
                The output spec is built to be forwarded rep → boss → procurement, generating multi-stakeholder buying motion alongside the direct demo channel. Each shared spec extends reach without requiring additional sales touches.
              </li>
              <li>
                <span className="font-semibold">4. AE hours become more productive.</span>{' '}
                Demos booked via Quickstart arrive with archetype, vertical, tool stack, and workflow already captured. AEs can open with specific reference customers instead of starting with discovery, making each booked hour higher-value.
              </li>
            </ol>

            <p className="text-sm text-ink-soft mt-6 italic leading-relaxed font-serif">
              Honest caveat: I don't have InstaLILY's internal close-rate or sales-cycle data, and you may have already evaluated this approach. If you have, I'd want to understand what shaped that call. That's exactly the kind of conversation I'd hope to have.
            </p>
          </div>
        </div>
      </section>

      {/* PRD link section */}
      <section id="prd" className="border-t border-ink/5 scroll-mt-12">
        <div className="container-prose py-16 md:py-20">
          <p className="label mb-4">The PRD</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-5 leading-tight">
            A Self-Serve Top-of-Funnel Proposal
          </h2>
          <p className="text-lg text-ink leading-relaxed mb-8 font-serif">
            The full proposal: opportunity framing, the anticipated objection with my defense, success metrics, scope and roadmap, and the open questions I'd want to discuss in a first round.
          </p>
          <a
            href="https://github.com/hossaizn/instalily-quickstart/blob/main/docs/application-prd.md"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Read the PRD
            <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-ink/5">
        <div className="container-prose py-16 md:py-20">
          <p className="label mb-4">About Zulqarnayan</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
            Solo founder, two iOS apps in production in six months.
          </h2>
          <div className="space-y-4 text-lg text-ink leading-relaxed mb-8 font-serif">
            <p>
              <a href="https://apps.apple.com/us/app/primrose-eve-menopause/id6778547618" target="_blank" rel="noopener noreferrer" className="underline decoration-ink/30 hover:decoration-ink">Primrose &amp; Eve</a>, live on the App Store. A privacy-first doctor-visit advocacy app for perimenopause where user data never leaves the phone. On-device statistical Pattern Engine, AI-generated Smart Report layer, StoreKit 2, Cloudflare Workers, DeviceCheck.
            </p>
            <p>
              <a href="https://testflight.apple.com/join/uCazTMt2" target="_blank" rel="noopener noreferrer" className="underline decoration-ink/30 hover:decoration-ink">Loredrop</a>, in TestFlight. A daily social ritual app built around a habit-forming engagement loop. Small crews take turns recording one voice at a time over a day; the full story unlocks together at a shared daily reveal. Custom FFmpeg audio stitching pipeline keeps every crew member in realtime sync. <em className="italic">Testing note: please use email signup; Apple Sign In isn't yet wired up in this TestFlight build.</em>
            </p>
            <p>
              Built both end-to-end as the sole engineer. Designed the brands too (including a hand-drawn mascot for Loredrop).
            </p>
            <p>
              I came to Cincinnati from Dhaka in 2021 without a script. Every room I walked into after that demanded inventing my own approach and reading people I had no shared context with. That's how imagination and people-fluency became the muscles I default to. Both matter most in a role where the product is built to serve real humans.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={`${import.meta.env.BASE_URL}resume.html`} target="_blank" rel="noopener noreferrer" className="btn-secondary">Resume</a>
            <a href="https://www.linkedin.com/in/zulqarnayan-hossain/" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
            <a href="https://github.com/hossaizn" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
            <a href="https://cal.com/hossainzulqarnayan/15min" target="_blank" rel="noopener noreferrer" className="btn-primary">Book 15 min</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/5 bg-paper-warm">
        <div className="container-prose py-16 md:py-20">
          <p className="font-serif text-2xl md:text-3xl leading-snug mb-6 text-ink">
            Built this for the conversation the application package alone wouldn't surface.
          </p>
          <p className="text-lg text-ink-soft leading-relaxed mb-10">
            Fastest way to get there:{' '}
            <a
              href="https://cal.com/hossainzulqarnayan/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors"
            >
              book 15 minutes
            </a>
            , or a note at{' '}
            <a
              href="mailto:hossainzulqarnayan@gmail.com"
              className="text-ink font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors"
            >
              hossainzulqarnayan@gmail.com
            </a>
            .
          </p>

          <div className="pt-8 border-t border-ink/10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 text-xs text-ink-muted leading-relaxed">
            <p>
              Built solo by Zulqarnayan Hossain for the InstaLILY Product Associate role &middot; June 2026
            </p>
            <p>
              Source:{' '}
              <a
                href="https://github.com/hossaizn/instalily-quickstart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-ink/30 hover:decoration-ink transition-colors"
              >
                github.com/hossaizn/instalily-quickstart
              </a>
              . Not officially affiliated with InstaLILY.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
