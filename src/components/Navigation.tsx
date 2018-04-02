import * as React from 'react';
import Search from './Search';
const logo = require('../assets/images/logo.png');

interface IProps {
    navigation: string[];
}

const Navigation = ({ navigation }: IProps) => {
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
            <div className='nav-icons search'>
               {/* <Search /> */}
            </div>
            <div className='nav-links'>
                {menu}
            </div>
            <div className='nav-icons'>
                <a className='nav-icons-item'>
                    <i className='fa fa-shopping-basket'></i>
                </a>
                <a className='nav-icons-item'>
                    <i className='fa fa-user'></i>
                </a>
                <a className='nav-icons-item'>
                    <i className='fa fa-sign-in-alt'></i>
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
