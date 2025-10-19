import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getIcon } from '../utils/assetsUtils.js';

function Header({ isDarkMode, toggleDarkMode, menuColor, headerRef, logoContainerRef }) {
    const [rotation, setRotation] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleLogoRotation = () => {
            const currentScrollY = window.scrollY;
            const direction = currentScrollY > lastScrollY ? 1 : -1;
            const rotationSpeed = 8;

            setRotation(prev => prev + direction * rotationSpeed);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleLogoRotation);

        return () => { window.removeEventListener('scroll', handleLogoRotation) };
    }, [lastScrollY]);

    return (
        <div>
            <header id="header" className="light-section" ref={headerRef}>
                <label className={`menu ${menuColor}`}>
                    <input type="checkbox" />
                </label>
                <div className={`menu-buttons-container ${menuColor}`}>
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
                        return `${isDarkMode ? 'menu-button dark-theme' : 'menu-button'} ${isActive ? "active" : ""}`;
                    }}>
                        <img
                            src={`${import.meta.env.BASE_URL}assets/icons/contact-card-darkmode.svg`}
                            alt="contact-card icon"
                        />
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => {
                        return `${isDarkMode ? 'menu-button dark-theme' : 'menu-button'} ${isActive ? "active" : ""}`;
                    }}>
                        <span>About</span>
                    </NavLink>

                    <label className="darkmode-button-container brown-color light-theme">
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                        />
                    </label>
                </div>
                <div className="logo-container" ref={logoContainerRef}>
                    <img 
                        src={getIcon("logo-small", isDarkMode)}
                        alt="small juanfelenis logo"
                        style={{transform: `rotate(${rotation}deg)`}} />
                </div>
            </header>
        </div>
    );
}

export default Header;