import React from 'react';

const Table = () => {
    return (
        <div className="menu">
            <div className="menu-wrapper">
                <div className="menu-headers">
                    <h2 className="menu-headers-title">Tasty cupcakes</h2>
                    <h3 className="menu-headers-subtitle">season favourite</h3>
                </div>
                <div className="menu-gallery">
                    <div className="menu-image"><img src={cupcake2} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Table;