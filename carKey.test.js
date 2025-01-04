const carKey = require('./carKey.js')

test('it should say who stole the car key', () => {
  expect(carKey(['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', 
    '01100100', '01100101', '01110010'])).toEqual('Alexander')
})