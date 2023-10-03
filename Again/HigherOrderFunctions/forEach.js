/*
forEach is an array iteration method that takes a callback and an optional `thisArg`
as an argument and invokes the callback in the provided context for every element
in the calling array, returning `undefined` when finished. 

The callback is expected to be formatted as such callback(ele, idx, array). forEach
can pass the current element in iteration, the element's index, and the calling array
as arguments to the callback. 
*/

function forEach(array, callback, context) {
  // invoke the callback for every element in array
  for (let idx = 0; idx < array.length; idx++) {
    // Function.prototype.call invokes the function with a provided context
    // argument and function arguments as comma separated values. 
    callback.call(context, array[idx], idx, array); 
  }
  // implicitly returns `undefined` since no explicit return statement
}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
[1, 2, 3].forEach(foo.showItem, foo);
//[4, 5, 6].forEach(foo.showItem);