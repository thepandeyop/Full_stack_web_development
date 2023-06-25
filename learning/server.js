const http = require('http');
const hostname = '127.0.0.1';
const port = 5500;

const server = http.createServer((req,res)=>{
    res.statusCode =300;
    res.setHeader('Content-type','text/plain')
    res.end('hello world\n');

})

server.listen(port,hostname,()=>{
    console.log(`server runnning on port as http://${hostname}:${port}`)
})