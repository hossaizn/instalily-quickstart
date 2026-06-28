import { motion } from 'framer-motion';
import { TEMPLATE_OPTIONS } from '../../lib/templates';
import type { QuickstartState, TemplateKey } from '../../lib/types';

interface Props {
  state: QuickstartState;
  setState: React.Dispatch<React.SetStateAction<QuickstartState>>;
  next: () => void;
}

export default function ScreenHome({ state, setState, next }: Props) {
  const canContinue = state.role.trim().length > 1 || state.template !== null;

  const pickTemplate = (key: TemplateKey) => {
    setState((s) => ({ ...s, template: key }));
    setTimeout(next, 150);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="container-prose py-12 md:py-20"
    >
      <p className="label mb-4">For frontline operators</p>
      <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] mb-5">
        What could an AI teammate do in your role?
      </h1>
      <p className="text-lg text-ink-soft leading-relaxed mb-10">
        60 seconds. No signup. You'll get a draft InstaWorker spec built around your actual workflow — something you can show your boss.
      </p>

      <label className="block mb-2 text-sm font-medium text-ink-soft" htmlFor="role">
        Your role
      </label>
      <input
        id="role"
        type="text"
        autoFocus
        value={state.role}
        onChange={(e) => setState((s) => ({ ...s, role: e.target.value, template: null }))}
        placeholder="e.g. Parts Manager at a distributor"
        className="w-full px-4 py-3.5 bg-paper-card rounded-lg border border-ink/10
                   text-ink placeholder:text-ink-faint
                   focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
                   transition-shadow duration-150"
      />

      <button
        onClick={next}
        disabled={!canContinue}
        className="btn-primary mt-4 w-full md:w-auto"
      >
        Continue
        <span aria-hidden>→</span>
      </button>

      <div className="mt-14">
        <p className="label mb-4">Or start from a template</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TEMPLATE_OPTIONS.map((opt) => {
            const active = state.template === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => pickTemplate(opt.key)}
                className={[
                  'card p-5 text-left transition-all duration-150',
                  active
                    ? 'ring-2 ring-accent shadow-md'
                    : 'hover:ring-ink/20 hover:shadow-sm',
                ].join(' ')}
              >
                <div className="font-serif text-lg font-semibold text-ink">{opt.label}</div>
                <div className="text-sm text-ink-muted mt-1">{opt.example}</div>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
