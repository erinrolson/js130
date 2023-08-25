// This is a pretty odd example and I had some trouble following it.
// Maybe I'm just tired?

// Why does the LS solution use apply? Am I missing something?
// There are other student solutions that don't use apply...

// returns a new function that invokes the method passed as an argument using
// the passed object as the caller. 
function delegate(obj, method, ...args) {
  // use obj to call method and pass args
  return () => obj[method](...args);
  
}

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'