// Accepted 930 / 930 testcases passed Sergey Pomortsev submitted at Mar 23, 2026 22:34
// Solution Runtime 4 ms Beats 85.71% Memory 59.48 MB Beats 57.14%

function totalNumbers(digits: number[]): number {
  const set = new Set();

  for (let i = 0; i < digits.length; i++) {
    if (digits[i]) {
      for (let j = 0; j < digits.length; j++) {
        if (j !== i) {
          for (let k = 0; k < digits.length; k++) {
            if (k !== i && k !== j && digits[k] % 2 === 0) set.add(`${digits[i]}${digits[j]}${digits[k]}`);
          }
        }
      }
    }
  }

  return set.size;
};