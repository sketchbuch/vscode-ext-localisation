import { DEFAULT_LANG, t, loadTranslations } from '.';

describe('t()', () => {
  const MOCK_EXT_PATH = `${__dirname}/tests/translations`;
  loadTranslations(DEFAULT_LANG, MOCK_EXT_PATH);

  describe('Flat keys', () => {
    test('Returns key if translation does not exist', () => {
      expect(t('nonexistent-key')).toBe('nonexistent-key');
    });

    test('Returns translation if it exists', () => {
      expect(t('test1')).toBe('More text');
    });
  });

  describe('Deep keys', () => {
    test('Returns deep key if translation does not exist', () => {
      expect(t('deep.nonexistent-key')).toBe('deep.nonexistent-key');
    });

    test('Returns translation if it exists', () => {
      expect(t('test2.test3')).toBe('Some text');
    });
  });
});
