const db = require('./db')

module.exports.applyDiscount = function(order) {
    const customer = db.getCustomerSync(order.customerId)

    if (customer.points > 10)
        order.totalPrice*= 0.9;
}

module.exports.notifyCustomer = function(order){
    const customer = db.getCustomerSync(order.customerId);
    mail.send(customer.email,'Your Order was placed successfully.')
}