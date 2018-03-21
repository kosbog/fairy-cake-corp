import * as React from 'react';
import Header from './Header';

interface IState {
    menu: any[];
}

class Home extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            menu: ['Home', 'About', 'Products', 'Blog', 'Shop', 'Contacts']
        };
    }

    render() {
        return (
            <div style={{ 'background-color': '#5b33ff26' }}>
                <Header menuList={this.state.menu} />
            </div>
        );
    }
}

export default Home;
