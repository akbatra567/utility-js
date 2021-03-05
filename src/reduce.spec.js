const reduce = require('./reduce');

describe('Reduce Testing', () => {

    it('reduce([], (x,y)=>x+y) should give undefined', () => {
        expect(reduce([], (x,y)=>x+y)).toEqual(undefined);
    });

    it('reduce([], ((x,y)=>x+y,10) ) should give 10', () => {
        expect(reduce([], (x,y)=>x+y,10)).toEqual(10);
    });

    it('reduce([a, b, c], (x,y)=>x+y) should give abc', () => {
        expect(reduce(['a', 'b', 'c'], (x,y)=>x+y)).toEqual('abc');
    })

    it('reduce([a, b, c], (x,y)=>x+y,z) should give zabc', () => {
        expect(reduce(['a', 'b', 'c'],(x,y)=>x+y,'z')).toEqual('zabc');
    });

});
