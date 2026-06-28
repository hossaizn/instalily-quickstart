import type {
  Archetype,
  BrainModule,
  ComparableBenchmark,
  DiscoveryItem,
  QuickstartState,
  SpecOutput,
  WorkflowStep,
  DataState,
  DecisionComplexity,
  Frequency,
  TeamSize,
} from './types';

// ---------------------------------------------------------------------------
// Archetype catalog
// ---------------------------------------------------------------------------

interface ArchetypeMeta {
  key: Archetype;
  cardTitle: string;
  cardLine: string;
  cardExamples: string;
  workerName: string;
  tagline: string;
  brainModules: BrainModule[];
  taskOptions: { value: string; label: string }[];
  outputOptions: { value: string; label: string }[];
}

export const ARCHETYPES: ArchetypeMeta[] = [
  {
    key: 'parts',
    cardTitle: 'Parts Counter Lead',
    cardLine: 'Industrial distribution. Quotes, cross-references, customer follow-up.',
    cardExamples: 'Distributors · Wholesalers · MRO supply',
    workerName: 'Parts InstaWorker',
    tagline: 'Quotes built, cross-references resolved, customer follow-ups sent. Overnight.',
    brainModules: [
      { name: 'Parts Catalog Brain', sources: ['SKU master', 'cross-reference tables', 'OEM substitutions'] },
      { name: 'Customer Pricing Brain', sources: ['contract pricing', 'tier matrices', 'volume agreements'] },
      { name: 'Inventory Position Brain', sources: ['warehouse stock', 'incoming POs', 'allocation rules'] },
    ],
    taskOptions: [
      { value: 'quoting', label: 'Building quotes from inbound part requests' },
      { value: 'crossref', label: 'Cross-referencing OEM substitutions when stock is short' },
      { value: 'followup', label: 'Following up on quoted orders that never came back' },
      { value: 'reconciling', label: 'Reconciling invoice discrepancies and credit memos' },
      { value: 'pricing-check', label: 'Pricing checks against contract terms' },
    ],
    outputOptions: [
      { value: 'quote-erp', label: 'Quote PDF emailed to customer + line items written to ERP' },
      { value: 'sales-order', label: 'Sales order entered directly into ERP' },
      { value: 'inventory-route', label: 'Routed to ops team for inventory check' },
      { value: 'price-hold', label: 'Held for next customer interaction (price approved)' },
    ],
  },
  {
    key: 'claims',
    cardTitle: 'Claims Analyst',
    cardLine: 'Insurance / healthcare. FNOL triage, coverage decisions, vendor routing.',
    cardExamples: 'P&C insurance · Healthcare claims · TPAs',
    workerName: 'Claims InstaWorker',
    tagline: 'First-pass review with the same logic your senior adjusters use. Audit trail attached.',
    brainModules: [
      { name: 'Policy Rules Brain', sources: ['policy documents', 'coverage matrices', 'state-specific addenda'] },
      { name: 'Adjuster Heuristics Brain', sources: ['past claim decisions', 'reviewer notes', 'denial rationale library'] },
      { name: 'Vendor Network Brain', sources: ['preferred vendor list', 'historical pricing', 'capacity windows'] },
    ],
    taskOptions: [
      { value: 'triage', label: 'First-pass triage of new claims (FNOL)' },
      { value: 'coverage', label: 'Coverage interpretation against the policy' },
      { value: 'vendor', label: 'Vendor / repair shop assignment' },
      { value: 'docs', label: 'Documentation review for completeness' },
      { value: 'subro', label: 'Subrogation eligibility checks' },
    ],
    outputOptions: [
      { value: 'queue-summary', label: "Triage summary routed into adjuster's queue" },
      { value: 'coverage-letter', label: 'Coverage decision into claims system + customer letter' },
      { value: 'vendor-dispatch', label: 'Vendor dispatch + customer notification' },
      { value: 'escalation', label: 'Escalated to senior adjuster for review' },
    ],
  },
  {
    key: 'service',
    cardTitle: 'Service Dispatcher',
    cardLine: 'Field service. Diagnosis, tech matching, parts staging, ETAs.',
    cardExamples: 'HVAC · Equipment service · Facilities maintenance',
    workerName: 'Field Service InstaWorker',
    tagline: 'Dispatch decisions made before the phone rings. Parts pre-staged. Tech briefed.',
    brainModules: [
      { name: 'Equipment History Brain', sources: ['service tickets', 'install records', 'warranty status'] },
      { name: 'Dispatch Logic Brain', sources: ['tech skills matrix', 'route windows', 'SLA commitments'] },
      { name: 'Parts Availability Brain', sources: ['warehouse stock', 'truck stock', 'transfer windows'] },
    ],
    taskOptions: [
      { value: 'diagnose', label: 'Diagnosing service requests from customer descriptions' },
      { value: 'match-tech', label: 'Matching technicians to job + parts requirements' },
      { value: 'reschedule', label: 'Rescheduling jobs when techs run over' },
      { value: 'emergency', label: 'Triaging emergency vs. routine' },
      { value: 'parts-stage', label: 'Managing parts pre-staging on trucks' },
    ],
    outputOptions: [
      { value: 'work-order', label: 'Dispatched work order with tech + ETA + parts list' },
      { value: 'customer-notify', label: 'Customer notification with confirmed ETA' },
      { value: 'fsm-update', label: 'Updated route in the FSM (ServiceMax / Salesforce Service Cloud)' },
      { value: 'manager-escalation', label: 'Escalated to service manager for judgment' },
    ],
  },
  {
    key: 'quote',
    cardTitle: 'Quote Builder',
    cardLine: 'Sales engineering. Configuration, pricing, lead times, approvals.',
    cardExamples: 'CPQ teams · Sales engineers · Estimators',
    workerName: 'Quote Builder InstaWorker',
    tagline: 'Configured, priced, and reviewed in the time it used to take to find the spec sheet.',
    brainModules: [
      { name: 'Product Configuration Brain', sources: ['BOMs', 'config rules', 'compatibility matrices'] },
      { name: 'Commercial Terms Brain', sources: ['customer contract terms', 'discount matrix', 'historical accepted margins'] },
      { name: 'Lead Time Brain', sources: ['production calendar', 'supplier lead times', 'queue position'] },
    ],
    taskOptions: [
      { value: 'config', label: 'Translating customer requirements into a product configuration' },
      { value: 'pricing', label: 'Pricing the configured solution' },
      { value: 'leadtime', label: 'Checking lead times and stock availability' },
      { value: 'document', label: 'Drafting the formal quote document' },
      { value: 'approval', label: 'Routing for discount approval' },
    ],
    outputOptions: [
      { value: 'ae-review', label: 'Quote document sent to AE for review' },
      { value: 'cpq', label: 'Drafted directly in the CPQ system' },
      { value: 'bom-erp', label: 'Configured BOM written to ERP' },
      { value: 'customer-revision', label: 'Held for customer revisions' },
    ],
  },
];

