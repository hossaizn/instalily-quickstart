import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Brand from '../components/Brand';
import ProgressDots from '../components/ProgressDots';
import ScreenHome from '../components/quickstart/ScreenHome';
import ScreenWorkflow from '../components/quickstart/ScreenWorkflow';
import ScreenContext from '../components/quickstart/ScreenContext';
import ScreenGenerating from '../components/quickstart/ScreenGenerating';
import ScreenSpec from '../components/quickstart/ScreenSpec';
import { loadState, saveState, clearState } from '../lib/storage';
import { generateSpec } from '../lib/templates';
import { initialState } from '../lib/types';

export default function Quickstart() {
  const [state, setState] = useState(() => loadState());

  // Persist state across refresh.
  useEffect(() => {
    saveState(state);
  }, [state]);

  // Scroll to top on screen change.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [state.step]);

  const clamp = (n: number): 1 | 2 | 3 | 4 | 5 => {
    const v = Math.max(1, Math.min(5, n));
    return v as 1 | 2 | 3 | 4 | 5;
  };

  const goTo = (step: 1 | 2 | 3 | 4 | 5) =>
    setState((s) => ({ ...s, step }));

  const next = () => goTo(clamp(state.step + 1));
  const back = () => goTo(clamp(state.step - 1));

  const restart = () => {
    clearState();
    setState({ ...initialState });
  };

  const spec = useMemo(() => generateSpec(state), [state]);

  return (
    <div className="min-h-screen bg-paper">
      <Brand showBackToHub />

      {state.step < 5 && (
        <div className="container-wide pt-6">
          <ProgressDots current={state.step} total={5} />
        </div>
      )}

      <main>
        <AnimatePresence mode="wait">
          {state.step === 1 && (
            <ScreenHome key="s1" state={state} setState={setState} next={next} />
          )}
          {state.step === 2 && (
            <ScreenWorkflow key="s2" state={state} setState={setState} next={next} back={back} />
          )}
          {state.step === 3 && (
            <ScreenContext key="s3" state={state} setState={setState} next={next} back={back} />
          )}
          {state.step === 4 && <ScreenGenerating key="s4" next={next} />}
          {state.step === 5 && <ScreenSpec key="s5" state={state} spec={spec} restart={restart} />}
        </AnimatePresence>
      </main>
    </div>
  );
}
