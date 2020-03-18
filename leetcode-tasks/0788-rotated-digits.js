/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let result = 0;

  for (let i = 1; i <= N; i++) {
    let currInt = i.toString().replace(/[018]/g, "");
    if (currInt.length === 0) continue;
    if (currInt.replace(/[2569]/g, "").length === 0) result++;
  }

  return result;
};
