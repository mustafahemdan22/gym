'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { getCloudinaryUrl, getHeroImage } from '@/lib/cloudinary';
import Link from 'next/link';
import styles from './CTA.module.css';

interface CTAProps {
  lang: string;
}

const ctaContent = {
  male: {
    title: { en: 'READY TO DOMINATE?', ar: 'مستعد للسيطرة؟' },
    desc: {
      en: 'Stop dreaming. Start lifting. Join the ranks of champions who chose to be extraordinary.',
      ar: 'توقف عن الحلم. ابدأ الرفع. انضم إلى صفوف الأبطال الذين اختاروا أن يكونوا استثنائيين.',
    },
    btn: { en: 'START NOW', ar: 'ابدأ الآن' },
  },
  female: {
    title: { en: 'READY TO TRANSFORM?', ar: 'مستعدة للتحوّل؟' },
    desc: {
      en: 'Your strongest, most radiant self is waiting. Take the first step toward a life of balance and confidence.',
      ar: 'ذاتك الأقوى والأكثر إشراقاً تنتظرك. خذي الخطوة الأولى نحو حياة من التوازن والثقة.',
    },
    btn: { en: 'JOIN TODAY', ar: 'انضمّي اليوم' },
  },
};

const CTA: React.FC<CTAProps> = ({ lang }) => {
  const { contentMode } = useTheme();
  const isAr = lang === 'ar';
  const content = ctaContent[contentMode];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const heroPath = getHeroImage(contentMode);
  const bgUrl = getCloudinaryUrl(heroPath, { width: 1920, height: 1080 });

  return (
    <section className={styles.cta} ref={ref}>
      <div className={styles.bgContainer}>
        <img src={bgUrl} alt="" className={styles.bgImage} />
        <div className={styles.overlay} />
      </div>

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        key={contentMode}
      >
        <div className={styles.glowOrb} />
        <h2 className={styles.title}>
          {isAr ? content.title.ar : content.title.en}
        </h2>
        <p className={styles.desc}>
          {isAr ? content.desc.ar : content.desc.en}
        </p>
        <Link href={`/${lang}/schedule`} style={{ textDecoration: 'none' }}>
          <motion.div
            className={styles.btn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAr ? content.btn.ar : content.btn.en}
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default CTA;
