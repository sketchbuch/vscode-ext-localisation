import { loadTranslations, t, ta } from '.';
import { DEFAULT_LANG } from './constants';

describe('Translations:', () => {
  describe('t()', () => {
    const MOCK_EXT_PATH = `${__dirname}/tests/translations`;
    loadTranslations(DEFAULT_LANG, MOCK_EXT_PATH);

    describe('Flat keys:', () => {
      test('Returns key if translation does not exist', () => {
        expect(t('nonexistent-key', null)).toBe('nonexistent-key');
      });

      test('Returns translation if it exists', () => {
        expect(t('test1', null)).toBe('More text');
      });
    });

    describe('Deep keys:', () => {
      test('Returns key if deep translation does not exist', () => {
        expect(t('deep.nonexistent-key', null)).toBe('deep.nonexistent-key');
      });

      test('Returns deep translation if it exists', () => {
        expect(t('test2.test3', null)).toBe('Some text');
      });
    });

    describe('Placeholders:', () => {
      const placeholder = 'hello';

      test('Strings', () => {
        expect(t('placeholders.string', { string: placeholder })).toBe(
          `A placeholder: '${placeholder}'`
        );
      });

      test('Numbers', () => {
        expect(t('placeholders.number', { number: placeholder })).toBe(
          `A placeholder: '${placeholder}'`
        );
      });
    });
  });

  describe('ta()', () => {
    test('Returns the array (flat)', () => {
      expect(ta('arrayTest', null)).toStrictEqual(['Star', 'Trek']);
    });

    test('Returns the array (deep)', () => {
      expect(ta('arrayDeepTest.blue.midget', null)).toStrictEqual(['Red', 'Dwarf']);
    });
  });
});
