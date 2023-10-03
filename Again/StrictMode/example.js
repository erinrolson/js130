function logIt(greeting, message) {
  console.log(greeting, message);
}

function greeter(greet) {
  return function(anyMessage) {
    return logIt(greet, anyMessage);
  }
}

let englishGreeter = greeter('Hello!');
englishGreeter('This is a message.');

