const PaginationHelper = require('./paginationHelper.js');

test("it should use the itemCount function to return number of items in collection", () => {
  const pagin = new PaginationHelper(['a','b','c','d','e','f'], 4)
  expect(pagin.itemCount()).toBe(6)
})

test("it should use the itemCount function to return number of items in collection", () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
	const helper = new PaginationHelper(collection, 10)

  expect(helper.itemCount()).toBe(24)
})

test("it should use the pageCount function to return number of pages needed for the items", () => {
  const pagin = new PaginationHelper(['a','b','c','d','e','f'], 4)
  expect(pagin.pageCount()).toBe(2)
})

test("it should return amount of items on the current page", () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
	const helper = new PaginationHelper(collection, 10)
  expect(helper.pageItemCount(1)).toBe(10)
})

test("it should return amount of items on the current page", () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
	const helper = new PaginationHelper(collection, 10)
  expect(helper.pageItemCount(2)).toBe(4)
})

test("it should return amount of items on the current page", () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const helper = new PaginationHelper(collection, 11)
  expect(helper.pageItemCount(0)).toBe(9)
})

test("it should determine what page an item is on", () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
	const helper = new PaginationHelper(collection, 10)
  expect(helper.pageIndex(22)).toBe(2)
})


test("it should determine what page an item is on", () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
	const helper = new PaginationHelper(collection, 10)
  expect(helper.pageIndex(-1)).toBe(-1)
})