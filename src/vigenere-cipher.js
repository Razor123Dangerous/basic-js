const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
      }
    
      encrypt(message, key) {
        //(this.mode === false) ? (message = reversString(message)) :
        message = message.toUpperCase();
        key = key.toUpperCase();
        let messageArr = [];
        let keyArr = [];
        let resultArr = [];
        let  countSymb = 0;
        for (var i = 0;i < message.length;i++) {
          messageArr.push(message.charCodeAt(i) - 65);
          keyArr.push(key.charCodeAt((i - countSymb) % key.length) - 65);
          if (messageArr[i] >= 0 && messageArr[i] < 26) {
            resultArr.push(String.fromCharCode((messageArr[i] + keyArr[i]) % 26 + 65));
          } else {
            resultArr.push(String.fromCharCode(messageArr[i] + 65));
            countSymb++;
          }
        }
        if (this.mode === false) {
          resultArr = resultArr.reverse();
        }
        return resultArr.join('');
      }
      decrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        let messageArr = [];
        let keyArr = [];
        let resultArr = [];
        let  countSymb = 0;
        for (var i = 0;i < message.length;i++) {
          messageArr.push(message.charCodeAt(i) - 65);
          keyArr.push(key.charCodeAt((i - countSymb) % key.length) - 65);
          if (messageArr[i] >= 0 && messageArr[i] < 26) {
            resultArr.push(String.fromCharCode((26 + messageArr[i] - keyArr[i]) % 26 + 65));
          } else {
            resultArr.push(String.fromCharCode(messageArr[i] + 65));
            countSymb++;
          }
        }
        if (this.mode === false) {
          resultArr = resultArr.reverse();
        }
        return resultArr.join('');
      }
}

module.exports = VigenereCipheringMachine;
