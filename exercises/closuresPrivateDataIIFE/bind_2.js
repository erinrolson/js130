// bind is a function prototype method that returns a new function,
// with the execution context permanently bound to the object passed as an arg

// What is partial function application?
// Partial function application requires a reduction in the number of arguments
// you must provide when you invoke a function 

function myBind(func, obj, ...boundArgs) {
  // return a new function that is hard-bound to obj and uses boundArgs
  return (...args) => func.call(obj, ...boundArgs, ...args);
}

function add(a, b) {
  return a + b;
}

let addFive = myBind(add, null, 5);
console.log(addFive(10));