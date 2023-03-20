// 85 / 301 testcases passed

/**
 * @param {string} s
 * @return {number}
 */
const secondHighest = s => {
  let firstNum = null;

  for (let symb of s) {
    if (!firstNum && +symb)
      firstNum = symb;
    else if (firstNum && +symb && +symb > firstNum)
      return +symb;
  }

  return -1;
};
