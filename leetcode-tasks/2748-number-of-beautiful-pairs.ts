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
