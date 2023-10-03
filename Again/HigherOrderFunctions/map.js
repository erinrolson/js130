/*
map is an array iteration method that returns a new array populated with the 
return values of a provided callback function which is invoked for every element
in the calling array. `thisArg` may be provided as an optional second argument. 

callback formatted:
callback(ele, idx, array)
*/

function map(array, callback, context) {
  let result = [];
  for (let idx = 0; idx < array.length; idx++) {
    let value = callback.call(context, array[idx], idx, array);
    result.push(value);
  }
  return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]