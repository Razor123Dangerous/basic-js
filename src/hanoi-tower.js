const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let buff = Math.pow(2, disksNumber) - 1;
  return {
    turns: buff,
    seconds: Math.floor(buff * 3600 / turnsSpeed)
  }
};
