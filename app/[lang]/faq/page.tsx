'use client';

import React, { useState, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDown, IoChatbubblesOutline } from 'react-icons/io5';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import styles from './faq.module.css';

export default function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const { contentMode } = useTheme();
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const isAr = lang === 'ar';

  const faqs = useQuery(api.faq.listByMode, { mode: contentMode });

  if (faqs === undefined) {
    return (
      <div className={styles.loadingWrap}>
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
          className={styles.loadingText}
        >
          {isAr ? 'جاري تحميل الأسئلة...' : 'PREPARING ANSWERS...'}
        </motion.div>
      </div>
    );
  }

  const categories = [
    { id: 'all', en: 'All', ar: 'الكل' },
    { id: 'membership', en: 'Membership', ar: 'العضوية' },
    { id: 'programs', en: 'Programs', ar: 'البرامج' },
    { id: 'training', en: 'Training', ar: 'التدريب' },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  const toggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>{isAr ? 'الأسئلة الشائعة' : 'FAQ'}</span>
          <h1 className={styles.title}>{isAr ? 'لديك أسئلة؟' : 'Have Questions?'}</h1>
          <p className={styles.subtitle}>
            {isAr 
              ? 'إليك كل ما تحتاج لمعرفته حول التدريب والعضويات وبرامجنا المتخصصة.' 
              : 'Everything you need to know about training, memberships, and our elite programs.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className={styles.categories}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`${styles.catBtn} ${activeCategory === cat.id ? styles.catBtnActive : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {isAr ? cat.ar : cat.en}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className={styles.accordion}>
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                className={`${styles.item} ${activeId === faq.id ? styles.itemOpen : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                layout
              >
                <button 
                  className={styles.question} 
                  onClick={() => toggle(faq.id)}
                  aria-expanded={activeId === faq.id}
                >
                  <h3>{isAr ? faq.question.ar : faq.question.en}</h3>
                  <IoChevronDown className={`${styles.icon} ${activeId === faq.id ? styles.iconOpen : ''}`} />
                </button>
                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.answer}
                    >
                      <p>{isAr ? faq.answer.ar : faq.answer.en}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <motion.div 
          className={styles.contactCta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <IoChatbubblesOutline style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }} />
          <h2 className={styles.ctaTitle}>{isAr ? 'لم تجد إجابتك؟' : 'Still Have Questions?'}</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            {isAr 
              ? 'فريق الدعم لدينا متاح دائماً لمساعدتك في أي استفسارات أخرى.' 
              : 'Our support team is always available to help you with any further inquiries.'}
          </p>
          <Link href={`/${lang}/contact`}>
            <button className={styles.btn}>
              {isAr ? 'تواصل معنا الآن' : 'CONTACT US NOW'}
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
