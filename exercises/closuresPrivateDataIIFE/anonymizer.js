/*
To meet the requirements of the problem we need to use an IIFE that returns
an account object. 

*/
const Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;
  
  function invalidPassword() {
    return 'Invalid Password';
  }
  
  function validatePassword(password) {
    return userPassword === password;
  }
  
  function anonymize() {
    const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const CHARS_LENGTH = CHARS.length;
    const DISPLAY_NAME_LENGTH = 16;
    let displayName = '';
    
    for (let i = 0; i < DISPLAY_NAME_LENGTH; i++) {
      let index = Math.floor(Math.random() * CHARS_LENGTH);
      displayName += CHARS[index];
    }
    
    return displayName;
  }
  
  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize(); 
      return this;
    },
    
    reanonymize(password) {
      if ( validatePassword(password) ) {
        this.displayName = anonymize();
        return true;
      }
      
      return invalidPassword();
      
    },
    
    resetPassword(currentPassword, newPassword) {
  
      if ( validatePassword(currentPassword) ) {
        userPassword = newPassword;
        return true;
      }
      
      return invalidPassword();
    },
    
    firstName(password) {
      // if password legit, return user's first name 
      // else return 'Invalid Password';
      if ( validatePassword(password) ) {
        return userFirstName;
      }
      
      return invalidPassword();
    },
    
    lastName(password) {
      // if password legit, return user last name
      // else return 'Invalid Password'
      if ( validatePassword(password) ) {
        return userLastName;
      }
      
      return invalidPassword();
    },
    
    email(password) {
      // if password legit, return user email
      // else return 'Invalid Password'
      if ( validatePassword(password) ) {
        return userEmail;
      }
      
      return invalidPassword();
    },
  }
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
