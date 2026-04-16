import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

const SUPPORTED_LANGUAGES = ["en", "es", "de"];
const STORAGE_KEY = "portfolio-language";

function getInitialLanguage() {
  const storedLanguage = localStorage.getItem(STORAGE_KEY);
  if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)) {
    return storedLanguage;
  }

  const browserLanguage = navigator.language?.slice(0, 2).toLowerCase();
  if (browserLanguage && SUPPORTED_LANGUAGES.includes(browserLanguage)) {
    return browserLanguage;
  }

  return "en";
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "en",
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: {
    escapeValue: false
  }
});

i18n.on("languageChanged", language => {
  localStorage.setItem(STORAGE_KEY, language);
});

export default i18n;
