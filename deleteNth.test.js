const deleteNth = require('./deleteNth.js')

test('it should delete the element if it occurs more than n number of times', () => {
  expect(deleteNth([20,37,20,21], 1)).toBe(1)
})