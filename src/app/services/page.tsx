import React from 'react';
import type { Metadata } from 'next';
import ServicesOverview from '@/components/sections/ServicesOverview/ServicesOverview';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import styles from './services.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'AI Automation Services UK',
  description:
    'Explore AI automation services from Grace Technologies, including workflow automation, intelligent chatbots, business process automation and custom AI integration.',
  canonicalPath: '/services',
  keywords: [
    'AI Automation Services UK',
    'AI Automation Company UK',
    'Business Process Automation',
    'AI Workflow Automation',
    'AI Solutions for Businesses',
  ],
});

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
  ]);

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb
        items={[{ label: 'Services' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Alternating Services Showcase Matching the Homepage */}
      <ServicesOverview headingLevel="h1" />

      {/* Conversion CTA */}
      <ServiceCTASection
        title="Ready to Explore AI Automation?"
        description="Tell us about a workflow or repetitive task and we’ll discuss a practical next step."
        primaryCtaText="Get a Quote"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
        serviceTitle="AI Automation"
      />
    </div>
  );
}
