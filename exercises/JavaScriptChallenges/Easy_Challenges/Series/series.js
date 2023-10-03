/*
input: - string (digit string)
       - number (series value)
output: multidimensional array (of valid consecutive digits)
rules: 
  - if series value is >  digit string length -> throw error
*/

class Series {
  constructor(digitString) {
    this.digitString = digitString;
  }
  
  // slices(seriesValue) {
  //   if (seriesValue > this.digitString.length) {
  //     throw new Error('Series value cannot be greater than digit string length.');
  //   }
    
  //   let validSeries = [];
  //   for (let outer = 0; outer <= (this.digitString.length - seriesValue); outer++) {

  //     let series = [ Number(this.digitString[outer]) ];
  //     for (let inner = outer + 1; inner < this.digitString.length; inner++) {
  //       if (series.length === seriesValue) {
  //         break;
  //       }
  //       series.push(Number(this.digitString[inner]));
  //     }
      
  //     validSeries.push(series);
  //   }
    
  //   return validSeries;
  // }
  
  slices(number) {
    // all values in return array must be numbers
    let digits = [...this.digitString].map(digit => Number(digit));
    
    // if series number is > the number of digits in string throw error
    if (number > digits.length) throw new Error();
    
    // build the multidimensional array
    return digits.reduce((seriesArr, digit, index) => {
      if (index <= digits.length - number) {
        seriesArr.push( digits.slice(index, index + number) );
      }
      
      return seriesArr;
    }, []);
  }
}

// let test = new Series('01234');
// console.log(test.slices(2));

module.exports = Series;