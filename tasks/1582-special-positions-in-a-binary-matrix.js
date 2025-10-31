/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = mat => {
  const points = [];
  let count = 0;

  for (let row = 0; row < mat.length; row++) {
    if (mat[row].filter(el => el).length !== 1) continue;

    points.push([row, mat[row].indexOf(1)]);
  }

  outer: while (points.length) {
    const currPoint = points.pop();

    for (let i = 0; i < mat.length; i++) {
      if (i === currPoint[0]) continue;

      const currCol = currPoint[1];

      if (mat[i][currCol] === 1) continue outer;
    }

    count++;
  }

  return count;
};
