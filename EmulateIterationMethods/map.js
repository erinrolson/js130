// map is an array iteration method which takes a callback as an argument
// and invokes the callback once for every element in the calling array,
// returns a new array populated with the return values of the callback 

function map(array, callback, thisArg) {
  let resultArray = [];
  let iterations = array.length; // implemented in case array mutated in callback
  
  for (let index = 0; index < iterations; index++) {
    let callbackReturnVal = callback.call(thisArg, array[index], index, array);
    resultArray.push(callbackReturnVal);
  }
  
  return resultArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

console.log({numbers});
console.log({values});