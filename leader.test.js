const leaderB = require('./leader.js')

test('it should work out how many points are needed to win', () => {
  expect(leaderB('GiacomoSorbi', 23914, 23867)).toEqual("To beat GiacomoSorbi's score, I must complete 15 Beta kata and 2 8kyu kata.")
})

test('it should work out how many points are needed to win', () => {
  expect(leaderB('ZozoFouchtra', 15991, 12000)).toEqual("To beat ZozoFouchtra's score, I must complete 1330 Beta kata and 1 8kyu kata. Dammit!")
})