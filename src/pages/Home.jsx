import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import TransitionButton from "../components/TransitionButton";
import { getIcon } from '../utils/assetsUtils.js';
import Iridescence from "../components/Iridescence";

const SKILL_ICON_MAP = {
	"Python": "python",
	"Java": "java",
	"JavaScript": "js",
	"C": "c",
	"C++": "cpp",
	"SQL": "sql",
	"MIPS": "mips",

	"React": "react",
	"Vite": "vite",
	"HTML": "html",
	"CSS": "css",
	"SCSS": "scss",

	"PyTorch": "pytorch",
	"OpenCV": "opencv",
	"scikit-learn": "sklearn",
	"NumPy": "numpy",
	"Pandas": "pandas",

	"Selenium": "selenium",
	"Web APIs": "api",
	
	"Git": "git",
	"GitHub": "github",
	"Figma": "figma",
	"VS Code": "vscode"
};

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

		return () => { window.removeEventListener('scroll', handleLogoRotation); };
	}, []);

	const getSafeObject = (key) => {
		const raw = t(key, { returnObjects: true });
		return raw && typeof raw === "object" ? raw : {};
	};

	const skillsCategories = getSafeObject("home.skillsCategories");
	const skillsData = getSafeObject("home.skillsData");
	const whatIEnjoyItems = getSafeObject("home.whatIEnjoy.items");
	const whatMattersItems = getSafeObject("home.whatMatters.items");

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
					<div className="abilities-wrapper">
						{/* 1. Technologies & Tools */}
						<div className="skills-block tech-tools-block">
							<h2>{t("home.skillsTitle")}</h2>
							<p className="skills-section-subtitle">{t("home.technologiesSubtitle")}</p>

							<div className="tech-categories-grid">
								{Object.keys(skillsCategories).map((categoryKey) => (
									<div key={categoryKey} className="tech-category-card">
										<h3>{skillsCategories[categoryKey]}</h3>
										<div className="tech-badges-container" role="list" aria-label={skillsCategories[categoryKey]}>
											{skillsData[categoryKey]?.map((skill) => {
												const iconClass = SKILL_ICON_MAP[skill];
												return (
													<div
														key={skill}
														className={`tech-badge ${iconClass ? "has-icon" : "text-only"}`}
														role="listitem"
													>
														{iconClass && <span className={`icon ${iconClass}`} aria-hidden="true"></span>}
														<span className="tech-badge-name">{skill}</span>
													</div>
												);
											})}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* 2. What I enjoy working on */}
						<div className="skills-block what-i-enjoy-block">
							<h2>{t("home.whatIEnjoy.title")}</h2>
							<p className="skills-section-subtitle">{t("home.whatIEnjoy.description")}</p>
							<div className="concept-cards-grid enjoy-grid">
								{Object.entries(whatIEnjoyItems).map(([key, item]) => (
									<div key={key} className="concept-card enjoy-card">
										<div className="card-accent-pill" aria-hidden="true"></div>
										<h3>{item.title}</h3>
										<p>{item.description}</p>
									</div>
								))}
							</div>
						</div>

						{/* 3. What matters to me */}
						<div className="skills-block what-matters-block">
							<h2>{t("home.whatMatters.title")}</h2>
							<div className="concept-cards-grid matters-grid">
								{Object.entries(whatMattersItems).map(([key, item]) => (
									<div key={key} className="concept-card matters-card">
										<div className="card-accent-pill" aria-hidden="true"></div>
										<h3>{item.title}</h3>
										<p>{item.description}</p>
									</div>
								))}
							</div>
						</div>

						{/* 4. More than code (Manifiesto directo sobre el lienzo sin tarjeta) */}
						<div className="skills-block more-than-code-block">
							<div className="more-than-code-content">
								<div className="manifesto-deco-line" aria-hidden="true"></div>
								<h2>{t("home.moreThanCode.title")}</h2>
								<p>{t("home.moreThanCode.description")}</p>
							</div>
						</div>
					</div>

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
					<span className="copy-right">©juanfelenis 2026</span>
				</section>
			</>
		</main>
	);
}

export default Home;