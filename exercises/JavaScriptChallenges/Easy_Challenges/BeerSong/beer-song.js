class BeerSong {
  static verse(verseNum) {
    let song = '';
    song += BeerSong._buildVerse(verseNum);
    return song;
  }

  static verses(...verseNums) {
    let [ maxVerse, minVerse ] = verseNums;
    verseNums = [...new Array(1 + (maxVerse - minVerse))]
      .map((_, idx) => maxVerse - idx);

    let song = '';

    verseNums.forEach( verse => {
      song += BeerSong._buildVerse(verse);
      if (verse !== minVerse) song += '\n';
    });

    return song;
  }

  static _buildVerse(num) {
    let stdVerse = `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
                   `Take one down and pass it around, ${num - 1} ${(num - 1 === 1) ? 'bottle' : 'bottles'} of beer ` +
                   `on the wall.\n`;

    let lastBtlVerse = `1 bottle of beer on the wall, 1 bottle of beer.\n` +
                     `Take it down and pass it around, no more bottles ` +
                     `of beer on the wall.\n`;

    let emptyVerse = "No more bottles of beer on the wall, no more " +
                     "bottles of beer.\nGo to the store and buy some " +
                     "more, 99 bottles of beer on the wall.\n";

    if (num >= 2) return stdVerse;
    if (num === 1) return lastBtlVerse;
    return emptyVerse;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;
