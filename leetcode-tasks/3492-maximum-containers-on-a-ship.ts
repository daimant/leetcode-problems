const maxContainers = (n: number, w: number, maxWeight: number): number =>
  maxWeight / w > n ** 2 ? n ** 2 : Math.trunc(maxWeight / w)
