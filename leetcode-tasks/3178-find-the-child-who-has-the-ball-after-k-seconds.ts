// Accepted
// Runtime 52 ms Beats 97.40% Analyze Complexity
// Memory 52.01 MB Beats 44.16%

const numberOfChild = (n: number, k: number): number => {
  let result = 0
  let direction = 'right'

  for (let i = 0; i < k; i++) {
    if (result === n - 1) {
      direction = 'left'
    } else if (result === 0) {
      direction = 'right'
    }

    if (direction === 'left') result--
    else result++
  }

  return result
}
