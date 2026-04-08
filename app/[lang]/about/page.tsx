'use client';

import React, { useRef, use } from 'react';
import { motion, useInView } from 'framer-motion';
import { IoFitness, IoHeart, IoFlash, IoShield, IoPeople, IoTrophy } from 'react-icons/io5';
import { useTheme } from '@/context/ThemeContext';
import { getCloudinaryUrl, getHeroImage } from '@/lib/cloudinary';
import styles from './about.module.css';

export default function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const { contentMode } = useTheme();
  
  const heroImagePath = getHeroImage(contentMode);
  const heroImageUrl = getCloudinaryUrl(heroImagePath, {
    width: 1920,
    height: 1080,
    quality: 'auto',
  });
  const isAr = lang === 'ar';
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const content = {
    male: {
      tag: { en: 'WHO WE ARE', ar: 'من نحن' },
      title: { en: 'BUILT FOR WARRIORS', ar: 'مصنوع للمحاربين' },
      desc: { en: 'GymHub was founded on a simple belief: every man deserves access to world-class strength and conditioning. We bring elite coaching, cutting-edge equipment, and a relentless culture under one roof.', ar: 'تأسس جيم هب على إيمان بسيط: كل رجل يستحق الوصول إلى تدريب القوة والتكييف عالمي المستوى. نجمع التدريب النخبوي والمعدات المتطورة وثقافة لا تتوقف تحت سقف واحد.' },
      hero: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1920&auto=format&fit=crop",
      mission: {
        title: { en: 'OUR MISSION', ar: 'مهمتنا' },
        p1: { en: 'To create an environment where strength is not just physical — it\'s a mindset. We push boundaries, break limits, and build champions.', ar: 'خلق بيئة حيث القوة ليست مادية فقط — إنها عقلية. ندفع الحدود ونكسر القيود ونبني أبطالاً.' },
        p2: { en: 'With over 10 years of experience, our team has trained national-level athletes, competitive bodybuilders, and everyday warriors who choose greatness.', ar: 'مع أكثر من 10 سنوات من الخبرة، دربّ فريقنا رياضيين على المستوى الوطني ولاعبي كمال أجسام تنافسيين ومحاربين يوميين يختارون العظمة.' },
      },
      values: [
        { icon: IoFlash, title: { en: 'Raw Power', ar: 'قوة خام' }, desc: { en: 'We train for explosive strength and raw, unfiltered power.', ar: 'ندرب على القوة الانفجارية والقوة الخام.' } },
        { icon: IoShield, title: { en: 'Discipline', ar: 'انضباط' }, desc: { en: 'Consistency and discipline are the foundation of every program.', ar: 'الاتساق والانضباط هما أساس كل برنامج.' } },
        { icon: IoTrophy, title: { en: 'Competition', ar: 'منافسة' }, desc: { en: 'We foster a competitive spirit that drives continuous improvement.', ar: 'نعزز روح المنافسة التي تدفع التحسين المستمر.' } },
      ],
    },
    female: {
      title: { en: 'DESIGNED FOR BRILLIANCE', ar: 'مصمّم للتألّق' },
      desc: { en: 'GymHub is a sanctuary for women who believe in the power of movement. We combine expert coaching, beautiful spaces, and holistic programs to help you thrive — body, mind, and soul.', ar: 'جيم هب هو ملاذ للنساء اللواتي يؤمنّ بقوة الحركة. نجمع التدريب الخبير والمساحات الجميلة والبرامج الشاملة لمساعدتك على التألق — جسداً وعقلاً وروحاً.' },
      hero: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1920&auto=format&fit=crop",
      mission: {
        title: { en: 'OUR MISSION', ar: 'مهمتنا' },
        p1: { en: 'To create a welcoming, empowering space where every woman can discover her strength, celebrate her progress, and radiate confidence.', ar: 'خلق مساحة ترحيبية وتمكينية حيث يمكن لكل امرأة اكتشاف قوتها والاحتفال بتقدمها وإشعاع الثقة.' },
        p2: { en: 'We believe fitness is not about perfection — it\'s about progress, self-love, and building a lifestyle that makes you glow.', ar: 'نؤمن أن اللياقة ليست عن الكمال — إنها عن التقدم وحب الذات وبناء أسلوب حياة يجعلك تتألقين.' },
      },
      values: [
        { icon: IoHeart, title: { en: 'Wellness', ar: 'عافية' }, desc: { en: 'Holistic approach to health, balance, and inner peace.', ar: 'نهج شامل للصحة والتوازن والسلام الداخلي.' } },
        { icon: IoPeople, title: { en: 'Community', ar: 'مجتمع' }, desc: { en: 'A supportive sisterhood that lifts you higher every day.', ar: 'أخوّة داعمة ترفعك أعلى كل يوم.' } },
        { icon: IoFitness, title: { en: 'Empowerment', ar: 'تمكين' }, desc: { en: 'Programs designed to make you feel strong, capable, and radiant.', ar: 'برامج مصممة لتجعلك تشعرين بالقوة والقدرة والإشراق.' } },
      ],
    },
  };

  const c = content[contentMode];
  const missionImg = getCloudinaryUrl(`GymHub/about/about-${contentMode === 'male' ? 'man' : 'women'}`, { 
    width: 600, 
    height: 500,
    crop: 'fill'
  });

  const timeline = [
    { year: '2015', title: { en: 'The Beginning', ar: 'البداية' }, desc: { en: 'GymHub opened its first location with 20 members and a dream.', ar: 'افتتح جيم هب أول موقع له مع 20 عضواً وحلم.' } },
    { year: '2018', title: { en: 'Rapid Growth', ar: 'نمو سريع' }, desc: { en: 'Expanded to 3 locations with over 2,000 active members.', ar: 'توسعنا إلى 3 مواقع مع أكثر من 2000 عضو نشط.' } },
    { year: '2021', title: { en: 'Digital Launch', ar: 'الإطلاق الرقمي' }, desc: { en: 'Launched online coaching and virtual training programs.', ar: 'أطلقنا التدريب عبر الإنترنت وبرامج التدريب الافتراضية.' } },
    { year: '2024', title: { en: 'Elite Status', ar: 'مرتبة النخبة' }, desc: { en: 'Recognized as a top-tier fitness destination with 5K+ members.', ar: 'اعتُرف بنا كوجهة لياقة من الدرجة الأولى مع أكثر من 5000 عضو.' } },
  ];

  return (
    <div className={styles.about} ref={ref}>
      <div className={styles.aboutHero}>
        <div className={styles.heroBg}>
          <img src={heroImageUrl} alt="" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        
        <motion.div className={styles.banner} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} key={contentMode}>
          <h1 className={styles.bannerTitle}>{isAr ? c.title.ar : c.title.en}</h1>
          <p className={styles.bannerDesc}>{isAr ? c.desc.ar : c.desc.en}</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        {/* Mission */}
        <motion.div className={styles.mission} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className={styles.missionContent}>
            <h2>{isAr ? c.mission.title.ar : c.mission.title.en}</h2>
            <p>{isAr ? c.mission.p1.ar : c.mission.p1.en}</p>
            <p>{isAr ? c.mission.p2.ar : c.mission.p2.en}</p>
          </div>
          <div className={styles.missionImage}>
            <img src={missionImg} alt="GymHub Mission" loading="lazy" />
          </div>
        </motion.div>

        {/* Values */}
        <div className={styles.valuesSection}>
          <h2>{isAr ? 'قيمنا الأساسية' : 'OUR CORE VALUES'}</h2>
          <div className={styles.valuesGrid}>
            {c.values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={i} className={styles.valueCard} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.15 }}>
                  <Icon className={styles.valueIcon} />
                  <h3>{isAr ? v.title.ar : v.title.en}</h3>
                  <p>{isAr ? v.desc.ar : v.desc.en}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <h2>{isAr ? 'رحلتنا' : 'OUR JOURNEY'}</h2>
          <div className={styles.timelineList}>
            {timeline.map((item, i) => (
              <motion.div key={i} className={styles.timelineItem} initial={{ opacity: 0, x: isAr ? 30 : -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.15 }}>
                <div className={styles.timelineDot}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h3>{isAr ? item.title.ar : item.title.en}</h3>
                  <p>{isAr ? item.desc.ar : item.desc.en}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
