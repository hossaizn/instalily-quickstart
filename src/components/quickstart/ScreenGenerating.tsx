import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  next: () => void;
}

const STEPS = [
  'Reading your workflow…',
  'Matching to InstaWorker capabilities…',
  'Mapping InstaBrain modules…',
  'Drafting your spec.',
];

export default function ScreenGenerating({ next }: Props) {
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIdx((i) => (i < STEPS.length - 1 ? i + 1 : i));
    }, 700);
    const done = setTimeout(next, 3200);
    return () => {
      clearInterval(interval);
      clearTimeout(done);
    };
  }, [next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container-prose py-32 text-center"
    >
      <div className="flex justify-center mb-10">
        <div className="relative w-12 h-12">
          <motion.span
            className="absolute inset-0 rounded-full bg-accent/20"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="absolute inset-3 rounded-full bg-accent" />
        </div>
      </div>

      <ul className="space-y-3 text-base text-ink-soft inline-block text-left">
        {STEPS.map((s, i) => (
          <motion.li
            key={i}
            className="flex items-center gap-3"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: i <= stepIdx ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className={[
                'w-1.5 h-1.5 rounded-full',
                i < stepIdx ? 'bg-ink' : i === stepIdx ? 'bg-accent' : 'bg-ink/20',
              ].join(' ')}
            />
            <span className={i === stepIdx ? 'text-ink font-medium' : ''}>{s}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
