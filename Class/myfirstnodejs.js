var server = require('http')
const { text } = require('stream/consumers')

server.createServer(function (req,res) {
    // res.writeHead(200, {'content-type': 'text/html'});
    // res.end('Hello world, This is Mr Ndi');
    res.write(req.url)
    res.end()
}).listen(3000)