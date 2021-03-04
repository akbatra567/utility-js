const max = require('./max');

describe('Should Return Maximum of the array', () => {
    var actual, expected;
    it('[1,2,3,4] should return [4]', () => {
        actual = [1,2,3,4];
        expect(max(actual, actual.length)).toEqual(4);
    })
})