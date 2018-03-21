import * as React from 'react';

interface IProps {
    type: string;
    imgSrc: string;
}

const Divider = ({ type, imgSrc }: IProps) => {
    return (
        <div className={`divider ${type}`}>
            <img src={imgSrc} alt='divider' />
        </div>
    );
};

export default Divider;
