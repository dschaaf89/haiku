import Haiku from './../src/js/haiku-logic.js';

describe('Haiku', () => {
  let reHaiku;

  beforeEach(() => {
    reHaiku = new Haiku();
    reHaiku.line1 = "splash! Silence again.";
  });

//   test('should turn line into a array of words', () => {
//     expect(reHaiku.getWordArray(reHaiku.line1)).toEqual(["splash!", "Silence", "again."]);
//   });
//   test('should take line and give amount of vowels in the line', () => {
//     expect(reHaiku.getNumVowels(reHaiku.line1)).toEqual(7);
//   });
//   test('should subtract any silent vowels from the number of vowels in a word', () => {
//     expect().toEqual();
//   });
//   test('should subtract one vowel from any diphthong the number of vowels in a word', () => {
//     expect().toEqual();
//   });
  test('should return number of syllables in a line', () => {
    expect(reHaiku.getNumSyllables(reHaiku.line1)).toEqual(5);
  });
});