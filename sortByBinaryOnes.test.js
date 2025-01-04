const sortByBinaryOnes = require('./sortByBinaryOnes.js')

test('it should sort the array by most 1s in its binary form', () => {
  expect(sortByBinaryOnes([1, 3])).toEqual([3, 1])
})

test('it should sort the array by most 1s in its binary form', () => {
  expect(sortByBinaryOnes([1, 2, 3, 4])).toEqual([3, 1, 2, 4])
})

test('it should sort the array by most 1s in its binary form', () => {
  expect(sortByBinaryOnes([80, 21])).toEqual([21, 80])
})


test('it should sort the array by most 1s in its binary form', () => {
  expect(sortByBinaryOnes([3, 5])).toEqual([3, 5])
})

test('it should sort the array by most 1s in its binary form', () => {
  expect(sortByBinaryOnes([51, 99, 7, 21, 25, 44, 50, 49, 5, 33, 80, 1])).toEqual(
    [51, 99, 7, 21, 25, 44, 49, 50, 5, 33, 80, 1])
})