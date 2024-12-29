const getUserIds = require('./userId.js')

test('it should get valid users Ids', () => {
  expect(getUserIds(' uid12345 ')).toEqual(['12345'])
})

test('it should get valid users Ids', () => {
  expect(getUserIds("uidO#ne, ###uidtwo")).toEqual(["one", "two"])
})

test('it should get valid users Ids', () => {
  expect(getUserIds("uidPASswORd, uidPaSsWo rd, uidhaX0R, uid  uSER")).toEqual(["password", "passwo rd", "hax0r", "user"])
})
