// Из входной строки нужно удалить все вхождения подстроки,
// чтобы в результате подстрока не встречалась

// входная строка  — abccdedefg
// подстрока, который должно не стать — cde

function deleteSubstring (str, match) {
  // new RegExp(reg, "flags"); hint
  // /${match}/g hint
  let findReplace = true
  const regStr = new RegExp(match, "g")

  while (findReplace) {
    if (str.includes(match)) {
      str = str.replace(regStr, '')
    } else findReplace = false
  }

  return str
}

const result = deleteSubstring("abccdedefg", "cde");

console.log(result);
