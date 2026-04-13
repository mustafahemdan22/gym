'use client';

import React, { use } from 'react';
import { motion } from 'framer-motion';
import { IoStar, IoCheckmarkCircle, IoTime, IoTrophy, IoFitness, IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useGymData } from '@/hooks/useGymData';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import styles from './trainer.module.css';

export default function TrainerDetailPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = use(params);
  const { trainers, contentMode, isLoading } = useGymData();
  const isAr = lang === 'ar';

  if (isLoading) {
    return <div className={styles.loading}>{isAr ? 'جاري التحميل...' : 'Loading Coach Details...'}</div>;
  }

  const trainer = trainers.find((t) => t.id === id);

  if (!trainer) {
    return notFound();
  }

  const imageUrl = getCloudinaryUrl(trainer.image, { width: 800, height: 1000, crop: 'fill', gravity: 'face' });

  const specialties = {
    male: [
      { en: 'Hypertrophy Training', ar: 'تدريب تضخيم العضلات' },
      { en: 'Strength & Conditioning', ar: 'القوة والتكييف' },
      { en: 'Competition Prep', ar: 'التحضير للمنافسات' },
    ],
    female: [
      { en: 'Functional Wellness', ar: 'العافية الوظيفية' },
      { en: 'Post-Pregnancy Fitness', ar: 'لياقة ما بعد الحمل' },
      { en: 'Yoga & Mobility', ar: 'اليوغا والمرونة' },
    ],
  }[contentMode];

  const certifications = [
    { en: 'NASM Certified Personal Trainer', ar: 'مدرب شخصي معتمد من NASM' },
    { en: 'Precision Nutrition Level 1', ar: 'أخصائي تغذية معتمد' },
    { en: 'Advanced Olympic Lifting', ar: 'رفع الأثقال الأولمبي المتقدم' },
  ];

  return (
    <div className={styles.trainerDetail}>
      <div className={styles.container}>
        <button onClick={() => window.history.back()} className={styles.backBtn}>
          <IoArrowBack /> {isAr ? 'العودة للمدربين' : 'Back to Trainers'}
        </button>

        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div 
            className={styles.imageWrap}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={imageUrl} alt={isAr ? trainer.name.ar : trainer.name.en} className={styles.image} />
            <div className={styles.imageOverlay} />
          </motion.div>

          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.tag}>{isAr ? 'مدرب معتمد' : 'CERTIFIED TRAINER'}</span>
            <h1 className={styles.name}>{isAr ? trainer.name.ar : trainer.name.en}</h1>
            <p className={styles.role}>{isAr ? trainer.role.ar : trainer.role.en}</p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>{trainer.experience}+</span>
                <span className={styles.statLabel}>{isAr ? 'سنوات الخبرة' : 'Years Experience'}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>98%</span>
                <span className={styles.statLabel}>{isAr ? 'رضا العملاء' : 'Client Satisfaction'}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>100+</span>
                <span className={styles.statLabel}>{isAr ? 'عملاء ناجحين' : 'Success Stories'}</span>
              </div>
            </div>

            <div className={styles.btnGroup}>
              <Link href={`/${lang}/schedule?trainerId=${trainer.id}`} className={styles.btnPrimary} style={{ textDecoration: 'none' }}>
                {isAr ? 'احجز استشارة' : 'BOOKING'}
              </Link>
              <Link href={`/${lang}/contact`} className={styles.btnSecondary} style={{ textDecoration: 'none' }}>
                {isAr ? 'تواصل معنا' : 'MESSAGE COACH'}
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Biography */}
        <motion.section 
          className={styles.bioSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}><IoFitness className={styles.listIcon} /> {isAr ? 'نبذة عن المدرب' : 'Biography'}</h2>
          <p className={styles.bioText}>{isAr ? trainer.bio.ar : trainer.bio.en}</p>
        </motion.section>

        {/* Grid for Specialties and Certs */}
        <div className={styles.grid}>
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>{isAr ? 'التخصصات' : 'Specialties'}</h3>
            <ul className={styles.list}>
              {specialties.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <IoCheckmarkCircle className={styles.listIcon} />
                  <span>{isAr ? item.ar : item.en}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>{isAr ? 'الشهادات' : 'Certifications'}</h3>
            <ul className={styles.list}>
              {certifications.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <IoTrophy className={styles.listIcon} />
                  <span>{isAr ? item.ar : item.en}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Schedule/Booking Footer */}
        <motion.section 
          className={styles.booking}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.bookTitle}>{isAr ? 'جاهز للبدء؟' : 'READY TO START?'}</h2>
          <p className={styles.bookDesc}>
            {isAr 
              ? `ابدأ رحلة تحولك مع ${trainer.name.ar} اليوم. الجلسة الأولى مجانية.` 
              : `Start your transformation journey with ${trainer.name.en} today. First session is on us.`}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`/${lang}/schedule?trainerId=${trainer.id}`} className={styles.btn} style={{ textDecoration: 'none' }}>
              {isAr ? 'احجز موعدك' : 'SCHEDULE NOW'}
            </Link>
            <Link href={`/${lang}/pricing`} className={styles.btn} style={{ background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none' }}>
              {isAr ? 'عرض خطط الأسعار' : 'VIEW PRICING PLANS'}
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
