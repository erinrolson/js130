const Todo = require('./todo.js'); // is this correct??

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  
  toString() {
    let title = `--- ${this.getTitle()} ---`;
    let list = this.todos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`;
    
  }
  
  forEach(callback) {
    this.todos.forEach(callback);
  }
  
  filter(callback) {
    let newList = new TodoList(this.title);
    let filtered = this.todos.filter(callback)
                             .forEach(todo => newList.add(todo));
    return newList;
  }
  
  toArray() {
    return JSON.parse(JSON.stringify(this.todos));
  }
  
  getTitle() {
    return this.title;
  }
  
  findByTitle(title) {
    return this.filter(todo => todo.getTitle() === title).first();
  }
  
  add(todo) {
    if (todo instanceof Todo) {
      this.todos.push(todo);
    } else {
      throw new TypeError('Error: object is not an instance of the Todo class!');
    }
  }
  
  size() {
    return this.todos.length;
  }
  
  first() {
    return this.todos[0];
  }
  
  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }
  
  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }
  
  markDoneAt(index) {
    this.itemAt(index).markDone();
  }
  
  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }
  
  markDone(title) {
    let foundTodo = this.findByTitle(title);
    
    if (foundTodo) {
      foundTodo.markDone();
    }
  }
  
  markAllDone() {
    this.forEach(todo => todo.markDone());
  }
  
  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }
  
  isDone() {
    return this.todos.every( todo => todo.isDone() );
  }
  
  allDone() {
    return this.filter(todo => todo.isDone());
  }
  
  allNotDone() {
    return this.filter(todo => !todo.isDone());
  }
  
  shift() {
    return this.todos.shift();
  }
  
  pop() {
    return this.todos.pop()
  }
  
  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1).shift();
  }
}

module.exports = TodoList;