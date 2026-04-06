// Accepted 6 / 6 testcases passed Sergey Pomortsev submitted at Feb 03, 2026 18:13
// Solution Runtime 39 ms Beats 86.97% Analyze Complexity Memory 55.50 MB Beats 22.81%

async function sleep(millis: number): Promise<void> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, millis)
  })
}


/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */