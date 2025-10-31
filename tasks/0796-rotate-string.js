/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A === B) return true;

  for (let i = 0; i < A.length - 1; i++) {
    A = A.split("");
    A.push(A.shift());
    A = A.join("");

    if (A === B) return true;
  }

  return false;
};
