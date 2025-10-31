/**
 * @param {string} s
 * @return {number}
 */
const minOperations = s => {
  let one = 0;
  let two = 0;

  for (let i = 0; i < s.length; i++) {
    if (i % 2) {
      if (s[i] === "0") one++;
      else two++;
    } else {
      if (s[i] === "1") one++;
      else two++;
    }
  }

  return Math.min(one, two);
};
