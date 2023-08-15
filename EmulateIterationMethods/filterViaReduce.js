// write a function that works like the filter function, but use
// array.prototype.reduce to filter the input array
function callback(value) {
  return (value % 2 === 0);
}

function filter(array, callback) {
  return array.reduce((filteredItems, ele) => {
    if (callback(ele)) {
      filteredItems.push(ele);
    }
    return filteredItems;
  }, []);
}

let result = filter([1,2,3,4,5,6], callback);

console.log(result);