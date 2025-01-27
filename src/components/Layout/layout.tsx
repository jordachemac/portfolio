import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from '@components/Header/header';
import styles from './layout.module.scss';
import Footer from '@components/Footer/Footer';

const Layout: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main>
                <Outlet /> {/* Render matched child routes here */}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
