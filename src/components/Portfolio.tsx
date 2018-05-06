import * as React from 'react';
import Section from './common/Section';
import Divider from './common/Divider';
import SVG from '../utils/SVG';

const divider = require('../assets/images/dividers/divider_4.png');

const cakes = [
    require('../assets/images/products/asset16.jpeg'),
    require('../assets/images/products/asset17.jpeg'),
    require('../assets/images/products/asset18.jpeg'),
    require('../assets/images/products/asset19.jpeg'),
    require('../assets/images/products/asset20.jpeg'),
    require('../assets/images/products/asset21.jpeg'),
    require('../assets/images/products/asset22.jpeg'),
    require('../assets/images/products/asset23.jpeg')
];

interface IPortfolioItem {
    product: string;
}

const PortfolioItem = ({ product }: IPortfolioItem) => {
    return (
        <div className='portfolio-item'>
            <img src={product} alt='item' />
            <div className='portfolio-item-info'>
                <SVG icon='patternTransparent' />
                <p>
                    Lorem ipsum dolor
                </p>
            </div>
        </div>
    );
};

class Portfolio extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    renderGrid = () => {
        return (
            cakes.map((item, index) => {
                return (
                    <PortfolioItem product={item} key={index} />
                );
            })
        );
    }

    render() {
        return (
            <Section sectionClass='portfolio'>
                <div className=' portfolio-wrapper'>
                    <Divider type={'title'} imgSrc={divider} />
                    <h2>Our Creations</h2>
                    <div className='portfolio-grid'>
                        {this.renderGrid()}
                    </div>
                </div>
            </Section>
        );
    }
}

export default Portfolio;
