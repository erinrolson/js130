/*
filter is an array iteration method which returns a new array populated with
elements from the calling array that return truthy for a provided callback function.
An optional `thisArg` may be passed as the second argument to provide context for
the callback function invocations. 

The callback function is intended to be formatted accordingly:
callback(ele, idx, array)
*/

function filter(array, callback, context) {
  let result = [];
  
  for (let idx = 0; idx < array.length; idx++) {
    if ( callback.call(context, array[idx], idx, array) ) {
      result.push(array[idx]);
    }
  }
  
  return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));