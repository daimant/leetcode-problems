/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let arr = [];
  for (let i = 2; i < n; i++) arr.push(i);

  for (let i = 0; i < Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i + arr[i]; j < n; j += arr[i]) {
        arr[j] = undefined;
      }
    }
  }

  return arr.filter(item => item).length;
};

//   let arr = [];
//   for(let i = 2; i < n; i++) arr.push(i)
//   let current;

//   for(let j = 0; j < arr.length; j++) {
//     current = arr[j]
//     arr = arr.filter(item => item % current !== 0)
//     arr.splice(j,0,current);
//   }

//   return arr.length;
