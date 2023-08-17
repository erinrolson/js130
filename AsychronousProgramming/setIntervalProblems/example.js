function save() {
  // send some values to the server for safekeeping 
}

// call save() every 10 seconds
var id = setInterval(save(), 10000); // set interval returns an identifier

// Later (when user submits form?) we stop the function from executing any longer
clearInterval(id);