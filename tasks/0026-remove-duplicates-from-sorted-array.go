// Accepted 362 / 362 testcases passed Sergey Pomortsev submitted at Jul 14, 2026 19:54
// Solution Runtime 48 ms Beats 5.01% Memory 6.24 MB Beats 42.71%

func removeDuplicates(nums []int) int {
  count := 0

  for i := 0; i < len(nums) - 1; i++ {
    if nums[i] == nums[i + 1] {
      nums = append(nums[:i], nums[i + 1:]...)
      count++
      i--
    }
  }

  return len(nums)
}

// Accepted 362 / 362 testcases passed Sergey Pomortsev submitted at Jul 14, 2026 20:18
// Solution Runtime 0 ms Beats 100.00% Memory 6.49 MB Beats 9.97%
// with sort

func removeDuplicates(nums []int) int {
  uniq := map[int]struct{}{}
  count := 0

  for i := 0; i < len(nums); i++ {
    if _, ok := uniq[nums[i]]; ok {
      nums[i] = 101
    } else {
      uniq[nums[i]] = struct{}{}
      count++
    }
  }

  slices.Sort(nums)

  return count
}

// Accepted 362 / 362 testcases passed Sergey Pomortsev submitted at Jul 14, 2026 20:26
// Solution Runtime 0 ms Beats 100.00% Memory 6.86 MB Beats 5.90%
// without sort

func removeDuplicates(nums []int) int {
  uniq := map[int]struct{}{}
  newSlice := []int{}

  for i := 0; i < len(nums); i++ {
    if _, ok := uniq[nums[i]]; !ok {
      uniq[nums[i]] = struct{}{}
      newSlice = append(newSlice, nums[i])
    }
  }

  for i, v := range newSlice {
    nums[i] = v
  }

  return len(newSlice)
}