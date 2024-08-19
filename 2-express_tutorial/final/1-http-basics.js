

const http = require('http');

const {readFileSync} = require('fs');

const homePage = readFileSync('./2-express_tutorial/navbar-app/index.html')
const homeStyles = readFileSync('./2-express_tutorial/navbar-app/styles.css')
const homeImage = readFileSync('./2-express_tutorial/navbar-app/logo.svg')
const homeLogic = readFileSync('./2-express_tutorial/navbar-app/browser-app.js')


const server =  http.createServer((req , res) => {
    console.log(req.method)
    console.log(req.url)

    const url = req.url;
    //home page
    if(url === '/'){
        res.writeHead(200 , {'content-type': 'text/html'})  // text/plain
        res.write(homePage)
        res.end()
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200 , {'content-type': 'text/html'}) 
        res.write('<h2>About Page</h2>')
        res.end()
    }

    else if(url === '/styles.css'){
        res.writeHead(200 , {'content-type': 'text/css'}) 
        res.write(homeStyles)
        res.end()
    }//styles  
    else if(url === '/styles.css'){
        res.writeHead(200 , {'content-type': 'text/css'}) 
        res.write(homeStyles)
        res.end()
    }


    else if(url === '/logo.svg'){
        res.writeHead(200 , {'content-type': 'image/svg+xml'}) 
        res.write(homeImage)
        res.end()
    }


    else if(url === '/browser-app.js'){
        res.writeHead(200 , {'content-type': 'text/javascript'}) 
        res.write(homeLogic)
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