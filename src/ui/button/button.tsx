'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import './button.scss';

interface ButtonProps {
    variant: 'btn-orange-gradient' | 'btn-border';
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    href?: string;
}

const Button: FC<ButtonProps> = ({ variant, text, onClick, href }) => {
    if (href) {
        return (
            <Link href={href} className={`button ${variant}`}>
                {text}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={`button ${variant}`}>
            {text}
        </button>
    );
};

export default Button;