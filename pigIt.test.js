const pigIt = require('./pigIt.js');

test("it should move the first letter to the end and add ay", () => {
  expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay')
})

test("it should move the first letter to the end and add ay", () => {
  expect(pigIt('Hello world !')).toEqual('elloHay orldway !')
})

