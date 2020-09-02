export default class Haiku {
  constructor() {
    this.line1 = "";
    this.line2 = "";
    this.line3 = "";
  }

  // // getWordArray(line) {
  // //   let wordArray = line.split(" ");
  // //   return wordArray;
  // // }

  // // getNumVowels(line) {
  // //   let numVowels= line.match(/[aeiouy]/ig).length;
  // //   return numVowels;
  // // }
  
  // // getNumSilentVowels(line) {
  // //   let lineSplit = line.split(" ");
  // //   let newArray = [];
  // //   let numSilVow = 0;
  // //   lineSplit.forEach(function(word){
  // //     if(word[word.length-1]==="e"){
  // //       numSilVow += 1;
  // //       // let x = word.slice(0,-1);
  // //       // newArray.push(x)
  // //     }else{
  // //       // let x = word;
  // //       // newArray.push(x);
  // //     }
  // //   });
  // //   return numSilVow;
  // // }

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