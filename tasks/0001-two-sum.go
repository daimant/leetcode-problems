// Accepted 64 / 64 testcases passed Sergey Pomortsev submitted at Jul 13, 2026 12:23
// Runtime 23 ms Beats 17.44% Memory 5.30 MB Beats 98.48%
// n*n complexity

func twoSum(nums []int, target int) []int {
  for i := 0; i < len(nums) - 1; i++ {
    for j:= i + 1; j < len(nums); j++ {
      if nums[i] + nums[j] == target {
        return []int{i, j}
      }
    }
  }

  return []int{}
}

// Accepted 64 / 64 testcases passed Sergey Pomortsev submitted at Jul 13, 2026 12:35
// Runtime 0 ms Beats 100.00% Memory 7.12 MB Beats 5.27%
// n complexity

func twoSum(nums []int, target int) []int {
  uniq := make(map[int]int)

  for i, v := range nums {
    uniq[v] = i
  }

  for i := 0; i < len(nums) - 1; i++ {
    if v, hasOpposite := uniq[target - nums[i]]; v != i && hasOpposite {
      return []int{i, uniq[target - nums[i]]}
    }
  }

  return []int{}
}