import * as React from "react";
import Alert from "./common/Alert";
import Divider from "./common/Divider";
import Button from "./common/Button";
const divider_1 = require('../assets/images/divider_1.png');

const divider_2 = require('../assets/images/divider_2.png');

const divider_3 = require('../assets/images/divider_3.png');


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
                <Divider type={divider_1} />
                <Divider type={divider_2} />
                <Divider type={divider_3} />
                <Button type={"large"}/>
                <Button type={"medium"}/>
                <Button type={"small"}/>
            </div>
        );
    }
}

export default Home;
