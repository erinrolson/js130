/*
input: String
output: Number (representing the total score computed from each character)
rules:
  - From a Scrabble instance, return the total value of the word. 

Data Structure: 
Object to hold scores with associated characters
{
  1 : [A, E, I, O, U, L, N, R, S, T],
  2 : [D, G],
  3 : [B, C, M, P],
  4 : [F, H, V, W, Y],
  5 : [K],
  8 : [J, X], 
  10: [Q, Z],
}

Algorithm:
  - declare method `score` takes no params
    - iterate over every character in this.word
      - pass char as argument to getValue and add return value to accumulator. 
    - return accumulator
  
  - declare method getValue defines `char` param
    - iterate over keys in object 
      - if char is included in a key's associated array value 
        - return the key an a number 

*/

class Scrabble {
  static CHARACTER_POINTS = {
  1 : ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2 : ['D', 'G'],
  3 : ['B', 'C', 'M', 'P'],
  4 : ['F', 'H', 'V', 'W', 'Y'],
  5 : ['K'],
  8 : ['J', 'X'], 
  10: ['Q', 'Z'],
  }
  
  static characterValue(char) {
    char = char.toUpperCase();
    for (let key in Scrabble.CHARACTER_POINTS) {
      if (Scrabble.CHARACTER_POINTS[key].includes(char)) return Number(key);
    }
  }
  
  static score(word) {
    return new Scrabble(word).score();
  }

  constructor(word) {
    this.word = word;
  }
  
  score() {
    if (typeof this.word !== 'string') return 0;
    
    return [...this.word.trim()].reduce( (acc, char) => {
      acc += Scrabble.characterValue(char);
      return acc;
    }, 0);
  }
}

// let test = new Scrabble("street");
// console.log(test.score());

module.exports = Scrabble;