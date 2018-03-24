import * as React from 'react';

interface IProps {
    type: string;
    size: string;
}

const Button = ({ size, type }: IProps) => {
    return (
        <a href='#' className={`btn btn-${size} btn-${type}`}>
            <span></span>
            Large Button
            <span></span>
        </a>
    );
};

export default Button;
