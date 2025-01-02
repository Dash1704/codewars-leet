const sortByBinaryOnes = require('./sortByBinaryOnes.js')

test('it should sort the array by most 1s in its binary form', () => {
  expect(sortByBinaryOnes([1, 3])).toEqual([3, 1])
})


test('it should sort the array by most 1s in its binary form', () => {
  expect(sortByBinaryOnes([1, 2, 3, 4])).toEqual([3, 1, 2, 4])
})