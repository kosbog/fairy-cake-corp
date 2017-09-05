import React, { Component } from 'react';
import MoreItem from '../components/NoMatchRoute';
import NoState from '../components/NoState';
import Header from '../components/Header';
import About from '../components/About';
import Products from '../containers/Products';
import BakeryLabel from '../components/BakeryLabel';
import { connect } from 'react-redux';
import store from '../services/store';
import { parallaxScroll } from '../utils/utils'
import { } from '../services/actions/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        parallaxScroll();
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
                <BakeryLabel />
                <About />
                <BakeryLabel />
                <Products />
                <BakeryLabel />
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