"use strict"

function makeList() {
  let privateList = [];
  
  // returned function has private access to `list` variable
  return (arg) => {
    // if no arg passed log list items to console
      // if no list items log 'The list is empty.' to console
    if (arg === undefined) {
      if (privateList.length) {
        privateList.forEach(item => console.log(item));
      } else {
        console.log('The list is empty.');
      }
      return;
    }
    
    // if arg not in list, add it 
    if (!privateList.includes(arg)) {
      privateList.push(arg);
      console.log(`${arg} was added!`);
    }
    // if arg in list, remove it from the list
    else if (privateList.includes(arg)) {
      privateList.splice(privateList.indexOf(arg), 1);
      console.log(`${arg} was removed!`);
    }
  }
}

let list = makeList();
list();

list('make breakfast');
list('read book');
list();
list('make breakfast');
list();