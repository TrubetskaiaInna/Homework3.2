let obj = {
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
  let arrResult = []
  let arrStr = str.split('')
  let arrKeys = Object.keys(obj)
  for (let k = 0; k < arrStr.length; k++) {
    for (let j = 0; j < arrKeys.length; j++) {
      for (let i = 0; i < obj[arrKeys[j]].length; i++) {
        if (obj[arrKeys[j]][i] === arrStr[k]) {
          arrResult.push(arrKeys[j], i + 1)
        }
      }
    }
  }
  return arrResult
}
let someStr = 'hello world'
let testResult = countResult(someStr)
console.log(testResult)
