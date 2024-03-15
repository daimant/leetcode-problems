// Accepted
// Runtime 58 ms Beats 85.42% of users with TypeScript
// Memory 52.14 MB Beats 70.83% of users with TypeScript

const countKeyChanges = (s: string): number => s.split('').reduce((acc, el, i) => ({el, count: i === 0 || acc.el.toLowerCase() === el.toLowerCase() ? acc.count : ++acc.count}), {el: '', count: 0}).count

// Accepted
// Runtime 51 ms Beats 97.92% of users with TypeScript
// Memory 52.14 MB Beats 70.83% of users with TypeScript

const countKeyChanges2 = (s: string): number => {
  let result = 0
  s = s.toLowerCase()

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) result++
  }

  return result
}