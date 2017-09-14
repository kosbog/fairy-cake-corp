import React from 'react';
import logo from '../assets/img/logo.png';

const MainLogo = () => {
    return (
        <div className="header-logo">
            <img src={logo} alt="" />
            <h1 className="header-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                Itaque placeat amet
            </h1>
        </div>
    )
}

const Navigation = () => {
    return (
        <nav>
            <div className="nav">
                <div className="nav-logo">
                    <img src="" alt="" className="logo" />
                </div>
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-list-item">Different</li>
                        <li className="nav-list-item">Links</li>
                        <li className="nav-list-item">Will be</li>
                        <li className="nav-list-item">Just</li>
                        <li className="nav-list-item">Here</li>
                    </ul>
                </div>
                <div className="nav-socials">
                    <ul className="nav-list social-list">
                        <li className="nav-list-item">
                            <a href="#" className="social fb"></a>
                        </li>
                        <li className="nav-list-item">
                            <a href="#" className="social inst"></a>
                        </li>
                        <li className="nav-list-item">
                            <a href="#" className="social google"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const Header = () => {
    return (
        <header className="parallax">
            <Navigation />
            <MainLogo />
        </header>
    )
}

export default Header;