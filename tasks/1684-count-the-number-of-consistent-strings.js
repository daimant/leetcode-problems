// with regexp
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = function(allowed, words) {
  const reg = new RegExp("[" + allowed + "]+");
  let result = 0;

  for (let word of words) if (!word.replace(reg, "")) result++;

  return result;
};

// without regexp
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings2 = function(allowed, words) {
  const set = new Set([...allowed]);
  let result = 0;

  outer: for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      if (!set.has(word[i])) continue outer;
    }

    result++;
  }

  return result;
};
