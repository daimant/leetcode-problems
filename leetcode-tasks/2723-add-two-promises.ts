// Accepted
// Runtime 46 ms Beats 99.93%
// Memory 51.60 MB Beats 54.15%

type P = Promise<number>

const addTwoPromises = async (promise1: P, promise2: P): P => await promise1 + await promise2
