/*
input: Number
output: string (of the numbers classification)
rules: 
  - given a whole integer, return the number's classification as a string
    based on its aliquot sum vale.
  - any number that is not a positive whole interger should throw an error!
  
  - aliquot sum - sum of positive divisors of a given number (not including
    the number itself). 
    - a number is a divisor if the given number can be divided w/o a remainder
    
  - perfect number - aliquot sum equal to given number
  - Abundant number - aliquot sum greater than a given number
  - deficient number - aliquot sum less than original number
  
Algorithm: 
  - declare a method `classify` has param `num`
    - if `num` is not a whole positive integer, throw error
    - declare `sum` and init to return value of passing `num` as arg to `aliquotSum`
    
    - if `sum` === `num` return 'perfect'
    - if `sum` > `num` return 'abundant'
    - if `sum` < `num` return 'deficient'
    
  - declare method `aliquotSum` has param `num`
    - iterate from 1 up to but not including `num`, incrementing by 1 
      - if `num` / iterationNum has no remainder add iteration num to accumulator
    - return accumulator 
*/

class PerfectNumber {
  static classify(num) {
    if (!PerfectNumber.isValid(num)) {
      throw new Error('Not a valid integer.');
    }
    
    let sum = PerfectNumber.aliquotSum(num);
    
    if (sum === num) return 'perfect';
    if (sum > num)   return 'abundant';
    if (sum < num)   return 'deficient';
  }
  
  static aliquotSum(num) {
    let iterateArr = [...new Array(num - 1)].map((_, idx) => idx + 1);
    return iterateArr.reduce((acc, ele) => {
      if ( (num % ele) === 0 ) {
        acc += ele
      }
      return acc;
    }, 0);
  }
  
  static isValid(num) {
    if (num <= 0 || (num % 1) !== 0) return false;
    return true;
  }
}

module.exports = PerfectNumber;