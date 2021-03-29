const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arrDepth = 0;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        arrDepth = Math.max(this.calculateDepth(element), arrDepth);
      }
    });
  return ++arrDepth;
  }
};