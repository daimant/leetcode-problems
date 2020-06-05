/**
 * @param {string} s
 * @return {string[]}
 */
const printVertically = function(s) {
  const arr = s.split(" ");
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) arr.splice(i, 1);
    else if (arr[i].length > maxLen) maxLen = arr[i].length;
  }

  const result = new Array(maxLen).fill("");

  for (let i = 0; i < maxLen; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i]) result[i] += arr[j][i];
      else result[i] += " ";
    }
  }

  return result.map(el => el.replace(/ +$/, ""));
};
