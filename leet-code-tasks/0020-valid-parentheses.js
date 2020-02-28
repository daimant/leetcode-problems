"use strict";

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  for (let i = 0; i < arr.length; ) {
    if (
      s.indexOf("()") === -1 &&
      s.indexOf("{}") === -1 &&
      s.indexOf("[]") === -1
    )
      break;
    if (s.indexOf("()") !== -1)
      s = s.slice(0, s.indexOf("()")) + s.slice(s.indexOf("()") + 2, s.length);
    if (s.indexOf("{}") !== -1)
      s = s.slice(0, s.indexOf("{}")) + s.slice(s.indexOf("{}") + 2, s.length);
    if (s.indexOf("[]") !== -1)
      s = s.slice(0, s.indexOf("[]")) + s.slice(s.indexOf("[]") + 2, s.length);
  }
  return s.length === 0;
};
