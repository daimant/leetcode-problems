/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = function(A, B) {
  let a = "";
  let count = 0;
  do {
    count++;
    a += A;
    if (a.includes(B)) return count;
  } while (a.length <= B.length * 2 || count === 1);

  return -1;
};
