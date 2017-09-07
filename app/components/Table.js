import React from 'react';
import cupcake2 from '../assets/img/cupcake2.jpg';

const ArrowNav = ({ direction }) => {
    return (
        <div className={`arrow ${direction}`}></div>
    )
}

const Table = () => {
    return (
        <div className="table">
            <ArrowNav direction="left" />
            <div className="table-wrapper">
                <div className="table-headers">
                    <h2 className="table-headers-title">Tasty cupcakes</h2>
                    <h3 className="table-headers-subtitle">season favourite</h3>
                </div>
                <div className="table-gallery">
                    <div className="table-image"><img src={cupcake2} alt="" /></div>
                    <div className="table-image"><img src={cupcake2} alt="" /></div>
                    <div className="table-image"><img src={cupcake2} alt="" /></div>
                    <div className="table-image"><img src={cupcake2} alt="" /></div>
                    <div className="table-image"><img src={cupcake2} alt="" /></div>
                    <div className="table-image"><img src={cupcake2} alt="" /></div>
                    <div className="table-image"><img src={cupcake2} alt="" /></div>
                    <div className="table-image"><img src={cupcake2} alt="" /></div>
                </div>
            </div>
            <ArrowNav direction="right" />
        </div>
    )
}

export default Table;