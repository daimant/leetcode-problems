/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  let word = "";

  for (let i = 0; i < words.length; i++) {
    let currWordCount = 0;
    let currWord = words[i].split("");

    currWord.forEach((el, i, arr) => {
      if (words.indexOf(arr.slice(0, i + 1).join("")) !== -1) currWordCount++;
    });

    if (
      (currWordCount === currWord.length && words[i].length > word.length) ||
      (currWordCount === currWord.length &&
        words[i].length === word.length &&
        words[i] < word)
    )
      word = words[i];
  }

  return word;
};
