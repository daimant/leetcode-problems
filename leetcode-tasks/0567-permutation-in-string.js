/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const lenChk = s1.length;
  let expect = {},
    check = {};

  for (let j = 0; j < s1.length; j++) {
    const curr = s1[j];
    if (expect[curr]) expect[curr] = expect[curr] + 1;
    else expect[curr] = 1;
    check[curr] = 0;
  }

  for (let i = 0; i + lenChk <= s2.length; i++) {
    if (i) {
      const prev = s2[i - 1];
      const curr = s2[i + lenChk - 1];
      if (expect[prev]) check[prev]--;
      if (!expect[curr]) continue;

      if (check[curr]) check[curr]++;
      else check[curr] = 1;
    } else {
      for (let k = 0; k < lenChk; k++) {
        const curr = s2[k];
        if (!expect[curr]) continue;
        if (check[curr]) check[curr] = check[curr] + 1;
        else check[curr] = 1;
      }
    }

    let isEqual = true;
    for (const key in expect) {
      if (expect[key] !== check[key]) isEqual = false;
    }
    if (isEqual) return true;
  }

  return false;
};
