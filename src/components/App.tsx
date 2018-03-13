import * as React from "react";

class App  extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

interface IProps { name: string; }

export default App;
