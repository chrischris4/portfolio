import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const version = 'v1.0.7';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)

    .init({
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: `https://www.christopher-jost.fr/locales/{{lng}}/translation.json?v=${version}`,
        },
    });

export default i18n;
