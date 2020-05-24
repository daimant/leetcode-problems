/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  const position = [],
    result = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) position.push(i);
  }

  let prev = position.shift(),
    next = prev;

  for (let i = 0; i < S.length; i++) {
    if (i === next) {
      result.push(0);
      prev = next;
      next = position.length ? position.shift() : Infinity;
    } else result.push(Math.min(prev !== next ? i - prev : Infinity, next - i));
  }

  return result;
};
