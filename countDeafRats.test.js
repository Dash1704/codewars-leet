const countDeafRats = require('./countDeafRats.js')

test('it should return the number of rats facing the wrong way', () => {
  expect(countDeafRats("~O~O~O~O P")).toBe(0)
})

test('it should return the number of rats facing the wrong way', () => {
  expect(countDeafRats("P O~ O~ ~O O~")).toBe(1)
})

test('it should return the number of rats facing the wrong way', () => {
  expect(countDeafRats("~O~O~O~OP~O~OO~")).toBe(2)
})