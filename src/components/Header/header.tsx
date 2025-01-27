import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    XMarkIcon,
    Bars3BottomLeftIcon,
    Bars3BottomRightIcon,
    LanguageIcon,
} from '@heroicons/react/24/outline';
import styles from './header.module.scss';
import logo from '@assets/logo_color.svg';

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Language
    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        // Change the direction attribute
        document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    };

    // Mobile menu toggle
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    // Click outside to close mobile menu
    const navRef = useRef<HTMLElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            isMobileMenuOpen &&
            navRef.current &&
            !navRef.current.contains(event.target as Node) &&
            !(event.target as HTMLElement).closest(`.${styles.mobileMenuIcon}`)
        ) {
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Render
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/" onClick={closeMobileMenu}>
                    <img src={logo} alt="NZ Organics Group Logo" className={styles.logoImage} />
                </Link>
            </div>
            <nav
                ref={navRef}
                className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ''}`}
                aria-label="Main Navigation"
                id="primary-navigation"
            >
                <ul className={styles.navList}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
                            onClick={closeMobileMenu}
                        >
                            {t('header.home')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
                            onClick={closeMobileMenu}
                        >
                            {t('header.about')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
                            onClick={closeMobileMenu}
                        >
                            {t('header.contact')}
                        </NavLink>
                    </li>
                    <li className={styles.languageToggle}>
                        <button onClick={toggleLanguage}>
                            <LanguageIcon /> {t('header.language')}
                        </button>
                    </li>
                </ul>
            </nav>
            <button
                className={styles.mobileMenuIcon}
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="primary-navigation"
            >
                {isMobileMenuOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
            </button>
        </header>
    );
};

export default Header;
