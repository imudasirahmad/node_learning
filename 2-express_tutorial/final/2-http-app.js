const express = require('express');
//const app = require('express')();


const app = express()


app.get('/' , (req, res) => {
    res.status(200).send("That's not my home page")
})


app.get('/about' , (req, res) => {
    res.status(201).send("That's not my about page")
})


app.all('*' , (req, res) => {
    res.status(404).send("<h1>Not Found</h1>")
})

app.listen(5000 , () => {
    console.log('server is listening  on 5000')
})

//app.get  --read data
//app.post  --insert data
//app.put   --update data
//app.delete --delete data
//app.all    -- responsible for middleware || crucial part
//app.use
//app.listen

