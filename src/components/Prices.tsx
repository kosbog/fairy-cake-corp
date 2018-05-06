import * as React from 'react';
import Section from './common/Section';
import Divider from './common/Divider';
import Button from './common/Button';
import SVG from '../utils/SVG';

const divider = require('../assets/images/dividers/divider_4.png');
const pricesArr = [
    require('../assets/images/prices/asset30.png'),
    require('../assets/images/prices/asset31.png'),
    require('../assets/images/prices/asset32.png'),
    require('../assets/images/prices/asset33.png')
];

const PricesItem = ({ item }: any) => {
    return (
        <div className='prices-item'>
            <SVG icon='drip' />
            <div className='prices-item-image'>
                <img src={item} alt='prices' />
            </div>
            <div className='prices-item-text'>
                <h4>Occasion Cakes</h4>
                <p className='price'>15</p>
                <p className='count'>For 1 Cake</p>
                <p className='includes'>1 x Sweet Aniseed</p>
                <p className='includes'>1 x Soft Fruits</p>
                <p className='includes'>1 x Assorted</p>
                <p className='includes'>1 x Flavour Mix</p>
            </div>
            <Button size={'small'} type={'primary'} text='Order Now' />
        </div>
    );
};

const Prices = () => {
    return (
        <Section sectionClass='prices'>
            <div className=' prices-wrapper'>
                <Divider type={'title'} imgSrc={divider} />
                <h2>Our Prices</h2>
                <div className='prices-grid'>
                    {pricesArr.map((item, index) => {
                        return (
                            <PricesItem item={item} key={index} />
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Prices;
