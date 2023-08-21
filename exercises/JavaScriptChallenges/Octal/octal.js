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
    for (let idx = octalArr.length - 1; idx >= 0; idx--) {
      let exp = ((octalArr.length - 1) - idx);
      let digit = octalArr[idx];

      octal += digit * (8 ** exp);
    }
    return octal;
  }
}

module.exports = Octal;