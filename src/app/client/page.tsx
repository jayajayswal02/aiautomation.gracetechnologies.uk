import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import ClientCard, { ClientItem } from '@/components/sections/ClientSection/ClientCard';
import ProjectStats from '@/components/sections/Projects/ProjectStats';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import clientsConfig from '@/config/clients.json';
import styles from './client.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Client Partnerships & Case Studies',
  description:
    'Discover selected Grace Technologies client partnerships, including current AI automation work and examples of our earlier digital delivery.',
  canonicalPath: '/client',
  keywords: [
    'Grace Technologies clients',
    'Commercial case studies UK',
    'Enterprise technology delivery',
    'Client partnerships',
  ],
});

export default function ClientsIndexPage() {
  const clients = clientsConfig.clients as ClientItem[];
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Clients', url: `${SEO_CONFIG.siteUrl}/client` },
  ]);

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb
        items={[{ label: 'Clients' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Header section */}
      <section className={styles.heroSection}>
        <Container size="wide">
          <SectionHeading
            label="CLIENT PARTNERSHIPS"
            title="Trusted by Visionary Enterprises."
            description="Explore selected client partnerships and project work delivered for businesses in the UK and beyond."
            align="center"
            headingLevel="h1"
          />
        </Container>
      </section>

      {/* Grid of All Client Cards */}
      <section className={styles.gridSection}>
        <Container size="wide">
          <div className={styles.clientsGrid}>
            {clients.map((client, index) => (
              <ClientCard key={client.id} client={client} index={index} />
            ))}
          </div>

          {/* <div className={styles.statsWrapper}>
            <ProjectStats />
          </div> */}
        </Container>
      </section>

      {/* Conversion CTA */}
      <ServiceCTASection
        title="Ready to Explore AI Automation?"
        description="Talk with our UK team about the workflows and repetitive tasks you want to improve."
        primaryCtaText="Get a Quote"
        secondaryCtaText="Explore AI Automation"
        secondaryCtaHref="/services/ai-automation"
      />
    </div>
  );
}
