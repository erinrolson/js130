// create a stack -> array like data structure
// can only add new elements to end and remove last inserted element

// essentially an object factory that leverages closure to make `stack` 
// private and force developers to use interface
// each method has a closure with references to variables it needs 

function Stack() {
  let stack = [];
  
  return {
    push(val) {
      stack.push(val);
    },
    
    pop() {
      return stack.pop();
    },
    
    printStack() {
      stack.forEach(ele => console.log(ele));
    }
  }
}