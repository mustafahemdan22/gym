'use client';

import React, { use, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoCheckmarkCircle, IoArrowBack, IoCalendarOutline, IoMailOutline } from 'react-icons/io5';
import Link from 'next/link';
import styles from '../schedule.module.css';

export default function BookingSuccessPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const isAr = lang === 'ar';

  return (
    <div className={styles.schedule} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div 
        className={styles.card}
        style={{ maxWidth: '600px', textAlign: 'center' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          style={{ marginBottom: '2rem' }}
        >
          <IoCheckmarkCircle style={{ fontSize: '6rem', color: 'var(--primary)' }} />
        </motion.div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
          {isAr ? 'تم الحجز بنجاح!' : 'Booking Confirmed!'}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.6 }}>
          {isAr 
            ? 'شكراً لك! لقد تم استلام طلب الحجز الخاص بك. ستتلقى رسالة تأكيد عبر البريد الإلكتروني قريباً تحتوي على كافة التفاصيل.' 
            : 'Thank you! Your booking request has been received. You will receive a confirmation email shortly with all the details.'}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid var(--border)' }}>
            <IoCalendarOutline style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.8rem' }} />
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>{isAr ? 'التاريخ والوقت' : 'Date & Time'}</p>
            <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-main)' }}>{isAr ? 'تم الحجز' : 'Confirmed'}</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid var(--border)' }}>
            <IoMailOutline style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.8rem' }} />
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>{isAr ? 'تأكيد' : 'Confirmation'}</p>
            <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-main)' }}>{isAr ? 'مرسل' : 'Sent'}</p>
          </div>
        </div>

        <Link href={`/${lang}`} className={styles.btnSubmit} style={{ textDecoration: 'none', display: 'block' }}>
          {isAr ? 'العودة للرئيسية' : 'BACK TO HOME'}
        </Link>

        <Link href={`/${lang}/schedule`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
          <IoArrowBack /> {isAr ? 'حجز جلسة أخرى' : 'Book another session'}
        </Link>
      </motion.div>
    </div>
  );
}
