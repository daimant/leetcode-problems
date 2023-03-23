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

// Runtime 213 ms Beats 39.51% Memory 60.3 MB Beats 18.52%

const accountsMerge2 = (accounts: string[][]): string[][] => {
  const emailOwner = new Map()
  const resultAccs = new Map()

  accounts.forEach((person, iOut) => {
    const currCryptName = `${iOut}${person[0]}`
    const currEmails = person.slice(1)
    let realCurrName: undefined | string

    currEmails.forEach(email => {
      if (emailOwner.has(email)) realCurrName = emailOwner.get(email)
    })

    if (realCurrName) {
      resultAccs.set(realCurrName, [...resultAccs.get(realCurrName), ...currEmails])
    } else {
      resultAccs.set(currCryptName, person.slice(1))
      currEmails.forEach(email => {
        emailOwner.set(email, currCryptName)
      })
    }
  })

  const result = [...resultAccs].map(el => [el[0].replace(/[0-9]/g, ''), ...new Set(el[1].sort((a, b) => a > b ? 1 : -1))])
  const resultEmails = result.flat(1).filter(el => el.includes('@'))

  return resultEmails.length === new Set(resultEmails).size ? result : accountsMerge(result)
}
