import * as React from "react";
import Alert from "./common/Alert";
import Divider from "./common/Divider";
import Button from "./common/Button";

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
                <Alert type={"warning"} icon={"exclamation"} content={"Warning box"} />
                <Alert type={"error"} icon={"ban"} content={"Error box"} />
                <Alert type={"info"} icon={"info"} content={"Information box"} />
                <Alert type={"confirm"} icon={"check"} content={"Confirmation box"} />
                <Divider type={"divider_1"} />
                <Button type={"large"}/>
                <Button type={"medium"}/>
                <Button type={"small"}/>
            </div>
        );
    }
}

export default Home;
