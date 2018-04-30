import * as React from 'react';
import Section from './common/Section';
import Divider from './common/Divider';
import Button from './common/Button';

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
            <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1000 690'>
                <path d='M1503-747c-669.3,0-1338.7,0-2008,0c0.3,425,0.7,850,1,1275c0,7.7,0,15.3,0,23c168.3,0.1,336.7,0.3,505,0.4
                c18.1-10.6,32.9-15.9,58.4-10.8c80.7,16.2,160.7,100.3,240.4,93.8c93-7.5,184.6-116.6,284.6-96c88.9,18.3,101.9,175.6,227.2,147.5
                c79.9-17.9,68.2-118.2,149.1-138.7c12.8-3.3,20.2-4.2,38.4-3.4c167.7,0.7,335.3,1.5,503,2.2c0.3-6,0.7-12,1-18
                C1503,103,1503-322,1503-747z'></path>
            </svg>
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
                            <PricesItem item={item} key={index}/>
                        )
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Prices;
