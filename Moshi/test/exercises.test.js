const exer = require('../exercise1')

describe('fizzBuzz', ()=>{
    it('should throw an error in case non integer input is given',()=>{
        expect(()=> {fizzBuzz(NaN); }).toThrow();
        expect(()=> {fizzBuzz(null); }).toThrow();
        expect(()=> {fizzBuzz(''); }).toThrow();
        expect(()=> {fizzBuzz(undefined); }).toThrow();
    });

    it('should return FizzBuzz for number divisible by 3 and 5',()=>{
        const answer = exer.fizzBuzz(15)
        expect(answer).toBe('FizzBuzz')
    });

    it('should return Buzz for number divisible by 5',()=>{
        const answer = exer.fizzBuzz(10)
        expect(answer).toBe('Buzz')
    });

    it('should return Fizz for number divisible by 3',()=>{
        const answer = exer.fizzBuzz(12)
        expect(answer).toBe('Fizz')
    });
});