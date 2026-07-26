// Accepted 988 / 988 testcases passed Sergey Pomortsev submitted at Jul 24, 2026 14:37
// Solution Runtime 157 ms Beats 10.52% Memory 7.38 MB Beats 12.84%

func lengthOfLongestSubstring(s string) int {
  max := 0
  uniq := make(map[byte]struct{})

  Outer: for i := 0; i < len(s) && len(s) - i > max; i++ {
    clear(uniq)

    for j := i; j < len(s); j++ {
      curr := s[j]

      if _, ok := uniq[curr]; !ok {
        uniq[curr] = struct{}{}

        if len(uniq) > max {
          max = len(uniq)
        }
      } else {
        continue Outer
      }
    }
  }

  return max
}

// optimized
// Accepted 988 / 988 testcases passed Sergey Pomortsev submitted at Jul 24, 2026 15:52
// Solution Runtime 2 ms Beats 79.33% Memory 5.02 MB Beats 36.09%

func lengthOfLongestSubstring(s string) int {
  var max, l, r = 0, 0, 0
  uniq := make(map[byte]int)

  for r < len(s) {
    if v, _ := uniq[s[r]]; v == 1 {
      for l <= r {
        uniq[s[l]]--
        if s[l] == s[r] {
          l++
          break
        }
        l++
      }
    } else {
      uniq[s[r]]++
      r++

      if r - l > max {
        max = r - l
      }
    }
  }

  return max
}