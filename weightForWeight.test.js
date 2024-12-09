const weightForWeight = require('./weightForWeight.js')

test("it should give weights new order", () => {
  expect(weightForWeight("123 100")).toBe("100 123")
})
