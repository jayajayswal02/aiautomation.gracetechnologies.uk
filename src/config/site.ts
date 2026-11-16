import { ServiceDetail, IndustryItem, StepItem } from '@/types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI Automation',
    shortTitle: 'AI Automation',
    tagline: 'Intelligent Automation for Your Business.',
    headline: 'Transform Your Business with Intelligent AI Automation',
    description:
      'Empower your business with intelligent AI automation solutions designed to streamline workflows, reduce repetitive tasks, improve operational efficiency and support smarter business decisions.',
    route: '/services/ai-automation',
    capabilities: [
      { title: 'Business Process Automation', description: 'Automate repetitive, rules-based processes to reduce manual handling and help teams focus on higher-value work.' },
      { title: 'AI-Powered Workflow Automation', description: 'Connect business tools and add AI-assisted steps, with clear review points for decisions that need human oversight.' },
      { title: 'Intelligent Chatbots & Virtual Assistants', description: 'Create conversational assistants that answer common questions and guide users through well-defined tasks.' },
      { title: 'Customer Support Automation', description: 'Help support teams categorise requests, find relevant information and route enquiries to the right people.' },
      { title: 'Data Processing Automation', description: 'Automate structured data extraction, validation and transfer between approved business systems.' },
      { title: 'Lead Management Automation', description: 'Organise incoming enquiries, apply agreed qualification rules and route leads to the appropriate team.' },
      { title: 'Custom AI Integration', description: 'Plan and implement AI capabilities that work with your existing processes and selected software.' },
      { title: 'Custom AI Automation Solutions', description: 'Design tailored automation around your business requirements, with defined scope and human review where needed.' },
    ],
    benefits: [
      { title: 'Less repetitive work', description: 'Reduce the time teams spend on routine processing and manual hand-offs.' },
      { title: 'More consistent workflows', description: 'Apply agreed processes consistently across connected tasks and systems.' },
      { title: 'Faster access to information', description: 'Make useful business information easier to process, find and act on.' },
      { title: 'People stay in control', description: 'Keep review and approval steps in workflows wherever human judgement is important.' },
    ],
    process: [
      { step: '01', title: 'Understand the process', description: 'Review workflows, systems, constraints and the tasks that may be suitable for automation.' },
      { step: '02', title: 'Define the solution', description: 'Agree scope, integrations, data handling, safeguards and success measures before implementation.' },
      { step: '03', title: 'Build and validate', description: 'Configure the workflow and test expected outcomes, exceptions and human review points.' },
      { step: '04', title: 'Deploy and refine', description: 'Introduce the solution with appropriate monitoring and improve it based on operational feedback.' },
    ],
    faqs: [
      { question: 'What kinds of business tasks can be automated?', answer: 'Tasks with repeatable steps, such as routing enquiries, processing structured information or coordinating updates between systems, may be suitable after reviewing the workflow and its risks.' },
      { question: 'Can AI automation work with our existing tools?', answer: 'Integration depends on the systems involved and the access they support. We review your tools and requirements before recommending an approach.' },
      { question: 'Will people remain involved in automated workflows?', answer: 'Yes. Workflows can include review, approval or exception-handling steps wherever human judgement is important.' },
      { question: 'How do we get started?', answer: 'Contact us to discuss a workflow or repetitive task. We can assess its requirements and outline a suitable next step.' },
    ],
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    title: 'Professional Services',
    description: 'Client intake, document handling and enquiry workflows tailored to consultancies and professional firms.',
    stats: 'Efficient Operations',
  },
  {
    title: 'Retail and E-commerce',
    description: 'Order updates, customer enquiries and repetitive information processing connected across business tools.',
    stats: 'Connected Workflows',
  },
  {
    title: 'Healthcare & Life Sciences',
    description: 'Administrative workflow support designed with appropriate review steps and careful data handling.',
    stats: 'Responsible Automation',
  },
  {
    title: 'Financial & Business Services',
    description: 'Document processing and information routing for routine, rules-based operational workflows.',
    stats: 'Operational Clarity',
  },
  {
    title: 'Education & EdTech',
    description: 'Administrative task automation and structured handling of common learner and staff enquiries.',
    stats: 'Simpler Administration',
  },
  {
    title: 'Small and Medium Enterprises',
    description: 'Practical AI automation scoped to the repetitive tasks and systems used by growing businesses.',
    stats: 'Practical AI Automation',
  },
];

export const HOW_WE_WORK_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'We immerse ourselves into your commercial model, operational friction points, and overarching growth ambitions.',
  },
  {
    number: '02',
    title: 'Strategise',
    description: 'We architect the precise technical blueprint, choosing the most effective frameworks, integrations, and milestones.',
  },
  {
    number: '03',
    title: 'Deliver',
    description: 'Our UK and Indian engineering teams build, test, and implement production-grade solutions with rigorous quality assurance.',
  },
  {
    number: '04',
    title: 'Evolve',
    description: 'We provide ongoing technical support, continuous performance monitoring, and iterative enhancements as you scale.',
  },
];
