const express = require('express');
const path = require('path');
//const app = require('express')();


const app = express();

//setup static and middleware
app.use(express.static('./public'))

app.get('/' , (req, res) => {
    res.sendFile(path.resolve(__dirname , './2-express_tutorial/navbar-app/index.html'))
   //other way is adding to static assets
   //SSQ Server Side Rendering 
})


app.all('*' , (req, res) => {
    res.status(404).send("<h1>Not Found</h1>")
})




app.listen(3000 , () => {
    console.log('server is listening  on 3000')
})