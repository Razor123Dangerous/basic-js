const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if(members === null || typeof(members) !== "object" || members === undefined || members.length === 0){
      return false;
    }
    else{
    let result = '';
    for(let i = 0; i < members.length; i++){
      if(typeof(members[i]) === 'string'){
        result += members[i].toString().trim().charAt(0);
    }
  }
    return result.toUpperCase().split('').sort().join('');
  }
};
