// Accepted
// Runtime 54 ms Beats 95.63%
// Memory 52.02 MB Beats 20.00%

const numberOfEmployeesWhoMetTarget = (hours: number[], target: number): number => hours.filter(el => el >= target).length