export function archetypeMeta(key: Archetype): ArchetypeMeta {
  return ARCHETYPES.find((a) => a.key === key)!;
}

// ---------------------------------------------------------------------------
// Shared dropdown option lists
// ---------------------------------------------------------------------------

export const DATA_STATE_OPTIONS: { value: DataState; label: string }[] = [
  { value: 'digital-in-system', label: 'Already digital, in our system of record' },
  { value: 'digital-in-email', label: 'Digital but arriving in email or PDF attachments' },
  { value: 'mixed-digital-phone', label: 'Mixed — digital plus phone calls or notes' },
  { value: 'mostly-phone-paper', label: 'Mostly phone calls, paper, or in-person' },
];

export const DECISION_COMPLEXITY_OPTIONS: { value: DecisionComplexity; label: string }[] = [
  { value: 'mostly-rule-based', label: 'Mostly rule-based (apply policy / rules / pricing)' },
  { value: 'mostly-judgment', label: 'Mostly judgment (case-by-case, relationship-driven)' },
  { value: 'mixed-with-override', label: 'Mixed — rules with human override on edge cases' },
];

export const FREQUENCY_OPTIONS: { value: Frequency; label: string }[] = [
  { value: 'hundreds-daily', label: 'Hundreds daily' },
  { value: 'tens-daily', label: 'Tens daily' },
  { value: 'daily', label: 'A few daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'less-than-weekly', label: 'Less than weekly' },
];

export const TEAM_SIZE_OPTIONS: { value: TeamSize; label: string }[] = [
  { value: 'solo', label: 'Just me' },
  { value: 'small', label: '2 – 5 people' },
  { value: 'mid', label: '6 – 20 people' },
  { value: 'large', label: '20+ people' },
];

// ---------------------------------------------------------------------------
// Workflow narrative generator (uses ALL the inputs)
// ---------------------------------------------------------------------------

function labelFor(opts: { value: string; label: string }[], value: string): string {
  return opts.find((o) => o.value === value)?.label ?? '';
}

function dataStateNarrative(s: DataState | ''): string {
  switch (s) {
    case 'digital-in-system':
      return 'pulls directly from your system of record';
    case 'digital-in-email':
      return 'parses inbound email and PDF attachments';
    case 'mixed-digital-phone':
      return 'consolidates digital records and call notes';
    case 'mostly-phone-paper':
      return 'works against transcribed call notes (with a recommended digitization step)';
    default:
      return 'reads the inbound data';
  }
}

function decisionNarrative(d: DecisionComplexity | ''): string {
  switch (d) {
    case 'mostly-rule-based':
      return 'runs the same rules a senior person on your team would, end to end';
    case 'mostly-judgment':
      return 'drafts a recommended action with rationale; a human reviews before acting';
    case 'mixed-with-override':
      return 'auto-completes the rule-based portion and surfaces the judgment cases for human review';
    default:
      return 'applies your decision logic';
  }
}

function buildWorkflowSteps(state: QuickstartState): WorkflowStep[] {
  if (!state.archetype) return [];
  const meta = archetypeMeta(state.archetype);
  const taskLabel = labelFor(meta.taskOptions, state.workflow.task) || 'this workflow';
  const outputLabel = labelFor(meta.outputOptions, state.workflow.outputDestination) || 'completed work';

  return [
    {
      title: 'Read the request',
      detail: `For "${taskLabel.toLowerCase()}", the InstaWorker ${dataStateNarrative(state.workflow.dataState)}, extracts the structured fields, and populates the working record.`,
    },
    {
      title: 'Reason about it',
      detail: `It ${decisionNarrative(state.workflow.decisionComplexity)}, citing the specific rules and historical patterns its decision was based on.`,
    },
    {
      title: 'Hand off cleanly',
      detail: `Output goes where you expect it: ${outputLabel.toLowerCase()}. Every action lands with an audit trail, so your team can spot-check at any point.`,
    },
  ];
}

// ---------------------------------------------------------------------------
// Comparable benchmark scorer
// SRS Distribution case study is the only publicly verifiable InstaLILY benchmark.
// We grade the user's situation by how structurally similar it is to SRS.
// ---------------------------------------------------------------------------

const SRS_CASE = {
  name: 'SRS Distribution',
  sourceUrl: 'https://www.mdm.com/article/technology/ai/how-srs-distribution-and-instalily-are-rewiring-growth-with-ai/',
  headline: 'Quote turnaround from 6 days to minutes. ~10% revenue uplift on parts business. Published with InstaLILY.',
};

function scoreSimilarityToSRS(state: QuickstartState): number {
  let score = 0;
  // SRS was parts distribution / quote building
  if (state.archetype === 'parts') score += 2;
  else if (state.archetype === 'quote') score += 1;
  // SRS was digital in ERP
  if (state.workflow.dataState === 'digital-in-system') score += 1;
  else if (state.workflow.dataState === 'digital-in-email') score += 0.5;
  // SRS was rule-based with override
  if (state.workflow.decisionComplexity === 'mostly-rule-based') score += 1;
  else if (state.workflow.decisionComplexity === 'mixed-with-override') score += 1;
  // SRS was high-volume
  if (state.context.frequency === 'hundreds-daily') score += 1;
  else if (state.context.frequency === 'tens-daily') score += 0.5;
  // SRS is mid-large distributor
  if (state.context.companySize === '200-1000' || state.context.companySize === '1000-5000' || state.context.companySize === 'over-5000') score += 1;
  // SRS is industrial distribution
  if (state.context.vertical === 'industrial-distribution') score += 1;
  return score;
}

function buildBenchmark(state: QuickstartState): ComparableBenchmark {
  const score = scoreSimilarityToSRS(state);
  const matchLevel: ComparableBenchmark['matchLevel'] = score >= 5 ? 'high' : score >= 2.5 ? 'partial' : 'low';

  const meta = state.archetype ? archetypeMeta(state.archetype) : null;
  const archetypeLabel = meta ? meta.cardTitle : 'your role';

  const reasoning = matchReasoning(state, archetypeLabel)[matchLevel];
  const whatThisMeans = whatItMeans(state)[matchLevel];

  return {
    matchLevel,
    matchScore: score,
    reasoning,
    citedCase: SRS_CASE,
    whatThisMeansForYou: whatThisMeans,
  };
}

function matchReasoning(
  state: QuickstartState,
  archetypeLabel: string
): Record<ComparableBenchmark['matchLevel'], string> {
  const dataStateLabel = labelFor(DATA_STATE_OPTIONS, state.workflow.dataState).toLowerCase();
  const decisionLabel = labelFor(DECISION_COMPLEXITY_OPTIONS, state.workflow.decisionComplexity).toLowerCase();

  return {
    high: `Your workflow shape — ${archetypeLabel}, ${dataStateLabel}, ${decisionLabel} — overlaps meaningfully with the published SRS Distribution deployment. Both are digital, structured, repeatable work where rules carry most of the decision.`,
    partial: `Your workflow shares some shape with the SRS case (mostly: ${dataStateLabel}), but the archetype and decision pattern are different enough that the published numbers won't transfer one-to-one.`,
    low: `The public case study (SRS Distribution) is high-volume rule-based parts work running in ERP. Your workflow is a different shape — ${archetypeLabel.toLowerCase()}, ${dataStateLabel}, ${decisionLabel}. Different shape calls for a different reference deployment.`,
  };
}

function whatItMeans(
  state: QuickstartState
): Record<ComparableBenchmark['matchLevel'], string> {
  const workerName = state.archetype ? archetypeMeta(state.archetype).workerName : 'a vertical InstaWorker';

  return {
    high: `The SRS numbers (6 days to minutes, ~10% revenue uplift) are a defensible directional reference for what's possible on your workflow. Discovery would still calibrate against your actual volumes and data quality, but you'd start from a strong reference, not a cold guess.`,
    partial: `The SRS case gives directional intuition for what's possible with a vertical InstaWorker, but the closer comparable would be an InstaLILY deployment that matches your archetype and your volume. That customer exists inside InstaLILY's account list — discovery would surface them as your real baseline.`,
    low: `This is exactly the structural argument for InstaWorkers being vertical-specific. A ${workerName} is built differently than a Parts InstaWorker — the relevant benchmark is a customer running your shape, not the published case. That comparable lives inside InstaLILY's deployments. Discovery would identify it and use those numbers as the baseline.`,
  };
}

// ---------------------------------------------------------------------------
// Discovery questions (real metrics a PM would actually ask)
// ---------------------------------------------------------------------------

function buildDiscoveryItems(state: QuickstartState): DiscoveryItem[] {
  const base: DiscoveryItem[] = [];
  if (!state.archetype) return base;

  // Universal questions every engagement would ask
  base.push({
    metric: 'Baseline cycle time per request, today (in minutes)',
    whyItMatters: 'Without this number, no time-saved claim is defensible. It\'s the denominator for every ROI calculation.',
  });

  base.push({
    metric: 'Current error / rework rate on this workflow',
    whyItMatters: 'Tells us whether the bottleneck is speed or quality. Different bottleneck = different InstaWorker shape.',
  });

  base.push({
    metric: 'Aggregate hours your team spends on this work per week',
    whyItMatters: 'Required to translate a per-request time saving into a team-level ROI number.',
  });

  // Archetype-specific question
  const archetypeSpecific: Record<Archetype, DiscoveryItem> = {
    parts: {
      metric: 'Quote-to-order conversion rate today + % of quotes you never follow up on',
      whyItMatters: 'The biggest InstaWorker lever in parts is recovering abandoned quotes — but only if there\'s a meaningful abandonment rate to recover.',
    },
    claims: {
      metric: 'Auto-adjudication rate today, and senior-adjuster escalation rate',
      whyItMatters: 'Tells us the realistic ceiling for straight-through automation in your specific policy mix.',
    },
    service: {
      metric: 'First-time-fix rate today + average reschedule rate',
      whyItMatters: 'Service automation\'s value depends entirely on whether better diagnosis up-front reduces truck-rolls. These two metrics measure that.',
    },
    quote: {
      metric: 'Quote turnaround time, and % of quotes requiring discount-approval cycles',
      whyItMatters: 'Approval cycle drag is often the biggest win, not the spec-writing itself. Worth measuring separately.',
    },
  };

  base.push(archetypeSpecific[state.archetype]);

  // Variance question if they picked judgment-heavy
  if (state.workflow.decisionComplexity === 'mostly-judgment') {
    base.push({
      metric: 'Variance: how often this workflow deviates from the common path',
      whyItMatters: 'Judgment-heavy work has long-tail edge cases. Discovery needs to map those to decide what stays human.',
    });
  }

  return base;
}

// ---------------------------------------------------------------------------
// Integrations
// ---------------------------------------------------------------------------

function deriveIntegrations(state: QuickstartState): string[] {
  if (state.context.tools.length > 0) return state.context.tools;
  return ['Your existing ERP', 'Email', 'CRM of record'];
}

// ---------------------------------------------------------------------------
// Main: generate spec from state
// ---------------------------------------------------------------------------

export function generateSpec(state: QuickstartState): SpecOutput {
  if (!state.archetype) {
    throw new Error('Spec generation requires an archetype.');
  }
  const meta = archetypeMeta(state.archetype);
  return {
    workerName: meta.workerName,
    tagline: meta.tagline,
    workflowSteps: buildWorkflowSteps(state),
    brainModules: meta.brainModules,
    integrations: deriveIntegrations(state),
    benchmark: buildBenchmark(state),
    discoveryItems: buildDiscoveryItems(state),
  };
}
