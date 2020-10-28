const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== 'int' || sampleActivity === undefined){
    return false;
  }
  else{
    let time = 0;
    let k = 0;
    k = 0.693 / HALF_LIFE_PERIOD;
    t = (MODERN_ACTIVITY / 8.0) / k;
    return Math.ceil(t);
  }
  // remove line with error and write your code here
};
