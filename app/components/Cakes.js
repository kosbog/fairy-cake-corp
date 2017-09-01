import React from 'react';

const Cakes = () => {
    return (
        <div className="cakes">
            <div className="cakes-wrapper">
                <div className="cakes-image">
                    <img src="../assets/img/cakes.jpg" alt="" />
                </div>
                <div className="cakes-info">
                    <div className="cakes-headers">
                        <h2 className="cakes-headers-title">Tasty cakes</h2>
                        <h3 className="cakes-headers-subtitle">season favourite</h3>
                    </div>
                    <div className="cakes-text">
                        Deserunt accusantium earum asperiores ullam consequatur quasi at
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="cakes-slider">
                        <div className="cakes-slider-wrapper">
                            <div className="cakes-slider-item"></div>
                            <div className="cakes-slider-item"></div>
                            <div className="cakes-slider-item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cakes;