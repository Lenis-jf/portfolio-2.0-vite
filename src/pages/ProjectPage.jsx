// src/pages/ProjectPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomImageSlider from "../components/CustomImageSlider";
import CustomVideoPlayer from "../components/CustomVideoPlayer";
import projectsData from "../../data/projectsData";
import { useAssetsLoader } from "../hooks/useAssetsLoader";
import Loader from "../components/Loader";

function ProjectPage({ projectPageRef, headerRef, isDarkMode, onProjectPageReady }) {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find(p => p.id === projectId);

    const collectedRefNodes = useRef([]);
    const [collectedForThisProject, setCollectedForThisProject] = useState([]);
    const [childrenToReportCount, setChildrenToReportCount] = useState(0);
    // ref espejo del contador para evitar race conditions
    const childrenToReportCountRef = useRef(0);

    const reportedCountRef = useRef(0);

    // flag para notificar al padre solo una vez
    const notifiedRef = useRef(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });

        if (!project) {
            navigate("/404");
            return;
        }

        // reset estado interno cuando cambia el proyecto
        collectedRefNodes.current = [];
        setCollectedForThisProject([]);
        reportedCountRef.current = 0;
        notifiedRef.current = false;

        const count = project.content
            ? project.content.filter(it => it.type === "image" || it.type === "video").length
            : 0;

        setChildrenToReportCount(count);
        childrenToReportCountRef.current = count; // espejo inmediato
        console.log("Children to report (count):", count);

    }, [projectId, project, navigate]);

    // callback que pasan los hijos para "reportar" sus nodos DOM
    function handleChildReport(nodesArray = []) {
        // nodesArray = array de nodos DOM que el hijo pasó (filtrados booleanos)
        nodesArray.forEach((el) => {
            if (el) collectedRefNodes.current.push(el);
        });

        reportedCountRef.current += 1;
        console.log("Reported count (current):", reportedCountRef.current);

        // Si todos los hijos reportaron, guardamos el array final (filtrado y deduplicado)
        // usamos childrenToReportCountRef para evitar leer state stale
        if (reportedCountRef.current >= childrenToReportCountRef.current) {
            const unique = Array.from(new Set(collectedRefNodes.current.filter(Boolean)));
            setCollectedForThisProject(unique);
        }
    }

    // useAssetsLoader espera nodos DOM (no refs react), por eso pasamos `collectedForThisProject`
    const { isReady } = useAssetsLoader({
        refsArray: collectedForThisProject,
        timeout: 10000,
    });

    // --- manejar header display y notificación al padre desde un useEffect ---
    useEffect(() => {
        // Si no está listo, ocultamos header y salimos (no ejecutamos notificación)
        if (!isReady) {
            if (headerRef?.current) {
                try { headerRef.current.style.display = "none"; } catch (e) { /* safe */ }
            }
            return;
        }

        // isReady === true: mostramos header
        if (headerRef?.current) {
            try { headerRef.current.style.display = "flex"; } catch (e) { /* safe */ }
        }

        // Notificamos al padre UNA sola vez
        if (typeof onProjectPageReady === "function" && !notifiedRef.current) {
            try {
                onProjectPageReady(true);
            } catch (e) {
                console.warn("onProjectPageReady error", e);
            }
            notifiedRef.current = true;
        }

        // cleanup: al desmontar avisamos que ya no está listo (opcional)
        return () => {
            if (typeof onProjectPageReady === "function") {
                try {
                    onProjectPageReady(false);
                } catch (e) {
                    console.warn("onProjectPageReady cleanup error", e);
                }
            }
        };
    }, [isReady, headerRef, onProjectPageReady]);

    if (!project) {
        return (
            <div className="loading-container">
                <p>Project not found. Redirecting...</p>
            </div>
        );
    }

    return (
        <div className="main-content">
            {!isReady && <Loader />}

            {isReady && (
                <section
                    id={project.id}
                    className={`section ${project.sectionClass} project-info ${isDarkMode ? "dark-theme" : ""} hidden`}
                    ref={projectPageRef}
                >
                    <h2>{project.title}</h2>

                    {project.content.map((item, index) => {
                        if (item.type === "image") {
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

                        return null;
                    })}
                    <span className="copy-right">©juanfelenis 2025</span>
                </section>
            )}
        </div>
    );
}

export default ProjectPage;
