import React, { useEffect } from "react";
import TransitionButton from "../components/TransitionButton";
import { getIcon, getProjectAssetUrl } from '../utils/assetsUtils.js';

const Work = ({ workRef, onWorkReady, isDarkMode }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });

        const prevTitle = document.title;
        document.title = "Work | Juanfelenis-dev";

        if (typeof onWorkReady === "function")
            onWorkReady(true);

        return () => (document.title = prevTitle);
    }, []);

    function openItem(e) {
        const li = e.currentTarget;

        document.querySelectorAll(".project-item.open").forEach(item => {
            if (item !== li) item.classList.remove("open");
        });

        li.classList.toggle("open");
    }

    return (
        <>
            <section className="section work-section light-section hidden" ref={workRef}>
                <h1><strong>Ready to dive into my world?</strong></h1>
                <p>
                    Each project I’ve worked on tells a story — a mix of curiosity, design, and a touch of obsession with detail.
                    Here, you’ll find a collection of ideas turned into code, pixels shaped with purpose, and experiments that grew into full experiences.
                    Take a look around — every piece represents a small step forward in my journey of creating things that feel as good as they look.
                </p>
                <ul className="projects-list">
                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Leonti Aesthetic — Modern Beauty Studio Website</h2>
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
                                <p>
                                    Leonti Aesthetic is a modern beauty studio website showcasing eyelash extensions, lifting, and facial treatments. Built with React and SCSS, it delivers a smooth, elegant, and responsive user experience with subtle animations that highlight the brand’s clean and professional aesthetic.
                                </p>
                            </div>
                            <img src={getProjectAssetUrl("leonti-assets/leonti-iphone-mockup.webp")} alt="project mockup" className="mockup" />
                        </div>
                        <TransitionButton to="" label="Read more about it" />
                    </li>
                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
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
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                </p>
                                <TransitionButton to="" label="Read more about it" />
                            </div>
                            <img src={getProjectAssetUrl("leonti-assets/leonti-iphone-mockup.webp")} alt="project mockup" className="mockup" />
                        </div>
                    </li>
                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
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
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                </p>
                                <TransitionButton to="" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup" />
                        </div>
                    </li>
                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
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
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                </p>
                                <TransitionButton to="" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup" />
                        </div>
                    </li>
                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
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
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                </p>
                                <TransitionButton to="" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup" />
                        </div>
                    </li>
                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
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
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                </p>
                                <TransitionButton to="" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup" />
                        </div>
                    </li>
                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
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
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                </p>
                                <TransitionButton to="" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup" />
                        </div>
                    </li>
                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
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
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                </p>
                                <TransitionButton to="" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup" />
                        </div>
                    </li>
                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
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
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                </p>
                                <TransitionButton to="" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup" />
                        </div>
                    </li>
                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</h2>
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
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                </p>
                                <TransitionButton to="" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup" />
                        </div>
                    </li>
                </ul>
                <span className="copy-right">©juanfelenis 2025</span>
            </section>
        </>
    );
};

export default Work;