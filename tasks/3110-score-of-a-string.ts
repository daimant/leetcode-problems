// Accepted
// Runtime 55 ms Beats 90.71% of users with TypeScript
// Memory 51.97 MB Beats 81.97% of users with TypeScript

const scoreOfString = (s: string): number => s.split('').reduce((acc, curr, i, arr) => i ? acc + Math.abs(arr[i - 1].charCodeAt(0) - curr.charCodeAt(0)) : 0, 0)