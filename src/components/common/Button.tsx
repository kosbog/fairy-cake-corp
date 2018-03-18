import * as React from "react";

interface IProps {
    type: string;
}

const Divider = ({ type }: IProps) => {
    return (
        <a href="#" className={`btn btn-${type}`}>
            <span></span>
            Large Button
            <span></span>
        </a>
    );
};

export default Divider;
