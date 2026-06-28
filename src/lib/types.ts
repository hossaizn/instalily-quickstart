export type Archetype = 'parts' | 'claims' | 'service' | 'quote';

export type DataState =
  | 'digital-in-system'
  | 'digital-in-email'
  | 'mixed-digital-phone'
  | 'mostly-phone-paper';

export type DecisionComplexity =
  | 'mostly-rule-based'
  | 'mostly-judgment'
  | 'mixed-with-override';

export type Frequency =
  | 'hundreds-daily'
  | 'tens-daily'
  | 'daily'
  | 'weekly'
  | 'less-than-weekly';

export type TeamSize = 'solo' | 'small' | 'mid' | 'large';

export type CompanySize =
  | 'under-50'
  | '50-200'
  | '200-1000'
  | '1000-5000'
  | 'over-5000';

export type Vertical =
  | 'industrial-distribution'
  | 'healthcare'
  | 'manufacturing'
  | 'automotive'
  | 'other';

export interface QuickstartState {
  step: 1 | 2 | 3 | 4 | 5;
  archetype: Archetype | null;
  workflow: {
    task: string;
    dataState: DataState | '';
    decisionComplexity: DecisionComplexity | '';
    outputDestination: string;
  };
  context: {
    companySize: CompanySize | '';
    vertical: Vertical | '';
    tools: string[];
    frequency: Frequency | '';
    teamSize: TeamSize | '';
  };
}

export interface WorkflowStep {
  title: string;
  detail: string;
}

export interface BrainModule {
  name: string;
  sources: string[];
}

export interface ComparableBenchmark {
  matchLevel: 'high' | 'partial' | 'low';
  matchScore: number;
  reasoning: string;
  citedCase: {
    name: string;
    sourceUrl: string;
    headline: string;
  };
  whatThisMeansForYou: string;
}

export interface DiscoveryItem {
  metric: string;
  whyItMatters: string;
}

export interface SpecOutput {
  workerName: string;
  tagline: string;
  workflowSteps: WorkflowStep[];
  brainModules: BrainModule[];
  integrations: string[];
  benchmark: ComparableBenchmark;
  discoveryItems: DiscoveryItem[];
}

export const initialState: QuickstartState = {
  step: 1,
  archetype: null,
  workflow: { task: '', dataState: '', decisionComplexity: '', outputDestination: '' },
  context: { companySize: '', vertical: '', tools: [], frequency: '', teamSize: '' },
};
