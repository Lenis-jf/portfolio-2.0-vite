// src/pages/About.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TransitionButton from "../components/TransitionButton";

export default function About({ aboutPageRef }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "About Juanfelenis — Software Engineer & Web Developer";

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

    return () => (document.title = prevTitle);
  }, []);

  return (
    <main>
      <section id="about-page" className="section light-section" ref={aboutPageRef}>
        <div className="about-hero">
          <div className="hero-inner">
            <h1>Hi — I’m Juan Fernando Lenis Serna</h1>
            <div className="hero-text">
              <p className="tagline">
                Colombian Computer Science student at Frankfurt University of Applied Sciences.
                I build intuitive, resilient web apps with an emphasis on UX, accessibility, and
                attention to detail.
              </p>

              <p className="tagline">
                Beyond the web, I enjoy exploring new technologies and ideas — from small automations to creative tools.
                I love learning, experimenting, and finding elegant ways to make things work better.
              </p>

              <div className="buttons-container">
                <a className="button" href="/assets/docs/Lebenslauf-2026-compressed.pdf" download>
                  Download CV
                </a>
                <TransitionButton to="/contact" label="Contact" extraClass="about" color="#1d1d1f" />
              </div>
            </div>

            <figure className="hero-media" aria-hidden="false">
              <img
                src={`${import.meta.env.BASE_URL}assets/imgs/profil-foto-web-portrait-1600x2000.webp`}
                alt="Portrait of Juanfelenis"
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
              <dd>Frankfurt am Main, Germany</dd>
            </div>
            <div className="snap-item">
              <dt><strong>Education</strong></dt>
              <dd>B.Sc. Computer Science — Frankfurt UAS</dd>
            </div>
            <div className="snap-item">
              <dt><strong>Languages</strong></dt>
              <dd>Spanish · English · German (C1)</dd>
            </div>
            <div className="snap-item">
              <dt><strong>Focus</strong></dt>
              <dd>Frontend · UX · accessibility · performance</dd>
            </div>
          </dl>
        </div>

        <div className="about-story">
          <h3>About me</h3>
          <p>
            I’m a developer from Colombia, currently studying Computer Science in Frankfurt.
            I love turning ideas into polished, reliable products — blending a designer’s eye for detail
            with the discipline of engineering.
          </p>
          <p>
            I care deeply about usability and edge cases; I like when software behaves gracefully even
            under the unexpected. Collaboration keeps me inspired — I enjoy learning from others and
            building things that feel right to use.
          </p>
        </div>

        <div className="process">
          <h3>How I work</h3>
          <ul>
            <li><strong>Discover</strong> — understand users and their needs.</li>
            <li><strong>Design</strong> — structure ideas through clear interfaces.</li>
            <li><strong>Develop</strong> — code clean, accessible, and testable components.</li>
            <li><strong>Refine</strong> — improve with feedback and performance insights.</li>
          </ul>
        </div>

        <div className="highlights">
          <h3>Selected highlights</h3>

          <article className="case">
            <h4>Leonti Aesthetic — Studio Website</h4>
            <p>
              Fast, maintainable React landing page highlighting services, pricing and partner products. Implemented image optimization, Google Maps, Search Console tracking and automated asset tasks; deployed via SFTP.
            </p>
            <Link to="/projects/leonti">Read more</Link>
          </article>

          <article className="case">
            <h4>Drones Simulation — Java GUI</h4>
            <p>
              Desktop Java application demonstrating API integration and real-time data visualization. Features searchable views, computed metrics and robust pagination — developed as an OOP university class team project.
            </p>
            <Link to="/projects/dronesim">Read more</Link>
          </article>

          <article className="case">
            <h4>Roomman — Distributed Room Manager</h4>
            <p>
              Modular client-server system implementing sockets and RPC (SunRPC in later stages) for synchronized room management. Focus on concurrency, payload encoding, fault handling and scalable communication; top-scored across iterative submissions.
            </p>
            <Link to="/projects/roomman">Read more</Link>
          </article>
        </div>

        <div className="contact-cta">
          <h3>Want to work together?</h3>
          <p>If you'd like to collaborate or hire me, please get in touch.</p>

          <div className="buttons-container">
            <TransitionButton to="/contact" label="Get in touch" extraClass="about long" />
            <a className="button" href={`${import.meta.env.BASE_URL}assets/docs/Lebenslauf-2026-compressed.pdf`} download>Download resume</a>
          </div>
        </div>
        <span className="copy-right">©juanfelenis 2025</span>
      </section>
    </main>
  );
}
