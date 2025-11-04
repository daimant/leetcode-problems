// Accepted 921 / 921 testcases passed Sergey Pomortsev submitted at Oct 25, 2025 21:05
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 59.08 MB Beats 37.22%

const recoverOrder = (order: number[], friends: number[]): number[] => {
  const friendsSet = new Set(friends)
  return order.filter(el => friendsSet.has(el))
}

// or same solution in one line

const recoverOrder2 = (order: number[], friends: number[], friendsSet = new Set(friends)): number[] => order.filter(el => friendsSet.has(el))