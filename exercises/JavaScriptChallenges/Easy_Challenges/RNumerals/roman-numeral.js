/*
input: Number
output: String (roman numeral representation)
rules:
  - 


*/

class RomanNumeral {
  static ROMAN_NUMERALS = {
     M: 1000,
    CM: 900,
     D: 500,
    CD: 400,
     C: 100,
    XC: 90,
     L: 50,
    XL: 40,
     X: 10,
    IX: 9,
     V: 5,
    IV: 4,
     I: 1
  }
  
  constructor(digit) {
    this.digit = digit;
  }
  
  toRoman() {
    // return a string roman numeral from number argument
    let num = this.digit;
    let romanNumeral = '';
    
    for (let key in RomanNumeral.ROMAN_NUMERALS) {
      let value = RomanNumeral.ROMAN_NUMERALS[key];
      
      if (value === num) {
        romanNumeral += key;
        break;
      }
      
      if (value < num) { 
        romanNumeral += key.repeat(Math.floor(num / value));
        num -= Math.floor(num / value) * value;
      }
    }
    
    return romanNumeral;
  }
}

module.exports = RomanNumeral;