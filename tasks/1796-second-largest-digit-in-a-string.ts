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

// Runtime 55 ms Beats 100% Memory 45.9 MB Beats 41.18%

const secondHighest2 = (s: string): number => {
  const set: Set<number> = new Set()

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') set.add(Number(s[i]))
  }

  const resultArr = [...set].sort((a, b) => b - a)

  return resultArr[1] || (resultArr[1] === 0 ? resultArr[1] : -1)
}
