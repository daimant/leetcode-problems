"use strict";

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let sessions = new Map();

  for (let i = 0; i < cpdomains.length; i++) {
    let currSession = cpdomains[i].split(" ").reverse();
    if (sessions.has(currSession[0]))
      sessions.set(
        currSession[0],
        sessions.get(currSession[0]) + +currSession[1]
      );
    if (!sessions.has(currSession[0]))
      sessions.set(currSession[0], +currSession[1]);

    let separete = currSession.slice();

    while (separete[0].indexOf(".") !== -1) {
      separete[0] = separete[0]
        .split(".")
        .slice(1)
        .join(".");

      if (sessions.has(separete[0]))
        sessions.set(separete[0], sessions.get(separete[0]) + +separete[1]);
      if (!sessions.has(separete[0])) sessions.set(separete[0], +separete[1]);
    }
  }

  return Array.from(sessions).map(el => el.reverse().join(" "));
};
