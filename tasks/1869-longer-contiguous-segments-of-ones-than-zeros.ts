// Accepted 141 / 141 testcases passed Sergey Pomortsev submitted at Apr 16, 2026 17:36
// Solution Runtime 0 ms Beats 100.00% Memory 55.46 MB Beats 80.00%

function checkZeroOnes(s: string): boolean {
  let maxOnes = 0;
  let maxZeroes = 0;
  let currSymb = '';
  let currCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (currSymb === s[i]) currCount++;
    else {
      if (currSymb === '0' && maxZeroes < currCount) maxZeroes = currCount;
      else if (currSymb === '1' && maxOnes < currCount) maxOnes = currCount;

      currSymb = s[i];
      currCount = 1;
    }
  }

  if (currSymb === '0' && maxZeroes < currCount) maxZeroes = currCount;
  else if (currSymb === '1' && maxOnes < currCount) maxOnes = currCount;

  return maxOnes > maxZeroes;
};