import { Translations } from '../..';
import { isTranslationType } from '../isTranslationType';

describe('isTranslationType()', () => {
  const mockTranslations: Translations = {
    arrayTest: ['Star', 'Trek'],
    test1: 'More text',
    test2: {
      test3: 'Some text',
    },
  };

  test('Returns false if translation is an object', () => {
    expect(isTranslationType(mockTranslations.test2)).toBe(false);
  });

  test('Returns true if translation is a sring', () => {
    expect(isTranslationType(mockTranslations.test1)).toBe(true);
  });

  test('Returns true if translation is an array', () => {
    expect(isTranslationType(mockTranslations.arrayTest)).toBe(true);
  });
});
