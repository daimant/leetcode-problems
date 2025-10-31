/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const countGoodRectangles = function(rectangles) {
  const minSides = rectangles.map(el => Math.min(...el));
  const maxLen = Math.max(...minSides);

  return minSides.filter(el => el === maxLen).length;
};
