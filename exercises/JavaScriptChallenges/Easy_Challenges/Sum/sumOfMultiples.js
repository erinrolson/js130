/*
input: Natural number, set of numbers (set default to 3, 5)
output: Number (sum of all the multiples of numbers in set that are <
        the natural number)
rules:
  - return a number representing the sum of multiples of number(s)
    - you may be given a set of numbers in which case you must return
      the sum of the multiples of those numbers that is < the given 
      natural number 
    - you may be given a single number which you must return the sum of
      the multiples 3 and 5 that are less than the given number
  - 

Algorithm:
  - declare instance method `to` defines param `naturalNum`
    - declare iterateArr init to new array with length equal to `naturalNum` - 1
    - populate iterateArr with nums from min num in this.multilples increment by 1
    - declare acc
    - iterate over iterateArr
      - if element in iteration divisible by any of this.multiples add to acc
    - return acc

*/

class SumOfMultiples {
  static DEFAULT_MULTIPLES = [3, 5];
  
  static to(naturalNum) {
    return new SumOfMultiples().to(naturalNum);
  }
  
  constructor(...setOfNums) {
    this.multiples = (setOfNums.length) ? setOfNums : 
               SumOfMultiples.DEFAULT_MULTIPLES;
  }
  
  to(naturalNum) {
    let acc = 0;
    for (let count = Math.min(...this.multiples); count < naturalNum; count++) {
      if (this.multiples.some(mult => (count % mult) === 0)) acc += count;
    }
    return acc;
  }
}

module.exports = SumOfMultiples;
