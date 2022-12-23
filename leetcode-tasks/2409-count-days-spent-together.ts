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
