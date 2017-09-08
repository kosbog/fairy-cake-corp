import React from 'react';
import cupcake1 from '../assets/img/cupcake1.jpg';
import cupcake2 from '../assets/img/cupcake2.jpg';
import cupcake3 from '../assets/img/cupcake3.jpg';

const Cupcakes = () => {
    return (
        <div className="cupcakes parallax">
            <div className="cupcakes-wrapper">
                <div className="cupcakes-headers">
                    <h2 className="cupcakes-headers-title">Tasty cupcakes</h2>
                    <h3 className="cupcakes-headers-subtitle">season favourite</h3>
                </div>
                <div className="cupcakes-info">
                    <div className="cupcakes-description">
                        <ul className="cupcakes-description-list">
                            <li>
                                <img src={cupcake3} alt="" />
                                <h3>Ingredients</h3>
                                <span>
                                    Something about ingredients. Lorem ipsum dolor sit amet consectetur.
                                </span>
                            </li>
                            <li>
                                <img src={cupcake3} alt="" />
                                <h3>Ingredients</h3>
                                <span>
                                    Something about ingredients. Lorem ipsum dolor sit amet consectetur.
                                </span>
                            </li>
                            <li>
                                <img src={cupcake3} alt="" />
                                <h3>Ingredients</h3>
                                <span>
                                    Something about ingredients. Lorem ipsum dolor sit amet consectetur.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="cupcakes-image">
                        <div className="cupcakes-image-big">
                            <img src={cupcake2} alt="" />
                        </div>
                        <div className="cupcakes-image-small">
                            <img src={cupcake1} alt="" />
                            <img src={cupcake1} alt="" />
                            <img src={cupcake1} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cupcakes;