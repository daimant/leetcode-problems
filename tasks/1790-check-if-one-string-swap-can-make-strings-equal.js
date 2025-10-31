/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = (s1, s2) => {
  let first;
  let second;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (!first && first !== 0) first = i;
      else if (!second) second = i;
      else return false;
    }
  }

  return s1[first] === s2[second] && s1[second] === s2[first];
};
