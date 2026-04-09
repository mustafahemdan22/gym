'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoStar, IoTrophy, IoFitness, IoArrowForward } from 'react-icons/io5';
import Link from 'next/link';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import type { Trainer } from '@/types/gym';
import styles from './TrainerModal.module.css';

interface TrainerModalProps {
  trainer: Trainer | null;
  isOpen: boolean;
  onClose: () => void;
  lang: string;
}

const TrainerModal: React.FC<TrainerModalProps> = ({ trainer, isOpen, onClose, lang }) => {
  if (!trainer) return null;
  const isAr = lang === 'ar';
  
  const imageUrl = getCloudinaryUrl(trainer.image, { width: 600, height: 800, crop: 'fill', gravity: 'face' });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
              <IoClose size={24} />
            </button>

            <div className={styles.imageWrap}>
              <img src={imageUrl} alt={isAr ? trainer.name.ar : trainer.name.en} className={styles.image} />
              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.content}>
              <span className={styles.tag}>{isAr ? 'عرض سريع' : 'Quick View'}</span>
              <h2 className={styles.name}>{isAr ? trainer.name.ar : trainer.name.en}</h2>
              <p className={styles.role}>{isAr ? trainer.role.ar : trainer.role.en}</p>

              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <IoStar className={styles.statIcon} />
                  <span className={styles.statVal}>{trainer.rating}</span>
                  <span className={styles.statLabel}>{isAr ? 'التقييم' : 'Rating'}</span>
                </div>
                <div className={styles.statItem}>
                  <IoTrophy className={styles.statIcon} />
                  <span className={styles.statVal}>{trainer.experience}+</span>
                  <span className={styles.statLabel}>{isAr ? 'سنوات' : 'Exp.'}</span>
                </div>
              </div>

              <div className={styles.actions}>
                <Link href={`/${lang}/schedule?trainerId=${trainer.id}`} className={styles.btnPrimary}>
                  {isAr ? 'احجز الآن' : 'BOOK NOW'}
                </Link>
                <Link href={`/${lang}/trainers/${trainer.id}`} className={styles.btnSecondary}>
                  {isAr ? 'الملف الكامل' : 'FULL PROFILE'}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TrainerModal;
