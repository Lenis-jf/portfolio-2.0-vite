import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { getProjectAssetUrl, getGithubIconUrl } from '../utils/assetsUtils.js';
import TransitionButton from "./TransitionButton.jsx";

function ProjectCard(props) {
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  const smallCardRef = useRef(null);
  const imageRef = useRef();

  useEffect(() => {
    if (props.onRefsReady && imageRef.current) {
      props.onRefsReady(imageRef);
    }
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        // Disparar animación al desvoltear desde fuera
        if (isFlipped && smallCardRef.current) {
          const direction = "reverse";
          smallCardRef.current.style.opacity = "0";
          cardRef.current.style.setProperty("--flip-delay", "0s");

          smallCardRef.current.style.animation = "none";
          void smallCardRef.current.offsetWidth;
          smallCardRef.current.style.animation = `cardOut 0.25s ease-in 0.25s 1 ${direction} forwards`;
        }
        setIsFlipped(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [isFlipped]); // Añadir dependencia isFlipped

  const handleCardClick = (event) => {
    if (event.target.closest("a.button.card-button")) {
      event.stopPropagation();
      return;
    }

    const newIsFlipped = !isFlipped;
    setIsFlipped(newIsFlipped);

    if (smallCardRef.current) {
      const direction = newIsFlipped ? "normal" : "reverse";
      const animationDelay = newIsFlipped ? "0s" : "0.25s";
      const flipTransitionDelay = newIsFlipped ? "0.25s" : "0s";

      smallCardRef.current.style.opacity = direction === "reverse" ? "0" : "1";
      cardRef.current.style.setProperty("--flip-delay", flipTransitionDelay);

      smallCardRef.current.style.animation = "none";
      void smallCardRef.current.offsetWidth;
      smallCardRef.current.style.animation = `cardOut 0.25s ease-in ${animationDelay} 1 ${direction} forwards`;
    }
  };

  return (
    <div
      className={`project-card ${isFlipped ? "flipped" : ""}`}
      tabIndex="0"
      onClick={handleCardClick}
      role="button"
      aria-pressed={isFlipped}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick(e);
        }
      }}
      ref={cardRef}
    >
      <div className="face front">
        <img
          src={getProjectAssetUrl(props.frontImage)} alt={`${props.projectTitle} project preview`}
          ref={imageRef}
        />
      </div>
      <div className="face back">
        <img
          src={getGithubIconUrl(props.isDarkMode)}
          alt={t("projectCard.githubAlt")}
        />
        <a href={props.repoURL} className="button card-button">{t("projectCard.showRepository")}</a>
        <TransitionButton to={`/projects${props.path}`} extraClass="projectCard" label={t("projectCard.seeMore")} color="#1d1d1f" />
      </div>
      <div className="small-info-card" ref={smallCardRef}>
        <h4>{props.projectTitle}</h4>
        <h6>{t("projectCard.builtWith")}</h6>
        <p>{props.tools}</p>
      </div>
    </div>
  );
}

export default ProjectCard;