// Accepted 1003 / 1003 testcases passed Sergey Pomortsev submitted at Mar 30, 2026 11:29
// Solution Runtime 0 ms Beats 100.00% Memory 57.56 MB Beats 88.89%

const canBeEqual = (s1: string, s2: string): boolean => {
  const [a, b, c, d] = s2.split('');
  const arr = [s2, c + b + a + d, c + d + a + b, a + d + c + b];
  return arr.some(el => el === s1);
}