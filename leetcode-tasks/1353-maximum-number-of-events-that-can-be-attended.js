"use strict";

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  if (events.length < 2) return events.length;

  events.sort((a, b) => a[1] - b[1]);
  let set = new Set();

  for (let i = 0; i < events.length; i++) {
    for (let j = events[i][0]; j <= events[i][1]; j++) {
      if (!set.has(j)) {
        set.add(j);
        break;
      }
    }
  }

  return set.size;
};
