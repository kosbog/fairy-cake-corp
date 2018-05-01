import * as React from 'react';

const bannerLogo = require('../assets/images/backgrounds/banner_logo_bg.png');
const bannerDivider = require('../assets/images/dividers/divider_6.png');

interface IBanner {
    test?: string;
}

const Banner: React.StatelessComponent<IBanner> = ({ children, test }) => {
    return (
        <div className='banner-logo'>
            {/* <img src={bannerDivider} alt='banner-divider' /> */}
            <div className='banner-img'>
                <img src={bannerLogo} alt='banner-logo' />
            </div>
            <div className='banner-text'>
                <p className='title'>Welcome to <br />
                    Fairy Cake</p>
                <p className='description'>
                    We offer now a great range of different <br />
                    flavoured bite-size pastries and cakes
                </p>
            </div>
            {children}
        </div>
    );
};

export default Banner;
