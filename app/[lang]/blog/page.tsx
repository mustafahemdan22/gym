'use client';

import React, { use } from 'react';
import { motion } from 'framer-motion';
import { IoArrowForward, IoCalendarOutline, IoPersonOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useTheme } from '@/context/ThemeContext';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import styles from './blog.module.css';

export default function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const { contentMode } = useTheme();
  const isAr = lang === 'ar';
  
  const posts = useQuery(api.blog.listByMode, { mode: contentMode });

  if (!posts) {
    return (
      <div className={styles.loadingWrap}>
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
          className={styles.loadingText}
        >
          {isAr ? 'جاري تحميل المقالات...' : 'LOADING KNOWLEDGE...'}
        </motion.div>
      </div>
    );
  }

  const headers = {
    male: {
      tag: { en: 'FUEL YOUR KNOWLEDGE', ar: 'غذي معرفتك' },
      title: { en: 'WARRIOR BLOG', ar: 'مدونة المحارب' },
    },
    female: {
      tag: { en: 'INSPIRE YOUR SOUL', ar: 'إلهام لروحك' },
      title: { en: 'WELLNESS BLOG', ar: 'مدونة العافية' },
    },
  };

  const h = headers[contentMode];

  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          key={contentMode}
        >
          <span className={styles.tag}>{isAr ? h.tag.ar : h.tag.en}</span>
          <h1 className={styles.title}>{isAr ? h.title.ar : h.title.en}</h1>
        </motion.div>

        <div className={styles.grid}>
          {posts.map((post, i) => {
            const imageUrl = getCloudinaryUrl(post.image, { width: 600, height: 400 });
            return (
              <motion.article
                key={post.id}
                className={styles.postCard}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Link href={`/${lang}/blog/${post.id}`} style={{ textDecoration: 'none' }}>
                  <div className={styles.imageWrap}>
                    <img 
                      src={imageUrl} 
                      alt={isAr ? post.title.ar : post.title.en} 
                      className={styles.image} 
                      loading="lazy" 
                    />
                    <span className={styles.categoryBadge}>
                      {isAr ? post.category.ar : post.category.en}
                    </span>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.meta}>
                      <span className={styles.metaItem}><IoCalendarOutline /> {post.date}</span>
                      <span className={styles.metaItem}><IoPersonOutline /> {isAr ? post.author.ar : post.author.en}</span>
                    </div>
                    <h3 className={styles.postTitle}>{isAr ? post.title.ar : post.title.en}</h3>
                    <p className={styles.excerpt}>{isAr ? post.excerpt.ar : post.excerpt.en}</p>
                    <div className={styles.readMore}>
                      {isAr ? 'اقرأ المزيد' : 'Read More'} <IoArrowForward />
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
