export default class Haiku {
  constructor() {
    this.line1 = "";
    this.line2 = "";
    this.line3 = "";
  }

  getNumSyllables(line) {
    let lineSplit = line.split(" ");
    let newArray = [];
    lineSplit.forEach(function(word){
      if(word === "the") {
        newArray.push(word);
      } else if(word[word.length-1]==="e"){
        let x = word.slice(0,-1);
        newArray.push(x);
      } else {
        newArray.push(word);
      }
    });
    console.log(newArray);
    let newLine = newArray.join(" ");
    let numSyllables = newLine.match(/[aeiouy]{1,2}/ig).length;
    return numSyllables;
  }
}