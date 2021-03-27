const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  if ( !Array.isArray(members) ) return false;
  members.forEach(element => {
    if (typeof(element) === "string") result.push(element.toUpperCase().match(/[A-Z]/));
  });
  return members.length === 0 ? false : result.sort().join("");
};
