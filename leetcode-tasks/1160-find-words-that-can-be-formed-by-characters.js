/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function(words, chars) {
  let count = 0;
  const etalon = {};

  for (let j = 0; j < chars.length; j++) {
    if (etalon[chars[j]]) etalon[chars[j]]++;
    else etalon[chars[j]] = 1;
  }

  outer: for (let i = 0; i < words.length; i++) {
    const curr = words[i],
      currObj = {};
    for (let j = 0; j < curr.length; j++) {
      if (!etalon[curr[j]] || curr.length > chars.length) continue outer;

      if (currObj[curr[j]]) currObj[curr[j]]++;
      else currObj[curr[j]] = 1;
    }

    let isEqual = true;
    for (let key in currObj) {
      if (currObj[key] > etalon[key] || !etalon[key]) isEqual = false;
    }
    if (isEqual) count += curr.length;
  }

  return count;
};
