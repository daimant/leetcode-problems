/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
const containsPattern = (arr, m, k) => {
  const { length: len } = arr;
  const str = arr.join("");
  let max = 0;

  for (let i = 0; i + m <= len; i++) {
    let currCount = 1;
    const currPat = str.slice(i, i + m);

    for (let j = i + m; j + m <= len; j += m) {
      const currCheck = str.slice(j, j + m);

      if (currCheck === currPat) {
        currCount++;
        if (max < currCount) max = currCount;
      } else break;
    }

    if (currCount > max) max = currCount;
  }

  return max >= k;
};
