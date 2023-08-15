// function map(array, callback, thisArg) {
//   let resultArray = [];
//   let iterations = array.length; // implemented in case array mutated in callback
  
//   for (let index = 0; index < iterations; index++) {
//     let callbackReturnVal = callback.call(thisArg, array[index], index, array);
//     resultArray.push(callbackReturnVal);
//   }
  
//   return resultArray;
// }

function map(array, callback) {
  return array.reduce((transformedArr, ele) => {
    transformedArr.push(callback(ele));
    return transformedArr;
  }, []);
}

let arr = [1, 2, 3];
console.log(map(arr, val => val * 2));