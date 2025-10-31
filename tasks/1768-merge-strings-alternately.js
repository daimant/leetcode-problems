/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
  const end = Math.min(word1.length, word2.length);
  let result = "";

  for (let i = 0; i < end; i++) {
    result += `${word1[i]}${word2[i]}`;
    if (i === end - 1) {
      if (word1[i + 1]) result += word1.slice(i + 1);
      else result += word2.slice(i + 1);
    }
  }

  return result;
};
