import React from 'react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} NZ Organics Group. All rights reserved.</p>
                <ul className={styles.links}>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/privacy">Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
