/**
 * Central Service Configuration for Grace Technologies
 * Defines primary & supporting services for global and dynamic location SEO
 */

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceConfig {
  slug: string;
  name: string;
  shortName: string;
  primaryKeyword: string;
  description: string;
  keywords: string[];
  capabilities: ServiceCapability[];
  process: ServiceProcessStep[];
  enabled: boolean;
}

export const SERVICES_CONFIG: Record<string, ServiceConfig> = {
  'ai-automation': {
    slug: 'ai-automation',
    name: 'AI Automation',
    shortName: 'AI Automation',
    primaryKeyword: 'AI Automation Services UK',
    description:
      'AI automation solutions for businesses, including workflow automation, intelligent chatbots, business process automation and custom AI integration.',
    keywords: [
      'AI Automation Services UK',
      'AI Automation Company UK',
      'Business Process Automation',
      'AI Workflow Automation',
      'AI Solutions for Businesses',
      'Intelligent Business Automation',
      'AI Chatbot Development',
      'Customer Support Automation',
      'Workflow Automation Solutions',
      'Business Process Optimization',
      'Custom AI Integration',
    ],
    capabilities: [
      { title: 'Business Process Automation', description: 'Automate repetitive, rules-based processes to reduce manual handling and help teams focus on higher-value work.' },
      { title: 'AI-Powered Workflow Automation', description: 'Connect business tools and add AI-assisted steps, with clear review points for decisions that need human oversight.' },
      { title: 'Intelligent Chatbots & Virtual Assistants', description: 'Create conversational assistants that answer common questions and guide users through well-defined tasks.' },
      { title: 'Customer Support Automation', description: 'Help support teams categorise requests, find relevant information and route enquiries to the right people.' },
      { title: 'Data Processing & Management Automation', description: 'Automate structured data extraction, validation and transfer between approved business systems.' },
      { title: 'Lead Management Automation', description: 'Organise incoming enquiries, apply agreed qualification rules and route leads to the appropriate team.' },
      { title: 'AI Integration & Implementation', description: 'Plan and implement AI capabilities that work with your existing processes and selected software.' },
      { title: 'Custom AI Automation Solutions', description: 'Design tailored automation around your business requirements, with defined scope and human review where needed.' },
    ],
    process: [
      { step: '01', title: 'Understand the process', description: 'Review workflows, systems, constraints and the tasks that may be suitable for automation.' },
      { step: '02', title: 'Define the solution', description: 'Agree scope, integrations, data handling, safeguards and success measures before implementation.' },
      { step: '03', title: 'Build and validate', description: 'Configure the workflow and test expected outcomes, exceptions and human review points.' },
      { step: '04', title: 'Deploy and refine', description: 'Introduce the solution with appropriate monitoring and improve it based on operational feedback.' },
    ],
    enabled: true,
  },
};

export const getServiceConfig = (slug: string): ServiceConfig | null => {
  return SERVICES_CONFIG[slug] || null;
};

export const getAllServiceConfigs = (): ServiceConfig[] => {
  return Object.values(SERVICES_CONFIG).filter((s) => s.enabled);
};
