// src/pages/About.jsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import TransitionButton from "../components/TransitionButton";

export default function About({ aboutPageRef }) {
  const { t } = useTranslation();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = t("about.documentTitle");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

    return () => (document.title = prevTitle);
  }, [t]);

  return (
    <main>
      <section id="about-page" className="section light-section" ref={aboutPageRef}>
        <div className="about-hero">
          <div className="hero-inner">
            <h1>{t("about.heroTitle")}</h1>
            <div className="hero-text">
              <p className="tagline">
                {t("about.tagline1")}
              </p>

              <p className="tagline">
                {t("about.tagline2")}
              </p>

              <div className="buttons-container">
                <a className="button" href="/assets/docs/Lebenslauf-2026-compressed.pdf" download>
                  {t("about.downloadCv")}
                </a>
                <TransitionButton to="/contact" label={t("about.contact")} extraClass="about" color="#1d1d1f" />
              </div>
            </div>

            <figure className="hero-media" aria-hidden="false">
              <img
                src={`${import.meta.env.BASE_URL}assets/imgs/profil-foto-web-portrait-1600x2000.webp`}
                alt={t("about.portraitAlt")}
                width="220"
                height="220"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        <div className="snapshot-block">
          <dl className="snapshot">
            <div className="snap-item">
              <dt><strong>{t("about.snapshot.locationLabel")}</strong></dt>
              <dd>{t("about.snapshot.locationValue")}</dd>
            </div>
            <div className="snap-item">
              <dt><strong>{t("about.snapshot.educationLabel")}</strong></dt>
              <dd>{t("about.snapshot.educationValue")}</dd>
            </div>
            <div className="snap-item">
              <dt><strong>{t("about.snapshot.languagesLabel")}</strong></dt>
              <dd>{t("about.snapshot.languagesValue")}</dd>
            </div>
            <div className="snap-item">
              <dt><strong>{t("about.snapshot.focusLabel")}</strong></dt>
              <dd>{t("about.snapshot.focusValue")}</dd>
            </div>
          </dl>
        </div>

        <div className="about-story">
          <h3>{t("about.aboutMeTitle")}</h3>
          <p>{t("about.aboutMeP1")}</p>
          <p>{t("about.aboutMeP2")}</p>
        </div>

        <div className="process">
          <h3>{t("about.processTitle")}</h3>
          <ul>
            <li>{t("about.process.discover")}</li>
            <li>{t("about.process.design")}</li>
            <li>{t("about.process.develop")}</li>
            <li>{t("about.process.refine")}</li>
          </ul>
        </div>

        <div className="highlights">
          <h3>{t("about.highlightsTitle")}</h3>

          <article className="case">
            <h4>{t("about.highlights.leontiTitle")}</h4>
            <p>{t("about.highlights.leontiText")}</p>
            <Link to="/projects/leonti">{t("about.highlights.readMore")}</Link>
          </article>

          <article className="case">
            <h4>{t("about.highlights.dronesTitle")}</h4>
            <p>{t("about.highlights.dronesText")}</p>
            <Link to="/projects/dronesim">{t("about.highlights.readMore")}</Link>
          </article>

          <article className="case">
            <h4>{t("about.highlights.roommanTitle")}</h4>
            <p>{t("about.highlights.roommanText")}</p>
            <Link to="/projects/roomman">{t("about.highlights.readMore")}</Link>
          </article>
        </div>

        <div className="contact-cta">
          <h3>{t("about.ctaTitle")}</h3>
          <p>{t("about.ctaText")}</p>

          <div className="buttons-container">
            <TransitionButton to="/contact" label={t("about.ctaContact")} extraClass="about long" />
            <a className="button" href={`${import.meta.env.BASE_URL}assets/docs/Lebenslauf-2026-compressed.pdf`} download>{t("about.downloadResume")}</a>
          </div>
        </div>
        <span className="copy-right">©juanfelenis 2025</span>
      </section>
    </main>
  );
}
