// 16 / 50 testcases passed

const accountsMerge = (accounts: string[][]): string[][] => {
  const emailOwner = new Map()
  const result = new Map()

  accounts.forEach((person, iOut) => {
    const currCryptName = `${person[0]}${iOut}`
    const currEmails = person.slice(1)
    let realCurrName: undefined | string

    currEmails.forEach(email => {
      if (emailOwner.has(email)) realCurrName = emailOwner.get(email)
    })

    if (realCurrName) result.set(realCurrName, [...result.get(realCurrName), ...currEmails])
    else {
      result.set(currCryptName, person.slice(1))
      currEmails.forEach(email => {
        emailOwner.set(email, currCryptName)
      })
    }
  })

  return [...result].map(el => [el[0].replace(/[0-9]/i, ''), ...new Set(el[1].sort((a, b) => a > b ? 1 : -1))])
}
