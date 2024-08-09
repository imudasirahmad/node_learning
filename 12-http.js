const http = require('http');


const server = http.createServer((req , res) =>{

    if(req.url === '/'){
        res.end('Welcome to Mudasir\'s Place')
    }
    
    if(req.url === '/about'){
        res.end('A Short Story')
    }
    
    
    res.end(
        `<h1>oops!!!!</h1><p>We  can't seem to find the page</p><a href="/">back home</a></>`
        );
})

server.listen(5000)