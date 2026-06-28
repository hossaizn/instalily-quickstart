import type { QuickstartState, SpecOutput, TemplateKey, CompanySize } from './types';

interface TemplateBase {
  workerName: string;
  tagline: string;
  defaultBrainModules: { name: string; sources: string[] }[];
  workflowFn: (state: QuickstartState) => { title: string; detail: string }[];
  fallbackTask: string;
  fallbackDataSource: string;
  fallbackOutput: string;
}

const TEMPLATES: Record<TemplateKey, TemplateBase> = {
  parts: {
    workerName: 'Parts InstaWorker',
    tagline: 'Quotes built, cross-references resolved, customer follow-ups sent. Overnight.',
    defaultBrainModules: [
      { name: 'Parts Catalog Brain', sources: ['SKU master', 'cross-reference tables', 'OEM substitutions'] },
      { name: 'Customer Pricing Brain', sources: ['contract pricing', 'tier matrices', 'volume agreements'] },
      { name: 'Inventory Position Brain', sources: ['warehouse stock', 'incoming POs', 'allocation rules'] },
    ],
    fallbackTask: 'Building quotes from inbound part requests',
    fallbackDataSource: 'ERP catalog + customer-specific pricing',
    fallbackOutput: 'Quote PDF sent to customer; line items written to ERP',
    workflowFn: (s) => [
      {
        title: 'Read the request',
        detail: `Pulls the inbound request (${s.workflow.dataSource || 'email + ERP'}), extracts part numbers, customer ID, qty.`,
      },
      {
        title: 'Resolve and price',
        detail: `Cross-references SKUs, applies customer-specific pricing tiers, checks inventory position. Flags substitutions when primary is out.`,
      },
      {
        title: 'Draft and route',
        detail: `Drafts the quote in your existing system, attaches to the customer record, queues it for human approval if margin is below your threshold.`,
      },
    ],
  },
  claims: {
    workerName: 'Claims InstaWorker',
    tagline: 'First-pass claim review with the same logic your senior adjusters use. Audit trail attached.',
    defaultBrainModules: [
      { name: 'Policy Rules Brain', sources: ['policy documents', 'coverage matrices', 'state-specific addenda'] },
      { name: 'Adjuster Heuristics Brain', sources: ['past claim decisions', 'reviewer notes', 'denial rationale library'] },
      { name: 'Vendor Network Brain', sources: ['preferred vendor list', 'historical pricing', 'capacity windows'] },
    ],
    fallbackTask: 'Triaging inbound claims and surfacing review-ready summaries',
    fallbackDataSource: 'claim intake form + policy database',
    fallbackOutput: 'Claim summary + recommended action written to the adjuster\'s queue',
    workflowFn: (s) => [
      {
        title: 'Parse intake',
        detail: `Pulls structured fields from ${s.workflow.dataSource || 'the intake form, FNOL, attached documents'}, populates the claim record.`,
      },
      {
        title: 'Apply policy + heuristics',
        detail: `Runs coverage logic against the policy, applies the patterns your senior adjusters use, generates a recommended action with rationale.`,
      },
      {
        title: 'Route with context',
        detail: `${s.workflow.output || 'Pushes a triage summary to the adjuster\'s queue'} with confidence score and the specific document references the decision was based on.`,
      },
    ],
  },
  service: {
    workerName: 'Field Service InstaWorker',
    tagline: 'Dispatch decisions made before the phone rings. Parts pre-staged. Tech briefed.',
    defaultBrainModules: [
      { name: 'Equipment History Brain', sources: ['service tickets', 'install records', 'warranty status'] },
      { name: 'Dispatch Logic Brain', sources: ['tech skills matrix', 'route windows', 'SLA commitments'] },
      { name: 'Parts Availability Brain', sources: ['warehouse stock', 'truck stock', 'transfer windows'] },
    ],
    fallbackTask: 'Triaging service requests and dispatching the right technician',
    fallbackDataSource: 'customer call notes + equipment service history',
    fallbackOutput: 'Dispatched work order with technician, ETA, and parts list',
    workflowFn: (s) => [
      {
        title: 'Diagnose from context',
        detail: `Reads ${s.workflow.dataSource || 'inbound call notes + equipment history'}, infers likely root cause from past tickets on similar units, surfaces the 2-3 most probable causes.`,
      },
      {
        title: 'Match tech and parts',
        detail: `Picks the technician whose skills, location, and route window fit best. Pre-stages parts based on the diagnosis confidence band.`,
      },
      {
        title: 'Dispatch and brief',
        detail: `${s.workflow.output || 'Writes the dispatch to your FSM'}, sends the tech a briefing with equipment history and likely causes ranked.`,
      },
    ],
  },
  quote: {
    workerName: 'Quote Builder InstaWorker',
    tagline: 'Configured, priced, and reviewed in the time it used to take to find the spec sheet.',
    defaultBrainModules: [
      { name: 'Product Configuration Brain', sources: ['BOMs', 'config rules', 'compatibility matrices'] },
      { name: 'Commercial Terms Brain', sources: ['customer contract terms', 'discount approval matrix', 'historical accepted margins'] },
      { name: 'Lead Time Brain', sources: ['production calendar', 'supplier lead times', 'queue position'] },
    ],
    fallbackTask: 'Turning customer requirements into a configured, priced quote',
    fallbackDataSource: 'sales notes + product configuration system',
    fallbackOutput: 'Quote document ready for the AE to send',
    workflowFn: (s) => [
      {
        title: 'Read the ask',
        detail: `Extracts requirements from ${s.workflow.dataSource || 'the rep\'s notes or the customer email'}, maps them to your product taxonomy.`,
      },
      {
        title: 'Configure and price',
        detail: `Builds a valid configuration against your BOM rules, applies the customer\'s commercial terms, calculates a margin-defensible price with rationale.`,
      },
      {
        title: 'Hand off for review',
        detail: `${s.workflow.output || 'Drafts the quote document'} and flags anything that needs an AE\'s judgment (discount approvals, non-standard terms, lead-time risk).`,
      },
    ],
  },
};

