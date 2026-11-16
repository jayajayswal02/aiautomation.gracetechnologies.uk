export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  updated: string;
  tags: string[];
  category: string;
  visual: 'blue' | 'sky' | 'indigo' | 'lavender' | 'teal';
  image: string;
  related: string[];
  keyTakeaways: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  content: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

const activeBlogPosts: BlogPost[] = [
  {
    slug: 'ai-powered-lead-generation-for-growth-focused-businesses',
    title: 'AI-Powered Lead Generation for Growth-Focused Businesses',
    excerpt:
      'Smart lead generation is not just automation. It is about creating a cleaner funnel, stronger qualification, and better visibility for the right buyer.',
    author: 'Grace Technologies',
    date: '2026-08-14',
    updated: '2026-10-27',
    tags: ['AI Automation', 'Lead Generation', 'Growth'],
    category: 'AI Automation',
    visual: 'indigo',
    image: '/logo/logo.png',
    related: ['ai-automation-for-operations', 'answer-engine-optimization-for-business-sites'],
    keyTakeaways: [
      'Good lead generation is more about quality than volume.',
      'AI works best when it improves the buying journey instead of adding friction.',
      'The strongest systems connect automation to real commercial intent.',
    ],
    faq: [
      {
        question: 'How can AI improve lead generation?',
        answer:
          'AI can help qualify enquiries, route high-intent leads faster, personalise follow-up, and reduce the amount of manual admin that slows down sales conversations.',
      },
      {
        question: 'Does AI replace the need for good website messaging?',
        answer:
          'No. Even the best system depends on clear value propositions, relevant content and confident calls to action. AI amplifies a good process, it does not replace it.',
      },
      {
        question: 'What is the strongest first AI use case?',
        answer:
          'Most businesses see the biggest early benefit when they automate repetitive enquiry handling, intake workflows, and lead routing based on real intent signals.',
      },
    ],
    content: [
      {
        heading: 'Lead generation should feel structured, not noisy',
        paragraphs: [
          'Many businesses focus on getting more leads, but the real issue is often lead quality. If the funnel is noisy or unclear, teams spend too much time handling requests that were never likely to convert.',
          'AI can help improve this by sorting enquiries, tagging intent, identifying the right next step, and creating faster, better-informed customer responses.',
        ],
      },
      {
        heading: 'Automation works when it supports the customer journey',
        paragraphs: [
          'The best lead systems are not overly complex. They reduce friction, increase response speed, and protect time for a business to follow up with the right prospects. That leads to stronger conversion and more accurate sales forecasting.',
          'When paired with a good website and clear positioning, AI becomes a meaningful growth tool rather than a gimmick.',
        ],
      },
      {
        heading: 'Commercial clarity creates better outcomes',
        paragraphs: [
          'Lead generation is strongest when the offer is easy to understand, the buyer has a clear path to contact you, and the internal team is ready to act quickly. AI supports that trajectory by helping with qualification and operational speed.',
          'A business that combines clear messaging, strong process and smart automation usually earns more quality attention than one relying on volume alone.',
        ],
      },
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = activeBlogPosts.map((post) => ({
  ...post,
  related: post.related.filter((slug) => activeBlogPosts.some((item) => item.slug === slug)),
}));
