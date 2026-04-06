// Accepted 238 / 238 testcases passed Sergey Pomortsev submitted at Apr 01, 2026 22:17
// Solution Runtime 0 ms Beats 100.00% Memory 56.68 MB Beats 50.00%

function largestInteger(num: number): number {
  const arr = num.toString().split('');

  while (true) {
    let isSwapped = false;
    let lastEven = -1;
    let lastOdd = -1;

    for (let i = 0; i < arr.length; i++) {
      if (+arr[i] % 2 === 0) {
        if (lastEven > -1 && arr[lastEven] < arr[i]) {
          [arr[lastEven], arr[i]] = [arr[i], arr[lastEven]];
          isSwapped = true;
        }
        lastEven = i;
      } else {
        if (lastOdd > -1 && arr[lastOdd] < arr[i]) {
          [arr[lastOdd], arr[i]] = [arr[i], arr[lastOdd]];
          isSwapped = true;
        }
        lastOdd = i;
      }
    }

    if (!isSwapped) break;
  }

  return +arr.join('');
};