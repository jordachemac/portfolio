import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './header.module.scss';
import logo from '@assets/logo_color.svg';

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        // Optional: Change the direction attribute
        document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="NZ Organics Group Logo" className={styles.logo} />
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
                        >
                            {t('header.home')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
                        >
                            {t('header.about')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
                        >
                            {t('header.contact')}
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button onClick={toggleLanguage} className={styles.languageToggle}>
                {t('header.language')}: {i18n.language === 'en' ? 'EN' : 'ع'}
            </button>
        </header>
    );
};

export default Header;
