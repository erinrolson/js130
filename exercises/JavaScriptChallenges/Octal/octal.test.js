let Octal = require('./octal.js');

describe("Octal", () => {
  test("octal 1 is decimal 1", () => {
    let octal = new Octal('1');
    expect(octal.toDecimal()).toBe(1);
  });

  xtest("octal 10 is decimal 8", () => {
    let octal = new Octal('10');
    expect(octal.toDecimal()).toBe(8);
  });

  xtest("octal 17 is decimal 15", () => {
    let octal = new Octal('17');
    expect(octal.toDecimal()).toBe(15);
  });

  xtest("octal 11 is decimal 9", () => {
    let octal = new Octal('11');
    expect(octal.toDecimal()).toEqual(9);
  });

  xtest("octal 130 is decimal 88", () => {
    let octal = new Octal('130');
    expect(octal.toDecimal()).toBe(88);
  });

  xtest("octal 2047 is decimal 1063", () => {
    let octal = new Octal('2047');
    expect(octal.toDecimal()).toBe(1063);
  });

  xtest("octal 7777 is decimal 4095", () => {
    let octal = new Octal('7777');
    expect(octal.toDecimal()).toBe(4095);
  });

  xtest("octal 1234567 is decimal 342391", () => {
    let octal = new Octal('1234567');
    expect(octal.toDecimal()).toBe(342391);
  });

  xtest("invalid octal is decimal 0", () => {
    let octal = new Octal('carrot');
    expect(octal.toDecimal()).toBe(0);
  });

  xtest("8 is seeen as invalid and returns 0", () => {
    let octal = new Octal('8');
    expect(octal.toDecimal()).toBe(0);
  });

  xtest("9 is seeen as invalid and returns 0", () => {
    let octal = new Octal('9');
    expect(octal.toDecimal()).toBe(0);
  });

  xtest("6789 is seeen as invalid and returns 0", () => {
    let octal = new Octal('6789');
    expect(octal.toDecimal()).toBe(0);
  });

  xtest("abc1z is seen as invalid and returns 0", () => {
    let octal = new Octal('abc1z');
    expect(octal.toDecimal()).toBe(0);
  });

  xtest("valid octal formatted string 011 is decimal 9", () => {
    let octal = new Octal('011');
    expect(octal.toDecimal()).toBe(9);
  });

  xtest("234abc is seen as invalid and returns 0", () => {
    let octal = new Octal('234abc');
    expect(octal.toDecimal()).toBe(0);
  });
});