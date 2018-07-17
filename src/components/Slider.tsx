import * as React from 'react';
import SVG from '../utils/SVG';
import 'pure-react-carousel/dist/react-carousel.es.css';

const cakes = [
  require('../assets/images/slider/special/item-1.png'),
  require('../assets/images/slider/special/item-2.png'),
  require('../assets/images/slider/special/item-3.png'),
  require('../assets/images/slider/special/item-4.png')
];

const CustomSliderItem = ({ item, index }: any) => {
  return (
    <div className="slider-item">
      <div className="slider-item-image">
        <SVG icon="patternFull" />
        <img src={item} alt="image" />
      </div>
      <div className="slider-item-text">
        <h3>Occasion Cakes</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      </div>
    </div>
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
        {cakes.map((item, index) => {
          return (<CustomSliderItem item={item} index={index} key={index} />);
        })}
      </div>
    );
  }
}

export default CustomSlider;
