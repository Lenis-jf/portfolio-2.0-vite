// src/pages/Home.jsx

import React, { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Home({
	homeSectionRef,
	projectsSectionRef,
	abilitiesSectionRef,
	lastPartSectionRef,
	isDarkMode
}) {

	return (
		<div>
			<section id="home" className="section light-section hidden" ref={homeSectionRef}>
				<div className="main-logo"></div>
				<div className="hr-arrow"></div>
				<div className="hr"></div>
				<h1>Software Engineer<br />Web Developer<br />UI & UX Designer</h1>
				<div className="buttons-container">
					<Link to="/contact" className="button">Find Me</Link>
					<Link to="#" className="button">Know Me</Link>
				</div>
				<div className="section-changer section-changer-dark projects">
					<span>See more</span>
					<div></div>
				</div>
			</section>
			<section id="projects" className="section dark-section hidden" ref={projectsSectionRef}>
				<p>Here are some of the projects I have worked on</p>
				<p>Just touch or put your mouse on the cards to turn them and go see the GitHub repository of the project</p>
				<ProjectCard
					frontImage="dronesim-assets/drones-project.png"
					repoURL="https://github.com/Lenis-jf/Drone-Project"
					path="/dronesim"
					projectTitle="Drones Simulation"
					tools="Java, Swing"
					isDarkMode={isDarkMode}
				/>
				<ProjectCard
					frontImage="cultural-fitness-assets/cultural-fitness-project.png"
					repoURL="https://github.com/Lenis-jf/Cultural-Fitness"
					path="/cultural-fitness"
					projectTitle="Cultural Fitness"
					tools="JavaScript, HTML, SCSS"
					isDarkMode={isDarkMode}
				/>
				<ProjectCard
					frontImage="leonti-assets/leonti-project.png"
					repoURL="https://github.com/Lenis-jf/leonti-aesthetic"
					path="/leonti"
					projectTitle="Leonti Aesthetic"
					tools="React in Vite, SCSS"
					isDarkMode={isDarkMode}
				/>
				<div className="section-changer section-changer-light abilities">
					<span>Not finished yet :)</span>
					<div></div>
				</div>
			</section>
			<section id="abilities" className="section light-section hidden" ref={abilitiesSectionRef}>
				<h2>Development Abilities</h2>
				<p>These are the programming languages I master until now</p>
				<div className="icons-container">
					<div className="icon js"></div>
					<div className="icon react"></div>
					<div className="icon r"></div>
					<div className="icon c"></div>
					<div className="icon python"></div>
					<div className="icon cpp"></div>
					<div className="icon java"></div>
				</div>
				<p>Design and styling tools I dominate</p>
				<div className="icons-container">
					<div className="icon scss"></div>
					<div className="icon css"></div>
					<div className="icon html"></div>
					<div className="icon figma"></div>
				</div>
				<h5>Strengths:</h5>
				<p>The programming languages I have worked most with are Java, JavaScript and C++. In addition to the programming languages I mentioned before, I have also worked with MIPS (assembler) and HSQLDB</p>
				<div className="section-changer section-changer-dark last-part">
					<span>Do not forget it!</span>
					<div></div>
				</div>
			</section>
			<section id="last-part" className="section dark-section hidden" ref={lastPartSectionRef}>
				<p>Do not forget my name!</p>
				<div className="main-logo"></div>
				<p>I am Juan Fernando and Im here to bring your ideas to reality</p>
				<div className="buttons-container light-color"></div>
				<Link to="/contact" className="button">Find Me</Link>
				<div className="section-changer section-changer-light home">
					<div></div>
					<span>Go back to start</span>
				</div>
				<span className="copy-right">©juanfelenis 2025</span>
			</section>
		</div>
	);
}

export default Home;