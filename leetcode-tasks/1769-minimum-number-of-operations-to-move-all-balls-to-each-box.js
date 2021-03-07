/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = boxes => {
  const check = (arr, dir) => {
    let ones = 0;
    let onesPack = 0;

    for (let i = 0; i < len; i++) {
      onesPack += ones;
      result[dir ? i : len - i - 1] += onesPack;

      if (arr[i] === "1") ones++;
    }
  };
  const { length: len } = boxes;
  const result = new Array(len).fill(0);

  check(boxes, 1);
  check([...boxes].reverse(), 0);

  return result;
};
