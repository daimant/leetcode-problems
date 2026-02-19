// Accepted 15 / 15 testcases passed Sergey Pomortsev submitted at Feb 17, 2026 17 : 33
// Solution Runtime 29 ms Beats 7.03 % Analyze Complexity Memory 68.77 MB Beats 5.21 %

function countBits(n: number): number[] {
  const resultArr = []

  for (let i = 0; i <= n; i++) {
    resultArr.push(i.toString(2).match(/1/g)?.length || 0)
  }

  return resultArr
};

// optimized
// Accepted 15 / 15 testcases passed Sergey Pomortsev submitted at Feb 17, 2026 17 : 40
// Solution Runtime 21 ms Beats 11.98 % Analyze Complexity Memory 69.00 MB Beats 5.21 %
function countBits(n: number): number[] {
  const resultArr = []

  for (let i = 0; i <= n; i++) {
    resultArr.push(i.toString(2).split('').filter(el => el === '1').length)
  }

  return resultArr
};