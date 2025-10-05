import React, { useState, useCallback, useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { useAssetsLoader } from "../hooks/useAssetsLoader";
import Loader from "../components/Loader";
import { getIcon } from '../utils/assetsUtils.js';

function Home({ sectionRefs, isDarkMode, onHomeReady }) {
	const [collectedRefs, setCollectedRefs] = useState([]);
	const mainLogoRef = useRef(null);
	const arrowDecoRef = useRef(null);

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
		timeout: 10000,
	});

	useEffect(() => {
		if(typeof onHomeReady === "function")
			onHomeReady(isReady);
	}, [isReady, onHomeReady]);

	useEffect(() => {
		setCollectedRefs((prev) => {
			const newRefs = [mainLogoRef.current, arrowDecoRef.current].filter(
				(ref) => ref && !prev.includes(ref)
			);

			if(newRefs.length > 0) return [...prev, ...newRefs];
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
						<img className="main-logo" src={ getIcon("logo-small", isDarkMode) } ref={ mainLogoRef } />
						<img className="hr-arrow" src={ getIcon("arrow-deco", isDarkMode) } ref={ arrowDecoRef } />
						<div className="hr"></div>
						<h1>
							Software Engineer
							<br />
							Web Developer
							<br />
							UI & UX Designer
						</h1>
						<div className="buttons-container">
							<Link to="/contact" className="button highlight">
								Find Me
							</Link>
							<Link to="/about" className="button">
								Know Me
							</Link>
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
						<p>Here are some of the projects I have worked on</p>
						<p>
							Just touch or put your mouse on the cards to turn them and go see
							the GitHub repository of the project
						</p>

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

						<Link to="/work" className="button work">
							Show all projects
						</Link>
						<div className="section-changer section-changer-light abilities">
							<span>Not finished yet :)</span>
							<div></div>
						</div>
					</section>

					<section
						id="abilities"
						className="section light-section hidden"
						ref={sectionRefs.abilitiesSectionRef}
					>
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
						<p>Do not forget my name!</p>
						<div className="main-logo"></div>
						<p>I am Juan Fernando and Im here to bring your ideas to reality</p>
						<div className="buttons-container light-color"></div>
						<Link to="/contact" className="button highlight">
							Find Me
						</Link>
						<div className="section-changer section-changer-light home">
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
