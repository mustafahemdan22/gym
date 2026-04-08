'use client';

import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { IoStar } from 'react-icons/io5';
import { useGymData } from '@/hooks/useGymData';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import TrainerModal from '@/components/sections/TrainerModal';
import styles from './HomeTrainers.module.css';

interface HomeTrainersProps {
  lang: string;
}

const HomeTrainers: React.FC<HomeTrainersProps> = ({ lang }) => {
  const { trainers, contentMode, isLoading } = useGymData();
  const isAr = lang === 'ar';
  
  const [selectedTrainer, setSelectedTrainer] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = (trainer: any) => {
    setSelectedTrainer(trainer);
    setIsModalOpen(true);
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const sectionTitle = {
    male: { en: 'ELITE COACHES', ar: 'مدربون نخبة' },
    female: { en: 'EXPERT TRAINERS', ar: 'مدرّبات خبيرات' },
  };

  // Show first 3 trainers on home page
  const featuredTrainers = trainers.slice(0, 3);

  return (
    <section className={styles.trainers} id="trainers" ref={ref}>
      {isLoading ? (
        <div className={styles.loadingWrap}>
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }} 
            transition={{ duration: 1.5, repeat: Infinity }}
            className={styles.loadingText}
          >
            {isAr ? 'جاري تحميل المدربين...' : 'UNLEASHING ELITE COACHES...'}
          </motion.div>
        </div>
      ) : (
        <>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.tag}>
              {isAr ? 'المدربين' : 'TRAINERS'}
            </span>
            <h2 className={styles.title}>
              {isAr ? sectionTitle[contentMode].ar : sectionTitle[contentMode].en}
            </h2>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              className={styles.grid}
              key={contentMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {featuredTrainers.map((trainer, i) => {
                const imageUrl = getCloudinaryUrl(trainer.image, { width: 400, height: 500, crop: 'fill', gravity: 'face' });
                return (
                  <motion.div
                    key={trainer.id}
                    className={styles.trainerCard}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => openModal(trainer)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={styles.imageWrap}>
                      <img src={imageUrl} alt={isAr ? trainer.name.ar : trainer.name.en} className={styles.image} />
                      <div className={styles.overlay} />
                      <div className={styles.trainerBadge}>{isAr ? 'مدرب خبير' : 'EXPERT COACH'}</div>
                    </div>
                    <div className={styles.trainerInfo}>
                      <h3 className={styles.trainerName}>{isAr ? trainer.name.ar : trainer.name.en}</h3>
                      <p className={styles.trainerRole}>{isAr ? trainer.role.ar : trainer.role.en}</p>
                      <button className={styles.btnQuickView} onClick={(e) => {
                        e.stopPropagation();
                        openModal(trainer);
                      }}>
                        {isAr ? 'عرض سريع' : 'QUICK VIEW'}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <TrainerModal 
            trainer={selectedTrainer} 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            lang={lang} 
          />
        </>
      )}
    </section>
  );
};

export default HomeTrainers;
