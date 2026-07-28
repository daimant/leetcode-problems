// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Jul 28, 2026 19:52
// Runtime 0 ms Beats 100.00% Memory 5.26 MB Beats 77.78%

func isMiddleElementUnique(nums []int) bool {
  mid := nums[len(nums) / 2]

  for i, v := range nums {
    if i != len(nums) / 2 && mid == v {
      return false
    }
  }

  return true
}