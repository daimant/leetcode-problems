/**
 * @param {string} seq
 * @param {string} word
 * @return {number}
 */
const maxRepeating = function(seq, word) {
  const { length: seqLen } = seq;
  const { length: wordLen } = word;
  let maxCount = 0;

  for (let i = 0; i <= seqLen - word.length; i++) {
    let j = i + wordLen;
    if (seq[i] === word[0] && seq.slice(i, i + wordLen) === word) {
      let currCount = 1;

      for (
        j;
        seq.slice(j, j + wordLen) === word && j <= seqLen - word.length;
        j += wordLen
      )
        currCount++;

      if (currCount > maxCount) maxCount = currCount;
      i = j - wordLen + 1;
    }
  }

  return maxCount;
};
