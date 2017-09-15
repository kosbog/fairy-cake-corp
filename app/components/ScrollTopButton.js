import React from 'react';
import { scrollToTop } from '../utils/utils';

const ScrollTopButton = () => {
    return (
        <div className="scroll-top-button" onClick={scrollToTop}>
            <button type="button"></button>
        </div>
    )
}

export default ScrollTopButton;