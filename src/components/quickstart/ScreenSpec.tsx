import { motion } from 'framer-motion';
import { useState } from 'react';
import type { QuickstartState, SpecOutput } from '../../lib/types';
import { archetypeMeta } from '../../lib/templates';

interface Props {
  state: QuickstartState;
  spec: SpecOutput;
  restart: () => void;
}

export default function ScreenSpec({ state, spec, restart }: Props) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(renderSpecAsMarkdown(state, spec));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard may be blocked; user can still screenshot.
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
  };

  const archetypeLabel = state.archetype ? archetypeMeta(state.archetype).cardTitle : 'your team';
  const verticalLabel = state.context.vertical && state.context.vertical !== 'other'
    ? friendlyVertical(state.context.vertical)
    : '';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="container-wide py-12 md:py-16"
    >
      {/* Header strip */}
      <div className="flex items-center justify-between mb-8">
        <p className="label">Your draft spec</p>
        <button onClick={restart} className="text-xs text-ink-muted hover:text-ink transition-colors">
          ← Start over
        </button>
      </div>

      {/* Main spec card */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="card p-8 md:p-12 mb-6"
      >
        <p className="text-sm text-ink-muted mb-2">
          Built for <span className="text-ink font-medium">{archetypeLabel}</span>
          {verticalLabel && <> · {verticalLabel}</>}
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold leading-[1.05] mb-3">
          {spec.workerName}
        </h1>
        <p className="text-lg md:text-xl text-ink-soft font-serif italic leading-relaxed max-w-2xl">
          {spec.tagline}
        </p>
      </motion.div>

      {/* Workflow */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="card p-8 mb-6"
      >
        <h2 className="text-lg font-semibold mb-1">How it would run, end to end</h2>
        <p className="text-sm text-ink-muted mb-6">
          Three steps, derived from what you described in the workflow questions.
        </p>
        <ol className="space-y-5">
          {spec.workflowSteps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ink text-paper flex items-center justify-center text-sm font-medium font-mono">
                {i + 1}
              </span>
              <div className="flex-1 pt-0.5">
                <h3 className="font-serif text-base font-semibold mb-1">{step.title}</h3>
                <p className="text-ink-soft leading-relaxed">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </motion.section>

      {/* Brain modules + integrations */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="card p-8 md:col-span-3"
        >
          <h2 className="text-lg font-semibold mb-1">InstaBrain modules to stand up</h2>
          <p className="text-sm text-ink-muted mb-6">
            Specialized small-model layers, one per knowledge domain.
          </p>
          <ul className="space-y-4">
            {spec.brainModules.map((mod, i) => (
              <li key={i}>
                <div className="font-serif font-semibold text-base mb-1">{mod.name}</div>
                <div className="text-sm text-ink-muted">
                  Sources: {mod.sources.join(' · ')}
                </div>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="card p-8 md:col-span-2"
        >
          <h2 className="text-lg font-semibold mb-1">Integrations</h2>
          <p className="text-sm text-ink-muted mb-6">
            Plugs into your existing systems. No rip-and-replace.
          </p>
          <div className="flex flex-wrap gap-2">
            {spec.integrations.map((tool) => (
              <span key={tool} className="chip">{tool}</span>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Comparable benchmark (replaces fake ROI) */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
        className="card p-8 mb-6"
      >
        <div className="flex items-baseline justify-between mb-1 gap-3 flex-wrap">
          <h2 className="text-lg font-semibold">What the public case study tells us</h2>
          <BenchmarkPill level={spec.benchmark.matchLevel} />
        </div>
        <p className="text-sm text-ink-muted mb-6">
          We grade what's verifiable from public data. The grade describes the benchmark's fit, not your situation.
        </p>

        <div className="rounded-lg border border-accent/30 bg-accent-soft/50 p-5 mb-5">
          <p className="label !text-accent mb-2">Why we compare against SRS</p>
          <p className="text-sm text-ink-soft leading-relaxed">
            SRS Distribution is the only InstaLILY case study with public outcomes. Comparing against it is honest about what we can prove from the outside. The production version of this tool, running inside InstaLILY with access to every deployment, would match your workflow against the closest <em className="italic">actual</em> customer, not the one publicly cited one. Discovery is how that closer match gets surfaced.
          </p>
        </div>

        <div className="rounded-lg bg-paper-warm p-5 ring-1 ring-ink/5 mb-5">
          <p className="label mb-2">Cited case study</p>
          <p className="font-serif text-base font-semibold mb-1">{spec.benchmark.citedCase.name}</p>
          <p className="text-sm text-ink-soft leading-relaxed mb-2">{spec.benchmark.citedCase.headline}</p>
          <a
            href={spec.benchmark.citedCase.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent hover:text-accent-hover underline decoration-accent/30 hover:decoration-accent"
          >
            Read the source ↗
          </a>
        </div>

        <div className="space-y-4 text-base text-ink-soft leading-relaxed">
          <div>
            <p className="label mb-2">Why this match level</p>
            <p>{spec.benchmark.reasoning}</p>
          </div>
          <div>
            <p className="label mb-2">What this means for you</p>
            <p>{spec.benchmark.whatThisMeansForYou}</p>
          </div>
        </div>
      </motion.section>

      {/* Discovery checklist */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="card p-8 mb-6"
      >
        <h2 className="text-lg font-semibold mb-1">What discovery would actually establish</h2>
        <p className="text-sm text-ink-muted mb-6">
          The metrics a real engagement would baseline before any number lands in a quote.
        </p>
        <ul className="space-y-5">
          {spec.discoveryItems.map((item, i) => (
            <li key={i} className="border-l-2 border-accent/30 pl-4">
              <p className="font-serif font-semibold text-base mb-1">{item.metric}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{item.whyItMatters}</p>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* The "with internal access" callout */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-xl bg-ink text-paper p-8 mb-6"
      >
        <p className="label !text-paper/60 mb-2">A note on the math</p>
        <p className="text-base leading-relaxed">
          This Quickstart grades you against the <em className="italic">one</em> InstaLILY case study published publicly. Inside the company, the InstaLILY team has data from every live deployment (SRS plus every other customer). The same tool, running with internal access, would match your situation against the closest <em className="italic">actual</em> customer and surface their measured outcomes. That's the production version of this product.
        </p>
      </motion.section>

      {/* CTAs: primary Book + secondary Copy + tertiary Email-to-boss */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://instalily.ai/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 !py-4 text-base"
          >
            Book a demo with this spec
            <span aria-hidden>→</span>
          </a>
          <button onClick={copyToClipboard} className="btn-secondary flex-1 !py-4 text-base">
            {copied ? '✓ Copied to clipboard' : 'Copy the spec'}
          </button>
        </div>
        <div className="text-center mt-4">
          <a
            href={buildMailtoLink(state, spec)}
            className="text-sm text-ink-muted hover:text-ink underline decoration-ink/20 hover:decoration-ink transition-colors"
          >
            or email this spec to your boss →
          </a>
        </div>
      </motion.div>

      <p className="text-xs text-ink-muted text-center mt-8 leading-relaxed max-w-2xl mx-auto">
        Concept built by{' '}
        <a
          href="https://www.linkedin.com/in/zulqarnayan-hossain/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-ink/30 hover:decoration-ink"
        >
          Zulqarnayan Hossain
        </a>
        {' '}for the InstaLILY Product Associate role. Not officially affiliated with InstaLILY.
        Every claim on this page traces back to either a user input above or the publicly cited case study.
      </p>
    </motion.div>
  );
}

function buildMailtoLink(state: QuickstartState, spec: SpecOutput): string {
  const archetypeName = state.archetype ? archetypeMeta(state.archetype).cardTitle : 'our team';
  const subject = `Worth a look: InstaWorker spec for ${archetypeName}`;
  const url =
    typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname.replace(/\/quickstart\/?$/, '')}/quickstart`
      : 'https://hossaizn.github.io/instalily-quickstart/quickstart';
  const body = [
    'Hey,',
    '',
    `Ran through a tool that drafted what an AI teammate could do for our ${archetypeName.toLowerCase()} work.`,
    '',
    `It came back with a "${spec.workerName}" spec:`,
    `${spec.tagline}`,
    '',
    'Worth a look, takes 60 seconds:',
    url,
    '',
    "Want to see if their team would walk us through what something like this would look like for our setup.",
    '',
    'Thanks',
  ].join('\n');
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function BenchmarkPill({ level }: { level: 'high' | 'partial' | 'low' }) {
  const config = {
    high: { label: 'Close public reference', cls: 'bg-accent-soft text-accent' },
    partial: { label: 'Partial overlap', cls: 'bg-paper-warm text-ink-soft ring-1 ring-ink/10' },
    low: { label: 'Different shape than public case', cls: 'bg-paper-warm text-ink-soft ring-1 ring-ink/10' },
  }[level];
  return (
    <span className={['text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap', config.cls].join(' ')}>
      {config.label}
    </span>
  );
}

function friendlyVertical(v: NonNullable<QuickstartState['context']['vertical']>): string {
  return (
    {
      'industrial-distribution': 'Industrial Distribution',
      'healthcare': 'Healthcare',
      'manufacturing': 'Manufacturing',
      'automotive': 'Automotive',
      'other': '',
      '': '',
    }[v] || ''
  );
}

function renderSpecAsMarkdown(state: QuickstartState, spec: SpecOutput): string {
  const archetypeLabel = state.archetype ? archetypeMeta(state.archetype).cardTitle : '';
  return [
    `# ${spec.workerName}`,
    '',
    `_${spec.tagline}_`,
    '',
    `**Built for:** ${archetypeLabel}`,
    state.context.vertical ? `**Vertical:** ${state.context.vertical}` : '',
    state.context.companySize ? `**Company size:** ${state.context.companySize}` : '',
    state.context.teamSize ? `**Team size on this work:** ${state.context.teamSize}` : '',
    state.context.frequency ? `**Frequency:** ${state.context.frequency}` : '',
    '',
    '## How it would run',
    '',
    ...spec.workflowSteps.map((s, i) => `${i + 1}. **${s.title}**. ${s.detail}`),
    '',
    '## InstaBrain modules',
    '',
    ...spec.brainModules.map((m) => `- **${m.name}** (sources: ${m.sources.join(', ')})`),
    '',
    '## Integrations',
    '',
    spec.integrations.join(', '),
    '',
    '## Comparable benchmark',
    '',
    `**Match level:** ${spec.benchmark.matchLevel}`,
    '',
    `**Reasoning:** ${spec.benchmark.reasoning}`,
    '',
    `**Cited case:** ${spec.benchmark.citedCase.name}. ${spec.benchmark.citedCase.headline}`,
    `**Source:** ${spec.benchmark.citedCase.sourceUrl}`,
    '',
    `**What this means:** ${spec.benchmark.whatThisMeansForYou}`,
    '',
    '## What discovery would establish',
    '',
    ...spec.discoveryItems.map((d) => `- **${d.metric}**. ${d.whyItMatters}`),
    '',
    '---',
    '',
    'Note: This Quickstart matches against the one InstaLILY case study published publicly. The production version, with internal access, would match against actual customer data.',
    '',
    'Concept built by Zulqarnayan Hossain. Not officially affiliated with InstaLILY.',
  ]
    .filter(Boolean)
    .join('\n');
}
