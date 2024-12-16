const whatCentury = require('./whatCentury.js')

test('it should say what century the year is in', () => {
  expect(whatCentury("1999")).toEqual("20th")
})