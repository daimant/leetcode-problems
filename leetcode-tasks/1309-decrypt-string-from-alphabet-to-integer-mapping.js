/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  const letter = new Map([
    ["1", "a"],
    ["2", "b"],
    ["3", "c"],
    ["4", "d"],
    ["5", "e"],
    ["6", "f"],
    ["7", "g"],
    ["8", "h"],
    ["9", "i"],
    ["10", "j"],
    ["11", "k"],
    ["12", "l"],
    ["13", "m"],
    ["14", "n"],
    ["15", "o"],
    ["16", "p"],
    ["17", "q"],
    ["18", "r"],
    ["19", "s"],
    ["20", "t"],
    ["21", "u"],
    ["22", "v"],
    ["23", "w"],
    ["24", "x"],
    ["25", "y"],
    ["26", "z"]
  ]);
  let arrNum = [];
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      arrNum.push(s[i] + s[i + 1]);
      i += 2;
      continue;
    }
    arrNum.push(s[i]);
  }

  for (let i of arrNum) result += letter.get(i);

  return result;
};

//или так
//const freqAlphabets = s => s.replace(/(\d\d#|\d)/g, t => map[t.length === 3 ? t[0] + t[1] : t]);
