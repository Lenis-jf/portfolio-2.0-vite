// src/components/Header.jsx

import React from "react";
import { Link } from "react-router-dom";

function Header({ isDarkMode, toggleDarkMode, menuColor, headerRef }) {
    return (
        <div>
            <header className="light-section" ref={headerRef}>
                <label className={`menu ${menuColor}`}>
                    <input type="checkbox" />
                </label>
                <div className={`menu-buttons-container ${menuColor}`}>
                    <Link to="/" className={`menu-button ${isDarkMode ? 'dark-theme' : ''}`}>
                        <span>Home</span>
                    </Link>
                    <a href="/" className={`menu-button ${isDarkMode ? 'dark-theme' : ''}`}>
                        <span>Work</span>
                    </a>
                    <Link to="/contact" className={`menu-button ${isDarkMode ? 'dark-theme' : ''}`}>
                        <span>Me</span>
                    </Link>
                    <Link to="/about" className={`menu-button ${isDarkMode ? 'dark-theme' : ''}`}>
                        <span>About</span>
                    </Link>

                    <label className="darkmode-button-container brown-color light-theme">
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                        />
                    </label>
                </div>
                <div className="logo-container"></div>
            </header>
        </div>
    );
}

export default Header;