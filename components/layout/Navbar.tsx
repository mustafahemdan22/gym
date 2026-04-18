'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';
import styles from './Navbar.module.css';

interface NavbarProps {
  lang: string;
}

const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const { toggleTheme, contentMode } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const isAr = lang === 'ar';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  const navLinks = [
    { name: isAr ? 'الرئيسية' : 'Home', href: `/${lang}` },
    { name: isAr ? 'نحن' : 'About', href: `/${lang}/about` },
    { name: isAr ? 'المدربين' : 'Trainers', href: `/${lang}/trainers` },
    { name: isAr ? 'الأسعار' : 'Pricing', href: `/${lang}/pricing` },
    { name: isAr ? 'المدونة' : 'Blog', href: `/${lang}/blog` },
    { name: isAr ? 'تواصل معنا' : 'Contact', href: `/${lang}/contact` },
    { name: isAr ? 'البرامج' : 'Programs', href: `/${lang}/programs` },
  ];

  const toggleText = {
    discount: {
      en: "               Special Offer:20% OFF on your first subscription",
      ar: "عرض خاص: خصم 20% على اشتراكك الأول",
    },

  };

  return (
    <>
      <motion.div
        className={styles.topBarMobile}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.topBarContentMobile}>
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              <div className={styles.discountBannerMobile}>
                {isAr ? toggleText.discount.ar : toggleText.discount.en}
              </div>
              <div className={styles.discountBannerMobile} aria-hidden="true">
                {isAr ? toggleText.discount.ar : toggleText.discount.en}
              </div>
            </div>
          </div>
          {/* <div className={styles.topSocials}>
                <a href="#" className={styles.socialLink} aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" className={styles.socialLink} aria-label="Instagram"><FaInstagram /></a>
                <a href="#" className={styles.socialLink} aria-label="Twitter"><FaTwitter /></a>
              </div> */}
        </div>
      </motion.div>
      <header className={styles.navbar}>

        {/* Top Bar */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              className={styles.topBar}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.topBarContent}>
                <div className={styles.discountBanner}>
                  {isAr ? toggleText.discount.ar : toggleText.discount.en}
                </div>
                <div className={styles.topSocials}>
                  <a href="#" className={styles.socialLink} aria-label="Facebook"><FaFacebookF /></a>
                  <a href="#" className={styles.socialLink} aria-label="Instagram"><FaInstagram /></a>
                  <a href="#" className={styles.socialLink} aria-label="Twitter"><FaTwitter /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Top Bar */}






        {/* Main Nav */}
        <nav className={styles.nav}>
          <div className={styles.container}>
            <div className={styles.navContent}>
              <Link href={`/${lang}`} className={styles.logo}>
                GYM<span>HUB</span>
              </Link>

              <ul className={styles.navLinks}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>


              <div className={styles.actions}>

                <button
                  onClick={switchLanguage}
                  className={styles.iconButton}
                  aria-label="Switch language"
                  title={isAr ? 'تغيير اللغة' : 'Change Language'}
                >
                  <span className={styles.langText}>{lang === 'en' ? 'AR' : 'EN'}</span>
                </button>

                <Link href={`/${lang}/schedule`} className={styles.bookBtn}>
                  {isAr ? 'احجز الآن' : 'BOOK NOW'}
                </Link>
                <button
                  onClick={toggleTheme}
                  className={`${styles.iconButton} ${styles.themeToggleBtn}`}
                  aria-label="Toggle content mode"
                  title={isAr ? 'تبديل الفئة' : 'Switch Category'}
                >
                  <span className={styles.langText}>
                    {contentMode === 'male' ? (isAr ? 'الرجال' : 'MEN') : (isAr ? 'السيدات' : 'WOMEN')}
                  </span>
                </button>


                <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                  <div className={styles.hamburger} />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ y: '300%' }}
              animate={{ y: 0 }}
              exit={{ y: '300%' }}
              transition={{ duration: 0.4 }}
              className={styles.mobileMenu}
            >
              <ul className={styles.mobileNavLinks}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={styles.mobileNavLink}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Buttons */}
        <AnimatePresence>
          {isScrolled && (
            <>
              {/* <motion.button
              className={`${styles.scrollToTop} ${isAr ? styles.scrollToRight : styles.scrollToLeft}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              whileHover={{ scale: 1.1 }}
              onClick={scrollToTop}
            >
              ↑
            </motion.button> */}

              <motion.button
                className={`${styles.scrollToTop} ${isAr ? styles.scrollToRight : styles.scrollToLeft}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                whileHover={{ scale: 1.1 }}
                onClick={scrollToTop}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </motion.button>

              <motion.div
                className={`${styles.floatingSocials} ${isAr ? styles.socialsLeft : styles.socialsRight}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
              >
                <a href="#" className={styles.floatingSocialLink} aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" className={styles.floatingSocialLink} aria-label="Instagram"><FaInstagram /></a>
                <a href="#" className={styles.floatingSocialLink} aria-label="Twitter"><FaTwitter /></a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};


export default Navbar;