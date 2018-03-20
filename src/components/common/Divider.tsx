import * as React from "react";

interface IProps {
    type: string;
    imgSrc: string;
}

const Divider = ({ type, imgSrc }: IProps) => {
    return (
        <div className="divider">
            <img src={imgSrc} alt="divider" className={type} />
        </div>
    );
};

export default Divider;
