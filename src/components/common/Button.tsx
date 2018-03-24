import * as React from "react";

interface IProps {
    size: string;
    color: 
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
