/*
input: string (an octal)
output: Number (decimal)
rules:
  - define an instance method `toDecimal` which takes an octal string and 
    returns the decimal equivalent as a number. 
  - invalid input  treated as octal 0

Algorithm:
  - declare instance method `toDecimal` defines param `octal`
    - if `octal` is not considered valid return 0
    
    - declare `octalArr` and init to `octal` transformed to array of characters
    - iterate over all elements of `octalArr` and declare `acc`
    - declare `multiply` init to length of `ocalArr` - 1 (decrement each iteration)
      - each iteration `acc` += ele * (8**multiply)
    
    - return `acc`
  
  - declare static method `isValid`
    - is a regex to determine if alphabetic characters in string

*/

class Octal {
  static BASE = 8;
  static isValid(octal) {
    return !/[a-z89]/gi.test(octal);
  }
  
  constructor(octalString) {
    this.octalString = octalString;
  }
  
  toDecimal() {
    if (!Octal.isValid(this.octalString)) return 0;
    
    let octalArr = [...this.octalString];
    let multiply = octalArr.length - 1;
    
    return octalArr.reduce((acc, ele) => {
      acc += ele * (Octal.BASE**multiply);
      console.log(acc);
      multiply -= 1;
      return acc;
    }, 0);
  }
}

module.exports = Octal;