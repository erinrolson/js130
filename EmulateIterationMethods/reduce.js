// reduce is an array iteration method that is used to distill an array of elements
// to a single value by invoking a provided callback function on every element of 
// the calling array. reduce takes two arguments, a callback function to be invoked
// for every element in the calling array and an optional initial value for the 
// accumulator parameter. The default value for the accumulator will otherwise
// be the first element from the calling array. 
// The accumulator is the return value of the reduce method. 

function reduce(array, callback, accumulator) {
  let iterationStart = (accumulator === undefined) ? 1 : 0; 
  accumulator = (iterationStart) ? array[0] : accumulator;
  
  for (let index = iterationStart; index < array.length; index++) {
    accumulator = callback(accumulator, array[index]);
  }
  
  return accumulator;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]