// refactor the function definition (don't alter function invocation), so that we
// do not need to use the `arguments` object 

function sum(...values) {
  //values = Array.prototype.slice.call(arguments); // makes a copy of the arguments array

  return values.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16
