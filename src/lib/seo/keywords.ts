export interface KeywordCluster {
  category: string;
  targetRegion: string;
  primaryKeywords: string[];
  intent: 'Commercial' | 'Transactional' | 'Informational';
  aiSearchPrompts: string[];
}

export const UK_TARGET_KEYWORDS: Record<string, KeywordCluster> = {
  aiAutomation: {
    category: 'AI Automation',
    targetRegion: 'United Kingdom',
    intent: 'Transactional',
    primaryKeywords: [
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
    aiSearchPrompts: [
      'Which UK companies provide AI automation services for businesses?',
      'How can business process automation reduce repetitive operational work?',
      'What should a UK business consider when integrating AI into existing workflows?',
    ],
  },
};
