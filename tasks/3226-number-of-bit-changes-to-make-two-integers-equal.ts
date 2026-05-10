// Accepted 682 / 682 testcases passed Sergey Pomortsev submitted at Apr 02, 2026 20:09
// Runtime 0 ms Beats 100.00% Memory 58.00 MB Beats -%

function minChanges(n: number, k: number): number {
  if (n < k) return -1;
  else if (n === k) return 0;

  let nBit = n.toString(2);
  let kBit = k.toString(2).padStart(nBit.length, '0');
  let count = 0;

  for (let i = 0; i < nBit.length; i++) {
    if (nBit[i] === '0' && kBit[i] === '1') return -1;
    else if (nBit[i] === '1' && kBit[i] === '0') count++;
  }

  return count;
};