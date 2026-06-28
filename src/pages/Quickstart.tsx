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

  useEffect(() => {
    saveState(state);
  }, [state]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [state.step]);

  const clamp = (n: number): 1 | 2 | 3 | 4 | 5 => {
    const v = Math.max(1, Math.min(5, n));
    return v as 1 | 2 | 3 | 4 | 5;
  };

  const goTo = (step: 1 | 2 | 3 | 4 | 5) => setState((s) => ({ ...s, step }));
  const next = () => goTo(clamp(state.step + 1));
  const back = () => goTo(clamp(state.step - 1));

  const restart = () => {
    clearState();
    setState({ ...initialState });
  };

  // Only generate when archetype is set (avoids throwing on step 1 before pick).
  const spec = useMemo(
    () => (state.archetype ? generateSpec(state) : null),
    [state]
  );

  // Progress dots only show on the 3 user-input steps.
  const showDots = state.step <= 3;

  return (
    <div className="min-h-screen bg-paper">
      <Brand showBackToHub />

      {showDots && (
        <div className="container-wide pt-6">
          <ProgressDots current={state.step} total={3} />
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
          {state.step === 5 && spec && (
            <ScreenSpec key="s5" state={state} spec={spec} restart={restart} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
