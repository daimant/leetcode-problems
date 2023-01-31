// Runtime 65 ms Beats 84.9% Memory 43.5 MB Beats 72.73%

const minimumOperations = (nums: number[]): number => Array.from(new Set(nums)).filter(el => el !== 0).length
