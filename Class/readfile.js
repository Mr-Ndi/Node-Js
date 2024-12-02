var http = require('http')
var fs = require('fs')
http.createServer((req,res)=>{
    fs.readFile('myfirst.html', (err,data)=>{
        //res.writeHead(200,{'content-Type':'text/html'});
        res.write(data)
        return res.end()
    })    ;
}).listen(3000)