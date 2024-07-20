import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "language": "Language",
        "english": "English",
        "polish": "Polish",
        "russian": "Russian",
        // Add more keys as needed
      }
    },
    pl: {
      translation: {
        "language": "Język",
        "english": "Angielski",
        "polish": "Polski",
        "russian": "Rosyjski",
        // Add more keys as needed
      }
    },
    ru: {
      translation: {
        "language": "Язык",
        "english": "Английский",
        "polish": "Польский",
        "russian": "Русский",
        // Add more keys as needed
      }
    }
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
