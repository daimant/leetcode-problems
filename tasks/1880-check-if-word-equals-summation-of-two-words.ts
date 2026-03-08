// Accepted 100 / 100 testcases passed Sergey Pomortsev submitted at Mar 03, 2026 19:01
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 55.61 MB Beats 46.15%

function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
  const [firstStr, secondStr, targetStr] =
    Array
      .from(arguments)
      .map(el => el.split('').reduce((acc, curr) => acc + String(curr.charCodeAt(0) - 97), ''));

  return +firstStr + +secondStr === +targetStr;
};