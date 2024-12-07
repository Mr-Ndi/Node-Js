// const db = require('./db');
// const sendMail = require('./mail');

//testing number
module.exports.absolute = function (number) {
    return (number >= 0)? number: -number;
}

//Testing string
module.exports.greet = function(name){
    return 'Welcome ' + name;
}

//Testing arrays
module.exports.getCurrencies = function(){
    return ['USD','RWF','RUBLE']
}  
module.exports.getProduct = function(productId){
    return {id: productId, price:10, category: 'a'};
}

//testing an exceptions
module.exports.registerUser = function(username){
    if(!username) throw new Error('Username is required')
    
    return {id: new Date().getTime(), username:username}
}