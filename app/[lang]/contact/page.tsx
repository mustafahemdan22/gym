'use client';

import React, { use } from 'react';
import { motion } from 'framer-motion';
import { IoMail, IoCall, IoLocation, IoTime } from 'react-icons/io5';
import { useTheme } from '@/context/ThemeContext';
import { getCloudinaryUrl, getHeroImage } from '@/lib/cloudinary';
import styles from './contact.module.css';

export default function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const { contentMode } = useTheme();
  
  const heroImagePath = getHeroImage(contentMode);
  const heroImageUrl = getCloudinaryUrl(heroImagePath, {
    width: 1920,
    height: 1080,
    quality: 'auto',
  });
  const isAr = lang === 'ar';

  const headers = {
    male: {
      tag: { en: 'GET IN TOUCH', ar: 'تواصل معنا' },
      title: { en: 'JOIN THE RANKS', ar: 'انضم إلى الصفوف' },
      subtitle: { en: 'Have questions about memberships, elite coaching, or our facility? Reach out to us today.', ar: 'هل لديك أسئلة حول العضويات أو التدريب النخبوي أو مرافقنا؟ تواصل معنا اليوم.' },
      hero: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop"
    },
    female: {
      tag: { en: 'CONNECT WITH US', ar: 'اتصلي بنا' },
      title: { en: 'SHINE TOGETHER', ar: 'لنتألق معاً' },
      subtitle: { en: 'We are here to support your journey. Leave us a message and we will get back to you shortly.', ar: 'نحن هنا لدعم رحلتك. اتركي لنا رسالة وسنرد عليك قريباً.' },
      hero: "https://images.unsplash.com/photo-1620188467120-09062088365a?q=80&w=1920&auto=format&fit=crop"
    },
  };

  const h = headers[contentMode];

  const infoItems = [
    { icon: <IoMail />, title: { en: 'Email', ar: 'البريد الإلكتروني' }, value: 'info@gymhub.com' },
    { icon: <IoCall />, title: { en: 'Phone', ar: 'الهاتف' }, value: '+1 (555) 123-4567' },
    { icon: <IoLocation />, title: { en: 'Location', ar: 'الموقع' }, value: isAr ? 'شارع الرياضة 123، المدينة' : '123 Fitness Ave, City' },
    { icon: <IoTime />, title: { en: 'Hours', ar: 'ساعات العمل' }, value: isAr ? 'يومياً: 6:00 ص - 11:00 م' : 'Daily: 6:00 AM - 11:00 PM' },
  ];

  return (
    <div className={styles.contact}>
      <div className={styles.contactHero}>
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
        <div className={styles.contentRow}>
          <motion.div 
            className={styles.infoCol}
            initial={{ opacity: 0, x: isAr ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {infoItems.map((item, i) => (
              <div key={i} className={styles.infoItem}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div className={styles.infoText}>
                  <h3>{isAr ? item.title.ar : item.title.en}</h3>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className={styles.formCol}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <label>{isAr ? 'الاسم بالكامل' : 'Full Name'}</label>
                <input type="text" placeholder={isAr ? 'ادخل اسمك' : 'Enter your name'} required />
              </div>
              <div className={styles.inputGroup}>
                <label>{isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <input type="email" placeholder={isAr ? 'ادخل بريدك' : 'Enter your email'} required />
              </div>
              <div className={styles.inputGroup}>
                <label>{isAr ? 'الرسالة' : 'Message'}</label>
                <textarea rows={5} placeholder={isAr ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'} required />
              </div>
              <button className={styles.submitBtn}>
                {isAr ? 'إرسال الرسالة' : 'SEND MESSAGE'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
