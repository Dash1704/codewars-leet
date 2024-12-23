const ranks = require("./rankVector.js")

test('it should return the rank of the scores', () => {
  expect(ranks([1, 2, 3])).toEqual([3, 2, 1])
})

test('it should return the rank of the scores', () => {
  expect(ranks([9,3,6,10])).toEqual([[2,4,3,1]])
})