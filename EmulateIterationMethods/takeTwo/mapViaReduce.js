// rewrite the map function using Array.prototype.reduce
// map invokes the callback and always returns an array with the same length
// of the calling array, populated with the results of the callback

function map(array, callback) {
  return array.reduce((newArray, ele) => {
    newArray.push(callback(ele));
    return newArray;
  }, []);
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]