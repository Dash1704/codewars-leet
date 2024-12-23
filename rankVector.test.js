const ranks = require("./rankVector.js")
test('it should return the rank of the scores', () => {
  expect(ranks([1, 2, 3])).toEqual([3, 2, 1])
})

test('it should return the rank of the scores', () => {
  expect(ranks([9, 3, 6, 10])).toEqual([2, 4, 3, 1])
})

test('it should return the rank of the scores', () => {
  expect(ranks([2, 2])).toEqual([1, 1])
})

test('it should return the rank of the scores', () => {
  expect(ranks([3, 3, 3, 3, 3, 5, 1])).toEqual([2, 2, 2, 2, 2, 1, 7])
})

test('it should return the rank of the scores', () => {
  expect(ranks([5, 2, 3, 5, 5, 4, 9, 8, 0])).toEqual([3, 8, 7, 3, 3, 6, 1, 2, 9])
})