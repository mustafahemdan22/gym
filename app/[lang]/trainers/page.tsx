'use client';

import React, { useState, useMemo, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGymData } from '@/hooks/useGymData';
import { getCloudinaryUrl, getHeroImage } from '@/lib/cloudinary';
import TrainerModal from '@/components/sections/TrainerModal';
import styles from './trainers.module.css';

const TRAINERS_PER_PAGE = 3;

export default function TrainersPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const { trainers, contentMode, isLoading } = useGymData();
  const [activeFilter, setActiveFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [selectedTrainer, setSelectedTrainer] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const isAr = lang === 'ar';

  const filters = useMemo(() => {
    const categories = Array.from(new Set(trainers.map(t => t.category)));
    return ['all', ...categories];
  }, [trainers]);

  const filteredTrainers = useMemo(() => {
    if (activeFilter === 'all') return trainers;
    return trainers.filter(t => t.category === activeFilter);
  }, [trainers, activeFilter]);

  if (isLoading) {
    return (
      <div className={styles.loadingWrap}>
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
          className={styles.loadingText}
        >
          {isAr ? 'جاري التحميل...' : 'LOADING COACHES...'}
        </motion.div>
      </div>
    );
  }

  const openModal = (trainer: any) => {
    setSelectedTrainer(trainer);
    setIsModalOpen(true);
  };

  const totalPages = Math.ceil(filteredTrainers.length / TRAINERS_PER_PAGE);
  const paginatedTrainers = filteredTrainers.slice((page - 1) * TRAINERS_PER_PAGE, page * TRAINERS_PER_PAGE);

  const heroImagePath = getHeroImage(contentMode);
  const heroImageUrl = getCloudinaryUrl(heroImagePath, {
    width: 1920,
    height: 1080,
    quality: 'auto',
  });

  return (
    <div className={styles.trainers}>
      <div className={styles.trainersHero}>
        <div className={styles.heroBg}>
          <img src={heroImageUrl} alt="" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>
            {contentMode === 'male'
              ? (isAr ? 'مدربون نخبة' : 'ELITE COACHES')
              : (isAr ? 'مدرّبات خبيرات' : 'EXPERT TRAINERS')}
          </h1>
          <p className={styles.subtitle}>
            {contentMode === 'male'
              ? (isAr ? 'مدربون معتمدون مع سنوات من الخبرة في بناء الأبطال.' : 'Certified coaches with years of experience building champions.')
              : (isAr ? 'مدرّبات معتمدات مع شغف لتمكين المرأة من خلال اللياقة.' : 'Certified trainers with a passion for empowering women through fitness.')}
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Filter Bar */}
        <div className={styles.filters}>
          {filters.map(f => (
            <button
              key={f}
              className={activeFilter === f ? styles.filterBtnActive : styles.filterBtn}
              onClick={() => {
                setActiveFilter(f);
                setPage(1);
              }}
            >
              {f === 'all' ? (isAr ? 'الكل' : 'All') : f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            className={styles.grid}
            key={`${contentMode}-${activeFilter}-${page}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {paginatedTrainers.map((trainer, i) => {
              const imageUrl = getCloudinaryUrl(trainer.image, { width: 500, height: 650, crop: 'fill', gravity: 'face' });
              return (
                <motion.div
                  key={trainer.id}
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => openModal(trainer)}
                >
                  <div className={styles.cardImage}>
                    <img src={imageUrl} alt={isAr ? trainer.name.ar : trainer.name.en} loading="lazy" />
                    <div className={styles.cardOverlay} />
                    <div className={styles.cardBadge}>{isAr ? 'مدرب معتمد' : 'CERTIFIED'}</div>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardInfo}>
                      <h3 className={styles.cardName}>{isAr ? trainer.name.ar : trainer.name.en}</h3>
                      <p className={styles.cardRole}>{isAr ? trainer.role.ar : trainer.role.en}</p>
                    </div>

                    <div className={styles.cardMeta}>
                      <div className={styles.rating}>
                        <span className={styles.star}>★</span>
                        <span>{trainer.rating.toFixed(1)}</span>
                      </div>
                      <div className={styles.exp}>
                        {trainer.experience}+ {isAr ? 'سنة خبرة' : 'YRS EXP'}
                      </div>
                    </div>

                    <div className={styles.cardActions}>
                      <button className={styles.btnConsultation} onClick={(e) => {
                        e.stopPropagation();
                        openModal(trainer);
                      }}>
                        {isAr ? 'حجز استشارة' : 'BOOK A CONSULTATION'}
                      </button>
                      <button className={styles.btnMessage} onClick={(e) => {
                        e.stopPropagation();
                        // Placeholder for messaging
                      }}>
                        {isAr ? 'مراسلة المدرب' : 'MESSAGE COACH'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={p === page ? styles.pageBtnActive : styles.pageBtn}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            ))}
          </div>
        )}

        <TrainerModal 
          trainer={selectedTrainer} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          lang={lang} 
        />
      </div>
    </div>
  );
}









































































































































































































































































































































































































































































































































































































 
