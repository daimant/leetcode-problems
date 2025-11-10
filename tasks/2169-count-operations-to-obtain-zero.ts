function countOperations(num1: number, num2: number): number {
  let count = 0;

  while (num1 > 0 && num2 > 0 && num1 !== num2) {
    if (num1 > num2) num1 -= num2;
    else num2 -= num1;
    count++;
  }

  return num1 && num1 === num2 ? count + 1 : count;
}