import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { getIcon } from '../utils/assetsUtils.js';

function Header({ isDarkMode, toggleDarkMode, menuColor, headerRef, logoContainerRef }) {
    const [rotation, setRotation] = useState(0);
    const lastScrollYRef = useRef(0);

    useEffect(() => {
        const handleLogoRotation = () => {
            const currentScrollY = window.scrollY;
            const direction = currentScrollY > lastScrollYRef.current ? 1 : -1;
            const rotationSpeed = 8;

            setRotation(prev => prev + direction * rotationSpeed);
            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener('scroll', handleLogoRotation);

        return () => { window.removeEventListener('scroll', handleLogoRotation) };
    }, []);

    return (
        <div>
            <header id="header" className="light-section" ref={headerRef}>
                <label className={`menu ${menuColor}`} aria-label="Toggle navigation menu">
                    <input type="checkbox" aria-label="Open menu" />
                </label>
                <nav className={`menu-buttons-container ${menuColor}`} aria-label="Main navigation">
                    <NavLink to="/" className={({ isActive }) => {
                        return `${isDarkMode ? 'menu-button dark-theme' : 'menu-button'} ${isActive ? "active" : ""}`;
                    }}>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/work" className={({ isActive }) => {
                        return `${isDarkMode ? 'menu-button dark-theme' : 'menu-button'} ${isActive ? "active" : ""}`;
                    }}>
                        <span>Work</span>
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => {
                        return `${isDarkMode ? 'menu-button contact dark-theme' : 'menu-button contact'} ${isActive ? "active" : ""}`;
                    }}>
                        <img
                            src={`${import.meta.env.BASE_URL}assets/icons/contact-card-darkmode.svg`}
                            alt="Contact page"
                        />
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => {
                        return `${isDarkMode ? 'menu-button dark-theme' : 'menu-button'} ${isActive ? "active" : ""}`;
                    }}>
                        <span>About</span>
                    </NavLink>

                    <label className="darkmode-button-container brown-color light-theme" aria-label="Toggle dark mode">
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                        />
                    </label>
                </nav>
                <div className="logo-container" ref={logoContainerRef}>
                    <img 
                        src={getIcon("logo-small", isDarkMode)}
                        alt="Juanfelenis logo"
                        style={{transform: `rotate(${rotation}deg)`}} />
                </div>
            </header>
        </div>
    );
}

export default Header;