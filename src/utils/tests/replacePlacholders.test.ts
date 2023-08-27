import { Placeholders } from '../..';
import { replacePlacholders } from '../replacePlacholders';

describe('replacePlacholders()', () => {
  const translation = 'Red Dwarf';
  const placeholders: Placeholders = {
    name: 'Arnold Rimmer',
    ship: 'Starbug',
  };

  test('Returns the translation unchanged if placeholders is null', () => {
    expect(replacePlacholders(translation, null)).toBe(translation);
  });

  test('Returns the translation unchanged if placeholders is empty', () => {
    expect(replacePlacholders(translation, {})).toBe(translation);
  });

  test('Returns the translation unchanged if there are no placeholders in the translation', () => {
    expect(replacePlacholders(translation, placeholders)).toBe(translation);
  });

  test('Returns the translation with placeholders correctly changed', () => {
    expect(replacePlacholders('Crew Member: {{name}}', placeholders)).toBe(
      `Crew Member: ${placeholders.name}`
    );
  });

  test('Returns the translation array with placeholders correctly changed', () => {
    expect(replacePlacholders(['Crew Member: {{name}}', 'Ship: {{ship}}'], placeholders)).toEqual([
      `Crew Member: ${placeholders.name}`,
      `Ship: ${placeholders.ship}`,
    ]);
  });
});
