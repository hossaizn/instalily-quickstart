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
          I built the missing top-of-funnel for InstaLILY in a weekend.
        </h1>
        <p className="text-xl text-ink-soft leading-relaxed font-serif italic">
          A self-serve InstaWorker Quickstart that turns "Book a Demo" into a path that captures the ~97% of visitors who aren't ready to talk to sales yet.
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
            Every CTA on instalily.ai routes to "Book a Demo." That's the whole funnel.
          </h2>

          <div className="space-y-6 text-lg text-ink-soft leading-relaxed">
            <p>
              For the visitor who's already decided, that works. For the ~97% who are in research mode (the parts manager Googling "AI for distribution," the claims VP comparing vendors), there's no path. They bounce.
            </p>
            <p>
              The Quickstart is the parallel path. <span className="text-ink font-medium">Not a replacement for the demo button, but an alternative for the visitor that button doesn't serve.</span> Sixty seconds of self-serve, and they leave with a draft InstaWorker spec they can show their boss.
            </p>
          </div>

          {/* Objection + defense */}
          <div className="mt-12 bg-paper-warm rounded-xl p-7 ring-1 ring-ink/5">
            <p className="label mb-3">The pushback I anticipated</p>
            <p className="font-serif text-xl italic leading-snug text-ink mb-5">
              "Adding friction before Book a Demo hurts conversion. The whole funnel theory says reduce steps, not add them."
            </p>
            <p className="text-base text-ink-soft leading-relaxed mb-4">Four reasons I'd defend this in a roadmap review:</p>

            <ol className="space-y-4 text-base text-ink-soft leading-relaxed">
              <li>
                <span className="text-ink font-semibold">1. Different visitor intent → different paths.</span>{' '}
                The Book a Demo button captures the 2-3% who are ready for sales (industry benchmark for enterprise B2B SaaS). The other ~97% bounce. The Quickstart captures them with a useful artifact, not a sales call. Total qualified lead volume goes up.
              </li>
              <li>
                <span className="text-ink font-semibold">2. Self-qualification is a feature.</span>{' '}
                Some visitors shouldn't book: wrong vertical, too small, wrong use case. The tool surfaces that without burning a sales hour. The demos that do book are pre-qualified with context.
              </li>
              <li>
                <span className="text-ink font-semibold">3. Specs are shareable; demos are not.</span>{' '}
                The output spec gets sent rep → boss → procurement. Multi-stakeholder buying motion happens before InstaLILY ever pays for a sales touch. A demo call reaches one person at a time.
              </li>
              <li>
                <span className="text-ink font-semibold">4. Sales velocity goes up.</span>{' '}
                A demo booked via Quickstart opens with: "I see you're a parts manager at 200-person NetSuite shop, quote generation is your pain. Let me show you Sarah at SRS solving exactly that." Not 15 minutes of discovery.
              </li>
            </ol>

            <p className="text-sm text-ink-muted mt-6 italic leading-relaxed">
              Honest caveat: I don't have your internal close-rate or sales-cycle data. You may have already considered this and decided against it. If so, I'd want to know why. That's the right second-round conversation.
            </p>
          </div>
        </div>
      </section>

      {/* PRD link section */}
      <section id="prd" className="border-t border-ink/5 scroll-mt-12">
        <div className="container-prose py-16 md:py-20">
          <p className="label mb-4">The PRD</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-5 leading-tight">
            Make the Learning Layer Visible
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed mb-8">
            One-page PRD covering the problem, scope, success metrics, 30/60/90 roadmap, and the risk I can't disprove from the outside.
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
          <div className="space-y-4 text-lg text-ink-soft leading-relaxed mb-8">
            <p>
              <a href="https://apps.apple.com/us/app/primrose-eve-menopause/id6778547618" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-ink/30 hover:decoration-ink">Primrose &amp; Eve</a>, live on the App Store. A privacy-first doctor-visit advocacy app for perimenopause where user data never leaves the phone. On-device statistical Pattern Engine, AI-generated Smart Report layer, StoreKit 2, Cloudflare Workers, DeviceCheck.
            </p>
            <p>
              <a href="https://testflight.apple.com/join/uCazTMt2" target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-ink/30 hover:decoration-ink">Loredrop</a>, in TestFlight. A daily social ritual app built around a habit-forming engagement loop. Small crews take turns recording one voice at a time over a day; the full story unlocks together at a shared daily reveal. Custom FFmpeg audio stitching pipeline keeps every crew member in realtime sync.
            </p>
            <p>
              Built both end-to-end as the sole engineer. Designed the brands too (including a hand-drawn mascot for Loredrop).
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
              {' '}&middot; Not officially affiliated with InstaLILY
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
