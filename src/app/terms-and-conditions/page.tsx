import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { constructMetadata } from '@/lib/seo/metadata';
import styles from './legal.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Terms & Conditions',
  description:
    'Review the terms for the Grace Technologies website and AI automation services, including our UK business and Ank Square partnership.',
  canonicalPath: '/terms-and-conditions',
});

export default function TermsAndConditionsPage() {
  return (
    <div className={styles.page}>
      <Breadcrumb
        items={[{ label: 'Terms & Conditions' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      <Container size="narrow">
        <div className={styles.content}>
          <span className={styles.badge}>TERMS OF ENGAGEMENT</span>
          <h1 className={styles.title}>Terms and Conditions</h1>
          <p className={styles.lastUpdated}>Last Updated: October 2026</p>

          <section className={styles.legalSection}>
            <h2>1. Introduction & Acceptance</h2>
            <p>
              By accessing the Grace Technologies website or engaging our consultancy services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use immediately.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>2. Nature of Services & Partnership</h2>
            <p>
              Grace Technologies is a United Kingdom business providing AI automation services and is strategically partnered with Ank Square Private Limited, India. Both companies are distinct, independent legal entities operating collaboratively under contract. The scope and deliverables for each engagement are set out in the applicable agreement.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>4. Intellectual Property</h2>
            <p>
              All website content, brand assets, typography, and original designs are the intellectual property of Grace Technologies. Custom software and source code produced for clients will be assigned in accordance with the specific provisions outlined in each project&apos;s Master Services Agreement (MSA).
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>5. Governing Law</h2>
            <p>
              These Terms and Conditions and any disputes arising out of or related to our services are governed by and construed in accordance with the laws of England and Wales.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
