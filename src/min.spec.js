const min = require('./min')

describe('Should Return Minimum of the array', () => {
    var actual;
    it('[1,2,3,4] should return [1]', () => {
        actual = [1,2,3,4];
        expect(min(actual, actual.length)).toBe(1);
    })
})