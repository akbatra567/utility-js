const tail = require("./tail");

describe("Tail - returns everything except first element", () => {
  test("tail([1,2,3]) should be [2, 3]", () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });
  test("tail([]) should be []", () => {
    expect(tail([])).toEqual([]);
  });
  test("tail([1]) should be []", () => {
    expect(tail([1])).toEqual([]);
  });
});
