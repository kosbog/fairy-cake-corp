import * as React from "react";

interface IProps {
    type: string;
}

const Alert = ({ type }: IProps) => {
    return (
        <div className={`msg-box msg-${type}`}>
            <div className="msg-icon">
                <i className={`icon icon-${type} fa fa-fa fa-info`}></i>
            </div>
            <div className="msg-content">
                <h5 className={`msg-content_title ${type}-title`}>Information Box</h5>
                <p className="msg-content_description">Vestibulum sodales pellentesque nibh quis</p>
            </div>
            <a className="btn-close"></a>
        </div>
    );
};

export default Alert;
