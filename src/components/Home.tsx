import * as React from 'react';
import Header from './Header';
import Section from './common/Section';
import Wave from './common/Wave';
import BannerLogo from './BannerLogo';
import SpecialProducts from './Products.Special';

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
                    {/* <Wave type='bottom' /> */}
                    {/* <div className='page-wrapper'> */}
                        <SpecialProducts products={[]} />
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default Home;
