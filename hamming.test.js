const hamming = require('./hamming.js')

test('the function should return the amount of times the two strings differ', () => {
  expect(hamming("a","b")).toBe(1)
})

test('the function should return the amount of times the two strings differ', () => {
  expect(hamming("Hello World","Hello World")).toBe(0)
})