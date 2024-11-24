function log (req, res, next) {
    console.log('Ndimo kwaka ...');
    next();
}

module.exports = log