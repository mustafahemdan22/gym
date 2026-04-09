'use client';

import React, { useState, use, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoCalendarOutline, IoTimeOutline, IoPersonOutline, IoFitnessOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { useRouter, useSearchParams } from 'next/navigation';
import { useGymData } from '@/hooks/useGymData';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import styles from './schedule.module.css';

export default function SchedulePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { trainers, programs, isLoading } = useGymData();
  const isAr = lang === 'ar';

  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [selectedTrainer, setSelectedTrainer] = useState(searchParams.get('trainerId') || '');
  const [selectedProgram, setSelectedProgram] = useState(searchParams.get('programId') || '');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const createBooking = useMutation(api.booking.createBooking);

  if (isLoading) {
    return (
      <div className={styles.loadingWrap}>
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
          className={styles.loadingText}
        >
          {isAr ? 'جاري تحميل الجدول...' : 'PREPARING YOUR SESSIONS...'}
        </motion.div>
      </div>
    );
  }

  // Generate next 7 days
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      full: d.toISOString().split('T')[0],
      day: d.toLocaleDateString(isAr ? 'ar-EG' : 'en-US', { weekday: 'short' }),
      date: d.getDate(),
    };
  });

  const timeSlots = [
    { id: '08:00', label: '08:00 AM' },
    { id: '10:00', label: '10:00 AM' },
    { id: '14:00', label: '02:00 PM' },
    { id: '16:00', label: '04:00 PM' },
    { id: '18:00', label: '06:00 PM' },
    { id: '20:00', label: '08:00 PM' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time) return alert(isAr ? 'برجاء اختيار التاريخ والوقت' : 'Please select date and time');
    
    setStatus('loading');
    try {
      await createBooking({
        date,
        time,
        trainerId: selectedTrainer || undefined,
        programId: selectedProgram || undefined,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });
      setStatus('success');
      router.push(`/${lang}/schedule/success`);
    } catch (error) {
      console.error("Failed to submit booking", error);
      setStatus('error');
    }
  };

  const trainer = trainers.find(t => t.id === selectedTrainer);
  const program = programs.find(p => p.id === selectedProgram);

  return (
    <div className={styles.schedule}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            {isAr ? 'احجز جلستك الآن' : 'Schedule Your Session'}
          </motion.h1>
          <p>{isAr ? 'ابدأ رحلة التحول الخاصة بك مع أفضل المدربين' : 'Start your transformation with our elite coaching team'}</p>
        </div>

        <div className={styles.grid}>
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit}>
              <h2 className={styles.sectionTitle}><IoCalendarOutline /> {isAr ? '1. اختر موعداً' : '1. Select a Date'}</h2>
              <div className={styles.datePicker}>
                {days.map((d) => (
                  <button
                    key={d.full}
                    type="button"
                    className={`${styles.dateBtn} ${date === d.full ? styles.dateBtnActive : ''}`}
                    onClick={() => setDate(d.full)}
                  >
                    <span>{d.day}</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>{d.date}</span>
                  </button>
                ))}
              </div>

              <h2 className={styles.sectionTitle}><IoTimeOutline /> {isAr ? '2. اختر وقتاً' : '2. Select a Time'}</h2>
              <div className={styles.timeSlots}>
                {timeSlots.map((ts) => (
                  <button
                    key={ts.id}
                    type="button"
                    className={`${styles.timeBtn} ${time === ts.id ? styles.timeBtnActive : ''}`}
                    onClick={() => setTime(ts.id)}
                  >
                    {ts.label}
                  </button>
                ))}
              </div>

              <h2 className={styles.sectionTitle} style={{ marginTop: '3rem' }}><IoPersonOutline /> {isAr ? '3. بياناتك' : '3. Your Details'}</h2>
              <div className={styles.formGroup}>
                <label>{isAr ? 'الاسم بالكامل' : 'Full Name'}</label>
                <input 
                  className={styles.input} 
                  required 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder={isAr ? 'ادخل اسمك' : 'Enter your name'} 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className={styles.formGroup}>
                  <label>{isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                  <input 
                    className={styles.input} 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="email@example.com" 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>{isAr ? 'رقم الهاتف' : 'Phone Number'}</label>
                  <input 
                    className={styles.input} 
                    type="tel" 
                    required 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="+966 --- --- ---" 
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>{isAr ? 'المدرب (اختياري)' : 'Preferred Trainer (Optional)'}</label>
                <select 
                  className={styles.select} 
                  value={selectedTrainer} 
                  onChange={e => setSelectedTrainer(e.target.value)}
                >
                  <option value="">{isAr ? 'اختر مدرباً' : 'Select a Trainer'}</option>
                  {trainers.map(t => (
                    <option key={t.id} value={t.id}>{isAr ? t.name.ar : t.name.en}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className={styles.btnSubmit} disabled={status === 'loading'}>
                {status === 'loading' ? (isAr ? 'جاري التأكيد...' : 'CONFIRMING...') : (isAr ? 'تأكيد الحجز' : 'CONFIRM BOOKING')}
              </button>
              {status === 'error' && (
                <div style={{ color: 'red', marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
                  {isAr ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.'}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div 
            className={styles.summary}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className={styles.summaryCard}>
              <h2 className={styles.sectionTitle}><IoCheckmarkCircleOutline /> {isAr ? 'ملخص الحجز' : 'Booking Summary'}</h2>
              
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>{isAr ? 'التاريخ' : 'Date'}</span>
                <span className={styles.summaryVal}>{date || (isAr ? 'لم يحدد' : 'Not selected')}</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>{isAr ? 'الوقت' : 'Time'}</span>
                <span className={styles.summaryVal}>{time || (isAr ? 'لم يحدد' : 'Not selected')}</span>
              </div>
              
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}><IoPersonOutline /> {isAr ? 'المدرب' : 'Trainer'}</span>
                <span className={styles.summaryVal}>
                  {trainer ? (isAr ? trainer.name.ar : trainer.name.en) : (isAr ? 'أي مدرب' : 'Any Trainer')}
                </span>
              </div>

              {program && (
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}><IoFitnessOutline /> {isAr ? 'البرنامج' : 'Program'}</span>
                  <span className={styles.summaryVal}>{isAr ? program.title.ar : program.title.en}</span>
                </div>
              )}

              <div style={{ marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {isAr 
                  ? 'سيتم إرسال تأكيد الحجز إلى بريدك الإلكتروني قريباً. يرجى الوصول قبل موعدك بـ 15 دقيقة.' 
                  : 'A confirmation will be sent to your email shortly. Please arrive 15 minutes before your scheduled time.'}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
