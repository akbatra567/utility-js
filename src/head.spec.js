const head = require('./head');

describe('Head: returns first element', () => {

    it('head([1,2,3]) should be 1', () => {
        expect(head([1, 2, 3])).toEqual(1);
    });

    it('head([]) should be null or undefined', () => {
       expect(head([])).toEqual(null);
    });

    it('head([]) should be null or undefined', () => {
        expect(head()).toEqual(undefined);
    });

})
