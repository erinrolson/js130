"use strict"
/*
In problem 2 we returned a function with a private `list`, but the interface
was very unclear to the user.

In this problem we return an object that has access to methods to make a clear
interface.

There is no way for a developer to access the privateList variable directly!
Each method leverages closure to retain access the the `privateList` and iteract
with it. 
*/

function makeList() {
  let privateList = [];
  
  return {
    add(item) {
      privateList.push(item);
      console.log(`${item} added!`);
    },
    
    remove(item) {
      privateList.splice(privateList.indexOf(item), 1);
      console.log(`${item} removed!`);
    },
    
    list() {
      if (privateList.length) {
        privateList.forEach(item => console.log(item));
      } else {
        console.log('The list is empty.');
      }
    }
  }
}

let list = makeList();
list.add('peas');

list.list();

list.add('corn');
list.list();

list.remove('peas');
list.list();