import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

// Define the resources
const resources = {
    en: {
        translation: translationEN
    },
    ar: {
        translation: translationAR
    }
};

i18n
    // Detect user language
    .use(LanguageDetector)
    // Pass the i18n instance to react-i18next
    .use(initReactI18next)
    // Initialize i18next
    .init({
        resources,
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false // React already safes from xss
        },
        detection: {
            // Order and from where user language should be detected
            order: ['localStorage', 'cookie', 'htmlTag', 'navigator', 'path', 'subdomain'],
            // Keys or params to lookup language from
            caches: ['localStorage', 'cookie']
        }
    });

export default i18n;