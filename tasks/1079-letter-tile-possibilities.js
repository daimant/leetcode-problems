/**
 * @param {string} tiles
 * @return {number}
 */
const numTilePossibilities = tiles => {
  const letts = new Map();
  const objs = [];
  const added = new Set();

  for (let lett of tiles) {
    if (!letts.has(lett)) {
      letts.set(lett, 1);

      const obj = {str: `${lett}`};
      obj[`${lett}`] = 1;
      objs.push(obj);
    }
    else letts.set(lett, letts.get(lett) + 1);
  }

  for (let i of objs)
    for (let j of letts.keys())
      if (!i[j]) i[j] = 0;

  for (let i = 0; i < tiles.length - 1; i++) {
    const currObjList = [];
    // make new obj (itt on singles letters and each prev obj)
    for (let currLett of letts.keys()) {
      for (let currObj of objs) {
        if (currObj[currLett] < letts.get(currLett) && !added.has(`${currObj['str']}${currLett}`)) {
          const newObj = {};
          for (let param in currObj) {
            newObj[param] = currObj[param];
          }
          newObj['str'] += currLett;
          newObj[currLett]++;
          currObjList.push(newObj);
          added.add(newObj['str']);
        }
      }
    }
    objs.push(...currObjList);
  }
  return objs.length;
};