const incrementString = require('./code.js');

test('should add one to the end if no number', () => {
  expect(incrementString("foo")).toBe("foo1");
});

test('should add one to the existing number', () => {
  expect(incrementString("foobar000")).toBe("foobar001");
});

test('should add one to the end existing number test 2', () => {
  expect(incrementString("fo99obar99")).toBe("fo99obar100");
});

test('should add one to the end existing number test 2', () => {
  expect(incrementString("fo99obar1234")).toBe("fo99obar1235");
});

test('should add one to the end existing number test 2', () => {
  expect(incrementString("1")).toBe("2");
});

test('should add one to the end existing number test 2', () => {
  expect(incrementString("a")).toBe("a1");
});

test('should add one to the end existing number test 2', () => {
  expect(incrementString("009")).toBe("010");
});