import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import TransitionButton from "../components/TransitionButton";
import { getProjectAssetUrl } from "../utils/assetsUtils.js";

const PROJECTS_DATA = [
	{
		key: "leonti",
		path: "/projects/leonti",
		mockup: "leonti-assets/leonti-iphone-mockup.webp",
		mockupClass: "leonti iphone",
		tools: [
			{ name: "React", classModifier: "react-tool" },
			{ name: "SCSS", classModifier: "scss-tool" }
		]
	},
	{
		key: "edgemlFootball",
		path: "/projects/edgeml-football",
		mockup: "edgeml-football-assets/edgeml-mac-mockup.webp",
		mockupClass: "edgeml mac",
		tools: [
			{ name: "Python", classModifier: "py-tool" },
			{ name: "React", classModifier: "react-tool" },
			{ name: "FastAPI", classModifier: "flet-tool" }
		]
	},
	{
		key: "roomman",
		path: "/projects/roomman",
		mockup: "roomman-assets/roomman-mac-mockup.webp",
		mockupClass: "roomman mac",
		tools: [
			{ name: "C", classModifier: "c-tool" }
		]
	},
	{
		key: "dronesim",
		path: "/projects/dronesim",
		mockup: "dronesim-assets/dronesim-mac-mockup.webp",
		mockupClass: "dronesim mac",
		tools: [
			{ name: "Java", classModifier: "java-tool" },
			{ name: "Swing", classModifier: "swing-tool" }
		]
	},
	{
		key: "voiceMaze",
		path: "/projects/voice-maze",
		mockup: "voice-maze-assets/voice-maze-iphone-mockup.webp",
		mockupClass: "voice-maze iphone",
		tools: [
			{ name: "React", classModifier: "react-tool" },
			{ name: "SCSS", classModifier: "scss-tool" }
		]
	},
	{
		key: "scraper",
		path: "/projects/scraper",
		mockup: "scraper-assets/scraper-mac-mockup.webp",
		mockupClass: "scraper mac",
		tools: [
			{ name: "Python", classModifier: "py-tool" },
			{ name: "Flet", classModifier: "flet-tool" },
			{ name: "Selenium", classModifier: "selenium-tool" }
		]
	},
	{
		key: "culturalFitness",
		path: "/projects/cultural-fitness",
		mockup: "cultural-fitness-assets/cultural-fitness-iphone-mockup.webp",
		mockupClass: "cultural iphone",
		tools: [
			{ name: "JavaScript", classModifier: "js-tool" },
			{ name: "SCSS", classModifier: "scss-tool" },
			{ name: "HTML", classModifier: "html-tool" }
		]
	},
	{
		key: "tyc",
		path: "/projects/tyc",
		mockup: "tyc-assets/tyc-iphone-mockup.webp",
		mockupClass: "tyc iphone",
		tools: [
			{ name: "HTML", classModifier: "html-tool" },
			{ name: "SCSS", classModifier: "scss-tool" }
		]
	},
	{
		key: "oceanoRosa",
		path: "/projects/oceano-rosa",
		mockup: "oceano-rosa-assets/oceano-rosa-mac-mockup.webp",
		mockupClass: "oceano-rosa mac",
		tools: [
			{ name: "JavaScript", classModifier: "js-tool" },
			{ name: "CSS", classModifier: "css-tool" },
			{ name: "HTML", classModifier: "html-tool" }
		]
	},
	{
		key: "batatabit",
		path: "/projects/batatabit",
		mockup: "batatabit-assets/batatabit-iphone-mockup.webp",
		mockupClass: "batatabit iphone",
		tools: [
			{ name: "JavaScript", classModifier: "js-tool" },
			{ name: "CSS", classModifier: "css-tool" },
			{ name: "HTML", classModifier: "html-tool" }
		]
	}
];

function Work({ workRef }) {
	const { t } = useTranslation();
	const [openProjectKey, setOpenProjectKey] = useState(null);
	const listRef = useRef(null);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
		const prevTitle = document.title;
		document.title = t("work.documentTitle");
		return () => {
			document.title = prevTitle;
		};
	}, [t]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (listRef.current && !listRef.current.contains(event.target)) {
				setOpenProjectKey(null);
			}
		};

		document.addEventListener("pointerdown", handleClickOutside);
		return () => {
			document.removeEventListener("pointerdown", handleClickOutside);
		};
	}, []);

	const toggleProject = (key) => {
		setOpenProjectKey((prevKey) => (prevKey === key ? null : key));
	};

	const handleDrawerClick = (e, key) => {
		if (e.target.closest("button") || e.target.closest("a")) {
			return;
		}
		toggleProject(key);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Escape") {
			setOpenProjectKey(null);
		}
	};

	return (
		<main id="main-content" onKeyDown={handleKeyDown}>
			<section className="section work-section" ref={workRef}>
				<h1>{t("work.heading")}</h1>
				<p className="work-intro-text">{t("work.intro")}</p>

				<ul className="projects-list" ref={listRef} role="list" aria-label={t("work.heading")}>
					{PROJECTS_DATA.map((project) => {
						const isOpen = openProjectKey === project.key;
						const title = t(`work.cards.${project.key}.title`);
						const description = t(`work.cards.${project.key}.description`);
						const drawerId = `project-drawer-${project.key}`;

						return (
							<li
								key={project.key}
								className={`project-item ${isOpen ? "open" : "closed"}`}
								role="listitem"
							>
								<button
									type="button"
									className="card-header-trigger"
									onClick={() => toggleProject(project.key)}
									aria-expanded={isOpen}
									aria-controls={drawerId}
									aria-label={`${title} - ${isOpen ? "Collapse" : "Expand"}`}
								>
									<div className="main-info">
										<div className="title-icon-container">
											<h2>{title}</h2>
											<span className="chevron-indicator" aria-hidden="true">
												<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
													<polyline points="9 18 15 12 9 6" />
												</svg>
											</span>
										</div>

										<div className="tools" role="list" aria-label="Technologies used">
											{project.tools.map((tool) => (
												<div
													key={tool.name}
													className={`tool ${tool.classModifier}`}
													role="listitem"
												>
													<strong>{tool.name}</strong>
												</div>
											))}
										</div>
									</div>
								</button>

								<div
									id={drawerId}
									className="card-content-drawer"
									aria-hidden={!isOpen}
									onClick={(e) => handleDrawerClick(e, project.key)}
								>
									<div className="drawer-inner">
										<div className="text-mockup-container">
											<div className="text-button-container">
												<p>{description}</p>
												<TransitionButton
													to={project.path}
													label={t("work.readMore")}
													extraClass="work"
												/>
											</div>

											<img
												className={`mockup ${project.mockupClass}`}
												src={getProjectAssetUrl(project.mockup)}
												alt={`${title} mockup preview`}
												loading="lazy"
											/>
										</div>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
				<span className="copy-right">©juanfelenis 2026</span>
			</section>
		</main>
	);
}

export default Work;