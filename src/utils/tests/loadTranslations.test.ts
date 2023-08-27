import { DEFAULT_LANG } from '../../constants';
import { loadTranslations, translations } from '../loadTranslations';

describe('loadTranslations()', () => {
  const MOCK_EXT_PATH = `${__dirname}/../../tests/translations`;
  const MOCK_EXT_PATH2 = `${MOCK_EXT_PATH}2`;
  const MOCK_EXT_PATH3 = `${MOCK_EXT_PATH}3`;
  const MOCK_EXT_PATH4 = `${MOCK_EXT_PATH}4`;

  const expectedTranslations = {
    arrayTest: ['Star', 'Trek'],
    arrayDeepTest: {
      blue: {
        midget: ['Red', 'Dwarf'],
      },
    },
    placeholders: {
      number: "A placeholder: '{{number}}'",
      string: "A placeholder: '{{string}}'",
    },
    test1: 'More text',
    test2: {
      test3: 'Some text',
    },
  };

  const expectedTranslationsDe = {
    arrayTest: ['DE - Star', 'DE - Trek'],
    arrayDeepTest: {
      blue: {
        midget: ['DE - Red', 'DE - Dwarf'],
      },
    },
    placeholders: {
      number: "DE - A placeholder: '{{number}}'",
      string: "DE - A placeholder: '{{string}}'",
    },
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
    test('Throws if default translation file does not exist', () => {
      expect(() => loadTranslations(DEFAULT_LANG, __dirname)).toThrowError(errors.default);
    });

    test('Throws if default translation file is not a file', () => {
      expect(() => loadTranslations(DEFAULT_LANG, MOCK_EXT_PATH2)).toThrowError(
        errors.defaultNotFile
      );
    });

    test('Loads the default translations if the file exists', () => {
      loadTranslations(DEFAULT_LANG, MOCK_EXT_PATH);
      expect(translations).toEqual(expectedTranslations);
    });
  });

  describe('DE translations:', () => {
    test('Loads the default translations if the DE file does not exist', () => {
      loadTranslations('de', MOCK_EXT_PATH4);
      expect(translations).toEqual(expectedTranslations);
    });

    test('Loads the default translations if the translation file is not a file', () => {
      loadTranslations('de', MOCK_EXT_PATH3);
      expect(translations).toEqual(expectedTranslations);
    });

    test('Loads the DE translations if the file exists', () => {
      loadTranslations('de', MOCK_EXT_PATH);
      expect(translations).toEqual(expectedTranslationsDe);
    });
  });
});
