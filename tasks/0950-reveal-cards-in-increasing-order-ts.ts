// Accepted
// Runtime 56 ms Beats 75.00% of users with TypeScript
// Memory 52.50 MB Beats 100.00% of users with TypeScript

const deckRevealedIncreasing = (deck: number[]): number[] => {
  const result = []
  deck.sort((a, b) => a - b)

  while (deck.length) {
    const curr = deck.pop()

    if (!result.length) result.push(curr)
    else result.unshift(curr, result.pop())
  }

  return result
};