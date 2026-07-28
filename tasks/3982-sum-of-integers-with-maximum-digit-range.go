// Accepted 999 / 999 testcases passed Sergey Pomortsev submitted at Jul 27, 2026 21:40
// Solution Runtime 0 ms Beats 100.00% Memory 6.53 MB Beats 6.59%

func maxDigitRange(nums []int) int {
  hash := map[int]int{}
  maxRange := -1

  for _, v := range nums {
    slice := strings.Split(strconv.Itoa(v), "")
    max := 0
    min := 9

    for _, str := range slice {
      num, _ := strconv.Atoi(str)

      if num > max {
        max = num
      }
      if num < min {
        min = num
      }
    }

    if (maxRange < max - min) {
      maxRange = max - min
    }

    hash[max - min] += v
  }

  return hash[maxRange]
}

// without using map

func maxDigitRange(nums []int) int {
  count := 0
  maxRange := -1

  for _, v := range nums {
    slice := strings.Split(strconv.Itoa(v), "")
    max := 0
    min := 9

    for _, str := range slice {
      num, _ := strconv.Atoi(str)

      if num > max {
        max = num
      }
      if num < min {
        min = num
      }
    }

    if (maxRange < max - min) {
      count = v
      maxRange = max - min
    } else if maxRange == max - min {
      count += v
    }
  }

  return count
}