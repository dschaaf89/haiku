export default class Haiku {
  constructor() {
    this.line1 = "";
    this.line2 = "";
    this.line3 = "";
  }

  getWordArray(line) {
    let wordArray = line.split(" ");
    return wordArray;
  }

  getNumVowels(line) {
    let numVowels= line.match(/[aeiouy]/ig).length
  
    return numVowels;
  }
}