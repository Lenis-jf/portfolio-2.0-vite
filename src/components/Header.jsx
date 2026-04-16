import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getIcon } from '../utils/assetsUtils.js';

function Header({ isDarkMode, toggleDarkMode, menuColor, headerRef, logoContainerRef }) {
    const safeMenuColor = menuColor || "";

    const [rotation, setRotation] = useState(0);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const lastScrollYRef = useRef(0);
    const desktopLanguageSwitcherRef = useRef(null);
    const floatingLanguageSwitcherRef = useRef(null);
    const { t, i18n } = useTranslation();

    const currentLanguage = (i18n.resolvedLanguage || "en").slice(0, 2);
    const languageLabels = {
        en: "English",
        es: "Español",
        de: "Deutsch"
    };

    const handleLanguageToggle = () => {
        setIsLanguageMenuOpen(prev => !prev);
    };

    const handleLanguageSelect = (language) => {
        i18n.changeLanguage(language);
        setIsLanguageMenuOpen(false);
    };

    const renderLanguageSwitcher = (variant) => {
        const isFloating = variant === "floating";

        return (
            <div
                className={`language-switcher ${variant}`}
                ref={isFloating ? floatingLanguageSwitcherRef : desktopLanguageSwitcherRef}
            >
                <button
                    type="button"
                    className="language-switcher-trigger"
                    onClick={handleLanguageToggle}
                    aria-label={t("header.language.aria")}
                    aria-expanded={isLanguageMenuOpen}
                    aria-haspopup="menu"
                >
                    <span>{currentLanguage.toUpperCase()}</span>
                    <span className="language-switcher-caret" aria-hidden="true">⌄</span>
                </button>

                {isLanguageMenuOpen && (
                    <div className="language-switcher-menu" role="menu" aria-label={t("header.language.aria")}>
                        {Object.entries(languageLabels).map(([language, label]) => (
                            <button
                                key={language}
                                type="button"
                                className={`language-switcher-option ${currentLanguage === language ? "active" : ""}`}
                                onClick={() => handleLanguageSelect(language)}
                                role="menuitemradio"
                                aria-checked={currentLanguage === language}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    };

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

    useEffect(() => {
        const handleOutsideInteraction = (event) => {
            const insideDesktop = desktopLanguageSwitcherRef.current && desktopLanguageSwitcherRef.current.contains(event.target);
            const insideFloating = floatingLanguageSwitcherRef.current && floatingLanguageSwitcherRef.current.contains(event.target);

            if (!insideDesktop && !insideFloating) {
                setIsLanguageMenuOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsLanguageMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideInteraction);
        document.addEventListener("touchstart", handleOutsideInteraction);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleOutsideInteraction);
            document.removeEventListener("touchstart", handleOutsideInteraction);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    useEffect(() => {
        setIsLanguageMenuOpen(false);
    }, [i18n.resolvedLanguage]);

    return (
        <div>
            <header id="header" className="light-section" ref={headerRef}>
                <label className={`menu ${safeMenuColor}`} aria-label={t("header.menuAria")}>
                    <input type="checkbox" aria-label={t("header.menuInputAria")} />
                </label>
                <nav className={`menu-buttons-container ${safeMenuColor}`} aria-label={t("header.mainNavigationAria")}>
                    <NavLink to="/" className={({ isActive }) => {
                        return `${isDarkMode ? 'menu-button dark-theme' : 'menu-button'} ${isActive ? "active" : ""}`;
                    }}>
                        <span>{t("header.nav.home")}</span>
                    </NavLink>
                    <NavLink to="/work" className={({ isActive }) => {
                        return `${isDarkMode ? 'menu-button dark-theme' : 'menu-button'} ${isActive ? "active" : ""}`;
                    }}>
                        <span>{t("header.nav.work")}</span>
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
                        <span>{t("header.nav.about")}</span>
                    </NavLink>

                    {renderLanguageSwitcher("desktop")}

                    <label className="darkmode-button-container brown-color light-theme" aria-label={t("header.darkModeToggle")}>
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            aria-label={isDarkMode ? t("header.switchToLight") : t("header.switchToDark")}
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
            <div className="mobile-darkmode-toggle" aria-hidden="false">
                <label className="darkmode-button-container brown-color light-theme" aria-label={t("header.darkModeToggle")}>
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        aria-label={isDarkMode ? t("header.switchToLight") : t("header.switchToDark")}
                    />
                </label>
            </div>
            {renderLanguageSwitcher("floating")}
        </div>
    );
}

export default Header;