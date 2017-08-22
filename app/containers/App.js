import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../containers/Home';
import NoMatchRoute from './NoMatchRoute';
import store from '../services/store';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router >
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route component={NoMatchRoute}></Route>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;