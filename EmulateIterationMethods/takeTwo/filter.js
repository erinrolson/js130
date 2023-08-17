// filter is an array iteration method that returns a new array populated with 
// the elements from the calling array that return truthy for a provided callback

function filter(array, callback, context) {
  let newArray = [];
  
  for (let index = 0; index < array.length; index++) {
    if ( callback.call(context, array[index], index, array) ) {
      newArray.push(array[index]);
    }
  }
  
  return newArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]