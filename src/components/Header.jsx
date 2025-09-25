import React from "react";
import { NavLink } from "react-router-dom";

// import ContactCardLight from "../../public/assets/icons/contact-card-lightmode.svg";
// import ContactCardDark from "../../assets/icons/contact-card-darkmode.svg";

function Header({ isDarkMode, toggleDarkMode, menuColor, headerRef, logoContainerRef }) {
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
                            // Usar BASE_URL, asegurándose de que la ruta del archivo NO empiece con /
                            src={isDarkMode
                                ? `${import.meta.BASE_URL}assets/icons/contact-card-darkmode.svg`
                                : `${import.meta.BASE_URL}assets/icons/contact-card-lightmode.svg`
                            }
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
                <div className="logo-container" ref={logoContainerRef}></div>
            </header>
        </div>
    );
}

export default Header;