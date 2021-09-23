import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './en/common.json';
import enExampleForm from './en/exampleForm.json';
import esCommon from './es/common.json';
import esExampleForm from './es/exampleForm.json';

export const resources = {
  en: {
    translation: enCommon,
    exampleForm: enExampleForm,
  },
  es: {
    translation: esCommon,
    exampleForm: esExampleForm,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
});
