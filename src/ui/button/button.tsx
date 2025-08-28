import React, {FC} from 'react';
import './button.scss'

interface ButtonProps {
     variant: 'btn-orange-gradient' | 'btn-border';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
     text: string;
}

const Button:FC<ButtonProps> = ({onClick,text,variant}) => {
    return  <button onClick={onClick} className={`button ${variant}`}>{text}</button>
};

export default Button;