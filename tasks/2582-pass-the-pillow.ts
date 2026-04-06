// Accepted 68 / 68 testcases passed Sergey Pomortsev submitted at Mar 30, 2026 10:58
// Solution Runtime 0 ms Beats 100.00% Memory 55.30 MB Beats 50.00%

function passThePillow(n: number, time: number): number {
  let pos = 1;
  let dir = 1;

  while (time) {
    if (dir) {
      pos++;
      if (pos === n) dir = 0;
    } else if (!dir) {
      pos--;
      if (pos === 1) dir = 1;
    }

    time--;
  }

  return pos;
};