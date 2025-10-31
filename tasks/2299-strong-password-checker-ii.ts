// Runtime 61 ms Beats 100% Memory 42.3 MB Beats 100%

const strongPasswordCheckerII = (password: string): boolean => {
  if (password.length < 8) return false
  if (password.toLowerCase() === password) return false
  if (password.toUpperCase() === password) return false
  if (['0','1','2','3','4','5','6','7','8','9'].every(el => !password.includes(el))) return false
  if (['!','@','#','$','%','^','&','*','(',')','-','+'].every(el => !password.includes(el))) return false
  for (let i = 0; i < password.length - 1; i++) if (password[i] === password[i + 1]) return false

  return true
}
