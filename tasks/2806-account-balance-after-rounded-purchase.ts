// Accepted
// Runtime 47 ms Beats 91.67%
// Memory 51.05 MB Beats 8.33%

const accountBalanceAfterPurchase = (purchaseAmount: number): number => 100 - Math.round(purchaseAmount / 10) * 10
