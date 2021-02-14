/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = n => {
  n = n.toString();

  for (let i = n.length - 3; i > 0; i--) {
    n = `${n.slice(0, i)}.${n.slice(i)}`;
    i -= 2;
  }

  return n;
};
