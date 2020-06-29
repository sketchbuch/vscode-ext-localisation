import { DEFAULT_LANG } from '../..';
import { loadTranslations, translations } from '../loadTranslations';

describe('loadTranslations()', () => {
  const MOCK_EXT_PATH = `${__dirname}/../../tests/translations`;
  const MOCK_EXT_PATH2 = `${MOCK_EXT_PATH}2`;
  const MOCK_EXT_PATH3 = `${MOCK_EXT_PATH}3`;
  const MOCK_EXT_PATH4 = `${MOCK_EXT_PATH}4`;
  const expectedTranslations = {
    test1: 'More text',
    test2: {
      test3: 'Some text',
    },
  };
  const expectedTranslationsDe = {
    test1: 'DE - More text',
    test2: {
      test3: 'DE - Some text',
    },
  };
  const errors = {
    default: 'Default translations could not be read',
    defaultNotFile: 'Unable to read translation file',
  };

  describe('Default translations:', () => {
    test('Throws if default translation !exists', () => {
      expect(() => loadTranslations(DEFAULT_LANG, __dirname)).toThrowError(errors.default);
    });

    test('Throws if default translation !file', () => {
      expect(() => loadTranslations(DEFAULT_LANG, MOCK_EXT_PATH2)).toThrowError(
        errors.defaultNotFile
      );
    });

    test('Loads the default translations if they exists', () => {
      loadTranslations(DEFAULT_LANG, MOCK_EXT_PATH);
      expect(translations).toEqual(expectedTranslations);
    });
  });

  describe('DE translations:', () => {
    test('Loads the default translations if the DE file !exists', () => {
      loadTranslations('de', MOCK_EXT_PATH4);
      expect(translations).toEqual(expectedTranslations);
    });

    test('Loads the default translations if the translation file !file', () => {
      loadTranslations('de', MOCK_EXT_PATH3);
      expect(translations).toEqual(expectedTranslations);
    });

    test('Loads the DE translations if they exists', () => {
      loadTranslations('de', MOCK_EXT_PATH);
      expect(translations).toEqual(expectedTranslationsDe);
    });
  });
});
