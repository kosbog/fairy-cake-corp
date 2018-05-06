import * as React from 'react';
import Section from './common/Section';
import Button from './common/Button';
import SVG from '../utils/SVG';

const hart = require('../assets/images/asset15.png');

const MagicProess = () => {
    return (
        <Section sectionClass='magic-process'>
            <div className='mask-overlay'>
                <div className='magic-process-wrapper'>
                    <div className='magic-process-image'>
                        <SVG icon='patternFull' />
                        <img src={hart} alt='hart' />
                    </div>
                    <div className='magic-process-text'>
                        <h2>Magic Processing</h2>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Praesent molestie eu turpis nec molestie. Nam auctor magna mauris, non lacinia felis mattis nec.</p>
                    </div>
                    {/* TODO: create another style of Button */}
                    <Button size={'large'} type={'primary'} />
                </div>
            </div>
        </Section>
    );
};

export default MagicProess;
