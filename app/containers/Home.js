import React, { Component } from 'react';
import MoreItem from '../components/NoMatchRoute';
import NoState from '../components/NoState';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import Products from '../containers/Products';
import BakeryLabel from '../components/BakeryLabel';
import ScrollTopButton from '../components/ScrollTopButton';
import { connect } from 'react-redux';
import store from '../services/store';
import { parallaxScroll, showScrollTopButton, stickyNavigation } from '../utils/utils'
import { } from '../services/actions/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(arguments);
        return false;
    }

    componentDidMount() {
        document.addEventListener('scroll', parallaxScroll);
        document.addEventListener('scroll', showScrollTopButton);
        document.addEventListener('scroll', stickyNavigation);
    }

    render() {
        const state = this.props.state;

        // if (state.length === 0) {
        //     return (
        //         <NoState />
        //     )
        // }
        return (
            <div className="container">
                <Header />
                <About />
                <BakeryLabel />
                <Products />
                <Footer />
                <ScrollTopButton />
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);