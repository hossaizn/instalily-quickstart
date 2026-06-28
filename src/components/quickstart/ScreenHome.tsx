import { motion } from 'framer-motion';
import { ARCHETYPES } from '../../lib/templates';
import type { QuickstartState, Archetype } from '../../lib/types';

interface Props {
  state: QuickstartState;
  setState: React.Dispatch<React.SetStateAction<QuickstartState>>;
  next: () => void;
}

export default function ScreenHome({ state, setState, next }: Props) {
  const pick = (key: Archetype) => {
    setState((s) => ({ ...s, archetype: key }));
    setTimeout(next, 180);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="container-wide py-12 md:py-20"
    >
      <div className="max-w-prose">
        <p className="label mb-4">For frontline operators</p>
        <h1 className="text-4xl md:text-5xl font-semibold leading-[1.05] mb-5">
          What could an AI teammate do in your role?
        </h1>
        <p className="text-lg text-ink-soft leading-relaxed mb-10">
          Sixty seconds. Four clicks. You'll get a draft InstaWorker spec built from your actual workflow — something you can show your boss.
        </p>
      </div>

      <p className="label mb-4">Pick the role closest to yours</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ARCHETYPES.map((arch) => {
          const active = state.archetype === arch.key;
          return (
            <button
              key={arch.key}
              onClick={() => pick(arch.key)}
              className={[
                'card text-left p-6 transition-all duration-150 group',
                active
                  ? 'ring-2 ring-accent shadow-md'
                  : 'hover:ring-ink/20 hover:shadow-md hover:-translate-y-0.5',
              ].join(' ')}
            >
              <div className="font-serif text-xl font-semibold text-ink mb-1.5">
                {arch.cardTitle}
              </div>
              <div className="text-sm text-ink-soft leading-relaxed mb-3">
                {arch.cardLine}
              </div>
              <div className="text-xs text-ink-muted">{arch.cardExamples}</div>
            </button>
          );
        })}
      </div>

      <p className="text-xs text-ink-muted mt-8 max-w-prose leading-relaxed">
        Your archetype picks the right set of follow-up questions. Each pathway is tailored — Parts Counter doesn't see Claims-shaped prompts.
      </p>
    </motion.div>
  );
}
