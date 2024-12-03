const lib = require('../lib')
// test('Test yambere', ()=>{
    // throw new Error('Something failed')
// })
describe('absolute',()=>{
    it('should return a positive number if input is positive', ()=>{
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    
    it('should return a positive number if input is negative', ()=>{
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    it('should return 0 number if input is 0', ()=>{
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('Indamukanyo',()=>{
    it('should return a greeting message', ()=>{
        const result = lib.greet('Mr Ndi')
        expect(result).toMatch(/Mr Ndi/)
        expect(result).toContain('Mr Ndi')
    });
})