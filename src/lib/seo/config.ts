/**
 * Central SEO Configuration for Grace Technologies
 * Primary canonical domain: https://aiautomation.gracetechnologies.uk
 */

export const SEO_CONFIG = {
  siteName: 'Grace Technologies',
  legalName: 'Grace Technologies',
  siteUrl: 'https://aiautomation.gracetechnologies.uk',
  mainSiteUrl: 'https://www.gracetechnologies.uk',
  appleTouchIcon: '/apple-touch-icon.png',
  defaultTitle: 'AI Automation Services UK | Grace Technologies',
  titleTemplate: '%s | Grace Technologies',
  defaultDescription:
    'Grace Technologies delivers AI automation solutions for UK businesses, helping streamline workflows, automate repetitive tasks and improve operational efficiency.',
  defaultOgImage: 'https://aiautomation.gracetechnologies.uk/logo/logo.png',
  locale: 'en_GB',
  inLocale: 'en_IN',
  language: 'en',
  themeColor: '#030712',
  organizationId: 'https://aiautomation.gracetechnologies.uk/#organization',
  websiteId: 'https://aiautomation.gracetechnologies.uk/#website',
  contact: {
    uk: {
      company: 'Grace Technologies',
      country: 'United Kingdom',
      addressLines: [
        '398 Whalebone Lane South',
        'Romford, Greater London',
        'RM6 6HP, England',
      ],
      postalCode: 'RM6 6HP',
      city: 'Romford',
      region: 'Greater London',
      countryCode: 'GB',
      email: 'contact@gracetechnologies.uk',
      phone: '+44 7407 268125',
      geo: {
        latitude: 51.576,
        longitude: 0.148,
      },
    },
    indiaPartner: {
      company: 'Ank Square Pvt. Ltd.',
      country: 'India',
      addressLines: [
        'Ramjaipal Road, Opp. Gola Road',
        'Near Hotel Magadh Palace',
        'Patna, Bihar, India - 801503',
      ],
      postalCode: '801503',
      city: 'Patna',
      region: 'Bihar',
      countryCode: 'IN',
      email: 'contact@anksquare.com',
      phone: '+91-9939337638',
    },
  },
  socialLinks: [
    'https://www.instagram.com/gracetechnologiesofficial/',
    'https://www.facebook.com/share/1CKuqfF3Ef/',
    'https://www.youtube.com/@Gracetechnologiesofficial',
    'https://x.com/grace_Official4',
  ],
  services: [
    {
      id: 'ai-automation',
      name: 'AI Automation',
      url: 'https://aiautomation.gracetechnologies.uk/services/ai-automation',
      description:
        'AI workflow automation, business process optimization, intelligent chatbots, and custom AI integration for businesses.',
    },
  ],
} as const;
