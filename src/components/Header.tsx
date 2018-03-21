import * as React from 'react';
import Navigation from './Navigation';

interface IProps {
    menuList: string[];
}

const Header = ({ menuList }: IProps) => {
    return (
        <header>
            <Navigation />
        </header>
    );
};

export default Header;
