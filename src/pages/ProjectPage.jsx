// src/pages/ProjectPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CustomImageSlider from "../components/CustomImageSlider";
import CustomVideoPlayer from "../components/CustomVideoPlayer";
import projectsData from "../../data/projectsData";
import { getLocalizedProjectData } from "../i18n/projectTranslations";

function ProjectPage({ projectPageRef, isDarkMode }) {
	const { t, i18n } = useTranslation();
	const language = (i18n.resolvedLanguage || "en").slice(0, 2);
	const { projectId } = useParams();
	const navigate = useNavigate();

	const project = projectsData.find(p => p.id === projectId);
	const localizedProject = project ? getLocalizedProjectData(project, language) : null;

	const [isMobile, setIsMobile] = useState(
		window.matchMedia("(max-width: 767px)").matches
	);

	const shouldSplitTitle = project.id === "edgeml-football" || isMobile;

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 767px)");

		const handleResize = (e) => {
			setIsMobile(e.matches);
		};

		mediaQuery.addEventListener("change", handleResize);

		return () => {
			mediaQuery.removeEventListener("change", handleResize);
		};
	}, []);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });

		if (!project) {
			navigate("/404");
			return;
		}

		const prevTitle = document.title;
		document.title = `${localizedProject?.title || project?.title || ""} — ${t("projectPage.titleSuffix")}`;

		return () => { document.title = prevTitle; };
	}, [projectId, project, localizedProject, navigate, t]);

	if (!project) {
		return (
			<div className="loading-container">
				<p>{t("projectPage.notFound")}</p>
			</div>
		);
	}

	return (
		<main id="main-content" className="main-content">
			<article
				id={project.id}
				className={`section ${project.sectionClass} project-info ${isDarkMode ? "dark-theme" : ""}`}
				ref={projectPageRef}
			>
				{/* <h1><strong>{localizedProject?.title || project.title}</strong></h1> */}

				<h1>
					<strong>
						{
							shouldSplitTitle ? (
								<>
									{localizedProject.title.split("—")[0]}
									<br />
									{localizedProject.title.split("—")[1]}
								</>
							) : localizedProject.title
						}
					</strong>
				</h1>

				{localizedProject.content.map((item, index) => {
					if (item.type === "image") {
						return (
							<CustomImageSlider
								key={index}
								images={item.src}
								projectTitle={project.title}
								projectId={project.id}
							/>
						);
					}

					if (item.type === "video") {
						return (
							<CustomVideoPlayer
								key={index}
								video={item.video}
								poster={item.poster}
								projectTitle={project.title}
							/>
						);
					}

					if (item.type === "paragraph") {
						return <p key={index}>{item.text}</p>;
					}

					if (item.type === "button") {
						return (
							<a key={index} href={item.url} className="button">
								{item.text}
							</a>
						);
					}

					return null;
				})}
				<span className="copy-right">©juanfelenis 2026</span>
			</article>
		</main>
	);
}

export default ProjectPage;
