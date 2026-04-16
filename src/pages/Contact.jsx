import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ContactCardIcon from "../components/ContactCardIcon";

function Contact({ contactRef }) {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const prevTitle = document.title;
    document.title = t("contact.documentTitle");

    return () => (document.title = prevTitle);
  }, [t]);

  return (
    <main id="main-content">
	  <section id="contact" className="section dark-section" ref={contactRef}>
        <h1 className="visually-hidden">{t("contact.titleAria")}</h1>
        <p>{t("contact.introLine1")}<br />{t("contact.introLine2")}</p>
        <p>{t("contact.subtitle")}</p>
        <ContactCardIcon className="contact-card-big" />
        <p>{t("contact.methods")}</p>
        <p>{t("contact.clickHint")}</p>
        <div className="icons-container" role="list" aria-label={t("contact.channelsAria")}>
          <a href="whatsapp://send/?text=Hey%20Juan%20Fernando&phone=+491783176979&abid=+491783176979" className="icon wa" aria-label={t("contact.waAria")} role="listitem" rel="noopener noreferrer"></a>
          <a href="mailto:contact@juanfelenis.dev" className="icon mail" aria-label={t("contact.emailAria")} role="listitem"></a>
          <a href="https://www.instagram.com/juanfelenis/" className="icon instagram" aria-label={t("contact.igAria")} role="listitem" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://github.com/Lenis-jf" className="icon github" aria-label={t("contact.githubAria")} role="listitem" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.linkedin.com/in/juanfelenis-dev/" className="icon linkedin" aria-label={t("contact.linkedinAria")} role="listitem" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <span className="copy-right">©juanfelenis 2025</span>
      </section>
    </main>
  );
}

export default Contact;