// Accepted 79 / 79 testcases passed Sergey Pomortsev submitted at Feb 27, 2026 22:16
// Solution Runtime 611 ms Beats 33.33% Analyze Complexity Memory 63.02 MB Beats 22.22%

function findEvenNumbers(digits: number[]): number[] {
  digits.sort((a, b) => a - b);
  const set = new Set<number>();

  for (let i = 0; i < digits.length; i++) {
    if (digits[i]) {
      for (let j = 0; j < digits.length; j++) {
        if (j !== i) {
          for (let k = 0; k < digits.length; k++) {
            if (digits[k] % 2 === 0 && k !== j && k !== i) {
              set.add(+`${digits[i]}${digits[j]}${digits[k]}`);
            }
          }
        }
      }
    }
  }

  return Array.from(set);
};