import * as React from "react";

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
                Hello
            </div>
        );
    }
}

export default Home;
