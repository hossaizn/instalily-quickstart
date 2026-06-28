import { motion } from 'framer-motion';
import type { QuickstartState } from '../../lib/types';

interface Props {
  state: QuickstartState;
  setState: React.Dispatch<React.SetStateAction<QuickstartState>>;
  next: () => void;
  back: () => void;
}

const PROMPTS = [
  {
    field: 'task',
    label: 'Most repetitive task you do daily?',
    hint: 'One sentence. What eats your time.',
    placeholder: 'e.g. Building quotes from inbound part requests',
  },
  {
    field: 'dataSource',
    label: 'Where does the data live today?',
    hint: 'Be specific. The tools or systems.',
    placeholder: 'e.g. Customer emails + ERP catalog + pricing matrix',
  },
  {
    field: 'output',
    label: 'Where does the output go?',
    hint: 'Who or what receives the result.',
    placeholder: 'e.g. Quote PDF sent to customer, line items written to ERP',
  },
] as const;

export default function ScreenWorkflow({ state, setState, next, back }: Props) {
  const canContinue =
    state.workflow.task.trim().length > 3 &&
    state.workflow.dataSource.trim().length > 3 &&
    state.workflow.output.trim().length > 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="container-prose py-12 md:py-20"
    >
      <button onClick={back} className="text-xs text-ink-muted hover:text-ink transition-colors mb-6">
        ← Back
      </button>

      <p className="label mb-3">Step 2 of 5</p>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
        Walk me through a workflow that eats your time.
      </h2>
      <p className="text-base text-ink-soft mb-10 leading-relaxed">
        Short answers are fine. The more specific, the better the spec.
      </p>

      <div className="space-y-7">
        {PROMPTS.map(({ field, label, hint, placeholder }, idx) => (
          <div key={field}>
            <label className="block text-sm font-medium text-ink mb-1" htmlFor={field}>
              <span className="text-ink-faint mr-2">{idx + 1}.</span>
              {label}
            </label>
            <p className="text-xs text-ink-muted mb-2 ml-5">{hint}</p>
            <input
              id={field}
              type="text"
              value={state.workflow[field]}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  workflow: { ...s.workflow, [field]: e.target.value },
                }))
              }
              placeholder={placeholder}
              className="w-full px-4 py-3 bg-paper-card rounded-lg border border-ink/10
                         text-ink placeholder:text-ink-faint
                         focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
                         transition-shadow duration-150"
            />
          </div>
        ))}
      </div>

      <button
        onClick={next}
        disabled={!canContinue}
        className="btn-primary mt-10"
      >
        Continue
        <span aria-hidden>→</span>
      </button>
    </motion.div>
  );
}
