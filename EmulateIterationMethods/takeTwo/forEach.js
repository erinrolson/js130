// forEach is an array iteration method that takes a callback function
// and invokes the function once per element in the calling array 
// how can we
function forEach(array, callback, context) {
  for (let idx = 0; idx < array.length; idx++) {
    let element = array[idx];
    callback.call(context, element, idx, array);
  }
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

forEach([1,2,3], foo.showItem, foo);

forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});

