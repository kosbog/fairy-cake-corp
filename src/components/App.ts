import * as React from "react";

class App extends React.Component<IProps, {}> {
    render() {
        return (
            <h1>Hello, bady</h1>
        );
    }
}

export default App;

interface IProps { name: string; }