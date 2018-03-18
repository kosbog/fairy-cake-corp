import * as React from "react";

interface IProps {
    type: string;
}

const Divider = ({ type }: IProps) => {
    return (
        <div className="divider">
            <img src={type} alt={type} />
        </div>
    );
};

export default Divider;
