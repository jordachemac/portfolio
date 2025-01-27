import React from 'react';
import styles from './about.module.scss';

const About: React.FC = () => {
    return (
        <div className={styles.root}>
            <h1>About Page</h1>
            <p>Learn more about us on this page.</p>
        </div>
    );
};

export default About;
