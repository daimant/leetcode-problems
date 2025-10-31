/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  let license = licensePlate.replace(/[^a-z]/gi, "").toLowerCase();
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let currWord = words[i];

    for (let j = 0; j < license.length; j++) {
      let currRegExp = new RegExp(`${license[j]}`);
      currWord = currWord.replace(currRegExp, "");
    }

    if (words[i].length - license.length !== currWord.length) continue;
    if (result.length === 0) result = words[i];
    if (words[i].length < result.length) result = words[i];
  }

  return result;
};
