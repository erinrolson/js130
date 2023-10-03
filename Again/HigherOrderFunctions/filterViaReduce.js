/*
emulate the filter method using Array.prototype.reduce 

filter returns a new array populated with the elements that return truthy for 
a provided callback function
*/

function filter(array, callback, context) {
  return array.reduce((acc, ele, idx, array) => {
    if ( callback.call(context, acc, ele, idx, array) ) {
      acc.push(ele);
    }
    return acc;
  }, []);
}