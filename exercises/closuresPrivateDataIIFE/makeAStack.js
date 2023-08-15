function newStack() {
  let stack = [];
  
  return {
    push(val) {
      stack.push(val);
    },
    
    pop() {
      stack.pop();
    },
    
    printStack() {
      stack.forEach(val => console.log(val));
    }
  };
}

let stack = newStack();
