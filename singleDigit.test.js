const singleDigit = require("./singleDigit")

test('it should return a single digit after adding the sum of its binary form', () => {
  expect(singleDigit(5)).toEqual(5)
})

test('it should return a single digit after adding the sum of its binary form', () => {
  expect(singleDigit(9)).toEqual(8)
})