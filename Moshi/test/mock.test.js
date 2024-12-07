fakes = require('../mock')
const db = require('../db')

describe('applyDiscount',() =>{
    it('should apply 10% discount if customer has more than 10 points', ()=>{
        db.getCustomerSync = function(customerId){
            console.log('Fake reading customer ...');
            return { customerId: 1, points:20 };
        }
        const order = { customerId: 1,totalPrice:10 };
        fakes.applyDiscount(order)
        expect(order.totalPrice).toBe(9); 
    });
});

describe('notifyCustomer', () =>{
    it('should send email to the customer',() =>{
        db.getCustomerSync = function(customerId){
            return {email: 'a'};
        }

        let mailSent = false;
        mail.send = function(email, message){
            mailSent=true
        }
        fakes.notifyCustomer({ customerId: 1})
        expect(mailSent).toBe(true);
    });
});