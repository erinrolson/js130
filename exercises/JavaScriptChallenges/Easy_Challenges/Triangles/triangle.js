/*
Some thoughts... when I identify a 'crux' part of a problem I should make sure
to thoughtfully PEDAC it specifically. A general Pedac to organize the larger
problem and a more spec. pedac to tackle a particularly challenging part of the 
implementation. I didn't do this here and struggled with bugs in my 
validSumLengths method!

input: 3 comma sep. numbers (constructor)
output: string rep. the type of triangle
        - "equilateral"
        - "scalene"
        - "isosceles"
rules:
    - all sides must have a length > 0
    - sum of the lengths of any two sides must be > the length of 
      the third side

mental model: 

data structure:

Algorithm: 
*/

class Triangle {
  constructor(side1, side2, side3) {
    // throw error if any side is not a valid length
    // throw error if sum of sides does not pass test
    this.sides = [side1, side2, side3];
    
    this.validLengths();
    this.validSumLengths();
  }
  
  kind() {
    // return a string rep. the 'kind' of triangle
    
    // equilateral -> all three sides the same
    if ( new Set(this.sides).size === 1 ) return 'equilateral';
    
    // isosceles -> two sides the same length 
    if ( new Set(this.sides).size === 2 ) return 'isosceles';
    
    return 'scalene'
  }
  
  validLengths() {
    // side > 0
    if ( !this.sides.every(side => side > 0) ) {
      throw new Error('Must not have a side length <= 0');
    }
  }
  
  validSumLengths() {
    //sum of the lengths of any two sides must be > the length of 
      //the third side
    let indexes = [0, 1, 2];
    for (let outerIdx = 0; outerIdx <= (this.sides.length - 1); outerIdx++ ) {
      for (let innerIdx = outerIdx + 1; innerIdx < this.sides.length; innerIdx++) {
        let otherIdx = indexes.filter( idx => (idx !== outerIdx) && (idx !== innerIdx)).pop();
        let sum = this.sides[outerIdx] + this.sides[innerIdx];

        if ( !(sum > this.sides[otherIdx]) ) {
          throw new Error('Lengths of any two sides must be > length of 3rd side');
        }
      }
    }
  }
  
}

module.exports = Triangle;