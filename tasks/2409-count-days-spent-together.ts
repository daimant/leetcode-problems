// wrong

const countDaysTogether = (arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number => {
  const [firstStartMonth, firstStartDay] = arriveAlice.split('-').map(el => Number(el))
  const [firstEndMonth, firstEndDay] = arriveAlice.split('-').map(el => Number(el))
  const daysFirst = new Set()

  for (let month = firstStartMonth; month <= firstEndMonth; month++) {
    for (let day = firstStartDay; month <= firstEndDay; day++) {
      daysFirst.add(`${month}-${day}`)
    }
  }
  console.log(daysFirst)

  let count = 0
  const [secondStartMonth, secondStartDay] = arriveBob.split('-').map(el => Number(el))
  const [secondEndMonth, secondEndDay] = arriveBob.split('-').map(el => Number(el))

  for (let month = secondStartMonth; month <= secondEndMonth; month++) {
    for (let day = secondStartDay; month <= secondEndDay; day++) {
      if (daysFirst.has(`${month}-${day}`)) count++
    }
  }

  return count
};

// correct
// Accepted 51 / 51 testcases passed Sergey Pomortsev submitted at Mar 27, 2026 12:47
// Solution Runtime 0 ms Beats 100.00% Memory 55.79 MB Beats -%

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
  const aliceMonths = new Array(12).fill(0).map((el, i) => new Array(days[i]).fill(0));

  const [arriveAliceMM, arriveAliceDD] = arriveAlice.split('-').map((el, i) => +el - 1);
  const [leaveAliceeMM, leaveAliceDD] = leaveAlice.split('-').map((el, i) => +el - 1);
  const [arriveBobMM, arriveBobDD] = arriveBob.split('-').map((el, i) => +el - 1);
  const [leaveBobMM, leaveBobDD] = leaveBob.split('-').map((el, i) => +el - 1);

  let count = 0;

  for (let i = arriveAliceMM; i <= leaveAliceeMM; i++) {
    const dayStart = arriveAliceMM === i ? arriveAliceDD : 0;
    const dayEnd = leaveAliceeMM === i ? leaveAliceDD : days[i];

    for (let j = dayStart; j <= dayEnd; j++) {
      aliceMonths[i][j]++;
    }
  }

  for (let i = arriveBobMM; i <= leaveBobMM; i++) {
    const dayStart = arriveBobMM === i ? arriveBobDD : 0;
    const dayEnd = leaveBobMM === i ? leaveBobDD : days[i];

    for (let j = dayStart; j <= dayEnd; j++) {
      if (aliceMonths[i][j]) count++;
    }
  }

  return count;
};