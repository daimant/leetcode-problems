"use strict";

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let currIndLett = 0;

  for (let i = 0; i < typed.length; i++) {
    const currLett = name[currIndLett];

    if (currLett === typed[i] && currLett === name[currIndLett + 1]) {
      currIndLett++;
      continue;
    }
    if (currLett === typed[i] && currLett === typed[i + 1]) continue;
    if (currLett === typed[i]) currIndLett++;
    if (currLett !== typed[i]) return false;
  }

  return currIndLett === name.length;
};
