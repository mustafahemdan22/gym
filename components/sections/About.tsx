'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IoFitness, IoFlash, IoTrophy, IoPeople } from 'react-icons/io5';
import { useTheme } from '@/context/ThemeContext';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import styles from './About.module.css';

interface AboutProps {
  lang: string;
}

const aboutContent = {
  male: {
    tag: { en: 'ABOUT GYMHUB', ar: 'عن جيم هب' },
    title: { en: 'FORGED IN STEEL', ar: 'مصاغ من الفولاذ' },
    desc: {
      en: 'GymHub is more than a gym — it\'s a battleground for those who refuse to settle. Our state-of-the-art facility, world-class coaches, and proven programs are designed to transform raw potential into elite performance.',
      ar: 'جيم هب أكثر من مجرد صالة رياضية — إنها ساحة معركة لمن يرفضون القبول بالأقل. مرافقنا المتطورة ومدربونا العالميون وبرامجنا المُثبتة مصممة لتحويل الإمكانات الخام إلى أداء نخبوي.',
    },
    stats: [
      { icon: IoFitness, value: '150+', label: { en: 'Equipment Units', ar: 'وحدة معدات' } },
      { icon: IoFlash, value: '25+', label: { en: 'Programs', ar: 'برنامج' } },
      { icon: IoTrophy, value: '500+', label: { en: 'Champions', ar: 'بطل' } },
      { icon: IoPeople, value: '3K+', label: { en: 'Members', ar: 'عضو' } },
    ],
  },
  female: {
    tag: { en: 'ABOUT GYMHUB', ar: 'عن جيم هب' },
    title: { en: 'BUILT FOR BRILLIANCE', ar: 'مصمّم للتألّق' },
    desc: {
      en: 'GymHub is your sanctuary for transformation. Our welcoming space, expert wellness coaches, and holistic programs are crafted to help you shine from the inside out — at your pace, on your terms.',
      ar: 'جيم هب هو ملاذك للتحوّل. مساحتنا الترحيبية ومدربات العافية الخبيرات وبرامجنا الشاملة مصمّمة لمساعدتك على التألّق من الداخل إلى الخارج — بوتيرتك ووفق شروطك.',
    },
    stats: [
      { icon: IoFitness, value: '80+', label: { en: 'Class Types', ar: 'نوع صف' } },
      { icon: IoFlash, value: '30+', label: { en: 'Programs', ar: 'برنامج' } },
      { icon: IoTrophy, value: '1K+', label: { en: 'Transformations', ar: 'تحوّل' } },
      { icon: IoPeople, value: '5K+', label: { en: 'Members', ar: 'عضوة' } },
    ],
  },
};

const About: React.FC<AboutProps> = ({ lang }) => {
  const { contentMode } = useTheme();
  const isAr = lang === 'ar';
  const content = aboutContent[contentMode];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const images = {
    male: "GymHub/about/about-man",
    female: "GymHub/about/about-women"
  };

  const imageUrl = getCloudinaryUrl(images[contentMode], {
    width: 1200,
    height: 800,
    quality: 'auto'
  });

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.grid}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, x: isAr ? 60 : -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img src={imageUrl} alt="GymHub Interior" className={styles.image} />
          <div className={styles.imageOverlay} />
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: isAr ? -60 : 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.tag}>
            {isAr ? content.tag.ar : content.tag.en}
          </span>
          <h2 className={styles.title}>
            {isAr ? content.title.ar : content.title.en}
          </h2>
          <p className={styles.desc}>
            {isAr ? content.desc.ar : content.desc.en}
          </p>

          <div className={styles.statsGrid}>
            {content.stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  className={styles.statCard}
                  key={`${contentMode}-stat-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                >
                  <Icon className={styles.statIcon} />
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>
                    {isAr ? stat.label.ar : stat.label.en}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
