class RomanNumeral {
  static NUMERAL = {
    1 : 'I', 
    5 : 'V', 
    10 : 'X', 
    50 : 'L', 
    100 : 'C', 
    500 : 'D', 
    1000 : 'M', 
  }

  constructor(number) {
    this.number = number;
    this.digitMap = this.getDigitMap();
  }

  toRoman() {
    //let digitMap = this.getDigitMap();
    let romanNumeral = '';

    // thousands
    if (this.digitMap['1000']) {
      romanNumeral = this.mappedDigitsToNumeral(1000, romanNumeral);
    }

    // hundreds
    if (this.digitMap['100']) {
      romanNumeral = this.mappedDigitsToNumeral(100, romanNumeral);
    }

    //tens
    if (this.digitMap['10']) {
      romanNumeral = this.mappedDigitsToNumeral(10, romanNumeral);
    }

    //ones
    if (this.digitMap['1']) {
      romanNumeral = this.mappedDigitsToNumeral(1, romanNumeral);
    }

    return romanNumeral;
  }

  getDigitMap() {
    let number = this.number;
    let digitMap = {};

    for (let divisor = 10; divisor <= 10000; divisor *= 10) {
      digitMap[divisor / 10] = (number % divisor);
      number -= (number % divisor);
    }
    return digitMap;
  }

  //pass a number representing the digits place you want to convert to numeral
  mappedDigitsToNumeral(digitsPlace, numeralString) {
    if (digitsPlace === 1000) {
      numeralString += RomanNumeral.NUMERAL[digitsPlace]
        .repeat(this.digitMap[digitsPlace] / 1000);
      return numeralString;
    }

    if ( this.digitMap[digitsPlace] === (9 * digitsPlace) ) {
      numeralString += RomanNumeral.NUMERAL[digitsPlace] +
                       RomanNumeral.NUMERAL[digitsPlace * 10];
    } else if ( this.digitMap[digitsPlace] >= (5 * digitsPlace)) {
      let diff = this.digitMap[digitsPlace] - (5 * digitsPlace);
      numeralString += RomanNumeral.NUMERAL[digitsPlace * 5] +
        RomanNumeral.NUMERAL[digitsPlace].repeat(diff / (1 * digitsPlace));
    } else if (this.digitMap[digitsPlace] === (4 * digitsPlace)) {
      numeralString += RomanNumeral.NUMERAL[digitsPlace] +
                       RomanNumeral.NUMERAL[digitsPlace * 5];
    } else {
      numeralString += RomanNumeral.NUMERAL[digitsPlace]
        .repeat(this.digitMap[digitsPlace] / (1 * digitsPlace));
    }

    return numeralString;
  }
}

module.exports = RomanNumeral;
