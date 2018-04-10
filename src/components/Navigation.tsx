import * as React from 'react';
import Search from './Search';
const logo = require('../assets/images/logo.png');

interface INavProps {
    navigation: string[];
}

interface INavIconProps {
    children: object;
    type: string;
}

const NavigationIcons = (props: INavIconProps) => {
    const { type } = props;
    return (
        <div className={`nav-icons ${type}`}>
            {props.children}
        </div>
    );
};

const Navigation = ({ navigation }: INavProps) => {
    navigation.splice(3, 0, logo);
    const menu = navigation.map((item, index) => {
        if (index === 3) {
            return (
                <a href='/' className='logo' key='logo'>
                    <img src={item} alt='logo' />
                </a>
            );
        } else {
            return (
                <a key={item} className='nav-links-item'>{item}</a>
            );
        }
    });

    return (
        <nav>
            <NavigationIcons type='search'>
                {/* <Search /> */}
            </NavigationIcons>
            <div className='nav-links'>
                {menu}
            </div>
            <NavigationIcons type=''>
                <a className='nav-icons-item'>
                    <i className='fa fa-shopping-basket'></i>
                </a>
                <a className='nav-icons-item'>
                    <i className='fa fa-user'></i>
                </a>
                <a className='nav-icons-item'>
                    <i className='fa fa-sign-in-alt'></i>
                </a>
            </NavigationIcons>
        </nav>
    );
};

export default Navigation;
