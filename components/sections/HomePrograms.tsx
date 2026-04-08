'use client';

import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useGymData } from '@/hooks/useGymData';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import Link from 'next/link';
import styles from './HomePrograms.module.css';

interface HomeProgramsProps {
  lang: string;
}

const HomePrograms: React.FC<HomeProgramsProps> = ({ lang }) => {
  const { programs, contentMode, isLoading } = useGymData();
  const isAr = lang === 'ar';
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const sectionTitle = {
    male: { en: 'DOMINATE YOUR GOALS', ar: 'سيطر على أهدافك' },
    female: { en: 'YOUR JOURNEY STARTS HERE', ar: 'رحلتك تبدأ هنا' },
  };

  const sectionSub = {
    male: { en: 'Battle-tested programs built for strength, power, and relentless progress.', ar: 'برامج مُجرّبة مصممة للقوة والتقدم بلا توقف.' },
    female: { en: 'Curated wellness programs designed to sculpt, energize, and inspire.', ar: 'برامج عافية مختارة بعناية لنحت الجسم والطاقة والإلهام.' },
  };

  return (
    <section className={styles.programs} id="programs" ref={ref}>
      {isLoading ? (
        <div className={styles.loadingWrap}>
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }} 
            transition={{ duration: 1.5, repeat: Infinity }}
            className={styles.loadingText}
          >
            {isAr ? 'جاري تحميل البرامج...' : 'LOADING POWER PROGRAMS...'}
          </motion.div>
        </div>
      ) : (
        <>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.tag}>
              {isAr ? 'البرامج' : 'PROGRAMS'}
            </span>
            <h2 className={styles.title}>
              {isAr ? sectionTitle[contentMode].ar : sectionTitle[contentMode].en}
            </h2>
            <p className={styles.subtitle}>
              {isAr ? sectionSub[contentMode].ar : sectionSub[contentMode].en}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              className={styles.grid}
              key={contentMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {programs.map((prog, i) => {
                const imageUrl = getCloudinaryUrl(prog.image, { width: 600, height: 400 });
                return (
                  <motion.div
                    key={prog.id}
                    className={styles.card}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * i, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                  >
                    <Link href={`/${lang}/programs/${prog.id}`} style={{ textDecoration: 'none' }}>
                      <div className={styles.cardImage}>
                        <img
                          src={imageUrl}
                          alt={isAr ? prog.title.ar : prog.title.en}
                          loading="lazy"
                        />
                        <div className={styles.cardOverlay} />
                        <span className={styles.intensity} data-level={prog.intensity.toLowerCase()}>
                          {prog.intensity}
                        </span>
                      </div>
                      <div className={styles.cardBody}>
                        <h3 className={styles.cardTitle}>
                          {isAr ? prog.title.ar : prog.title.en}
                        </h3>
                        <p className={styles.cardDesc}>
                          {isAr ? prog.description.ar : prog.description.en}
                        </p>
                        <div className={styles.cardMeta}>
                          <span className={styles.metaItem}>{prog.duration}</span>
                          <span className={styles.metaDot}>•</span>
                          <span className={styles.metaItem}>{prog.sessions}x / {isAr ? 'أسبوع' : 'week'}</span>
                        </div>
                        <button className={styles.cardBtn}>
                          {isAr ? 'عرض التفاصيل' : 'VIEW DETAILS'}
                        </button>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </section>
  );
};

export default HomePrograms;
