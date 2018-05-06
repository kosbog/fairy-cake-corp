import * as React from 'react';
import Section from './common/Section';

const bannerLogo = require('../assets/images/backgrounds/banner_logo_bg.png');
const bannerDivider = require('../assets/images/dividers/divider_6.png');

interface IBanner {
    test?: string;
    children?: React.ReactNode;
}

const Banner = ({ children, test }: IBanner) => {
    return (
        <Section sectionClass='banner'>
            <div className='banner-wrapper'>
                {children}
                <div className='banner-logo'>
                    <div className='banner-img'>
                        <img src={bannerLogo} alt='banner-logo' />
                    </div>
                    <div className='banner-text'>
                        <p className='title'>Welcome to <br />
                            Fairy Cake
                        </p>
                        <p className='description'>
                            We offer now a great range of different <br />
                            flavoured bite-size pastries and cakes
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Banner;
