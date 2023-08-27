import { TranslationType, Translations } from '../localisation.interface';

export const isTranslationType = (translation: TranslationType | Translations): boolean => {
  if (typeof translation === 'string' || Array.isArray(translation)) {
    return true;
  }

  return false;
};
