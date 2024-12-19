const whatCentury = require('./whatCentury.js')

test('it should say what century the year is in', () => {
  expect(whatCentury("1999")).toEqual("20th")
})

test('it should say what century the year is in', () => {
  expect(whatCentury("2000")).toEqual("20th")
})

test('it should say what century the year is in', () => {
  expect(whatCentury("2")).toEqual("1st")
})

test('it should say what century the year is in', () => {
  expect(whatCentury("2259")).toEqual("23rd")
})

test('it should say what century the year is in', () => {
  expect(whatCentury("1234")).toEqual("13th")
})



