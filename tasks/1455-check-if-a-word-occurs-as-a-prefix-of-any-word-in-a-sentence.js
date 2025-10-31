/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = function(sentence, searchWord) {
  let str = "";
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      str = "";
      count++;
    } else {
      str += sentence[i];
      if (str === searchWord) return count + 1;
    }
  }

  return -1;
};
