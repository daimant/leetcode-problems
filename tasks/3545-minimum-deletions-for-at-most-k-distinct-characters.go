// Accepted 936 / 936 testcases passed Sergey Pomortsev submitted at Jul 12, 2026 11:55
// Solution Runtime 0 ms Beats 100.00% Memory 4.41 MB Beats 0.00%

func minDeletion(s string, k int) int {
  delCount := 0
  freq := make([]int, 26)

  for _, r := range s {
    freq[r - 'a']++
  }

  sort.Slice(freq, func(a, b int) bool {
    return freq[a] > freq[b]
  })

  for i := k; i < len(freq); i++ {
    delCount += freq[i]
  }

  return delCount
}