/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = edges => {
  const checkElement = (el) => {
    if (!map.has(el)) map.set(el, 1);
    else {
      const curr = map.get(el) + 1;
      map.set(el, curr);
      if (curr === edges.length) result = el;
    }
  };
  const map = new Map();
  let result;

  for (let edge of edges) {
    checkElement(edge[0]);
    checkElement(edge[1]);

    if (result) return result;
  }
};