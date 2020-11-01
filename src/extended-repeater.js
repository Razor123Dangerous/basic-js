const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, option) {
  let result = str
  let separator = '+'
  let addition = ''
  if(option.separator !== undefined) separator = option.separator;
  if(option.addition !== undefined)
  {
    if(option.additionRepeatTimes !== undefined)
    {
      if(option.additionSeparator !== undefined)
      {
        for(let i = 0; i < option.additionRepeatTimes; i++)
        {
          addition += option.addition;
          if(i !== option.additionRepeatTimes - 1) addition += option.additionSeparator;
        }
      }
      else
      {
        for(let i = 0; i < option.additionRepeatTimes; i++)
          addition += option.addition;
      }
      
    }
    else
    {
      addition = option.addition
    }
  }

  result += addition

  for(let i = 0; i < option.repeatTimes - 1; i++)
  {    
    result += separator + str;
    result += addition;
  }

  return result
};
  