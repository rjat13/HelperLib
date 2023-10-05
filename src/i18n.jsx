import i18n from 'i18next';
import en from './locales/en/translation.json'
import es from './locales/es/translation.json'
import { initReactI18next } from 'react-i18next';

i18n
.use(initReactI18next)
.init({
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en
    },
    es: {
      translation: es 
    }
  },
});

export default i18n;
