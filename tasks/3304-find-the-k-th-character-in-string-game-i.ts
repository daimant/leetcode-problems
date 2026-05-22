// Accepted 502 / 502 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 11:39
// Solution Runtime 2 ms Beats 92.86% Analyze Complexity Memory 60.64 MB Beats 28.57%  function kthCharacter(k: number): string {

function kthCharacter(k: number): string {
  let str = 'a'

  while (str.length < k) {
    str += str.split('').map(el => String.fromCharCode(el.charCodeAt(0) + 1)).join('')
  }

  return str[k - 1]
};