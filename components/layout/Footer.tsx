'use client';

import React from 'react';
import Link from 'next/link';
import { IoLogoInstagram, IoLogoYoutube, IoLogoTiktok, IoMail, IoCall, IoLocationSharp } from 'react-icons/io5';
import styles from './Footer.module.css';

interface FooterProps {
  lang: string;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const links = {
    explore: [
      { name: isAr ? 'الرئيسية' : 'Home', href: `/${lang}` },
      { name: isAr ? 'عنا' : 'About', href: `/${lang}/about` },
      { name: isAr ? 'المدربين' : 'Trainers', href: `/${lang}/trainers` },
      { name: isAr ? 'البرامج' : 'Programs', href: `/${lang}/programs` },
    ],
    support: [
      { name: isAr ? 'الأسعار' : 'Pricing', href: `/${lang}/pricing` },
      { name: isAr ? 'المدونة' : 'Blog', href: `/${lang}/blog` },
      { name: isAr ? 'تواصل معنا' : 'Contact', href: `/${lang}/contact` },
      { name: isAr ? 'الأسئلة الشائعة' : 'FAQ', href: `/${lang}/faq` },
    ],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <h3 className={styles.logo}>
              GYM<span>HUB</span>
            </h3>
            <p className={styles.brandDesc}>
              {isAr
                ? 'وجهتك الأولى للقوة واللياقة والتحوّل. انضم إلينا وابدأ رحلتك.'
                : 'Your premier destination for strength, fitness, and transformation. Join us and start your journey.'}
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram"><IoLogoInstagram /></a>
              <a href="#" aria-label="YouTube"><IoLogoYoutube /></a>
              <a href="#" aria-label="TikTok"><IoLogoTiktok /></a>
            </div>
          </div>

          {/* Explore */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>{isAr ? 'استكشف' : 'Explore'}</h4>
            <ul className={styles.linkList}>
              {links.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>{isAr ? 'الدعم' : 'Support'}</h4>
            <ul className={styles.linkList}>
              {links.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>{isAr ? 'تواصل' : 'Contact'}</h4>
            <ul className={styles.contactList}>
              <li>
                <IoMail />
                <span>info@gymhub.com</span>
              </li>
              <li>
                <IoCall />
                <span>+20 12 3456 7890</span>
              </li>
              <li>
                <IoLocationSharp />
                <span>{isAr ? 'سموحة، الإسكندرية، مصر' : 'Smouha, Alexandria, Egypt'}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomInfo}>
            <p>© {new Date().getFullYear()} GymHub. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
            <div className={styles.legalLinks}>
              <Link href={`/${lang}/terms`}>{isAr ? 'الشروط والأحكام' : 'Terms of Service'}</Link>
              <Link href={`/${lang}/privacy`}>{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
            </div>
          </div>
          <p className={styles.credit}>
            {isAr ? 'التصميم والبرمجة بواسطة مصطفى حمدان' : 'Design & Development by Mustafa Hemdan'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
