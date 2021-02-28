module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(el => el.join(''))
  do {
    let size = str.length
    brackets.forEach(el => str = str.replace(el, ''))
    changed = str.length !== size
  } while (changed)
  return !Boolean(str)
}
