'use strict';
/*
input: string (valid octal formatted)
output: Number (octal input to decimal)
rules: 
  - if input is an invalid octal return 0
    - what is an invalid octal?
      - no alphabetic characters
      - a valid octal may only contain digits 0-7
*/

class Octal {
  constructor(octalString) {
    this.octalString = octalString;
  }
  
  toDecimal() {
    if (this.octalString.match(/[a-zA-Z89]/)) return 0;
    
    let octalArr = [...this.octalString];
    
    let octal = 0;
    for (let i = octalArr.length - 1; i >= 0; i--) {
      let exp = ((octalArr.length - 1) - i);
      let digit = octalArr[i];
      
      octal += digit * (8**exp);
    }
    return octal;
  }
}

// let test = new Octal('233');
// console.log(test.toDecimal()); // 0

module.exports = Octal;