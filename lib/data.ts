export type ProjectStatus = 'Funding' | 'Phase 1' | 'Phase 2' | 'Funded Account' | 'Completed';

export type Project = {
  slug: string;
  code: string;
  company: string;
  title: string;
  status: ProjectStatus;
  target: number;
  committed: number;
  participants: number;
  minimum: number;
  stageProgress: number;
  riskStatus: string;
  note: string;
};

export const projects: Project[] = [
  {
    slug: 'ftmo-demo-001',
    code: 'FTMO-DEMO-001',
    company: 'FTMO',
    title: 'FTMO Challenge — Demonstration Project',
    status: 'Funding',
    target: 1000,
    committed: 730,
    participants: 8,
    minimum: 50,
    stageProgress: 73,
    riskStatus: 'Within demo limits',
    note: 'Illustrative data only. Real challenge parameters must be verified from the official prop-company source before launch.',
  },
  {
    slug: 'prop-demo-002',
    code: 'PROP-DEMO-002',
    company: 'Company 2',
    title: 'Second Prop Project — Placeholder',
    status: 'Phase 1',
    target: 1200,
    committed: 1200,
    participants: 11,
    minimum: 50,
    stageProgress: 38,
    riskStatus: 'Demo monitoring',
    note: 'Placeholder project. Company rules and commercial terms require verification.',
  },
];

export const money = (value: number) => new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
}).format(value);
