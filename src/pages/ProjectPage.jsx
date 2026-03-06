// src/pages/ProjectPage.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomImageSlider from "../components/CustomImageSlider";
import CustomVideoPlayer from "../components/CustomVideoPlayer";
import projectsData from "../../data/projectsData";

function ProjectPage({ projectPageRef, isDarkMode }) {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find(p => p.id === projectId);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });

        if (!project) {
            navigate("/404");
            return;
        }

        const prevTitle = document.title;
        document.title = `${project.title} — Juanfelenis Portfolio`;

        return () => { document.title = prevTitle; };
    }, [projectId, project, navigate]);

    if (!project) {
        return (
            <div className="loading-container">
                <p>Project not found. Redirecting...</p>
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
				<h1><strong>{project.title}</strong></h1>

				{project.content.map((item, index) => {
					if (item.type === "image") {
						return (
							<CustomImageSlider
								key={index}
								images={item.src}
									projectTitle={project.title}
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
				<span className="copy-right">©juanfelenis 2025</span>
			</article>
        </main>
    );
}

export default ProjectPage;
