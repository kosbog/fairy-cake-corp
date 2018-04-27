import * as React from 'react';
import Header from './Header';
import Section from './common/Section';
import Wave from './common/Wave';
import BannerLogo from './BannerLogo';
import SpecialProducts from './Products.Special';
import MagicProcess from '../components/Magic.Process';
import Portfolio from './Portfolio';
import KnowUs from './KnowUs';
import Testimonial from './Testimonial';
import Prices from './Prices';

interface IState {
    menu: any[];
}

const cakes = require('../assets/images/cakes.jpeg');

class Home extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            menu: ['Home', 'About', 'Products', 'Blog', 'Shop', 'Contacts']
        };
    }

    render() {
        return (
            <div className='home'>
                <Section sectionClass='header-wrapper'>
                    <Header navigation={this.state.menu} />
                    <Section sectionClass='banner-wrapper'>
                        <img src={cakes} alt='c' />
                        <BannerLogo />
                    </Section>
                </Section>
                <div className='page'>
                        <SpecialProducts products={[]} />
                        <MagicProcess />
                        <Portfolio />
                        <KnowUs />
                        <Prices />
                        <Testimonial />
                </div>
            </div>
        );
    }
}

export default Home;
