// Accepted 238 / 238 testcases passed Sergey Pomortsev submitted at Feb 18, 2026 23:09
// Solution Runtime 5 ms Beats 25.00% Analyze Complexity Memory 59.21 MB Beats 20.00%

function countPairs(nums: number[], k: number): number {
  const map = new Map()
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? [...map.get(nums[i]), i] : [i])
  }

  Array.from(map.values()).forEach(arr => {
    if (arr.length > 1) {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if ((arr[i] * arr[j]) % k === 0) count++
        }
      }
    }
  })

  return count
};

// optimized
// Accepted 238 / 238 testcases passed Sergey Pomortsev submitted at Feb 18, 2026 23:15
// Solution Runtime 3 ms Beats 70.00% Analyze Complexity Memory 57.46 MB Beats 20.00%

function countPairs(nums: number[], k: number): number {
  const map = new Map()
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const get = map.get(nums[i])
      get.forEach(el => {
        if (el * i % k === 0) count++
      })
      map.set(nums[i], get.concat(i))
    } else map.set(nums[i], [i])
  }

  return count
};