// reduce is an array iteration method that takes a provided callback function,
// executes the callback for each element in the calling array and returns a 
// single value based on the provided accumulator

function reduce(array, callback, accumulator, context) {
  let startIndex = (accumulator === undefined) ? 1 : 0;
  accumulator = (accumulator === undefined) ? array[0] : accumulator;
  
  for (let index = startIndex ; index < array.length; index++) {
    accumulator = callback.call(context, accumulator, array[index]);
  }
  
  return accumulator;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]

