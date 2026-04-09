'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { getCloudinaryUrl, getHeroImage } from '@/lib/cloudinary';
import Link from 'next/link';
import styles from './Hero.module.css';


interface HeroProps {
  lang: string;
}

const heroContent = {
  male: {
    title: { en: 'UNLEASH YOUR POWER', ar: 'أَطلِق قوّتك' },
    subtitle: {
      en: 'Train harder. Get stronger. Break every limit.',
      ar: 'تدرّب بقوة أكبر وكن أقوى.',
    },
    cta: { en: 'START TRAINING', ar: 'ابدأ التدريب' },
    cta2: { en: 'VIEW PROGRAMS', ar: 'عرض البرامج' },
  },
  female: {
    title: { en: 'GLOWING WITH FITNESS', ar: 'تألّقي بلياقة' },
    subtitle: {
      en: 'Move with confidence. Discover your power.',
      ar: 'تحرّكي بثقة واكتشفي قوتك.',
    },
    cta: { en: 'JOIN NOW', ar: 'انضمّي الآن' },
    cta2: { en: 'EXPLORE CLASSES', ar: 'استكشفي الصفوف' },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  },
};

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const { contentMode } = useTheme();
  const isAr = lang === 'ar';
  const content = heroContent[contentMode];
  const heroImagePath = getHeroImage(contentMode);
  const heroImageUrl = getCloudinaryUrl(heroImagePath, {
    width: 1920,
    height: 1080,
    quality: 'auto',
  });

  return (
    <section className={styles.hero} id="home">
      <div 
        className={styles.heroBg} 
        style={{ backgroundImage: `url(${heroImageUrl})` }} 
      />

      <motion.div
        className={styles.heroContent}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className={`${styles.heroTitle} ${isAr ? styles.heroTitleAr : ''}`}
          animate="visible"
          initial="hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 5,
              },
            },
          }}
        >
          {isAr ? (
            content.title.ar.split(' ').map((word, wordIndex, array) => (
              <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                <motion.span
                  variants={charVariants}
                  style={{ display: 'inline-block' }}
                >
                  {word}
                </motion.span>
                {wordIndex < array.length - 1 && (
                  <motion.span
                    variants={charVariants}
                    style={{ display: 'inline-block', whiteSpace: 'pre' }}
                  >
                    {' '}
                  </motion.span>
                )}
              </span>
            ))
          ) : (
            content.title.en.split(' ').map((word, wordIndex, array) => (
              <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                {Array.from(word).map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={charVariants}
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < array.length - 1 && (
                  <motion.span
                    variants={charVariants}
                    style={{ display: 'inline-block', whiteSpace: 'pre' }}
                  >
                    {' '}
                  </motion.span>
                )}
              </span>
            ))
          )}
        </motion.h1>

        <motion.p className={styles.heroSubtitle} variants={fadeUp}>
          {isAr ? content.subtitle.ar : content.subtitle.en}
        </motion.p>

        <motion.div className={styles.heroActions} variants={fadeUp}>
          <Link href={`/${lang}/schedule`} className={styles.primaryBtn} style={{ textDecoration: 'none' }}>
            {isAr ? content.cta.ar : content.cta.en}
          </Link>
          <Link href={`/${lang}/programs`} className={styles.primaryBtn} style={{ textDecoration: 'none' }}>
            {isAr ? content.cta2.ar : content.cta2.en}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;