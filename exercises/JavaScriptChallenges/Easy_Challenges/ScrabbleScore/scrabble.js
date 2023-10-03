class Scrabble {
  static POINTS = {
    AEIOULNRST : 1,
    DG         : 2,
    BCMP       : 3,
    FHVWY      : 4,
    K          : 5,
    JX         : 8,
    QZ         : 10,
  };

  static score(word) {
    return new Scrabble(word).score();
  }

  constructor(word) {
    this.word = (typeof word !== 'string') ? '' : word.trim().toUpperCase();
  }

  score() {
    return [...this.word].reduce((score, char) => {
      for (let prop in Scrabble.POINTS) {
        if ( [...prop].includes(char) ) {
          score += Scrabble.POINTS[prop];
        }
      }
      return score;
    }, 0);
  }
}

module.exports = Scrabble;