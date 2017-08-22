import React, { Component } from 'react';
import MoreItem from './MoreItem';
import NoState from './NoState';
import { connect } from 'react-redux';
import store from '../services/store';
import { } from '../utils/utils'
import {  } from '../services/actions/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    componentDidMount() {
    }

    render() {
        const state = this.props.state;

        if (state.length === 0) {
            return (
                <NoState />
            )
        }
        return (
            <div className="container">
                Home
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