import * as React from "react";
import Alerts from "./common/Alerts";
import Divider from "./common/Divider";

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
                <Divider type={"divider_1"} />
            </div>
        );
    }
}

export default Home;
