const obj = {
  0: [' '],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}
const countResult = (str) => {
  const arrResult = []
  const arrStr = str.split('')
  const arrKeys = Object.keys(obj)
  arrStr.forEach(function (element2, index2) {
    arrKeys.forEach(function (element, index) {
      obj[arrKeys[index]].forEach(function (element3, index3) {
        if (element3 === element2) {
          arrResult[index2] = 'press ' + '"' + (element) + '"' + ' ' + (index3 + 1) + ' times'
        }
      })
    })
  })
  return arrResult
}
const someStr = 'hello world'
const testResult = countResult(someStr)
console.log(testResult)
