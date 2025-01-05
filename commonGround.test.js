const commonGround = require('./commonGround.js')

test('it should return common words or death if none', () => {
  expect(commonGround("eat chicken", "eat chicken and rice")).toEqual("eat chicken")
})

test('it should return common words or death if none', () => {
  expect(commonGround("eat a burger and drink a coke", "drink a coke")).toEqual("drink a coke")
})
