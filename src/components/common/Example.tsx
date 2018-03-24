import * as React from 'react';
import Alert from './Alert';
import Divider from './Divider';
import Button from './Button';
const divider1 = require('../../assets/images/dividers/divider_1.png');
const divider2 = require('../../assets/images/dividers/divider_2.png');
const divider3 = require('../../assets/images/dividers/divider_3.png');
const divider4 = require('../../assets/images/dividers/divider_4.png');

class Example extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            test: 'test'
        };
    }

    render() {
        return (
            <div>
                <div>
                    <Alert type={'warning'} icon={'exclamation'} content={'Warning box'} />
                    <Alert type={'error'} icon={'ban'} content={'Error box'} />
                    <Alert type={'info'} icon={'info'} content={'Information box'} />
                    <Alert type={'confirm'} icon={'check'} content={'Confirmation box'} />
                </div>
                <div style={{ 'text-align': 'center' }}>
                    <Button size={'large'} type={'primary'} />
                    <Divider type={'crossline'} imgSrc={divider1} />
                    <Button size={'large'} type={'warning'} />
                    <Divider type={'line'} imgSrc={divider2} />
                    <Button size={'medium'} type={'info'} />
                    <Divider type={'spiral'} imgSrc={divider3} />
                    <Button size={'small'} type={'error'} />
                    <Divider type={'title'} imgSrc={divider4} />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero, fugiat magnam aliquid accusantium recusandae eius commodi
                        consectetur optio eum quisquam velit asperiores quasi illo unde
                        ipsum enim exercitationem! Aperiam, similique.</p>
                </div>
            </div>
        );
    }
}

export default Example;