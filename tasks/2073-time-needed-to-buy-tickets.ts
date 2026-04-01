// Accepted 65 / 65 testcases passed Sergey Pomortsev submitted at Mar 31, 2026 22:06
// Solution Runtime 2 ms Beats 45.93% Memory 56.03 MB Beats 22.96%

function timeRequiredToBuy(tickets: number[], k: number): number {
  let count = 0

  while (true) {
    tickets[0]--;

    if (tickets[0] === 0) {
      if (k === 0) {
        return ++count;
      } else {
        tickets.shift();
      }
    } else tickets.push(tickets.shift());

    count++;
    k--;
    if (k === -1) k = tickets.length - 1;
  }
};
