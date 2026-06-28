import { motion } from 'framer-motion';
import { useState } from 'react';
import type { QuickstartState, SpecOutput } from '../../lib/types';

interface Props {
  state: QuickstartState;
  spec: SpecOutput;
  restart: () => void;
}

export default function ScreenSpec({ state, spec, restart }: Props) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    const text = renderSpecAsMarkdown(state, spec);
    try {
      await navigator.clipboard.writeText(text);
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
          Built for <span className="text-ink font-medium">{state.role || (state.template ? friendlyTemplate(state.template) : 'your team')}</span>
          {state.context.vertical && state.context.vertical !== 'other' && (
            <> · {friendlyVertical(state.context.vertical)}</>
          )}
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
        <p className="text-sm text-ink-muted mb-6">Three steps. Same shape as the workflow you described.</p>
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

      {/* Brain modules + integrations side by side */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="card p-8 md:col-span-3"
        >
          <h2 className="text-lg font-semibold mb-1">InstaBrain modules to stand up</h2>
          <p className="text-sm text-ink-muted mb-6">Specialized small-model layers, one per knowledge domain.</p>
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
          <p className="text-sm text-ink-muted mb-6">Plugs into your existing systems. No rip-and-replace.</p>
          <div className="flex flex-wrap gap-2">
            {spec.integrations.map((tool) => (
              <span key={tool} className="chip">{tool}</span>
            ))}
          </div>
        </motion.section>
      </div>

      {/* ROI */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
        className="card p-8 mb-6"
      >
        <h2 className="text-lg font-semibold mb-1">Conservative ROI estimate</h2>
        <p className="text-sm text-ink-muted mb-6">Sized to your team. Numbers held below typical case-study claims on purpose.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <p className="label mb-2">Hours saved</p>
            <p className="font-serif text-xl font-semibold leading-snug">{spec.roi.hoursPerWeek}</p>
          </div>
          <div>
            <p className="label mb-2">Straight-through rate</p>
            <p className="font-serif text-xl font-semibold leading-snug">{spec.roi.accuracyClaim}</p>
          </div>
          <div>
            <p className="label mb-2">Time to value</p>
            <p className="font-serif text-xl font-semibold leading-snug">{spec.roi.rampWeeks}</p>
          </div>
        </div>
        <p className="text-xs text-ink-muted mt-6 italic leading-relaxed">
          {spec.riskNote}
        </p>
      </motion.section>

      {/* CTAs */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row gap-3"
      >
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
      </motion.div>

      <p className="text-xs text-ink-muted text-center mt-8 leading-relaxed">
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
      </p>
    </motion.div>
  );
}

function friendlyTemplate(t: NonNullable<QuickstartState['template']>): string {
  return {
    parts: 'parts distribution teams',
    claims: 'claims teams',
    service: 'field service teams',
    quote: 'quote desks',
  }[t];
}

function friendlyVertical(v: QuickstartState['context']['vertical']): string {
  return {
    'industrial-distribution': 'Industrial Distribution',
    'healthcare': 'Healthcare',
    'manufacturing': 'Manufacturing',
    'automotive': 'Automotive',
    'other': '',
    '': '',
  }[v];
}

function renderSpecAsMarkdown(state: QuickstartState, spec: SpecOutput): string {
  return [
    `# ${spec.workerName}`,
    '',
    `_${spec.tagline}_`,
    '',
    `**Built for:** ${state.role || 'your team'}`,
    state.context.vertical ? `**Vertical:** ${state.context.vertical}` : '',
    state.context.companySize ? `**Company size:** ${state.context.companySize}` : '',
    '',
    '## How it would run',
    '',
    ...spec.workflowSteps.map((s, i) => `${i + 1}. **${s.title}** — ${s.detail}`),
    '',
    '## InstaBrain modules',
    '',
    ...spec.brainModules.map((m) => `- **${m.name}** (sources: ${m.sources.join(', ')})`),
    '',
    '## Integrations',
    '',
    spec.integrations.join(', '),
    '',
    '## Conservative ROI estimate',
    '',
    `- Hours saved: ${spec.roi.hoursPerWeek}`,
    `- Straight-through rate: ${spec.roi.accuracyClaim}`,
    `- Time to value: ${spec.roi.rampWeeks}`,
    '',
    '---',
    '',
    spec.riskNote,
    '',
    'Generated by the InstaWorker Quickstart concept · built by Zulqarnayan Hossain',
  ]
    .filter(Boolean)
    .join('\n');
}
