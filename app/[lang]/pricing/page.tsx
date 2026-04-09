'use client';

import React, { use } from 'react';
import { motion } from 'framer-motion';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useTheme } from '@/context/ThemeContext';
import { getCloudinaryUrl, getHeroImage } from '@/lib/cloudinary';
import Link from 'next/link';
import styles from './pricing.module.css';

export default function PricingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const { contentMode } = useTheme();
  const isAr = lang === 'ar';

  const plans = useQuery(api.pricing.listByMode, { mode: contentMode });

  if (!plans) {
    return (
      <div className={styles.loadingWrap}>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={styles.loadingText}
        >
          {isAr ? 'جاري تحميل الخطط...' : 'LOADING POWER PLANS...'}
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

  const headers = {
    male: {
      tag: { en: 'INVEST IN YOURSELF', ar: 'استثمر في نفسك' },
      title: { en: 'FORCE PRICING', ar: 'أسعار القوة' },
      subtitle: { en: 'Choose the level of commitment that matches your ambition. No shortcuts, only progress.', ar: 'اختر مستوى الالتزام الذي يناسب طموحك. لا توجد طرق مختصرة، فقط تقدم.' }
    },
    female: {
      tag: { en: 'CHOOSE YOUR GLOW', ar: 'اختاري توهجك' },
      title: { en: 'WELLNESS PLANS', ar: 'خطط العافية' },
      subtitle: { en: 'Invest in your health, confidence, and radiance. Find the plan that fits your lifestyle.', ar: 'استثمري في صحتك وثقتك وإشراقك. ابحثي عن الخطة التي تناسم أسلوب حياتك.' }
    },
  };

  const h = headers[contentMode];

  return (
    <div className={styles.pricing}>
      <div className={styles.pricingHero}>
        <div className={styles.heroBg}>
          <img src={heroImageUrl} alt="" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          key={contentMode}
        >
          <span className={styles.tag}>{isAr ? h.tag.ar : h.tag.en}</span>
          <h1 className={styles.title}>{isAr ? h.title.ar : h.title.en}</h1>
          <p className={styles.subtitle}>{isAr ? h.subtitle.ar : h.subtitle.en}</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={`${styles.card} ${plan.isPopular ? styles.cardPopular : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {plan.isPopular && (
                <div className={styles.popularBadge}>{isAr ? 'الأكثر طلبًا' : 'MOST POPULAR'}</div>
              )}
              <h3 className={styles.planName}>{isAr ? plan.name.ar : plan.name.en}</h3>
              <div className={styles.price}>
                <span className={styles.amount}>{plan.price}</span>
                <span className={styles.period}>/ {isAr ? plan.period.ar : plan.period.en}</span>
              </div>
              <div className={styles.featureList}>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <IoCheckmarkCircle className={styles.check} />
                    <p>{isAr ? feature.ar : feature.en}</p>
                  </div>
                ))}
              </div>
              <Link href={`/${lang}/schedule`} className={`${styles.btn} ${plan.isPopular ? styles.btnPopular : ''} ${styles.linkBtn}`} style={{ textDecoration: 'none' }}>
                {isAr ? 'ابدأ الآن' : 'GET STARTED'}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
