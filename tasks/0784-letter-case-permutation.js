/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function(S) {
  if (isFinite(S)) return [S];
  S = S.toLowerCase();

  const tableLetters = [];
  const result = [];

  for (let i = 0, acc = ""; i < S.length; i++) {
    if (!isFinite(S[i])) {
      tableLetters.push(acc + S[i]);
      acc = "";
    } else acc += S[i];

    if (acc.length && i === S.length - 1)
      tableLetters[tableLetters.length - 1] += acc;
  }

  for (let i = 0, len = S.replace(/[0-9]/g, "").length; i < 2 ** len; i++)
    result.push(i.toString(2).padStart(len, 0));

  for (let i = 0; i < result.length; i++) {
    const currNum = result[i];
    let currWord = "";

    for (let j = 0; j < currNum.length; j++) {
      if (+currNum[j]) currWord += tableLetters[j].toUpperCase();
      else currWord += tableLetters[j];
    }
    result[i] = currWord;
  }

  return result;
};
