// Accepted 33 / 33 testcases passed Sergey Pomortsev submitted at Feb 13, 2026 12:09
// Solution Runtime 37 ms Beats 4.55% Analyze Complexity Memory 65.36 MB Beats 77.27%

function sortTheStudents(score: number[][], k: number): number[][] {
  while(true) {
    let madeChanges = false

    for (let i = 0; i < score.length - 1; i++) {
      if (score[i][k] < score[i + 1][k]) {
        madeChanges = true

        for (let j = 0; j < score[i].length; j++) {
          const temp = score[i][j]
          score[i][j] = score[i + 1][j]
          score[i + 1][j] = temp
        }
      }
    }

    if (!madeChanges) return score
  }
};

// Accepted 33 / 33 testcases passed Sergey Pomortsev submitted at Feb 13, 2026 12:34
// Solution Runtime 1 ms Beats 40.91% Analyze Complexity Memory 65.38 MB Beats 77.27%

function sortTheStudents(score: number[][], k: number): number[][] {
  while(true) {
    let madeChanges = false

    for (let i = 0; i < score.length - 1; i++) {
      if (score[i][k] < score[i + 1][k]) {
        madeChanges = true

        const temp = score[i]
        score[i] = score[i + 1]
        score[i + 1] = temp
      }
    }

    if (!madeChanges) return score
  }
};

// Accepted 33 / 33 testcases passed Sergey Pomortsev submitted at Feb 13, 2026 12:31
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 63.53 MB Beats 100.00%

function sortTheStudents(score: number[][], k: number): number[][] => score.sort((a, b) => b[k] - a[k])