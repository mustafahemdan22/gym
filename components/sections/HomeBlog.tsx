'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IoCalendarOutline, IoArrowForward } from 'react-icons/io5';
import Link from 'next/link';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useTheme } from '@/context/ThemeContext';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import styles from './HomeBlog.module.css';

interface HomeBlogProps {
  lang: string;
}

const HomeBlog: React.FC<HomeBlogProps> = ({ lang }) => {
  const { contentMode } = useTheme();
  const isAr = lang === 'ar';
  
  const allPosts = useQuery(api.blog.listByMode, { mode: contentMode });
  
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={styles.blog} id="blog" ref={ref}>
      {!allPosts ? (
        <div className={styles.loadingWrap}>
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }} 
            transition={{ duration: 1.5, repeat: Infinity }}
            className={styles.loadingText}
          >
            {isAr ? 'جاري تحميل المقالات...' : 'LOADING KNOWLEDGE...'}
          </motion.div>
        </div>
      ) : (
        <div className={styles.container}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.headerLeft}>
              <span className={styles.tag}>{isAr ? 'مدونتنا' : 'LATEST NEWS'}</span>
              <h2 className={styles.title}>{isAr ? 'غذي معرفتك' : 'FUEL YOUR KNOWLEDGE'}</h2>
            </div>
            <Link href={`/${lang}/blog`} className={styles.viewAll}>
              {isAr ? 'عرض الكل' : 'View All Posts'} <IoArrowForward />
            </Link>
          </motion.div>

          <div className={styles.grid}>
            {allPosts.slice(0, 3).map((post, i) => {
              const imageUrl = getCloudinaryUrl(post.image, { width: 600, height: 400 });
              return (
                <motion.article
                  key={post.id}
                  className={styles.postCard}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 * i, duration: 0.6 }}
                >
                  <Link href={`/${lang}/blog/${post.id}`} className={styles.imageLink}>
                    <div className={styles.imageWrap}>
                      <img src={imageUrl} alt={isAr ? post.title.ar : post.title.en} className={styles.image} loading="lazy" />
                      <span className={styles.category}>{isAr ? post.category.ar : post.category.en}</span>
                    </div>
                  </Link>
                  <div className={styles.content}>
                    <div className={styles.meta}>
                      <IoCalendarOutline /> {post.date}
                    </div>
                    <h3 className={styles.postTitle}>
                      <Link href={`/${lang}/blog/${post.id}`}>{isAr ? post.title.ar : post.title.en}</Link>
                    </h3>
                    <p className={styles.excerpt}>{isAr ? post.excerpt.ar : post.excerpt.en}</p>
                    <Link href={`/${lang}/blog/${post.id}`} className={styles.readMore}>
                      {isAr ? 'اقرأ المزيد' : 'Read More'} <IoArrowForward className={styles.arrow} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeBlog;
