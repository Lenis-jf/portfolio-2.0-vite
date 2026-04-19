import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import TransitionButton from "../components/TransitionButton";
import { getIcon, getProjectAssetUrl } from '../utils/assetsUtils.js';

const Work = ({ workRef, isDarkMode }) => {
    const { t } = useTranslation();
    const resizeTimeoutRef = useRef(null);

    function measureMaxOpenHeight(li) {
        li.classList.add("open");
        li.classList.remove("closed");
        
        li.style.height = "auto";
        const height = li.scrollHeight;
        li.style.height = "";
        li.style.setProperty("--open-height", `${Math.ceil(height) + 40}px`);
        li.classList.remove("open");
        li.classList.add("closed");
    }

    function setupCardHeights() {
        const allCards = document.querySelectorAll(".project-item");
        const closedHeights = [];

        allCards.forEach(li => {
            const mainInfo = li.querySelector(".main-info");
            if (!mainInfo) return;

            const liStyle = window.getComputedStyle(li);
            const paddingTop = parseFloat(liStyle.paddingTop);
            const paddingBottom = parseFloat(liStyle.paddingBottom);
            const closedHeight = mainInfo.offsetHeight + paddingTop + paddingBottom;
            closedHeights.push(closedHeight);
        });

        const sharedClosedHeight = Math.ceil(Math.max(...closedHeights, 0));

        allCards.forEach(li => {
            li.style.setProperty("--closed-height", `${sharedClosedHeight}px`);
            measureMaxOpenHeight(li);
        });
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });

        const prevTitle = document.title;
        document.title = t("work.documentTitle");

        // Espera a que todas las imágenes carguen antes de medir
        const mockupImages = document.querySelectorAll("img.mockup");
        let loadedCount = 0;

        const checkAllLoaded = () => {
            loadedCount++;
            if (loadedCount === mockupImages.length) {
                setupCardHeights();
            }
        };

        if (mockupImages.length === 0) {
            setupCardHeights();
        } else {
            mockupImages.forEach(image => {
                if (image.complete) {
                    checkAllLoaded();
                } else {
                    image.addEventListener("load", checkAllLoaded, { once: true });
                }
            });
        }

        // Re-medir en resize con delay para evitar múltiples cálculos
        const handleResize = () => {
            if (resizeTimeoutRef.current) {
                window.clearTimeout(resizeTimeoutRef.current);
            }
            resizeTimeoutRef.current = window.setTimeout(() => {
                setupCardHeights();
            }, 150);
        };
        window.addEventListener("resize", handleResize);

        const handleOutsideClick = (e) => {
            if (!e.target.closest(".project-item")) {
                document.querySelectorAll(".project-item.open").forEach(item => {
                    item.classList.remove("open");
                    item.classList.add("closed");
                });
            }
        };
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.title = prevTitle;
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("click", handleOutsideClick);
            if (resizeTimeoutRef.current) {
                window.clearTimeout(resizeTimeoutRef.current);
            }
        };
    }, [t]);

    function openItem(e) {
        if (e.target.closest("button, a")) {
            return;
        }

        const li = e.currentTarget.closest(".project-item");
        const isOpening = !li.classList.contains("open");

        document.querySelectorAll(".project-item.open").forEach(item => {
            if (item !== li) {
                item.classList.remove("open");
                item.classList.add("closed");
            }
        });

        if (isOpening) {
            li.classList.add("open");
            li.classList.remove("closed");
        } else {
            li.classList.remove("open");
            li.classList.add("closed");
        }
    }

    return (
        <main id="main-content">
            <section className="section work-section light-section" ref={workRef}>
                <h1><strong>{t("work.heading")}</strong></h1>
                <p>{t("work.intro")}</p>
                <ul className="projects-list">
                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>{t("work.cards.leonti.title")}</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool react-tool"><strong>React</strong></div>
                                <div className="tool scss-tool"><strong>SCSS</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>{t("work.cards.leonti.description")}</p>
                                <TransitionButton to="projects/leonti" label={t("work.readMore")} />
                            </div>
                            <img src={getProjectAssetUrl("leonti-assets/leonti-iphone-mockup.webp")} alt="project mockup" className="mockup iphone leonti" />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>{t("work.cards.dronesim.title")}</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool java-tool"><strong>Java</strong></div>
                                <div className="tool swing-tool"><strong>Swing</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>{t("work.cards.dronesim.description")}</p>
                                <TransitionButton to="projects/dronesim" label={t("work.readMore")} />
                            </div>
                            <img src={getProjectAssetUrl("dronesim-assets/dronesim-mac-mockup.webp")} alt="project mockup" className="mockup dronesim mac" />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>{t("work.cards.culturalFitness.title")}</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool js-tool"><strong>JavaScript</strong></div>
                                <div className="tool scss-tool"><strong>SCSS</strong></div>
                                <div className="tool html-tool"><strong>HTML</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>{t("work.cards.culturalFitness.description")}</p>
                                <TransitionButton to="projects/cultural-fitness" label={t("work.readMore")} />
                            </div>
                            <img src={getProjectAssetUrl("cultural-fitness-assets/cultural-fitness-iphone-mockup.webp")} alt="project mockup" className="mockup iphone cultural" />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>{t("work.cards.scraper.title")}</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool py-tool"><strong>Python</strong></div>
                                <div className="tool flet-tool"><strong>Flet</strong></div>
                                <div className="tool selenium-tool"><strong>Selenium</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>{t("work.cards.scraper.description")}</p>
                                <TransitionButton to="projects/scraper" label={t("work.readMore")} />
                            </div>
                            <img alt="project mockup" src={getProjectAssetUrl("scraper-assets/scraper-mac-mockup.webp")} className="mockup scraper mac" />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>{t("work.cards.voiceMaze.title")}</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool react-tool"><strong>React</strong></div>
                                <div className="tool scss-tool"><strong>SCSS</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>{t("work.cards.voiceMaze.description")}</p>
                                <TransitionButton to="projects/voice-maze" label={t("work.readMore")} />
                            </div>
                            <img alt="project mockup" className="mockup iphone voice-maze" src={getProjectAssetUrl("voice-maze-assets/voice-maze-iphone-mockup.webp")} />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>{t("work.cards.roomman.title")}</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool c-tool"><strong>C</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>{t("work.cards.roomman.description")}</p>
                                <TransitionButton to="projects/roomman" label={t("work.readMore")} />
                            </div>
                            <img alt="project mockup" className="mockup mac roomman" src={getProjectAssetUrl("roomman-assets/roomman-mac-mockup.webp")} />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>{t("work.cards.batatabit.title")}</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool js-tool"><strong>JavaScript</strong></div>
                                <div className="tool css-tool"><strong>CSS</strong></div>
                                <div className="tool html-tool"><strong>HTML</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>{t("work.cards.batatabit.description")}</p>
                                <TransitionButton to="projects/batatabit" label={t("work.readMore")} />
                            </div>
                            <img alt="project mockup" className="mockup iphone batatabit" src={getProjectAssetUrl("batatabit-assets/batatabit-iphone-mockup.webp")} />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>{t("work.cards.oceanoRosa.title")}</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool js-tool"><strong>JavaScript</strong></div>
                                <div className="tool css-tool"><strong>CSS</strong></div>
                                <div className="tool html-tool"><strong>HTML</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>{t("work.cards.oceanoRosa.description")}</p>
                                <TransitionButton to="projects/oceano-rosa" label={t("work.readMore")} />
                            </div>
                            <img alt="project mockup" className="mockup mac oceano-rosa" src={getProjectAssetUrl("oceano-rosa-assets/oceano-rosa-mac-mockup.webp")} />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>{t("work.cards.tyc.title")}</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool html-tool"><strong>HTML</strong></div>
                                <div className="tool scss-tool"><strong>SCSS</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>{t("work.cards.tyc.description")}</p>
                                <TransitionButton to="projects/tyc" label={t("work.readMore")} />
                            </div>
                            <img alt="project mockup" className="mockup iphone tyc" src={getProjectAssetUrl("tyc-assets/tyc-iphone-mockup.webp")} />
                        </div>
                    </li>
                </ul>
                <span className="copy-right">©juanfelenis 2025</span>
            </section>
        </main>
    );
};

export default Work;