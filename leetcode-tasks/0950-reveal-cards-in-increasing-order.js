/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = function(deck) {
  const result = [];
  deck.sort((a, b) => a - b);

  while (deck.length) {
    const curr = deck.pop();

    if (!result.length) result.push(curr);
    else {
      result.unshift(curr, result.pop());
    }
  }

  return result;
};
