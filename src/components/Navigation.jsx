import React, { useState } from 'react';
import '../assets/styles/Navigation.css';
import { FaSchool, FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="container">
            {/* Top Bar with Logo and Hamburger */}
            <div className="header-row">
                <div className="logo">
                    <FaSchool className="logo-icon" />
                    <span>EDUTRANSIT</span>
                </div>
                <button
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Navigation Links */}
            <div className={`nav-row ${isMenuOpen ? 'active' : ''}`}>
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">For Parents</a>
                <a href="#" className="nav-link">For Drivers</a>
                <a href="#" className="nav-link">Schools</a>
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Contact</a>
            </div>
        </nav>
    );
};

export default Navigation;
