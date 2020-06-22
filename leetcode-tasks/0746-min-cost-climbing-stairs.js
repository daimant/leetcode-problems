/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = cost => {
  const canBeCheck = [0, 1];
  const costs = new Map([
    [0, cost[0]],
    [1, cost[1]]
  ]);
  const checked = [];

  while (canBeCheck.length) {
    const index = canBeCheck.shift();
    const value = costs.get(index);

    if (checked.includes(index)) continue;

    checked.push(index);
    check(index, value, index + 1, index + 2);
  }

  return Math.min(costs.get(cost.length - 1), costs.get(cost.length - 2));

  function check(index, value, next, nextnext) {
    if (next >= cost.length || nextnext >= cost.length) return;

    update(next, value);
    update(nextnext, value);

    if (!checked.includes(next)) canBeCheck.push(next);
    if (!checked.includes(nextnext)) canBeCheck.push(nextnext);
  }
  function update(index, value) {
    if (!costs.has(index) || costs.get(index) > value + cost[index])
      costs.set(index, value + cost[index]);
  }
};
