import React, { useEffect } from "react";
import ContactCardIcon from "../components/ContactCardIcon";

function Contact({ contactRef }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const prevTitle = document.title;
    document.title = "Contact Juanfelenis — Get in Touch";

    return () => (document.title = prevTitle);
  }, []);

  return (
    <main id="main-content">
	  <section id="contact" className="section dark-section" ref={contactRef}>
        <h1 className="visually-hidden">Contact Juanfelenis</h1>
        <p>Hey!, nice to see you again :)<br />Interested?</p>
        <p>Let's get in touch</p>
        <ContactCardIcon className="contact-card-big" />
        <p>Here you will find some methods to contact me</p>
        <p>Just click or tap on the icons below</p>
        <div className="icons-container" role="list" aria-label="Contact channels">
          <a href="whatsapp://send/?text=Hey%20Juan%20Fernando&phone=+491783176979&abid=+491783176979" className="icon wa" aria-label="Message on WhatsApp" role="listitem" rel="noopener noreferrer"></a>
          <a href="mailto:contact@juanfelenis.dev" className="icon mail" aria-label="Send an email" role="listitem"></a>
          <a href="https://www.instagram.com/juanfelenis/" className="icon instagram" aria-label="Follow on Instagram" role="listitem" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://github.com/Lenis-jf" className="icon github" aria-label="View GitHub profile" role="listitem" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.linkedin.com/in/juanfelenis-dev/" className="icon linkedin" aria-label="View LinkedIn profile" role="listitem" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <span className="copy-right">©juanfelenis 2025</span>
      </section>
    </main>
  );
}

export default Contact;