// Accepted 36 / 36 testcases passed Sergey Pomortsev submitted at Apr 02, 2026 20:45
// Solution Runtime 34 ms Beats 95.93% Memory 55.62 MB Beats 16.40%

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: function (check) {
      if (check === val) return true;
      else throw Error('Not Equal');
    },
    notToBe: function (check) {
      if (check !== val) return true;
      else throw Error('Equal');
    }
  }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */