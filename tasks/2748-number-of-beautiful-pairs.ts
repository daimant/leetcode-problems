// Wrong Answer
// 713 / 3005 testcases passed

const countBeautifulPairs = (nums: number[]): number => {
  let count = 0

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const [xLong, yLong] = [String(nums[i]), String(nums[j])]
      const [x, y] = [+xLong[0], +yLong[yLong.length - 1]]
      if (!(x % 2 === 0 && y % 2 === 0) || (x % 3 === 0 && y % 3 === 0)) count++
    }
  }

  return count
}

// Wrong Answer
// 1684 / 3005 testcases passed

const countBeautifulPairs2 = (nums: number[]): number => {
  let count = 0

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const [xLong, yLong] = [String(nums[i]), String(nums[j])]
      const [x, y] = [+xLong[0], +yLong[yLong.length - 1]]
      if (!(x % 2 === 0 && y % 2 === 0) && !(x % 3 === 0 && y % 3 === 0)) count++
      console.log(x, y)
    }
  }

  return count
}

// Accepted
// Runtime 133 ms Beats 90.00%
// Memory 58.81 MB Beats 10.00%

const countBeautifulPairs3 = (nums: number[]): number => {
  let count = 0

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const [xLong, yLong] = [String(nums[i]), String(nums[j])]
      const [x, y] = [+xLong[0], +yLong[yLong.length - 1]]
      if (!(x % 2 === 0 && y % 2 === 0) && !(x % 3 === 0 && y % 3 === 0) && !(x % 5 === 0 && y % 5 === 0) && !(x % 7 === 0 && y % 7 === 0)) count++
    }
  }

  return count
}
