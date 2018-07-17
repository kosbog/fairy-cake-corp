import * as React from 'react';
import Section from './common/Section';
import Divider from './common/Divider';
import SVG from '../utils/SVG';
import Slider from './Slider';

const divider = require('../assets/images/dividers/divider_4.png');

const cakes = [
  require('../assets/images/slider/special/item-1.png'),
  require('../assets/images/slider/special/item-2.png'),
  require('../assets/images/slider/special/item-3.png'),
  require('../assets/images/slider/special/item-4.png')
];

interface IProps {
  products: string[];
}

const SpecialProducts = ({ products }: IProps) => {
  return (
    <Section sectionClass="products-special">
      <div className="products-wrapper">
        <Divider type={'title'} imgSrc={divider} />
        <h2>Our Specialties</h2>
        <Slider classes="products-special-slider" />
      </div>
    </Section>
  );
};

export default SpecialProducts;
