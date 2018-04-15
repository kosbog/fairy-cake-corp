import * as React from 'react';
import Section from './common/Section';
import Divider from './common/Divider';

const divider = require('../assets/images/dividers/divider_4.png');

interface IProps {
    products: string[];
}

const SpecialProducts = ({ products }: IProps) => {
    return (
        <Section sectionClass='products-special'>
            <Divider type={'title'} imgSrc={divider} />
            <h2>Our Specialties</h2>
        </Section>
    );
};

export default SpecialProducts;
