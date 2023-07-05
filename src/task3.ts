
type Winner = [string, number]

type WinnerArray = Winner[];

interface ReturnObject {
  [letter: string]: number;
}


function getMostCommonLetters(inputString: string, numberOfWinners: number): WinnerArray {
  let winnerArray: WinnerArray = [];
  let returnObject: ReturnObject = {};

  const tidiedString = inputString.toLowerCase().split("").filter(char => char === " " ? null : char);


  tidiedString.forEach(objectCallbackFunction)

  function objectCallbackFunction(letter: string) {
    if (returnObject.hasOwnProperty(letter)) {
      returnObject[letter]++;
    } else {
      returnObject[letter] = 1;
    }
  }
  winnerArray = Object.entries(returnObject).sort((letter1, letter2) => letter2[1] - letter1[1]).slice(0, numberOfWinners)

  return winnerArray
}


console.log(JSON.stringify(getMostCommonLetters("ye as I walk into the valley of the shadow of death", 5)))

export default getMostCommonLetters;
