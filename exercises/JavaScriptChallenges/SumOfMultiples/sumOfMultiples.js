/*
input:
  - natural number
  - set of one or more other numbers (3 and 5 default)
output:
  - sum of all of the multiples in the set that are less than the input
    natural number
rules:
  - if no set of numbers given, use 3 and 5

Mental Model:
 natural Number = 20
 set of multiples = [3, 5]

 What are all the natural numbers < 20 that are multiples of 3 or 5?

 min multiple is smallest number in set (3 in this case)
 3 % 3 === 0 || 3 % 5 === 0 ? if yes add to sum

 return sum
*/

class SumOfMultiples {
  // couldn't set default vals and use rest syntax...
  // if no values given for constructor, rest syntax defaults to empty array!
  constructor(...multiples) {
    this.multiples = (multiples.length > 0) ? multiples : [3, 5];
  }

  static to(upToNum) {
    let obj = new SumOfMultiples();
    return obj.to(upToNum);
  }
  
  to(upToNum) {
    let minNum = Math.min(...this.multiples);
    let sum = 0;

    for (let val = minNum; val < upToNum; val++) {
      if (this.isMultiple(val)) sum += val;
    }
    return sum;
  }
  
  isMultiple(val) {
    return this.multiples.some( div => val % div === 0);
  }
}

module.exports = SumOfMultiples;