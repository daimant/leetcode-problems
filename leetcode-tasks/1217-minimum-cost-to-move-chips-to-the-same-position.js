/**
 * @param {number[]} pos
 * @param odd
 * @return {number}
 */
const minCostToMoveChips = (pos, odd) =>
  Math.min(
    (odd = pos.reduce((acc, curr) => (curr % 2 ? acc + 1 : acc), 0)),
    pos.length - odd
  );
