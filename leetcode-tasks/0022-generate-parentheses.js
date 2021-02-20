/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  const arr = [];

  for (let i = 2 ** (n * 2 - 1), end = 2 ** (n * 2); i < end; i++) {
    arr.push(i.toString(2));
  }

  outer: for (let i = 0; i < arr.length; i++) {
    let countOne = 0;
    let countZero = 0;
    let curr = "";

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "1") countOne++;
      else countZero++;

      if (countOne < countZero || countOne - countZero > arr[i].length / 2) {
        arr[i] = "";
        continue outer;
      } else {
        if (+arr[i][j]) curr += "(";
        else curr += ")";
      }
    }

    if (countOne !== countZero) arr[i] = "";
    if (arr[i]) arr[i] = curr;
  }

  return arr.filter(el => el);
};
