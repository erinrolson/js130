class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(array) {
    return array.filter((word) => {
      return this.isAnagram(word);
    });
  }

  sortChars(word) {
    return [...word.toLowerCase()].sort();
  }

  isAnagram(testWord) {
    testWord = testWord.toLowerCase();
    if (testWord === this.word || testWord.length !== this.word.length) {
      return false;
    }

    testWord = this.sortChars(testWord).join('');
    let thisWord = this.sortChars(this.word).join('');

    return testWord === thisWord;
  }
}

module.exports = Anagram;