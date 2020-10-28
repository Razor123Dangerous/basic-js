const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(arr.length === 0){
    return [];
  }
  else{
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] === '--discard-next'){
    //       arr.splice(i, 1);
    //       arr.splice(i, 1);
    //     }
    //     else if(arr[i] === '--discard-prev'){
    //       arr.splice(i, 1);
    //       arr.splice(i - 1, 1);
    //     }
    //     else if(arr[i] === '--double-next'){
    //       arr.splice(i, 1);
    //       arr.splice(i + 1, 0, arr[i]);
    //     }
    //     else if(arr[i] === '--double-prev'){
    //       arr.splice(i, 1);
    //       arr.splice(i - 1, 0, arr[i - 1]);
    //     }
    // }
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] === '--discard-next'){
          arr.splice(j, 1);
          arr.splice(j, 1);
        }
        else if(arr[i][j] === '--discard-prev'){
          arr.splice(j, 1);
          arr.splice(j - 1, 1);
        }
        else if(arr[i] === '--double-next'){
          arr.splice(j, 1);
          arr.splice(j + 1, 0, arr[i][j]);
        }
        else if(arr[i] === '--double-prev'){
          arr.splice(j, 1);
          arr.splice(j - 1, 0, arr[i][j - 1]);
        }
      }
    }
    return arr;
  }
}
  
    
