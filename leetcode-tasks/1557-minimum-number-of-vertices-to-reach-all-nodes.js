/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findSmallestSetOfVertices = (n, edges) => {
  const startPoints = new Set();
  const endPoints = new Set();

  for (let edge of edges) {
    const [start, end] = edge;

    startPoints.add(start);
    endPoints.add(end);
  }

  for (let end of endPoints) {
    startPoints.delete(end);
  }

  return [...startPoints];
};