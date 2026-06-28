import { motion } from 'framer-motion';
import type { QuickstartState, CompanySize, Vertical } from '../../lib/types';

interface Props {
  state: QuickstartState;
  setState: React.Dispatch<React.SetStateAction<QuickstartState>>;
  next: () => void;
  back: () => void;
}

const SIZES: { value: CompanySize; label: string }[] = [
  { value: 'under-50', label: 'Under 50' },
  { value: '50-200', label: '50 – 200' },
  { value: '200-1000', label: '200 – 1,000' },
  { value: '1000-5000', label: '1,000 – 5,000' },
  { value: 'over-5000', label: 'Over 5,000' },
];

const VERTICALS: { value: Vertical; label: string }[] = [
  { value: 'industrial-distribution', label: 'Industrial Distribution' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'automotive', label: 'Automotive' },
  { value: 'other', label: 'Other' },
];

const COMMON_TOOLS = [
  'Salesforce',
  'NetSuite',
  'ServiceMax',
  'SAP',
  'Microsoft Dynamics',
  'HubSpot',
  'Email (Outlook / Gmail)',
  'Slack',
  'Custom ERP',
];

export default function ScreenContext({ state, setState, next, back }: Props) {
  const toggleTool = (tool: string) => {
    setState((s) => ({
      ...s,
      context: {
        ...s.context,
        tools: s.context.tools.includes(tool)
          ? s.context.tools.filter((t) => t !== tool)
          : [...s.context.tools, tool],
      },
    }));
  };

  const canContinue = state.context.companySize !== '' && state.context.vertical !== '';

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

      <p className="label mb-3">Step 3 of 5</p>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
        A few specifics so the spec fits your shop.
      </h2>
      <p className="text-base text-ink-soft mb-10 leading-relaxed">
        These shape the ROI estimate and the integration suggestions.
      </p>

      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-ink mb-3">
            Company size <span className="text-ink-faint">(people)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {SIZES.map((s) => (
              <button
                key={s.value}
                onClick={() =>
                  setState((st) => ({ ...st, context: { ...st.context, companySize: s.value } }))
                }
                className={[
                  'chip-interactive',
                  state.context.companySize === s.value
                    ? '!bg-ink !text-paper !ring-ink'
                    : '',
                ].join(' ')}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-3">Industry vertical</label>
          <div className="flex flex-wrap gap-2">
            {VERTICALS.map((v) => (
              <button
                key={v.value}
                onClick={() =>
                  setState((st) => ({ ...st, context: { ...st.context, vertical: v.value } }))
                }
                className={[
                  'chip-interactive',
                  state.context.vertical === v.value
                    ? '!bg-ink !text-paper !ring-ink'
                    : '',
                ].join(' ')}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-3">
            Tools you use today <span className="text-ink-faint">(pick any)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {COMMON_TOOLS.map((tool) => {
              const on = state.context.tools.includes(tool);
              return (
                <button
                  key={tool}
                  onClick={() => toggleTool(tool)}
                  className={['chip-interactive', on ? '!bg-ink !text-paper !ring-ink' : ''].join(' ')}
                >
                  {tool}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <button onClick={next} disabled={!canContinue} className="btn-primary mt-10">
        Generate my spec
        <span aria-hidden>→</span>
      </button>
    </motion.div>
  );
}
