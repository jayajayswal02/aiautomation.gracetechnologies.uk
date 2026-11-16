import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero/Hero';
import CompanyIntro from '@/components/sections/CompanyIntro/CompanyIntro';
import ServicesOverview from '@/components/sections/ServicesOverview/ServicesOverview';
import Projects from '@/components/sections/Projects/Projects';
import ClientSection from '@/components/sections/ClientSection/ClientSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUs';
import HowWeWork from '@/components/sections/HowWeWork/HowWeWork';
import PartnershipSection from '@/components/sections/PartnershipSection/PartnershipSection';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import CTASection from '@/components/common/CTASection/CTASection';
import HomeContactSection from '@/components/sections/HomeContactSection/HomeContactSection';
import GlobalOffices from '@/components/sections/GlobalOffices/GlobalOffices';

import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'AI Automation Services UK',
  description:
    'Grace Technologies delivers AI automation solutions for UK businesses, helping streamline workflows, automate repetitive tasks and improve operational efficiency.',
  canonicalPath: '/',
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
    'Custom AI Integration',
    'Business Process Optimization',
    'AI-powered Business Solutions',
  ],
});

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 – CINEMATIC HERO */}
      <Hero />

      {/* SECTION 2 – COMPANY INTRODUCTION */}
      <CompanyIntro />

      {/* SECTION 3 – SERVICES OVERVIEW */}
      <ServicesOverview />

      {/* SECTION 4 – FEATURED PROJECTS (REDESIGNED HORIZONTAL CAROUSEL & FILTERS) */}
      <Projects />

      {/* SECTION 4B – PROVEN COMMERCIAL CLIENT ENGAGEMENTS */}
      <ClientSection />

      {/* SECTION 5 – WHY GRACE TECHNOLOGIES */}
      <WhyChooseUs />

      {/* SECTION 6 – HOW WE WORK */}
      <HowWeWork />

      {/* SECTION 7 – UK–INDIA PARTNERSHIP */}
      <PartnershipSection />



      {/* SECTION 9 – CLIENT TESTIMONIALS (INFINITE 3-CARD CAROUSEL) */}
      <Testimonials />

      {/* SECTION 10 – FINAL CTA */}
      <CTASection
        title="Make Your Business More Efficient with AI Automation."
        description="Let’s identify the repetitive work and workflows where practical AI automation can make a difference."
        primaryCtaText="Get a Quote"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore AI Automation"
        secondaryCtaHref="/services/ai-automation"
      />

      {/* SECTION 10 – CONTACT SECTION */}
      <HomeContactSection />

      {/* SECTION 11 – BILATERAL ADDRESS & INTERACTIVE COORDINATE GLOBE */}
      <GlobalOffices />
    </>
  );
}
