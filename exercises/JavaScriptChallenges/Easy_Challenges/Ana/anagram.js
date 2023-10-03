/*
input: Array (of strings)
output: Array (of strings that are valid anagrams)
rules:
  - return an array populated with strings from the argument array
    that are valid anagrams of the Anagram instance. 
  - if there are no matches return an empty array
  - an anagram is a string with the exact same characters, just in a 
    different order 

Data Structure: 
 - Array -> each string transfomed to an array of character elements
 - Array -> of strings that are an anagram of the instance
 
Algorithm:
  - declare method `match` that defines `arr` as a parameter
    - declare control and init to this.word transformed to array, sorted,
      and transformed to a string 
      
    - iterate over every string in `arr` and transform to an array
      of characters. 
    - sort the array of characters and transform to a string 
    
    - if string in iteration is equal to control, add the original string
      to return array 
  
  - return array of strings
*/

class Anagram {
  constructor(word) {
    this.word = word;
  }
  
  match(arr) {
    let control = [...this.word.toLowerCase()].sort().join('');
    
    return arr.reduce( (acc, ele) => {
      if (ele.toLowerCase() === this.word.toLowerCase()) return acc;
      
      let compareStr = [...ele.toLowerCase()].sort().join('');
      
      if (compareStr === control) {
        acc.push(ele);
      }
      
      return acc;
    }, []);
  }
}

let test = new Anagram('master');
//console.log(test.match(['stream', 'pigeon', 'maters']));
module.exports = Anagram;