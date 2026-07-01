// Accepted 1691 / 1691 testcases passed Sergey Pomortsev submitted at Jun 30, 2026 18:53
// Runtime 0 ms Beats 100.00% Memory 6.51 MB Beats 44.44%

func countSubarrays(nums []int) int {
  var count = 0

  for i := 1; i < len(nums) - 1; i++ {
    if nums[i - 1] + nums[i + 1] == nums[i] / 2 && nums[i] % 2 == 0 {
      count++
    }
  }

  return count
}