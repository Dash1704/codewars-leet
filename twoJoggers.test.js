const twoJoggers = require('./twoJoggers.js')

test('it should find when the joggers meet again', () => {
  expect(twoJoggers(5, 3)).toEqual([3, 5])
})

test('it should find when the joggers meet again', () => {
  expect(twoJoggers(4, 6)).toEqual([3, 2])
})