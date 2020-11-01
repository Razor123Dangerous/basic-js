const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === null ||date === undefined) return 'Unable to determine the time of year!'
  if(Object.prototype.toString.call(date) !== '[object Date]') throw 'THROWN'

  let month = date.getMonth()

  if(month >= 0 && month < 12)
  {
    if(month > 1 && month <= 4) return 'spring'
    if(month > 4 && month <= 7) return 'summer'
    if(month > 7 && month <= 10) return 'autumn'
    else return 'winter'
  }
};
