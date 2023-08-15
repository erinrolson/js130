function forEach(arr, callback, thisArg) {
  
  for (let index = 0; index < arr.length; index++) {
    callback.call(thisArg, arr[index], index, arr);
  }
}

