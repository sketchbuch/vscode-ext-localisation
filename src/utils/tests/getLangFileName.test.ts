import { DEFAULT_LANG } from '../../constants';
import { getLangFileName } from '../getLangFileName';

describe('getLangFileName()', () => {
  test('Returns the correct filename for the default language', () => {
    expect(getLangFileName(DEFAULT_LANG)).toBe('package.nls.json');
  });

  test('Returns the correct filename for the any other language language', () => {
    expect(getLangFileName('de')).toBe('package.nls.de.json');
  });
});
