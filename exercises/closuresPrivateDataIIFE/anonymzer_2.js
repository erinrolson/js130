'use strict';

const Account = (function() {
  
  const INVALID_PASSWORD = 'Invalid Password';
  const users = {};
  
  function anonymize() {
    const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
    const DIGITS = '0123456789';
    const SEQUENCE_LENGTH = 16;
    
    const CHARACTERS = [ ...ALPHA, ...ALPHA.toUpperCase(), ...DIGITS];
    
    let anonymous = '';
      
    for (let count = 1; count <= SEQUENCE_LENGTH; count++) {
      let randomIndex = Math.floor(Math.random() * CHARACTERS.length);
      anonymous += CHARACTERS[randomIndex];
    }
    
    return anonymous;
  }
  
  function validPassword(displayName, password) {
      return password === users[displayName]['password'];
  }
  
  function deleteOldDisplayName(displayName) {
    delete users[displayName];
  }
  
  function addNewUser(displayName, userObj) {
    users[displayName] = userObj;
  }
  
  return {
    init(email, password, firstName, lastName) {
      this.displayName = anonymize(); 
      
      // add user object containing private date to userList.
      addNewUser(this.displayName, {
        email,
        password,
        firstName,
        lastName,
      });
      
      return this;
    },
    
    reanonymize(password) {
      
      if (!validPassword(this.displayName, password)) {
        return INVALID_PASSWORD;
      }
      
      // maintain reference to user data before deleting from users
      const temp = users[this.displayName];
      deleteOldDisplayName(this.displayName);
      
      // reassign displayName property
      this.displayName = anonymize();
      
      // add back into users with new display name
      addNewUser(this.displayName, temp);

      return true;
    },
    
    resetPassword(password, newPassword) {
      if (!validPassword(this.displayName, password)) {
        return INVALID_PASSWORD;
      }
      
      users[this.displayName]['password'] = newPassword;
      return true;
    },
    
    firstName(password) {
      if (!validPassword(this.displayName, password)) {
        return INVALID_PASSWORD;
      }
      
      return users[this.displayName]['firstName'];
    },
    
    lastName(password) {
      if (!validPassword(this.displayName, password)) {
        return INVALID_PASSWORD;
      }
      
      return users[this.displayName]['lastName'];
    },
    
    email(password) {
      if (!validPassword(this.displayName, password)) {
        return INVALID_PASSWORD;
      }
      
      return users[this.displayName]['email'];
    },
  }
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');

// Note that the following two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// code does not work as might be intended.
console.log(fooBar.firstName('123456'));           // logs 'baz' but should log foo.
console.log(fooBar.email('123456'));               // 'baz@qux.com' but should 'foo@bar.com'
