// Accepted
// Runtime 76 ms Beats 8.41% of users with JavaScript
// Memory 36.56 MB Beats 100.00% of users with JavaScript

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
    else result.unshift(curr, result.pop());
  }

  return result;
};
