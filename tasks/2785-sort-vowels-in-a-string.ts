// Accepted 2216 / 2216 testcases passed Sergey Pomortsev submitted at Feb 19, 2026 16:00
// Solution Runtime 62 ms Beats 81.08% Analyze Complexity Memory 68.68 MB Beats 89.19%

const bankV = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

function sortVowels(s: string): string {
  const arr = s.split('')
  const arrV = arr.filter(el => bankV.has(el)).sort()
  let vI = 0

  for (let i = 0; i < arr.length; i++) {
    if (bankV.has(arr[i])) {
      arr[i] = arrV[vI]
      vI++
    }
  }

  return arr.join('')
};