const numericals = require("./numericalString.js")

test('it should return the numerical value of string', () => {
  expect(numericals("Hello, World!")).toEqual("1112111121311")
})