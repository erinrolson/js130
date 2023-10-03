/*
forEach is an iteration method that invokes a provided callback for each element
in the caller and returns undefined
*/

function objForEach(object, callback) {
  for (let key in object) {
    // only invoke the callback for own properties of the object
    if (object.hasOwnProperty(key)) {
      callback(key, object[key]); // property, value 
    }
    
  }
}


let obj = { foo: 1, bar: 2, qux: 3 };
objForEach(obj, (property, value) => {
  console.log(`the value of ${property} is ${value}`);
});