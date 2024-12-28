const fibonacci = require('./fibonacci.js')


test('it should return all coin possibilities', () => {
  expect(fibonacci(3)).toEqual(3)
})

test('it should return all coin possibilities', () => {
  expect(fibonacci(6)).toEqual(13)
})

