"use strict";

/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  let arr = S.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].replace(/^[a,e,i,o,u]/i, "") === arr[i])
      arr[i] = arr[i].slice(1) + arr[i][0];
    arr[i] = arr[i] + "m" + new Array(2 + i).fill("a").join("");
  }

  return arr.join(" ");
};
