/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const nearestValidPoint = (x, y, points) => {
  let result = [null, -1];

  for (let i = 0; i < points.length; i++) {
    const [currX, currY] = points[i];

    if (x === currX || y === currY) {
      const curr = Math.abs(x - currX) + Math.abs(y - currY);
      if (result[1] === -1 || result[0] > curr) result = [curr, i];
    }
  }

  return result[1];
};
