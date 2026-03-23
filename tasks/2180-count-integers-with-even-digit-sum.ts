// Accepted 71 / 71 testcases passed Sergey Pomortsev submitted at Mar 19, 2026 14:28
// Solution Runtime 0 ms Beats 100.00% Memory 58.58 MB Beats 22.22%

function countEven(num: number): number {
  let result = 0;

  for (let i = 2; i <= num; i++) {
    const curr = i.toString().split('').reduce((acc, curr) => acc + +curr, 0);
    if (curr % 2 === 0) result++;
  }

  return result;
};