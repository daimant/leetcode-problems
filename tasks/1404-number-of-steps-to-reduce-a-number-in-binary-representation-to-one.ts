// Accepted 75 / 75 testcases passed Sergey Pomortsev submitted at Feb 26, 2026 12:37
// Solution Runtime 1 ms Beats 70.00% Analyze Complexity Memory 58.04 MB Beats 20.00%

function numSteps(s: string): number {
  let dec = BigInt(`0b${s}`);
  let count = 0;

  while (dec > 1) {
    if (dec % 2n === 0n) dec /= 2n;
    else dec++;

    count++;
  }

  return count;
};