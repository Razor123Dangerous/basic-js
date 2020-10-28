const CustomError = require("../extensions/custom-error");

const chainMaker = {

    properties :{
    chainRow: "",
    chainBegin: true,
  },

  getLength() {
     return this.properties.chainRow.split('~~').length;
  },

  addLink(value) {
      if(String(value) !== ''){
        if(this.properties.chainBegin){
          this.properties.chainRow += `( ${value} )`;
      }
      else{
          this.properties.chainRow += `~~( ${value} )`;
      }
      this.properties.chainBegin = false;
      }
      else{
        if(this.properties.chainBegin){
          this.properties.chainRow += '( null )';
      }
      else{
          this.properties.chainRow += '~~( null )'; 
      }
      this.properties.chainBegin = false;
      }
      return this;
  },

  removeLink(position) {
    let edit_arr = this.properties.chainRow.split('~~');
    if(typeof(position) !== 'number' || position < 0){
      this.properties.chainRow = '';
      this.properties.chainBegin = true;
      throw new Error;
    }
    else{
      for(let i = 0; i < edit_arr.length; i++){
        if(i === position){
          edit_arr.splice(i - 1, 1);        
        }
      }
      this.properties.chainRow = edit_arr.join('~~');
      return this;
    }
  },
  reverseChain() {
      let arr = this.properties.chainRow.split('~~');
      let arr_reversed = [];
      for(let i = arr.length - 1; i >= 0; i--){
          arr_reversed.push(arr[i]);
      }
      this.properties.chainRow = arr_reversed.join('~~');
      return this;
  },
  finishChain() {
      result = this.properties.chainRow;
      this.properties.chainRow = '';
      this.properties.chainBegin = true;
      return result;
  }
};

module.exports = chainMaker;
