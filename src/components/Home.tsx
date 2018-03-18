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
                <Alerts type={"warning"} icon={"exclamation"} content={"Warning box"} />
                <Alerts type={"error"} icon={"ban"} content={"Error box"} />
                <Alerts type={"info"} icon={"info"} content={"Information box"} />
                <Alerts type={"confirm"} icon={"check"} content={"Confirmation box"} />
            </div>
        );
    }
}

export default Home;
