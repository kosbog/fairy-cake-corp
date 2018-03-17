import * as React from "react";
import Alerts from "./common/Alerts";

class Home extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            "test": "test"
        };
    }

    render() {
        return (
            <div>
                <Alerts type={"warning"} />
            </div>
        );
    }
}

export default Home;
