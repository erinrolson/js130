// `bind` is a function prototype method that returns a copy of the calling 
// function whose execution context is permanently bound to the execution context
// passed as an argument to the function.

function myBind(func, context) {
  return function() {
    func.apply(context);
  }
}