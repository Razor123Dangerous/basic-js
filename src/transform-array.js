const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr) === false) {
      throw new Error('THROWN')
    } else {
      if (arr.length === 0) return [];
      let newArr = []
      let i = 0;
      let isDel = false;
      arr.forEach((el, index) => {
          if (el !== '--double-next' && el !== '--discard-next' && el !== '--double-prev' && el !== '--discard-prev') {
              if (arr[index - 1] === '--double-next' || arr[index - 1] === '--discard-next') {
                  if (arr[index - 1] === '--discard-next') isDel = true;
                  if (arr[index - 1] === '--double-next') newArr[i++] = el
              }
              if (isDel == false && (arr[index + 1] === '--double-prev' || arr[index + 1] === '--discard-prev')) {
                  if (arr[index + 1] === '--discard-prev') {
                      newArr[i++] = el
                      i--;
                      newArr.pop()
                      isDel = true;
                  }
                  if (arr[index + 1] === '--double-prev')
                      newArr[i++] = el
              }
              if (isDel == false) newArr[i++] = el
              isDel = false;
          }
      })
      return newArr
    }
  }
  
    
