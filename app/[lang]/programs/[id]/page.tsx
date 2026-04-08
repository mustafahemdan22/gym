'use client';

import React, { use } from 'react';
import { motion } from 'framer-motion';
import { IoTime, IoCalendar, IoFlash, IoFitness, IoArrowBack, IoCheckmarkCircle, IoShieldCheckmark, IoHeart } from 'react-icons/io5';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useGymData } from '@/hooks/useGymData';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import styles from './program-detail.module.css';

export default function ProgramDetailPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = use(params);
  const { programs, contentMode, isLoading } = useGymData();
  const isAr = lang === 'ar';

  if (isLoading) {
    return <div className={styles.loading}>{isAr ? 'جاري التحميل...' : 'Loading Program Details...'}</div>;
  }

  const program = programs.find((p) => p.id === id);

  if (!program) {
    return notFound();
  }

  const imageUrl = getCloudinaryUrl(program.image, { width: 1200, height: 675, crop: 'fill' });

  const benefits = {
    male: [
      { 
        icon: IoFlash, 
        title: { en: 'Maximum Strength', ar: 'أقصى قدر من القوة' }, 
        desc: { en: 'Harness explosive power through structured progressive overload.', ar: 'استغل القوة الانفجارية من خلال التحميل التدريجي المنظم.' } 
      },
      { 
        icon: IoFitness, 
        title: { en: 'Muscle Hypertrophy', ar: 'تضخم العضلات' }, 
        desc: { en: 'Scientifically backed volume for optimal muscle growth and density.', ar: 'حجم تدريبي مدعوم علمياً لنمو عضلي وكثافة مثالية.' } 
      },
      { 
        icon: IoShieldCheckmark, 
        title: { en: 'Elite Performance', ar: 'أداء النخبة' }, 
        desc: { en: 'Train like a professional athlete with performance-driven routines.', ar: 'تدرب كرياضي محترف مع روتين قائم على الأداء.' } 
      },
    ],
    female: [
      { 
        icon: IoHeart, 
        title: { en: 'Lean Toning', ar: 'نحت الجسم' }, 
        desc: { en: 'Achieve a lean, defined physique without unnecessary bulk.', ar: 'حققي قواماً ممشوقاً ومحدداً دون ضخامة غير ضرورية.' } 
      },
      { 
        icon: IoFitness, 
        title: { en: 'Functional Core', ar: 'العضلات الأساسية' }, 
        desc: { en: 'Strengthen your core for better posture and daily vitality.', ar: 'قوي عضلاتك الأساسية لتحسين الوضعية والحيوية اليومية.' } 
      },
      { 
        icon: IoShieldCheckmark, 
        title: { en: 'Wellness Balance', ar: 'توازن العافية' }, 
        desc: { en: 'Harmonious blend of high-intensity and recovery for mental clarity.', ar: 'مزيج متناغم من الكثافة العالية والتعافي لصفاء الذهن.' } 
      },
    ],
  }[contentMode];

  return (
    <div className={styles.programDetail}>
      <div className={styles.container}>
        <Link href={`/${lang}/programs`} className={styles.backLink}>
          <IoArrowBack /> {isAr ? 'العودة للبرامج' : 'Back to Programs'}
        </Link>

        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.category}>
              <IoFlash /> {program.category}
            </span>
            <h1 className={styles.title}>{isAr ? program.title.ar : program.title.en}</h1>
            <p className={styles.desc}>{isAr ? program.description.ar : program.description.en}</p>
            
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <IoTime className={styles.metaIcon} />
                <span className={styles.metaVal}>{program.duration}</span>
                <span className={styles.metaLabel}>{isAr ? 'المدة' : 'Duration'}</span>
              </div>
              <div className={styles.metaItem}>
                <IoCalendar className={styles.metaIcon} />
                <span className={styles.metaVal}>{program.sessions}x</span>
                <span className={styles.metaLabel}>{isAr ? 'أسبوعياً' : 'Weekly'}</span>
              </div>
              <div className={styles.metaItem}>
                <IoFlash className={styles.metaIcon} />
                <span className={styles.metaVal}>{program.intensity}</span>
                <span className={styles.metaLabel}>{isAr ? 'الشدة' : 'Intensity'}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.imageWrap}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={imageUrl} alt={isAr ? program.title.ar : program.title.en} className={styles.image} />
            <div className={styles.imageOverlay} />
          </motion.div>
        </section>

        {/* Overview & Benefits */}
        <section className={styles.overviewSection}>
          <h2 className={styles.sectionTitle}>{isAr ? 'فوائد البرنامج' : 'Program Benefits'}</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  key={i} 
                  className={styles.benefitCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Icon className={styles.benefitIcon} />
                  <h3 className={styles.benefitTitle}>{isAr ? benefit.title.ar : benefit.title.en}</h3>
                  <p className={styles.benefitDesc}>{isAr ? benefit.desc.ar : benefit.desc.en}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Conversion CTA */}
        <motion.section 
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.ctaTitle}>{isAr ? 'ابدأ تحولك اليوم' : 'Start Your Transformation'}</h2>
          <p className={styles.ctaDesc}>
            {isAr 
              ? 'انضم لمئات المتدربين الذين حققوا أهدافهم مع برامجنا المتخصصة. خطتك للنجاح تبدأ من هنا.' 
              : 'Join hundreds of members who have achieved their goals with our specialized programs. Your path to success starts here.'}
          </p>
          <div className={styles.btnGroup}>
            <Link href={`/${lang}/schedule?programId=${program.id}`} className={styles.btnPrimary}>
              {isAr ? 'سجل الآن' : 'ENROLL NOW'}
            </Link>
            <Link href={`/${lang}/pricing`} className={styles.btnSecondary}>
              {isAr ? 'عرض الأسعار' : 'VIEW PRICING'}
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
