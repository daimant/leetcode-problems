/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const lenChk = p.length;
  let expect = {},
    check = {},
    result = [];

  for (let j = 0; j < p.length; j++) {
    const curr = p[j];
    if (expect[curr]) expect[curr] = expect[curr] + 1;
    else expect[curr] = 1;
    check[curr] = 0;
  }

  for (let i = 0; i + lenChk <= s.length; i++) {
    if (i) {
      const prev = s[i - 1];
      const curr = s[i + lenChk - 1];
      if (expect[prev]) check[prev]--;
      if (!expect[curr]) continue;

      if (check[curr]) check[curr]++;
      else check[curr] = 1;
    } else {
      for (let k = 0; k < lenChk; k++) {
        const curr = s[k];
        if (!expect[curr]) continue;
        if (check[curr]) check[curr] = check[curr] + 1;
        else check[curr] = 1;
      }
    }

    let isEqual = true;
    for (const key in expect) {
      if (expect[key] !== check[key]) isEqual = false;
    }
    if (isEqual) result.push(i);
  }

  return result;
};
