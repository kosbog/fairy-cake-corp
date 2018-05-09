import * as React from 'react';
import Section from './common/Section';
import Divider from './common/Divider';
import SVG from '../utils/SVG';

import { CarouselProvider, Slider, Slide, ImageWithZoom, Image, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { callbackify } from 'util';

const divider = require('../assets/images/dividers/divider_4.png');

const cakes = [
    require('../assets/images/slider/special/item-1.png'),
    require('../assets/images/slider/special/item-2.png'),
    require('../assets/images/slider/special/item-3.png'),
    require('../assets/images/slider/special/item-4.png'),
    require('../assets/images/slider/special/item-1.png'),
    require('../assets/images/slider/special/item-2.png'),
    require('../assets/images/slider/special/item-3.png')
];

const CustomSliderItem = ({ item, index }: any) => {
    return (
        <Slide index={index}>
            <div className='slider-item'>
                <div className='slider-item-image'>
                    <SVG icon='patternFull' />
                    <Image hasMasterSpinner={false} src={item} />
                </div>
                <div className='slider-item-text'>
                    <h3>Occasion Cakes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
            </div>
        </Slide>
    );
};

class CustomSlider extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 1
        };
    }

    render() {
        return (
            <div className={`slider ${this.props.classes}`}>
                <CarouselProvider isPlaying interval={3000}
                    naturalSlideWidth={1}
                    naturalSlideHeight={1}
                    totalSlides={cakes.length}
                    visibleSlides={4}>
                    <Slider>
                        {cakes.map((item, index) => {
                            return <CustomSliderItem item={item} index={index} key={index} />
                        })}
                    </Slider>
                    <ButtonBack><i className='flaticon-arrows'></i></ButtonBack>
                    <ButtonNext><i className='flaticon-arrows'></i></ButtonNext>
                </CarouselProvider>
            </div>
        );
    }
}

export default CustomSlider;
