// Accepted 76 / 76 testcases passed Sergey Pomortsev submitted at Feb 18, 2026 12:02
// Solution Runtime 38 ms Beats 93.82% Analyze Complexity Memory 57.76 MB Beats 72.31%

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  const arrs = []

  for (let i = 0; i < arr.length; i += size) {
    arrs.push(arr.slice(i, i + size))
  }

  return arrs
};
