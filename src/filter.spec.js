const filter = require("./filter");
var filterCondition;
describe("Filter", () => {
  it("filter([], x => true) should give []", () => { 
    filterCondition=x=>true;
    expect(filter([],filterCondition)).toEqual([]);    
  });

  it("filter([1,2,3], x => true) should give [1,2,3]", () => {
    filterCondition=x=>true;
    expect(filter([1, 2, 3],filterCondition)).toEqual([1, 2, 3]);
  });

  it("filter([1,2,3], x => false) should give []", () => {
    filterCondition=x=>false;
    expect(filter([1, 2, 3], filterCondition)).toEqual([]);
  });

  it("filter([1,2,3], x => x > 1) should give [2,3]", () => {
    filterCondition=x=>x>1;
    expect(filter([1, 2, 3], filterCondition)).toEqual([2, 3]);
  });

  it("filter([a, B, c, D], filterUpperCase) should give []", () => {
    filterCondition=x=>x==x.toUpperCase();
    expect(filter(["a", "B", "c", "D"], filterCondition)).toEqual(["B","D"]);
  });
});
