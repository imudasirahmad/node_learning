

const http = require('http');

const {readFileSync} = require('fs');

const homePage = readFileSync('./index.html')

const server =  http.createServer((req , res) => {
    console.log(req.method)
    console.log(req.url)

    const url = req.url;
    //home page
    if(url === '/'){
        res.writeHead(200 , {'content-type': 'text/html'})  // text/plain
        res.write('<h2>Home Page</h2>')
        res.end()
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200 , {'content-type': 'text/html'}) 
        res.write('<h2>About Page</h2>')
        res.end()
    }
    //404
    else{
        res.writeHead(404 , {'content-type': 'text/html'})  
        res.write('<h1>404-Not Found</h1>')
        res.end()
    }
   



})

server.listen(5000)