/*
input: Number (represent number of consecutive digits)
output: Multidimentional Array (of all possible consecutive values of a given length)
rules:
  - return a multidimentional array populated with all the valid consecutive values
    from a number string. The array should contain the values as individual numbers.
  - if a length value is greater than string length throw error

Mental Model: 
  - 

Data structure:
- Multidimentional Array of all valid consecutive values 

Algorithm:
  - declare method slices defines parameter length
    - if length > length of calling object numberString property throw error
    
    - declare result init to empty array
    
    - start at index 0 continue iterating while index <= numberString length - length
      - increment index each iteration
      
      - declare str init to current idx to idx + length from numberString
      - split str into individual elements and transform to array
      - add newly created array to result 
    
*/

class Series {
  constructor(numberString) {
    this.numberString = numberString;
  }
  
  slices(length) {
    if (length > this.numberString.length) throw new Error();
    
    let result = [];
    
    for (let idx = 0; idx <= this.numberString.length - length; idx++) {
      //console.log({idx});
      let str = this.numberString.slice(idx, idx + length );
      // console.log(str);
      result.push(str.split('').map(ele => Number(ele)));
      //console.log(result);
    }
    
    //console.log(result);
    return result;
  }
}

// let test = new Series('01234');
// console.log(test.slices(1));

module.exports = Series;