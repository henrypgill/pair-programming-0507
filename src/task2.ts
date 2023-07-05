

interface ReturnObject {
  [letter: string]: string[]
}


function collectByLetter (inputStringArray: string[]): ReturnObject {
  let returnObject: ReturnObject = {};

  inputStringArray.forEach(forEachCallback)


  function forEachCallback(word: string): void {
    if ( returnObject.hasOwnProperty(word[0]) ){
      returnObject[word[0]].push(word)
    } else {
      returnObject[word[0]] = [word];
    }
  }


  return returnObject
}


export default collectByLetter ;

































// inputString.split("").filter(char => char === " " ? null : char).forEach(objectCallbackFunction)


// function objectCallbackFunction(letter: string) {
//   if (returnObject.hasOwnProperty(letter)) {
//     returnObject[letter]++
//   } else {
//     returnObject[letter] = 1;
//   }
// }