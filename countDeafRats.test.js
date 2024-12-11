const countDeafRats = require('./countDeafRats.js')

test('it should return the number of rats facing the wrong way', () => {
  expect(countDeafRats("~O~O~O~O P")).toBe(0)
})