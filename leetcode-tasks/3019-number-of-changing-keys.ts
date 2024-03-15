// Accepted
// Runtime 58 ms Beats 85.42% of users with TypeScript
// Memory 52.14 MB Beats 70.83% of users with TypeScript

const countKeyChanges = (s: string): number => s.split('').reduce((acc, el, i) => ({el, count: i === 0 || acc.el.toLowerCase() === el.toLowerCase() ? acc.count : ++acc.count}), {el: '', count: 0}).count
