// write a function that works like the filter function but use 
// Array.prototype.reduce to transform the input array
// filter returns a new array populated with the elements that return truthy
// for a provided callback function

function filter(array, callback) {
  return array.reduce((filteredArr, ele) => {
    if (callback(ele)) {
      filteredArr.push(ele);
    }
    return filteredArr;
  }, []);
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]