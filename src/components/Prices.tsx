import * as React from 'react';
import Section from './common/Section';
import Divider from './common/Divider';

const divider = require('../assets/images/dividers/divider_4.png');

const Prices = () => {
    return (
        <Section sectionClass='prices'>
            <div className=' prices-wrapper'>
                <Divider type={'title'} imgSrc={divider} />
                <h2>Our Prices</h2>
                <div className='prices-grid'>
                </div>
            </div>
        </Section>
    );
};

export default Prices;
