function maxDistance(colors: number[]): number {
  for (let i = 0; i < colors.length - 1; i++) {
    if (colors[i] !== colors[colors.length - 1] || colors[0] !== colors[colors.length - 1 - i]) return colors.length - 1 - i;
  }
};