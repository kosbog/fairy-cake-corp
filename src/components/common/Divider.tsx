import * as React from "react";
const divider_1 = require('../../assets/images/divider_1.png');

interface IProps {
    type: string;
}

const Divider = ({ type }: IProps) => {
    return (
        <div className="divider">
            <img src={type} alt="divider" className="crossline" />
        </div>
    );
};

export default Divider;
