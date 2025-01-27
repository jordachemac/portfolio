import React from 'react';
import styles from './heroSection.module.scss';
import Button from '@components/Button/button';

const HeroSection: React.FC = () => {
    return (
        <div className={styles.root}>
            <header className={styles.title}>
                <h1>NZ Organics Group</h1>
            </header>
            <section className={styles.paragraph}>
                <p className={styles.text}>
                    {`NZ Organics Group Limited is dedicated to building a leading New Zealand-based export and production
                     business, specializing in natural, organic, and GMO-free products. Our mission is to unite a number of New Zealand's 
                     top food production companies, including Over the Moon Dairy, Manuka Health, and Eggs of NZ, to create a 
                     global powerhouse focused on premium, organic food products for international markets.`}
                    <br /> <br />
                    {`With a strong emphasis on expanding into the Asian and Middle Eastern markets, NZ Organics Group is proud 
                    to bring together award-winning dairy products from Over the Moon, the renowned Manuka honey from Manuka Health, 
                    and the Organic/Non-GMO eggs from Eggs of NZ. In addition, Eggs of NZ is working on the development of several new 
                    and exciting egg products, set to be introduced in the future.`}
                    <br /> <br />
                    {`NZ Organics Group is actively negotiating with potential partners to integrate various companies into the 
                    group, with plans for both full and majority ownership, ensuring a mix of 100% and shared equity with current 
                    owners.`}
                </p>
            </section>
            <Button variant="primary" text="Learn more" />
        </div>
    );
};

export default HeroSection;
