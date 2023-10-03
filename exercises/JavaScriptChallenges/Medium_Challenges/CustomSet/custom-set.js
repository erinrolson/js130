/*
Custom Set (Medium Challenges)

Input:
Output:
Rules:
  - create a custom set type that only has to accomodate numbers

Mental Model:

Data Structure:

Algorithm:

*/
// passed an array of numeric values
class CustomSet {
  constructor(array = []) {
    this.set = [];
    array.forEach(ele => this.add(ele));
  }

  add(number) {
    // return reference to custom set object 
    // only add a value if it is not currently in set
    // takes one value at a time 
    if (!this.set.includes(number)) {
      this.set.push(number);
    }

    return this;
  }

  isEmpty() {
    // return appropriate boolean value
    return this.set.length === 0;
  }

  contains(number) {
    // return appropriate boolean value
    return this.set.includes(number);
  }

  isSubset(otherSubset) {
   // a set is a subset if all of its elements are contained in the other set
   // RULES
   // empty subset is a subset of an empty subset
   // non-empty set is not a subset of empty subset 
    return this.set.every(ele => otherSubset.contains(ele));
  }

  isDisjoint(otherSubset) {
    // return an appropriate boolean value 
    // disjoint: sets are disjoint if they share no elements
    return this.set.every(ele => !otherSubset.contains(ele));
  }

  isSame(otherSubset) {
    // return an appropriate boolean value
    // isSame: sets with the same elements are equal
    // need to be the same length and share every value.
    if (this.size() === otherSubset.size() && this.isSubset(otherSubset)) {
      return true;
    }
    return false;
  }

  size() {
    return this.set.length;
  }

  intersection(otherSet) {
    // return a new custom set object populated with shared set elements 
    // return empty set if no shared elements
    let result = new CustomSet();
    this.set.forEach(ele => {
      if (otherSet.contains(ele)) {
        result.add(ele);
      }
    });
    return result;
  }

  difference(otherSet) {
    //difference of a set is a set of all elements that are only in the first set (calling set)
    // return a new custom set object 
    let result = new CustomSet();
    this.set.forEach(ele => {
      if (!otherSet.contains(ele)) {
        result.add(ele);
      }
    });
    return result;
  }

  union(otherSet) {
    // union: returns a set of all (unique) elements shared between sets
    // return a new custom set 
    let result = new CustomSet();

    this.set.forEach(ele => result.add(ele));
    otherSet.set.forEach(ele => result.add(ele));

    return result;
  }
}

module.exports = CustomSet;