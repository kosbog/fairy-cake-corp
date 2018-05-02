import * as React from 'react';
import Header from './Header';
import Section from './common/Section';
import Wave from './common/Wave';
import Banner from './Banner';
import SpecialProducts from './Products.Special';
import MagicProcess from '../components/Magic.Process';
import Portfolio from './Portfolio';
import KnowUs from './KnowUs';
import Testimonial from './Testimonial';
import Prices from './Prices';
import Recipes from './Recipes';
import Footer from './Footer';

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
                    <Banner>
                        <img src={cakes} alt='c' />
                    </Banner>
                </Section>
                <div className='page'>
                    <SpecialProducts products={[]} />
                    <MagicProcess />
                    <Portfolio />
                    <KnowUs />
                    <Recipes />
                    <Testimonial />
                    <Prices />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
