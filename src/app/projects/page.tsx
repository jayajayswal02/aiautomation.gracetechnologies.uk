import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import ClientSection from '@/components/sections/ClientSection/ClientSection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import ProjectsClientView from './ProjectsClientView';
import projectsConfig from '@/config/projects.json';
import { ProjectItem } from '@/data/projects';
import styles from './projects.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Our Projects & Case Studies',
  description:
    'Explore selected Grace Technologies client case studies, including current AI automation work and examples of our earlier digital delivery.',
  canonicalPath: '/projects',
  keywords: [
    'Grace Technologies projects',
    'AI automation examples UK',
    'AI Automation Services UK',
    'Business Process Automation',
  ],
});

export default function ProjectsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Projects', url: `${SEO_CONFIG.siteUrl}/projects` },
  ]);

  // Pass project data directly from the centralized JSON configuration
  const projectsData = projectsConfig.projects as ProjectItem[];

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb
        items={[{ label: 'Projects' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Header section */}
      <section className={styles.heroSection}>
        <Container size="wide">
          <SectionHeading
            label="OUR PORTFOLIO"
            title="Ideas Into Real Digital Solutions."
            description="Explore selected client partnerships, examples of our earlier digital delivery and our current AI automation work."
            align="center"
            headingLevel="h1"
          />
        </Container>
      </section>

      {/* Interactive Filterable Projects Grid */}
      <section className={styles.gridSection}>
        <ProjectsClientView initialProjects={projectsData} />
      </section>

 
      {/* Conversion CTA with modal trigger */}
      <ServiceCTASection
        title="Ready to Improve a Business Workflow?"
        description="Talk with our UK team about your processes and explore where practical AI automation could help."
        primaryCtaText="Get a Quote"
        secondaryCtaText="Explore AI Automation"
        secondaryCtaHref="/services/ai-automation"
      />
    </div>
  );
}
