import * as React from "react";

interface IProps {

}

const Alert = ({ }: IProps) => {
    return (
        <div className="msg-box msg-warning">
            <div className="msg-icon">
                <i className="icon fa fa-fa fa-info"></i>
            </div>
            <div className="msg-content">
                <h5 className="msg-content_title">Information Box</h5>
                <p className="msg-content_description">Vestibulum sodales pellentesque nibh quis</p>
            </div>
            <a className="btn-close"></a>
        </div>
    );
}

export default Alert;
