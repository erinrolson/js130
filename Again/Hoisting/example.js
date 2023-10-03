console.log(greet); // function
greet(); // logs 'Hello!' to the console

var greet = 'Hello! The string.'; // greet identifier reassigned to string 'Hello!'
console.log(greet);
greet(); // TypeError: greet is not a function

function greet() {
  console.log('Hello!');
}

//written as 'hoisted'
function greet() {
  console.log('Hello!');
}

console.log(greet); // function
greet(); // logs 'Hello!' to the console

greet = 'Hello! The string.'; // greet identifier reassigned to string 'Hello!'
console.log(greet); // logs 'Hello! The string.' to the console.
greet(); // TypeError: greet is not a function


