'use client';

import React, { useState, useMemo, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGymData } from '@/hooks/useGymData';
import { getCloudinaryUrl, getHeroImage } from '@/lib/cloudinary';
import Link from 'next/link';
import styles from './programs.module.css';

export default function ProgramsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const { programs, contentMode, isLoading } = useGymData();
  const [activeFilter, setActiveFilter] = useState('all');
  const isAr = lang === 'ar';

  const filters = useMemo(() => {
    const categories = Array.from(new Set(programs.map(p => p.category)));
    return ['all', ...categories];
  }, [programs]);

  const filteredPrograms = useMemo(() => {
    if (activeFilter === 'all') return programs;
    return programs.filter(p => p.category === activeFilter);
  }, [programs, activeFilter]);

  if (isLoading) {
    return (
      <div className={styles.loadingWrap}>
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
          className={styles.loadingText}
        >
          {isAr ? 'جاري تحميل البرامج...' : 'LOADING PROGRAMS...'}
        </motion.div>
      </div>
    );
  }

  const heroImagePath = getHeroImage(contentMode);
  const heroImageUrl = getCloudinaryUrl(heroImagePath, {
    width: 1920,
    height: 1080,
    quality: 'auto',
  });

  const h = {
    male: {
      tag: { en: 'TRAIN LIKE A PRO', ar: 'تدرب كالمحترفين' },
      title: { en: 'STRENGTH PROGRAMS', ar: 'برامج القوة' },
    },
    female: {
      tag: { en: 'FIND YOUR GLOW', ar: 'ابحثي عن توهجك' },
      title: { en: 'WELLNESS PROGRAMS', ar: 'برامج العافية' },
    },
  }[contentMode];

  return (
    <div className={styles.programs}>
      <div className={styles.programsHero}>
        <div className={styles.heroBg}>
          <img src={heroImageUrl} alt="" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.header}>
          <span className={styles.tag}>{isAr ? h.tag.ar : h.tag.en}</span>
          <h1 className={styles.title}>{isAr ? h.title.ar : h.title.en}</h1>
        </div>
      </div>

      <div className={styles.container}>
        {/* Filter Bar */}
        <div className={styles.filters}>
          {filters.map(f => (
            <button
              key={f}
              className={activeFilter === f ? styles.filterBtnActive : styles.filterBtn}
              onClick={() => setActiveFilter(f)}
            >
              {f === 'all' ? (isAr ? 'الكل' : 'All') : f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {filteredPrograms.length > 0 ? (
            <motion.div
              className={styles.grid}
              key={activeFilter + contentMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {filteredPrograms.map((prog, i) => {
                const imageUrl = getCloudinaryUrl(prog.image, { width: 600, height: 400 });
                return (
                  <motion.div
                    key={prog.id}
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={`/${lang}/programs/${prog.id}`} style={{ textDecoration: 'none' }}>
                      <div className={styles.cardImage}>
                        <img src={imageUrl} alt={isAr ? prog.title.ar : prog.title.en} loading="lazy" />
                        <div className={styles.cardOverlay} />
                        <span className={styles.intensity} data-level={prog.intensity.toLowerCase()}>
                          {prog.intensity}
                        </span>
                      </div>
                      <div className={styles.cardBody}>
                        <h3 className={styles.cardTitle}>{isAr ? prog.title.ar : prog.title.en}</h3>
                        <p className={styles.cardDesc}>{isAr ? prog.description.ar : prog.description.en}</p>
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
          ) : (
            <div className={styles.empty}>
              <h3>{isAr ? 'لا توجد برامج' : 'No Programs Found'}</h3>
              <p>{isAr ? 'جرب تغيير عامل التصفية' : 'Try changing your filter'}</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
