"use string";

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  let result = "",
    num = [],
    lett = [];

  for (let i = 0; i < s.length; i++) {
    if (isFinite(s[i])) {
      num.push(s[i]);
    } else lett.push(s[i]);
  }

  const diff = num.length - lett.length;

  if (diff > 1 || diff < -1) return "";

  if (diff <= 0) {
    for (let i = 0; num[i] || lett[i]; i++) {
      if (lett[i]) result += lett[i];
      if (num[i]) result += num[i];
    }
  } else {
    for (let i = 0; num[i] || lett[i]; i++) {
      if (num[i]) result += num[i];
      if (lett[i]) result += lett[i];
    }
  }

  return result;
};
