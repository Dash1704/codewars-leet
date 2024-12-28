const coin = require('./headsAndTails.js')

test('it should return all coin possibilities', () => {
  expect(coin(3)).toEqual(["HHH", "HHT", "HTH", "HTT", "THH", "THT", "TTH", "TTT"])
})

