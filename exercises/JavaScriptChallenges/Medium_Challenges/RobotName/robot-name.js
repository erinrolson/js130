/*
Robot.reset method PEDAC

input: N/A
output: undefined
rules:
  - create a randomly generated string where the first two characters
    are random characters from the alphabet, uppercased. The last three
    characters are random numbers.
  - May not be the same as any other robot instance name. 

Mental Model:

Data Structure:

Algorithm:

*/

class Robot {
  static ALL_ROBOTS = [];
  
  constructor() {
    this.robotName = this.generateUniqueName();
    Robot.ALL_ROBOTS.push(this.robotName);
  }
  
  name() {
    return this.robotName;
  }
  
  reset() {
    let rmIdx = Robot.ALL_ROBOTS.indexOf(this.name());
    
    this.robotName = this.generateUniqueName();
    
    Robot.ALL_ROBOTS.splice(rmIdx, 1);
  }
  
  generateUniqueName() {
    let newName = this.generateName();
    
    while(this.checkNameOverlap(newName)) {
      newName = this.generateName();
    }
    
    return newName;
  }
  
  generateName() {
    return this.getRandomChars() + this.getRandomDigits();
  }
  
  checkNameOverlap(name) {
    return Robot.ALL_ROBOTS.includes(name);
  }
  
  getRandomChars() {
    const ALPHA  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    return [...new Array(2)].map( () => {
      let randomIdx = this._getRandomNumTo(ALPHA.length);
      return ALPHA[randomIdx];
    }).join('');
    
  }
  
  getRandomDigits() {
    const DIGITS = '0123456789';
    
    return [...new Array(3)].map( () => {
      let randomIdx = this._getRandomNumTo(DIGITS.length);
      return DIGITS[randomIdx];
    }).join('');
    
  }
  
  _getRandomNumTo(num) {
    return (Math.floor( (Math.random() * num) ));
  }
}

module.exports = Robot;
