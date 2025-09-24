import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomImageSlider from "../components/CustomImageSlider";
import CustomVideoPlayer from "../components/CustomVideoPlayer";
import projectsData from "../../data/projectsData";

function ProjectPage({ projectPageRef }) {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find(p => p.id === projectId);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        // Este efecto revisa si el proyecto existe; si no, navega a una página 404
        if (!project) {
            navigate("/404");
        }
    }, [projectId, project, navigate]);

    if (!project) {
        // Muestra un mensaje de carga o de "no encontrado" mientras redirige
        return <div className="loading-container">
            <p>Project not found. Redirecting...</p>
        </div>;
    }

    return (
        <div className="main-content">
            <section id={project.id} className={`section ${project.sectionClass} project-info`} ref={projectPageRef}>
                <h2>{project.title}</h2>
                {project.content.map((item, index) => {
                    switch (item.type) {
                        case "image":
                            return <CustomImageSlider key={index} images={item.src} />;
                        case "paragraph":
                            return <p key={index}>{item.text}</p>;
                        case "button":
                            return (
                                <a key={index} href={item.url} className="button">
                                    {item.text}
                                </a>
                            );
                        case "video":
                            return <CustomVideoPlayer key={index} video={item.video} poster={item.poster} />;
                        default:
                            return null;
                    }
                })}
                <span className="copy-right">©juanfelenis 2025</span>
            </section>
        </div>
    );
}

export default ProjectPage;