import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import styles from './heroSection.module.scss';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.root}>
            <header className={styles.title}>
                <h1>{t('hero.title', { company: 'NZ Organics Group' })}</h1>
            </header>
            <section className={styles.paragraph}>
                <p className={styles.text}>
                    <Trans i18nKey="hero.description">
                        NZ Organics Group Limited is dedicated to building a leading New
                        Zealand-based export and production business, specializing in natural,
                        organic, and GMO-free products. Our mission is to unite a number of New
                        Zealand's top food production companies, including{' '}
                        <strong>Over the Moon Dairy</strong>, <strong>Manuka Health</strong>, and{' '}
                        <strong>Eggs of NZ</strong>, to create a global powerhouse focused on
                        premium, organic food products for international markets.
                    </Trans>
                </p>
            </section>
        </div>
    );
};

export default HeroSection;
