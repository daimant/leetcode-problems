// Accepted 52 / 52 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 21:49
// Solution Runtime 4 ms Beats 61.54% Analyze Complexity Memory 61.11 MB Beats 26.92%

const separateDigits = (nums: number[]): number[] => {
  return nums.map(elOut => elOut >= 10 ? elOut.toString().split('').map(elIn => +elIn) : elOut).flat(1)
}

// Accepted 52 / 52 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 21:55
// Solution Runtime 2 ms Beats 80.77% Analyze Complexity Memory 58.82 MB Beats 69.23%

const separateDigits = (nums: number[]): number[] => {
  const arr = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 10) arr.push(nums[i])
    else {
      const str = nums[i].toString()

      for (let j = 0; j < str.length; j++) {
        arr.push(+str[j])
      }
    }
  }

  return arr
}