'use client';

import React, { use } from 'react';
import { motion } from 'framer-motion';
import { IoCalendarOutline, IoPersonOutline, IoArrowBack, IoShareSocialOutline } from 'react-icons/io5';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useTheme } from '@/context/ThemeContext';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import styles from './blog-detail.module.css';

export default function BlogDetailPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = use(params);
  const { contentMode } = useTheme();
  const isAr = lang === 'ar';

  const post = useQuery(api.blog.getById, { id });

  if (post === undefined) {
    return (
      <div className={styles.loadingWrap}>
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
          className={styles.loadingText}
        >
          {isAr ? 'جاري تحميل المقال...' : 'LOADING KNOWLEDGE...'}
        </motion.div>
      </div>
    );
  }

  if (post === null) {
    return notFound();
  }

  const imageUrl = getCloudinaryUrl(post.image, { width: 1200, height: 675, crop: 'fill' });

  // Generate generic premium content
  const content = {
    en: (
      <>
        <p>In the world of high-performance fitness, consistency is more than just a buzzword—it is the foundation of every transformation. Whether you are aiming for explosive power or lean wellness, understanding the underlying principles of your body is key to unlocking your true potential.</p>
        
        <h2>The Science of Progress</h2>
        <p>Most athletes hit a plateau not because of a lack of effort, but because of a lack of recovery. Proper rest, combined with strategic periodization, allows the muscle fibers to repair and strengthen. Without these critical windows of downtime, even the most rigorous training programs can lead to burnout and injury.</p>

       <blockquote>
  &ldquo;Pain builds strength. Discipline shapes your body. But knowledge guides your transformation.&rdquo;
</blockquote>

        <h2>Fueling the Machine</h2>
        <p>Nutrition remains the most overlooked component of elite performance. High-quality protein, complex carbohydrates, and micronutrients are not optional—they are the building blocks of your success. At GymHub, we believe in a holistic approach where every meal is treated as an investment in your future self.</p>

        <p>As you continue your journey, remember that greatness is not achieved in a single day. It is the result of small, disciplined actions taken over a long period. Stay focused, stay hungry, and let’s grow together.</p>
      </>
    ),
    ar: (
      <>
        <p>في عالم اللياقة البدنية عالية الأداء، يعد الاستمرار أكثر من مجرد كلمة رنانة - إنه أساس كل تحول. سواء كنت تهدف إلى القوة الانفجارية أو العافية الرشيقة، فإن فهم المبادئ الأساسية بجسمك هو المفتاح لإطلاق العنان لإمكانياتك الحقيقية.</p>

        <h2>علم التقدم</h2>
        <p>يصل معظم الرياضيين إلى مرحلة الثبات ليس بسبب نقص الجهد، ولكن بسبب نقص التعافي. الراحة المناسبة، جنباً إلى جنب مع التقسيم الدوري الاستراتيجي، تسمح للألياف العضلية بالإصلاح والتقوية. بدون نوافذ التعافي الحرجة هذه، حتى أكثر برامج التدريب صرامة يمكن أن تؤدي إلى الإرهاق والإصابة.</p>

        <blockquote>
          &ldquo;النضال هو مقدمة للنمو. لكن المعرفة هي الملاح الذي يضمن أن النضال يؤدي إلى الوجهة الصحيحة.&rdquo;
        </blockquote>

        <h2>تزويد المحرك بالوقود</h2>
        <p>تبقى التغذية المكون الأكثر إغفالاً في الأداء النخبوي. البروتين عالي الجودة والكربوهيدرات المعقدة والمغذيات الدقيقة ليست اختيارية - إنها اللبنات الأساسية لنجاحك. في جيم هب، نؤمن بنهج شامل حيث يتم التعامل مع كل وجبة كاستثمار في مستقبلك.</p>

        <p>بينما تواصل رحلتك، تذكر أن العظمة لا تتحقق في يوم واحد. إنها نتيجة لأفعال صغيرة منضبطة يتم اتخاذها على مدى فترة طويلة. ابق مركزاً، وابق جائعاً للنجاح، ودعنا ننمو معاً.</p>
      </>
    ),
  }[lang];

  return (
    <article className={styles.blogDetail}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className={styles.category}>{isAr ? post.category.ar : post.category.en}</span>
          <h1 className={styles.title}>{isAr ? post.title.ar : post.title.en}</h1>
          
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <IoCalendarOutline /> {post.date}
            </div>
            <div className={styles.metaItem}>
              <IoPersonOutline /> {isAr ? post.author.ar : post.author.en}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={imageUrl} alt={isAr ? post.title.ar : post.title.en} className={styles.image} />
        </motion.div>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {content}
        </motion.div>

        <footer className={styles.footer}>
          <div className={styles.author}>
            <div className={styles.authorImg}>
              <IoPersonOutline />
            </div>
            <div>
              <p style={{ fontWeight: 700, margin: 0 }}>{isAr ? post.author.ar : post.author.en}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{isAr ? 'مدرب معتمد' : 'Certified Coach'}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link href={`/${lang}/blog`} className={styles.backBtn}>
              <IoArrowBack /> {isAr ? 'العودة للمدونة' : 'Back to Blog'}
            </Link>
            <IoShareSocialOutline className={styles.shareBtn} />
          </div>
        </footer>
      </div>
    </article>
  );
}
