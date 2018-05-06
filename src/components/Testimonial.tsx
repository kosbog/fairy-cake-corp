import * as React from 'react';
import Section from './common/Section';
import SVG from '../utils/SVG';

const avatar = require('../assets/images/asset28.jpeg');

class Testimonial extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <Section sectionClass='testimonial'>
                <div className='testimonial-wrapper'>
                    <h2>Clients Say</h2>
                    <div className='testimonial-grid'>
                        <div className='testimonial-item'>
                            <div className='testimonial-item-image'>
                                <SVG icon='crease' />
                                <img src={avatar} alt='testimonial' />
                                <SVG icon='crease' />
                            </div>
                            <div className='testimonial-item-text'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem imperdiet, venenatis
                                    eros ac,mattis mauris. Nam ac purus justo. Vivamus non hendrerit velit.
                                </p>
                                <span>
                                    Jonh Doe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Testimonial;
