/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const end = s.length - 1;

  for (let i = 0; i < s.length / 2; i++) {
    if (i >= end - i) break;
    else if (s[i] !== s[end - i]) {
      return (
        giveChance(s.slice(i + 1, end - i + 1)) ||
        giveChance(s.slice(i, end - i))
      );
    }
  }

  return true;

  function giveChance(arr) {
    const end = arr.length - 1;

    for (let j = 0; j <= end; j++) {
      if (j >= end - j) return true;
      else if (arr[j] !== arr[end - j]) break;
    }

    return false;
  }
};
