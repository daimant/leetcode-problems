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

// other
// Accepted 1029 / 1029 testcases passed Sergey Pomortsev submitted at Dec 04, 2025 21:19
// Solution Runtime 12 ms Beats 92.68% Analyze Complexity Memory 65.06 MB Beats 21.95%

function totalWaviness2(num1: number, num2: number): number {
  let result = 0;

  for (let i = num1 > 100 ? num1 : 101; i <= num2; i++) {
    const currStr = String(i)

    if (currStr.length >= 3) {
      if (currStr[1] > currStr[0] && currStr[1] > currStr[2] || currStr[1] < currStr[0] && currStr[1] < currStr[2]) result++
      if (currStr.length >= 4) {
        if (currStr[2] > currStr[1] && currStr[2] > currStr[3] || currStr[2] < currStr[1] && currStr[2] < currStr[3]) result++
        if (currStr.length === 5 && currStr[3] > currStr[2] && currStr[3] > currStr[4] || currStr[3] < currStr[2] && currStr[3] < currStr[4]) result++
      }
    }
  }

  return result
};