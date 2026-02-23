// Accepted 91 / 91 testcases passed Sergey Pomortsev submitted at Feb 19, 2026 12:09
// Solution Runtime 10 ms Beats 64.52% Analyze Complexity Memory 59.49 MB Beats 70.97%

function countBinarySubstrings(s: string): number {
  let count = 0
  let zeroes = 0
  let ones = 0

  const updateCount = () => {
    count += Math.min(zeroes, ones)
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') zeroes++
    else ones++

    if (zeroes && ones) {
      if (s[i] === '0' && s[i + 1] !== '0') {
        updateCount()
        ones = 0
      } else if (s[i] === '1' && s[i + 1] !== '1') {
        updateCount()
        zeroes = 0
      }
    }
  }

  return count
};