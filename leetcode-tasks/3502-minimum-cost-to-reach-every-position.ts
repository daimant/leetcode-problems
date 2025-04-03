const minCosts = (cost: number[]): number[] => {
  for (let i = 1; i < cost.length; i++) {
    if (cost[i] > cost[i - 1]) {
      cost[i] = cost[i - 1];
    }
  }

  return cost;
};
