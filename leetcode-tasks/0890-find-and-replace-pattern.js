/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function(words, pattern) {
  const result = [];
  const patternEtalon = new Map(
    [...new Set([...pattern])].map((el, i) => [el, i])
  );
  let etalonCode = "";

  for (let i = 0; i < pattern.length; i++)
    etalonCode += patternEtalon.get(pattern[i]);

  for (let i = 0; i < words.length; i++) {
    const currEtalon = new Map(
      [...new Set([...words[i]])].map((el, i) => [el, i])
    );
    const currWord = words[i];
    let currCode = "";

    for (let j = 0; j < currWord.length; j++) {
      currCode += currEtalon.get(currWord[j]);
    }

    if (currCode === etalonCode) result.push(currWord);
  }

  return result;
};
