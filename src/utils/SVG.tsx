import * as React from 'react';
import { PATTERNS } from '../utils/Assets';

interface ISVG {
    icon: string;
    style?: object;
    class?: string;
}

class SVG extends React.Component<ISVG, {}> {
    constructor(props: ISVG) {
        super(props);
    }

    render() {
        return (
            <svg viewBox={PATTERNS[this.props.icon].viewBox}
                style={this.props.style}
                className={this.props.class}>
                <path d={PATTERNS[this.props.icon].path} />
            </svg>
        );
    }
}

export default SVG;
