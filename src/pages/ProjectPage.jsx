import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomImageSlider from "../components/CustomImageSlider";
import CustomVideoPlayer from "../components/CustomVideoPlayer";
import projectsData from "../../data/projectsData";
import { useAssetsLoader } from "../hooks/useAssetsLoader";
import Loader from "../components/Loader";

function ProjectPage({ projectPageRef, headerRef }) {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find(p => p.id === projectId);

    const collectedRefNodes = useRef([]);
    const [collectedForThisProject, setCollectedForThisProject] = useState([]);
    const [childrenToReportCount, setChildrenToReportCount] = useState(0);
    const reportedCountRef = useRef(0);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        if (!project) {
            navigate("/404");
        }

        collectedRefNodes.current = [];
        setCollectedForThisProject([]);
        reportedCountRef.current = 0;

        const count = project
            ? project.content.filter((it) => it.type === "image" || it.type === "video").length
            : 0;
        setChildrenToReportCount(count);

        console.log("Children to report: ", childrenToReportCount);

    }, [projectId, project, navigate]);

    // callback que pasan los hijos para "reportar" sus nodos DOM
    function handleChildReport(nodesArray = []) {
        // nodesArray = array de nodos DOM que el hijo pasó (filtrados booleanos)
        nodesArray.forEach((el) => {
            if (el) collectedRefNodes.current.push(el);
        });

        reportedCountRef.current += 1;

        console.log("Reported count: ", reportedCountRef);

        // Si todos los hijos reportaron, guardamos el array final (filtrado y deduplicado)
        if (reportedCountRef.current >= childrenToReportCount) {
            // filtrar falsos/undefined y deduplicar por referencia
            const unique = Array.from(
                new Set(collectedRefNodes.current.filter(Boolean))
            );
            setCollectedForThisProject(unique);
        }
    }

    // useAssetsLoader espera nodos DOM (no refs react), por eso pasamos `collectedForThisProject`
    const { isReady } = useAssetsLoader({
        refsArray: collectedForThisProject,
        timeout: 10000,
    });

    if(!isReady && headerRef.current)
        headerRef.current.style.display = "none";
    else if(isReady && headerRef.current)
        headerRef.current.style.display = "flex"

    if (!project) {
        return <div className="loading-container">
            <p>Project not found. Redirecting...</p>
        </div>;
    }

    return (
        <div className="main-content">
            {!isReady && <Loader />}

            {isReady && (
                <section
                    id={project.id}
                    className={`section ${project.sectionClass} project-info`}
                    ref={projectPageRef}
                >
                    <h2>{project.title}</h2>

                    {project.content.map((item, index) => {
                        if (item.type === "image") {
                            // item.src es array de strings
                            return (
                                <CustomImageSlider
                                    key={index}
                                    images={item.src}
                                    // el hijo llamará onRefsReady(imagesDomNodes)
                                    onRefsReady={(nodes) => handleChildReport(nodes)}
                                />
                            );
                        }

                        if (item.type === "video") {
                            return (
                                <CustomVideoPlayer
                                    key={index}
                                    video={item.video}
                                    poster={item.poster}
                                    onRefsReady={(nodes) => handleChildReport(nodes)}
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

                        // default
                        return null;
                    })}

                    <span className="copy-right">©juanfelenis 2025</span>
                </section>
            )}
        </div>
    );
}

export default ProjectPage;