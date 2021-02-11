import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
const COLOR = ['primary','blue','red','green'];


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    //buttonColor
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    //const checkButtonColor = SIZES.includes(buttonColor) ? COLOR : SIZES[0];


    return (
        <Link to='/signup' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};