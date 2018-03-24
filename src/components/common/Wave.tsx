import * as React from 'react';

interface IProps {
    type: string;
}

const Wave = ({ type }: IProps) => {
    return (
        <div className={`wave wave-${type}`}></div>
    );
};

export default Wave;
