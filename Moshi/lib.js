// const db = require('./db');
// const sendMail = require('./mail');

//testing number
module.exports.absolute = function (number) {
    return (number >= 0)? number: -number;
}

//Testing string
module.exports.greet = function(name){
    return 'Welcome' + name;
}

//Testing arrays
module.exports.getCurrencies = function(){
    return ['USD','RWF','RUBLE']
}  