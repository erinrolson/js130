function delayLog() {
  //var i;
  for (var i = 1; i <= 10; i++) {
    setTimeout( () => console.log(i), i*1000 );
  }
}

delayLog();

// the difference is based on variables declared with var having
// function scope and variabled declared with let having block scope
