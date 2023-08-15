// `bind` is a function prototype method that returns a copy of the calling 
// function whose execution context is permanently bound to the execution context
// passed as an argument to the function.

function myBind(func, context, ...args) {
  return function(...otherArgs) {
    return func.apply(context, [...args, ...otherArgs]);
  }
}

function list(...args) {
  return args;
}

let leadsWithNinetyNine = myBind(list, null, 99);
console.log(leadsWithNinetyNine(1,2,3,4,5));

function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15

