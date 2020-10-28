const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(arr === undefined){
        return 0;
      }
    else{
      let level = 1;
      let previous_length = 1;
      let current_length = arr.length;
    while(current_length > previous_length)
    {
        arr = arr.flat();
        previous_length = current_length;
        current_length = arr.length;
        level++;
    }
    return level;
    }
  }
};