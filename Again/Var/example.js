'use strict'
/*
What is `var`?
  - var is a variable declaration in JavaScript that creates 
    function scoped variables.
  - variables declared with var in the top level of a program 
    become properties of the global object (not when running a
    file with node). This is best demonstrated in a REPL.  
  - variables declared with var can be reassigned, no way to 
    create a constant with var. 
    
Differences Between let and var?
  - You can have multiple `var` declarations with the same
    identifier name. `let` will throw a SytaxError in this
    case. 
  - variables declared with `var` are function scoped and 
    variables declared with `let` are block scoped. 
  - `let` declarations only create a variable. There is no
    situation in which a variable declared with `let` may 
    become a property of the global object.
  - Variables declared with `let` are safer to use in a program 
    than variables declared with `var` because variables declared 
    with `let` can never become properties of the global object
    as variables declared with `var` can when declared at the 
    top level of a program. Additionally, variables declared with 
    `let` may never have identical identifiers whereas variables
    declared with `var` can; allowing the 'final' declaration in
    execution mode to 'overwrite' a previously declared variable 
    with the same identifier. 
*/

var test;
var test = 'string';

console.log(test);