import * as React from 'react';
import { hot } from 'react-hot-loader';
import Home from './Home';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <React.Fragment>
                <Home />
            </React.Fragment>
        );
    }
}

export default hot(module)(App);
