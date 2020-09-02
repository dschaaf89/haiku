import Haiku from './../src/js/haiku-logic.js';

describe('Haiku', () => {
  let reHaiku;

  beforeEach(() => {
    reHaiku = new Haiku();
    reHaiku.line1 = "A frog jumps into the pond";
    reHaiku.line2 = "splash! Silence again.";
  });

  test('should return number of syllables in a line', () => {
    expect(reHaiku.getNumSyllables(reHaiku.line1)).toEqual(7);
  });
  test('should return number of syllables in a line', () => {
    expect(reHaiku.getNumSyllables(reHaiku.line2)).toEqual(5);
  });
});