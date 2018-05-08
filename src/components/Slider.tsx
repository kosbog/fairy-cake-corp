import * as React from 'react';
import Section from './common/Section';
import Divider from './common/Divider';
import SVG from '../utils/SVG';

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


const RightArrow = ({ nextSlide }: any) => {
    return (
        <div className='vv' onClick={nextSlide}>
            RightArrow
        </div>
    );
};

const LeftArrow = ({ previousSlide }: any) => {
    return (
        <div className='vv' onClick={previousSlide}>
            LeftArrow
        </div>
    );
};

const SliderItem = ({ item }: any) => {
    return (
        <div className='slider-item'>
            <div className='slider-item-image'>
                <SVG icon='patternFull' />
                <img src={item} alt='image' />
            </div>
            <div className='slider-item-text'>
                <h3>Occasion Cakes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
        </div>
    );
};

class Slider extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 1
        };
    }

    nextSlide = () => {
        this.setState({ count: this.state.count + 1 })
    }

    previousSlide = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div className={`slider ${this.props.classes}`}>
                    {cakes.map((item, index) => {
                        return <SliderItem item={item} key={index} />
                    })}

                    {/* <RightArrow nextSlide={this.nextSlide} />
                <LeftArrow previousSlide={this.previousSlide} /> */}
            </div>
        );
    }
}

export default Slider;
