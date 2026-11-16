'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import styles from './CompanyIntro.module.css';

export default function CompanyIntro() {
  return (
    <section id="company-intro" className={styles.section}>
      <Container size="wide">
        <div className={styles.grid}>
          {/* Left Column: Asymmetrical Editorial Heading & Subheading */}
          <div className={styles.leftCol}>
            <motion.div
              className={styles.labelWrap}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <span className={styles.label}>WHO WE ARE</span>
            </motion.div>

            <motion.h2
              className={styles.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              About Grace Technologies
            </motion.h2>

            <motion.p
              className={styles.lead}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              AI automation uses software, connected workflows and AI-assisted steps to handle repeatable tasks, while people review exceptions and decisions that need judgement. Grace Technologies helps UK businesses identify practical opportunities and design automation around their systems and goals, in partnership with Ank Square in India.
            </motion.p>

            <motion.div
              className={styles.ctaWrap}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button href="/about" variant="secondary" size="md" icon>
                About Us
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Abstract editorial architectural visualization card */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.interactivePillarCard}>
              <div className={styles.cardHeaderStrip}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.systemTag}>SYSTEM ARCHITECTURE // GT-UK-IN</span>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.cardHeading}>Technology That Delivers Real Results.</p>
                <p className={styles.cardText}>
                  At Grace Technologies, we combine strategic business insight with technical expertise to deliver AI automation that addresses practical operational needs. Projects are managed in the United Kingdom and delivered in partnership with Ank Square Private Limited in India, with solutions tailored to each client’s systems and objectives.                </p>
                <div className={styles.valuesList}>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <p className={styles.valTitle}>Strategic Business Alignment</p>
                      <p className={styles.valDesc}>Connecting technology decisions with business goals to deliver meaningful results.</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <p className={styles.valTitle}>Tailored Technology Solutions</p>
                      <p className={styles.valDesc}>Designing practical automation around your business processes and existing systems.</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <p className={styles.valTitle}>Reliable Project Delivery</p>
                      <p className={styles.valDesc}>Ensuring transparent communication, structured project management, timely delivery, and ongoing support.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient visual overlay */}
              <div className={styles.cardMesh} />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
