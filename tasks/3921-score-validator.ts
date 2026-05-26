// Accepted 868 / 868 testcases passed Sergey Pomortsev submitted at May 26, 2026 21:29
// Solution Runtime 0 ms Beats 100.00% Memory 58.80 MB Beats 54.67%

function scoreValidator(events: string[]): number[] {
  let score = 0;
  let counter = 0;

  for (let i = 0; i < events.length; i++) {
    if (counter === 10) break;
    else if (Number.isInteger(+events[i])) score += Number(events[i]);
    else if (events[i] === 'W') counter++;
    else score++;
  }

  return [score, counter];
};