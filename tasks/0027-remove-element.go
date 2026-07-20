// Accepted 116 / 116 testcases passed Sergey Pomortsev submitted at Jul 14, 2026 20:33
// Solution Runtime 0 ms Beats 100.00% Memory 4.24 MB Beats 0.99%

func removeElement(nums []int, val int) int {
  count := 0

  for i := 0; i < len(nums); i++ {
    if nums[i] == val {
      nums[i] = 101
      count++
    }
  }

  slices.Sort(nums)

  return len(nums) - count
}