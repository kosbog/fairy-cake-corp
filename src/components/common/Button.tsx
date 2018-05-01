import * as React from 'react';

interface IProps {
    type: string;
    size: string;
    text?: string;
}

const Button = ({ size, type, text }: IProps) => {
    return (
        <a href='#' className={`btn btn-${size} btn-${type}`}>
            <span></span>
            {text || 'button'}
            <span></span>
        </a>
    );
};

export default Button;
