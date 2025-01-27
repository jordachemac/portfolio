import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import logo from '@assets/logo_color.svg';

const Header: React.FC = () => {
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
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
