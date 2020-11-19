//First version
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const canFormArray = function(arr, pieces) {
  for (let i = 0; i < arr.length; i++) {
    let check = [];

    for (let j = 0; j < pieces.length; j++) {
      // console.log('i:',i,' j:', j)
      if (pieces[j][0] === arr[i]) {
        check = [...pieces[j]];
        // console.log('choise arr:', check)
        break;
      }

      if (pieces[j][0] !== arr[i] && j === pieces.length - 1) return false;
    }

    for (let k = 1; k < check.length; k++) {
      i++;
      // console.log('i:', i,' k:', k, arr[i],check[k])
      if (arr[i] === check[k]) continue;
      else return false;
    }
  }

  return true;
};

//second version
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const canFormArray2 = function(arr, pieces) {
  const checked = new Set();
  for (let i = 0; i < arr.length; i++) {
    let check = [];

    for (let j = 0; j < pieces.length; j++) {
      if (checked.has(j)) continue;
      // console.log('i:',i,' j:', j)
      if (pieces[j][0] === arr[i]) {
        check = [...pieces[j]];
        checked.add(j);
        // console.log('choise arr:', check)
        break;
      }

      if (pieces[j][0] !== arr[i] && j === pieces.length - 1) return false;
    }

    for (let k = 1; k < check.length; k++) {
      i++;
      // console.log('i:', i,' k:', k, arr[i],check[k])
      if (arr[i] !== check[k]) return false;
    }
  }

  return true;
};

//third optimized solution
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const canFormArray3 = function(arr, pieces) {
  const piecesMap = new Map(pieces.map(el => [el[0], el]));

  for (let i = 0; i < arr.length; i++) {
    const item = piecesMap.get(arr[i]);
    if (!item) return false;

    for (let k = 1; k < item.length; k++) {
      i++;
      if (arr[i] !== item[k]) return false;
    }
  }

  return true;
};
