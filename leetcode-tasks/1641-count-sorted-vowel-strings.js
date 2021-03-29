/**
 * @param {number} n
 * @return {number}
 */
const countVowelStrings = n => {
  const currNums = [1,1,1,1,1];
  let prevNums = [1,1,1,1,1];
  let layer = 5;

  for (let i = 1; i < n; i++) {

    currNums[0] = layer;
    for (let j = 1; j < 5; j++) {
      currNums[j] = currNums[j - 1] - prevNums[j - 1];
    }

    layer = currNums.reduce((curr, acc) => curr + acc);
    prevNums = currNums.slice();
  }

  return layer;
};