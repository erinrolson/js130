function afterNSeconds(callback, secondsDelay) {
  secondsDelay *= 1000;
  setTimeout(callback, secondsDelay);
}

afterNSeconds(() => console.log('hello'), 5);
