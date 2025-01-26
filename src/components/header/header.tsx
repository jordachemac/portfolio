import classNames from 'classnames';
import { Link, NavLink } from '@remix-run/react';
import { ROUTES } from '~/router/config';
import styles from './header.module.scss';
import logo from '~/assets/logo/logo_color.svg';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Link to="/" className={styles.logo}>
                <img src={logo} alt="NZ Organics Group" />
            </Link>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to={ROUTES.about.to()}
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    About
                </NavLink>
            </div>
        </div>
    );
};
