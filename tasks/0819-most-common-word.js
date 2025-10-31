"use strict";

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let parse = paragraph
    .toLowerCase()
    .replace(/[^a-z]/gi, " ")
    .split(" ")
    .filter(el => el);

  let ignore = new Set(banned);
  let table = new Map();
  let maxRepeat = 1;

  for (let i = 0; i < parse.length; i++) {
    if (!ignore.has(parse[i]) && table.has(parse[i])) {
      let getWord = table.get(parse[i]) + 1;
      table.set(parse[i], getWord);
      if (getWord > maxRepeat) maxRepeat = getWord;
    }

    if (!ignore.has(parse[i]) && !table.has(parse[i])) table.set(parse[i], 1);
  }

  table = Array.from(table);

  for (let i = 0; i < table.length; i++) {
    if (table[i][1] === maxRepeat) {
      return table[i][0];
    }
  }
};
