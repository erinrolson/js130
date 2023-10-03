console.log(foo());

function foo() {// this function named `foo` will be 'overwritten' by the next `foo`
  console.log('Waiting for bar!');
}

function foo() {
  console.log(foo);
  function bar() {
    console.log('bar again');
  }

  bar();

  function bar() {
    console.log('bar again and again');
  }
}

// 1, 8, 16