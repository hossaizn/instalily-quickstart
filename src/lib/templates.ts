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

// ===========================================================================
// Archetype catalog
// ===========================================================================

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

// ===========================================================================
// Shared dropdown options (universal across archetypes per D5)
// ===========================================================================

export const DATA_STATE_OPTIONS: { value: DataState; label: string }[] = [
  { value: 'digital-in-system', label: 'Already digital, in our system of record' },
  { value: 'digital-in-email', label: 'Digital but arriving in email or PDF attachments' },
  { value: 'mixed-digital-phone', label: 'Mixed: digital plus phone calls or notes' },
  { value: 'mostly-phone-paper', label: 'Mostly phone calls, paper, or in-person' },
];

export const DECISION_COMPLEXITY_OPTIONS: { value: DecisionComplexity; label: string }[] = [
  { value: 'mostly-rule-based', label: 'Mostly rule-based (apply policy / rules / pricing)' },
  { value: 'mostly-judgment', label: 'Mostly judgment (case-by-case, relationship-driven)' },
  { value: 'mixed-with-override', label: 'Mixed: rules with human override on edge cases' },
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

// ===========================================================================
// Archetype × pick-specific clause libraries
// Per D5: same dropdown LABELS, archetype × pick-specific OUTPUT copy.
// ===========================================================================

type ClauseMap<K extends string> = Record<K, string>;

// --- Parts ---
const PARTS_DATA_STATE: ClauseMap<DataState> = {
  'digital-in-system': 'pulls the request directly from your ERP catalog, extracting SKUs, customer ID, qty, and any cross-reference flags in one read',
  'digital-in-email': 'parses the inbound email or attached PO, extracting part numbers and customer context from free-form text (the messy reality of distributor inboxes)',
  'mixed-digital-phone': 'consolidates the digital request with any counter-call notes, treating both streams as one normalized record',
  'mostly-phone-paper': 'works against transcribed phone-intake notes, with a recommended 1-2 week digitization step to expand the automation surface meaningfully',
};
const PARTS_DECISION: ClauseMap<DecisionComplexity> = {
  'mostly-rule-based': 'applies your customer-specific pricing tier, runs the cross-reference table for any short-stock SKUs, and surfaces the top 2–3 substitution options ranked by margin',
  'mostly-judgment': "drafts the quote with rationale but flags it for counter-rep review on margin band, customer relationship history, or any non-standard request",
  'mixed-with-override': 'auto-completes the standard pricing + cross-references, and surfaces only the cases that fall outside your playbook (custom margins, allocation conflicts) for human override',
};
const PARTS_OUTPUT: ClauseMap<string> = {
  'quote-erp': 'a quote PDF goes to the customer and the line items land in your ERP with the right pricing tier and stock flags applied',
  'sales-order': 'the sales order enters your ERP directly, ready for fulfillment with allocation already worked out',
  'inventory-route': 'the request routes to ops with a pre-filled inventory check ticket, giving the slow part of the workflow a head start',
  'price-hold': 'the priced quote is held in the customer record, ready for the next inbound touch from that customer',
};

// --- Claims ---
const CLAIMS_DATA_STATE: ClauseMap<DataState> = {
  'digital-in-system': 'pulls the FNOL directly from your claims system, extracting structured fields (policy #, claimant, loss type, date)',
  'digital-in-email': 'parses the inbound FNOL email plus attached PDFs (police reports, photos, statements) into a structured claim record',
  'mixed-digital-phone': 'consolidates the digital intake with phone-recorded statements, normalizing both into the same claim record',
  'mostly-phone-paper': "transcribes the initial phone intake into a structured FNOL, with fully-digital intake recommended as a follow-on to unlock cleaner first-pass triage",
};
const CLAIMS_DECISION: ClauseMap<DecisionComplexity> = {
  'mostly-rule-based': "applies your coverage matrix to the loss type, cites the relevant policy clause, and recommends an action with the specific reasoning trail",
  'mostly-judgment': 'drafts a triage summary with the likely path forward but routes the actual decision to an adjuster, speeding up the review without removing judgment',
  'mixed-with-override': "auto-closes the clear-coverage cases; surfaces the edge cases (state variances, prior claim flags, vendor disputes) to senior adjusters with full context attached",
};
const CLAIMS_OUTPUT: ClauseMap<string> = {
  'queue-summary': "a triage summary lands in the adjuster's queue with the recommended action, the cited policy clauses, and the full document references",
  'coverage-letter': 'the coverage decision is written to the claims system and the customer letter is drafted in your template, ready for adjuster sign-off',
  'vendor-dispatch': 'the right vendor is dispatched from your preferred list based on geography + capacity, and the customer notification fires automatically',
  'escalation': 'the case is routed to a senior adjuster with the recommended action, the rationale, and every supporting document tagged for fast review',
};

// --- Service ---
const SERVICE_DATA_STATE: ClauseMap<DataState> = {
  'digital-in-system': 'pulls the service request directly from your FSM, extracting equipment ID, customer ID, symptom signals, and SLA window in one read',
  'digital-in-email': 'parses the inbound customer email or portal submission, extracting equipment identification and symptom keywords from natural-language descriptions',
  'mixed-digital-phone': "consolidates customer phone notes with any FSM-side history on the equipment, building one normalized service request",
  'mostly-phone-paper': "transcribes the inbound call into a structured service ticket, with customer-portal intake recommended as a follow-on to cut dispatch time meaningfully",
};
const SERVICE_DECISION: ClauseMap<DecisionComplexity> = {
  'mostly-rule-based': 'applies your skills matrix, route windows, and SLA rules to pick the right tech, ETA, and parts list, surfacing the most likely root causes from equipment history',
  'mostly-judgment': 'drafts a recommended dispatch (tech + ETA + parts) but routes to a human dispatcher for the final call, especially for VIP customers or complex equipment',
  'mixed-with-override': 'auto-dispatches the clean matches; surfaces the ambiguous cases (multiple tech matches, SLA conflicts, VIP routing) for dispatcher override with all context attached',
};
const SERVICE_OUTPUT: ClauseMap<string> = {
  'work-order': "a fully-dispatched work order goes out with tech, ETA, parts list, and pre-staging instructions, so the field already knows what they're walking into",
  'customer-notify': 'the customer is notified with the confirmed ETA, tech name, and any prep instructions, reducing inbound "where is my tech?" call volume',
  'fsm-update': 'the route in your FSM is updated with the new job slotted into the right window, with allocation already worked out',
  'manager-escalation': 'the case routes to the service manager with the full diagnostic notes, the candidate dispatch options, and why each was a partial match',
};

// --- Quote ---
const QUOTE_DATA_STATE: ClauseMap<DataState> = {
  'digital-in-system': 'pulls the requirements directly from your CRM opportunity or CPQ draft, extracting structured spec fields',
  'digital-in-email': 'parses the customer RFQ document or email thread, extracting requirements from free-form prose (the messy reality of B2B sales engineering)',
  'mixed-digital-phone': "consolidates the rep's discovery-call notes with the CRM opportunity record into one normalized requirements doc",
  'mostly-phone-paper': "structures the sales rep's notes into a configurable requirements doc, with templated discovery questions recommended as a follow-on to cut quote turnaround time",
};
const QUOTE_DECISION: ClauseMap<DecisionComplexity> = {
  'mostly-rule-based': 'builds the configuration against your BOM rules, prices it against contract terms, and validates lead times against your production calendar',
  'mostly-judgment': 'drafts the configuration and pricing, then routes to the sales engineer for any non-standard config decisions or executive pricing calls',
  'mixed-with-override': 'auto-completes the rule-bound configuration and standard pricing; surfaces ambiguous configs and discount-approval cases for AE review',
};
const QUOTE_OUTPUT: ClauseMap<string> = {
  'ae-review': "the quote document is sent to the AE for review and customer delivery, with the variance log (margin band, lead-time risk, non-standard terms) flagged",
  'cpq': 'the configuration is drafted directly in your CPQ system, ready for the AE to add the customer-facing polish',
  'bom-erp': 'the configured BOM is written to your ERP, ready for production planning to pick up',
  'customer-revision': "the quote is held for the next customer revision cycle, with a clean variance log showing what changed from their last ask",
};

// Per-archetype lookup of clause libraries
const ARCHETYPE_CLAUSES: Record<Archetype, {
  dataState: ClauseMap<DataState>;
  decision: ClauseMap<DecisionComplexity>;
  output: ClauseMap<string>;
}> = {
  parts: { dataState: PARTS_DATA_STATE, decision: PARTS_DECISION, output: PARTS_OUTPUT },
  claims: { dataState: CLAIMS_DATA_STATE, decision: CLAIMS_DECISION, output: CLAIMS_OUTPUT },
  service: { dataState: SERVICE_DATA_STATE, decision: SERVICE_DECISION, output: SERVICE_OUTPUT },
  quote: { dataState: QUOTE_DATA_STATE, decision: QUOTE_DECISION, output: QUOTE_OUTPUT },
};

// ===========================================================================
// Workflow narrative generator (per D5: archetype × pick specific)
// ===========================================================================

function labelFor(opts: { value: string; label: string }[], value: string): string {
  return opts.find((o) => o.value === value)?.label ?? '';
}

function buildWorkflowSteps(state: QuickstartState): WorkflowStep[] {
  if (!state.archetype) return [];
  const meta = archetypeMeta(state.archetype);
  const clauses = ARCHETYPE_CLAUSES[state.archetype];
  const taskLabel = labelFor(meta.taskOptions, state.workflow.task) || 'this workflow';

  // Fallbacks for empty picks; should not happen in practice (form validates) but defensive.
  const dataClause = clauses.dataState[state.workflow.dataState as DataState] ?? clauses.dataState['digital-in-system'];
  const decisionClause = clauses.decision[state.workflow.decisionComplexity as DecisionComplexity] ?? clauses.decision['mixed-with-override'];
  const outputClause = clauses.output[state.workflow.outputDestination] ?? Object.values(clauses.output)[0];

  return [
    {
      title: 'Read the request',
      detail: `For "${taskLabel.toLowerCase()}", the ${meta.workerName} ${dataClause}.`,
    },
    {
      title: 'Reason about it',
      detail: `It then ${decisionClause}.`,
    },
    {
      title: 'Hand off cleanly',
      detail: `On the way out: ${outputClause}. Every step lands with an audit trail your team can spot-check at any point.`,
    },
  ];
}

// ===========================================================================
// SRS-similarity score (per §9 v0.3: 4 signals × 0/1/2)
// ===========================================================================

const SRS_CASE = {
  name: 'SRS Distribution',
  sourceUrl: 'https://www.mdm.com/article/technology/ai/how-srs-distribution-and-instalily-are-rewiring-growth-with-ai/',
  headline: 'Quote turnaround from 6 days to minutes. ~10% revenue uplift on parts business. Published with InstaLILY.',
};

function scoreArchetype(a: Archetype | null): 0 | 1 | 2 {
  if (a === 'parts') return 2;
  if (a === 'quote') return 1;
  return 0;
}
function scoreDataState(d: DataState | ''): 0 | 1 | 2 {
  if (d === 'digital-in-system') return 2;
  if (d === 'digital-in-email') return 1;
  return 0;
}
function scoreDecision(d: DecisionComplexity | ''): 0 | 1 | 2 {
  if (d === 'mostly-rule-based') return 2;
  if (d === 'mixed-with-override') return 1;
  return 0;
}
function scoreVolumeAndScale(state: QuickstartState): 0 | 1 | 2 {
  const isLargeCo =
    state.context.companySize === '200-1000' ||
    state.context.companySize === '1000-5000' ||
    state.context.companySize === 'over-5000';
  if (state.context.frequency === 'hundreds-daily' && isLargeCo) return 2;
  if (state.context.frequency === 'hundreds-daily' || state.context.frequency === 'tens-daily' || isLargeCo) return 1;
  return 0;
}

function buildBenchmark(state: QuickstartState): ComparableBenchmark {
  const aScore = scoreArchetype(state.archetype);
  const dScore = scoreDataState(state.workflow.dataState);
  const decScore = scoreDecision(state.workflow.decisionComplexity);
  const vScore = scoreVolumeAndScale(state);
  const total = aScore + dScore + decScore + vScore;

  const matchLevel: ComparableBenchmark['matchLevel'] =
    total >= 6 ? 'high' : total >= 3 ? 'partial' : 'low';

  const meta = state.archetype ? archetypeMeta(state.archetype) : null;
  const archetypeLabel = meta ? meta.cardTitle : 'your role';
  const workerName = meta ? meta.workerName : 'a vertical InstaWorker';

  const dataStateLabel = labelFor(DATA_STATE_OPTIONS, state.workflow.dataState).toLowerCase();
  const decisionLabel = labelFor(DECISION_COMPLEXITY_OPTIONS, state.workflow.decisionComplexity).toLowerCase();

  const reasoning: Record<ComparableBenchmark['matchLevel'], string> = {
    high: `Your workflow shape (${archetypeLabel}, ${dataStateLabel}, ${decisionLabel}) overlaps meaningfully with the published SRS Distribution deployment. Both are digital, structured, repeatable work where rules carry most of the decision.`,
    partial: `Your workflow shares some shape with the SRS case (mostly: ${dataStateLabel}), but the archetype or decision pattern is different enough that the published numbers won't transfer one-to-one.`,
    low: `The public case study (SRS Distribution) is high-volume rule-based parts work running in ERP. Your workflow is a different shape: ${archetypeLabel.toLowerCase()}, ${dataStateLabel}, ${decisionLabel}. A different shape calls for a different reference deployment.`,
  };

  const whatThisMeans: Record<ComparableBenchmark['matchLevel'], string> = {
    high: `The SRS numbers (6 days to minutes, ~10% revenue uplift) are a defensible directional reference for what's possible on your workflow. Discovery would still calibrate against your actual volumes and data quality, but you'd start from a strong reference, not a cold guess.`,
    partial: `The SRS case gives directional intuition for what's possible with a vertical InstaWorker, but the closer comparable would be an InstaLILY deployment that matches your archetype and your volume. That customer exists inside InstaLILY's account list, and discovery would surface them as your real baseline.`,
    low: `This is exactly the structural argument for InstaWorkers being vertical-specific. A ${workerName} is built differently than a Parts InstaWorker, so the relevant benchmark is a customer running your shape, not the published case. That comparable lives inside InstaLILY's deployments. Discovery would identify it and use those numbers as the baseline.`,
  };

  return {
    matchLevel,
    matchScore: total,
    reasoning: reasoning[matchLevel],
    citedCase: SRS_CASE,
    whatThisMeansForYou: whatThisMeans[matchLevel],
  };
}

// ===========================================================================
// Discovery checklist
// ===========================================================================

function buildDiscoveryItems(state: QuickstartState): DiscoveryItem[] {
  const base: DiscoveryItem[] = [
    {
      metric: 'Baseline cycle time per request, today (in minutes)',
      whyItMatters: "Without this number, no time-saved claim is defensible. It's the denominator for every ROI calculation.",
    },
    {
      metric: 'Current error / rework rate on this workflow',
      whyItMatters: 'Tells us whether the bottleneck is speed or quality. Different bottleneck = different InstaWorker shape.',
    },
    {
      metric: 'Aggregate hours your team spends on this work per week',
      whyItMatters: 'Required to translate a per-request time saving into a team-level ROI number.',
    },
  ];

  if (!state.archetype) return base;

  const archetypeSpecific: Record<Archetype, DiscoveryItem> = {
    parts: {
      metric: 'Quote-to-order conversion rate today + % of quotes you never follow up on',
      whyItMatters: "The biggest InstaWorker lever in parts is recovering abandoned quotes, but only if there's a meaningful abandonment rate to recover.",
    },
    claims: {
      metric: 'Auto-adjudication rate today, and senior-adjuster escalation rate',
      whyItMatters: 'Tells us the realistic ceiling for straight-through automation in your specific policy mix.',
    },
    service: {
      metric: 'First-time-fix rate today + average reschedule rate',
      whyItMatters: "Service automation's value depends on whether better diagnosis up-front reduces truck-rolls. These two metrics measure that.",
    },
    quote: {
      metric: 'Quote turnaround time, and % of quotes requiring discount-approval cycles',
      whyItMatters: 'Approval cycle drag is often the biggest win, not the spec-writing itself. Worth measuring separately.',
    },
  };

  base.push(archetypeSpecific[state.archetype]);

  if (state.workflow.decisionComplexity === 'mostly-judgment') {
    base.push({
      metric: 'Variance: how often this workflow deviates from the common path',
      whyItMatters: 'Judgment-heavy work has long-tail edge cases. Discovery needs to map those to decide what stays human.',
    });
  }

  return base;
}

// ===========================================================================
// Integrations + spec generator
// ===========================================================================

function deriveIntegrations(state: QuickstartState): string[] {
  if (state.context.tools.length > 0) return state.context.tools;
  return ['Your existing ERP', 'Email', 'CRM of record'];
}

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
