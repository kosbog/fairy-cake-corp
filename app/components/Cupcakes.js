import React from 'react';
import cupcake1 from '../assets/img/cupcake1.jpg';
import cupcake2 from '../assets/img/cupcake2.jpg';
import cupcake3 from '../assets/img/cupcake3.jpg';

const Cakes = () => {
    return (
        <div className="cupcakes">
            <div className="cupcakes-wrapper">
                <div className="cupcakes-info">
                    <div className="cupcakes-headers">
                        <h2 className="cupcakes-headers-title">Tasty cupcakes</h2>
                        <h3 className="cupcakes-headers-subtitle">season favourite</h3>
                    </div>
                </div>
                <div className="cupcakes-image">
                    <img src={cupcake1} alt="" />
                    <img src={cupcake2} alt="" />
                    <img src={cupcake3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Cakes;