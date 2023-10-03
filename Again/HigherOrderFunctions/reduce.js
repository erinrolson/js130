/*
reduce is an array iteration method which takes a callback and a provided
accumulator value. If no accumulator is provided the default value is the first
element in the calling array. The return value of the callback is used to
reassign the value of the accumulator on each iteration. The accumulator is the
return value for the method. 

callback formatting:
callback(acc, ele, idx, array)
*/

function reduce(array, callback, accumulator, context) {
  let idx = 0;
  if (accumulator === undefined) {
    idx = 1;
    accumulator = array[0];
  }

  for ( ; idx < array.length; idx++) {
    accumulator = callback.call(context, accumulator, array[idx], idx, array);
  }
  
  return accumulator;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]