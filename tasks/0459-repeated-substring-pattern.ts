// Accepted 130 / 130 testcases passed Sergey Pomortsev submitted at Mar 27, 2026 10:51
// Solution Runtime 26 ms Beats 20.44% Memory 62.84 MB Beats 22.10%

function repeatedSubstringPattern(s: string): boolean {
  if (s.length === 1) return false;

  const maxLenSub = s.length % 2 ? s.length / 3 : s.length / 2;
  const step = s.length % 2 ? 2 : 1

  outer: for (let i = 1; i < maxLenSub + 1; i += step) {
    const currStr = s.slice(0, i);

    for (let j = 0; j < s.length; j += i) {
      if (currStr !== s.slice(j, j + i)) continue outer;
    }

    return true;
  }

  return false;
};