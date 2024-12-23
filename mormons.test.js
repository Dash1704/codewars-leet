const mormons = require('./mormons.js')

test('it should workout how many missions it takes to hit tagret', () => {
  expect(mormons(10, 3, 9)).toEqual(0)
})

test('it should workout how many missions it takes to hit tagret', () => {
  expect(mormons(40, 2, 120)).toEqual(1)
})

test('it should workout how many missions it takes to hit tagret', () => {
  expect(mormons(40, 2, 121)).toEqual(2)
})

test('it should workout how many missions it takes to hit tagret', () => {
  expect(mormons(20000, 2, 7000000000)).toEqual(12)
})