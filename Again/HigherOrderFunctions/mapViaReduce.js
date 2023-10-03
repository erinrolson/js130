/*
map is an array iteration method that returns a new array populated with the
return values of each callback invocation
*/

function map(array, callback, context) {
  return array.reduce((acc, ele) => {
    acc.push(callback(ele));
    return acc;
  }, []);
}