function detectTemplate(state: QuickstartState): TemplateKey {
  if (state.template) return state.template;
  const blob = `${state.role} ${state.workflow.task}`.toLowerCase();
  if (/(claim|adjust|insurance|policy|fnol)/.test(blob)) return 'claims';
  if (/(service|tech|dispatch|repair|field|technician)/.test(blob)) return 'service';
  if (/(quote|proposal|configur|cpq|estimate)/.test(blob)) return 'quote';
  return 'parts';
}

function roiForSize(size: CompanySize | ''): SpecOutput['roi'] {
  switch (size) {
    case 'under-50':
      return { hoursPerWeek: '6–12 hrs/week per rep', accuracyClaim: '~85% straight-through on first 30 days', rampWeeks: '2–3 weeks' };
    case '50-200':
      return { hoursPerWeek: '15–30 hrs/week across the team', accuracyClaim: '~90% straight-through after the first 60 days', rampWeeks: '3–4 weeks' };
    case '200-1000':
      return { hoursPerWeek: '40–80 hrs/week across the team', accuracyClaim: '~92% straight-through after the first 90 days', rampWeeks: '4–6 weeks' };
    case '1000-5000':
      return { hoursPerWeek: '120+ hrs/week across the team', accuracyClaim: '~93% straight-through, with senior-only escalation on edge cases', rampWeeks: '6–8 weeks' };
    case 'over-5000':
      return { hoursPerWeek: '300+ hrs/week across the team', accuracyClaim: '~94% straight-through; remaining work is consolidated for senior review', rampWeeks: '6–10 weeks per vertical' };
    default:
      return { hoursPerWeek: '~20 hrs/week per team using it', accuracyClaim: '~90% straight-through after ramp', rampWeeks: '3–5 weeks' };
  }
}

function deriveIntegrations(state: QuickstartState): string[] {
  const picked = state.context.tools.filter(Boolean);
  if (picked.length > 0) return picked;
  return ['Your existing ERP', 'Email', 'CRM of record'];
}

export function generateSpec(state: QuickstartState): SpecOutput {
  const key = detectTemplate(state);
  const t = TEMPLATES[key];
  return {
    workerName: t.workerName,
    tagline: t.tagline,
    workflowSteps: t.workflowFn({
      ...state,
      workflow: {
        task: state.workflow.task || t.fallbackTask,
        dataSource: state.workflow.dataSource || t.fallbackDataSource,
        output: state.workflow.output || t.fallbackOutput,
      },
    }),
    brainModules: t.defaultBrainModules,
    integrations: deriveIntegrations(state),
    roi: roiForSize(state.context.companySize),
    riskNote:
      'Numbers above are directional, based on InstaLILY case study patterns and standard distribution-software benchmarks. Final scoping requires looking at your actual workflows, data quality, and edge-case volume.',
  };
}

export const TEMPLATE_OPTIONS: { key: TemplateKey; label: string; example: string }[] = [
  { key: 'parts', label: 'Parts Distribution', example: 'Counter rep, quote desk, ops manager' },
  { key: 'claims', label: 'Claims & Adjudication', example: 'Adjuster, claims analyst, intake' },
  { key: 'service', label: 'Field Service', example: 'Dispatcher, service manager, planner' },
  { key: 'quote', label: 'Quote / Proposal Building', example: 'Sales engineer, AE, estimator' },
];
