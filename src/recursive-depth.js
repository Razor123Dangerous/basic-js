const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0
    if (arr.length == 0) return 1

    let count = []
    let deep = 1

    arr.forEach(el => {

        if (Array.isArray(el)) {
            deep = 1 + this.calculateDepth(el);
        }
        count.push(deep)
        deep = 1;

    })

    return Math.max(...count)

}
};