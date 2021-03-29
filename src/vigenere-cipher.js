const CustomError = require("../extensions/custom-error");

/*
 *
 * This code needs refactoring. I don't have enough time for this now and
 * I'll do it in the near future.
 * Sorry for this :)
 *
*/ 

class VigenereCipheringMachine {

  constructor(type) {
    this.type = type;
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error();
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    str = str.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let result = [];
    let fullKey = [];
    let index = 0;
    let countRightSymbols = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/)) countRightSymbols++;
    }
    for (let i = 0; i < countRightSymbols; i++) {
      if(index === key.length) index = 0;
        fullKey.push(key[index]);
        index++;
    }
    let keysCodes = [];
    fullKey.forEach(element => {
      alphabet.forEach((value, index) => {
        if(element === value) keysCodes.push(index);
      });
    });
    let strCodes = [];
    str.forEach(element => {
      if (element.match(/[A-Z]/)) {
        alphabet.forEach((value, index) => {
          if(element === value) {
            strCodes.push(index);
          }
        });
      } else {
        strCodes.push(element);
      }
    });
    let encryptCode = [];
    let indexForEncryptCode = 0;
    for (let i = 0; i < str.length; i++) {
      if (typeof(strCodes[i]) === "string") {
        encryptCode.push(strCodes[i]);
      } else if (strCodes[i] + keysCodes[indexForEncryptCode] > 25) {
        encryptCode.push(strCodes[i] + keysCodes[indexForEncryptCode] - 26);
        indexForEncryptCode++;
      } else {
        encryptCode.push(strCodes[i] + keysCodes[indexForEncryptCode]);
        indexForEncryptCode++;
      }
    }
    for (let i = 0; i < encryptCode.length; i++) {
      if (typeof(encryptCode[i]) === "string") {
        result.push(encryptCode[i]);
      } else {
        result.push(alphabet[encryptCode[i]]);
      }
    }
    if (this.type === false) result.reverse();
    return result.join("");
  }
  
  decrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error();
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    str = str.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let result = [];
    let fullKey = [];
    let index = 0;
    let countRightSymbols = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/)) countRightSymbols++;
    }
    for (let i = 0; i < countRightSymbols; i++) {
      if(index === key.length) index = 0;
        fullKey.push(key[index]);
        index++;
    }
    let keysCodes = [];
    fullKey.forEach(element => {
      alphabet.forEach((value, index) => {
        if(element === value) keysCodes.push(index);
      });
    });
    let strCodes = [];
    str.forEach(element => {
      if (element.match(/[A-Z]/)) {
        alphabet.forEach((value, index) => {
          if(element === value) {
            strCodes.push(index);
          }
        });
      } else {
        strCodes.push(element);
      }
    });
    let encryptCode = [];
    let indexForEncryptCode = 0;
    for (let i = 0; i < str.length; i++) {
      if (typeof(strCodes[i]) === "string") {
        encryptCode.push(strCodes[i]);
      } else if (strCodes[i] - keysCodes[indexForEncryptCode] < 0) {
        encryptCode.push(26 + (strCodes[i] - keysCodes[indexForEncryptCode]));
        indexForEncryptCode++;
      } else {
        encryptCode.push(strCodes[i] - keysCodes[indexForEncryptCode]);
        indexForEncryptCode++;
      }
    }
    for (let i = 0; i < encryptCode.length; i++) {
      if (typeof(encryptCode[i]) === "string") {
        result.push(encryptCode[i]);
      } else {
        result.push(alphabet[encryptCode[i]]);
      }
    }
    if (this.type === false) result.reverse();
    return result.join("");
  }
}

module.exports = VigenereCipheringMachine;
