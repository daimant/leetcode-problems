// Accepted Sergey Pomortsev submitted at Feb 27, 2026 22:39  Solution Runtime 42 ms Beats 0.00% Analyze Complexity Memory 57.46 MB Beats 77.78%

function generateKey(num1: number, num2: number, num3: number): number {
  const [str1, str2, str3] = [num1, num2, num3].map(el => el.toString().padStart(4, '0'))
  let resultStr = '';

  for (let i = 0; i < str1.length; i++) {
    resultStr += `${Math.min(+str1[i], +str2[i], +str3[i])}`;
  }

  return +resultStr;
};