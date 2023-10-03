class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(comparisonStrand) {
    let dist = Math.abs(this.strand.length - comparisonStrand.length);
    let longestStrand = (this.strand.length >= comparisonStrand.length) ?
      this.strand : comparisonStrand;

    let hammingDist = 0;

    for (let index = 0; index < (longestStrand.length - dist); index++) {
      if (this.strand[index] !== comparisonStrand[index]) hammingDist += 1;
    }

    return hammingDist;
  }
}

module.exports = DNA;