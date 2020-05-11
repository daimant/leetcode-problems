"use strict";

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let mustBeNew = [[sr, sc]],
    checked = new Set();

  while (mustBeNew.length) {
    const currDot = mustBeNew.shift(),
      currColor = image[currDot[0]][currDot[1]];

    if (!checked.has(`${currDot[0]},${currDot[1]}`)) {
      checked.add(`${currDot[0]},${currDot[1]}`);
      search(...currDot, currColor);
    }
  }

  return image;

  function search(x, y, currColor) {
    image[x][y] = newColor;
    if (x > 0 && image[x - 1][y] === currColor) mustBeNew.push([x - 1, y]);
    if (x < image.length - 1 && image[x + 1][y] === currColor)
      mustBeNew.push([x + 1, y]);
    if (y > 0 && image[x][y - 1] === currColor) mustBeNew.push([x, y - 1]);
    if (y < image[x].length - 1 && image[x][y + 1] === currColor)
      mustBeNew.push([x, y + 1]);
  }
};
