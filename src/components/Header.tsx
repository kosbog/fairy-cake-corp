import * as React from 'react';
import Navigation from './Navigation';
import Wave from './common/Wave';

const wave = require('../assets/images/masks/mask-menu.svg');

interface IProps {
    navigation: string[];
}

const Header = ({ navigation }: IProps) => {
    return (
        <header>
            <Navigation navigation={navigation} />
            <Wave type='top' />
        </header>
    );
};

export default Header;
