const deltaBits = require("./deltaBits.js")

test("it should count how changes needed to change a to b in binary", () => {
  expect(deltaBits(31, 14)).toEqual(2)
})

test("it should count how changes needed to change a to b in binary", () => {
  expect(deltaBits(7, 17)).toEqual(3)
})
