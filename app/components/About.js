import React from 'react';

const About = () => {
    return (
        <section className="about">
            <div className="about-wrapper">
                <div className="about-info">
                    <div className="about-headers">
                        <h2 className="about-headers-title">Art of cakes</h2>
                        <h3 className="about-headers-subtitle">we create delicious memories</h3>
                    </div>
                    <div className="about-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Deserunt accusantium earum asperiores ullam consequatur quasi at
                        facilis, dolores, impedit, esse dolore ut
                        molestias sint suscipit accusamus? Reprehenderit soluta nostrum veniam!
                    </div>
                    <div className="about-chef">
                        <h4 className="about-chef-title">Chef Cook</h4>
                        <div className="about-chef-name">
                            <span>Firstname</span>
                            <img src="" alt="" />
                            <span>Lastname</span>
                        </div>
                        <div className="about-chef-quote"></div>
                    </div>
                </div>
                <div className="about-image">
                    <div className="about-image-item item-1"></div>
                    <div className="about-image-item item-2"></div>
                    <div className="about-image-item item-3"></div>
                    <div className="about-image-item item-4"></div>                    
                </div>
            </div>
        </section>
    )
}

export default About;