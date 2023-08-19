// make a frequency map function 

function frequencyMap(string) {
  let resultObj = {};
  
  [...string].forEach(char => {
    resultObj[char] = resultObj[char] ? resultObj[char] + 1 : 1;
  });
  
  return resultObj;
}

console.log(frequencyMap('apple'));

let string = 'apple';
let test = [...string].reduce((obj, char) => {
  //obj[char] = obj[char] ? obj[char] + 1 : 1;
  obj[char] = (obj[char] + 1) || 1;
  return obj;
}, {});

console.log(test);