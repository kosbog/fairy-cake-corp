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
                    <img src={logo} alt="" className="logo" />
                </div>
                <div className="nav-menu">
                    <ul className="nav-list menu-list">
                        <li className="nav-list-item">
                            <a href="">О нас</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="">Меню</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="">Акции</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="">Новости</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="">Контакты</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-socials">
                    <ul className="nav-list social-list">
                        <li className="nav-list-item">
                            <a href="https://www.facebook.com/groups/564769627045161" className="social fb"></a>
                        </li>
                        <li className="nav-list-item">
                            <a href="https://www.instagram.com/fairycakecorp" className="social insta"></a>
                        </li>
                        <li className="nav-list-item">
                            <a href="#" className="social phone"></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="show-menu">
                <span className="shadow-line"></span>
                <span className="shadow-line"></span>
                <span className="shadow-line"></span>
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