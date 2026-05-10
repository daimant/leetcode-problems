// Accepted 916 / 916 testcases passed Sergey Pomortsev submitted at Mar 12, 2026 14:02
// Runtime 0 ms Beats 100.00% Memory 58.27 MB Beats 11.76%

function hasTrailingZeros(nums: number[]): boolean {
  let count = 0;

  for (let el of nums) {
    const currStr = el.toString(2);
    if (currStr[currStr.length - 1] === '0') {
      if (count === 1) return true
      else count++;
    }
  }

  return false;
};