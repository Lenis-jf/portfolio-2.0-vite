import React, { useEffect } from "react";

function Contact({ contactRef }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const prevTitle = document.title;
    document.title = "Contact | Juanfelenis-dev";

    return () => (document.title = prevTitle);
  }, []);

  return (
    <div>
	  <section id="contact" className="section dark-section" ref={contactRef}>
        <p>Hey!, nice to see you again :)<br />Interested?</p>
        <p>Let’s get in touch</p>
        <img className="contact-card-big" src={`${import.meta.env.BASE_URL}assets/icons/contact-card-big.svg`} alt="contact agenda icon" />
        <p>Here you will find some methods to contact me</p>
        <p>Just click or tap on the icons below</p>
        <div className="icons-container">
          <a href="whatsapp://send/?text=Hey%20Juan%20Fernando%20mensaje&phone=+491783176979&abid=+491783176979" className="icon wa"></a>
          <a href="mailto:lenisserna2001@gmail.com" className="icon mail"></a>
          <a href="https://www.instagram.com/juanfelenis/" className="icon instagram"></a>
          <a href="https://github.com/Lenis-jf" className="icon github"></a>
        </div>
        <span className="copy-right">©juanfelenis 2025</span>
      </section>
    </div>
  );
}

export default Contact;