const express = require('express');
const path = require('path');
//const app = require('express')();


const app = express();


app.use(express)

app.get('/' , (req, res) => {
    res.sendFile(path.resolve(__dirname , './2-express_tutorial/navbar-app/index.html'))
})


app.all('*' , (req, res) => {
    res.status(404).send("<h1>Not Found</h1>")
})




app.listen(5000 , () => {
    console.log('server is listening  on 5000')
})