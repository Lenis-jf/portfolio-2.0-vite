import React, { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import TransitionButton from "../components/TransitionButton";
import { getIcon } from '../utils/assetsUtils.js';


function Home({ sectionRefs, isDarkMode }) {
	const mainLogoRef = useRef(null);
	const rotationRef = useRef(0);
	const lastScrollYRef = useRef(0);

	useEffect(() => {
		const handleLogoRotation = () => {
			const currentScrollY = window.scrollY;
			const direction = currentScrollY > lastScrollYRef.current ? 1 : -1;
			const rotationSpeed = 4;
			rotationRef.current = rotationRef.current + direction * rotationSpeed;
			lastScrollYRef.current = currentScrollY;

			if (mainLogoRef.current) {
				mainLogoRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
			}
		};

		window.addEventListener('scroll', handleLogoRotation);

		return () => { window.removeEventListener('scroll', handleLogoRotation) };
	}, []);

	return (
		<>
				<>
					<section
						id="home"
						className="section light-section"
						ref={sectionRefs.homeSectionRef}
					>
						<div className="main-welcome-content-container">
							<div className="main-logo-banner-container">
								<img className="main-logo" src={getIcon("logo", isDarkMode)} ref={mainLogoRef} />
								<div className="banner-container">
									<h2>Juanfelenis</h2>
									<h2>Developer</h2>
								</div>
							</div>
							<h1>
								Software Engineer
								<br />
								Web Developer
								<br />
								UI & UX Designer
							</h1>
						</div>
						<div className="buttons-container">
							<TransitionButton to="/contact" label="Contact me" extraClass="home" />
							<TransitionButton to="/about" label="About me" color="#1d1d1f" extraClass="home" />
						</div>
						<div className="section-changer section-changer-dark projects">
							<span>See more</span>
							<div></div>
						</div>
					</section>

					<section
						id="projects"
						className="section dark-section"
						ref={sectionRefs.projectsSectionRef}
					>
						<h2>Projects</h2>
						<p>
							A few of my favorite builds. I picked three snapshots that show how I design, code and ship.
							Click or tap a card to flip it and go see the GitHub repo or a live demo.
						</p>

						<div className="project-cards-container">
							<ProjectCard
								frontImage="dronesim-assets/drones-project.png"
								repoURL="https://github.com/Lenis-jf/Drone-Project"
								path="/dronesim"
								projectTitle="Drones Simulation"
								tools="Java, Swing"
								isDarkMode={isDarkMode}
							/>

							<ProjectCard
								frontImage="cultural-fitness-assets/cultural-fitness-img-1.webp"
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
						</div>

						<TransitionButton to="/work" label="See all projects" />
						<div className="section-changer section-changer-dark abilities">
							<span>Not finished yet :)</span>
							<div></div>
						</div>
					</section>

					<section
						id="abilities"
						className="section light-section"
						ref={sectionRefs.abilitiesSectionRef}
					>
						<h2>Core Skills & Tools</h2>
						<p>technologies I work with most</p>
						<div className="icons-container">
							<div className="icon js"></div>
							<div className="icon react"></div>
							<div className="icon r"></div>
							<div className="icon c"></div>
							<div className="icon python"></div>
							<div className="icon cpp"></div>
							<div className="icon java"></div>
						</div>
						<p>Design and styling tools proficient in</p>
						<div className="icons-container">
							<div className="icon scss"></div>
							<div className="icon css"></div>
							<div className="icon html"></div>
							<div className="icon figma"></div>
						</div>
						<h3>Strengths:</h3>
						<p>
							The programming languages I have worked most with are Java,
							JavaScript and C++. In addition to the programming languages I
							mentioned before, I have also worked with MIPS (assembler) and
							HSQLDB
						</p>
						<div className="section-changer section-changer-dark last-part">
							<span>Do not forget it!</span>
							<div></div>
						</div>
					</section>

					<section
						id="last-part"
						className="section dark-section"
						ref={sectionRefs.lastPartSectionRef}
					>
						<h3>Do not forget my name!</h3>
						<div className="main-logo-banner-container">
							<img className="main-logo" src={getIcon("logo", isDarkMode)} />
							<div className="banner-container">
								<h2>Juanfelenis</h2>
								<h2>Developer</h2>
							</div>
						</div>
						<p>I am Juan Fernando and Im here to bring your ideas to reality</p>
						<TransitionButton to="/contact" label="Find me" extraClass="last-part" />
						<div className="section-changer section-changer-dark home">
							<div></div>
							<span>Go back to start</span>
						</div>
						<span className="copy-right">©juanfelenis 2025</span>
					</section>
				</>
		</>
	);
}

export default Home;
