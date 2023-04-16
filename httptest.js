const http = require('http')

const server = http.createServer((request,response)=>{
    if (request.url==='/'){
        response.end("Welcome")
    }
    if (request.url==='/about'){
        response.end("Second")
    }
    else{
        response.end("Oops")
    }
})

server.listen(5000)