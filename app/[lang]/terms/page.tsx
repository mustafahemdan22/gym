'use client';

import React, { use } from 'react';
import styles from '../privacy/legal.module.css';

export default function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const isAr = lang === 'ar';

  return (
    <div className={styles.legal}>
      <div className={styles.legalHero}>
        <div className={styles.heroBg}>
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop" 
            alt="" 
            className={styles.heroImage} 
          />
          <div className={styles.heroOverlay} />
        </div>
        <h1>{isAr ? 'شروط الخدمة' : 'Terms of Service'}</h1>
      </div>

      <div className={styles.container}>
        <p className={styles.lastUpdated}>{isAr ? 'آخر تحديث: 13 أبريل 2024' : 'Last Updated: April 13, 2024'}</p>
        
        <div className={styles.content}>
          <section>
            <h2>{isAr ? '1. الموافقة على الشروط' : '1. Acceptance of Terms'}</h2>
            <p>
              {isAr 
                ? 'من خلال الوصول إلى خدماتنا، فإنك توافق على الالتزام بشروط الخدمة هذه.' 
                : 'By accessing our services, you agree to be bound by these Terms of Service.'}
            </p>
          </section>

          <section>
            <h2>{isAr ? '2. سلوك المستخدم' : '2. User Conduct'}</h2>
            <p>
              {isAr 
                ? 'أنت توافق على عدم استخدام الخدمة لأي غرض غير قانوني أو انتهاك أي شروط استخدام.' 
                : 'You agree not to use the service for any illegal purpose or to violate any terms of use.'}
            </p>
          </section>

          <section>
            <h2>{isAr ? '3. حدود المسؤولية' : '3. Limitation of Liability'}</h2>
            <p>
              {isAr 
                ? 'لسنا مسؤولين عن أي أضرار ناتجة عن استخدامك للخدمة أو عدم قدرتك على استخدامها.' 
                : 'We are not liable for any damages resulting from your use of or inability to use the service.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
