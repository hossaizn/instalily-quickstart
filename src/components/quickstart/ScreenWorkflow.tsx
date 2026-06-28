import { motion } from 'framer-motion';
import {
  archetypeMeta,
  DATA_STATE_OPTIONS,
  DECISION_COMPLEXITY_OPTIONS,
} from '../../lib/templates';
import type { QuickstartState, DataState, DecisionComplexity } from '../../lib/types';

interface Props {
  state: QuickstartState;
  setState: React.Dispatch<React.SetStateAction<QuickstartState>>;
  next: () => void;
  back: () => void;
}

export default function ScreenWorkflow({ state, setState, next, back }: Props) {
  if (!state.archetype) {
    // Defensive: route back to Step 1 if archetype somehow missing.
    back();
    return null;
  }

  const meta = archetypeMeta(state.archetype);
  const canContinue =
    state.workflow.task !== '' &&
    state.workflow.dataState !== '' &&
    state.workflow.decisionComplexity !== '' &&
    state.workflow.outputDestination !== '';

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

      <p className="label mb-3">Step 2 of 3 · {meta.cardTitle} pathway</p>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-3">
        Tell me about the workflow.
      </h2>
      <p className="text-base text-ink-soft mb-10 leading-relaxed">
        Four clicks. Each answer sharpens what we can claim on the spec.
      </p>

      <div className="space-y-8">
        <DropdownPicker
          number={1}
          label="Most repetitive task you handle"
          hint="Which one eats most of your time?"
          options={meta.taskOptions}
          value={state.workflow.task}
          onChange={(v) =>
            setState((s) => ({ ...s, workflow: { ...s.workflow, task: v } }))
          }
        />

        <DropdownPicker
          number={2}
          label="Where the input data lives today"
          hint="Determines automation feasibility. Be honest."
          options={DATA_STATE_OPTIONS}
          value={state.workflow.dataState}
          onChange={(v) =>
            setState((s) => ({
              ...s,
              workflow: { ...s.workflow, dataState: v as DataState },
            }))
          }
        />

        <DropdownPicker
          number={3}
          label="Decision complexity for this work"
          hint="Rules vs. judgment shapes what the InstaWorker can own vs. assist with."
          options={DECISION_COMPLEXITY_OPTIONS}
          value={state.workflow.decisionComplexity}
          onChange={(v) =>
            setState((s) => ({
              ...s,
              workflow: { ...s.workflow, decisionComplexity: v as DecisionComplexity },
            }))
          }
        />

        <DropdownPicker
          number={4}
          label="Where the output lands"
          hint="Where the completed work needs to end up."
          options={meta.outputOptions}
          value={state.workflow.outputDestination}
          onChange={(v) =>
            setState((s) => ({
              ...s,
              workflow: { ...s.workflow, outputDestination: v },
            }))
          }
        />
      </div>

      <button onClick={next} disabled={!canContinue} className="btn-primary mt-10">
        Continue
        <span aria-hidden>→</span>
      </button>
    </motion.div>
  );
}

interface PickerProps {
  number: number;
  label: string;
  hint: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}

function DropdownPicker({ number, label, hint, options, value, onChange }: PickerProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-1">
        <span className="text-ink-faint mr-2 font-mono">{number}.</span>
        {label}
      </label>
      <p className="text-xs text-ink-muted mb-2 ml-5">{hint}</p>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none px-4 py-3 pr-10 bg-paper-card rounded-lg border border-ink/10
                     text-ink text-base
                     focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
                     transition-shadow duration-150 cursor-pointer"
        >
          <option value="">Choose one…</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none">▾</span>
      </div>
    </div>
  );
}
