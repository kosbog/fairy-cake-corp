import React from 'react';
import logo from '../assets/img/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-nav">
                    <a href="">Link me</a>
                    <a href="">Link me</a>
                    <a href="">Link me</a>
                </div>
                <div className="footer-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer-nav">
                    <a href="">Link me</a>
                    <a href="">Link me</a>
                    <a href="">Link me</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;