const coin = require('./headsAndTails.js')

test('it should return all coin possibilities', () => {
  expect(coin(1)).toEqual(["H", "T"])
})

