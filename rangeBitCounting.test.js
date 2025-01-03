const rangeBitCount = require('./rangeBitCounting.js')

test('it should sort the array by most 1s in its binary form', () => {
  expect(rangeBitCount(2,7)).toEqual(11)
})

test('it should sort the array by most 1s in its binary form', () => {
  expect(rangeBitCount(0,1)).toEqual(1)
})

test('it should sort the array by most 1s in its binary form', () => {
  expect(rangeBitCount(4, 4)).toEqual(1)
})

