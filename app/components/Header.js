import React from 'react';

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
        <header>
            <Navigation />
            <h1 className="header-title">
                Good Bakery Shop
            </h1>
        </header>
    )
}

export default Header;