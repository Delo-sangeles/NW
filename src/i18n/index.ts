import i18next from 'i18next';
import { es } from './es';
import { en } from './en';

export type Lang = 'es' | 'en';

const savedLang = (): Lang => {
  try {
    return localStorage.getItem('lang') === 'en' ? 'en' : 'es';
  } catch {
    return 'es';
  }
};

export const currentLang = (): Lang => (i18next.language === 'en' ? 'en' : 'es');

export const initI18n = async () => {
  await i18next.init({
    lng: savedLang(),
    fallbackLng: 'es',
    resources: { es: { translation: es }, en: { translation: en } },
    interpolation: { escapeValue: false },
  });
  document.documentElement.lang = currentLang();
};

/** Texto traducido por clave: t('hero.learnMore') */
export const t = (key: string): string => String(i18next.t(key));

/** Listas de objetos traducidos: tList<{title:string}>('career.items') */
export const tList = <T>(key: string): T[] => i18next.t(key, { returnObjects: true }) as unknown as T[];

export const setLang = async (lng: Lang) => {
  await i18next.changeLanguage(lng);
  try {
    localStorage.setItem('lang', lng);
  } catch {
    /* ignore */
  }
  document.documentElement.lang = lng;
};
