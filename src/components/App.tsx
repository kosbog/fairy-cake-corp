import * as React from "react";
import Home from "./Home";

interface IProps { name: string; }

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}

export default App;
