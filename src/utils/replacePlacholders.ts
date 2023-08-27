import { Placeholders, TranslationType } from '../localisation.interface';

export const replacePlacholders = (
  translation: TranslationType,
  placeholders: Placeholders | null = null
): TranslationType => {
  let newTranslation = translation;

  if (placeholders !== null) {
    for (const [k, v] of Object.entries(placeholders)) {
      if (Array.isArray(newTranslation)) {
        for (let index = 0; index < newTranslation.length; index++) {
          newTranslation[index] = newTranslation[index].replace(`{{${k}}}`, v.toString());
        }
      } else {
        newTranslation = newTranslation.replace(`{{${k}}}`, v.toString());
      }
    }
  }

  return newTranslation;
};
