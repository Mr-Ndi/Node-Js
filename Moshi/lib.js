// const db = require('./db');
// const sendMail = require('./mail');

//testing number
module.exports.absolute = function (number) {
    if (number > 0) return number
    if (number < 0) return -number
    return 0;
}

//Testing string
module.exports.greet = function(name){
    return 'Welcome' + name;
}

//Testing arrays
module.exports.getCurrencies = function(){
    return ['USD','RWF','RUBLE']
}  