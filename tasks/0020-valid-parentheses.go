func isValid(s string) bool {
  stack := []string{}

  for _, v := range s {
    switch string(v) {
      case "(":
        stack = append(stack, "ao")
      case ")":
        if len(stack) == 0 || stack[len(stack) - 1] != "ao" {
          return false
        } else {
          stack = stack[:len(stack) - 1]
        }
      case "{":
        stack = append(stack, "bo")
      case "}":
        if len(stack) == 0 || stack[len(stack) - 1] != "bo" {
          return false
        } else {
          stack = stack[:len(stack) - 1]
        }
      case "[":
        stack = append(stack, "co")
      case "]":
        if len(stack) == 0 || stack[len(stack) - 1] != "co" {
          return false
        } else {
          stack = stack[:len(stack) - 1]
        }
    }
  }

  return len(stack) == 0
}