const mormons = require('./mormons.js')

test('it should workout how many missions it takes to hit tagret', () => {
  expect(mormons(10, 3, 9)).toEqual(0)
})