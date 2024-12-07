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
});

describe('ifarangaRyemewe',()=>{
    it('should return supported currency',()=>{
        const result = lib.getCurrencies();

        // Asserting that is too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        // Assertion that are too specific
        expect(result[0]).toBe('USD')
        expect(result[1]).toBe('RWF')
        expect(result[2]).toBe('RUBLE')
        expect(result.length).toBe(3)

        // Testing the function in the proper way
        expect(result).toContain('USD')
        expect(result).toContain('RWF')
        expect(result).toContain('RUBLE')

        // Ideal way
        expect(result).toEqual(expect.arrayContaining(['USD','RWF','RUBLE']))
    });
});

describe('getProduct',()=>{
    it('should return a product with a given id',()=>{
        const result = lib.getProduct(1)

        // expect(result).toEqual({id:1,price:10})
        expect(result).toMatchObject({id:1, price:10})
        expect(result).toHaveProperty('id',1)
    });
});

describe('registerUser',()=>{
    it('should throw if username is falsy', ()=>{
        // But what are the falsely, in short those are :
            // 1. Null
            // 2. undefined
            // 3. '' --| empty string
            // 4. 0
            // 5. false
        // expect(() => { lib.registerUser(null) }).toThrow();
        const args =[null,undefined,NaN,'',0,false]
        args.forEach(a =>{
            expect(() => { lib.registerUser(a) }).toThrow();
        })

    });
    it('should return a user object if valid username is passed',()=>{
        const result = lib.registerUser('Ndi')
        expect(result).toMatchObject({ username:'Ndi' });
        expect(result.id).toBeGreaterThan(0);
    });
});