import { DEFAULT_LANG } from '../..';
import { getVscodeLang } from '../getVscodeLang';

describe('getVscodeLang()', () => {
  test('Returns the default language if no vscodeLangConfig', () => {
    expect(getVscodeLang(undefined)).toBe(DEFAULT_LANG);
    expect(getVscodeLang('')).toBe(DEFAULT_LANG);
  });

  test('Returns the default language if no locale in vscodeLangConfig', () => {
    expect(getVscodeLang('{}')).toBe(DEFAULT_LANG);
  });

  test('Returns the language code from vscodeLangConfig', () => {
    expect(getVscodeLang('{ "locale": "de"}')).toBe('de');
  });
});
