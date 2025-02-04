import React from 'react';
import styles from './descriptionSection.module.scss';

interface DescriptionSectionProps {
    title: string;
    description: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ title, description }) => {
    return (
        <section className={styles.descriptionSection}>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    );
};

export default DescriptionSection;
