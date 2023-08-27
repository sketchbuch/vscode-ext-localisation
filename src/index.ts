export * from './localisation.interface';
export * from './utils/getVscodeLang';
export * from './utils/loadTranslations';
import {
  Placeholders,
  TranslationCache,
  TranslationType,
  Translations,
} from './localisation.interface';
import { isTranslationType } from './utils/isTranslationType';
import { translations } from './utils/loadTranslations';
import { replacePlacholders } from './utils/replacePlacholders';

const deepCache: TranslationCache = {};

const getTranslation = <ReturnType>(key: string, placeholders: Placeholders | null): ReturnType => {
  let translation: TranslationType = key;

  if (translations[key] && isTranslationType(translations[key])) {
    translation = translations[key] as TranslationType;
  }

  // Deep check if no flat translation exists...
  if (key.includes('.') && !translations[key]) {
    if (deepCache[key]) {
      translation = deepCache[key];
    } else {
      deepCache[key] = key;

      const paths = key.split('.');
      const finalPath = paths.pop();

      let translationPath = translations;
      let path: string | undefined;

      while ((path = paths.shift())) {
        if (!isTranslationType(translationPath) && translationPath[path]) {
          translationPath = translationPath[path] as Translations;
        }
      }

      if (finalPath && typeof translationPath !== 'string') {
        if (translationPath[finalPath] && isTranslationType(translationPath[finalPath])) {
          translation = translationPath[finalPath] as TranslationType;
          deepCache[key] = translation;
        }
      }
    }
  }

  if (translation !== key) {
    translation = replacePlacholders(translation, placeholders);
  }

  return translation as unknown as ReturnType;
};

export const t = (key: string, placeholders: Placeholders | null = null): string => {
  return getTranslation<string>(key, placeholders);
};

export const ta = (key: string, placeholders: Placeholders | null = null): string[] => {
  const trans = getTranslation<string[]>(key, placeholders);

  return trans.toString() === key ? [] : trans;
};
