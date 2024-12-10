const funnelOut = require('./funnelOut.js')

test('it should funnel out the smallest letter', () => {
  expect(funnelOut([["q"]])).toBe("q")
})