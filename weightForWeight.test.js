const weightForWeight = require('./weightForWeight.js')

test("it should give weights new order", () => {
  expect(weightForWeight("123 100")).toBe("100 123")
})


test("it should give weights new order", () => {
  expect(weightForWeight("103 123 4444 99 2000")).toBe("2000 103 123 4444 99")
})


test("it should give weights new order", () => {
  expect(weightForWeight("103 123 4444 99 2000")).toBe("2000 103 123 4444 99")
})

test("it should give weights new order", () => {
  expect(weightForWeight("2000 10003 1234000 44444444 9999 11 11 22 123")).toBe("11 11 2000 10003 22 123 1234000 44444444 9999")
})

test("it should give weights new order", () => {
  expect(weightForWeight("90 180")).toBe("180 90")
})