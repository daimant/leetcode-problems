"use strict";

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let arrTrans = [],
    wordCollection = [
      { name: "a", trans: ".-" },
      { name: "b", trans: "-..." },
      { name: "c", trans: "-.-." },
      { name: "d", trans: "-.." },
      { name: "e", trans: "." },
      { name: "f", trans: "..-." },
      { name: "g", trans: "--." },
      { name: "h", trans: "...." },
      { name: "i", trans: ".." },
      { name: "j", trans: ".---" },
      { name: "k", trans: "-.-" },
      { name: "l", trans: ".-.." },
      { name: "m", trans: "--" },
      { name: "n", trans: "-." },
      { name: "o", trans: "---" },
      { name: "p", trans: ".--." },
      { name: "q", trans: "--.-" },
      { name: "r", trans: ".-." },
      { name: "s", trans: "..." },
      { name: "t", trans: "-" },
      { name: "u", trans: "..-" },
      { name: "v", trans: "...-" },
      { name: "w", trans: ".--" },
      { name: "x", trans: "-..-" },
      { name: "y", trans: "-.--" },
      { name: "z", trans: "--.." }
    ];

  for (let i = 0; i < words.length; i++) {
    let curr = "";

    for (let j = 0; j < words[i].length; j++) {
      curr += wordCollection.find((obj, trans) => obj.name === words[i][j])
        .trans;
    }

    if (~arrTrans.indexOf(curr) === 0) arrTrans.push(curr);
  }
  return arrTrans.length;
};
