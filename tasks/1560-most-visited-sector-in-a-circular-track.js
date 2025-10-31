/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
const mostVisited = (n, rounds) => {
  const visits = [];
  let count = rounds.shift();
  let goal = rounds.shift();
  let max = 1;

  while (true) {
    if (visits[count]) {
      if (max < ++visits[count]) max = visits[count];
    } else visits[count] = 1;

    if (count === goal) {
      if (rounds.length) goal = rounds.shift();
      else break;
    }

    if (count === n) count = 1;
    else count++;
  }

  return visits.map((el, i) => (el === max ? i : null)).filter(el => el);
};
