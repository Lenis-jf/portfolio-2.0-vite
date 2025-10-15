// src/pages/About.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About({ aboutPageRef, onAboutReady }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "About | Juanfelenis-dev";

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

    if(typeof onAboutReady === "function")
      onAboutReady(true);

    return () => (document.title = prevTitle);
  }, []);

  return (
    <main>
      <section id="about-page" className="section light-section hidden" ref={aboutPageRef}>
        <div className="about-hero">
          <div className="hero-inner">
            <div className="hero-text">
              <h2>Hi — I’m Juan Fernando Lenis Serna</h2>
              <p className="tagline">
                Colombian Computer Science student at Frankfurt University of Applied Sciences.
                I build intuitive, resilient web apps with an emphasis on UX, accessibility, and
                attention to detail.
              </p>

              <div className="buttons-container">
                <a className="button highlight" href="/assets/docs/Juan-Lenis-CV.pdf" download>
                  Download CV
                </a>
                <Link className="button" to="/contact">
                  Contact
                </Link>
              </div>
            </div>

            <figure className="hero-media" aria-hidden="false">
              <img
                src={`${import.meta.env.BASE_URL}/assets/imgs/profil-foto-2.webp`}
                alt="Portrait of Juan Lenis"
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
              <dt><strong>Location</strong></dt>
              <dd>Frankfurt, Germany</dd>
            </div>
            <div className="snap-item">
              <dt><strong>Studies</strong></dt>
              <dd>Frankfurt University of Applied Sciences — B.Sc. Computer Science</dd>
            </div>
            <div className="snap-item">
              <dt><strong>Languages</strong></dt>
              <dd>Spanish (native) · German (C1 Level) · English (fluent)</dd>
            </div>
            <div className="snap-item">
              <dt><strong>Focus</strong></dt>
              <dd>Frontend, UX, accessibility, performance</dd>
            </div>
          </dl>
        </div>

        <div className="about-story">
          <h3>About me</h3>
          <p>
            I’m a developer originally from Colombia and currently studying Computer Science in Frankfurt.
            I enjoy turning ideas into polished, dependable products. I combine a designer’s eye for detail
            with engineering rigor to create interfaces that are pleasant and robust.
          </p>
          <p>
            I pay strong attention to edge cases and usability — my goal is that software behaves well even
            under unexpected interactions. I enjoy collaborating in teams and learning from peers.
          </p>
        </div>

        <div className="process">
          <h3>How I work</h3>
          <ul>
            <li><strong>Understand</strong> — user needs & constraints.</li>
            <li><strong>Prototype</strong> — wireframes & quick interactive demos.</li>
            <li><strong>Build</strong> — component-driven development, tests & a11y checks.</li>
            <li><strong>Iterate</strong> — feedback-driven improvements and performance tuning.</li>
          </ul>
        </div>

        <div className="highlights">
          <h3>Selected highlights</h3>

          <article className="case">
            <h4>Portfolio — CRA → Vite migration</h4>
            <p>
              Rewrote the portfolio using Vite: resolved asset routing, improved dev/build times and
              strengthened asset handling. <Link to="/work">See projects</Link>
            </p>
          </article>

          <article className="case">
            <h4>Drone Monitoring UI</h4>
            <p>
              University project focused on clear telemetry panels and graceful error handling.
              <Link to="/dronesim"> Read more</Link>
            </p>
          </article>
        </div>

        <div className="contact-cta">
          <h3>Want to work together?</h3>
          <p>If you'd like to collaborate or hire me, please get in touch.</p>

          <div className="buttons-container">
            <Link className="button highlight" to="/contact">Get in touch</Link>
            <a className="button" href={`${import.meta.env.BASE_URL}/assets/docs/Juan-Lenis-CV.pdf`} download>Download resume</a>
          </div>
        </div>
        <span className="copy-right">©juanfelenis 2025</span>
      </section>
    </main>
  );
}
