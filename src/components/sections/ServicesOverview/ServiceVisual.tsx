'use client';

import React from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MemoryIcon from '@mui/icons-material/Memory';
import styles from './ServiceVisual.module.css';

interface ServiceVisualProps {
  serviceId: string;
}

export default function ServiceVisual({ serviceId }: ServiceVisualProps) {
  if (serviceId !== 'ai-automation') return null;

  return (
    <div className={styles.visualContainer} aria-label="AI automation workflow illustration">
      <div className={styles.ambientGlow} />
      <div className={styles.aiBotStage}>
        <div className={styles.aiHeaderPill}>
          <div className={styles.aiStatusDot} />
          <span className={styles.aiStatusText}>AI WORKFLOW CONCEPT</span>
        </div>

        <div className={styles.botContainer}>
          <div className={styles.auraRingOuter} />
          <div className={styles.auraRingInner} />
          <div className={styles.botChassis}>
            <div className={styles.botHead}>
              <div className={styles.botVisor}>
                <AutoAwesomeIcon className={styles.coreSparkle} />
              </div>
              <span className={`${styles.earNode} ${styles.earLeft}`} />
              <span className={`${styles.earNode} ${styles.earRight}`} />
            </div>
            <div className={styles.botTorso}>
              <div className={styles.coreReactor}>
                <MemoryIcon className={styles.coreSparkle} />
              </div>
              <div className={styles.circuitLines}>
                <span className={styles.cLine} />
                <span className={styles.cLine} />
              </div>
            </div>
            <div className={styles.botThrusterGlow} />
          </div>

          <div className={`${styles.satelliteChip} ${styles.satelliteLeft}`}>
            <div className={styles.chipMeta}>
              <span className={styles.chipTitle}>Input</span>
              <span className={styles.chipVal}>Business data</span>
            </div>
          </div>
          <div className={`${styles.satelliteChip} ${styles.satelliteRight}`}>
            <div className={styles.chipMeta}>
              <span className={styles.chipTitle}>Review</span>
              <span className={styles.chipVal}>Human oversight</span>
            </div>
          </div>
        </div>

        <div className={styles.aiCapabilityStrip}>
          <div className={styles.capItem}>
            <span>Workflow automation</span>
          </div>
          <div className={styles.capItem}>
            <span>Connected business tools</span>
          </div>
          <div className={styles.capItem}>
            <span>Review when needed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
