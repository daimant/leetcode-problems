// Accepted
// Runtime 72 ms Beats 58.18% of users with TypeScript
// Memory 54.26 MB Beats 38.18% of users with TypeScript

const sumOfEncryptedInt = (nums: number[]): number => nums.reduce((acc, curr, i, arr, currArr = String(curr).split('').map(el => +el)) => acc + +( new Array(currArr.length).fill(Math.max(...currArr)).join('') ), 0)