// Accepted 1029 / 1029 testcases passed Sergey Pomortsev submitted at Dec 04, 2025 21:13
// Solution Runtime 12 ms Beats 92.68% Analyze Complexity Memory 62.48 MB Beats 73.17%

function totalWaviness(num1: number, num2: number): number {
  let result = 0;

  for (let i = num1 > 100 ? num1 : 101; i <= num2; i++) {
    const currStr = String(i)

    for (let j = 1; j < currStr.length - 1; j++) {
      if (currStr[j] > currStr[j + 1] && currStr[j] > currStr[j - 1] || currStr[j] < currStr[j + 1] && currStr[j] < currStr[j - 1]) result++
    }
  }

  return result
};