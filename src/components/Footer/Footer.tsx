import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>{t('footer.rights', { year: currentYear })}</p>
                <ul className={styles.links}>
                    <li>
                        <Link to="/about">{t('footer.links.about')}</Link>
                    </li>
                    <li>
                        <Link to="/contact">{t('footer.links.contact')}</Link>
                    </li>
                    <li>
                        <Link to="/privacy">{t('footer.links.privacy')}</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
