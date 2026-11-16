'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Button from '@/components/common/Button/Button';
import { SERVICES_DATA } from '@/config/site';
import ServiceVisual from './ServiceVisual';
import styles from './ServicesOverview.module.css';

interface ServicesOverviewProps {
  headingLevel?: 'h1' | 'h2';
}

export default function ServicesOverview({
  headingLevel = 'h2',
}: ServicesOverviewProps) {
  return (
    <section id="services-overview" className={styles.section}>
      <Container size="wide">
        <SectionHeading
          label="AI AUTOMATION"
          title="Automation Built Around Your Business"
          description="Practical AI automation to streamline workflows, reduce repetitive tasks and support more efficient operations."
          align="center"
          headingLevel={headingLevel}
        />

        <div className={styles.servicesList}>
          {SERVICES_DATA.map((service) => {
            return (
              <motion.div
                key={service.id}
                className={styles.serviceRow}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {/* Visual Column */}
                <div className={styles.visualCol}>
                  <ServiceVisual serviceId={service.id} />
                </div>

                {/* Content Column */}
                <div className={styles.contentCol}>
                  <div className={styles.numberBadge}>
                    <span className={styles.numberText}>{service.number}</span>
                    <span className={styles.taglineText}>{service.tagline}</span>
                  </div>

                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>

                  <div className={styles.keyCapabilities}>
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <div key={cap.title} className={styles.capItem}>
                        <span className={styles.capBullet}>✓</span>
                        <span className={styles.capName}>{cap.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    <Button
                      href={service.route}
                      variant="primary"
                      size="md"
                      icon
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
