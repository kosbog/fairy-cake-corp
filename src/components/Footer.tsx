import * as React from 'react';
import Section from './common/Section';
import SVG from '../utils/SVG';

const footerLogo = require('../assets/images/logo1.png');

const FooterMail = () => {
    return (
        <div className='footer-mail'>
            <h3>Get Our Sweet News</h3>
            <SVG icon='divider' class='divider' />
            <form className='mail_form'>
                <input type='text' placeholder='your email' />
                <button type='submit' className='flaticon-envelope'></button>
            </form>
        </div>
    );
};

const FooterLogo = () => {
    return (
        <div className='footer-logo'>
            <img src={footerLogo} alt='logo' />
        </div>
    );
};

const FooterIcons = () => {
    return (
        <div className='footer-icons'>
            <h3>Follow Us</h3>
            <SVG icon='divider' class='divider' />
            <div className='icons_grid'>
                <a href='#' className='icons_grid-item'>
                    <SVG icon='patternFull' />
                    <span className='flaticon-facebook-letter-logo'></span>
                </a>
                <a href='#' className='icons_grid-item'>
                    <SVG icon='patternFull' />
                    <span className='flaticon-social-media'></span>
                </a>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <Section sectionClass='footer'>
            <div className=' footer-wrapper'>
                <div className='footer-grid'>
                    <FooterIcons />
                    <FooterLogo />
                    <FooterMail />
                </div>
                <div className='rights'>
                    <p>Fairy Cake corp.</p>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
