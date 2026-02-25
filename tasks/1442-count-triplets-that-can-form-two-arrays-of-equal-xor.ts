// Accepted 47 / 47 testcases passed Sergey Pomortsev submitted at Feb 17, 2026 16:53
// Solution Runtime 46 ms Beats 25.00% Analyze Complexity Memory 55.68 MB Beats 75.00%

function countTriplets(arr: number[]): number {
  let count = 0

  for (let i = 0; i < arr.length - 1; i++) {
    let a = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      a ^= arr[j]
      let b = arr[j]
      for (let k = j; k < arr.length; k++) {
        b ^= arr[k]
        if (a === b) count++
      }
    }
  }

  return count
};