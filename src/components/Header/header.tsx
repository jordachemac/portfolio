import React from 'react';
import 'header.module.css'; // Import CSS for styling

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/assets/logo.svg" alt="Logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
