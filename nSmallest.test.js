const firstNSmallest = require('./nSmallest.js')

test('it should return the smallest in order', () => {
  expect(firstNSmallest([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3])
})