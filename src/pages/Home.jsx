import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import TransitionButton from "../components/TransitionButton";
import { getIcon } from '../utils/assetsUtils.js';
import Iridescence from "../components/Iridescence";


function Home({ sectionRefs, isDarkMode }) {
	const { t } = useTranslation();
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
		<main id="main-content">
				<>
					<section
						id="home"
						className="section light-section"
						ref={sectionRefs.homeSectionRef}
					>
						<div className="home-iridescence-bg" aria-hidden="true">
							<Iridescence
								color={[0.11764705882352941, 0.5333333333333333, 0.8980392156862745]}
								mouseReact={false}
								amplitude={0.1}
								speed={1.5}
							/>
						</div>
						<div className="main-welcome-content-container">
							<div className="main-logo-banner-container">
								<img className="main-logo" src={getIcon("logo", isDarkMode)} alt="Juanfelenis developer logo" ref={mainLogoRef} />
								<div className="banner-container">
									<h2>Juanfelenis</h2>
									<h2>Developer</h2>
								</div>
							</div>
							<h1>
								{t("home.roleLines.0")}
								<br />
								{t("home.roleLines.1")}
								<br />
								{t("home.roleLines.2")}
							</h1>
						</div>
						<div className="buttons-container">
							<TransitionButton to="/contact" label={t("home.ctaContact")} extraClass="home" />
							<TransitionButton to="/about" label={t("home.ctaAbout")} color="#1d1d1f" extraClass="home" />
						</div>
						<div className="section-changer projects">
							<span>{t("home.seeMore")}</span>
							<div></div>
						</div>
					</section>

					<section
						id="projects"
						className="section dark-section"
						ref={sectionRefs.projectsSectionRef}
					>
						<h2>{t("home.projectsTitle")}</h2>
						<p>
							{t("home.projectsDescription")}
						</p>

						<div className="project-cards-container">
							<ProjectCard
								frontImage="leonti-assets/leonti-project.png"
								repoURL="https://github.com/Lenis-jf/leonti-aesthetic"
								path="/leonti"
								projectTitle="Leonti Kosmetikstudio"
								tools="React, SCSS"
								isDarkMode={isDarkMode}
							/>

							<ProjectCard
								frontImage="edgeml-football-assets/edgeml-img-1.webp"
								repoURL="https://github.com/Lenis-jf/EdgeML-American-Football"
								path="/edgeml-football"
								projectTitle="EdgeML Meets AF"
								tools="Python, FastAPI, React"
								isDarkMode={isDarkMode}
							/>

							<ProjectCard
								frontImage="roomman-assets/roomman-img-4.webp"
								repoURL="https://github.com/Lenis-jf/Distributed-Systems-SS25"
								path="/roomman"
								projectTitle="roomman"
								tools="C, SunRPC"
								isDarkMode={isDarkMode}
							/>
						</div>

						<TransitionButton to="/work" label={t("home.seeAllProjects")} />
						<div className="section-changer section-changer-dark abilities">
							<span>{t("home.unfinished")}</span>
							<div></div>
						</div>
					</section>

					<section
						id="abilities"
						className="section light-section"
						ref={sectionRefs.abilitiesSectionRef}
					>
						<h2>{t("home.skillsTitle")}</h2>
						<p>{t("home.skillsSubtitleDev")}</p>
						<div className="icons-container" role="list" aria-label="Programming languages">
							<div className="icon js" role="listitem" aria-label="JavaScript"></div>
							<div className="icon react" role="listitem" aria-label="React"></div>
							<div className="icon r" role="listitem" aria-label="R"></div>
							<div className="icon c" role="listitem" aria-label="C"></div>
							<div className="icon python" role="listitem" aria-label="Python"></div>
							<div className="icon cpp" role="listitem" aria-label="C++"></div>
							<div className="icon java" role="listitem" aria-label="Java"></div>
						</div>
						<p>{t("home.skillsSubtitleDesign")}</p>
						<div className="icons-container" role="list" aria-label="Design and styling tools">
							<div className="icon scss" role="listitem" aria-label="SCSS"></div>
							<div className="icon css" role="listitem" aria-label="CSS"></div>
							<div className="icon html" role="listitem" aria-label="HTML"></div>
							<div className="icon figma" role="listitem" aria-label="Figma"></div>
						</div>
						<h3>{t("home.strengthsTitle")}</h3>
						<p>
							{t("home.strengthsDescription")}
						</p>
						<div className="section-changer section-changer-dark last-part">
							<span>{t("home.dontForget")}</span>
							<div></div>
						</div>
					</section>

					<section
						id="last-part"
						className="section dark-section"
						ref={sectionRefs.lastPartSectionRef}
					>
						<h3>{t("home.finalTitle")}</h3>
						<div className="main-logo-banner-container">
							<img className="main-logo" src={getIcon("logo", isDarkMode)} alt="Juanfelenis developer logo" />
							<div className="banner-container">
								<h2>Juanfelenis</h2>
								<h2>Developer</h2>
							</div>
						</div>
						<p>{t("home.finalDescription")}</p>
						<TransitionButton to="/contact" label={t("home.finalCta")} extraClass="last-part" />
						<div className="section-changer section-changer-dark home">
							<div></div>
							<span>{t("home.goBackStart")}</span>
						</div>
						<span className="copy-right">©juanfelenis 2025</span>
					</section>
				</>
		</main>
	);
}

export default Home;
