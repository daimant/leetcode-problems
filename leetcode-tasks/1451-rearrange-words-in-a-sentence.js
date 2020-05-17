/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
  text = text[0].toLowerCase() + text.slice(1);
  let arr = text.split(" "),
    table = new Map();

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i].length;
    if (table.has(curr)) table.set(curr, [...table.get(curr), arr[i]]);
    else table.set(curr, [arr[i]]);
  }

  arr = [...table]
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .map(el => el[1])
    .reduce((acc, curr) => acc.concat(curr))
    .join(" ");

  return arr[0].toUpperCase() + arr.slice(1);
};
