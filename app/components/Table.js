import React from 'react';
import cupcake2 from '../assets/img/cupcake2.jpg';

const ArrowNav = ({direction}) => {
    return (
        <div className={`arrow ${direction}`}></div>
    )
}

const Table = () => {
    return (
        <div className="table">
            <ArrowNav direction="left" />
            <div className="table-wrapper">
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