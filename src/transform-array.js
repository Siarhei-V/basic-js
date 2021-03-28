module.exports = function transform(arr) {
  if ( !Array.isArray(arr) ) throw new Error();
  const result = [];
  Object.assign(result, arr);
  for (let i = 0; i < result.length; i++) {
    switch (result[i]) {
      case "--discard-next":
        if (result[i + 1] !== undefined) result.splice(i + 1, 1);
        break;
      case "--discard-prev":
        if (result[i - 1] !== undefined) result.splice(i - 1, 1);
        break;
      case "--double-next":
        if (result[i + 1] !== undefined) {
          result.splice(i + 1, 0, result[i + 1]);
          i++;
        }
        break;
      case "--double-prev":
        if (result[i - 1] !== undefined) {
          result.splice(i, 0, result[i - 1]);
          i++;
        }
        break;
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "--discard-next" || result[i] === "--discard-prev" || result[i] === "--double-next" || result[i] === "--double-prev") {
      result.splice(i, 1);
      i--;
    }
  } 
  return result;
}