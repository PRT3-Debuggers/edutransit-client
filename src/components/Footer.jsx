import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="/about">About</a>
                <a href="/drivers">Drivers</a>
                <a href="/privacy">Privacy Policy</a>
            </div>
            <p>&copy; {new Date().getFullYear()} EduTransit. All rights reserved.</p>
        </footer>
    );
};

export default Footer;