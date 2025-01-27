import React from 'react';
import styles from './button.module.scss';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', text, className = '', ...props }) => {
    // Conditionally assign the variant class
    const variantClass = variant === 'secondary' ? styles.secondary : styles.primary;

    return (
        <button className={`${styles.button} ${variantClass} ${className}`} {...props}>
            {text}
        </button>
    );
};

export default Button;
