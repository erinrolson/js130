"use strict"

function makeCounterLogger(firstNumber){
  return (secondNumber) => {
    
    if (firstNumber > secondNumber) {
      for (let number = firstNumber; number >= secondNumber; number--) {
        console.log(number);
      }
    } else {
      for (let number = firstNumber; number <= secondNumber; number++) {
        console.log(number);
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);