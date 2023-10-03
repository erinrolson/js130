/*
input: String
output: Number (represents the number of diff. chars at the
same location in the two strings)
rules:
  - return a number that represents the number of different char.
    combos at the same index in a string
  - must use the smallest string as the limiting distance

mental model:
string 1: GAGCC -> [G,A,G,C,C]
string 2: CATCG -> [C,A,T,C,G]

**find the shorter string and use that to iterate

just use a standard for loop and add to count when chars dont match

data structure:

Algorithm:

*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(string) {
    let shorter = (string.length < this.strand.length) ? string.length :
      this.strand.length;

    let hammingDistance = 0;

    for (let idx = 0; idx < shorter; idx++) {
      if (this.strand[idx] !== string[idx]) hammingDistance += 1;
    }

    return hammingDistance;
  }
}

module.exports = DNA;