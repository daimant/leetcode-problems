/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = n => {
  const set = new Set([0]);
  const arr = [0];

  outer: while (set.size < 2 ** n) {
    const prev = arr[arr.length - 1].toString(2);
    let curr;

    for (let i = 0; i < prev.length; i++) {
      const currFind = parseInt(
        `${prev.slice(0, i)}${prev[i] === "0" ? 1 : 0}${prev.slice(i + 1)}`,
        2
      );
      if (!set.has(currFind)) {
        curr = currFind;
        set.add(currFind);
        arr.push(currFind);
        continue outer;
      }
    }
    curr = parseInt(`1${prev}`, 2);
    set.add(curr);
    arr.push(curr);
  }

  return arr;
};
