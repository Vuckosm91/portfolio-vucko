
import enTranslation from "../locales/en/translate.json";
import deTranslation from "../locales/de/translate.json";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        en: {
          translation: enTranslation,
        },
        de: {
          translation: deTranslation,
        },
      },
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
  });

export default i18n;
