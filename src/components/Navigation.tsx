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
    const menu = navigation.map((item, index) => {
        return (
            <a key={item} className='nav-links-item'>{item}</a>
        );
    });

    // TODO: refacotr render method!
    return (
        <nav>
            <NavigationIcons type='search'>
                {/* <Search /> */}
            </NavigationIcons>
            <div className='nav-links'>
                {menu.filter((i, index) => index < 3)}
            </div>
            <a href='/' className='logo' key='logo'>
                <img src={logo} alt='logo' />
            </a>
            <div className='nav-links'>
                {menu.filter((i, index) => index > 2)}
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
