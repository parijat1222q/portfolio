import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Parijat Biswas</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>

                <span className="footer__copy">
                    &#169; {new Date().getFullYear()} Parijat. All rights reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
