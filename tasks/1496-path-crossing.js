/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = function(path) {
  const unique = new Set(["0,0"]);
  const pos = { x: 0, y: 0 };

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "N") pos["x"]++;
    else if (path[i] === "E") pos["y"]++;
    else if (path[i] === "S") pos["x"]--;
    else if (path[i] === "W") pos["y"]--;

    const curr = `${pos["x"]},${pos["y"]}`;

    if (unique.has(curr)) return true;
    else unique.add(curr);
  }

  return false;
};
