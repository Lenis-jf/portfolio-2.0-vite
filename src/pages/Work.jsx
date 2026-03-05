import React, { useEffect } from "react";
import TransitionButton from "../components/TransitionButton";
import { getIcon, getProjectAssetUrl } from '../utils/assetsUtils.js';

const Work = ({ workRef, isDarkMode }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });

        const prevTitle = document.title;
        document.title = "Work | Juanfelenis-dev";

        function setClosedHeights() {
            const allCards = document.querySelectorAll(".project-item");
            const allClosedHeights = [];

            allCards.forEach(li => {
                const mainInfo = li.querySelector(".main-info");
                if (mainInfo) {
                    const liStyle = window.getComputedStyle(li);
                    const paddingTop = parseFloat(liStyle.paddingTop);
                    const paddingBottom = parseFloat(liStyle.paddingBottom);
                    const mainInfoHeight = mainInfo.offsetHeight;
                    const closedHeight = mainInfoHeight + paddingTop + paddingBottom;

                    allClosedHeights.push(closedHeight);
                }
            });

            const maxClosedHeight = Math.max(...allClosedHeights);
            const maxClosedHeightPx = `${maxClosedHeight}px`;

            allCards.forEach(li => {
                li.dataset.closedHeight = maxClosedHeightPx;

                if (!li.classList.contains("open")) {
                    li.style.maxHeight = maxClosedHeightPx;
                }
            });
        }

        setClosedHeights();
        window.addEventListener('resize', setClosedHeights);

        return () => {
            document.title = prevTitle;
            window.removeEventListener('resize', setClosedHeights);
        };
    }, []);

    function openItem(e) {
        const li = e.currentTarget;
        const isOpening = !li.classList.contains("open");

        document.querySelectorAll(".project-item.open").forEach(item => {
            if (item !== li) {
                item.classList.remove("open");
                item.style.maxHeight = item.dataset.closedHeight || null;
            }
        });

        li.classList.toggle("open");

        if (isOpening) {
            const fullHeight = li.scrollHeight;
            li.style.maxHeight = `${fullHeight}px`;
        } else {
            li.style.maxHeight = li.dataset.closedHeight;
        }
    }

    return (
        <>
            <section className="section work-section light-section" ref={workRef}>
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
                                <h2>Leonti Aesthetic — Cosmetic Studio Website</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool react-tool"><strong>React</strong></div>
                                <div className="tool scss-tool"><strong>SCSS</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>
                                    Leonti Aesthetic is a modern cosmetic studio website showcasing eyelash extensions, lifting, and facial treatments. Built with React and SCSS, it delivers a smooth, elegant, and responsive user experience with subtle animations that highlight the brand’s clean and professional aesthetic.
                                </p>
                            </div>
                            <img src={getProjectAssetUrl("leonti-assets/leonti-iphone-mockup.webp")} alt="project mockup" className="mockup iphone leonti" />
                        </div>
                        <TransitionButton to="projects/leonti" label="Read more about it" />
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Live Drone Monitor — Java Swing Dashboard</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool java-tool"><strong>Java</strong></div>
                                <div className="tool swing-tool"><strong>Swing</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>
                                    Java Swing app for OOP course: threaded API fetching of live global drone telemetry (latitude, longitude, tilt, timestamps). Displays paginated, searchable tables with filtering/sorting and strong input, connection and exception handling.
                                </p>
                                <TransitionButton to="projects/dronesim" label="Read more about it" />
                            </div>
                            <img src={getProjectAssetUrl("dronesim-assets/dronesim-mac-mockup.webp")} alt="project mockup" className="mockup dronesim mac" />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Cultural Fitness — Clean Health Blog</h2>
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
                                    An informative site built with HTML, SCSS and JavaScript showcasing fitness insights, routines and third-party product picks. Designed with two collaborators to evoke health and reliability, it prioritizes readable layouts, fast loading and easy content discovery.                                </p>
                                <TransitionButton to="projects/cultural-fitness" label="Read more about it" />
                            </div>
                            <img src={getProjectAssetUrl("cultural-fitness-assets/cultural-fitness-iphone-mockup.webp")} alt="project mockup" className="mockup iphone cultural" />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Housing Data Automation for Market Research</h2>
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
                                <p>
                                    Automation tool that scrapes German property listings from an aggregator, distinguishing multi-family and single apartments. Uses concurrent browsing (up to 5 pages), exports CSV into a worker’s Excel for viability calculations, drastically reducing weeks of manual work to minutes.
                                </p>
                                <TransitionButton to="projects/scraper" label="Read more about it" />
                            </div>
                            <img alt="project mockup" src={getProjectAssetUrl("scraper-assets/scraper-mac-mockup.webp")} className="mockup scraper mac" />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Voice Maze — Multimodal HMI Project</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool react-tool"><strong>React</strong></div>
                                <div className="tool scss-tool"><strong>SCSS</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>
                                    A web-based maze game built with React for my Human–Machine Interaction class. It supports voice, keyboard, and touch controls, featuring multilingual speech recognition, real-time feedback, and procedural maze generation powered by Backtracking and BFS algorithms.
                                </p>
                                <TransitionButton to="projects/voice-maze" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup iphone voice-maze" src={getProjectAssetUrl("voice-maze-assets/voice-maze-iphone-mockup.webp")} />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Roomman: Network-Based Classroom Management System</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool c-tool"><strong>C</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>
                                    Console application developed in C to manage university auditoriums and classrooms. Implements client-server communication through sockets and RPC, with a shared and synchronized database for real-time reservations and updates.                                </p>
                                <TransitionButton to="projects/roomman" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup mac roomman" src={getProjectAssetUrl("roomman-assets/roomman-mac-mockup.webp")} />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>BatataBit — Responsive Crypto Broker Landing Page</h2>
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
                                <p>
                                    Landing page crafted during a web-development course on Platzi. Built with mobile-first and responsive design in mind for a fictional cryptocurrency broker. My early lesson in prioritising device diversity, usability and web standards.
                                </p>
                                <TransitionButton to="projects/batatabit" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup iphone batatabit" src={getProjectAssetUrl("batatabit-assets/batatabit-iphone-mockup.webp")} />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>Oceano Rosa — My First Web Design Journey</h2>
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
                                <p>
                                    Oceano Rosa was one of my first self-made websites, built entirely with HTML, CSS, and pure JavaScript. Created to showcase handmade fantasy gold jewelry, it reflects my early passion for web design, experimentation, and learning from scratch.                                </p>
                                <TransitionButton to="projects/oceano-rosa" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup mac oceano-rosa" src={getProjectAssetUrl("oceano-rosa-assets/oceano-rosa-mac-mockup.webp")} />
                        </div>
                    </li>

                    <li className="project-item closed" onClick={openItem}>
                        <div className="main-info">
                            <div className="title-icon-container">
                                <h2>SCSS Revival — Web Design Practice</h2>
                                <img className="icon-dropdown" src={getIcon("keyboard-arrow-down", isDarkMode)} alt="dropdown icon" />
                            </div>
                            <div className="tools">
                                <div className="tool html-tool"><strong>HTML</strong></div>
                                <div className="tool scss-tool"><strong>SCSS</strong></div>
                            </div>
                        </div>
                        <div className="text-mockup-container">
                            <div className="text-button-container">
                                <p>
                                    A creative comeback project built with HTML and SCSS to refresh my front-end skills after a long break. Focused on styling precision, responsive layout, and a full-time job of visual feedback that web development constantly provides. Content details remain private.
                                </p>
                                <TransitionButton to="projects/tyc" label="Read more about it" />
                            </div>
                            <img alt="project mockup" className="mockup iphone tyc" src={getProjectAssetUrl("tyc-assets/tyc-iphone-mockup.webp")} />
                        </div>
                    </li>
                </ul>
                <span className="copy-right">©juanfelenis 2025</span>
            </section>
        </>
    );
};

export default Work;