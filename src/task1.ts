interface ReturnObject {
  [letter: string]: number
}


function countOccurrences(inputString: string): ReturnObject {
  let returnObject: ReturnObject = {};

  inputString.split("").filter(char => char === " " ? null : char).forEach(objectCallbackFunction)

  function objectCallbackFunction(letter: string) {
    if (returnObject.hasOwnProperty(letter)) {
      returnObject[letter]++
    } else {
      returnObject[letter] = 1;
    }
  }


  return returnObject
}


console.log(countOccurrences("test"))
export default countOccurrences;
