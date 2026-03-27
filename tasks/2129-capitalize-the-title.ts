// Accepted 200 / 200 testcases passed Sergey Pomortsev submitted at Mar 25, 2026 23:39
// Solution Runtime 0 ms Beats 100.00% Memory 55.56 MB Beats 72.73%

function capitalizeTitle(title: string): string {
  return title.split(' ').map(el => el.length < 3 ? el.toLowerCase() : el[0].toUpperCase() + el.slice(1).toLowerCase()).join(' ');
};