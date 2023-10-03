'use strict';
/*
input: positive integer
output: string representing the number's classification
rules:
  - if the input number is negative throw an error
  - the input number can be classified as
    - perfect: number === sum of divisors
    - deficient: number > sum of divisors
    - abundant number < sum of divisors
*/

class PerfectNumber {
  static classify(number) {
    if (number < 0) {
      throw new Error("Number must be greater than or equal to 1.");
    }

    if (PerfectNumber.isPerfect(number)) return 'perfect';
    if (PerfectNumber.isDeficient(number)) return 'deficient';
    if (PerfectNumber.isAbundant(number)) return 'abundant';
  }

  static getDivisors(number) {
    //return an array of the divisors
    let divisors = [];
    for (let div = 1; div < number; div++) {
      if ( (number % div) === 0 ) {
        divisors.push(div);
      }
    }
    return divisors;
  }

  static sum(array) {
    return array.reduce((acc, num) => acc + num);
  }

  static isPerfect(number) {
    let sum = PerfectNumber.sum(PerfectNumber.getDivisors(number));
    return sum === number;
  }

  static isDeficient(number) {
    let sum = PerfectNumber.sum(PerfectNumber.getDivisors(number));
    return number > sum;
  }

  static isAbundant(number) {
    let sum = PerfectNumber.sum(PerfectNumber.getDivisors(number));
    return number < sum;
  }
}

module.exports = PerfectNumber;