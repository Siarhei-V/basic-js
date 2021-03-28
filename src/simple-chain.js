const CustomError = require("../extensions/custom-error");

const chainMaker = {
  value: [],

  getLength() {
    return this.value.length;
  },
  addLink(value) {
    this.value.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.value[position] === undefined || !(isFinite(position)) || typeof(position) !== "number" || Math.trunc(position) !== position) throw new Error();
    this.value.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.value.reverse();
    return this;
  },
  finishChain() {
    let result = [];
    result = this.value.join("~~");
    this.value = [];
    return result;
  }
}

module.exports = chainMaker;
