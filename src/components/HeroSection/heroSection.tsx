import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import styles from './heroSection.module.scss';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.root}>
            <header className={styles.title}>
                <h1>{t('hero.title')}</h1>
            </header>
            <section className={styles.paragraph}>
                <p className={styles.text}></p>
            </section>
        </div>
    );
};

export default HeroSection;
