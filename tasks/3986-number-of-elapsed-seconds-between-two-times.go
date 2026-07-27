// Accepted 999 / 999 testcases passed Sergey Pomortsev submitted at Jul 27, 2026 16:38
// Solution Runtime 0 ms Beats 100.00% Memory 4.35 MB Beats 30.27%

func secondsBetweenTimes(startTime string, endTime string) int {
  st := strings.Split(startTime, ":")
  end := strings.Split(endTime, ":")
  result := 0

  for i := 0; i < 3; i++ {
    currSt, _ := strconv.Atoi(st[i])
    currEnd, _ := strconv.Atoi(end[i])
    result = result - currSt * int(math.Pow(60, float64(2 - i))) + currEnd * int(math.Pow(60, float64(2 - i)))
  }

  return result
}