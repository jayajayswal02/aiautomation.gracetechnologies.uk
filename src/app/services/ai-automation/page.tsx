import React from 'react';
import type { Metadata } from 'next';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import { SERVICES_DATA } from '@/config/site';
import styles from '../service-page.module.css';

const service = SERVICES_DATA[0];

export const metadata: Metadata = constructMetadata({
  title: 'AI Automation Solutions for Businesses',
  titleSuffix: 'Grace Technologies UK',
  description:
    'Discover AI automation services from Grace Technologies, including workflow automation, intelligent chatbots, business process automation and custom AI integration.',
  canonicalPath: '/services/ai-automation',
  keywords: [
    'AI Automation Services UK',
    'AI Automation Company UK',
    'AI Automation Solutions',
    'Business Process Automation',
    'AI Workflow Automation',
    'AI Solutions for Businesses',
    'Intelligent Business Automation',
    'AI Chatbot Solutions',
    'Customer Support Automation',
    'Workflow Automation Services',
    'Repetitive Task Automation',
    'AI-powered Business Solutions',
    'Business Process Optimization',
    'Custom AI Integration',
  ],
});

const features = [
  {
    title: 'Business Process Automation',
    description:
      'Automate repetitive, rules-based processes to reduce manual handling and help teams focus on higher-value work.',
    benefits: ['Reduce routine administration', 'Make repeatable processes more consistent'],
    Icon: AccountTreeOutlinedIcon,
  },
  {
    title: 'AI-Powered Workflow Automation',
    description:
      'Connect business tools and add AI-assisted steps, with clear review points for decisions that need human oversight.',
    benefits: ['Reduce manual hand-offs', 'Keep people involved in important decisions'],
    Icon: AutoAwesomeOutlinedIcon,
  },
  {
    title: 'Intelligent Chatbots & Virtual Assistants',
    description:
      'Create conversational assistants that answer common questions and guide users through well-defined tasks.',
    benefits: ['Provide consistent answers to common questions', 'Help users find the right information'],
    Icon: SmartToyOutlinedIcon,
  },
  {
    title: 'Customer Support Automation',
    description:
      'Help support teams categorise requests, find relevant information and route enquiries to the right people.',
    benefits: ['Organise incoming support requests', 'Help teams respond with relevant information'],
    Icon: SupportAgentOutlinedIcon,
  },
  {
    title: 'Data Processing Automation',
    description:
      'Automate structured data extraction, validation and transfer between approved business systems.',
    benefits: ['Reduce repetitive data entry', 'Improve consistency across connected systems'],
    Icon: DatasetOutlinedIcon,
  },
  {
    title: 'Lead Management Automation',
    description:
      'Organise incoming enquiries, apply agreed qualification rules and route leads to the appropriate team.',
    benefits: ['Keep enquiries organised', 'Help teams follow up through a consistent process'],
    Icon: PersonSearchOutlinedIcon,
  },
  {
    title: 'Custom AI Integration',
    description:
      'Plan and implement AI capabilities that work with your existing processes and selected software.',
    benefits: ['Fit implementation to current systems', 'Define scope and safeguards before deployment'],
    Icon: IntegrationInstructionsOutlinedIcon,
  },
  {
    title: 'Custom AI Automation Solutions',
    description:
      'Design tailored automation around your business requirements, with defined scope and human review where needed.',
    benefits: ['Address specific operational needs', 'Include review steps for exceptions and edge cases'],
    Icon: TuneOutlinedIcon,
  },
];

export default function AiAutomationPage() {
  const serviceSchema = getServiceSchema({
    name: 'AI Automation',
    description:
      'AI automation solutions for businesses, including workflow automation, intelligent chatbots, business process automation and custom AI integration.',
    url: `${SEO_CONFIG.siteUrl}/services/ai-automation`,
    serviceType: 'AI Automation',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
    { name: 'AI Automation', url: `${SEO_CONFIG.siteUrl}/services/ai-automation` },
  ]);
  const faqSchema = getFaqSchema(service.faqs);

  return (
    <div className={styles.page}>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <Breadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: 'AI Automation' },
        ]}
        backHref="/services"
        backLabel="Back to Services"
      />

      <ServiceDetailHero
        serviceId={service.id}
        serviceTitle={service.title}
        number={service.number}
        tagline={service.tagline}
        headline={service.headline}
        description={service.description}
      />

      <section id="capabilities" className={styles.section}>
        <Container size="wide">
          <SectionHeading
            label="AI AUTOMATION SERVICES"
            title="AI Automation Services"
            description="We scope business process and AI-powered workflow automation around your existing systems, tasks and operational requirements."
            align="left"
          />
          <div className={styles.capabilitiesGrid}>
            {features.map(({ title, description, benefits, Icon }) => (
              <article key={title} className={styles.capCard}>
                <div className={styles.capHeader}>
                  <Icon className={styles.featureIcon} aria-hidden="true" />
                  <h3 className={styles.capTitle}>{title}</h3>
                </div>
                <p className={styles.capDesc}>{description}</p>
                <ul className={styles.featureBenefits}>
                  {benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.benefitsSection}>
        <Container size="wide">
          <SectionHeading
            label="BUSINESS BENEFITS"
            title="Benefits of AI Automation"
            description="Automation can reduce repetitive handling, make workflows more consistent and help teams access information, while keeping people involved where judgement matters."
            align="left"
          />
          <div className={styles.benefitsGrid}>
            {service.benefits.map((benefit, index) => (
              <article key={benefit.title} className={styles.benefitCard}>
                <span className={styles.benefitIndex}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDesc}>{benefit.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container size="wide">
          <SectionHeading
            label="WHY GRACE TECHNOLOGIES"
            title="Why Choose Grace Technologies?"
            description="We focus on practical AI automation for UK businesses, taking time to understand workflows, agree scope and safeguards, and validate solutions with your team."
            align="left"
          />
        </Container>
      </section>

      <section className={styles.benefitsSection}>
        <Container size="wide">
          <SectionHeading
            label="OUR APPROACH"
            title="A Clear, Human-Centred Implementation"
            description="We assess the process, agree safeguards and success measures, then test and refine the automation with your team."
            align="left"
          />
          <div className={styles.processGrid}>
            {service.process.map((step) => (
              <article key={step.step} className={styles.processCard}>
                <div className={styles.stepNum}>{step.step}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.faqSection}>
        <Container size="narrow">
          <SectionHeading
            label="FREQUENTLY ASKED QUESTIONS"
            title="Frequently Asked Questions About AI Automation"
            description="Answers about workflows, integrations and the role of human review."
            align="center"
          />
          <FaqAccordion faqs={service.faqs} />
        </Container>
      </section>

      <ServiceCTASection
        title="Ready to Explore AI Automation?"
        description="Tell us about a workflow or repetitive task and we’ll discuss a practical next step."
        primaryCtaText="Get a Quote"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
        serviceTitle={service.title}
      />
    </div>
  );
}
