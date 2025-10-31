/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function(code, k) {
  const result = [];
  const { length: len } = code;

  for (let i = 0; i < len; i++) {
    const direct = k < 0 ? "l" : "r";
    let count = Math.abs(k);
    let curr = 0;

    if (direct === "r") {
      for (let j = i + 1; count > 0; j++) {
        if (j === len) j = 0;
        curr += code[j];
        count--;
        console.log(i, code[j]);
      }
    } else if (direct === "l") {
      for (let j = i - 1; count > 0; j--) {
        if (j === -1) j = len - 1;
        curr += code[j];
        count--;
      }
    } else return new Array(len).fill(0);

    result[i] = curr;
  }

  return result;
};
