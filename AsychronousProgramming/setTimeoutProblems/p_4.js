// surprised by the LS solution here. How does s() come before q()?
setTimeout(function() {
  setTimeout(function() {
    q(); // 6
  }, 15);

  d(); // 3

  setTimeout(function() {
    n(); // 5
  }, 5);

  z(); // 4
}, 10);

setTimeout(function() {
  s(); // 7
}, 20);

setTimeout(function() {
  f(); // 2
});

g(); // 1 

