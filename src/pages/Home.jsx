import React, { useState, useCallback, useEffect, useRef, use } from "react";
import ProjectCard from "../components/ProjectCard";
import TransitionButton from "../components/TransitionButton";
import { Link } from "react-router-dom";
import { useAssetsLoader } from "../hooks/useAssetsLoader";
import Loader from "../components/Loader";
import { getIcon } from '../utils/assetsUtils.js';

function Home({ sectionRefs, isDarkMode, onHomeReady }) {
	const [collectedRefs, setCollectedRefs] = useState([]);
	const mainLogoRef = useRef(null);
	const arrowDecoRef = useRef(null);

	const [rotation, setRotation] = useState(0);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleLogoRotation = () => {
			const currentScrollY = window.scrollY;
			const direction = currentScrollY > lastScrollY ? 1 : -1;
			const rotationSpeed = 4;

			setRotation(prev => prev + direction * rotationSpeed);
			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleLogoRotation);

		return () => { window.removeEventListener('scroll', handleLogoRotation) };
	}, [lastScrollY]);

	const handleRefsReady = useCallback((ref) => {
		setCollectedRefs((prev) => {
			if (!prev.includes(ref)) {
				return [...prev, ref];
			}
			return prev;
		});
	}, []);

	const { isReady } = useAssetsLoader({
		refsArray: collectedRefs,
		timeout: 3000,
	});

	useEffect(() => {
		if (typeof onHomeReady === "function")
			onHomeReady(isReady);
	}, [isReady, onHomeReady]);

	useEffect(() => {
		setCollectedRefs((prev) => {
			const newRefs = [mainLogoRef.current, arrowDecoRef.current].filter(
				(ref) => ref && !prev.includes(ref)
			);

			if (newRefs.length > 0) return [...prev, ...newRefs];
			return prev;
		});
	}, [mainLogoRef.current, arrowDecoRef.current]);

	if (!isReady) return <Loader />;

	return (
		<>
			{isReady && (
				<>
					<section
						id="home"
						className="section light-section hidden"
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
						className="section dark-section hidden"
						ref={sectionRefs.projectsSectionRef}
					>
						<h2>Projects</h2>
						<p>
							A few of my favorite builds. I picked three snapshots that show how I design, code and ship.
							Click or tap a card to flip it and go see the GitHub repo or a live demo.
						</p>

						<div className="project-cards-container">
							<ProjectCard
								onRefsReady={handleRefsReady}
								frontImage="dronesim-assets/drones-project.png"
								repoURL="https://github.com/Lenis-jf/Drone-Project"
								path="/dronesim"
								projectTitle="Drones Simulation"
								tools="Java, Swing"
								isDarkMode={isDarkMode}
							/>

							<ProjectCard
								onRefsReady={handleRefsReady}
								frontImage="cultural-fitness-assets/cultural-fitness-img-1.webp"
								repoURL="https://github.com/Lenis-jf/Cultural-Fitness"
								path="/cultural-fitness"
								projectTitle="Cultural Fitness"
								tools="JavaScript, HTML, SCSS"
								isDarkMode={isDarkMode}
							/>

							<ProjectCard
								onRefsReady={handleRefsReady}
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
						className="section light-section hidden"
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
						className="section dark-section hidden"
						ref={sectionRefs.lastPartSectionRef}
					>
						<h3>Do not forget my name!</h3>
						<div className="main-logo-banner-container">
							<img className="main-logo" src={getIcon("logo", isDarkMode)} ref={mainLogoRef} />
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
			)}
		</>
	);
}

export default Home;
