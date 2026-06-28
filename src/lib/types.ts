export type TemplateKey = 'parts' | 'claims' | 'service' | 'quote';

export interface QuickstartState {
  step: 1 | 2 | 3 | 4 | 5;
  role: string;
  template: TemplateKey | null;
  workflow: {
    task: string;
    dataSource: string;
    output: string;
  };
  context: {
    companySize: CompanySize | '';
    vertical: Vertical | '';
    tools: string[];
  };
}

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

export interface SpecOutput {
  workerName: string;
  tagline: string;
  workflowSteps: { title: string; detail: string }[];
  brainModules: { name: string; sources: string[] }[];
  integrations: string[];
  roi: {
    hoursPerWeek: string;
    accuracyClaim: string;
    rampWeeks: string;
  };
  riskNote: string;
}

export const initialState: QuickstartState = {
  step: 1,
  role: '',
  template: null,
  workflow: { task: '', dataSource: '', output: '' },
  context: { companySize: '', vertical: '', tools: [] },
};
